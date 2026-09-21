import React, { useState } from 'react';
import { X, ShieldCheck, PhoneCall, AlertTriangle, HeartHandshake, CheckCircle2, Copy, Check } from 'lucide-react';

interface SafetyGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SafetyGuideModal: React.FC<SafetyGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedNumber(num);
    setTimeout(() => setCopiedNumber(null), 2000);
  };

  const emergencyContacts = [
    { title: 'Ministry of Tourism 24x7 Multi-lingual Helpline', number: '1363', desc: 'Available in 12 languages (Hindi, English, French, German, Japanese, Spanish, etc.)' },
    { title: 'National Emergency Response Support System (ERSS)', number: '112', desc: 'Unified emergency response for Police, Medical Ambulance & Fire across India' },
    { title: 'Women Helpline (All India)', number: '1091', desc: 'Dedicated 24x7 support for female travelers and residents' },
    { title: 'Railway Passenger Security Helpline', number: '139', desc: 'Direct Indian Railways security and medical assistance on trains and platforms' },
  ];

  const safetyProtocols = [
    {
      title: 'Solo & Female Travelers',
      tips: [
        'Prefer government-approved, verified heritage homestays or Star-rated hotels with 24/7 reception desk.',
        'Use pre-paid taxi booths at major airports/railway stations or licensed ride-hailing apps (Uber, Ola) with live GPS sharing.',
        'Keep emergency helpline 1363 bookmarked for instant multi-lingual guidance in any city.',
      ],
    },
    {
      title: 'High-Altitude Mountain Zones (Ladakh, Spiti, Sikkim)',
      tips: [
        'Mandatory 48-hour rest upon arrival in Leh (11,500 ft) before ascending to Khardung La or Pangong.',
        'Hydrate with at least 4-5 liters of water daily; carry Diamox only after medical consultation.',
        'Obtain digital Inner Line Permits (ILP) ahead of travel for designated border regions.',
      ],
    },
    {
      title: 'Temple, Sacred Sites & Cultural Etiquette',
      tips: [
        'Remove footwear at designated temple shoe counters before entering sanctum complexes.',
        'Dress modestly covering shoulders and knees; carry a light scarf (dupatta) for head covering where mandated.',
        'Always obtain polite consent before photographing rituals, monks, or local village artisans.',
      ],
    },
    {
      title: 'Digital Payments & Currency Guidelines',
      tips: [
        'India’s UPI (Unified Payments Interface) is accepted nationwide; international travelers can access UPI One World at international airports.',
        'Keep moderate INR cash for remote Himalayan trails and rural village weekly markets (haats).',
        'Decline unsolicited "special gemstone" or "exclusive perfume" deals from unauthorized street touts.',
      ],
    },
  ];

  return (
    <div
      id="safety-guide-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-[#EAE2D5] my-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0B2B20] text-white p-6 sm:p-7 flex items-center justify-between border-b border-[#185240]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#185240] border border-[#236B54] flex items-center justify-center text-white">
              <ShieldCheck className="w-5 h-5 text-[#E25822]" />
            </div>
            <div>
              <div className="text-xs text-[#A7C2B5] font-semibold uppercase tracking-wider">
                Verified Safety & 24×7 Tourist Support
              </div>
              <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-white">
                Incredible India Travel Safety Hub
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 bg-[#FAF7F2] space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Emergency Helplines Grid */}
          <div>
            <h3 className="font-serif-title text-lg font-bold text-[#113D2F] mb-3 flex items-center gap-2">
              <PhoneCall className="w-5 h-5 text-[#E25822]" />
              <span>Official 24×7 National Tourism & Emergency Helplines</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {emergencyContacts.map((contact) => (
                <div
                  key={contact.number}
                  className="bg-white p-4 rounded-2xl border border-[#EAE2D5] flex items-center justify-between gap-3 shadow-sm hover:border-[#185240]/40 transition-all"
                >
                  <div>
                    <span className="text-xs font-bold text-[#113D2F] block">
                      {contact.title}
                    </span>
                    <p className="text-[11px] text-[#647C72] mt-0.5">{contact.desc}</p>
                    <div className="font-mono text-xl font-extrabold text-[#E25822] mt-1.5">
                      {contact.number}
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(contact.number)}
                    className="p-2 rounded-xl bg-[#FAF7F2] hover:bg-[#EAE2D5] text-[#185240] transition-colors cursor-pointer flex-shrink-0"
                    title="Copy number"
                  >
                    {copiedNumber === contact.number ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Protocols List */}
          <div className="space-y-4">
            <h3 className="font-serif-title text-lg font-bold text-[#113D2F] flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-[#185240]" />
              <span>Core Guidelines for Smooth & Safe Journeys</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {safetyProtocols.map((protocol, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-[#EAE2D5] shadow-sm flex flex-col justify-between"
                >
                  <h4 className="font-serif-title text-base font-bold text-[#113D2F] mb-2.5 pb-2 border-b border-[#F4EFE6]">
                    {protocol.title}
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#475E54]">
                    {protocol.tips.map((tip, tipIdx) => (
                      <li key={tipIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#185240] flex-shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#EAE2D5] flex items-center justify-between">
          <span className="text-xs text-[#647C72]">
            Data synchronized with Ministry of Tourism, Government of India
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full text-xs sm:text-sm font-bold text-white bg-[#185240] hover:bg-[#113D2F] transition-colors cursor-pointer"
          >
            Close Safety Hub
          </button>
        </div>
      </div>
    </div>
  );
};
