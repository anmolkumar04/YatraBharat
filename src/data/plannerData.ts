import { Destination, TravelStyle, DestinationWeather, BudgetBreakdown, ItineraryDay, SavedItinerary } from '../types';
import { POPULAR_DESTINATIONS } from './destinations';

// Comprehensive weather & climate advisory database for Indian destinations
export const DESTINATION_WEATHER_DATABASE: Record<string, Omit<DestinationWeather, 'destinationId' | 'destinationName'>> = {
  'varanasi-up': {
    temperatureDay: 28,
    temperatureNight: 16,
    condition: 'Sunny & Pleasant River Breeze',
    humidity: 52,
    precipitationChance: 5,
    recommendedSeason: 'October to March (Peak Spiritual Season)',
    seasonSummary: 'Pleasant winter days ideal for sunrise boat rides, temple aarti walks, and silk bazaar exploration without intense summer heat.',
    packingAdvice: 'Light cottons with a shawl or light jacket for early morning ghat cruises.',
    airQualityIndex: 'Moderate (AQI 115)',
    isDemoData: true
  },
  'jaipur-rj': {
    temperatureDay: 29,
    temperatureNight: 15,
    condition: 'Clear Skies & Dry Desert Warmth',
    humidity: 38,
    precipitationChance: 2,
    recommendedSeason: 'October to March (Winter Heritage Season)',
    seasonSummary: 'Comfortable day temperatures perfect for hill fort trekking, palace courtyards, and vibrant open-air bazaars.',
    packingAdvice: 'Breathable daytime clothing, sunglasses, wide-brim hat, and light woolens for brisk evenings.',
    airQualityIndex: 'Moderate (AQI 128)',
    isDemoData: true
  },
  'alleppey-kl': {
    temperatureDay: 30,
    temperatureNight: 23,
    condition: 'Tropical Breeze with Occasional Drizzle',
    humidity: 78,
    precipitationChance: 25,
    recommendedSeason: 'September to March (Post-Monsoon & Winter)',
    seasonSummary: 'Lush greenery, sparkling backwaters, and comfortable palm breezes ideal for tranquil houseboat stays and Ayurvedic wellness.',
    packingAdvice: 'Loose linen clothing, umbrella or light rain poncho, and eco-friendly mosquito repellent.',
    airQualityIndex: 'Good (AQI 42)',
    isDemoData: true
  },
  'ladakh-la': {
    temperatureDay: 18,
    temperatureNight: 4,
    condition: 'Crisp Mountain Sun & Thin High-Altitude Air',
    humidity: 24,
    precipitationChance: 0,
    recommendedSeason: 'May to September (High Summer)',
    seasonSummary: 'Passes are open (Khardung La, Chang La), glacial lakes are brilliant turquoise, and Buddhist festival season is at its peak.',
    packingAdvice: 'Thermal layers, windproof fleece, UV-protection sunglasses (SPF 50+), lip balm, and hydrating electrolytes.',
    airQualityIndex: 'Good (AQI 22)',
    isDemoData: true
  },
  'hampi-ka': {
    temperatureDay: 31,
    temperatureNight: 19,
    condition: 'Sunny & Dry Granite Basin',
    humidity: 46,
    precipitationChance: 4,
    recommendedSeason: 'November to February (Cool Winter)',
    seasonSummary: 'Mild sunshine makes exploring the 26 sq km open-air boulder and temple ruins on foot or bicycle thoroughly enjoyable.',
    packingAdvice: 'Sturdy walking shoes with rubber grip, hat, polarized sunglasses, and a refillable stainless steel bottle.',
    airQualityIndex: 'Good (AQI 55)',
    isDemoData: true
  },
  'rishikesh-uk': {
    temperatureDay: 24,
    temperatureNight: 12,
    condition: 'Fresh Himalayan Air & Emerald River Mist',
    humidity: 58,
    precipitationChance: 10,
    recommendedSeason: 'September to November & March to May',
    seasonSummary: 'Clear waters for white-water rafting, serene temperatures for open-air yoga, and clear skies for mountain viewpoint hikes.',
    packingAdvice: 'Comfortable yoga/trekking wear, water-friendly shoes for riverbanks, and a medium jacket for evenings.',
    airQualityIndex: 'Good (AQI 48)',
    isDemoData: true
  },
  'shillong-ml': {
    temperatureDay: 20,
    temperatureNight: 11,
    condition: 'Misty Pine Breezes & Passing Clouds',
    humidity: 82,
    precipitationChance: 35,
    recommendedSeason: 'September to May (Post-Monsoon to Spring)',
    seasonSummary: 'Waterfalls cascade in full force, living root bridges are lush, and the Dawki river turns crystal-clear glass.',
    packingAdvice: 'Waterproof jacket, quick-dry trail shoes with wet traction, and lightweight layers.',
    airQualityIndex: 'Good (AQI 32)',
    isDemoData: true
  },
  'udaipur-rj': {
    temperatureDay: 28,
    temperatureNight: 14,
    condition: 'Gentle Lake Breeze & Golden Sunshine',
    humidity: 44,
    precipitationChance: 1,
    recommendedSeason: 'October to March (Royal Lake Season)',
    seasonSummary: 'Crisp azure lake waters, illuminated palace reflections, and comfortable daytime strolling around Lake Pichola.',
    packingAdvice: 'Smart casual attire suitable for heritage dinners, comfortable flats for palace steps, and evening wrap.',
    airQualityIndex: 'Moderate (AQI 85)',
    isDemoData: true
  },
  'kaziranga-as': {
    temperatureDay: 26,
    temperatureNight: 14,
    condition: 'Mild Morning Mist over Riverine Grasslands',
    humidity: 68,
    precipitationChance: 8,
    recommendedSeason: 'November to April (Open Safari Season)',
    seasonSummary: 'National Park zones are completely open, tall elephant grass recedes for prime rhino, deer, and tiger visibility.',
    packingAdvice: 'Muted earth-toned clothing (khaki/green), binoculars, telephoto lens, and dust mask/bandana for open jeep rides.',
    airQualityIndex: 'Good (AQI 38)',
    isDemoData: true
  },
  'madurai-tn': {
    temperatureDay: 32,
    temperatureNight: 22,
    condition: 'Warm & Tropical with Evening Breeze',
    humidity: 65,
    precipitationChance: 12,
    recommendedSeason: 'October to March (Temple Festival Season)',
    seasonSummary: 'Relatively cooler months for traditional temple circumambulations, cultural festivals, and culinary street walks.',
    packingAdvice: 'Modest cotton clothing covering shoulders and knees for temple entry; easily removable slip-on footwear.',
    airQualityIndex: 'Moderate (AQI 72)',
    isDemoData: true
  },
  'munnar-kl': {
    temperatureDay: 22,
    temperatureNight: 10,
    condition: 'Cool Tea Valley Mist & Crisp Mountain Breeze',
    humidity: 74,
    precipitationChance: 20,
    recommendedSeason: 'September to March (Verdant Winter)',
    seasonSummary: 'Rolling tea estates are blanketed in mist, waterfalls are active, and nighttime temperatures drop to a refreshing chill.',
    packingAdvice: 'Light woolens/sweaters, comfortable trail shoes for plantation walks, and an umbrella.',
    airQualityIndex: 'Good (AQI 28)',
    isDemoData: true
  },
  'rann-of-kutch-gj': {
    temperatureDay: 29,
    temperatureNight: 11,
    condition: 'Radiant Salt Flat Sun & Chilly Desert Nights',
    humidity: 32,
    precipitationChance: 0,
    recommendedSeason: 'November to February (Rann Utsav Season)',
    seasonSummary: 'The white salt desert glimmers under full-moon winter skies with artisan fairs, folk dance performances, and camel caravans.',
    packingAdvice: 'High-contrast vibrant clothing for photos, polarized sunglasses, and heavy warm fleece/jacket for freezing desert nights.',
    airQualityIndex: 'Good (AQI 58)',
    isDemoData: true
  }
};

