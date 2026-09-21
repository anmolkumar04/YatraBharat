import {
  TouristScamItem,
  AudienceSafetyTip,
  ScamReport,
  IndiaRegion
} from '../types';

/**
 * Universal & Regional Tourist Scams Database
 * Grounded in real traveler advisories across India
 */
export const CORE_TOURIST_SCAMS: TouristScamItem[] = [
  {
    id: 'scam-fake-guides',
    title: 'Unauthorized Touts & Fake "Government" Guides',
    category: 'Fake Guides & Touts',
    severity: 'High',
    commonLocation: 'Monument entrance gates, parking lots, ticket counter lines',
    modusOperandi:
      'Individuals wearing fake laminated badges or claiming official Archaeological Survey of India (ASI) accreditation approach tourists claiming the main gate is shut for VIPs or lunch, offering "exclusive direct entry" and fast-track tours for exorbitant cash fees.',
    warningSigns: [
      'Refusal to present a Ministry of Tourism smart ID badge with QR code',
      'Claiming monument ticket counters are closed or sold out',
      'Insisting on taking you to a "government approved" handicraft emporium or spice shop before or after the tour',
      'Aggressive unsolicited following from parking areas to the entrance'
    ],
    preventionTips: [
      'Hire only Ministry of Tourism licensed regional guides from official monument desks or the Incredible India portal',
      'Demand to scan their official QR-verified badge before agreeing on any service',
      'Book official entrance tickets online directly via asi.payumoney.com or state tourism websites'
    ],
    realExample:
      'At major historical complexes, touts frequently claim: "Ticket line is 2 hours long, come with me through the ASI heritage entrance." They lead tourists to a side alley with no ticket access and demand advance guide fees.'
  },
  {
    id: 'scam-taxi-hotel-closed',
    title: 'The "Hotel Closed / Demolished / Road Blocked" Diversion',
    category: 'Fake Bookings & Hotel Diversion',
    severity: 'High',
    commonLocation: 'Airport arrivals, railway station exits, interstate bus terminals',
    modusOperandi:
      'Cab or auto-rickshaw drivers claim your pre-booked hotel is permanently closed, burned down, located in a hazardous protest zone, or full. They offer to drive you to an "authentic government tourist office" or alternative hotel where they earn 40–50% kickback commissions.',
    warningSigns: [
      'Driver insists on calling a "friend" or "hotel reception" on speakerphone who claims your booking was cancelled',
      'Refusal to use Google Maps or input your exact hotel destination',
      'High pressure to rebook through an unauthorized "tourist booking bureau"'
    ],
    preventionTips: [
      'Never accept a driver’s claim about your hotel; call your hotel directly using the phone number on your original confirmation voucher',
      'Use official prepaid taxi booths inside terminal buildings or app-based services (Uber, Ola, BluSmart)',
      'Keep offline Google Maps running on your phone to track vehicle movement in real time'
    ],
    realExample:
      'A traveler arriving at 11 PM was told by an auto driver that their heritage stay in the old city was cordoned off for VIP movement. The driver rerouted them to a dingy suburban lodge priced at triple the normal rate.'
  },
  {
    id: 'scam-taxi-meter-tamper',
    title: 'Prepaid Bypass, Broken Meter & Long-Route Surcharges',
    category: 'Transport & Taxi Overcharging',
    severity: 'Medium',
    commonLocation: 'Railway station approaches, nightlife strips, interstate bus stops',
    modusOperandi:
      'Drivers insist the meter is broken, demand flat arbitrary fares 4x–5x above regulatory tariff cards, claim hidden night surcharges at 3 PM, or deliberately take convoluted ring-road detours.',
    warningSigns: [
      'Refusal to turn on digital meter or show official RTO fare-card chart',
      'Quoting exorbitant lump sums before you board without discussing meter rates',
      'Claiming luggage or AC carries undocumented ₹300-₹500 surcharges'
    ],
    preventionTips: [
      'Always insist on meter flag-down or buy a prepaid slip from government/traffic police booths at terminals',
      'Confirm the total fare inclusive of toll taxes, luggage, and night rates before stepping into the vehicle',
      'Note down the vehicle registration number (e.g. DL 1R ..., RJ 14 ...) visible on the rear and front bumper'
    ],
    realExample:
      'At train station exits, drivers quote ₹600 for a 4 km journey that costs ₹80 by regulated meter or official prepaid taxi coupon.'
  },
  {
    id: 'scam-gemstone-carpet-courier',
    title: 'The Gemstone / Souvenir "Duty-Free Courier" Trap',
    category: 'Gemstone & Souvenir Traps',
    severity: 'High',
    commonLocation: 'Bazaars, tourist cafes, craft villages, jewelry showrooms',
    modusOperandi:
      'Charming shopkeepers or friendly acquaintances claim you can make thousands of dollars by taking a consignment of precious stones, pashmina shawls, or silk carpets back to your home country to help them bypass export customs duties, promising payment on arrival through an overseas partner.',
    warningSigns: [
      'Asking tourists to transport sealed packages or jewels across international borders',
      'Providing certificates of valuation printed by unaccredited private trade guilds',
      'Asking for advance credit card security deposits for the parcel'
    ],
    preventionTips: [
      'Never agree to courier or ship commercial parcels for strangers under any circumstances',
      'Buy precious jewelry, gems, and Pashmina only from BIS Hallmark or government emporiums (e.g. CCIE, Khadi Gramodyog, Boyanika)',
      'Treat any promise of guaranteed risk-free overseas buy-backs as an immediate red flag'
    ],
    realExample:
      'Tourists are sold low-grade synthetic gems with fake laboratory appraisal papers and requested to post them home, losing tens of thousands of rupees charged directly to their credit cards.'
  },
  {
    id: 'scam-spiritual-blessing',
    title: 'Aggressive Sacred Thread & "Temple Donation" Extortion',
    category: 'Spiritual / Temple Extortion',
    severity: 'Medium',
    commonLocation: 'River ghats, ancient temple entrances, sacred lake banks, ashram corridors',
    modusOperandi:
      'Self-proclaimed holy men (pandits, babas, or touts) forcefully tie sacred red threads (kalawa) around travelers’ wrists or press sacred flowers/sweets into their hands unrequested, followed by intense verbal pressure demanding ₹1,000–₹5,000 "sankalpa" donations for temple deities.',
    warningSigns: [
      'Rushing into personal space and wrapping threads on wrists without verbal consent',
      'Producing fake laminated donation ledgers showing fabricated foreign donations of ₹5,000+',
      'Invoking spiritual guilt or bad omen curses if donation amount is questioned'
    ],
    preventionTips: [
      'Keep your hands loosely folded in a polite "Namaste" or placed in your pockets when walking through crowded ghats',
      'A polite but firm "Nahin chahiye, dhanyawad" (I do not need this, thank you) de-escalates touts quickly',
      'Deposit any voluntary religious offerings only into locked official temple trust hundis (donation boxes)'
    ],
    realExample:
      'At river ghats, tourists are handed grain to feed sacred fish or holy flowers for puja, then surrounded by multiple individuals demanding mandatory donation slips of ₹2,500.'
  },
  {
    id: 'scam-rental-damage',
    title: 'Rental Vehicle Pre-Existing Damage & Passport Withholding',
    category: 'Rental Vehicle Scams',
    severity: 'Medium',
    commonLocation: 'Beach towns, hill station bike rentals, self-drive agencies',
    modusOperandi:
      'Rental operators demand your original physical passport as collateral. Upon vehicle return, they point out subtle pre-existing scratches or undercarriage dents, aggressively demanding hefty repair bills of ₹5,000–₹20,000 under threat of not returning your documents.',
    warningSigns: [
      'Operator insists on keeping original passport rather than a masked photocopy or refundable cash deposit',
      'Operator rushes you away without letting you conduct an initial walkaround inspection',
      'No formal written rental agreement mentioning vehicle condition'
    ],
    preventionTips: [
      'Never leave an original passport or Aadhaar as security collateral; provide a photocopy with a watermarked purpose note',
      'Record a continuous 360-degree high-definition video of the vehicle in front of the shopkeeper, capturing every existing ding, tire condition, and fuel level',
      'Test brakes, horn, headlight, and registration papers before driving off'
    ],
    realExample:
      'A traveler rented a scooter in a coastal resort. On return, the owner claimed the exhaust shield scratch was fresh and withheld their passport until ₹8,000 in cash was paid.'
  },
  {
    id: 'scam-fake-ticket-qr',
    title: 'Counterfeit Ticket Portals & Tampered Heritage QR Codes',
    category: 'Digital & Ticket Scams',
    severity: 'High',
    commonLocation: 'Online search engine sponsored ads, physical heritage signboards',
    modusOperandi:
      'Fraudulent phishing websites mimicking official state tourism or national park safari booking portals rank at the top of search ads. In physical monuments, fake sticker QR codes are pasted over official ticketing boards, directing phones to phishing payment gateways.',
    warningSigns: [
      'Payment requests to personal UPI handles (@okaxis, @paytm) instead of corporate merchant accounts',
      'Websites without `.gov.in` or official state domain extensions charging 3x the standard ASI entry tariff (₹50 Indian / ₹600 Foreigner)',
      'QR code stickers that look peeled, freshly pasted, or cover part of the official metal signage'
    ],
    preventionTips: [
      'Inspect physical QR boards closely; ensure they are printed directly on the official Archaeological Survey of India board',
      'Use only the official booking portal asi.payumoney.com or respective state forest department `.gov.in` websites for wildlife safaris',
      'Report any suspicious sticker QR code to monument security immediately'
    ],
    realExample:
      'Tourists scanning a sticker pasted outside an iconic monument paid ₹450 to an individual UPI account, only to find the ticket rejected at the turnstile gate.'
  }
];

