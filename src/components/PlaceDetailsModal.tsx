import React from 'react';
import {
  X,
  MapPin,
  Calendar,
  Clock,
  IndianRupee,
  Compass,
  Sparkles,
  ExternalLink,
  Check,
  Plus,
  ShieldCheck,
  Star,
  Tag
} from 'lucide-react';
import { TouristPlace, IndiaRegion } from '../types';

interface PlaceDetailsModalProps {
  place: TouristPlace | null;
  region: IndiaRegion;
  isOpen: boolean;
  onClose: () => void;
  onToggleItinerary: (place: TouristPlace) => void;
  isAddedToItinerary: boolean;
  onViewOnMap: (place: TouristPlace) => void;
}

export const PlaceDetailsModal: React.FC<PlaceDetailsModalProps> = ({
  place,
  region,
  isOpen,
  onClose,
  onToggleItinerary,
  isAddedToItinerary,
  onViewOnMap,
}) => {
  if (!isOpen || !place) return null;

  return (
    <div
      id="place-details-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="place-details-modal-content"
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E5DFD5] overflow-hidden my-auto animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          id="close-place-details-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#0B2B20]">
          <img
            src={place.image || region.image}
            alt={place.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

          {/* Badges Overlay */}
          <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
            {place.isHiddenGem ? (
              <span className="px-3 py-1 text-xs font-bold rounded-full bg-[#E25822] text-white shadow-md flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Hidden Gem</span>
              </span>
            ) : (
              <span className="px-3 py-1 text-xs font-bold rounded-full bg-[#185240] text-white shadow-md flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-[#FF9E68] text-[#FF9E68]" />
                <span>Famous Attraction</span>
              </span>
            )}

            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/20 text-white backdrop-blur-md border border-white/20">
              {place.category || place.tag || 'Sightseeing'}
            </span>
          </div>

          {/* Title & Location Header */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h2 className="font-serif-title text-2xl sm:text-3xl font-extrabold text-white leading-tight drop-shadow-md">
              {place.name}
            </h2>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#FFB26B] font-medium mt-1">
              <MapPin className="w-4 h-4 shrink-0 text-[#E25822]" />
              <span>{place.location || `${region.name}, India`}</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Quick Specifications Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E5DFD5]">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#8A9C92] uppercase tracking-wider mb-1">
                <Calendar className="w-3.5 h-3.5 text-[#E25822]" />
                <span>Best Time</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#185240] leading-snug">
                {place.bestTimeToVisit || region.bestSeason || 'October to March'}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E5DFD5]">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#8A9C92] uppercase tracking-wider mb-1">
                <Clock className="w-3.5 h-3.5 text-[#E25822]" />
                <span>Timings</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#13221B] leading-snug">
                {place.timings || '9:00 AM – 5:30 PM'}
              </p>
            </div>

            <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-[#FAF7F2] border border-[#E5DFD5]">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#8A9C92] uppercase tracking-wider mb-1">
                <IndianRupee className="w-3.5 h-3.5 text-[#E25822]" />
                <span>Entry Fee</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#13221B] leading-snug">
                {place.entryFee || 'Free / Nominal'}
              </p>
            </div>
          </div>

          {/* Detailed Description */}
          <div>
            <h3 className="font-serif-title text-base font-bold text-[#13221B] mb-2">
              About this Destination
            </h3>
            <p className="text-sm text-[#4A5D52] leading-relaxed">
              {place.description}
            </p>
          </div>

          {/* Travel Tips Section */}
          {place.travelTips && place.travelTips.length > 0 && (
            <div className="p-4 rounded-2xl bg-[#F4EFE6] border border-[#E3DDD3] space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#185240] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#E25822]" />
                <span>Essential Traveler Tips & Advisory</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#384A41]">
                {place.travelTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E25822] mt-2 shrink-0" />
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Nearby Attractions in Circuit */}
          {place.nearbyAttractions && place.nearbyAttractions.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#7A8E82] uppercase tracking-wider mb-2.5">
                <Compass className="w-3.5 h-3.5 text-[#E25822]" />
                <span>Nearby Attractions on this Circuit</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {place.nearbyAttractions.map((attraction, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl bg-[#FAF7F2] border border-[#D5DDD8] text-xs font-medium text-[#185240] hover:border-[#E25822] transition-colors"
                  >
                    {attraction}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Action Footer */}
        <div className="p-4 sm:p-5 bg-[#FAF7F2] border-t border-[#E5DFD5] flex flex-wrap items-center justify-between gap-3">
          {/* View on Map Action */}
          <button
            id="modal-view-on-map-btn"
            onClick={() => onViewOnMap(place)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#185240] bg-white hover:bg-[#F3EFEA] border border-[#D5DDD8] hover:border-[#185240] transition-all cursor-pointer shadow-sm"
          >
            <MapPin className="w-4 h-4 text-[#E25822]" />
            <span>View on Map</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#85998E]" />
          </button>

          <div className="flex items-center gap-2.5">
            {/* Add to Itinerary Action */}
            <button
              id="modal-add-to-itinerary-btn"
              onClick={() => onToggleItinerary(place)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer ${
                isAddedToItinerary
                  ? 'bg-[#185240] text-white hover:bg-[#0B2B20]'
                  : 'bg-[#E25822] hover:bg-[#C84614] text-white shadow-[#E25822]/20'
              }`}
            >
              {isAddedToItinerary ? (
                <>
                  <Check className="w-4 h-4 text-[#FFB26B]" />
                  <span>Added to Itinerary</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Add to Itinerary</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#5C7065] hover:text-[#13221B] hover:bg-[#E5DFD5]/50 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
