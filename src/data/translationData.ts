// YatraBharat — Multi-lingual Indian Travel Translation Engine (Non-AI Neural Machine Translation)
// Supports 14 major Indian languages with Web Speech API BCP-47 locale tags,
// offline curated travel phrasebooks, travel dictionary, and free non-AI Machine Translation API.

export interface LanguageOption {
  id: string;
  name: string;
  nativeName: string;
  bcp47: string;
  ttsVoiceLocale?: string[];
  script: string;
  sampleGreeting: string;
}

export const INDIAN_LANGUAGES: LanguageOption[] = [
  {
    id: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    bcp47: 'hi-IN',
    ttsVoiceLocale: ['hi-IN', 'hi'],
    script: 'Devanagari',
    sampleGreeting: 'नमस्ते (Namaste)'
  },
  {
    id: 'en',
    name: 'English (India)',
    nativeName: 'English',
    bcp47: 'en-IN',
    ttsVoiceLocale: ['en-IN', 'en-GB', 'en-US', 'en'],
    script: 'Latin',
    sampleGreeting: 'Hello / Welcome'
  },
  {
    id: 'bn',
    name: 'Bengali',
    nativeName: 'বাংলা',
    bcp47: 'bn-IN',
    ttsVoiceLocale: ['bn-IN', 'bn-BD', 'bn'],
    script: 'Bengali',
    sampleGreeting: 'নমস্কার (Nomoshkar)'
  },
  {
    id: 'ta',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    bcp47: 'ta-IN',
    ttsVoiceLocale: ['ta-IN', 'ta-LK', 'ta'],
    script: 'Tamil',
    sampleGreeting: 'வணக்கம் (Vanakkam)'
  },
  {
    id: 'te',
    name: 'Telugu',
    nativeName: 'తెలుగు',
    bcp47: 'te-IN',
    ttsVoiceLocale: ['te-IN', 'te'],
    script: 'Telugu',
    sampleGreeting: 'నమస్కారం (Namaskaram)'
  },
  {
    id: 'mr',
    name: 'Marathi',
    nativeName: 'मराठी',
    bcp47: 'mr-IN',
    ttsVoiceLocale: ['mr-IN', 'mr'],
    script: 'Devanagari',
    sampleGreeting: 'नमस्कार (Namaskar)'
  },
  {
    id: 'gu',
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
    bcp47: 'gu-IN',
    ttsVoiceLocale: ['gu-IN', 'gu'],
    script: 'Gujarati',
    sampleGreeting: 'નમસ્તે (Namaste)'
  },
  {
    id: 'kn',
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
    bcp47: 'kn-IN',
    ttsVoiceLocale: ['kn-IN', 'kn'],
    script: 'Kannada',
    sampleGreeting: 'ನಮಸ್ಕಾರ (Namaskara)'
  },
  {
    id: 'ml',
    name: 'Malayalam',
    nativeName: 'മലയാളം',
    bcp47: 'ml-IN',
    ttsVoiceLocale: ['ml-IN', 'ml'],
    script: 'Malayalam',
    sampleGreeting: 'നമസ്കാരം (Namaskaram)'
  },
  {
    id: 'pa',
    name: 'Punjabi',
    nativeName: 'ਪੰਜਾਬੀ',
    bcp47: 'pa-IN',
    ttsVoiceLocale: ['pa-IN', 'pa'],
    script: 'Gurmukhi',
    sampleGreeting: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ (Sat Sri Akal)'
  },
  {
    id: 'ur',
    name: 'Urdu',
    nativeName: 'اردو',
    bcp47: 'ur-IN',
    ttsVoiceLocale: ['ur-IN', 'ur-PK', 'ur'],
    script: 'Perso-Arabic',
    sampleGreeting: 'السلام علیکم (Adaab / Assalamu Alaikum)'
  },
  {
    id: 'or',
    name: 'Odia',
    nativeName: 'ଓଡ଼ିଆ',
    bcp47: 'or-IN',
    ttsVoiceLocale: ['or-IN', 'or'],
    script: 'Odia',
    sampleGreeting: 'ନମସ୍କାର (Namaskara)'
  },
  {
    id: 'as',
    name: 'Assamese',
    nativeName: 'অসমীয়া',
    bcp47: 'as-IN',
    ttsVoiceLocale: ['as-IN', 'as'],
    script: 'Bengali-Assamese',
    sampleGreeting: 'নমস্কাৰ (Nomoskar)'
  },
  {
    id: 'sa',
    name: 'Sanskrit',
    nativeName: 'संस्कृतम्',
    bcp47: 'sa-IN',
    ttsVoiceLocale: ['sa-IN', 'hi-IN', 'sa'],
    script: 'Devanagari',
    sampleGreeting: 'नमो नमः (Namo Namah)'
  }
];

export interface PhraseTranslation {
  text: string;
  phonetic: string;
}

export interface TravelPhraseItem {
  id: string;
  category: 'directions' | 'fares' | 'food' | 'hotels' | 'emergency';
  english: string;
  translations: Record<string, PhraseTranslation>;
}

export const TRAVEL_PHRASE_CATEGORIES = [
  { id: 'all', label: 'All Phrases', icon: 'Sparkles' },
  { id: 'directions', label: 'Directions & Routes', icon: 'Compass' },
  { id: 'fares', label: 'Transport & Fares', icon: 'Car' },
  { id: 'food', label: 'Food & Dining', icon: 'Utensils' },
  { id: 'hotels', label: 'Hotel & Stay', icon: 'Landmark' },
  { id: 'emergency', label: 'Safety & Emergency', icon: 'ShieldAlert' }
] as const;

