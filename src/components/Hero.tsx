import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Sparkles, MapPin, Award } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onPlanTripClick: () => void;
  onOpenSafetyClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onPlanTripClick,
  onOpenSafetyClick,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0B2B20]"
    >
      {/* Background Image with Deep Green Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=85"
          alt="Historic Indian monument architecture illuminated by warm sunrise"
          className="w-full h-full object-cover object-center scale-105 transform animate-pulse duration-[10000ms] opacity-35"
        />
        {/* Layered gradients for deep contrast and warm cream/saffron glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B20] via-[#0B2B20]/75 to-[#0B2B20]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#E25822]/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#185240]/40 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Platform Accreditation Badge */}
        <div
          id="hero-badge"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#113D2F]/90 border border-[#236B54]/60 shadow-lg shadow-[#0B2B20]/40 mb-6 backdrop-blur-md"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E25822] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E25822]"></span>
          </span>
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#FAF7F2]">
            Incredible India · Discover All 28 States & 8 UTs
          </span>
        </div>

        {/* Hero Main Heading */}
        <h1
          id="hero-main-heading"
          className="font-serif-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#FAF7F2] tracking-tight max-w-5xl leading-[1.1] mb-6"
        >
          Discover India, <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A4C] via-[#E25822] to-[#FFB26B]">
            Your Way
          </span>
        </h1>

        {/* Short Tagline */}
        <p
          id="hero-tagline"
          className="text-base sm:text-xl md:text-2xl text-[#D0DFD7] max-w-3xl font-normal leading-relaxed mb-10 text-balance"
        >
          From the mist-crowned Himalayas of Ladakh to the tranquil palm backwaters of Kerala — experience vibrant cultures, sacred heritage, authentic regional flavors, and verified safety with confidence.
        </p>

        {/* Action Buttons */}
        <div
          id="hero-cta-buttons"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14"
        >
          {/* Prominent "Explore India" Button */}
          <button
            id="hero-explore-india-btn"
            onClick={onExploreClick}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-[#E25822] via-[#E25822] to-[#C84614] hover:from-[#EA652F] hover:to-[#B53B0B] rounded-full shadow-xl shadow-[#E25822]/35 hover:shadow-2xl hover:shadow-[#E25822]/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            <Compass className="w-5 h-5 text-white animate-spin-slow" />
            <span>Explore India</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </button>

          {/* Secondary "Plan Your Trip" Button */}
          <button
            id="hero-plan-trip-btn"
            onClick={onPlanTripClick}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 text-base sm:text-lg font-semibold text-[#FAF7F2] bg-[#113D2F]/80 hover:bg-[#185240] border border-[#236B54]/70 hover:border-[#E25822]/60 rounded-full backdrop-blur-md transition-all duration-200 cursor-pointer shadow-lg"
          >
            <Sparkles className="w-5 h-5 text-[#FF9E68]" />
            <span>Custom Itinerary Builder</span>
          </button>
        </div>

        {/* Highlight Stats Strip */}
        <div
          id="hero-stats-strip"
          className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-[#185240]/60 text-left"
        >
          <div
            onClick={onExploreClick}
            className="bg-[#113D2F]/50 hover:bg-[#185240]/70 cursor-pointer backdrop-blur-sm p-3.5 sm:p-4 rounded-2xl border border-[#236B54]/40 hover:border-[#E25822]/50 transition-colors flex items-center gap-3"
            title="Click to explore all 28 States and 8 Union Territories"
          >
            <div className="w-9 h-9 rounded-xl bg-[#E25822]/20 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-4 h-4 text-[#E25822]" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold text-white font-serif-title">28 States</div>
              <div className="text-xs text-[#A7C2B5]">& 8 Union Territories</div>
            </div>
          </div>

          <div className="bg-[#113D2F]/50 backdrop-blur-sm p-3.5 sm:p-4 rounded-2xl border border-[#236B54]/40 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#E25822]/20 flex items-center justify-center flex-shrink-0">
              <Award className="w-4 h-4 text-[#FFB26B]" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold text-white font-serif-title">42 UNESCO</div>
              <div className="text-xs text-[#A7C2B5]">World Heritage Sites</div>
            </div>
          </div>

          <div
            onClick={onOpenSafetyClick}
            className="bg-[#113D2F]/50 hover:bg-[#185240]/70 cursor-pointer backdrop-blur-sm p-3.5 sm:p-4 rounded-2xl border border-[#236B54]/40 hover:border-[#E25822]/50 transition-colors flex items-center gap-3"
            title="Click to view 24x7 safety protocols"
          >
            <div className="w-9 h-9 rounded-xl bg-[#E25822]/20 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#E25822]" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold text-white font-serif-title">1363 & 112</div>
              <div className="text-xs text-[#A7C2B5]">Tourist Police Helpline</div>
            </div>
          </div>

          <div className="bg-[#113D2F]/50 backdrop-blur-sm p-3.5 sm:p-4 rounded-2xl border border-[#236B54]/40 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#E25822]/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4 text-[#FF9E68]" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold text-white font-serif-title">100% Curated</div>
              <div className="text-xs text-[#A7C2B5]">Verified Local Insights</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave/Bottom Curve leading into warm cream content */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#FAF7F2] to-transparent pointer-events-none" />
    </section>
  );
};
