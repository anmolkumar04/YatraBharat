import { FeatureItem } from '../types';

export const CORE_FEATURES: FeatureItem[] = [
  {
    id: 'explore-places',
    title: 'Explore Places',
    subtitle: 'From Iconic Wonders to Hidden Havens',
    description: 'Traverse 28 diverse states and 8 union territories. Uncover 42+ UNESCO World Heritage monuments, remote Himalayan hamlets, pristine coastal coves, and mystical ancient circuits.',
    iconName: 'Compass',
    badge: 'State & Heritage Circuits',
    colorScheme: 'emerald',
    highlights: [
      'The Golden Triangle (Delhi, Agra, Jaipur)',
      'Spiritual Ganges Corridor & Buddhist Pilgrimage Trails',
      'Western Ghats UNESCO Biosphere & Tea Hills',
      'North-East Living Root Bridges & Bamboo Valleys'
    ],
    actionLabel: 'Discover Circuits'
  },
  {
    id: 'local-culture-food',
    title: 'Local Culture & Food',
    subtitle: 'Culinary Heritage & Living Traditions',
    description: 'Taste authentic regional thalis, master spice nuances, attend vibrant folk dance festivals, and support GI-tagged artisanal craft communities direct from traditional master weavers.',
    iconName: 'UtensilsCrossed',
    badge: 'Authentic Gastronomy',
    colorScheme: 'saffron',
    highlights: [
      'Regional Thali Explorations (Kashmiri Wazwan to Kerala Sadhya)',
      'Classical & Folk Arts (Kathakali, Kathak, Garba, Chhau)',
      'GI-Tagged Crafts (Banarasi Brocade, Rogan Art, Madhubani)',
      'Festival Calendar & Regional Etiquette Guides'
    ],
    actionLabel: 'Taste & Experience'
  },
  {
    id: 'travel-safety',
    title: 'Travel Safety',
    subtitle: '24x7 Verified Tourism Helpline & Security',
    description: 'Travel India with absolute peace of mind. Access government tourist police contacts, verified female-friendly accommodations, real-time weather advisories, and emergency protocols.',
    iconName: 'ShieldCheck',
    badge: 'Safety First (1363 / 112)',
    colorScheme: 'teal',
    highlights: [
      'Ministry of Tourism Multi-lingual Helpline: 1363',
      'Emergency Response Support System (ERSS): 112',
      'Solo & Women Traveler Verified Stays & Transit Tips',
      'High-Altitude Acclimatization & Monsoonal Advisories'
    ],
    actionLabel: 'View Safety Protocol'
  },
  {
    id: 'plan-your-trip',
    title: 'Plan Your Trip',
    subtitle: 'Intelligent, Budget-Friendly Itineraries',
    description: 'Craft tailor-made day-by-day itineraries matched to your travel pace, budget in Indian Rupees, best seasonal weather windows, and verified Vande Bharat & railway connections.',
    iconName: 'CalendarDays',
    badge: 'Smart Trip Planner',
    colorScheme: 'amber',
    highlights: [
      'Custom Day-Wise Itinerary Generator with Cost Estimates',
      'Best Season & Weather Predictor by Region',
      'Inter-City Transit: Vande Bharat Trains & Regional Flights',
      'Luggage & Cultural Attire Checklists'
    ],
    actionLabel: 'Start Planning'
  }
];