export const TRAVEL_PHRASES: TravelPhraseItem[] = [
  // 1. DIRECTIONS & ROUTES
  {
    id: 'dir-1',
    category: 'directions',
    english: 'Where is the nearest railway station or bus stand?',
    translations: {
      en: { text: 'Where is the nearest railway station or bus stand?', phonetic: 'Where is the nearest railway station or bus stand?' },
      hi: { text: 'सबसे नज़दीकी रेलवे स्टेशन या बस स्टैंड कहाँ है?', phonetic: 'Sabse nazdeeki railway station ya bus stand kahan hai?' },
      bn: { text: 'সবচেয়ে কাছের রেলওয়ে স্টেশন বা বাস স্ট্যান্ড কোথায়?', phonetic: 'Shobcheye kacher railway station ba bus stand kothay?' },
      ta: { text: 'அருகிலுள்ள ரயில் நிலையம் அல்லது பேருந்து நிலையம் எங்கே உள்ளது?', phonetic: 'Arugilulla rail nilaiyam allathu perundhu nilaiyam enge ullathu?' },
      te: { text: 'సమీపంలోని రైల్వే స్టేషన్ లేదా బస్ స్టాండ్ ఎక్కడ ఉంది?', phonetic: 'Sameepam loni railway station leda bus stand ekkada undi?' },
      mr: { text: 'सर्वात जवळचे रेल्वे स्टेशन किंवा बस स्थानक कुठे आहे?', phonetic: 'Sarvat javalche railway station kinva bus sthanak kuthe aahe?' },
      gu: { text: 'સૌથી નજીકનું રેલ્વે સ્ટેશન કે બસ સ્ટેન્ડ ક્યાં છે?', phonetic: 'Sauthi najeek nu railway station ke bus stand kyan chhe?' },
      kn: { text: 'ಹತ್ತಿರದ ರೈಲ್ವೆ ನಿಲ್ದಾಣ ಅಥವಾ ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?', phonetic: 'Hattirada railway nildana athava bus nildana ellide?' },
      ml: { text: 'ഏറ്റവും അടുത്തുള്ള റെയിൽവേ സ്റ്റേഷനോ ബസ് സ്റ്റാൻഡോ എവിടെയാണ്?', phonetic: 'Ettavum aduthulla railway station-o bus stand-o evideyannu?' },
      pa: { text: 'ਸਭ ਤੋਂ ਨੇੜਲਾ ਰੇਲਵੇ ਸਟੇਸ਼ਨ ਜਾਂ ਬੱਸ ਅੱਡਾ ਕਿੱਥੇ ਹੈ?', phonetic: 'Sabh ton nedla railway station jaan bus adda kitthe hai?' },
      ur: { text: 'قریب ترین ریلوے اسٹیشن یا بس اسٹینڈ کہاں ہے؟', phonetic: 'Qareeb tareen railway station ya bus stand kahan hai?' },
      or: { text: 'ନିକଟତମ ରେଳ ଷ୍ଟେସନ କିମ୍ବା ବସ୍ ଷ୍ଟାଣ୍ଡ କେଉଁଠି ଅଛି?', phonetic: 'Nikatatama rela station kimba bus stand keunthi achhi?' },
      as: { text: 'আটাইতকৈ ওচৰৰ ৰেল ষ্টেচন বা বাছ আস্থান ক\'ত আছে?', phonetic: 'Ataitkoi osoror rail station ba bus asthan kot ase?' },
      sa: { text: 'निकटतमं रेलस्थानकं बसस्थानकं वा कुत्र अस्ति?', phonetic: 'Nikatatamam rail-sthanakam bus-sthanakam va kutra asti?' }
    }
  },
  {
    id: 'dir-2',
    category: 'directions',
    english: 'How far is the temple / monument from here?',
    translations: {
      en: { text: 'How far is the temple / monument from here?', phonetic: 'How far is the temple or monument from here?' },
      hi: { text: 'यहाँ से मंदिर या स्मारक कितनी दूर है?', phonetic: 'Yahan se mandir ya smarak kitni door hai?' },
      bn: { text: 'এখান থেকে মন্দির বা স্মৃতিসৌধ কতটা দূরে?', phonetic: 'Ekhan theke mondir ba smritishoudho kotota dure?' },
      ta: { text: 'இங்கிருந்து கோவில் அல்லது வரலாற்று சின்னம் எவ்வளவு தூரம்?', phonetic: 'Ingirundhu kovil allathu varalaatru chinnam evvalavu dhooram?' },
      te: { text: 'ఇక్కడి నుంచి గుడి లేదా చారిత్రక కట్టడం ఎంత దూరం?', phonetic: 'Ikkadi nunchi gudi leda charitraka kattadam entha dooram?' },
      mr: { text: 'येथून मंदिर किंवा स्मारक किती लांब आहे?', phonetic: 'Yethun mandir kinva smarak kiti laamb aahe?' },
      gu: { text: 'અહીંથી મંદિર કે સ્મારક કેટલું દૂર છે?', phonetic: 'Ahin thi mandir ke smarak ketlu door chhe?' },
      kn: { text: 'ಇಲ್ಲಿಂದ ದೇವಸ್ಥಾನ ಅಥವಾ ಸ್ಮಾರಕ ಎಷ್ಟು ದೂರವಿದೆ?', phonetic: 'Illinda devasthana athava smaraka eshtu dooravide?' },
      ml: { text: 'ഇവിടെനിന്ന് ക്ഷേത്രമോ ചരിത്ര സ്മാരകമോ എത്ര ദൂരെയാണ്?', phonetic: 'Ivide ninnu kshethramo charithra smarakamo ethra dooreyannu?' },
      pa: { text: 'ਇੱਥੋਂ ਮੰਦਰ ਜਾਂ ਸਮਾਰਕ ਕਿੰਨੀ ਦੂਰ ਹੈ?', phonetic: 'Itthon mandar jaan smarak kinni door hai?' },
      ur: { text: 'یہاں سے مندر یا تاریخی عمارت کتنی دور ہے؟', phonetic: 'Yahan se mandir ya tareekhi imaarat kitni door hai?' },
      or: { text: 'ଏଠାରୁ ମନ୍ଦିର ବା ସ୍ମାରକ କେତେ ଦୂର?', phonetic: 'Etharu mandira ba smaraka kete doora?' },
      as: { text: 'ইয়ালৈকে মন্দিৰ বা স্মৃতিসৌধ কিমান দূৰত?', phonetic: 'Iyaloi mondir ba smritisoudho kiman durot?' },
      sa: { text: 'इतः मन्दिरं स्मारकं वा कियत् दूरे अस्ति?', phonetic: 'Itah mandiram smarakam va kiyat doore asti?' }
    }
  },
  {
    id: 'dir-3',
    category: 'directions',
    english: 'Can you show me the route on Google Maps?',
    translations: {
      en: { text: 'Can you show me the route on Google Maps?', phonetic: 'Can you show me the route on Google Maps?' },
      hi: { text: 'क्या आप मुझे गूगल मैप्स पर रास्ता दिखा सकते हैं?', phonetic: 'Kya aap mujhe Google Maps par raasta dikha sakte hain?' },
      bn: { text: 'আপনি কি আমাকে গুগল ম্যাপে রাস্তাটি দেখাতে পারেন?', phonetic: 'Apni ki amake Google Maps-e rastati dekhate paren?' },
      ta: { text: 'கூகுள் மேப்ஸில் வழியைக் காட்ட முடியுமா?', phonetic: 'Google Maps-il vazhiyai kaatta mudiyuma?' },
      te: { text: 'గూగుల్ మ్యాప్స్‌లో నాకు దారి చూపించగలరా?', phonetic: 'Google Maps lo naaku daari choopinchagalara?' },
      mr: { text: 'तुम्ही मला गुगल मॅप्सवर रस्ता दाखवू शकता का?', phonetic: 'Tumhi mala Google Maps var rasta dakhavu shakta ka?' },
      gu: { text: 'શું તમે મને ગૂગલ મેપ્સ પર રસ્તો બતાવી શકો છો?', phonetic: 'Shu tame mane Google Maps par rasto batavi shako chho?' },
      kn: { text: 'ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ನನಗೆ ಮಾರ್ಗ ತೋರಿಸಬಹುದೇ?', phonetic: 'Google Maps nalli nanage maarga thorisabahudhe?' },
      ml: { text: 'ഗൂഗിൾ മാപ്പിൽ വഴി കാണിച്ചുതരാമോ?', phonetic: 'Google Maps-il vazhi kaanichu tharaamo?' },
      pa: { text: 'ਕੀ ਤੁਸੀਂ ਮੈਨੂੰ ਗੂਗਲ ਮੈਪ ਤੇ ਰਸਤਾ ਦਿਖਾ ਸਕਦੇ ਹੋ?', phonetic: 'Ki tusi mainu Google Maps te rasta dikha sakde ho?' },
      ur: { text: 'کیا آپ مجھے گوگل میپس پر راستہ دکھا سکتے ہیں؟', phonetic: 'Kya aap mujhe Google Maps par raasta dikha sakte hain?' },
      or: { text: 'ଆପଣ ମୋତେ ଗୁଗଲ୍ ମ୍ୟାପରେ ରାସ୍ତା ଦେଖାଇ ପାରିବେ କି?', phonetic: 'Aapana mote Google Maps re rasta dekhai paribe ki?' },
      as: { text: 'আপুনি মোক গুগল মেপছত বাটটো দেখুৱাব পাৰিবনে?', phonetic: 'Apuni mok Google Maps-ot baatto dekhuwabo paribone?' },
      sa: { text: 'किं भवान् गूगल-मानचित्रे मार्गं दर्शयितुं शक्नोति?', phonetic: 'Kim bhavan Google-manachitre margam darshayitum shaknoti?' }
    }
  },

  // 2. TRANSPORT & FARES
  {
    id: 'fare-1',
    category: 'fares',
    english: 'Please run the auto / taxi on meter.',
    translations: {
      en: { text: 'Please run the auto or taxi on meter.', phonetic: 'Please run the auto or taxi on meter.' },
      hi: { text: 'कृपया ऑटो या टैक्सी मीटर से चलाइए।', phonetic: 'Kripya auto ya taxi meter se chalaiye.' },
      bn: { text: 'দয়া করে অটো বা ট্যাক্সি মিটারে চালান।', phonetic: 'Doya kore auto ba taxi meter-e chalan.' },
      ta: { text: 'தயவுசெய்து ஆட்டோ அல்லது டாக்ஸியை மீட்டரில் இயக்கவும்.', phonetic: 'Thayavu seidhu auto allathu taxi-yai meter-il iyakkavum.' },
      te: { text: 'దయచేసి ఆటో లేదా టాక్సీని మీటర్‌పై నడపండి.', phonetic: 'Dayachesi auto leda taxi ni meter pai nadapandi.' },
      mr: { text: 'कृपया ऑटो किंवा टॅक्सी मीटरने चालवा.', phonetic: 'Krupaya auto kinva taxi meter ne chalva.' },
      gu: { text: 'કૃપા કરીને ઓટો કે ટેક્સી મીટરથી ચલાવો.', phonetic: 'Krupa karine auto ke taxi meter thi chalavo.' },
      kn: { text: 'ದಯವಿಟ್ಟು ಆಟೋ ಅಥವಾ ಟ್ಯಾಕ್ಸಿಯನ್ನು ಮೀಟರ್ ಪ್ರಕಾರ ಚಲಾಯಿಸಿ.', phonetic: 'Dayavittu auto athava taxi-yannu meter prakara chalayisi.' },
      ml: { text: 'ദയവായി ഓട്ടോയോ ടാക്സിയോ മീറ്ററിൽ ഓടിക്കുക.', phonetic: 'Dayavayi auto-yo taxi-yo meter-il odikkuka.' },
      pa: { text: 'ਕਿਰਪਾ ਕਰਕੇ ਆਟੋ ਜਾਂ ਟੈਕਸੀ ਮੀਟਰ ਨਾਲ ਚਲਾਓ।', phonetic: 'Kripa karke auto jaan taxi meter naal chalao.' },
      ur: { text: 'براہ کرم آٹو یا ٹیکسی میٹر پر چلائیں۔', phonetic: 'Baraah-e-karam auto ya taxi meter par chalayein.' },
      or: { text: 'ଦୟାକରି ଅଟୋ ବା ଟ୍ୟାକ୍ସି ମିଟରରେ ଚଲାନ୍ତୁ।', phonetic: 'Dayakari auto ba taxi meter re chalantu.' },
      as: { text: 'অনুগ্ৰহ কৰি অটো বা টেক্সীখন মিটাৰত চলাওক।', phonetic: 'Anugrah kori auto ba taxi khon meter-ot soklaok.' },
      sa: { text: 'कृपया यानं गणकयन्त्रेण (मीटरेण) चालयतु।', phonetic: 'Kripaya yaanam ganaka-yantrena chalayatu.' }
    }
  },
  {
    id: 'fare-2',
    category: 'fares',
    english: 'How much is the fare to go to the airport / city center?',
    translations: {
      en: { text: 'How much is the fare to go to the airport or city center?', phonetic: 'How much is the fare to go to the airport or city center?' },
      hi: { text: 'हवाई अड्डे या मुख्य शहर जाने का कितना किराया लगेगा?', phonetic: 'Hawai adde ya mukhya shahar jaane ka kitna kiraya lagega?' },
      bn: { text: 'বিমানবন্দর বা শহরের কেন্দ্রে যাওয়ার ভাড়া কত?', phonetic: 'Bimanbandar ba shohorer kendre jawar bhara koto?' },
      ta: { text: 'விமான நிலையம் அல்லது நகர மையத்திற்கு செல்ல எவ்வளவு கட்டணம்?', phonetic: 'Vimana nilaiyam allathu nagara maiyathirku chella evvalavu kattanam?' },
      te: { text: 'విమానాశ్రయం లేదా నగర కేంద్రానికి వెళ్లడానికి ఎంత ఛార్జీ అవుతుంది?', phonetic: 'Vimaana ashrayam leda nagara kendraniki velladaniki entha charge avuthundi?' },
      mr: { text: 'विमानतळ किंवा शहराच्या मध्यभागी जाण्यासाठी किती भाडे लागेल?', phonetic: 'Vimantal kinva shaharachya madhyabhagi janyasathi kiti bhade lagel?' },
      gu: { text: 'એરપોર્ટ અથવા શહેરના કેન્દ્રમાં જવા માટે કેટલું ભાડું થશે?', phonetic: 'Airport athava shahar na kendra ma java mate ketlu bhaadu thashe?' },
      kn: { text: 'ವಿಮಾನ ನಿಲ್ದಾಣ ಅಥವಾ ನಗರ ಕೇಂದ್ರಕ್ಕೆ ಹೋಗಲು ಎಷ್ಟು ಬಾಡಿಗೆ ಆಗುತ್ತದೆ?', phonetic: 'Vimana nildana athava nagara kendrakke hogalu eshtu baadige aaguttade?' },
      ml: { text: 'എയർപോർട്ടിലേക്കോ നഗരത്തിലേക്കോ പോകാൻ എത്ര വാടകയാകും?', phonetic: 'Airport-ilekko nagarathilekko pokan ethra vaadaka aakum?' },
      pa: { text: 'ਹਵਾਈ ਅੱਡੇ ਜਾਂ ਸ਼ਹਿਰ ਦੇ ਕੇਂਦਰ ਜਾਣ ਦਾ ਕਿੰਨਾ ਕਿਰਾਇਆ ਲੱਗੇਗਾ?', phonetic: 'Hawai adde jaan shahir de kendra jaan da kinna kiraya laggega?' },
      ur: { text: 'ہوائی اڈے یا شہر کے مرکز جانے کا کتنا کرایہ لگے گا؟', phonetic: 'Hawai adde ya shahar ke markaz jaane ka kitna kiraya lage ga?' },
      or: { text: 'ବିମାନବନ୍ଦର ବା ସହର କେନ୍ଦ୍ର ଯିବାକୁ କେତେ ଭଡ଼ା ଲାଗିବ?', phonetic: 'Bimanabandara ba sahara kendra jibaku kete bhada lagiba?' },
      as: { text: 'বিমানবন্দৰ বা নগৰলৈ যাবলৈ কিমান ভাৰা লাগিব?', phonetic: 'Bimanbondor ba nogoroloi jaboloi kiman bhara lagibo?' },
      sa: { text: 'विमानपतनं वा नगरमध्यं गन्तुं कियत् भाटकं भवति?', phonetic: 'Vimanapattanam va nagaramadhyam gantum kiyat bhaatakam bhavati?' }
    }
  },
  {
    id: 'fare-3',
    category: 'fares',
    english: 'Please stop here, I will get down.',
    translations: {
      en: { text: 'Please stop here, I will get down.', phonetic: 'Please stop here, I will get down.' },
      hi: { text: 'कृपया यहाँ रोकिए, मैं यहीं उतरूँगा।', phonetic: 'Kripya yahan rokiye, main yahin utroonga.' },
      bn: { text: 'দয়া করে এখানে থামুন, আমি নামব।', phonetic: 'Doya kore ekhane thamun, ami naambo.' },
      ta: { text: 'தயவுசெய்து இங்கே நிறுத்துங்கள், நான் இறங்குகிறேன்.', phonetic: 'Thayavu seidhu inge niruthungal, naan irangugiren.' },
      te: { text: 'దయచేసి ఇక్కడ ఆపండి, నేను దిగుతాను.', phonetic: 'Dayachesi ikkada aapandi, nenu diguthanu.' },
      mr: { text: 'कृपया येथे थांबा, मी इथे उतरतो.', phonetic: 'Krupaya yethe thamba, mee ithe utarto.' },
      gu: { text: 'કૃપા કરીને અહીં ઊભા રહો, હું અહીં ઊતરીશ.', phonetic: 'Krupa karine ahin oobha raho, hu ahin utrish.' },
      kn: { text: 'ದಯವಿಟ್ಟು ಇಲ್ಲಿ ನಿಲ್ಲಿಸಿ, ನಾನು ಇಳಿಯುತ್ತೇನೆ.', phonetic: 'Dayavittu illi nillisi, naanu iliyuttene.' },
      ml: { text: 'ദയവായി ഇവിടെ നിർത്തൂ, ഞാൻ ഇവിടെ ഇറങ്ങാം.', phonetic: 'Dayavayi ivide nirthoo, njan ivide irangam.' },
      pa: { text: 'ਕਿਰਪਾ ਕਰਕੇ ਇੱਥੇ ਰੋਕੋ, ਮੈਂ ਉਤਰਨਾ ਹੈ।', phonetic: 'Kripa karke itthe roko, main utarna hai.' },
      ur: { text: 'براہ کرم یہاں روکیے، میں یہاں اتروں گا۔', phonetic: 'Baraah-e-karam yahan rokiye, main yahan utroonga.' },
      or: { text: 'ଦୟାକରି ଏଠାରେ ରୋକନ୍ତୁ, ମୁଁ ଓହ୍ଲାଇବି।', phonetic: 'Dayakari ethare rokantu, mun ohlhaibi.' },
      as: { text: 'অনুগ্ৰহ কৰি ইয়াত ৰখাওক, মই নামিম।', phonetic: 'Anugrah kori iyat rokhaok, moi namim.' },
      sa: { text: 'कृपया अत्र स्थगयतु, अहम् अत्र अवतरामि।', phonetic: 'Kripaya atra sthagayatu, aham atra avataraami.' }
    }
  },

  // 3. FOOD & DINING
  {
    id: 'food-1',
    category: 'food',
    english: 'Is this food pure vegetarian?',
    translations: {
      en: { text: 'Is this food pure vegetarian?', phonetic: 'Is this food pure vegetarian?' },
      hi: { text: 'क्या यह खाना शुद्ध शाकाहारी है?', phonetic: 'Kya yeh khaana shuddh shaakahari hai?' },
      bn: { text: 'এই খাবারটি কি সম্পূর্ণ নিরামিষ?', phonetic: 'Ei khabarti ki shompurno niramish?' },
      ta: { text: 'இந்த உணவு சுத்த சைவமா?', phonetic: 'Indha unavu sutha saivamaa?' },
      te: { text: 'ఈ ఆహారం స్వచ్ఛమైన శాఖాహారమేనా?', phonetic: 'Ee aahaaram swachhamaina shaakhaahaaramena?' },
      mr: { text: 'हे जेवण शुद्ध शाकाहारी आहे का?', phonetic: 'He jevan shuddh shakahari aahe ka?' },
      gu: { text: 'શું આ ભોજન શુદ્ધ શાકાહારી છે?', phonetic: 'Shu aa bhojan shuddh shakahari chhe?' },
      kn: { text: 'ಈ ಊಟ ಶುದ್ಧ ಸಸ್ಯಾಹಾರವೇ?', phonetic: 'Ee oota shuddha sasyaahaarave?' },
      ml: { text: 'ഈ ഭക്ഷണം പൂർണ്ണമായും വെജിറ്റേറിയൻ ആണോ?', phonetic: 'Ee bhakshanam poornnamaayum vegetarian aano?' },
      pa: { text: 'ਕੀ ਇਹ ਭੋਜਨ ਸ਼ੁੱਧ ਸ਼ਾਕਾਹਾਰੀ ਹੈ?', phonetic: 'Ki eh bhojan shuddh shakahari hai?' },
      ur: { text: 'کیا یہ کھانا خالص سبزی خور (شاکاہاری) ہے؟', phonetic: 'Kya yeh khana khaalis sabzi-khor hai?' },
      or: { text: 'ଏହି ଖାଦ୍ୟ ଶୁଦ୍ଧ ନିରାମିଷ କି?', phonetic: 'Ehi khadya shuddha niramisha ki?' },
      as: { text: 'এই খাদ্যখিনি সম্পূৰ্ণ নিৰামিষ নেকি?', phonetic: 'Ei khadyokhini sompurno niramikh neki?' },
      sa: { text: 'किम् इदं भोजनं शुद्ध-शाकाहारी अस्ति?', phonetic: 'Kim idam bhojanam shuddha-shakahari asti?' }
    }
  },
  {
    id: 'food-2',
    category: 'food',
    english: 'Please make it less spicy and with less oil.',
    translations: {
      en: { text: 'Please make it less spicy and with less oil.', phonetic: 'Please make it less spicy and with less oil.' },
      hi: { text: 'कृपया इसे कम तीखा और कम तेल वाला बनाइए।', phonetic: 'Kripya ise kam teekha aur kam tel wala banaiye.' },
      bn: { text: 'দয়া করে এটি কম ঝাল এবং কম তেল দিয়ে তৈরি করুন।', phonetic: 'Doya kore eti kom jhaal ebong kom tel diye toiri korun.' },
      ta: { text: 'தயவுசெய்து காரமும் எண்ணெயும் குறைவாகச் செய்யவும்.', phonetic: 'Thayavu seidhu kaaramum ennaiyum kuraivaga seiyavum.' },
      te: { text: 'దయచేసి కారం, నూనె తక్కువగా వేయండి.', phonetic: 'Dayachesi kaaram, noone thakkuvaga veyandi.' },
      mr: { text: 'कृपया कमी तिखट आणि कमी तेलाचे करा.', phonetic: 'Krupaya kami tikhat aani kami telache kara.' },
      gu: { text: 'કૃપા કરીને આમાં મરચું અને તેલ ઓછું રાખજો.', phonetic: 'Krupa karine aama marchu ane tel ochhu rakhjo.' },
      kn: { text: 'ದಯವಿಟ್ಟು ಖಾರ ಮತ್ತು ಎಣ್ಣೆ ಕಡಿಮೆ ಮಾಡಿ.', phonetic: 'Dayavittu khaara matthu enne kadime maadi.' },
      ml: { text: 'ദയവായി എരിവും എണ്ണയും കുറച്ച് ഉണ്ടാക്കുക.', phonetic: 'Dayavayi erivum enneyum kurachu undaakkuka.' },
      pa: { text: 'ਕਿਰਪਾ ਕਰਕੇ ਘੱਟ ਮਿਰਚ ਅਤੇ ਘੱਟ ਤੇਲ ਵਾਲਾ ਬਣਾਓ।', phonetic: 'Kripa karke ghatt mirch ate ghatt tel wala banao.' },
      ur: { text: 'براہ کرم مرچیں اور تیل کم رکھیں۔', phonetic: 'Baraah-e-karam mirchein aur tel kam rakhein.' },
      or: { text: 'ଦୟାକରି କମ୍ ରାଗ ଏବଂ କମ୍ ତେଲରେ ତିଆରି କରନ୍ତୁ।', phonetic: 'Dayakari kam raga ebam kam tela re tiari karantu.' },
      as: { text: 'অনুগ্ৰহ কৰি জলকীয়া আৰু তেল কমকৈ দিব।', phonetic: 'Anugrah kori jolokia aru tel komkoi dibo.' },
      sa: { text: 'कृपया अल्प-कटु अल्प-स्नेहयुक्तं च करोतु।', phonetic: 'Kripaya alpa-katu alpa-sneha-yuktam cha karotu.' }
    }
  },
  {
    id: 'food-3',
    category: 'food',
    english: 'Can I please have sealed bottled drinking water?',
    translations: {
      en: { text: 'Can I please have sealed bottled drinking water?', phonetic: 'Can I please have sealed bottled drinking water?' },
      hi: { text: 'क्या मुझे सीलबंद पीने का पानी मिल सकता है?', phonetic: 'Kya mujhe seal-band peene ka paani mil sakta hai?' },
      bn: { text: 'আমি কি একটি সিল করা বোতলজাত খাবার জল পেতে পারি?', phonetic: 'Ami ki ekti seal kora botaljaat khabar jol pete pari?' },
      ta: { text: 'சீல் வைக்கப்பட்ட குடிநீர் பாட்டில் கிடைக்குமா?', phonetic: 'Seal vaikkapatta kudineer bottle kidaikkuma?' },
      te: { text: 'సీలు వేసిన మంచినీటి బాటిల్ దొరుకుతుందా?', phonetic: 'Sealu vesina manchineeti bottle dorukuthunda?' },
      mr: { text: 'मला सीलबंद पिण्याचे पाणी मिळेल का?', phonetic: 'Mala seal-band pinyache paani milel ka?' },
      gu: { text: 'મને સીલબંધ પીવાનું પાણી મળી શકે?', phonetic: 'Mane seal-band peevanu paani mali shake?' },
      kn: { text: 'ಸೀಲ್ ಮಾಡಿದ ಕುಡಿಯುವ ನೀರಿನ ಬಾಟಲ್ ಸಿಗಬಹುದೇ?', phonetic: 'Seal maadida kudiyuva neerina bottle sigabahudhe?' },
      ml: { text: 'സീൽ ചെയ്ത കുപ്പിവെള്ളം കിട്ടുമോ?', phonetic: 'Seal cheytha kuppi-vellam kittumo?' },
      pa: { text: 'ਕੀ ਮੈਨੂੰ ਸੀਲਬੰਦ ਪੀਣ ਵਾਲਾ ਪਾਣੀ ਮਿਲ ਸਕਦਾ ਹੈ?', phonetic: 'Ki mainu seal-band peen wala paani mil sakda hai?' },
      ur: { text: 'کیا مجھے سیل بند پینے کا پانی مل سکتا ہے؟', phonetic: 'Kya mujhe seal band peene ka paani mil sakta hai?' },
      or: { text: 'ସିଲ୍ ହୋଇଥିବା ପିଇବା ପାଣି ବୋତଲ ମିଳିବ କି?', phonetic: 'Seal hoithiba piiba paani bottle miliba ki?' },
      as: { text: 'মই ছিল কৰা খোৱাপানীৰ বটল এটা পামনে?', phonetic: 'Moi seal kora khowapanir botol eta pamne?' },
      sa: { text: 'किं मुद्राङ्कितं शुद्ध-पेयजल-कूपिकां प्राप्तुं शक्नोमि?', phonetic: 'Kim mudraankitam shuddha-peyajala-koopikam praaptum shaknomi?' }
    }
  },

  // 4. HOTEL & STAY
  {
    id: 'hotel-1',
    category: 'hotels',
    english: 'Do you have a clean room available for tonight?',
    translations: {
      en: { text: 'Do you have a clean room available for tonight?', phonetic: 'Do you have a clean room available for tonight?' },
      hi: { text: 'क्या आज रात के लिए साफ कमरा उपलब्ध है?', phonetic: 'Kya aaj raat ke liye saaf kamra uplabdh hai?' },
      bn: { text: 'আজ রাতের জন্য কি পরিষ্কার ঘর খালি আছে?', phonetic: 'Aaj raater jonno ki porishkar ghor khali ache?' },
      ta: { text: 'இன்றிரவு தங்க சுத்தமான அறை கிடைக்குமா?', phonetic: 'Indriravu thanga suthamaana arai kidaikkumaa?' },
      te: { text: 'ఈ రాత్రికి శుభ్రమైన గది అందుబాటులో ఉందా?', phonetic: 'Ee raathriki shubhramaina gadi andubaatulo undaa?' },
      mr: { text: 'आज रात्रीसाठी स्वच्छ खोली उपलब्ध आहे का?', phonetic: 'Aaj raatrisathi swachh kholi uplabdh aahe ka?' },
      gu: { text: 'શું આજની રાત માટે ચોખ્ખો રૂમ ઉપલબ્ધ છે?', phonetic: 'Shu aajni raat mate chokkh-o room uplabdh chhe?' },
      kn: { text: 'ಇಂದಿನ ರಾತ್ರಿಗೆ ಸ್ವಚ್ಛವಾದ ಕೋಣೆ ಲಭ್ಯವಿದೆಯೇ?', phonetic: 'Indina raathrige swachhavaada kone labhyavidheye?' },
      ml: { text: 'ഇന്നത്തേക്ക് വൃത്തിയുള്ള ഒരു മുറി ലഭ്യമാണോ?', phonetic: 'Innnthekku vrithiyulla oru muri labhyamaano?' },
      pa: { text: 'ਕੀ ਅੱਜ ਰਾਤ ਲਈ ਸਾਫ਼ ਕਮਰਾ ਉਪਲਬਧ ਹੈ?', phonetic: 'Ki ajj raat layi saaf kamra uplabdh hai?' },
      ur: { text: 'کیا آج رات کے لیے صاف کمرہ دستیاب ہے؟', phonetic: 'Kya aaj raat ke liye saaf kamra dastyab hai?' },
      or: { text: 'ଆଜି ରାତି ପାଇଁ ସଫା କୋଠରୀ ଉପଲବ୍ଧ ଅଛି କି?', phonetic: 'Aaji raati pain safa kothari uplabdha achhi ki?' },
      as: { text: 'আজি ৰাতিৰ বাবে পৰিষ্কাৰ কোঠা পোৱা যাবনে?', phonetic: 'Aji raatir baabe poriskar kotha powa jaabone?' },
      sa: { text: 'किम् अद्य रात्र्यर्थे स्वच्छः प्रकोष्ठः उपलभ्यते?', phonetic: 'Kim adya raatri-arthe swachhah prakoshthah upalabhyate?' }
    }
  },
  {
    id: 'hotel-2',
    category: 'hotels',
    english: 'What is the check-out time?',
    translations: {
      en: { text: 'What is the check-out time?', phonetic: 'What is the check-out time?' },
      hi: { text: 'कमरा खाली करने (चेक-आउट) का समय क्या है?', phonetic: 'Kamra khaali karne (check-out) ka samay kya hai?' },
      bn: { text: 'চেক-আউট করার সময় কখন?', phonetic: 'Check-out korar shomoy kokhon?' },
      ta: { text: 'வெளியேறும் நேரம் (செக்-அவுட்) என்ன?', phonetic: 'Veliyerum neram (check-out) enna?' },
      te: { text: 'చెక్-అవుట్ సమయం ఎంత?', phonetic: 'Check-out samayam entha?' },
      mr: { text: 'चेक-आउटची वेळ काय आहे?', phonetic: 'Check-out chee vel kaay aahe?' },
      gu: { text: 'ચેક-આઉટનો સમય શું છે?', phonetic: 'Check-out no samay shu chhe?' },
      kn: { text: 'ಚೆಕ್-ಔಟ್ ಸಮಯ ಎಷ್ಟು?', phonetic: 'Check-out samaya eshtu?' },
      ml: { text: 'ചെക്ക് ഔട്ട് സമയം എപ്പോഴാണ്?', phonetic: 'Check-out samayam eppozhaanu?' },
      pa: { text: 'ਚੈੱਕ-ਆਊਟ ਦਾ ਸਮਾਂ ਕੀ ਹੈ?', phonetic: 'Check-out da samaan ki hai?' },
      ur: { text: 'چیک آؤٹ کا وقت کیا ہے؟', phonetic: 'Check-out ka waqt kya hai?' },
      or: { text: 'ଚେକ୍ ଆଉଟ୍ ସମୟ କେତେଟା?', phonetic: 'Check-out samaya keteta?' },
      as: { text: 'চেক-আউট কৰাৰ সময় কেতিয়া?', phonetic: 'Check-out korar xomoy ketiya?' },
      sa: { text: 'प्रकोष्ठ-त्यागस्य (चेक-आउट) समयः कः?', phonetic: 'Prakoshtha-tyagasya samayah kah?' }
    }
  },

  // 5. SAFETY & EMERGENCY
  {
    id: 'emg-1',
    category: 'emergency',
    english: 'Please help me! It is an urgent emergency!',
    translations: {
      en: { text: 'Please help me! It is an urgent emergency!', phonetic: 'Please help me! It is an urgent emergency!' },
      hi: { text: 'कृपया मेरी मदद कीजिए! यह आपातकालीन स्थिति है!', phonetic: 'Kripya meri madad kijiye! Yeh aapatkaleen sthiti hai!' },
      bn: { text: 'দয়া করে আমাকে সাহায্য করুন! এটি জরুরি অবস্থা!', phonetic: 'Doya kore amake sahajjo korun! Eti joruri obostha!' },
      ta: { text: 'தயவுசெய்து எனக்கு உதவுங்கள்! இது அவசர நிலைமை!', phonetic: 'Thayavu seidhu enakku udhavungal! Idhu avasara nilaimai!' },
      te: { text: 'దయచేసి నాకు సహాయం చేయండి! ఇది అత్యవసర పరిస్థితి!', phonetic: 'Dayachesi naaku sahaayam cheyandi! Idi atyavasara paristhithi!' },
      mr: { text: 'कृपया मला मदत करा! ही आणीबाणीची परिस्थिती आहे!', phonetic: 'Krupaya mala madat kara! Hee aanibaanechee paristhiti aahe!' },
      gu: { text: 'કૃપા કરીને મારી મદદ કરો! આ કટોકટીની સ્થિતિ છે!', phonetic: 'Krupa karine maari madad karo! Aa katokati ni sthiti chhe!' },
      kn: { text: 'ದಯವಿಟ್ಟು ನನಗೆ ಸಹಾಯ ಮಾಡಿ! ಇದು ತುರ್ತು ಪರಿಸ್ಥಿತಿ!', phonetic: 'Dayavittu nanage sahaaya maadi! Idu thurtu paristhithi!' },
      ml: { text: 'ദയവായി എന്നെ സഹായിക്കൂ! ഇതൊരു അടിയന്തര സാഹചര്യമാണ്!', phonetic: 'Dayavayi enne sahayikkoo! Ithoru adiyanthara saahacharyamaanu!' },
      pa: { text: 'ਕਿਰਪਾ ਕਰਕੇ ਮੇਰੀ ਮਦਦ ਕਰੋ! ਇਹ ਐਮਰਜੈਂਸੀ ਹੈ!', phonetic: 'Kripa karke meri madad karo! Eh emergency hai!' },
      ur: { text: 'براہ کرم میری مدد کریں! یہ ہنگامی صورتحال ہے!', phonetic: 'Baraah-e-karam meri madad karein! Yeh hangami soorathal hai!' },
      or: { text: 'ଦୟାକରି ମୋତେ ସାହାଯ୍ୟ କରନ୍ତୁ! ଏହା ଜରୁରୀକାଳୀନ ଅବସ୍ଥା!', phonetic: 'Dayakari mote saahajya karantu! Eha jarurikalina abastha!' },
      as: { text: 'অনুগ্ৰহ কৰি মোক সহায় কৰক! এইটো জৰুৰীকালীন অৱস্থা!', phonetic: 'Anugrah kori mok xohay korok! Eito jorurikalin obostha!' },
      sa: { text: 'कृपया मां साहाय्यं करोतु! एषा आपत्कालीन-स्थितिः अस्ति!', phonetic: 'Kripaya maam saahaayyam karotu! Esha aapatkaalina-sthitih asti!' }
    }
  },
  {
    id: 'emg-2',
    category: 'emergency',
    english: 'Where is the nearest police station or tourist helpdesk?',
    translations: {
      en: { text: 'Where is the nearest police station or tourist helpdesk?', phonetic: 'Where is the nearest police station or tourist helpdesk?' },
      hi: { text: 'सबसे नज़दीकी पुलिस स्टेशन या टूरिस्ट हेल्पडेस्क कहाँ है?', phonetic: 'Sabse nazdeeki police station ya tourist helpdesk kahan hai?' },
      bn: { text: 'সবচেয়ে কাছের থানা বা পর্যটক সহায়তা কেন্দ্র কোথায়?', phonetic: 'Shobcheye kacher thana ba porjotek shohayota kendro kothay?' },
      ta: { text: 'அருகிலுள்ள காவல் நிலையம் அல்லது சுற்றுலா உதவி மையம் எங்கே?', phonetic: 'Arugilulla kaaval nilaiyam allathu sutrula udhavi maiyam enge?' },
      te: { text: 'సమీపంలోని పోలీస్ స్టేషన్ లేదా టూరిస్ట్ హెల్ప్‌డెస్క్ ఎక్కడ ఉంది?', phonetic: 'Sameepam loni police station leda tourist helpdesk ekkada undi?' },
      mr: { text: 'सर्वात जवळचे पोलीस ठाणे किंवा पर्यटक मदत कक्ष कुठे आहे?', phonetic: 'Sarvat javalche police thane kinva paryatak madat kaksh kuthe aahe?' },
      gu: { text: 'સૌથી નજીકનું પોલીસ સ્ટેશન કે ટુરિસ્ટ હેલ્પડેસ્ક ક્યાં છે?', phonetic: 'Sauthi najeek nu police station ke tourist helpdesk kyan chhe?' },
      kn: { text: 'ಹತ್ತಿರದ ಪೊಲೀಸ್ ಠಾಣೆ ಅಥವಾ ಪ್ರವಾಸಿ ಸಹಾಯ ಕೇಂದ್ರ ಎಲ್ಲಿದೆ?', phonetic: 'Hattirada police thaane athava pravaasi sahaaya kendra ellide?' },
      ml: { text: 'ഏറ്റവും അടുത്തുള്ള പോലീസ് സ്റ്റേഷനോ ടൂറിസ്റ്റ് ഹെൽപ്പ് ഡെസ്കോ എവിടെയാണ്?', phonetic: 'Ettavum aduthulla police station-o tourist helpdesk-o evideyannu?' },
      pa: { text: 'ਸਭ ਤੋਂ ਨੇੜਲਾ ਪੁਲਿਸ ਸਟੇਸ਼ਨ ਜਾਂ ਟੂਰਿਸਟ ਹੈਲਪਡੈਸਕ ਕਿੱਥੇ ਹੈ?', phonetic: 'Sabh ton nedla police station jaan tourist helpdesk kitthe hai?' },
      ur: { text: 'قریب ترین پولیس اسٹیشن یا ٹورسٹ ہیلپ ڈیسک کہاں ہے؟', phonetic: 'Qareeb tareen police station ya tourist helpdesk kahan hai?' },
      or: { text: 'ନିକଟତମ ପୋଲିସ ଥାନା ବା ପର୍ଯ୍ୟଟକ ସହାୟତା କେନ୍ଦ୍ର କେଉଁଠି?', phonetic: 'Nikatatama police thana ba paryataka sahayata kendra keunthi?' },
      as: { text: 'আটাইতকৈ ওচৰৰ আৰক্ষী চকী বা পৰ্যটক সাহায্য কেন্দ্ৰ ক\'ত আছে?', phonetic: 'Ataitkoi osoror arokhi soki ba porjotek sahajjo kendro kot ase?' },
      sa: { text: 'निकटतमम् आरक्षकस्थानकं (पुलिस) पर्यटक-सहायता-केन्द्रं वा कुत्र?', phonetic: 'Nikatatamam aarakshaka-sthanakam paryataka-sahayata-kendram va kutra?' }
    }
  },
  {
    id: 'emg-3',
    category: 'emergency',
    english: 'I need a doctor or ambulance urgently. Helpline: 112 / 1363.',
    translations: {
      en: { text: 'I need a doctor or ambulance urgently. Helpline: 112 / 1363.', phonetic: 'I need a doctor or ambulance urgently. Helpline: 112 / 1363.' },
      hi: { text: 'मुझे तुरंत डॉक्टर या एम्बुलेंस चाहिए। हेल्पलाइन: 112 / 1363।', phonetic: 'Mujhe turant doctor ya ambulance chahiye. Helpline: 112 / 1363.' },
      bn: { text: 'আমার জরুরি ডাক্তার বা অ্যাম্বুলেন্স প্রয়োজন। হেল্পলাইন: 112 / 1363।', phonetic: 'Aamar joruri doctor ba ambulance proyojon. Helpline: 112 / 1363.' },
      ta: { text: 'எனக்கு உடனடியாக மருத்துவர் அல்லது ஆம்புலன்ஸ் தேவை. உதவி எண்: 112 / 1363.', phonetic: 'Enakku udanadiyaaga maruthuvar allathu ambulance thevai. Udhavi enn: 112 / 1363.' },
      te: { text: 'నాకు అత్యవసరంగా డాక్టర్ లేదా అంబులెన్స్ కావాలి. హెల్ప్‌లైన్: 112 / 1363.', phonetic: 'Naaku atyavasaramgaa doctor leda ambulance kaavaali. Helpline: 112 / 1363.' },
      mr: { text: 'मला तातडीने डॉक्टर किंवा रुग्णवाहिका हवी आहे. हेल्पलाईन: 112 / 1363.', phonetic: 'Mala taatadeene doctor kinva rugnavahika havi aahe. Helpline: 112 / 1363.' },
      gu: { text: 'મને તાત્કાલિક ડૉક્ટર અથવા એમ્બ્યુલન્સની જરૂર છે. હેલ્પલાઇન: 112 / 1363.', phonetic: 'Mane taatkalik doctor athava ambulance ni jaroor chhe. Helpline: 112 / 1363.' },
      kn: { text: 'ನನಗೆ ತಕ್ಷಣ ವೈದ್ಯರು ಅಥವಾ ಆಂಬ್ಯುಲೆನ್ಸ್ ಬೇಕು. ಸಹಾಯವಾಣಿ: 112 / 1363.', phonetic: 'Nanage thakshana vaidyaru athava ambulance beku. Sahaayavaani: 112 / 1363.' },
      ml: { text: 'എനിക്ക് അടിയന്തരമായി ഒരു ഡോക്ടറെയോ ആംബുലൻസോ ആവശ്യമാണ്. ഹെൽപ്പ്‌ലൈൻ: 112 / 1363.', phonetic: 'Enikku adiyantharamaayi oru doctoreyo ambulance-o aavashyamaanu. Helpline: 112 / 1363.' },
      pa: { text: 'ਮੈਨੂੰ ਤੁਰੰਤ ਡਾਕਟਰ ਜਾਂ ਐਂਬੂਲੈਂਸ ਚਾਹੀਦੀ ਹੈ। ਹੈਲਪਲਾਈਨ: 112 / 1363।', phonetic: 'Mainu turant doctor jaan ambulance chahidi hai. Helpline: 112 / 1363.' },
      ur: { text: 'مجھے فوری طور پر ڈاکٹر یا ایمبولینس کی ضرورت ہے۔ ہیلپ لائن: 112 / 1363۔', phonetic: 'Mujhe fouri taur par doctor ya ambulance ki zaroorat hai. Helpline: 112 / 1363.' },
      or: { text: 'ମୋତେ ତୁରନ୍ତ ଡାକ୍ତର ବା ଆମ୍ବୁଲାନ୍ସ ଦରକାର। ହେଲ୍ପଲାଇନ: 112 / 1363।', phonetic: 'Mote turanta daktara ba ambulance darakara. Helpline: 112 / 1363.' },
      as: { text: 'মোক তাৎক্ষণিকভাৱে এজন চিকিৎসক বা এম্বুলেন্সৰ প্ৰয়োজন। হেল্পলাইন: 112 / 1363।', phonetic: 'Mok tatkhanikbhabe ejon sikitsok ba ambulance-or proyojon. Helpline: 112 / 1363.' },
      sa: { text: 'मह्यम् अविलम्बेन चिकित्सकः रुग्णवाहनं (एम्बुलेंस) वा आवश्यकम्। साहाय्य-सङ्ख्या: 112 / 1363।', phonetic: 'Mahyam avilambena chikitsakah rugna-vaahanam va aavashyakam. Helpline: 112 / 1363.' }
    }
  }
];