// Fallback generator for any custom destination or state
export function getDestinationWeather(destination: Destination): DestinationWeather {
  const existing = DESTINATION_WEATHER_DATABASE[destination.id];
  if (existing) {
    return {
      destinationId: destination.id,
      destinationName: destination.name,
      ...existing
    };
  }

  // Sensible default based on region
  const isHighAltitude = destination.category === 'Mountains & Valleys' || destination.state === 'Himachal Pradesh' || destination.state === 'Uttarakhand';
  const isCoastal = destination.category === 'Coastal & Backwaters' || destination.state === 'Goa' || destination.state === 'Kerala';

  return {
    destinationId: destination.id,
    destinationName: destination.name,
    temperatureDay: isHighAltitude ? 21 : isCoastal ? 30 : 27,
    temperatureNight: isHighAltitude ? 8 : isCoastal ? 23 : 16,
    condition: isHighAltitude ? 'Cool Mountain Breeze' : isCoastal ? 'Tropical Warm & Breezy' : 'Clear & Pleasant',
    humidity: isCoastal ? 75 : isHighAltitude ? 45 : 50,
    precipitationChance: 10,
    recommendedSeason: destination.bestSeason || 'October to March',
    seasonSummary: `Ideal weather conditions during ${destination.bestSeason || 'autumn and winter months'} with comfortable temperatures for local sightseeing.`,
    packingAdvice: isHighAltitude ? 'Warm layers, trekking shoes, and jacket.' : 'Light breathable cottons and sun protection.',
    airQualityIndex: 'Good (AQI 65)',
    isDemoData: true
  };
}

