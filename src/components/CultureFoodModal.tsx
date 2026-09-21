import React, { useState } from 'react';
import { X, Utensils, Sparkles, Award, Compass, Heart } from 'lucide-react';

interface CultureFoodModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CultureFoodModal: React.FC<CultureFoodModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'cuisine' | 'crafts' | 'festivals'>('cuisine');

  if (!isOpen) return null;

  const thalis = [
    {
      name: 'Rajasthani Royal Thali',
      region: 'North-West (Rajasthan)',
      dishes: 'Dal Baati Churma, Gatte Ki Sabzi, Ker Sangri, Pyaaz Kachori, Ghevar with Rabri',
      notes: 'Cooked with rich desi ghee, aromatic cumin, and preserved desert spices originally created for royal warriors.',
    },
    {
      name: 'Kerala Traditional Sadhya',
      region: 'South (Kerala)',
      dishes: 'Avial, Thoran, Olan, Kalan, Sambar, Rasam, Payasam served on fresh banana leaf',
      notes: 'A harmonious 24-dish pure vegetarian feast celebrating the Onam harvest and Ayurvedic balance of six tastes (Shadrasa).',
    },
    {
      name: 'Kashmiri Wazwan & Kahwa',
      region: 'Far North (Kashmir)',
      dishes: 'Rogan Josh, Gushtaba, Dum Aloo, Saffron Pulao, Walnut Chutney, Kashmiri Kahwa',
      notes: 'A banquet prepared by master chefs (Wazas) infused with pure Kashmir saffron, dry ginger (Sonth), and fennel seeds.',
    },
    {
      name: 'Assamese Jolpan & Fish Tenga',
      region: 'North-East (Assam)',
      dishes: 'Masor Tenga (Tangy elephant apple fish), Khar, Bhoot Jolokia Chutney, Black Rice Kheer',
      notes: 'Subtle fermented flavors, indigenous river herbs, minimal oil, and deep respect for forest biodiversity.',
    },
  ];

  const crafts = [
    {
      name: 'Banarasi Zari Brocade',
      location: 'Varanasi, Uttar Pradesh',
      tag: 'GI Tagged · Handloom',
      desc: 'Intricate silver and gold metallic thread woven onto pure mulberry silk on traditional pit looms.',
    },
    {
      name: 'Rogan Art Painting',
      location: 'Nirona, Kutch, Gujarat',
      tag: 'GI Tagged · Rare Folk Craft',
      desc: 'Only one artisan family in India preserves this 400-year-old art using boiled castor oil paint and metal needles.',
    },
    {
      name: 'Channapatna Wooden Toys',
      location: 'Karnataka',
      tag: 'GI Tagged · Eco Heritage',
      desc: 'Ivory wood lathe-turned toys coated with natural vegetable and lacquer dyes, safe for children and eco-friendly.',
    },
    {
      name: 'Pashmina & Sozni Needlework',
      location: 'Ladakh & Kashmir',
      tag: 'GI Tagged · Luxury Wool',
      desc: 'Hand-spun fleece from the Changthangi mountain goat, hand-embroidered with thousands of microscopic stitches.',
    },
  ];

  const festivals = [
    { name: 'Diwali (Festival of Lights)', season: 'October / November', highlight: 'Millions of clay diyas illuminating temples, ghats, and homes across every Indian state.' },
    { name: 'Holi (Festival of Colors)', season: 'March', highlight: 'Vibrant natural petal colors celebrating the arrival of spring, particularly legendary in Mathura & Vrindavan.' },
    { name: 'Pushkar Camel Fair', season: 'November (Kartik Purnima)', highlight: 'A breathtaking desert confluence of Rajasthani folk music, camel races, and sacred lake dip.' },
    { name: 'Hornbill Festival', season: 'December', highlight: 'Nagaland’s "Festival of Festivals" uniting 17 indigenous tribes with martial arts, music, and bamboo crafts.' },
  ];

  return (
    <div
      id="culture-food-modal"
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
            <div className="w-10 h-10 rounded-xl bg-[#E25822] flex items-center justify-center text-white">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-[#FFB26B] font-semibold uppercase tracking-wider">
                Living Heritage & Gastronomy
              </div>
              <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-white">
                Local Culture & Authentic Food
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

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 p-4 bg-[#FAF7F2] border-b border-[#EAE2D5] overflow-x-auto">
          {[
            { id: 'cuisine', label: 'Regional Thalis & Gastronomy', icon: Utensils },
            { id: 'crafts', label: 'GI-Tagged Handicrafts', icon: Award },
            { id: 'festivals', label: 'Living Festivals', icon: Sparkles },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#185240] text-white shadow-sm'
                    : 'bg-white text-[#475E54] hover:bg-[#F4EFE6] border border-[#EAE2D5]'
                }`}
              >
                <Icon className="w-4 h-4 text-[#E25822]" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="p-6 sm:p-8 bg-[#FAF7F2] max-h-[65vh] overflow-y-auto space-y-4">
          {activeTab === 'cuisine' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {thalis.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-[#EAE2D5] shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-[#E25822]">{item.region}</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#EBF4F0] text-[#185240]">
                        Authentic
                      </span>
                    </div>
                    <h3 className="font-serif-title text-xl font-bold text-[#113D2F] mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#2C4137] mb-2">
                      <span className="text-[#647C72]">Signature items: </span>
                      {item.dishes}
                    </p>
                    <p className="text-xs text-[#647C72] leading-relaxed">{item.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'crafts' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {crafts.map((craft, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-[#EAE2D5] shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-[#185240]">{craft.location}</span>
                      <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#FFF2EB] text-[#B53B0B] border border-[#FFD8C4]">
                        {craft.tag}
                      </span>
                    </div>
                    <h3 className="font-serif-title text-xl font-bold text-[#113D2F] mb-2">
                      {craft.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475E54] leading-relaxed">
                      {craft.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'festivals' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {festivals.map((fest, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-[#EAE2D5] shadow-sm"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-[#D95B16]">{fest.season}</span>
                  </div>
                  <h3 className="font-serif-title text-xl font-bold text-[#113D2F] mb-2">
                    {fest.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475E54] leading-relaxed">
                    {fest.highlight}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#EAE2D5] flex items-center justify-between">
          <span className="text-xs text-[#647C72]">
            Preserving indigenous artisans & sustainable cultural tourism
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full text-xs sm:text-sm font-bold text-white bg-[#185240] hover:bg-[#113D2F] transition-colors cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