// Language Code Mapping for MyMemory Non-AI Neural Translation API
export const LANG_API_MAP: Record<string, string> = {
  hi: 'hi-IN',
  en: 'en-GB',
  bn: 'bn-IN',
  ta: 'ta-IN',
  te: 'te-IN',
  mr: 'mr-IN',
  gu: 'gu-IN',
  kn: 'kn-IN',
  ml: 'ml-IN',
  pa: 'pa-IN',
  ur: 'ur-IN',
  or: 'or-IN',
  as: 'as-IN',
  sa: 'sa-IN',
};

// Clean up HTML entities returned from translation services
function decodeHtmlEntities(str: string): string {
  if (!str) return '';
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

// Comprehensive Offline Travel Dictionary across Indian Languages
export interface DictionaryEntry {
  keywords: string[];
  translations: Record<string, { text: string; phonetic?: string }>;
}

export const TRAVEL_DICTIONARY: DictionaryEntry[] = [
  {
    keywords: ['water', 'drinking water', 'pani', 'paani', 'jal'],
    translations: {
      en: { text: 'Drinking Water', phonetic: 'Drinking Water' },
      hi: { text: 'पीने का पानी', phonetic: 'Peene ka paani' },
      bn: { text: 'খাওয়ার জল', phonetic: 'Khaowar jol' },
      ta: { text: 'குடிநீர்', phonetic: 'Kudineer' },
      te: { text: 'త్రాగునీరు', phonetic: 'Thragu neeru' },
      mr: { text: 'पिण्याचे पाणी', phonetic: 'Pinyache paani' },
      gu: { text: 'પીવાનું પાણી', phonetic: 'Peevanu paani' },
      kn: { text: 'ಕುಡಿಯುವ ನೀರು', phonetic: 'Kudiyuva neeru' },
      ml: { text: 'കുടിവെള്ളം', phonetic: 'Kudivellam' },
      pa: { text: 'ਪੀਣ ਵਾਲਾ ਪਾਣੀ', phonetic: 'Peean wala paani' },
      ur: { text: 'پینے کا پانی', phonetic: 'Peene ka paani' },
      or: { text: 'ପିଇବା ପାଣି', phonetic: 'Piba paani' },
      as: { text: 'খোৱা পানী', phonetic: 'Khowa pani' },
      sa: { text: 'पेयजलम्', phonetic: 'Peyajalam' },
    }
  },
  {
    keywords: ['food', 'meal', 'eating', 'khana', 'bhojan'],
    translations: {
      en: { text: 'Food / Meals', phonetic: 'Food' },
      hi: { text: 'खाना / भोजन', phonetic: 'Khaana / Bhojan' },
      bn: { text: 'খাবার / আহার', phonetic: 'Khabar' },
      ta: { text: 'உணவு', phonetic: 'Unavu' },
      te: { text: 'ఆహారం / భోజనం', phonetic: 'Aahaaram' },
      mr: { text: 'जेवण / अन्न', phonetic: 'Jevan' },
      gu: { text: 'ખોરાક / ભોજન', phonetic: 'Khorak / Bhojan' },
      kn: { text: 'ಊಟ / ಆಹಾರ', phonetic: 'Oota' },
      ml: { text: 'ഭക്ഷണം', phonetic: 'Bhakshanam' },
      pa: { text: 'ਖਾਣਾ / ਰੋਟੀ', phonetic: 'Khaana / Roti' },
      ur: { text: 'کھانا', phonetic: 'Khaana' },
      or: { text: 'ଖାଦ୍ୟ / ଭୋଜନ', phonetic: 'Khadya' },
      as: { text: 'খাদ্য / আহাৰ', phonetic: 'Khadya / Aahar' },
      sa: { text: 'भोजनम्', phonetic: 'Bhojanam' },
    }
  },
  {
    keywords: ['help', 'madad', 'sahayata', 'save me', 'urgent'],
    translations: {
      en: { text: 'Please Help Me', phonetic: 'Please Help Me' },
      hi: { text: 'कृपया मेरी मदद करें', phonetic: 'Kripya meri madad karein' },
      bn: { text: 'দয়া করে আমাকে সাহায্য করুন', phonetic: 'Doya kore amake sahajjo korun' },
      ta: { text: 'தயவுசெய்து எனக்கு உதவுங்கள்', phonetic: 'Thayavuseithu enakku udhavungal' },
      te: { text: 'దయచేసి నాకు సహాయం చేయండి', phonetic: 'Dayachesi naaku sahaayam cheyandi' },
      mr: { text: 'कृपया मला मदत करा', phonetic: 'Krupaya mala madat kara' },
      gu: { text: 'કૃપા કરીને મને મદદ કરો', phonetic: 'Krupa karine mane madad karo' },
      kn: { text: 'ದಯವಿಟ್ಟು ನನಗೆ ಸಹಾಯ ಮಾಡಿ', phonetic: 'Dayavittu nanage sahaaya maadi' },
      ml: { text: 'ദയവായി എന്നെ സഹായിക്കൂ', phonetic: 'Dayavaayi enne sahaayikku' },
      pa: { text: 'ਕਿਰਪਾ ਕਰਕੇ ਮੇਰੀ ਮਦਦ ਕਰੋ', phonetic: 'Kirpa karke meri madad karo' },
      ur: { text: 'براہ کرم میری مدد کریں', phonetic: 'Barahe karam meri madad karein' },
      or: { text: 'ଦୟାକରି ମୋତେ ସାହାଯ୍ୟ କରନ୍ତୁ', phonetic: 'Dayakari mote sahayya karantu' },
      as: { text: 'অনুগ্ৰহ কৰি মোক সহায় কৰক', phonetic: 'Anugrah kori mok sohai korok' },
      sa: { text: 'कृपया मां साहाय्यं कुर्वन्तु', phonetic: 'Kripaya mam saahayyam kurvantu' },
    }
  },
  {
    keywords: ['police', 'police station', 'thana', 'security'],
    translations: {
      en: { text: 'Police / Police Station', phonetic: 'Police Station' },
      hi: { text: 'पुलिस / पुलिस थाना', phonetic: 'Police / Police Thana' },
      bn: { text: 'পুলিশ / থানা', phonetic: 'Police / Thana' },
      ta: { text: 'காவல்துறை / காவல் நிலையம்', phonetic: 'Kaavalthurai' },
      te: { text: 'పోలీస్ / పోలీస్ స్టేషన్', phonetic: 'Police Station' },
      mr: { text: 'पोलीस / पोलीस ठाणे', phonetic: 'Police Thane' },
      gu: { text: 'પોલીસ / પોલીસ સ્ટેશન', phonetic: 'Police Station' },
      kn: { text: 'ಪೊಲೀಸ್ / ಪೊಲೀಸ್ ಠಾಣೆ', phonetic: 'Police Thane' },
      ml: { text: 'പോലീസ് / പോലീസ് സ്റ്റേഷൻ', phonetic: 'Police Station' },
      pa: { text: 'ਪੁਲਿਸ / ਥਾਣਾ', phonetic: 'Police / Thana' },
      ur: { text: 'پولیس / تھانہ', phonetic: 'Police / Thana' },
      or: { text: 'ପୋଲିସ ଷ୍ଟେସନ', phonetic: 'Police Station' },
      as: { text: 'আৰক্ষী / থানা', phonetic: 'Aarakkhi / Thana' },
      sa: { text: 'आरक्षकवर्गः / आरक्षस्थानम्', phonetic: 'Aarakshasthanam' },
    }
  },
  {
    keywords: ['hospital', 'doctor', 'clinic', 'medical'],
    translations: {
      en: { text: 'Hospital / Doctor', phonetic: 'Hospital' },
      hi: { text: 'अस्पताल / डॉक्टर', phonetic: 'Aspataal / Doctor' },
      bn: { text: 'হাসপাতাল / ডাক্তার', phonetic: 'Haaspataal' },
      ta: { text: 'மருத்துவமனை / மருத்துவர்', phonetic: 'Maruthuvamanai' },
      te: { text: 'ఆసుపత్రి / వైద్యుడు', phonetic: 'Aasupathri' },
      mr: { text: 'रुग्णालय / डॉक्टर', phonetic: 'Rugnaalay' },
      gu: { text: 'હોસ્પિટલ / ડૉક્ટર', phonetic: 'Hospital' },
      kn: { text: 'ಆಸ್ಪತ್ರೆ / ವೈದ್ಯರು', phonetic: 'Aaspathre' },
      ml: { text: 'ആശുപത്രി / ഡോക്ടർ', phonetic: 'Aashupathri' },
      pa: { text: 'ਹਸਪਤਾਲ / ਡਾਕਟਰ', phonetic: 'Haspatal' },
      ur: { text: 'ہسپتال / ڈاکٹر', phonetic: 'Haspatal' },
      or: { text: 'ଡାକ୍ତରଖାନା', phonetic: 'Daktarakhana' },
      as: { text: 'চিকিৎসালয় / ডাক্তাৰ', phonetic: 'Sikitsaloy' },
      sa: { text: 'चिकित्सालयः / वैद्यः', phonetic: 'Chikitsalayah' },
    }
  },
  {
    keywords: ['hotel', 'room', 'lodge', 'stay'],
    translations: {
      en: { text: 'Hotel / Room', phonetic: 'Hotel Room' },
      hi: { text: 'होटल / कमरा', phonetic: 'Hotel / Kamra' },
      bn: { text: 'হোটেল / রুম', phonetic: 'Hotel / Room' },
      ta: { text: 'விடுதி / அறை', phonetic: 'Viduthi / Arai' },
      te: { text: 'హోటల్ / గది', phonetic: 'Hotel / Gadi' },
      mr: { text: 'हॉटेल / खोली', phonetic: 'Hotel / Kholi' },
      gu: { text: 'હોટેલ / રૂમ', phonetic: 'Hotel / Room' },
      kn: { text: 'ಹೋಟೆಲ್ / ಕೊಠಡಿ', phonetic: 'Hotel / Kothadi' },
      ml: { text: 'ഹോട്ടൽ / മുറി', phonetic: 'Hotel / Muri' },
      pa: { text: 'ਹੋਟਲ / ਕਮਰਾ', phonetic: 'Hotel / Kamra' },
      ur: { text: 'ہوٹل / کمرہ', phonetic: 'Hotel / Kamra' },
      or: { text: 'ହୋଟେଲ / ରୁମ୍', phonetic: 'Hotel / Room' },
      as: { text: 'হোটেল / কোঠা', phonetic: 'Hotel / Kotha' },
      sa: { text: 'विश्रामगृहम् / प्रकोष्ठम्', phonetic: 'Vishramagriham' },
    }
  },
  {
    keywords: ['railway', 'train', 'station', 'metro'],
    translations: {
      en: { text: 'Railway Station / Train', phonetic: 'Train Station' },
      hi: { text: 'रेलवे स्टेशन / रेलगाड़ी', phonetic: 'Railway station / Railgadi' },
      bn: { text: 'রেলওয়ে স্টেশন / ট্রেন', phonetic: 'Railway station / Train' },
      ta: { text: 'ரயில் நிலையம் / தொடர்வண்டி', phonetic: 'Rayil nilayam' },
      te: { text: 'రైల్వే స్టేషన్ / రైలు', phonetic: 'Railway station / Railu' },
      mr: { text: 'रेल्वे स्थानक / आगगाडी', phonetic: 'Railway sthanak' },
      gu: { text: 'રેલ્વે સ્ટેશન / ટ્રેન', phonetic: 'Railway station / Train' },
      kn: { text: 'ರೈಲ್ವೆ ನಿಲ್ದಾಣ / ರೈಲು', phonetic: 'Railway nildaana' },
      ml: { text: 'റെയിൽവേ സ്റ്റേഷൻ / ട്രെയിൻ', phonetic: 'Railway station' },
      pa: { text: 'ਰੇਲਵੇ ਸਟੇਸ਼ਨ / ਰੇਲਗੱਡੀ', phonetic: 'Railway station' },
      ur: { text: 'ریلوے اسٹیشن / ٹرین', phonetic: 'Railway station' },
      or: { text: 'ରେଳ ଷ୍ଟେସନ', phonetic: 'Rela station' },
      as: { text: 'ৰে’ল ষ্টেচন', phonetic: 'Rail steson' },
      sa: { text: 'रेलयानालयम् / धूमशकटम्', phonetic: 'Relayanalayam' },
    }
  },
  {
    keywords: ['taxi', 'auto', 'cab', 'rickshaw'],
    translations: {
      en: { text: 'Taxi / Auto Rickshaw', phonetic: 'Taxi / Auto' },
      hi: { text: 'टैक्सी / ऑटो रिक्शा', phonetic: 'Taxi / Auto Rickshaw' },
      bn: { text: 'ট্যাক্সি / অটো রিকশা', phonetic: 'Taxi / Auto' },
      ta: { text: 'டாக்ஸி / ஆட்டோ ரிக்ஷா', phonetic: 'Taxi / Auto' },
      te: { text: 'టాక్సీ / ఆటో రిక్షా', phonetic: 'Taxi / Auto' },
      mr: { text: 'टॅक्सी / ऑटो रिक्षा', phonetic: 'Taxi / Auto' },
      gu: { text: 'ટેક્સી / ઓટો રિક્ષા', phonetic: 'Taxi / Auto' },
      kn: { text: 'ಟ್ಯಾಕ್ಸಿ / ಆಟೋ ರಿಕ್ಷಾ', phonetic: 'Taxi / Auto' },
      ml: { text: 'ടാക്സി / ഓട്ടോ റിക്ഷ', phonetic: 'Taxi / Auto' },
      pa: { text: 'ਟੈਕਸੀ / ਆਟੋ ਰਿਕਸ਼ਾ', phonetic: 'Taxi / Auto' },
      ur: { text: 'ٹیکسی / آٹو رکشہ', phonetic: 'Taxi / Auto' },
      or: { text: 'ଟ୍ୟାକ୍ସି / ଅଟୋ', phonetic: 'Taxi / Auto' },
      as: { text: 'টেক্সি / অটো ৰিক্সা', phonetic: 'Taxi / Auto' },
      sa: { text: 'भाटकयानम् / तिर्यग्यानम्', phonetic: 'Bhatakayanam' },
    }
  },
  {
    keywords: ['thank you', 'thanks', 'dhanyavad', 'shukriya'],
    translations: {
      en: { text: 'Thank You', phonetic: 'Thank You' },
      hi: { text: 'धन्यवाद', phonetic: 'Dhanyavaad' },
      bn: { text: 'ধন্যবাদ', phonetic: 'Dhonnobad' },
      ta: { text: 'நன்றி', phonetic: 'Nandri' },
      te: { text: 'ధన్యవాదాలు', phonetic: 'Dhanyavaadaalu' },
      mr: { text: 'धन्यवाद', phonetic: 'Dhanyavaad' },
      gu: { text: 'આભાર / ધન્યવાદ', phonetic: 'Aabhar' },
      kn: { text: 'ಧನ್ಯವಾದಗಳು', phonetic: 'Dhanyavaadagalu' },
      ml: { text: 'നന്ദി', phonetic: 'Nandi' },
      pa: { text: 'ਧੰਨਵਾਦ', phonetic: 'Dhannvaad' },
      ur: { text: 'شکریہ', phonetic: 'Shukriya' },
      or: { text: 'ଧନ୍ୟବାଦ', phonetic: 'Dhanyabaad' },
      as: { text: 'ধন্যবাদ', phonetic: 'Dhonyobad' },
      sa: { text: 'धन्यवादः', phonetic: 'Dhanyavaadah' },
    }
  },
  {
    keywords: ['vegetarian', 'veg', 'shakahari', 'pure veg'],
    translations: {
      en: { text: 'Pure Vegetarian', phonetic: 'Pure Vegetarian' },
      hi: { text: 'शुद्ध शाकाहारी', phonetic: 'Shuddh Shaakahari' },
      bn: { text: 'নিরামিষ', phonetic: 'Niramish' },
      ta: { text: 'சைவம்', phonetic: 'Saivam' },
      te: { text: 'శాకాహారం', phonetic: 'Shaakaahaaram' },
      mr: { text: 'शाकाहारी', phonetic: 'Shaakaahaari' },
      gu: { text: 'શુદ્ધ શાકાહારી', phonetic: 'Shuddh Shaakahari' },
      kn: { text: 'ಸಸ್ಯಾಹಾರಿ', phonetic: 'Sasyaahaari' },
      ml: { text: 'സസ്യാഹാരം', phonetic: 'Sasyaahaaram' },
      pa: { text: 'ਸ਼ਾਕਾਹਾਰੀ', phonetic: 'Shakaahaari' },
      ur: { text: 'سبزی خور', phonetic: 'Sabzi khor' },
      or: { text: 'ନିରାମିଷ', phonetic: 'Niramisa' },
      as: { text: 'নিৰামিষ', phonetic: 'Niramikh' },
      sa: { text: 'शाकाहारी', phonetic: 'Shaakaahaari' },
    }
  },
  {
    keywords: ['how much', 'cost', 'price', 'rate', 'kitna'],
    translations: {
      en: { text: 'How much does this cost?', phonetic: 'How much is this?' },
      hi: { text: 'यह कितने का है?', phonetic: 'Yeh kitne ka hai?' },
      bn: { text: 'এটার দাম কত?', phonetic: 'Etaar daam koto?' },
      ta: { text: 'இதன் விலை என்ன?', phonetic: 'Idhan vilai enna?' },
      te: { text: 'దీని ధర ఎంత?', phonetic: 'Deeni dhara entha?' },
      mr: { text: 'याची किंमत काय आहे?', phonetic: 'Yaachi kimmat kaay aahe?' },
      gu: { text: 'આની કિંમત કેટલી છે?', phonetic: 'Aani kimmat ketli chhe?' },
      kn: { text: 'ಇದರ ಬೆಲೆ ಎಷ್ಟು?', phonetic: 'Idhara bele eshtu?' },
      ml: { text: 'ഇതിന് എത്ര വിലയാകും?', phonetic: 'Ithinu ethra vilayaakum?' },
      pa: { text: 'ਇਸਦਾ ਮੁੱਲ ਕਿੰਨਾ ਹੈ?', phonetic: 'Isda mull kinna hai?' },
      ur: { text: 'اس کی قیمت کیا ہے؟', phonetic: 'Is ki qeemat kya hai?' },
      or: { text: 'ଏହାର ମୂଲ୍ୟ କେତେ?', phonetic: 'Ehara mulya kete?' },
      as: { text: 'ইয়াৰ দাম কিমান?', phonetic: 'Iyaar daam kiman?' },
      sa: { text: 'अस्य मूल्यं किम्?', phonetic: 'Asya mulyam kim?' },
    }
  },
  {
    keywords: ['where is', 'kahan hai', 'direction', 'route'],
    translations: {
      en: { text: 'Where is it?', phonetic: 'Where is it?' },
      hi: { text: 'यह कहाँ है?', phonetic: 'Yeh kahan hai?' },
      bn: { text: 'এটা কোথায়?', phonetic: 'Eta kothay?' },
      ta: { text: 'இது எங்கே இருக்கிறது?', phonetic: 'Idhu engey irukkiradhu?' },
      te: { text: 'ఇది ఎక్కడ ఉంది?', phonetic: 'Idi ekkada undi?' },
      mr: { text: 'हे कुठे आहे?', phonetic: 'He kuthe aahe?' },
      gu: { text: 'આ ક્યાં છે?', phonetic: 'Aa kyan chhe?' },
      kn: { text: 'ಇದು ಎಲ್ಲಿದೆ?', phonetic: 'Idu ellide?' },
      ml: { text: 'ഇത് എവിടെയാണ്?', phonetic: 'Ithu evideyannu?' },
      pa: { text: 'ਇਹ ਕਿੱਥੇ ਹੈ?', phonetic: 'Eh kithe hai?' },
      ur: { text: 'یہ کہاں ہے؟', phonetic: 'Yeh kahan hai?' },
      or: { text: 'ଏହା କେଉଁଠାରେ ଅଛି?', phonetic: 'Eha keunthare achhi?' },
      as: { text: 'এইটো ক’ত আছে?', phonetic: 'Eito kot aase?' },
      sa: { text: 'इदं कुत्र अस्ति?', phonetic: 'Idam kutra asti?' },
    }
  },
  {
    keywords: ['ticket', 'pass', 'entry ticket'],
    translations: {
      en: { text: 'Entry Ticket', phonetic: 'Ticket' },
      hi: { text: 'प्रवेश टिकट', phonetic: 'Pravesh Ticket' },
      bn: { text: 'প্রবেশ টিকিট', phonetic: 'Probesh ticket' },
      ta: { text: 'நுழைவுச் சீட்டு', phonetic: 'Nuzhaivu cheettu' },
      te: { text: 'ప్రవేశ టికెట్', phonetic: 'Pravesha ticket' },
      mr: { text: 'प्रवेश तिकीट', phonetic: 'Pravesh ticket' },
      gu: { text: 'પ્રવેશ ટિકિટ', phonetic: 'Pravesh ticket' },
      kn: { text: 'ಪ್ರವೇಶ ಟಿಕೆಟ್', phonetic: 'Pravesha ticket' },
      ml: { text: 'പ്രവേശന ടിക്കറ്റ്', phonetic: 'Praveshana ticket' },
      pa: { text: 'ਦਾਖਲਾ ਟਿਕਟ', phonetic: 'Dakhla ticket' },
      ur: { text: 'داخلہ ٹکٹ', phonetic: 'Dakhla ticket' },
      or: { text: 'ପ୍ରବେଶ ଟିକେଟ', phonetic: 'Prabesa ticket' },
      as: { text: 'প্ৰৱেশ টিকট', phonetic: 'Prawesh tikot' },
      sa: { text: 'प्रवेश-पत्रम् (टिकट)', phonetic: 'Praveshapatram' },
    }
  }
];

// In-memory cache for fast repeated queries
const translationMemoryCache = new Map<string, { translatedText: string; phonetic: string; matchType: 'exact-phrase' | 'dictionary' | 'machine-translation' | 'fallback'; confidence: number }>();

// Synchronous Instant Travel Query (Checks Curated Phrasebook & Dictionary)
export function translateTravelQueryFast(
  inputText: string,
  sourceLangId: string,
  targetLangId: string
): {
  translatedText: string;
  phonetic: string;
  matchType: 'exact-phrase' | 'dictionary' | 'machine-translation' | 'fallback';
  confidence: number;
  needsAsync: boolean;
} {
  const cleanInput = inputText.trim();
  if (!cleanInput) {
    return {
      translatedText: '',
      phonetic: '',
      matchType: 'fallback',
      confidence: 0,
      needsAsync: false
    };
  }

  // Same language
  if (sourceLangId === targetLangId) {
    return {
      translatedText: cleanInput,
      phonetic: cleanInput,
      matchType: 'exact-phrase',
      confidence: 1.0,
      needsAsync: false
    };
  }

  const cacheKey = `${sourceLangId}->${targetLangId}:${cleanInput.toLowerCase()}`;
  if (translationMemoryCache.has(cacheKey)) {
    const cached = translationMemoryCache.get(cacheKey)!;
    return {
      ...cached,
      needsAsync: false
    };
  }

  const lowerInput = cleanInput.toLowerCase();

  // 1. Direct phrase search in curated phrasebook
  for (const phrase of TRAVEL_PHRASES) {
    const srcTrans = phrase.translations[sourceLangId]?.text.toLowerCase() || '';
    const srcPhonetic = phrase.translations[sourceLangId]?.phonetic?.toLowerCase() || '';
    const engText = phrase.english.toLowerCase();

    if (
      lowerInput === engText ||
      lowerInput === srcTrans ||
      lowerInput === srcPhonetic ||
      lowerInput.includes(engText) ||
      (srcTrans && lowerInput.includes(srcTrans))
    ) {
      const targetTrans = phrase.translations[targetLangId];
      if (targetTrans) {
        const result = {
          translatedText: targetTrans.text,
          phonetic: targetTrans.phonetic,
          matchType: 'exact-phrase' as const,
          confidence: 0.98,
          needsAsync: false
        };
        translationMemoryCache.set(cacheKey, result);
        return result;
      }
    }
  }

  // 2. Offline Travel Dictionary keyword match
  for (const entry of TRAVEL_DICTIONARY) {
    for (const kw of entry.keywords) {
      if (lowerInput === kw || lowerInput.includes(kw)) {
        const targetEntry = entry.translations[targetLangId];
        if (targetEntry) {
          const result = {
            translatedText: targetEntry.text,
            phonetic: targetEntry.phonetic || `Keyword: ${kw}`,
            matchType: 'dictionary' as const,
            confidence: 0.9,
            needsAsync: false
          };
          translationMemoryCache.set(cacheKey, result);
          return result;
        }
      }
    }
  }

  // Fallback requires live non-AI neural translation
  return {
    translatedText: '',
    phonetic: '',
    matchType: 'fallback',
    confidence: 0,
    needsAsync: true
  };
}

// Backward-compatible synchronous wrapper
export function translateTravelQuery(
  inputText: string,
  sourceLangId: string,
  targetLangId: string
): {
  translatedText: string;
  phonetic: string;
  matchType: 'exact-phrase' | 'approximate' | 'fallback';
  confidence: number;
} {
  const fast = translateTravelQueryFast(inputText, sourceLangId, targetLangId);
  return {
    translatedText: fast.translatedText || inputText,
    phonetic: fast.phonetic || '',
    matchType: fast.matchType === 'exact-phrase' ? 'exact-phrase' : fast.matchType === 'dictionary' ? 'approximate' : 'fallback',
    confidence: fast.confidence
  };
}

// Secure Backend Translation Result Interface
export interface BackendTranslationResult {
  success: boolean;
  translatedText?: string;
  phonetic?: string;
  detectedSource?: string;
  matchType?: 'exact-phrase' | 'dictionary' | 'machine-translation' | 'backend-gemini' | 'fallback';
  confidence?: number;
  provider?: string;
  error?: string;
  message?: string;
}

export async function checkBackendStatus(): Promise<{
  configured: boolean;
  provider: string;
  model: string;
  instructions: string;
}> {
  try {
    const res = await fetch('/api/translate/status');
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.warn('Could not connect to /api/translate/status:', err);
  }
  return {
    configured: false,
    provider: 'gemini',
    model: 'gemini-3.8-flash',
    instructions: 'Server connection error. Please ensure the backend is running.',
  };
}

export async function translateSecureBackend(
  inputText: string,
  sourceLangId: string,
  targetLangId: string
): Promise<BackendTranslationResult> {
  const cleanInput = inputText.trim();
  if (!cleanInput) {
    return {
      success: true,
      translatedText: '',
      phonetic: '',
      matchType: 'fallback',
      confidence: 0
    };
  }

  // 1. Check verified travel phrasebook first for instant match
  const fast = translateTravelQueryFast(cleanInput, sourceLangId, targetLangId);
  if (!fast.needsAsync && fast.translatedText) {
    return {
      success: true,
      translatedText: fast.translatedText,
      phonetic: fast.phonetic,
      matchType: fast.matchType,
      confidence: fast.confidence,
      provider: 'verified-phrasebook'
    };
  }

  // 2. Call secure backend translation API
  try {
    const response = await fetch('/api/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: cleanInput,
        sourceLang: sourceLangId,
        targetLang: targetLangId
      })
    });

    const data = await response.json();

    if (response.ok && data.success) {
      return {
        success: true,
        translatedText: data.translatedText,
        phonetic: data.phonetic,
        detectedSource: data.detectedSource,
        matchType: 'backend-gemini',
        confidence: 0.98,
        provider: data.provider || 'gemini-3.8-flash'
      };
    }

    // Provider not configured or specific error returned by backend
    return {
      success: false,
      error: data.error || 'API_ERROR',
      message: data.message || 'Translation request failed on backend.'
    };
  } catch (networkErr: any) {
    console.error('Failed to communicate with translation backend:', networkErr);
    return {
      success: false,
      error: 'NETWORK_ERROR',
      message: 'Network connection to translation backend failed. Please check connection.'
    };
  }
}