/**
 * Region-specific Scam Insights & Nuances
 */
export function getRegionalScams(region: IndiaRegion): TouristScamItem[] {
  const name = region.name.toLowerCase();

  // Custom tailored scams based on regional geography and tourist patterns
  const regionalCustomScams: TouristScamItem[] = [];

  if (name.includes('rajasthan') || name.includes('agra') || name.includes('uttar pradesh')) {
    regionalCustomScams.push({
      id: `scam-fort-touts-${region.id}`,
      title: `${region.name} Fort & Heritage Palace Unofficial "Royalty" Guides`,
      category: 'Fake Guides & Touts',
      severity: 'High',
      commonLocation: 'Fort ramparts, elephant boarding points, bazaar alleys near palaces',
      modusOperandi:
        'Touts claim to be direct descendants of royal courtiers with privileged access to "secret zenana wings" and private rooftop sunset viewpoints closed to the public.',
      warningSigns: [
        'Offering tours for "whatever tip you feel like giving", then demanding ₹2,000+ upon exit',
        'Directing you to private gemstone and block-print shops owned by their cousins'
      ],
      preventionTips: [
        'Purchase the official composite ticket at the monument booking office',
        'Audio guide headsets provided by the heritage trust at the main gate provide authentic, verified commentary'
      ],
      realExample:
        'Tourists were escorted onto a private residential rooftop under the guise of an ancient watchtower, and presented with mandatory ₹500 tea bills.'
    });
  }

  if (name.includes('goa') || name.includes('andaman') || name.includes('puducherry') || name.includes('kerala')) {
    regionalCustomScams.push({
      id: `scam-water-sports-${region.id}`,
      title: 'Unregistered Watersports Operators & Hidden Photography Fees',
      category: 'Rental Vehicle Scams',
      severity: 'Medium',
      commonLocation: 'Public beaches, jetty boarding points, boat slips',
      modusOperandi:
        'Unregistered operators offer cheap jet-ski or parasailing rides, cut the ride short within 90 seconds, and then demand an additional ₹1,500–₹3,000 for raw GoPro video clips that were promised as "included".',
      warningSigns: [
        'No life jacket safety certification or maritime license displayed',
        'Cash-only transactions with no printed counter receipt',
        'Refusal to clearly define ride duration beforehand'
      ],
      preventionTips: [
        'Book watersports only through certified beach counters approved by the State Tourism Development Corporation',
        'Inspect life jackets for functional buckles and whistle gear before embarking'
      ],
      realExample:
        'Travelers booking scuba or parasailing packages found the video footage held hostage for an extra cash charge not mentioned on the brochure.'
    });
  }

  if (name.includes('himachal') || name.includes('uttarakhand') || name.includes('ladakh') || name.includes('jammu')) {
    regionalCustomScams.push({
      id: `scam-mountain-taxi-${region.id}`,
      title: 'High-Altitude Syndicate Cab Fare Surcharges & Fake Oxygen Canisters',
      category: 'Transport & Taxi Overcharging',
      severity: 'High',
      commonLocation: 'Mountain passes (e.g. Rohtang, Khardung La), trek trailheads, taxi stands',
      modusOperandi:
        'Unauthorized cab cartels attempt to block outside taxis, forcing travelers to hire local vehicles at steep markups. Street vendors also sell expired or empty miniature "altitude oxygen cans" for ₹800–₹1,500.',
      warningSigns: [
        'Unmarked private cars posing as authorized mountain cabs',
        'Roadside vendors selling unsealed oxygen canisters with no medical pressure gauge'
      ],
      preventionTips: [
        'Book vehicles through the official Local Taxi Union rate-card booths or state transport HRTC/JKSRTC buses',
        'Obtain medical-grade oxygen canisters from licensed pharmacy stores in the base city before high-altitude ascent',
        'Acclimatize properly (minimum 24-48 hours) rather than relying on novelty oxygen cans'
      ],
      realExample:
        'Travelers were pressured into hiring snow-suits and boots at roadside shacks for ₹1,500 under false claims that the mountain pass would not permit entry in personal winter wear.'
  });
  }

  if (name.includes('kerala') || name.includes('kashmir')) {
    regionalCustomScams.push({
      id: `scam-houseboat-agent-${region.id}`,
      title: 'Houseboat / Shikara Middlemen Switching & AC Curtailment',
      category: 'Fake Bookings & Hotel Diversion',
      severity: 'Medium',
      commonLocation: 'Jetties, railway station drop-off points, lake boulevard banks',
      modusOperandi:
        'Brokers show photos of ultra-luxurious houseboats on their smartphones, collect full payment, then deliver tourists to aging, unmaintained vessels with broken generators and limited 2-hour AC windows.',
      warningSigns: [
        'Brokers insisting on full upfront cash payment at the parking lot before showing the actual vessel',
        'Houseboat lacking the mandatory State Tourism green/gold classification certificate plate'
      ],
      preventionTips: [
        'Inspect the actual vessel interior, functional generator, and bathroom before handing over payment',
        'Book directly through official tourism department accredited operators (e.g. DTPC or KTDC registered)'
      ],
      realExample:
        'Tourists paid for a luxury 3-bedroom cruiser and were placed on a noisy single-hull boat with non-operational air conditioning throughout the night.'
    });
  }

  // Combine customized items first, then common core scams
  return [...regionalCustomScams, ...CORE_TOURIST_SCAMS];
}

