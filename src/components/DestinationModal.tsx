import React, { useEffect } from 'react';
import { Destination } from '../types';
import { X, MapPin, Star, Calendar, IndianRupee, Clock, Plane, ShieldCheck, Utensils, Compass, Heart, Share2 } from 'lucide-react';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onPlanTripForDestination: (dest: Destination) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  isFavorite,
  onToggleFavorite,
  onPlanTripForDestination,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (destination) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [destination, onClose]);

  if (!destination) return null;

  return (
    <div
      id="destination-detail-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-[#EAE2D5] my-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          id="close-destination-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition-all cursor-pointer backdrop-blur-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Banner */}
        <div className="relative h-72 sm:h-96 w-full bg-[#185240]">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B20] via-[#0B2B20]/40 to-transparent" />

          {/* Banner Badges */}
          <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E25822] text-white">
                  {destination.state}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white">
                  {destination.category}
                </span>
              </div>
              <h2 className="font-serif-title text-3xl sm:text-5xl font-extrabold tracking-tight">
                {destination.name}
              </h2>
              <p className="text-sm sm:text-base text-[#FFD8C4] font-medium mt-1">
                {destination.tagline}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                id={`modal-fav-btn-${destination.id}`}
                onClick={() => onToggleFavorite(destination.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer backdrop-blur-md ${
                  isFavorite
                    ? 'bg-[#E25822] text-white'
                    : 'bg-white/20 hover:bg-white/30 text-white'
                }`}
              >
                <Heart className={`w-4 h-4 ${isFavorite ? 'fill-white' : ''}`} />
                <span>{isFavorite ? 'Saved' : 'Save'}</span>
              </button>

              <button
                id={`modal-plan-trip-btn-${destination.id}`}
                onClick={() => {
                  onClose();
                  onPlanTripForDestination(destination);
                }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-[#185240] hover:bg-[#113D2F] text-white border border-[#236B54] transition-all cursor-pointer"
              >
                <Compass className="w-4 h-4" />
                <span>Plan Itinerary</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-8 bg-[#FAF7F2]">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-4 rounded-2xl border border-[#EAE2D5] shadow-sm text-xs sm:text-sm">
            <div className="flex items-center gap-2.5">
              <Star className="w-4 h-4 text-[#FFB26B] fill-[#FFB26B] flex-shrink-0" />
              <div>
                <div className="font-bold text-[#113D2F]">
                  {destination.rating} / 5.0
                </div>
                <div className="text-[11px] text-[#647C72]">
                  {(destination.reviewsCount).toLocaleString()} traveler reviews
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-[#185240] flex-shrink-0" />
              <div>
                <div className="font-bold text-[#113D2F]">Best Season</div>
                <div className="text-[11px] text-[#647C72]">{destination.bestSeason}</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#E25822] flex-shrink-0" />
              <div>
                <div className="font-bold text-[#113D2F]">Ideal Duration</div>
                <div className="text-[11px] text-[#647C72]">{destination.idealDuration}</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <IndianRupee className="w-4 h-4 text-[#185240] flex-shrink-0" />
              <div>
                <div className="font-bold text-[#113D2F]">Est. Daily Cost</div>
                <div className="text-[11px] text-[#647C72]">{destination.averageCostPerDay}</div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div>
            <h3 className="font-serif-title text-xl font-bold text-[#113D2F] mb-2">
              Destination Overview
            </h3>
            <p className="text-sm sm:text-base text-[#475E54] leading-relaxed">
              {destination.description}
            </p>
          </div>

          {/* Key Attractions */}
          <div>
            <h3 className="font-serif-title text-xl font-bold text-[#113D2F] mb-3 flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#E25822]" />
              <span>Must-Visit Attractions & Experiences</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {destination.attractions.map((attr, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3 rounded-xl border border-[#EAE2D5] flex items-start gap-2.5 text-xs sm:text-sm text-[#2C4137]"
                >
                  <span className="w-5 h-5 rounded-full bg-[#185240]/10 text-[#185240] font-bold text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="font-medium">{attr}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cuisine & Food Specialties */}
          <div>
            <h3 className="font-serif-title text-xl font-bold text-[#113D2F] mb-3 flex items-center gap-2">
              <Utensils className="w-5 h-5 text-[#E25822]" />
              <span>Iconic Local Dishes to Taste</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {destination.mustTryFood.map((food, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FFF2EB] text-[#B53B0B] border border-[#FFD8C4] flex items-center gap-1.5"
                >
                  <Utensils className="w-3 h-3 text-[#E25822]" />
                  <span>{food}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Verified Safety & Etiquette Advice */}
          <div className="bg-[#EBF7F2] p-5 rounded-2xl border border-[#A7E3CB]">
            <h3 className="font-serif-title text-lg font-bold text-[#0E5A3E] mb-2.5 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#185240]" />
              <span>Verified Safety & Cultural Etiquette</span>
            </h3>
            <ul className="space-y-2">
              {destination.safetyTips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#185240]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#185240] mt-1.5 flex-shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Transit & Hub Info */}
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-[#EAE2D5] text-xs sm:text-sm text-[#475E54]">
            <Plane className="w-5 h-5 text-[#E25822] flex-shrink-0" />
            <div>
              <span className="font-semibold text-[#113D2F]">Nearest Transit Connection: </span>
              <span>{destination.nearestHub}</span>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#EAE2D5] flex items-center justify-between gap-4">
          <div className="text-xs text-[#647C72]">
            Verified Tourism & Heritage Directory
          </div>
          <button
            onClick={() => {
              onClose();
              onPlanTripForDestination(destination);
            }}
            className="px-6 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#E25822] to-[#D95B16] hover:from-[#C84614] hover:to-[#B53B0B] transition-all cursor-pointer shadow-md shadow-[#E25822]/20"
          >
            Create Itinerary for {destination.name}
          </button>
        </div>
      </div>
    </div>
  );
};
