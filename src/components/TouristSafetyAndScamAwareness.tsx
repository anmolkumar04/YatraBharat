import React, { useState, useMemo } from 'react';
import {
  Shield,
  ShieldAlert,
  AlertTriangle,
  Phone,
  PhoneCall,
  CheckCircle2,
  Info,
  Compass,
  Users,
  Eye,
  ChevronDown,
  ChevronUp,
  Send,
  X,
  MapPin,
  Clock,
  Sparkles,
  Search,
  ExternalLink,
  Lock,
  ArrowRight
} from 'lucide-react';
import {
  IndiaRegion,
  TouristScamItem,
  SafetyAudience,
  ScamReport
} from '../types';
import {
  getRegionalScams,
  AUDIENCE_SAFETY_TIPS,
  getRegionalScamReports,
  saveUserScamReport
} from '../data/safetyScamData';

interface TouristSafetyAndScamAwarenessProps {
  region: IndiaRegion;
}

export const TouristSafetyAndScamAwareness: React.FC<TouristSafetyAndScamAwarenessProps> = ({
  region
}) => {
  // State for scam list category filter & expansion
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedScamId, setExpandedScamId] = useState<string | null>(null);

  // State for audience safety tips tab
  const [selectedAudience, setSelectedAudience] = useState<SafetyAudience>('Women Travelers');

  // State for Community Advisory reports & submission form
  const [reports, setReports] = useState<ScamReport[]>(() =>
    getRegionalScamReports(region.id, region.name)
  );
  const [isReportFormOpen, setIsReportFormOpen] = useState(false);
  const [reportSuccessMessage, setReportSuccessMessage] = useState<string | null>(null);

  // Form input states
  const [formLocation, setFormLocation] = useState('');
  const [formScamType, setFormScamType] = useState('Fake Guides & Touts');
  const [formDescription, setFormDescription] = useState('');
  const [formApproxLoss, setFormApproxLoss] = useState('');
  const [formErrors, setFormErrors] = useState<{ location?: string; description?: string }>({});

  // Scams for the current region
  const regionalScams = useMemo(() => {
    return getRegionalScams(region);
  }, [region]);

  // Filtered scams
  const filteredScams = useMemo(() => {
    if (selectedCategory === 'All') return regionalScams;
    return regionalScams.filter((s) => s.category === selectedCategory);
  }, [regionalScams, selectedCategory]);

  // Categories list for tabs
  const categories = useMemo(() => {
    const cats = Array.from(new Set(regionalScams.map((s) => s.category)));
    return ['All', ...cats];
  }, [regionalScams]);

  // Audience tips filtered
  const filteredTips = useMemo(() => {
    return AUDIENCE_SAFETY_TIPS.filter((t) => t.audience === selectedAudience);
  }, [selectedAudience]);

  // Toggle scam accordion
  const toggleScamExpand = (scamId: string) => {
    setExpandedScamId((prev) => (prev === scamId ? null : scamId));
  };

  // Handle report submission
  const handleSubmitReport = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { location?: string; description?: string } = {};

    if (!formLocation.trim()) {
      errors.location = 'Please specify the location or landmark.';
    }
    if (!formDescription.trim() || formDescription.trim().length < 15) {
      errors.description = 'Please provide at least 15 characters describing what happened.';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});

    const createdReport = saveUserScamReport(region.id, {
      location: formLocation.trim(),
      scamType: formScamType,
      description: formDescription.trim(),
      approximateLoss: formApproxLoss.trim() ? formApproxLoss.trim() : undefined
    });

    // Update local state with the new report
    setReports((prev) => [createdReport, ...prev]);

    // Reset form & show confirmation
    setFormLocation('');
    setFormDescription('');
    setFormApproxLoss('');
    setIsReportFormOpen(false);
    setReportSuccessMessage(
      'Thank you! Your simulated community scam report has been submitted and added to this session’s advisory stream.'
    );

    // Automatically clear banner after 8 seconds
    setTimeout(() => {
      setReportSuccessMessage(null);
    }, 8000);
  };

  return (
    <section id="section-safety" className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 border border-[#D5DDD8] shadow-sm space-y-10">
      {/* ---------------- 1. HEADER & VERIFIED ADVISORY INTRO ---------------- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#D5DDD8]">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E25822] uppercase tracking-wider mb-1">
            <Shield className="w-3.5 h-3.5" />
            <span>Tourist Safety & Scam Awareness Hub</span>
          </div>
          <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#13221B]">
            Traveler Safety & Scam Defense in {region.name}
          </h2>
          <p className="text-xs sm:text-sm text-[#5C7065] mt-1 max-w-2xl leading-relaxed">
            Recognize common tourist traps, verify official services, and equip yourself with actionable prevention tips and 24×7 emergency helplines.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-center">
          <span className="text-xs text-[#185240] font-bold bg-white px-3.5 py-2 rounded-full border border-[#D5DDD8] flex items-center gap-1.5 shadow-xs">
            <ShieldAlert className="w-3.5 h-3.5 text-[#E25822]" />
            <span>Incredible India Vigilance</span>
          </span>
        </div>
      </div>

      {/* ---------------- 2. DIRECT CLICKABLE EMERGENCY HELPLINES ---------------- */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#E25822]" />
            <h3 className="font-serif-title text-base sm:text-lg font-bold text-[#13221B]">
              Emergency Contacts & Tourist Helplines
            </h3>
          </div>
          <span className="text-[11px] text-[#7A8E82] font-medium hidden sm:inline">
            Tap on mobile for instant connection
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* National Emergency 112 */}
          <div className="p-4 rounded-2xl bg-white border border-[#D5DDD8] hover:border-[#185240] transition-all flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A8E82]">
                  National Emergency
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  24×7 Toll-Free
                </span>
              </div>
              <h4 className="font-serif-title text-base font-bold text-[#13221B]">
                Police, Medical & Fire
              </h4>
              <p className="text-[11px] text-[#5C7065] mt-1 leading-relaxed">
                Single pan-India emergency number for all distress situations.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#EDE8E0] flex items-center justify-between">
              <span className="text-2xl font-black text-[#185240] tracking-tight">
                112
              </span>
              <a
                href="tel:112"
                id="btn-call-112"
                className="px-3.5 py-2 rounded-xl bg-[#185240] hover:bg-[#0B2B20] text-white text-xs font-bold transition-transform active:scale-95 flex items-center gap-1.5 shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#FFB26B]" />
                <span>Call 112</span>
              </a>
            </div>
          </div>

          {/* Ministry of Tourism Helpline 1363 */}
          <div className="p-4 rounded-2xl bg-white border border-[#D5DDD8] hover:border-[#E25822] transition-all flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E25822]">
                  Tourist Helpline
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-orange-50 text-[#E25822] border border-orange-200">
                  12 Languages
                </span>
              </div>
              <h4 className="font-serif-title text-base font-bold text-[#13221B]">
                Ministry of Tourism
              </h4>
              <p className="text-[11px] text-[#5C7065] mt-1 leading-relaxed">
                24x7 multi-lingual advice, dispute mediation, and guidance.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#EDE8E0] flex items-center justify-between">
              <span className="text-2xl font-black text-[#E25822] tracking-tight">
                1363
              </span>
              <a
                href="tel:1363"
                id="btn-call-1363"
                className="px-3.5 py-2 rounded-xl bg-[#E25822] hover:bg-[#C84614] text-white text-xs font-bold transition-transform active:scale-95 flex items-center gap-1.5 shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5 text-white" />
                <span>Call 1363</span>
              </a>
            </div>
          </div>

          {/* Women Safety Helpline 1090 / 181 */}
          <div className="p-4 rounded-2xl bg-white border border-[#D5DDD8] hover:border-purple-600 transition-all flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700">
                  Women Safety
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-purple-800 border border-purple-200">
                  Women Officers
                </span>
              </div>
              <h4 className="font-serif-title text-base font-bold text-[#13221B]">
                Women Power Line
              </h4>
              <p className="text-[11px] text-[#5C7065] mt-1 leading-relaxed">
                Immediate response for harassment, stalking, and safety support.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#EDE8E0] flex items-center justify-between">
              <span className="text-2xl font-black text-purple-800 tracking-tight">
                1090
              </span>
              <a
                href="tel:1090"
                id="btn-call-1090"
                className="px-3.5 py-2 rounded-xl bg-purple-800 hover:bg-purple-900 text-white text-xs font-bold transition-transform active:scale-95 flex items-center gap-1.5 shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5 text-purple-200" />
                <span>Call 1090</span>
              </a>
            </div>
          </div>

          {/* State Tourist Police Desk */}
          <div className="p-4 rounded-2xl bg-white border border-[#D5DDD8] hover:border-[#185240] transition-all flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A8E82]">
                  State Police Desk
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#FAF7F2] text-[#185240] border border-[#D5DDD8]">
                  {region.name}
                </span>
              </div>
              <h4 className="font-serif-title text-base font-bold text-[#13221B]">
                Regional Tourist Police
              </h4>
              <p className="text-[11px] text-[#5C7065] mt-1 leading-relaxed truncate">
                {region.safety.touristPolice}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#EDE8E0] flex items-center justify-between">
              <span className="text-xs font-bold text-[#185240] truncate max-w-[110px]">
                {region.safety.emergencyHelpline || '112 / 1363'}
              </span>
              <a
                href="tel:112"
                id="btn-call-regional-police"
                className="px-3 py-2 rounded-xl bg-[#FAF7F2] hover:bg-[#EDE8E0] text-[#185240] border border-[#D5DDD8] text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#185240]" />
                <span>Connect</span>
              </a>
            </div>
          </div>
        </div>

        {/* Toll-free alternate text */}
        <div className="flex flex-wrap items-center justify-between text-xs text-[#5C7065] bg-white/70 px-4 py-2.5 rounded-xl border border-[#E5DFD5]">
          <span className="flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-[#E25822]" />
            <span>National Cyber Fraud Financial Helpline: <strong>1930</strong> (Report instant UPI/Card fraud within golden hour)</span>
          </span>
          <span className="font-medium">Incredible India Toll-Free: <strong>1800-11-1363</strong></span>
        </div>
      </div>

      {/* ---------------- 3. COMMON TOURIST SCAMS & WARNING SIGNS ---------------- */}
      <div className="space-y-6 pt-4 border-t border-[#D5DDD8]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#E25822]/10 text-[#E25822] flex items-center justify-center font-bold">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif-title text-xl font-bold text-[#13221B]">
                Common Tourist Scams & Prevention Playbook
              </h3>
              <p className="text-xs text-[#5C7065]">
                Real-world tactics, warning red flags, and verified counter-measures for {region.name}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsReportFormOpen((prev) => !prev)}
            id="btn-open-report-scam"
            className="self-start sm:self-auto px-4 py-2 rounded-xl text-xs font-bold bg-[#E25822] hover:bg-[#C84614] text-white shadow-sm transition-all cursor-pointer flex items-center gap-1.5"
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Report a Scam / Trap +</span>
          </button>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#185240] text-white shadow-xs'
                  : 'bg-white text-[#5C7065] hover:bg-[#F3EFEA] border border-[#D5DDD8]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Scams Interactive List */}
        <div className="space-y-4">
          {filteredScams.map((scam) => {
            const isExpanded = expandedScamId === scam.id;

            return (
              <div
                key={scam.id}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'border-[#185240] shadow-md ring-1 ring-[#185240]/20'
                    : 'border-[#D5DDD8] hover:border-[#185240]/60 shadow-xs'
                }`}
              >
                {/* Header Row (Always visible) */}
                <div
                  onClick={() => toggleScamExpand(scam.id)}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer select-none bg-white hover:bg-[#FAF7F2]/60 transition-colors"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FAF7F2] text-[#185240] border border-[#D5DDD8]">
                        {scam.category}
                      </span>

                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          scam.severity === 'High'
                            ? 'bg-red-50 text-red-700 border border-red-200'
                            : scam.severity === 'Medium'
                            ? 'bg-amber-50 text-amber-800 border border-amber-200'
                            : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        }`}
                      >
                        {scam.severity} Risk
                      </span>

                      <span className="text-[11px] text-[#7A8E82] flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#E25822]" />
                        <span>{scam.commonLocation}</span>
                      </span>
                    </div>

                    <h4 className="font-serif-title text-base sm:text-lg font-bold text-[#13221B]">
                      {scam.title}
                    </h4>

                    <p className="text-xs text-[#5C7065] line-clamp-1 leading-relaxed">
                      {scam.modusOperandi}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                    <span className="text-xs font-bold text-[#185240] hidden sm:inline">
                      {isExpanded ? 'Hide Details' : 'Warning Signs & Tips'}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-[#FAF7F2] border border-[#D5DDD8] flex items-center justify-center text-[#185240]">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Accordion Body */}
                {isExpanded && (
                  <div className="p-4 sm:p-6 border-t border-[#EDE8E0] bg-[#FAF7F2]/50 space-y-5 animate-in fade-in duration-200">
                    {/* Modus Operandi Full */}
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-[#13221B] mb-1 flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-[#E25822]" />
                        <span>How the Scam Unfolds</span>
                      </h5>
                      <p className="text-xs sm:text-sm text-[#405247] leading-relaxed bg-white p-3.5 rounded-xl border border-[#E5DFD5]">
                        {scam.modusOperandi}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Warning Signs */}
                      <div className="p-4 rounded-xl bg-red-50/50 border border-red-100 space-y-2.5">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-red-900 uppercase tracking-wider">
                          <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
                          <span>Red Flags to Watch For</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-red-950">
                          {scam.warningSigns.map((sign, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 shrink-0" />
                              <span className="leading-snug">{sign}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Prevention Tips */}
                      <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100 space-y-2.5">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 uppercase tracking-wider">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Practical Prevention Defense</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-emerald-950">
                          {scam.preventionTips.map((tip, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                              <span className="leading-snug">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Contextual Real-world narrative */}
                    {scam.realExample && (
                      <div className="p-3.5 rounded-xl bg-white border border-[#E5DFD5] text-xs text-[#5C7065] flex items-start gap-2.5">
                        <Info className="w-4 h-4 text-[#E25822] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#13221B] block mb-0.5">Reported Scenario Example:</strong>
                          <span>{scam.realExample}</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ---------------- 4. AUDIENCE-SPECIFIC SAFETY GUIDES ---------------- */}
      <div className="space-y-6 pt-4 border-t border-[#D5DDD8]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#185240] text-white flex items-center justify-center font-bold">
              <Users className="w-4 h-4 text-[#FFB26B]" />
            </div>
            <div>
              <h3 className="font-serif-title text-xl font-bold text-[#13221B]">
                Tailored Safety Rules by Traveler Segment
              </h3>
              <p className="text-xs text-[#5C7065]">
                Specialized protocols for women, solo travelers, transit riders, and families
              </p>
            </div>
          </div>
        </div>

        {/* Audience Segment Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {(['Women Travelers', 'Solo Travelers', 'General Tourists', 'Transit & Night'] as SafetyAudience[]).map(
            (aud) => (
              <button
                key={aud}
                onClick={() => setSelectedAudience(aud)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  selectedAudience === aud
                    ? 'bg-[#185240] text-white shadow-sm'
                    : 'bg-white text-[#485B50] hover:bg-[#EDE8E0] border border-[#D5DDD8]'
                }`}
              >
                <span>{aud}</span>
              </button>
            )
          )}
        </div>

        {/* Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredTips.map((tip) => (
            <div
              key={tip.id}
              className="p-5 rounded-2xl bg-white border border-[#D5DDD8] hover:border-[#185240] transition-all flex flex-col justify-between space-y-4 shadow-xs"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-full font-bold bg-[#FAF7F2] text-[#185240] border border-[#D5DDD8]">
                    {tip.badge}
                  </span>
                  <span className="text-[10px] text-[#7A8E82] font-semibold">
                    {tip.audience}
                  </span>
                </div>

                <h4 className="font-serif-title text-base font-bold text-[#13221B]">
                  {tip.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#5C7065] leading-relaxed">
                  {tip.description}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E5DFD5] text-xs text-[#185240] flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E25822] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  <strong>Key Takeaway:</strong> {tip.keyRule}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Official Regional Women Guidance from Props */}
        {region.safety.womenSafetyNote && (
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-50 via-pink-50/40 to-purple-50 border border-purple-200 flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-xl bg-purple-800 text-white flex items-center justify-center shrink-0 mt-0.5">
              <Shield className="w-4 h-4 text-purple-200" />
            </div>
            <div className="space-y-1 text-xs">
              <strong className="text-purple-900 text-sm font-bold block font-serif-title">
                {region.name} Official Solo & Women Traveler Directive
              </strong>
              <p className="text-purple-950 leading-relaxed">
                {region.safety.womenSafetyNote}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ---------------- 5. REPORT A SCAM (FORM & COMMUNITY ADVISORIES) ---------------- */}
      <div className="space-y-6 pt-4 border-t border-[#D5DDD8]">
        {/* Success Confirmation Toast Banner */}
        {reportSuccessMessage && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-start justify-between gap-3 shadow-sm animate-in fade-in duration-300">
            <div className="flex items-start gap-2.5 text-xs sm:text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold">Report Submitted Successfully!</strong>
                <span>{reportSuccessMessage}</span>
              </div>
            </div>
            <button
              onClick={() => setReportSuccessMessage(null)}
              className="text-emerald-700 hover:text-emerald-900 p-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Section Header with Demo Data Clarification Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-serif-title text-xl font-bold text-[#13221B]">
                Community Scam Advisories & Incident Reports
              </h3>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                Demo Data Notice
              </span>
            </div>
            <p className="text-xs text-[#5C7065] mt-0.5">
              Simulated community feedback to help travelers cross-verify situations. Unverified community submissions are not official police FIRs.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsReportFormOpen((prev) => !prev)}
            id="btn-toggle-report-form"
            className="self-start sm:self-auto px-4 py-2 rounded-xl text-xs font-bold text-[#185240] bg-white hover:bg-[#EDE8E0] border border-[#D5DDD8] transition-colors cursor-pointer flex items-center gap-1.5"
          >
            {isReportFormOpen ? <X className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
            <span>{isReportFormOpen ? 'Close Form' : 'Submit a Report'}</span>
          </button>
        </div>

        {/* Prominent Demo Data Disclaimer Callout */}
        <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Transparency Notice:</strong> All incident listings below are sample demonstrative records for traveler education. Do not interpret unverified reports as confirmed legal incidents. For real ongoing crimes or immediate threats, dial <strong>112</strong> or <strong>1363</strong>.
          </p>
        </div>

        {/* Interactive "Report a Scam" Form Card */}
        {isReportFormOpen && (
          <div className="p-6 rounded-3xl bg-white border-2 border-[#E25822]/30 shadow-lg space-y-5 animate-in slide-in-from-top-4 duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-[#EDE8E0]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#E25822]/10 text-[#E25822] flex items-center justify-center font-bold">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif-title text-base font-bold text-[#13221B]">
                    Report a Tourist Scam or Trap in {region.name}
                  </h4>
                  <span className="text-[11px] text-[#7A8E82]">
                    Recorded as educational community advisory in this browser session
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsReportFormOpen(false)}
                className="text-[#7A8E82] hover:text-[#13221B] p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitReport} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Location field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#13221B] block">
                    Location / Landmark / Station <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#7A8E82] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      id="input-scam-location"
                      value={formLocation}
                      onChange={(e) => setFormLocation(e.target.value)}
                      placeholder={`e.g. ${region.name} Railway Station North Exit / Main Fort Gate`}
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl text-xs bg-[#FAF7F2] border transition-colors outline-none ${
                        formErrors.location
                          ? 'border-red-500 focus:border-red-600 bg-red-50/30'
                          : 'border-[#D5DDD8] focus:border-[#185240]'
                      }`}
                    />
                  </div>
                  {formErrors.location && (
                    <span className="text-[11px] text-red-600 font-medium">
                      {formErrors.location}
                    </span>
                  )}
                </div>

                {/* Scam Type dropdown */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#13221B] block">
                    Scam Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="select-scam-type"
                    value={formScamType}
                    onChange={(e) => setFormScamType(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl text-xs bg-[#FAF7F2] border border-[#D5DDD8] focus:border-[#185240] outline-none cursor-pointer"
                  >
                    <option value="Fake Guides & Touts">Fake Guides & Unauthorized Touts</option>
                    <option value="Transport & Taxi Overcharging">Transport & Taxi / Auto Overcharging</option>
                    <option value="Fake Bookings & Hotel Diversion">Fake Bookings & Hotel Closed Diversion</option>
                    <option value="Gemstone & Souvenir Traps">Gemstone & Souvenir Courier Trap</option>
                    <option value="Spiritual / Temple Extortion">Spiritual Blessing & Sacred Thread Extortion</option>
                    <option value="Rental Vehicle Scams">Rental Bike / Scooter Damage Surcharges</option>
                    <option value="Digital & Ticket Scams">Fake Monument QR Codes & Ticket Phishing</option>
                    <option value="Other Tourist Trap">Other Overcharging / Tourist Trap</option>
                  </select>
                </div>
              </div>

              {/* Description field */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#13221B] block">
                  Incident Description & Modus Operandi <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="textarea-scam-description"
                  rows={3}
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  placeholder="Describe what occurred, what claims the tout/driver made, how you responded, and advice for other travelers..."
                  className={`w-full p-3 rounded-xl text-xs bg-[#FAF7F2] border transition-colors outline-none resize-none ${
                    formErrors.description
                      ? 'border-red-500 focus:border-red-600 bg-red-50/30'
                      : 'border-[#D5DDD8] focus:border-[#185240]'
                  }`}
                />
                {formErrors.description && (
                  <span className="text-[11px] text-red-600 font-medium">
                    {formErrors.description}
                  </span>
                )}
              </div>

              {/* Approximate loss optional field */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#13221B] block">
                    Approximate Loss or Demanded Amount (Optional)
                  </label>
                  <input
                    type="text"
                    id="input-scam-loss"
                    value={formApproxLoss}
                    onChange={(e) => setFormApproxLoss(e.target.value)}
                    placeholder="e.g. ₹500 demanded / ₹0 avoided / ₹1,200 lost"
                    className="w-full px-3 py-2.5 rounded-xl text-xs bg-[#FAF7F2] border border-[#D5DDD8] focus:border-[#185240] outline-none"
                  />
                </div>

                <div className="flex items-end justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsReportFormOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold text-[#5C7065] hover:text-[#13221B] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    id="btn-submit-scam-report"
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#E25822] hover:bg-[#C84614] shadow-md transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Demo Advisory</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* Advisory List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reports.map((report) => (
            <div
              key={report.id}
              className={`p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-3 shadow-xs ${
                report.status === 'User Submitted (Session)'
                  ? 'bg-orange-50/50 border-[#E25822]/50'
                  : 'bg-white border-[#D5DDD8]'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="px-2.5 py-0.5 rounded-full font-bold bg-[#FAF7F2] text-[#185240] border border-[#D5DDD8] truncate max-w-[200px]">
                    {report.scamType}
                  </span>

                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      report.status === 'User Submitted (Session)'
                        ? 'bg-[#E25822] text-white'
                        : 'bg-amber-100 text-amber-900 border border-amber-300'
                    }`}
                  >
                    {report.status}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-xs font-bold text-[#13221B]">
                  <MapPin className="w-3.5 h-3.5 text-[#E25822] shrink-0" />
                  <span>{report.location}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#5C7065] leading-relaxed">
                  {report.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[#EDE8E0] flex items-center justify-between text-xs text-[#7A8E82]">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{report.dateReported}</span>
                </span>

                {report.approximateLoss && (
                  <span className="font-semibold text-[#185240]">
                    Impact: {report.approximateLoss}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