/**
 * Targeted Safety Tips by Traveler Segment
 */
export const AUDIENCE_SAFETY_TIPS: AudienceSafetyTip[] = [
  {
    id: 'tip-women-1',
    audience: 'Women Travelers',
    title: 'Women Helplines 1090 & 181 Multi-Lingual Support',
    description:
      'Every Indian state operates a 24x7 Women Power Line (1090 / 181). These numbers connect directly to specialized female officers trained to respond swiftly to harassment, stalking, or distress.',
    keyRule: 'Save 1090 & 112 on speed dial. Women travelers can also dial the National Commission for Women helpline at 7827170170.',
    badge: 'Immediate Response'
  },
  {
    id: 'tip-women-2',
    audience: 'Women Travelers',
    title: 'Designated Women Transit Coaches & Waiting Rooms',
    description:
      'All metro systems (Delhi, Mumbai, Bengaluru, Kolkata, Chennai, Kochi) have dedicated ladies-only coaches (usually the first car). Major railway stations offer dedicated, guarded Ladies Waiting Rooms with clean washrooms.',
    keyRule: 'Look for the bright pink flower or female silhouette signage on metro platforms and railway station concourses.',
    badge: 'Transit Safety'
  },
  {
    id: 'tip-women-3',
    audience: 'Women Travelers',
    title: 'Verified Rides & Live Tracking Sharing',
    description:
      'When traveling after dark, use app-based ride services (Uber, Ola, BluSmart) and use the in-app "Share Trip" feature with family or trusted friends. If using an auto-rickshaw, take a photo of the registration plate and driver ID.',
    keyRule: 'Keep mobile GPS location turned on and notify your accommodation host before departing late at night.',
    badge: 'Night Transit'
  },
  {
    id: 'tip-solo-1',
    audience: 'Solo Travelers',
    title: 'Dual Payment & Document Storage Protocol',
    description:
      'Never keep all your cash, cards, and ID in one pouch. Store a secondary credit/debit card and cash reserve in a hidden pocket or hotel safe. Maintain soft copies of your passport, visa, and Aadhaar on Government DigiLocker or encrypted cloud storage.',
    keyRule: 'Store emergency cash (₹2,000–₹3,000) separately from your daily wallet.',
    badge: 'Financial Defense'
  },
  {
    id: 'tip-solo-2',
    audience: 'Solo Travelers',
    title: 'Sim Card Verification & Offline Maps Preparation',
    description:
      'Purchase an authorized Indian tourist SIM card (Airtel or Jio) with an e-SIM or physical passport verification at international airport arrivals. Download offline Google Maps for your region before venturing into remote or cellular-shadow zones.',
    keyRule: 'Do not rely on open public Wi-Fi networks for banking or financial transactions.',
    badge: 'Connectivity'
  },
  {
    id: 'tip-solo-3',
    audience: 'Solo Travelers',
    title: 'Social Boundary & Itinerary Privacy',
    description:
      'While Indian hospitality is legendary, refrain from sharing specific details like your exact room number or solo itinerary with stranger drivers, casual guides, or over-inquisitive touts.',
    keyRule: 'If asked if you are alone, say you are meeting friends, a tour group, or family shortly.',
    badge: 'Street Smart'
  },
  {
    id: 'tip-general-1',
    audience: 'General Tourists',
    title: '24x7 Multi-Lingual Tourist Helpline: 1363',
    description:
      'The Ministry of Tourism provides a 24×7 multi-lingual toll-free helpline (1363 / 1800-11-1363) operating in 12 languages (including English, Hindi, German, French, Spanish, Japanese, Russian, and Mandarin).',
    keyRule: 'Call 1363 for immediate dispute resolution, verified travel guidance, or emergency advice anywhere in India.',
    badge: 'Government 24×7'
  },
  {
    id: 'tip-general-2',
    audience: 'General Tourists',
    title: 'Food & Drinking Water Hygiene Checklist',
    description:
      'Consume only sealed bottled water from reputed brands (verify the seal clicks upon opening) or purified RO water at reputable restaurants. For street food, select bustling stalls with high footfall where food is cooked fresh on open, roaring flame.',
    keyRule: 'Avoid unpeeled cut fruit displayed on open road carts and unpasteurized dairy from roadside carts.',
    badge: 'Health & Wellness'
  },
  {
    id: 'tip-general-3',
    audience: 'General Tourists',
    title: 'Official ASI & State Protected Monument Ticketing',
    description:
      'Monument tickets for all centrally protected monuments (Taj Mahal, Red Fort, Qutub Minar, Konark, Ajanta, Hampi, etc.) are sold strictly online via asi.payumoney.com or designated ticketing windows. Foreign tourists receive dedicated queue access at ticket gates.',
    keyRule: 'Always carry a government-issued photo ID (passport or voter/Aadhaar) matching your online ticket.',
    badge: 'Ticketing'
  },
  {
    id: 'tip-transit-1',
    audience: 'Transit & Night',
    title: 'Train Station Porter & Coolie Regulatory Rates',
    description:
      'Licensed railway porters (Coolies) wear red kurtas with metal badge numbers strapped to their arms. Railways maintain fixed official luggage carriage rates displayed on platform boards. Agree on luggage count and rate before handing over bags.',
    keyRule: 'Hire only coolies with visible official brass armbands with registration numbers.',
    badge: 'Rail Travel'
  }
];

