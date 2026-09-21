export type DestinationCategory =
  | 'All'
  | 'Heritage & Forts'
  | 'Mountains & Valleys'
  | 'Spiritual & Sacred'
  | 'Coastal & Backwaters'
  | 'Wildlife & Eco';

export interface Destination {
  id: string;
  name: string;
  state: string;
  region: 'North' | 'South' | 'West' | 'East' | 'Central' | 'North-East';
  category: DestinationCategory;
  image: string;
  rating: number;
  reviewsCount: number;
  bestSeason: string;
  tagline: string;
  description: string;
  attractions: string[];
  mustTryFood: string[];
  safetyTips: string[];
  nearestHub: string;
  idealDuration: string;
  averageCostPerDay: string;
  isPopular?: boolean;
}

export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge: string;
  colorScheme: 'emerald' | 'saffron' | 'amber' | 'teal';
  highlights: string[];
  actionLabel: string;
}

export interface StateInfo {
  name: string;
  code: string;
  capital: string;
  popularDestinations: string[];
  famousFor: string;
}

export type RegionType = 'State' | 'Union Territory';

export type PlaceCategory = 'Heritage' | 'Nature' | 'Spiritual' | 'Adventure' | 'Cultural';

export interface TouristPlace {
  id?: string;
  name: string;
  location?: string;
  description: string;
  category?: 'Heritage' | 'Nature' | 'Spiritual' | 'Adventure' | string;
  tag?: string;
  image?: string;
  isFamous?: boolean;
  isHiddenGem?: boolean;
  bestTimeToVisit?: string;
  travelTips?: string[];
  nearbyAttractions?: string[];
  timings?: string;
  entryFee?: string;
  rating?: number;
}

export interface RegionalDishItem {
  id: string;
  name: string;
  description: string;
  image: string;
  isVegetarian: boolean;
  dishType: 'Main Course' | 'Street Food' | 'Dessert' | 'Beverage' | 'Snack';
  tasteProfile?: string;
  servingTradition?: string;
}

export interface FestivalItem {
  id: string;
  name: string;
  timing: string;
  description: string;
  highlight: string;
}

export interface ArtAndCraftItem {
  id: string;
  name: string;
  category: 'Folk Dance' | 'Classical Art' | 'Handicraft & Textile' | 'Music & Theatre';
  description: string;
  giTagOrOrigin?: string;
}

export interface TraditionalAttire {
  mens: string;
  womens: string;
  textiles: string;
  accessories?: string;
}

export interface LocalCustomItem {
  title: string;
  description: string;
  etiquetteTip: string;
}

export interface LocalExperienceItem {
  id: string;
  title: string;
  category: 'Culinary' | 'Hands-on Craft' | 'Spiritual / Folk' | 'Nature & Heritage' | 'Community Trail';
  description: string;
  duration: string;
  highlight: string;
  image?: string;
}

export interface EnrichedCultureFoodData {
  dishes: RegionalDishItem[];
  festivals: FestivalItem[];
  artsAndCrafts: ArtAndCraftItem[];
  attire: TraditionalAttire;
  customs: LocalCustomItem[];
  experiences: LocalExperienceItem[];
}

export type ScamCategory =
  | 'Fake Guides & Touts'
  | 'Transport & Taxi Overcharging'
  | 'Fake Bookings & Hotel Diversion'
  | 'Gemstone & Souvenir Traps'
  | 'Spiritual / Temple Extortion'
  | 'Rental Vehicle Scams'
  | 'Digital & Ticket Scams';

export interface TouristScamItem {
  id: string;
  title: string;
  category: ScamCategory;
  severity: 'High' | 'Medium' | 'Low';
  commonLocation: string;
  modusOperandi: string;
  warningSigns: string[];
  preventionTips: string[];
  realExample: string;
}

export type SafetyAudience = 'Solo Travelers' | 'Women Travelers' | 'General Tourists' | 'Transit & Night';

export interface AudienceSafetyTip {
  id: string;
  audience: SafetyAudience;
  title: string;
  description: string;
  keyRule: string;
  badge: string;
}

export interface ScamReport {
  id: string;
  regionId: string;
  location: string;
  scamType: string;
  description: string;
  dateReported: string;
  approximateLoss?: string;
  isDemoData: boolean;
  status: 'Community Advisory (Demo)' | 'Under Review (Demo)' | 'User Submitted (Session)';
}

export interface IndiaRegion {
  id: string;
  name: string;
  type: RegionType;
  capital: string;
  zone: 'North' | 'South' | 'East' | 'West' | 'Central' | 'North-East' | 'Islands';
  image: string;
  tagline: string;
  description: string;
  officialLanguages: string[];
  bestSeason: string;
  touristPlaces: TouristPlace[];
  culture: {
    festivals: string[];
    artForms: string[];
    handicrafts: string[];
    highlights: string;
  };
  food: {
    dishes: string[];
    specialty: string;
    beverageOrDessert: string;
  };
  safety: {
    emergencyHelpline: string;
    touristPolice: string;
    tips: string[];
    womenSafetyNote: string;
  };
  travelInfo: {
    nearestAirports: string[];
    railwayConnectivity: string;
    roadConnectivity: string;
    idealStayDuration: string;
    permitRequired?: string;
  };
}

export type TravelStyle = 'Budget' | 'Mid-range' | 'Luxury';

export interface DestinationWeather {
  destinationId: string;
  destinationName: string;
  temperatureDay: number;
  temperatureNight: number;
  condition: string;
  humidity: number;
  precipitationChance: number;
  recommendedSeason: string;
  seasonSummary: string;
  packingAdvice: string;
  airQualityIndex: string;
  isDemoData: boolean;
}

export interface BudgetBreakdown {
  accommodation: number;
  food: number;
  localTravel: number;
  intercityTransport: number;
  attractionTickets: number;
  totalCost: number;
  perPersonCost: number;
  accommodationPerNight: number;
  foodPerDay: number;
  localTravelPerDay: number;
  ticketsPerDay: number;
}

export interface ItineraryDay {
  dayNumber: number;
  dateStr?: string;
  destinationId: string;
  destinationName: string;
  state: string;
  theme: string;
  morning: {
    activity: string;
    timing: string;
    highlight: string;
  };
  afternoon: {
    activity: string;
    timing: string;
    foodTip: string;
  };
  evening: {
    activity: string;
    timing: string;
    scenicTip: string;
  };
  ticketEstimate: string;
  practicalTip: string;
}

export interface SavedItinerary {
  id: string;
  title: string;
  destinations: Destination[];
  startDate: string;
  endDate: string;
  durationDays: number;
  travelersCount: number;
  travelStyle: TravelStyle;
  totalCostINR: number;
  perPersonCostINR: number;
  savedAt: string;
}
