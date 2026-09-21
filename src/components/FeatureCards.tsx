import React from 'react';
import { Compass, UtensilsCrossed, ShieldCheck, CalendarDays, ArrowRight, CheckCircle2, Languages, Mic } from 'lucide-react';
import { CORE_FEATURES } from '../data/features';

interface FeatureCardsProps {
  onOpenExploreCircuit: () => void;
  onOpenCultureFood: () => void;
  onOpenSafetyModal: () => void;
  onOpenTripPlanner: () => void;
  onOpenVoiceTranslator?: () => void;
}

export const FeatureCards: React.FC<FeatureCardsProps> = ({
  onOpenExploreCircuit,
  onOpenCultureFood,
  onOpenSafetyModal,
  onOpenTripPlanner,
  onOpenVoiceTranslator,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#185240]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 text-[#E25822]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#113D2F]" />;
      case 'CalendarDays':
        return <CalendarDays className="w-6 h-6 text-[#D95B16]" />;
      default:
        return <Compass className="w-6 h-6 text-[#185240]" />;
    }
  };

  const handleAction = (id: string) => {
    switch (id) {
      case 'explore-places':
        onOpenExploreCircuit();
        break;
      case 'local-culture-food':
        onOpenCultureFood();
        break;
      case 'travel-safety':
        onOpenSafetyModal();
        break;
      case 'plan-your-trip':
        onOpenTripPlanner();
        break;
      default:
        break;
    }
  };

  return (
    <section id="features" className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#185240]/10 border border-[#185240]/20 text-[#185240] text-xs sm:text-sm font-semibold mb-3">
            Core Pillars of Incredible India
          </div>
          <h2
            id="features-section-heading"
            className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#113D2F] tracking-tight mb-4"
          >
            A Unified Bridge to Incredible India
          </h2>
          <p className="text-base sm:text-lg text-[#475E54] leading-relaxed">
            YatraBharat addresses tourism fragmentation with core pillars designed for foreign and domestic travelers: discovery, cultural immersion, uncompromising safety, multi-lingual translation, and intelligent planning.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CORE_FEATURES.map((feature) => {
            const isSaffron = feature.colorScheme === 'saffron';
            const isAmber = feature.colorScheme === 'amber';
            const isTeal = feature.colorScheme === 'teal';

            return (
              <div
                key={feature.id}
                id={`feature-card-${feature.id}`}
                className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-[#EAE2D5] hover:border-[#185240]/50 shadow-sm hover:shadow-xl hover:shadow-[#0B2B20]/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                        isSaffron
                          ? 'bg-[#FFF2EB] border border-[#FFD8C4]'
                          : isAmber
                          ? 'bg-[#FEF7EC] border border-[#FDE68A]'
                          : isTeal
                          ? 'bg-[#EBF7F2] border border-[#A7E3CB]'
                          : 'bg-[#EBF4F0] border border-[#BCE1D2]'
                      }`}
                    >
                      {getIcon(feature.iconName)}
                    </div>
                    <span
                      className={`text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full border ${
                        isSaffron
                          ? 'bg-[#FFF5F0] text-[#B53B0B] border-[#FFD8C4]'
                          : isAmber
                          ? 'bg-[#FEF9EE] text-[#B45309] border-[#FDE68A]'
                          : isTeal
                          ? 'bg-[#F0FAF5] text-[#0E5A3E] border-[#A7E3CB]'
                          : 'bg-[#F2F8F5] text-[#185240] border-[#BCE1D2]'
                      }`}
                    >
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-[#113D2F] mb-1.5 group-hover:text-[#E25822] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#856404] tracking-wide mb-3">
                    {feature.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-[#475E54] leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 mb-6 pt-4 border-t border-[#F4EFE6]">
                    {feature.highlights.map((point, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-[#2C4137]">
                        <CheckCircle2 className="w-4 h-4 text-[#185240] flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Button */}
                <button
                  id={`feature-action-btn-${feature.id}`}
                  onClick={() => handleAction(feature.id)}
                  className={`w-full py-3 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isSaffron
                      ? 'bg-[#FFF2EB] hover:bg-[#E25822] text-[#B53B0B] hover:text-white border border-[#FFD8C4]'
                      : isAmber
                      ? 'bg-[#FEF7EC] hover:bg-[#D95B16] text-[#B45309] hover:text-white border border-[#FDE68A]'
                      : isTeal
                      ? 'bg-[#EBF7F2] hover:bg-[#113D2F] text-[#0E5A3E] hover:text-white border border-[#A7E3CB]'
                      : 'bg-[#EBF4F0] hover:bg-[#185240] text-[#185240] hover:text-white border border-[#BCE1D2]'
                  }`}
                >
                  <span>{feature.actionLabel}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Feature Spotlight: Voice Translator */}
        {onOpenVoiceTranslator && (
          <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#0B2B20] via-[#113D2F] to-[#185240] p-6 sm:p-8 text-white shadow-xl border border-[#236B54]/60 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#E25822] p-3 flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#E25822]/30">
                <Languages className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E25822]/20 border border-[#E25822]/40 text-[#FF9E68] text-[11px] font-bold uppercase tracking-wider mb-1">
                  Built for Seamless Travel Across India
                </div>
                <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-white">
                  Multi-lingual Voice & Speech Translator
                </h3>
                <p className="text-xs sm:text-sm text-[#D0DFD7] max-w-xl mt-1 leading-relaxed">
                  Bridge language barriers across India with speech recognition, clear audio pronunciation, driver card display, and essential travel phrasebooks in 14 Indian languages.
                </p>
              </div>
            </div>
            <button
              id="feature-banner-translator-btn"
              onClick={onOpenVoiceTranslator}
              className="w-full md:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-[#E25822] to-[#D95B16] hover:from-[#C84614] hover:to-[#B53B0B] text-white text-sm font-bold shadow-lg shadow-[#E25822]/30 hover:shadow-xl transition-all flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer"
            >
              <Mic className="w-4 h-4 text-white" />
              <span>Launch Voice Translator</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
