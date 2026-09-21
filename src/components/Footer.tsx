import React, { useState } from 'react';
import { Compass, ShieldCheck, Heart, Mail, Phone, ExternalLink, ArrowUp, Send, Check, Languages } from 'lucide-react';

interface FooterProps {
  onOpenSafetyModal: () => void;
  onOpenTripPlanner: () => void;
  onOpenVoiceTranslator?: () => void;
  onNavigateHome?: () => void;
  onNavigateExplore?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenSafetyModal,
  onOpenTripPlanner,
  onOpenVoiceTranslator,
  onNavigateHome,
  onNavigateExplore,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionClick = (sectionId: string) => {
    if (onNavigateHome) {
      onNavigateHome();
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#0B2B20] text-[#FAF7F2] border-t border-[#185240] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#185240]/60">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E25822] via-[#F97316] to-[#185240] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#0B2B20] rounded-[10px] flex items-center justify-center">
                  <Compass className="w-5 h-5 text-[#E25822]" />
                </div>
              </div>
              <div>
                <span className="font-serif-title text-2xl font-bold tracking-tight text-white">
                  Yatra <span className="text-[#E25822]">Bharat</span>
                </span>
                <span className="block text-[11px] text-[#A7C2B5] font-medium tracking-wide">
                  Incredible India Travel Portal
                </span>
              </div>
            </div>

            <p className="text-sm text-[#A7C2B5] leading-relaxed max-w-sm">
              Empowering seamless, culturally rich, and rigorously safe travels across all 28 states and 8 union territories of Incredible India.
            </p>

            <div className="p-4 rounded-2xl bg-[#113D2F]/80 border border-[#236B54]/50 flex items-center justify-between">
              <div>
                <span className="text-xs text-[#A7C2B5] block">24×7 Multi-lingual Tourist Helpline</span>
                <span className="font-mono text-xl font-bold text-[#E25822]">1363 / 112</span>
              </div>
              <button
                onClick={onOpenSafetyModal}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#E25822] text-white hover:bg-[#C84614] transition-colors cursor-pointer"
              >
                View Safety Hub
              </button>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-serif-title text-base font-bold text-white mb-4">
              Explore India
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A7C2B5]">
              <li>
                <button
                  onClick={() => handleSectionClick('destinations')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Popular Destinations
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateExplore || (() => handleSectionClick('explore'))}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  State & UT Directory (36 Regions)
                </button>
              </li>
              {onOpenVoiceTranslator && (
                <li>
                  <button
                    onClick={onOpenVoiceTranslator}
                    className="hover:text-white transition-colors text-left flex items-center gap-1.5 cursor-pointer text-[#FF9E68]"
                  >
                    <Languages className="w-3.5 h-3.5" />
                    <span>Voice Translator (14 Languages)</span>
                  </button>
                </li>
              )}
              <li>
                <button
                  onClick={() => handleSectionClick('features')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Core Pillars
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTripPlanner}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Custom Itinerary Builder
                </button>
              </li>
            </ul>
          </div>

          {/* Official Initiatives */}
          <div>
            <h4 className="font-serif-title text-base font-bold text-white mb-4">
              Tourism Initiatives
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A7C2B5]">
              <li>
                <a
                  href="https://www.incredibleindia.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>Incredible India</span>
                  <ExternalLink className="w-3 h-3 text-[#E25822]" />
                </a>
              </li>
              <li>
                <a
                  href="https://tourism.gov.in/swadesh-darshan-scheme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>Swadesh Darshan 2.0</span>
                  <ExternalLink className="w-3 h-3 text-[#E25822]" />
                </a>
              </li>
              <li>
                <a
                  href="https://tourism.gov.in/prashad-scheme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>PRASHAD Pilgrimage Scheme</span>
                  <ExternalLink className="w-3 h-3 text-[#E25822]" />
                </a>
              </li>
              <li>
                <a
                  href="https://dekhoapnadesh.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>Dekho Apna Desh</span>
                  <ExternalLink className="w-3 h-3 text-[#E25822]" />
                </a>
              </li>
              <li>
                <a
                  href="https://tourism.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>Ministry of Tourism, GoI</span>
                  <ExternalLink className="w-3 h-3 text-[#E25822]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Bulletin */}
          <div>
            <h4 className="font-serif-title text-base font-bold text-white mb-4">
              Travel Updates
            </h4>
            <p className="text-xs text-[#A7C2B5] mb-3 leading-relaxed">
              Receive seasonal festival alerts, Vande Bharat train routes, and verified travel updates.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  aria-label="Email address for travel updates"
                  required
                  className="w-full px-3.5 py-2 text-xs bg-[#113D2F] border border-[#236B54] rounded-xl text-white placeholder-[#789688] focus:border-[#E25822] outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-3 text-xs font-bold text-white bg-[#E25822] hover:bg-[#C84614] rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Get Seasonal Alerts</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A7C2B5]">
          <div>
            © {new Date().getFullYear()} YatraBharat. Discover Incredible India.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[#E25822]">
              Made with <Heart className="w-3.5 h-3.5 fill-[#E25822]" /> for Incredible India
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#113D2F] hover:bg-[#185240] text-white transition-colors cursor-pointer"
              title="Back to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
