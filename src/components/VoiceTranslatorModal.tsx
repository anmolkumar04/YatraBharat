import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  X,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  ArrowLeftRight,
  Copy,
  Check,
  Globe2,
  Sparkles,
  Maximize2,
  Minimize2,
  AlertCircle,
  Radio,
  Loader2,
  RotateCcw,
  Key,
  Search,
  Trash2,
  Square,
  CheckCircle2,
  Compass,
  Car,
  Utensils,
  Landmark,
  ShieldAlert
} from 'lucide-react';
import {
  INDIAN_LANGUAGES,
  TRAVEL_PHRASES,
  TRAVEL_PHRASE_CATEGORIES,
  TravelPhraseItem,
  translateSecureBackend,
  checkBackendStatus,
  BackendTranslationResult
} from '../data/translationData';

interface VoiceTranslatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSourceLang?: string;
  initialTargetLang?: string;
}

export const VoiceTranslatorModal: React.FC<VoiceTranslatorModalProps> = ({
  isOpen,
  onClose,
  initialSourceLang = 'en',
  initialTargetLang = 'hi'
}) => {
  // 1. Language state
  const [sourceLangId, setSourceLangId] = useState<string>(initialSourceLang);
  const [targetLangId, setTargetLangId] = useState<string>(initialTargetLang);

  // 2. Input & Translation state
  const [inputText, setInputText] = useState<string>('Where is the nearest railway station or bus stand?');
  const [translatedText, setTranslatedText] = useState<string>('');
  const [phoneticText, setPhoneticText] = useState<string>('');
  const [detectedSource, setDetectedSource] = useState<string>('');
  const [matchType, setMatchType] = useState<'exact-phrase' | 'dictionary' | 'machine-translation' | 'backend-gemini' | 'fallback'>('exact-phrase');
  const [translationProvider, setTranslationProvider] = useState<string>('verified-phrasebook');
  const [isTranslating, setIsTranslating] = useState<boolean>(false);
  const [translationError, setTranslationError] = useState<{
    type: 'missing_key' | 'network' | 'generic';
    message: string;
  } | null>(null);

  // 3. Speech Recognition (STT) state
  const [isListening, setIsListening] = useState<boolean>(false);
  const [speechSupported, setSpeechSupported] = useState<boolean>(true);
  const [speechStatus, setSpeechStatus] = useState<'idle' | 'listening' | 'processing' | 'success' | 'error'>('idle');
  const [interimTranscript, setInterimTranscript] = useState<string>('');
  const [speechErrorNotice, setSpeechErrorNotice] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);

  // 4. Speech Synthesis (TTS) state
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [ttsSupported, setTtsSupported] = useState<boolean>(true);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [activeVoiceWarning, setActiveVoiceWarning] = useState<string | null>(null);

  // 5. Backend Status state
  const [backendConfigured, setBackendConfigured] = useState<boolean | null>(null);
  const [backendStatusInfo, setBackendStatusInfo] = useState<string>('');

  // 6. UI controls state
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [phraseSearchQuery, setPhraseSearchQuery] = useState<string>('');
  const [copiedOriginal, setCopiedOriginal] = useState<boolean>(false);
  const [copiedTranslated, setCopiedTranslated] = useState<boolean>(false);
  const [isDriverMode, setIsDriverMode] = useState<boolean>(false);
  const [showSetupGuide, setShowSetupGuide] = useState<boolean>(false);

  // Selected language metadata
  const sourceLang = useMemo(
    () => INDIAN_LANGUAGES.find((l) => l.id === sourceLangId) || INDIAN_LANGUAGES[1],
    [sourceLangId]
  );
  const targetLang = useMemo(
    () => INDIAN_LANGUAGES.find((l) => l.id === targetLangId) || INDIAN_LANGUAGES[0],
    [targetLangId]
  );

  // Category Icon mapper
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'directions':
        return <Compass className="w-3.5 h-3.5" />;
      case 'fares':
        return <Car className="w-3.5 h-3.5" />;
      case 'food':
        return <Utensils className="w-3.5 h-3.5" />;
      case 'hotels':
        return <Landmark className="w-3.5 h-3.5" />;
      case 'emergency':
        return <ShieldAlert className="w-3.5 h-3.5" />;
      default:
        return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  // Check browser capabilities and backend status on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasSpeechRec = 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
      setSpeechSupported(Boolean(hasSpeechRec));
      setTtsSupported('speechSynthesis' in window);

      if ('speechSynthesis' in window) {
        const updateVoices = () => {
          const voices = window.speechSynthesis.getVoices();
          setAvailableVoices(voices);
        };
        updateVoices();
        window.speechSynthesis.onvoiceschanged = updateVoices;
      }

      // Check backend status
      checkBackendStatus().then((status) => {
        setBackendConfigured(status.configured);
        setBackendStatusInfo(status.instructions || '');
      });
    }
  }, []);

  // Check voice matching whenever target language or voices change
  useEffect(() => {
    if (!availableVoices.length) return;
    const bcp47 = targetLang.bcp47.toLowerCase();
    const prefix = targetLang.id.toLowerCase();
    const hasVoice = availableVoices.some(
      (v) =>
        v.lang.toLowerCase() === bcp47 ||
        v.lang.toLowerCase().replace('_', '-') === bcp47 ||
        v.lang.toLowerCase().startsWith(prefix)
    );

    if (!hasVoice && targetLang.id !== 'en') {
      setActiveVoiceWarning(
        `Your device does not have a native voice engine installed for ${targetLang.name} (${targetLang.bcp47}). The browser will attempt fallback pronunciation, or you can read the romanized phonetic guide.`
      );
    } else {
      setActiveVoiceWarning(null);
    }
  }, [targetLang, availableVoices]);

  // Execute translation via secure backend
  const executeTranslation = async (textToTranslate: string, srcId: string, tgtId: string) => {
    const clean = textToTranslate.trim();
    if (!clean) {
      setTranslatedText('');
      setPhoneticText('');
      setIsTranslating(false);
      setTranslationError(null);
      return;
    }

    setIsTranslating(true);
    setTranslationError(null);

    try {
      const result: BackendTranslationResult = await translateSecureBackend(clean, srcId, tgtId);

      if (result.success && result.translatedText !== undefined) {
        setTranslatedText(result.translatedText);
        setPhoneticText(result.phonetic || `Spoken in ${targetLang.name}`);
        setDetectedSource(result.detectedSource || sourceLang.name);
        setMatchType(result.matchType || 'backend-gemini');
        setTranslationProvider(result.provider || 'gemini-3.8-flash');
        setTranslationError(null);
      } else {
        // Handle failure accurately (Never fake translation success)
        setTranslatedText('');
        setPhoneticText('');
        if (result.error === 'PROVIDER_NOT_CONFIGURED') {
          setTranslationError({
            type: 'missing_key',
            message:
              'Gemini Translation Provider is not configured on the server. Please add GEMINI_API_KEY in Settings > Secrets to enable live voice & text translation.'
          });
          setShowSetupGuide(true);
        } else if (result.error === 'NETWORK_ERROR') {
          setTranslationError({
            type: 'network',
            message: 'Network error connecting to translation service. Please check your connection.'
          });
        } else {
          setTranslationError({
            type: 'generic',
            message: result.message || 'Translation failed on the secure backend.'
          });
        }
      }
    } catch (err: any) {
      console.error('Translation execution error:', err);
      setTranslatedText('');
      setPhoneticText('');
      setTranslationError({
        type: 'generic',
        message: err.message || 'Unexpected translation error occurred.'
      });
    } finally {
      setIsTranslating(false);
    }
  };

  // Debounced translation on input text or language change
  useEffect(() => {
    const clean = inputText.trim();
    if (!clean) {
      setTranslatedText('');
      setPhoneticText('');
      setTranslationError(null);
      setIsTranslating(false);
      return;
    }

    const timer = setTimeout(() => {
      executeTranslation(clean, sourceLangId, targetLangId);
    }, 400);

    return () => clearTimeout(timer);
  }, [inputText, sourceLangId, targetLangId]);

  // Clean up when modal closes or unmounts
  useEffect(() => {
    if (!isOpen) {
      stopListening();
      stopSpeaking();
    }
  }, [isOpen]);

  // Speech Recognition: Start Listening
  const startListening = () => {
    setSpeechErrorNotice(null);
    stopSpeaking();

    if (typeof window === 'undefined') return;

    const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRec) {
      setSpeechSupported(false);
      setSpeechErrorNotice('Speech Recognition (Web Speech API) is not supported in this browser. Please use Chrome, Edge, or a modern Chromium browser, or type in the text area.');
      setSpeechStatus('error');
      return;
    }

    try {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch {
          // ignore
        }
      }

      const recognition = new SpeechRec();
      recognitionRef.current = recognition;
      recognition.lang = sourceLang.bcp47;
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsListening(true);
        setSpeechStatus('listening');
        setSpeechErrorNotice(null);
        setInterimTranscript('');
      };

      recognition.onresult = (event: any) => {
        let finalTrans = '';
        let interimTrans = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTrans += event.results[i][0].transcript;
          } else {
            interimTrans += event.results[i][0].transcript;
          }
        }

        if (interimTrans) {
          setInterimTranscript(interimTrans);
        }

        if (finalTrans) {
          setInputText(finalTrans);
          setInterimTranscript('');
          setSpeechStatus('processing');
        }
      };

      recognition.onerror = (event: any) => {
        console.warn('Speech recognition error event:', event.error);
        setIsListening(false);
        setSpeechStatus('error');
        setInterimTranscript('');

        switch (event.error) {
          case 'not-allowed':
          case 'service-not-allowed':
            setSpeechErrorNotice(
              'Microphone permission was denied. Please allow microphone access in your browser address bar (lock / site permissions icon) and tap the microphone again.'
            );
            break;
          case 'no-speech':
            setSpeechErrorNotice('No speech was detected. Please tap the microphone and speak closer.');
            break;
          case 'audio-capture':
            setSpeechErrorNotice('No microphone was detected on your system, or it is currently used by another app.');
            break;
          case 'network':
            setSpeechErrorNotice('Speech recognition network error. Please check your internet connection.');
            break;
          case 'language-not-supported':
            setSpeechErrorNotice(
              `Speech recognition in ${sourceLang.name} (${sourceLang.bcp47}) is not supported on this browser platform. You can type directly in the text box.`
            );
            break;
          case 'aborted':
            // user aborted, don't show error
            setSpeechStatus('idle');
            break;
          default:
            setSpeechErrorNotice(`Speech recognition error (${event.error}). You can type directly in the box below.`);
            break;
        }
      };

      recognition.onend = () => {
        setIsListening(false);
        setInterimTranscript('');
        if (speechStatus !== 'error') {
          setSpeechStatus('success');
          setTimeout(() => setSpeechStatus('idle'), 3000);
        }
      };

      recognition.start();
    } catch (err: any) {
      console.error('Failed to start speech recognition:', err);
      setIsListening(false);
      setSpeechStatus('error');
      setSpeechErrorNotice(
        'Could not initiate browser speech recognition. Please verify microphone permissions or use text input.'
      );
    }
  };

  // Speech Recognition: Stop Listening
  const stopListening = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // ignore
      }
      setIsListening(false);
      setInterimTranscript('');
      setSpeechStatus('idle');
    }
  };

  // Speech Synthesis: Speak Text
  const speakText = (text: string, langCode: string, languageName: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setTtsSupported(false);
      return;
    }

    window.speechSynthesis.cancel();

    const cleanText = text.trim();
    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = langCode;
    utterance.rate = 0.88; // Slower, clearer rate for travelers
    utterance.pitch = 1.0;

    // Search for matching voice
    const voices = window.speechSynthesis.getVoices();
    const exactMatch = voices.find(
      (v) => v.lang.toLowerCase() === langCode.toLowerCase() || v.lang.toLowerCase().replace('_', '-') === langCode.toLowerCase()
    );
    const prefixMatch = voices.find((v) => v.lang.toLowerCase().startsWith(langCode.split('-')[0].toLowerCase()));

    const selectedVoice = exactMatch || prefixMatch;
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = (e) => {
      console.warn('SpeechSynthesis playback error:', e);
      setIsSpeaking(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  // Speech Synthesis: Stop Speaking
  const stopSpeaking = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  // Swap Source & Target Languages
  const handleSwapLanguages = () => {
    stopListening();
    stopSpeaking();

    const oldSrc = sourceLangId;
    const oldTgt = targetLangId;
    setSourceLangId(oldTgt);
    setTargetLangId(oldSrc);

    // Swap texts so translated output becomes new source
    if (translatedText) {
      const newSourceText = translatedText;
      setInputText(newSourceText);
      setTranslatedText('');
      setPhoneticText('');
      executeTranslation(newSourceText, oldTgt, oldSrc);
    }
  };

  // Clear all fields
  const handleClear = () => {
    stopListening();
    stopSpeaking();
    setInputText('');
    setTranslatedText('');
    setPhoneticText('');
    setTranslationError(null);
    setSpeechErrorNotice(null);
    setSpeechStatus('idle');
  };

  // Copy to clipboard helper
  const handleCopy = (text: string, type: 'original' | 'translated') => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    if (type === 'original') {
      setCopiedOriginal(true);
      setTimeout(() => setCopiedOriginal(false), 2000);
    } else {
      setCopiedTranslated(true);
      setTimeout(() => setCopiedTranslated(false), 2000);
    }
  };

  // Select phrase from Phrasebook
  const handleSelectPhrase = (phrase: TravelPhraseItem) => {
    stopListening();
    stopSpeaking();

    const srcTranslation = phrase.translations[sourceLangId]?.text || phrase.english;
    const tgtTranslation = phrase.translations[targetLangId];

    setInputText(srcTranslation);

    if (tgtTranslation) {
      setTranslatedText(tgtTranslation.text);
      setPhoneticText(tgtTranslation.phonetic);
      setMatchType('exact-phrase');
      setTranslationProvider('verified-phrasebook');
      setTranslationError(null);
      setIsTranslating(false);
    } else {
      executeTranslation(srcTranslation, sourceLangId, targetLangId);
    }
  };

  // Filtered phrases by category & search query
  const filteredPhrases = useMemo(() => {
    return TRAVEL_PHRASES.filter((p) => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      if (!matchesCategory) return false;

      if (!phraseSearchQuery.trim()) return true;
      const q = phraseSearchQuery.toLowerCase().trim();
      const inEnglish = p.english.toLowerCase().includes(q);
      const inSource = (p.translations[sourceLangId]?.text || '').toLowerCase().includes(q);
      const inTarget = (p.translations[targetLangId]?.text || '').toLowerCase().includes(q);
      return inEnglish || inSource || inTarget;
    });
  }, [activeCategory, phraseSearchQuery, sourceLangId, targetLangId]);

  if (!isOpen) return null;

  return (
    <div
      id="voice-translator-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="translator-modal-title"
    >
      <div
        className={`relative w-full ${
          isDriverMode ? 'max-w-3xl' : 'max-w-4xl'
        } bg-[#FAF7F2] text-[#13221B] rounded-3xl shadow-2xl border border-[#236B54]/40 overflow-hidden flex flex-col max-h-[94vh] transition-all`}
      >
        {/* Top Header Bar */}
        <div className="bg-[#0B2B20] text-white px-4 sm:px-8 py-4 flex items-center justify-between border-b border-[#185240] flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E25822] via-[#F97316] to-[#185240] p-0.5 flex items-center justify-center flex-shrink-0">
              <div className="w-full h-full bg-[#0B2B20] rounded-[10px] flex items-center justify-center">
                <Globe2 className="w-5 h-5 text-[#E25822]" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="translator-modal-title" className="font-serif-title text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Voice <span className="text-[#E25822]">Translator</span>
                </h2>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-[#E25822]/20 text-[#FF9E68] border border-[#E25822]/40 rounded-full">
                  14 Indian Languages
                </span>
              </div>
              <p className="text-[11px] text-[#A7C2B5]">
                Microphone speech recognition, secure neural translation & native voice synthesis
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Driver Large Display Mode Toggle */}
            <button
              id="driver-mode-toggle-btn"
              onClick={() => setIsDriverMode(!isDriverMode)}
              className={`p-2 rounded-xl transition-colors cursor-pointer text-xs flex items-center gap-1.5 ${
                isDriverMode
                  ? 'bg-[#E25822] text-white font-bold'
                  : 'bg-[#113D2F] hover:bg-[#185240] text-[#E2EBE6] hover:text-white'
              }`}
              title={isDriverMode ? 'Exit Large Driver Display' : 'Large Screen Mode for Drivers & Shopkeepers'}
            >
              {isDriverMode ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{isDriverMode ? 'Normal View' : 'Driver Card Mode'}</span>
            </button>

            {/* Close Button */}
            <button
              id="close-translator-btn"
              onClick={onClose}
              className="p-2 rounded-xl bg-[#113D2F] hover:bg-[#185240] text-white transition-colors cursor-pointer"
              aria-label="Close Voice Translator"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto space-y-5 flex-1">
          {/* Driver Mode Display Banner */}
          {isDriverMode && (
            <div className="p-3 bg-[#E25822]/10 border border-[#E25822]/30 rounded-2xl flex items-center justify-between text-xs text-[#C84614]">
              <span className="font-medium">
                🚗 Driver Card Mode Active: High-contrast large text designed for direct viewing by drivers, conductors, and local shopkeepers.
              </span>
              <button
                onClick={() => setIsDriverMode(false)}
                className="underline font-bold hover:text-[#9F320B] cursor-pointer"
              >
                Exit
              </button>
            </div>
          )}

          {/* Backend API Configuration Setup Notice (Shown if key is missing or not configured) */}
          {(showSetupGuide || backendConfigured === false || translationError?.type === 'missing_key') && (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 text-amber-950 text-xs space-y-2 shadow-sm animate-in fade-in">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                  <Key className="w-4 h-4 text-amber-600" />
                  <span>Backend Translation API Setup Required</span>
                </div>
                <button
                  onClick={() => setShowSetupGuide(false)}
                  className="text-amber-800 hover:text-amber-950 font-semibold cursor-pointer"
                >
                  Dismiss
                </button>
              </div>

              <p className="leading-relaxed text-amber-900">
                To translate any custom spoken voice or typed text in real time, configure your Gemini API credentials in the backend:
              </p>

              <div className="bg-white/80 p-3 rounded-xl border border-amber-200 text-amber-900 space-y-1">
                <p className="font-semibold">Quick Setup Steps:</p>
                <ol className="list-decimal list-inside space-y-0.5 text-amber-950">
                  <li>Open the AI Studio <strong>Settings</strong> panel (gear icon).</li>
                  <li>Go to <strong>Secrets</strong> and add your <code className="bg-amber-100 px-1 py-0.5 rounded font-mono text-[11px]">GEMINI_API_KEY</code>.</li>
                  <li>The server-side endpoint (<code className="bg-amber-100 px-1 py-0.5 rounded font-mono text-[11px]">/api/translate</code>) will instantly power live AI translation across all Indian languages.</li>
                </ol>
              </div>

              <p className="text-[11px] text-amber-800 italic">
                ℹ️ The curated Travel Phrasebook below remains 100% operational offline without an API key!
              </p>
            </div>
          )}

          {/* Microphone Status Banner (Listening / Processing / Success / Error) */}
          {isListening && (
            <div className="p-3.5 rounded-2xl bg-red-500 text-white text-xs flex items-center justify-between shadow-lg animate-pulse">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-white animate-ping" />
                <span className="font-bold text-sm">
                  Listening in {sourceLang.name}... Speak into your microphone now!
                </span>
              </div>
              <button
                id="stop-listening-bar-btn"
                onClick={stopListening}
                className="px-3 py-1 bg-white text-red-600 font-bold rounded-lg hover:bg-stone-100 cursor-pointer text-xs"
              >
                Stop Recording
              </button>
            </div>
          )}

          {/* Speech Error Banner */}
          {speechErrorNotice && (
            <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-900 text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <span className="font-semibold">{speechErrorNotice}</span>
              </div>
              <button
                onClick={() => setSpeechErrorNotice(null)}
                className="text-red-700 hover:text-red-900 font-bold ml-2 cursor-pointer"
              >
                Dismiss
              </button>
            </div>
          )}

          {/* Missing Voice Warning Banner */}
          {activeVoiceWarning && (
            <div className="p-3 rounded-2xl bg-stone-100 border border-stone-200 text-stone-700 text-xs flex items-start gap-2">
              <VolumeX className="w-4 h-4 text-stone-500 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <span className="font-medium">{activeVoiceWarning}</span>
              </div>
              <button
                onClick={() => setActiveVoiceWarning(null)}
                className="text-stone-500 hover:text-stone-800 font-bold ml-2 cursor-pointer"
              >
                ✕
              </button>
            </div>
          )}

          {/* Language Selector Strip */}
          <div className="bg-white p-4 rounded-2xl border border-[#E0D7CC] shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Spoken / Input Language */}
            <div className="flex-1">
              <label htmlFor="source-lang-select" className="block text-[11px] font-bold text-[#5C7065] uppercase tracking-wider mb-1.5">
                Source Language (You Speak / Type)
              </label>
              <select
                id="source-lang-select"
                value={sourceLangId}
                onChange={(e) => setSourceLangId(e.target.value)}
                className="w-full bg-[#FAF7F2] border border-[#D5DDD8] focus:border-[#E25822] text-[#13221B] font-semibold text-sm rounded-xl px-3 py-2.5 outline-none cursor-pointer"
              >
                {INDIAN_LANGUAGES.map((lang) => (
                  <option key={lang.id} value={lang.id}>
                    {lang.name} — {lang.nativeName} ({lang.script})
                  </option>
                ))}
              </select>
            </div>

            {/* Swap Languages Button */}
            <div className="flex items-center justify-center pt-2 sm:pt-4">
              <button
                id="swap-languages-btn"
                onClick={handleSwapLanguages}
                className="p-3 rounded-full bg-[#FAF7F2] hover:bg-[#E25822] text-[#185240] hover:text-white border border-[#D5DDD8] hover:border-[#E25822] shadow-sm transition-all transform hover:rotate-180 cursor-pointer"
                title="Swap source and target languages"
                aria-label="Swap source and target languages"
              >
                <ArrowLeftRight className="w-4 h-4" />
              </button>
            </div>

            {/* Translation / Output Language */}
            <div className="flex-1">
              <label htmlFor="target-lang-select" className="block text-[11px] font-bold text-[#5C7065] uppercase tracking-wider mb-1.5">
                Target Language (Local Indian Language)
              </label>
              <select
                id="target-lang-select"
                value={targetLangId}
                onChange={(e) => setTargetLangId(e.target.value)}
                className="w-full bg-[#FAF7F2] border border-[#D5DDD8] focus:border-[#E25822] text-[#13221B] font-semibold text-sm rounded-xl px-3 py-2.5 outline-none cursor-pointer"
              >
                {INDIAN_LANGUAGES.map((lang) => (
                  <option key={lang.id} value={lang.id}>
                    {lang.name} — {lang.nativeName} ({lang.script})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Translation Interactive Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Input Card */}
            <div className="bg-white rounded-2xl border border-[#E0D7CC] p-4 sm:p-5 flex flex-col shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#F0EAE1] mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#185240]" />
                  <span className="text-xs font-bold text-[#185240]">
                    {sourceLang.name} ({sourceLang.nativeName})
                  </span>
                  {speechStatus === 'listening' && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-semibold animate-pulse">
                      Recording...
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleCopy(inputText, 'original')}
                    disabled={!inputText}
                    className="p-1.5 rounded-lg text-[#5C7065] hover:text-[#185240] hover:bg-[#FAF7F2] transition-colors cursor-pointer disabled:opacity-40"
                    title="Copy source text"
                    aria-label="Copy source text"
                  >
                    {copiedOriginal ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                  {inputText && (
                    <button
                      onClick={handleClear}
                      className="p-1.5 rounded-lg text-[#5C7065] hover:text-red-600 hover:bg-[#FAF7F2] transition-colors text-xs font-semibold cursor-pointer flex items-center gap-1"
                      title="Clear text"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Clear</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Text Input Area */}
              <div className="relative">
                <textarea
                  id="voice-translator-input-area"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={`Tap the microphone to speak in ${sourceLang.name}, or type here...`}
                  rows={isDriverMode ? 3 : 4}
                  className="w-full text-base sm:text-lg text-[#13221B] placeholder-[#9EAEA5] resize-none outline-none bg-transparent font-sans leading-relaxed"
                />

                {/* Interim speech live transcription display */}
                {interimTranscript && (
                  <div className="text-xs text-[#E25822] font-semibold italic mt-1 animate-pulse">
                    Live speech: "{interimTranscript}..."
                  </div>
                )}
              </div>

              {/* Input Action Controls (Mic + Speak Input + Stop) */}
              <div className="pt-4 mt-auto border-t border-[#F0EAE1] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {/* Microphone Button */}
                  <button
                    id="mic-record-btn"
                    onClick={isListening ? stopListening : startListening}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      isListening
                        ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse shadow-lg shadow-red-500/30'
                        : 'bg-[#0B2B20] hover:bg-[#185240] text-white shadow-md'
                    }`}
                    title={isListening ? 'Tap to stop recording' : `Speak in ${sourceLang.name}`}
                  >
                    {isListening ? (
                      <>
                        <MicOff className="w-4 h-4 animate-spin" />
                        <span>Stop Listening</span>
                      </>
                    ) : (
                      <>
                        <Mic className="w-4 h-4 text-[#FF9E68]" />
                        <span>Speak ({sourceLang.name})</span>
                      </>
                    )}
                  </button>

                  {/* Listen to input text */}
                  {inputText && (
                    <button
                      onClick={() => speakText(inputText, sourceLang.bcp47, sourceLang.name)}
                      className="p-2 rounded-full bg-[#FAF7F2] hover:bg-[#185240]/10 text-[#185240] border border-[#D5DDD8] transition-colors cursor-pointer"
                      title={`Listen to input in ${sourceLang.name}`}
                      aria-label="Listen to input speech"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  )}

                  {/* Stop playback button if currently speaking */}
                  {isSpeaking && (
                    <button
                      onClick={stopSpeaking}
                      className="p-2 rounded-full bg-red-100 text-red-600 border border-red-200 transition-colors cursor-pointer"
                      title="Stop audio speech playback"
                      aria-label="Stop audio speech playback"
                    >
                      <VolumeX className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <span className="text-[11px] text-[#7A9386]">
                  {inputText.length} characters
                </span>
              </div>
            </div>

            {/* Translation Output Card */}
            <div
              className={`rounded-2xl border p-4 sm:p-5 flex flex-col shadow-sm transition-all ${
                isDriverMode
                  ? 'bg-[#113D2F] text-white border-[#236B54]'
                  : 'bg-white border-[#E0D7CC]'
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-black/5 dark:border-white/10 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E25822]" />
                  <span
                    className={`text-xs font-bold ${
                      isDriverMode ? 'text-[#FF9E68]' : 'text-[#C84614]'
                    }`}
                  >
                    {targetLang.name} ({targetLang.nativeName})
                  </span>

                  {isTranslating ? (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 flex items-center gap-1 font-medium">
                      <Loader2 className="w-3 h-3 animate-spin text-amber-700" />
                      <span>Translating...</span>
                    </span>
                  ) : translationError ? (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-100 text-red-800 font-semibold flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 text-red-600" />
                      <span>Translation Error</span>
                    </span>
                  ) : (
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                        matchType === 'exact-phrase'
                          ? 'bg-emerald-100 text-emerald-800'
                          : matchType === 'backend-gemini'
                          ? 'bg-purple-100 text-purple-900 border border-purple-200'
                          : 'bg-stone-100 text-stone-700'
                      }`}
                    >
                      {matchType === 'exact-phrase'
                        ? 'Verified Travel Phrasebook'
                        : matchType === 'backend-gemini'
                        ? 'Gemini Neural Translator'
                        : 'Dictionary Match'}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleCopy(translatedText, 'translated')}
                    disabled={!translatedText}
                    className={`p-1.5 rounded-lg transition-colors cursor-pointer disabled:opacity-40 ${
                      isDriverMode ? 'hover:bg-white/10 text-white' : 'hover:bg-[#FAF7F2] text-[#5C7065]'
                    }`}
                    title="Copy translated text"
                    aria-label="Copy translated text"
                  >
                    {copiedTranslated ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Large Output Typography for Local Travel */}
              <div className="flex-1 flex flex-col justify-center py-2">
                {isTranslating ? (
                  <div className="py-8 flex flex-col items-center justify-center gap-2 text-stone-500">
                    <Loader2 className="w-6 h-6 animate-spin text-[#E25822]" />
                    <span className="text-xs font-semibold">Processing translation on secure backend...</span>
                  </div>
                ) : translationError ? (
                  <div className="py-6 px-3 rounded-xl bg-red-50/50 border border-red-200 text-red-800 text-xs space-y-2">
                    <p className="font-bold flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                      {translationError.message}
                    </p>
                    {translationError.type === 'missing_key' && (
                      <button
                        onClick={() => setShowSetupGuide(true)}
                        className="text-xs font-bold text-[#E25822] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <Key className="w-3.5 h-3.5" />
                        View API Setup Instructions
                      </button>
                    )}
                  </div>
                ) : translatedText ? (
                  <>
                    <p
                      id="translated-output-text"
                      className={`font-bold leading-relaxed ${
                        isDriverMode ? 'text-2xl sm:text-3xl text-white' : 'text-xl sm:text-2xl text-[#0B2B20]'
                      }`}
                    >
                      {translatedText}
                    </p>
                    {phoneticText && (
                      <p
                        className={`text-xs sm:text-sm mt-2.5 font-medium italic ${
                          isDriverMode ? 'text-[#A7C2B5]' : 'text-[#647C72]'
                        }`}
                      >
                        🔊 Phonetic Pronunciation: <strong>{phoneticText}</strong>
                      </p>
                    )}
                  </>
                ) : (
                  <div className="py-6 text-center text-[#7A9386] text-sm">
                    Speak with the microphone or choose a phrase from the travel phrasebook below.
                  </div>
                )}
              </div>

              {/* Output Action Controls (Listen to Translation) */}
              <div className="pt-4 mt-auto border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    id="listen-translation-btn"
                    onClick={() => {
                      if (isSpeaking) {
                        stopSpeaking();
                      } else {
                        speakText(translatedText, targetLang.bcp47, targetLang.name);
                      }
                    }}
                    disabled={!translatedText || isTranslating}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      !translatedText || isTranslating
                        ? 'opacity-40 cursor-not-allowed bg-stone-200 text-stone-600'
                        : isSpeaking
                        ? 'bg-red-500 text-white animate-pulse'
                        : 'bg-gradient-to-r from-[#E25822] to-[#D95B16] hover:from-[#C84614] hover:to-[#B53B0B] text-white shadow-md shadow-[#E25822]/20'
                    }`}
                    title={`Pronounce in ${targetLang.name}`}
                  >
                    {isSpeaking ? (
                      <>
                        <VolumeX className="w-4 h-4" />
                        <span>Stop Voice</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-4 h-4 text-white" />
                        <span>Speak ({targetLang.name})</span>
                      </>
                    )}
                  </button>

                  {isSpeaking && (
                    <button
                      onClick={stopSpeaking}
                      className="p-2 rounded-full bg-red-100 text-red-600 border border-red-200 cursor-pointer"
                      title="Stop audio playback"
                    >
                      <Square className="w-3.5 h-3.5 fill-current" />
                    </button>
                  )}
                </div>

                <button
                  id="driver-mode-text-btn"
                  onClick={() => setIsDriverMode(!isDriverMode)}
                  className={`text-xs font-semibold underline transition-colors cursor-pointer ${
                    isDriverMode ? 'text-[#FF9E68]' : 'text-[#C84614]'
                  }`}
                >
                  {isDriverMode ? 'Exit Driver Mode' : 'Driver Large Display'}
                </button>
              </div>
            </div>
          </div>

          {/* Curated Travel Phrases Library */}
          {!isDriverMode && (
            <div className="bg-white rounded-2xl border border-[#E0D7CC] p-5 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="font-serif-title text-base font-bold text-[#113D2F]">
                    Essential Travel Phrasebook
                  </h3>
                  <p className="text-xs text-[#647C72]">
                    Curated authentic expressions for transport, directions, food, hotels, and emergencies across India
                  </p>
                </div>

                {/* Phrase Search Input */}
                <div className="relative min-w-[220px]">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    type="text"
                    value={phraseSearchQuery}
                    onChange={(e) => setPhraseSearchQuery(e.target.value)}
                    placeholder="Search travel phrases..."
                    className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#FAF7F2] border border-[#D5DDD8] focus:border-[#E25822] rounded-xl outline-none"
                  />
                </div>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
                {TRAVEL_PHRASE_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                      activeCategory === cat.id
                        ? 'bg-[#0B2B20] text-white font-semibold'
                        : 'bg-[#FAF7F2] text-[#475E54] hover:bg-[#EAE2D5]'
                    }`}
                  >
                    {getCategoryIcon(cat.id)}
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>

              {/* Phrase Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-56 overflow-y-auto pr-1">
                {filteredPhrases.length === 0 ? (
                  <div className="col-span-2 py-6 text-center text-xs text-stone-500">
                    No phrases found matching "{phraseSearchQuery}". Try another keyword or switch categories.
                  </div>
                ) : (
                  filteredPhrases.map((phrase) => {
                    const phraseTargetTrans = phrase.translations[targetLangId];
                    return (
                      <button
                        key={phrase.id}
                        onClick={() => handleSelectPhrase(phrase)}
                        className="text-left p-3 rounded-xl bg-[#FAF7F2] hover:bg-[#F3ECE0] border border-[#E5DFD5] hover:border-[#E25822]/40 transition-all group cursor-pointer flex flex-col justify-between"
                      >
                        <div className="text-xs font-medium text-[#13221B] group-hover:text-[#E25822] transition-colors mb-1.5">
                          "{phrase.english}"
                        </div>
                        {phraseTargetTrans && (
                          <div className="text-xs font-semibold text-[#185240] truncate flex items-center gap-1">
                            <span className="text-[#E25822]">👉</span>
                            <span>{phraseTargetTrans.text}</span>
                          </div>
                        )}
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          )}

          {/* Secure Full-Stack Architecture Information */}
          <div className="p-4 rounded-2xl bg-[#F4EFE6] border border-[#E0D7CC] text-xs space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-[#185240]">
                <Sparkles className="w-4 h-4 text-[#E25822]" />
                <span>Secure Full-Stack Indian Language Translation Engine</span>
              </div>
              <span className="text-[11px] font-semibold text-[#185240]">
                Status: {backendConfigured ? '🟢 Live API Ready' : '🟡 Offline Phrasebook Active'}
              </span>
            </div>

            <p className="text-[#5C7065] leading-relaxed">
              <strong>Zero Browser API Keys:</strong> Speech-to-text uses the W3C Web Speech API, with translations executed through our secure backend proxy (<code className="font-mono text-[11px] bg-white px-1 py-0.5 rounded">/api/translate</code>) using Gemini 3.8 Flash and verified travel phrasebooks. No secrets or credentials are ever exposed to the client browser.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#FAF7F2] border-t border-[#EAE2D5] px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs text-[#5C7065] flex-shrink-0">
          <div className="flex items-center gap-2">
            <Radio className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            <span>Emergency 24x7 Multi-lingual Tourist Helpline: <strong className="text-[#E25822]">1363 / 112</strong></span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleClear}
              className="px-3 py-1.5 rounded-xl border border-stone-300 hover:bg-stone-200 text-stone-700 font-semibold transition-colors cursor-pointer"
            >
              Clear
            </button>
            <button
              id="done-modal-btn"
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl bg-[#113D2F] hover:bg-[#185240] text-white font-semibold transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