// Retain legacy non-AI fallback for offline/curated mode
export async function translateNonAIAsync(
  inputText: string,
  sourceLangId: string,
  targetLangId: string
): Promise<{
  translatedText: string;
  phonetic: string;
  matchType: 'exact-phrase' | 'dictionary' | 'machine-translation' | 'fallback';
  confidence: number;
}> {
  const cleanInput = inputText.trim();
  if (!cleanInput) {
    return {
      translatedText: '',
      phonetic: '',
      matchType: 'fallback',
      confidence: 0
    };
  }

  // Check Fast lookup first
  const fast = translateTravelQueryFast(cleanInput, sourceLangId, targetLangId);
  if (!fast.needsAsync && fast.translatedText) {
    return {
      translatedText: fast.translatedText,
      phonetic: fast.phonetic,
      matchType: fast.matchType,
      confidence: fast.confidence
    };
  }

  const cacheKey = `${sourceLangId}->${targetLangId}:${cleanInput.toLowerCase()}`;
  if (translationMemoryCache.has(cacheKey)) {
    return translationMemoryCache.get(cacheKey)!;
  }

  const srcCode = LANG_API_MAP[sourceLangId] || sourceLangId;
  const tgtCode = LANG_API_MAP[targetLangId] || targetLangId;

  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(cleanInput)}&langpair=${encodeURIComponent(srcCode)}|${encodeURIComponent(tgtCode)}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data?.responseData?.translatedText) {
        let text = decodeHtmlEntities(data.responseData.translatedText).trim();

        // If returned text is essentially identical to input or error warning
        if (text && text.toLowerCase() !== cleanInput.toLowerCase() && !text.toUpperCase().includes('MYMEMORY WARNING')) {
          const result = {
            translatedText: text,
            phonetic: `Spoken in ${INDIAN_LANGUAGES.find((l) => l.id === targetLangId)?.name || targetLangId}`,
            matchType: 'machine-translation' as const,
            confidence: data.responseData.match || 0.88
          };
          translationMemoryCache.set(cacheKey, result);
          return result;
        }
      }
    }

    // Two-step bridge through English if direct pair had limited corpus
    if (sourceLangId !== 'en' && targetLangId !== 'en') {
      const toEngRes = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(cleanInput)}&langpair=${encodeURIComponent(srcCode)}|en-GB`);
      if (toEngRes.ok) {
        const engData = await toEngRes.json();
        const engText = decodeHtmlEntities(engData?.responseData?.translatedText || '').trim();
        if (engText && engText.toLowerCase() !== cleanInput.toLowerCase()) {
          const toTgtRes = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(engText)}&langpair=en-GB|${encodeURIComponent(tgtCode)}`);
          if (toTgtRes.ok) {
            const tgtData = await toTgtRes.json();
            const finalText = decodeHtmlEntities(tgtData?.responseData?.translatedText || '').trim();
            if (finalText) {
              const result = {
                translatedText: finalText,
                phonetic: `Spoken in ${INDIAN_LANGUAGES.find((l) => l.id === targetLangId)?.name || targetLangId}`,
                matchType: 'machine-translation' as const,
                confidence: 0.85
              };
              translationMemoryCache.set(cacheKey, result);
              return result;
            }
          }
        }
      }
    }
  } catch (err) {
    console.warn('Network non-AI translation failed or timed out:', err);
  }

  // Graceful offline fallback
  const targetLang = INDIAN_LANGUAGES.find((l) => l.id === targetLangId);
  return {
    translatedText: cleanInput,
    phonetic: `Spoken in ${targetLang?.name || targetLangId}`,
    matchType: 'fallback',
    confidence: 0.5
  };
}