/**
 * Pre-seeded Simulated Community Advisory Reports (Clearly labeled DEMO DATA)
 */
export const SEEDED_DEMO_REPORTS: ScamReport[] = [
  {
    id: 'demo-report-1',
    regionId: 'universal',
    location: 'West Gate Ticketing Plaza',
    scamType: 'Fake Guides & Touts',
    description:
      'An individual wearing a laminated "Incredible India" lanyard claimed ticket servers were down and demanded ₹800 to buy an offline pass. The official ASI booth 30 meters ahead was fully operational.',
    dateReported: 'Sep 12, 2026',
    approximateLoss: '₹800 avoided',
    isDemoData: true,
    status: 'Community Advisory (Demo)'
  },
  {
    id: 'demo-report-2',
    regionId: 'universal',
    location: 'Central Railway Station Auto Stand',
    scamType: 'Transport & Taxi Overcharging',
    description:
      'Auto drivers aggressively refused the regulatory digital meter, quoting ₹450 for a 3.5 km trip. Walking 80 meters to the traffic police prepaid kiosk got a valid voucher for ₹75.',
    dateReported: 'Sep 14, 2026',
    approximateLoss: '₹375 saved',
    isDemoData: true,
    status: 'Community Advisory (Demo)'
  },
  {
    id: 'demo-report-3',
    regionId: 'universal',
    location: 'Heritage Bazaar Alley',
    scamType: 'Gemstone & Souvenir Traps',
    description:
      'Shopkeeper claimed a silk shawl was 100% pure Himalayan Pashmina with a GI seal for ₹12,000. Flame and ring test showed synthetic blended polyester fibers.',
    dateReported: 'Sep 09, 2026',
    approximateLoss: '₹12,000 avoided',
    isDemoData: true,
    status: 'Community Advisory (Demo)'
  },
  {
    id: 'demo-report-4',
    regionId: 'universal',
    location: 'Main River Ghat Corridor',
    scamType: 'Spiritual / Temple Extortion',
    description:
      'Touts approached handing out marigold petals uninvited and attempted to tie red wrist threads, subsequently demanding a ₹2,000 cash donation slip. Politely refusing and walking towards the main temple cleared the situation.',
    dateReported: 'Sep 05, 2026',
    approximateLoss: '₹2,000 avoided',
    isDemoData: true,
    status: 'Community Advisory (Demo)'
  }
];