// ---------------- Google Maps URL Builders ----------------
export function getGoogleMapsPlaceUrl(destinationName: string, state: string): string {
  const query = encodeURIComponent(`${destinationName}, ${state}, India`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export function getGoogleMapsRouteUrl(destinations: Destination[]): string {
  if (destinations.length === 0) {
    return 'https://www.google.com/maps';
  }
  if (destinations.length === 1) {
    return getGoogleMapsPlaceUrl(destinations[0].name, destinations[0].state);
  }

  const origin = encodeURIComponent(`${destinations[0].name}, ${destinations[0].state}, India`);
  const destination = encodeURIComponent(
    `${destinations[destinations.length - 1].name}, ${destinations[destinations.length - 1].state}, India`
  );

  let url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`;

  if (destinations.length > 2) {
    const waypoints = destinations
      .slice(1, destinations.length - 1)
      .map((d) => encodeURIComponent(`${d.name}, ${d.state}, India`))
      .join('|');
    url += `&waypoints=${waypoints}`;
  }

  return url;
}

// Inter-city distance & transit estimate helper
export interface TransitLegInfo {
  from: string;
  to: string;
  approxDistanceKm: number;
  recommendedMode: 'Vande Bharat / Express Train' | 'Scenic Highway Drive / Cab' | 'Domestic Flight' | 'Ferry / Houseboat';
  durationEst: string;
  routeHighlight: string;
}

export function getRouteTransitLegs(destinations: Destination[]): TransitLegInfo[] {
  if (destinations.length < 2) return [];

  const legs: TransitLegInfo[] = [];

  for (let i = 0; i < destinations.length - 1; i++) {
    const from = destinations[i];
    const to = destinations[i + 1];

    // Check known pairs
    const pairKey = `${from.name}-${to.name}`;
    const reverseKey = `${to.name}-${from.name}`;

    let approxDistanceKm = 280;
    let recommendedMode: TransitLegInfo['recommendedMode'] = 'Vande Bharat / Express Train';
    let durationEst = '4 - 5 hrs';
    let routeHighlight = 'Scenic rail corridor across vibrant townscapes and cultural landscapes';

    if (pairKey.includes('Jaipur') && pairKey.includes('Udaipur')) {
      approxDistanceKm = 390;
      recommendedMode = 'Vande Bharat / Express Train';
      durationEst = '6 hrs (Vande Bharat Express)';
      routeHighlight = 'Fastest connection via Chittorgarh; beautiful Aravalli hill views';
    } else if (pairKey.includes('Alleppey') && pairKey.includes('Munnar')) {
      approxDistanceKm = 175;
      recommendedMode = 'Scenic Highway Drive / Cab';
      durationEst = '4.5 hrs by road';
      routeHighlight = 'Climbing from palm-fringed backwaters into mist-laden Western Ghats tea plantations';
    } else if (pairKey.includes('Varanasi') && pairKey.includes('Rishikesh')) {
      approxDistanceKm = 820;
      recommendedMode = 'Vande Bharat / Express Train';
      durationEst = '8 - 10 hrs by Express or 1.5 hr Flight via Dehradun';
      routeHighlight = 'Connecting holy Ganga river roots from Varanasi ghats to Himalayan foothills';
    } else if (pairKey.includes('Hampi') && pairKey.includes('Madurai')) {
      approxDistanceKm = 640;
      recommendedMode = 'Vande Bharat / Express Train';
      durationEst = 'Night Superfast Train or Flight via Bengaluru';
      routeHighlight = 'Heritage arc from Vijayanagara Empire stone boulders to Dravidian Pandyan temples';
    } else if (pairKey.includes('Shillong') && pairKey.includes('Kaziranga')) {
      approxDistanceKm = 250;
      recommendedMode = 'Scenic Highway Drive / Cab';
      durationEst = '5.5 hrs by national highway';
      routeHighlight = 'Passing Brahmaputra river valleys and lush tea gardens';
    }

    legs.push({
      from: from.name,
      to: to.name,
      approxDistanceKm,
      recommendedMode,
      durationEst,
      routeHighlight
    });
  }

  return legs;
}

// ---------------- Budget Calculation Engine ----------------
export function calculateTripBudget(
  durationDays: number,
  travelersCount: number,
  travelStyle: TravelStyle,
  destinationCount: number
): BudgetBreakdown {
  const nights = Math.max(1, durationDays - 1);
  const roomsCount = Math.ceil(travelersCount / 2); // 2 people share a room

  // Base rates per category depending on travel style
  let accommodationPerNight = 1200; // per room
  let foodPerDay = 550; // per person
  let localTravelPerDay = 350; // per person
  let intercityPerLegPerPerson = 750; // per intercity transit
  let ticketsPerDay = 250; // per person

  if (travelStyle === 'Budget') {
    accommodationPerNight = 1100; // Hostels / Certified Homestays / Budget Guesthouses
    foodPerDay = 450; // Local Dhabas, Street Food & Authentic Thalis
    localTravelPerDay = 280; // E-rickshaws, Metro & Shared Auto
    intercityPerLegPerPerson = 650; // Sleeper / 3AC Trains / State AC Bus
    ticketsPerDay = 200; // Standard Monument Entry & ASI passes
  } else if (travelStyle === 'Mid-range') {
    accommodationPerNight = 3200; // 3-Star Boutique / Heritage Haveli Homestay
    foodPerDay = 1150; // Heritage Cafes, Multi-cuisine & Authentic Speciality Restaurants
    localTravelPerDay = 750; // Dedicated App Cabs & Private Autos
    intercityPerLegPerPerson = 1650; // 2AC Train / Vande Bharat Executive / AC Express
    ticketsPerDay = 550; // Composite Passes, Boat Rides, Audio Guides & Sound Shows
  } else if (travelStyle === 'Luxury') {
    accommodationPerNight = 8800; // 5-Star Heritage Palace / Luxury Resort & Spa
    foodPerDay = 2800; // Royal Dining, Palace Banquets & Specialty Chef Tasting Menus
    localTravelPerDay = 1900; // Chauffeur-driven AC Sedan / SUV
    intercityPerLegPerPerson = 5200; // Flight or Luxury Private Chauffeur Inter-City
    ticketsPerDay = 1400; // Private ASI Guides, VIP Sanctum Entries & Private Lake Charters
  }

  // Totals calculations
  const totalAccommodation = accommodationPerNight * nights * roomsCount;
  const totalFood = foodPerDay * durationDays * travelersCount;
  const totalLocalTravel = localTravelPerDay * durationDays * travelersCount;

  // Intercity transit: 1 base trip + additional legs if multi-destination
  const transitLegsCount = Math.max(1, destinationCount);
  const totalIntercityTransport = intercityPerLegPerPerson * transitLegsCount * travelersCount;

  const totalAttractionTickets = ticketsPerDay * durationDays * travelersCount;

  const totalCost =
    totalAccommodation +
    totalFood +
    totalLocalTravel +
    totalIntercityTransport +
    totalAttractionTickets;

  const perPersonCost = Math.round(totalCost / Math.max(1, travelersCount));

  return {
    accommodation: totalAccommodation,
    food: totalFood,
    localTravel: totalLocalTravel,
    intercityTransport: totalIntercityTransport,
    attractionTickets: totalAttractionTickets,
    totalCost,
    perPersonCost,
    accommodationPerNight,
    foodPerDay,
    localTravelPerDay,
    ticketsPerDay
  };
}

// ---------------- Dynamic Day-wise Itinerary Generator ----------------
export function generateDayWiseItinerary(
  destinations: Destination[],
  durationDays: number
): ItineraryDay[] {
  if (destinations.length === 0) return [];

  const itinerary: ItineraryDay[] = [];

  // Distribute days across selected destinations
  for (let day = 1; day <= durationDays; day++) {
    // Determine which destination is active for this day
    const destIndex = Math.min(
      destinations.length - 1,
      Math.floor(((day - 1) / durationDays) * destinations.length)
    );
    const dest = destinations[destIndex];
    const attractions = dest.attractions || ['Heritage Landmark', 'Sacred Temple', 'Scenic Sunset Point'];
    const foods = dest.mustTryFood || ['Local Regional Thali', 'Traditional Street Food', 'Signature Dessert'];

    let theme = 'Arrival & Iconic Heritage';
    let morningActivity = `Arrive in ${dest.name}, check into your verified stay, and enjoy local welcoming tea.`;
    let morningTiming = '08:30 AM – 11:30 AM';
    let morningHighlight = dest.nearestHub
      ? `Transit from ${dest.nearestHub.split('(')[0].trim()}`
      : `Transit to ${dest.name} city center & verified accommodations`;

    let afternoonActivity = `Guided exploration of ${attractions[0] || 'the main heritage quarter'}.`;
    let afternoonTiming = '01:00 PM – 04:30 PM';
    let foodTip = `Savor authentic ${foods[0] || 'traditional thali'} at a certified heritage eatery.`;

    let eveningActivity = `Witness sunset and evening cultural proceedings at ${attractions[1] || 'the riverside promenade'}.`;
    let eveningTiming = '05:30 PM – 08:30 PM';
    let scenicTip = `Photogenic golden hour over ${dest.name} architectural silhouettes.`;
    let ticketEstimate = '₹100 – ₹250 (ASI & state entry)';
    let practicalTip = 'Pre-book online tickets to skip queue counters; keep government photo ID handy.';

    // Progressively vary the itinerary depending on day index within that city
    const dayInCity = ((day - 1) % 3) + 1;

    if (dayInCity === 2) {
      theme = 'Deep Cultural Immersion & Artisans';
      morningActivity = `Sunrise visit to ${attractions[2] || 'sacred temple corridor'} followed by peaceful meditation.`;
      morningTiming = '06:30 AM – 09:30 AM';
      morningHighlight = 'Quiet morning hours with soft illumination and zero crowds.';

      afternoonActivity = `Heritage walk through old artisan lanes, witnessing GI-tagged handicrafts and textile weaving.`;
      afternoonTiming = '11:30 AM – 03:30 PM';
      foodTip = `Mid-day refreshment: Taste authentic ${foods[1] || 'regional street delicacy'}.`;

      eveningActivity = `Visit ${attractions[3] || 'sunset ridge or panoramic fortress'} and enjoy evening folk music.`;
      eveningTiming = '05:00 PM – 08:00 PM';
      scenicTip = 'Panoramic dusk view over the whole valley/cityscape.';
      ticketEstimate = '₹50 – ₹150 (Camera & temple darshan)';
      practicalTip = 'Support local master artisans directly at cooperative bazaars.';
    } else if (dayInCity === 3) {
      theme = 'Nature, Waterways & Hidden Marvels';
      morningActivity = `Excursion to offbeat trails or eco-sanctuary: ${attractions[4] || 'scenic lake / natural reserve'}.`;
      morningTiming = '07:30 AM – 11:30 AM';
      morningHighlight = 'Fresh air, biodiversity, and serene photography opportunities.';

      afternoonActivity = `Leisurely lunch tasting ${foods[2] || 'fresh seasonal farm produce'} and souvenir shopping.`;
      afternoonTiming = '12:30 PM – 03:30 PM';
      foodTip = `End with traditional sweets: ${foods[3] || foods[0] || 'local dessert'}.`;

      eveningActivity = `Riverside/Lakeside promenade walk or heritage sound & light show.`;
      eveningTiming = '06:00 PM – 09:00 PM';
      scenicTip = 'Ambient night illumination of monuments.';
      ticketEstimate = '₹150 – ₹400 (Show & boat ride)';
      practicalTip = 'Keep emergency helpline 1363 saved and verify prepaid transport.';
    }

    if (day === durationDays) {
      theme = 'Farewell Impressions & Safe Transit';
      eveningActivity = `Wrap up packing, collect souvenirs, and prepare for smooth return transit to your hub.`;
      scenicTip = 'Cherish indelible memories of incredible Indian hospitality.';
    }

    itinerary.push({
      dayNumber: day,
      destinationId: dest.id,
      destinationName: dest.name,
      state: dest.state,
      theme,
      morning: {
        activity: morningActivity,
        timing: morningTiming,
        highlight: morningHighlight
      },
      afternoon: {
        activity: afternoonActivity,
        timing: afternoonTiming,
        foodTip
      },
      evening: {
        activity: eveningActivity,
        timing: eveningTiming,
        scenicTip
      },
      ticketEstimate,
      practicalTip
    });
  }

  return itinerary;
}

// ---------------- Saved Itineraries Storage ----------------
const SAVED_ITINERARIES_STORAGE_KEY = 'yatra_setu_saved_itineraries';

export function getSavedItineraries(): SavedItinerary[] {
  try {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const raw = localStorage.getItem(SAVED_ITINERARIES_STORAGE_KEY);
      if (!raw) return [];
      return JSON.parse(raw);
    }
    return [];
  } catch (e) {
    console.error('Failed to load saved itineraries from localStorage', e);
    return [];
  }
}

export function saveItineraryToStorage(itinerary: Omit<SavedItinerary, 'id' | 'savedAt'>): SavedItinerary {
  const all = getSavedItineraries();
  const newItem: SavedItinerary = {
    ...itinerary,
    id: `trip_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    savedAt: new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  };

  const updated = [newItem, ...all];
  try {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem(SAVED_ITINERARIES_STORAGE_KEY, JSON.stringify(updated));
    }
  } catch (e) {
    console.error('Failed to persist itinerary', e);
  }
  return newItem;
}

