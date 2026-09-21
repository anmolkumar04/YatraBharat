import React from 'react';
import { Destination } from '../types';
import { X, Heart, MapPin, Eye, Calendar, ArrowRight, Trash2 } from 'lucide-react';

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: Destination[];
  onRemoveFavorite: (id: string) => void;
  onSelectDestination: (dest: Destination) => void;
  onPlanTrip: (dest: Destination) => void;
}

export const FavoritesModal: React.FC<FavoritesModalProps> = ({
  isOpen,
  onClose,
  favorites,
  onRemoveFavorite,
  onSelectDestination,
  onPlanTrip,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="favorites-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-[#EAE2D5] my-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0B2B20] text-white p-6 flex items-center justify-between border-b border-[#185240]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#E25822] flex items-center justify-center text-white">
              <Heart className="w-5 h-5 fill-white" />
            </div>
            <div>
              <div className="text-xs text-[#A7C2B5] font-semibold uppercase tracking-wider">
                Personal Bucket List
              </div>
              <h2 className="font-serif-title text-2xl font-bold text-white">
                Saved Destinations ({favorites.length})
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

        {/* Content */}
        <div className="p-6 bg-[#FAF7F2] max-h-[60vh] overflow-y-auto space-y-3">
          {favorites.length > 0 ? (
            favorites.map((dest) => (
              <div
                key={dest.id}
                className="bg-white p-4 rounded-2xl border border-[#EAE2D5] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm hover:border-[#185240]/40 transition-all"
              >
                <div className="flex items-center gap-3.5 w-full sm:w-auto">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-[#E25822] font-semibold">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{dest.state}</span>
                    </div>
                    <h3 className="font-serif-title text-lg font-bold text-[#113D2F]">
                      {dest.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-[#647C72] mt-0.5">
                      <span>{dest.bestSeason}</span>
                      <span>·</span>
                      <span>{dest.averageCostPerDay}/day</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <button
                    onClick={() => {
                      onClose();
                      onSelectDestination(dest);
                    }}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#FAF7F2] hover:bg-[#EAE2D5] text-[#185240] transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View</span>
                  </button>

                  <button
                    onClick={() => {
                      onClose();
                      onPlanTrip(dest);
                    }}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#185240] hover:bg-[#113D2F] text-white transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Plan</span>
                  </button>

                  <button
                    onClick={() => onRemoveFavorite(dest.id)}
                    className="p-1.5 rounded-lg text-[#647C72] hover:text-[#B53B0B] hover:bg-red-50 transition-colors cursor-pointer"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="py-12 text-center">
              <Heart className="w-12 h-12 text-[#EAE2D5] mx-auto mb-3" />
              <h3 className="font-serif-title text-lg font-bold text-[#113D2F] mb-1">
                No Destinations Saved Yet
              </h3>
              <p className="text-xs text-[#647C72] max-w-xs mx-auto mb-4">
                Click the heart icon on any destination card to build your personalized travel wishlist.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-[#EAE2D5] flex items-center justify-between">
          <span className="text-xs text-[#647C72]">Saved in your local browser session</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full text-xs font-bold text-white bg-[#185240] hover:bg-[#113D2F] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