const STORAGE_KEY_PREFIX = 'yatrasetu_scam_reports_';

/**
 * Load reports for a region: pre-seeded demo reports + user-submitted reports from localStorage
 */
export function getRegionalScamReports(regionId: string, regionName: string): ScamReport[] {
  let userReports: ScamReport[] = [];

  try {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX}${regionId}`);
      if (raw) {
        userReports = JSON.parse(raw);
      }
    }
  } catch (e) {
    console.error('Failed to parse user reports from localStorage:', e);
  }

  // Pre-seeded contextual reports for this region
  const seededForRegion: ScamReport[] = SEEDED_DEMO_REPORTS.map((r, idx) => ({
    ...r,
    id: `${r.id}-${regionId}`,
    regionId,
    location: `${regionName} - ${r.location}`
  }));

  // User submitted reports come first
  return [...userReports, ...seededForRegion];
}

/**
 * Save user submitted report to localStorage (Session/Client persistence)
 */
export function saveUserScamReport(regionId: string, report: Omit<ScamReport, 'id' | 'regionId' | 'dateReported' | 'isDemoData' | 'status'>): ScamReport {
  const newReport: ScamReport = {
    id: `user-report-${Date.now()}`,
    regionId,
    location: report.location,
    scamType: report.scamType,
    description: report.description,
    approximateLoss: report.approximateLoss || 'Undisclosed',
    dateReported: 'Today (Just Now)',
    isDemoData: true, // Clearly marked as demo / unverified
    status: 'User Submitted (Session)'
  };

  try {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const key = `${STORAGE_KEY_PREFIX}${regionId}`;
      const raw = localStorage.getItem(key);
      const existing: ScamReport[] = raw ? JSON.parse(raw) : [];
      const updated = [newReport, ...existing];
      localStorage.setItem(key, JSON.stringify(updated));
    }
  } catch (e) {
    console.error('Failed to save user report to localStorage:', e);
  }

  return newReport;
}