export function deleteSavedItineraryFromStorage(id: string): SavedItinerary[] {
  const all = getSavedItineraries();
  const updated = all.filter((i) => i.id !== id);
  try {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem(SAVED_ITINERARIES_STORAGE_KEY, JSON.stringify(updated));
    }
  } catch (e) {
    console.error('Failed to delete itinerary', e);
  }
  return updated;
}

// ---------------- Suggested Quick Indian Circuits ----------------
export interface SuggestedCircuit {
  id: string;
  title: string;
  tagline: string;
  destinationIds: string[];
  recommendedDays: number;
  badge: string;
}

export const SUGGESTED_CIRCUITS: SuggestedCircuit[] = [
  {
    id: 'circuit-rajasthan',
    title: 'Royal Rajasthan Heritage',
    tagline: 'Amber forts, desert palaces & shimmering lake reflections',
    destinationIds: ['jaipur-rj', 'udaipur-rj'],
    recommendedDays: 5,
    badge: 'Forts & Palaces'
  },
  {
    id: 'circuit-kerala',
    title: 'Kerala Emerald Trail',
    tagline: 'Serene backwaters of Alleppey & misty tea hills of Munnar',
    destinationIds: ['alleppey-kl', 'munnar-kl'],
    recommendedDays: 5,
    badge: 'Backwaters & Tea Hills'
  },
  {
    id: 'circuit-ganges',
    title: 'Sacred Ganga Spiritual Circuit',
    tagline: 'From Varanasi evening ghat aarti to the Himalayan foothills of Rishikesh',
    destinationIds: ['varanasi-up', 'rishikesh-uk'],
    recommendedDays: 6,
    badge: 'Spiritual & Yoga'
  },
  {
    id: 'circuit-south-heritage',
    title: 'South India Stone & Temples',
    tagline: 'UNESCO monolithic boulders of Hampi & majestic gopurams of Madurai',
    destinationIds: ['hampi-ka', 'madurai-tn'],
    recommendedDays: 5,
    badge: 'UNESCO Architecture'
  }
];
