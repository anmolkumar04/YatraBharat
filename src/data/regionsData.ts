import { IndiaRegion } from '../types';

export const INDIA_REGIONS: IndiaRegion[] = [
  // ================= 28 STATES =================
  {
    id: 'andhra-pradesh',
    name: 'Andhra Pradesh',
    type: 'State',
    capital: 'Amaravati',
    zone: 'South',
    image: 'https://s7ap1.scene7.com/is/image/incredibleindia/varaha-lakshmi-narasimha-temple-buddhist-complex-visakhapatnam-andhra-pradesh-1-attr-hero?qlt=82&ts=1742150957215',
    tagline: 'The Sunrise State of Sacred Shrines & Coastal Breezes',
    description: 'Home to the divine Tirumala Venkateswara Temple, ancient Buddhist monuments in Amaravati, and serene beaches along the Coromandel coast.',
    officialLanguages: ['Telugu'],
    bestSeason: 'October to March',
    touristPlaces: [
      { name: 'Tirupati (Tirumala Temple)', description: 'World-famous sacred hill shrine dedicated to Lord Venkateswara', tag: 'Spiritual' },
      { name: 'Araku Valley & Borra Caves', description: 'Misty Eastern Ghats hill station famous for organic coffee and limestone caves', tag: 'Nature' },
      { name: 'Visakhapatnam (Vizag)', description: 'Coastal port city with pristine beaches like Rishikonda and submarine museum', tag: 'Coastal' },
      { name: 'Gandikota & Belum Caves', description: 'Known as the Grand Canyon of India with dramatic gorge vistas and ancient fort', tag: 'Adventure' },
    ],
    culture: {
      festivals: ['Ugadi', 'Sankranti', 'Tirupati Brahmotsavam'],
      artForms: ['Kuchipudi Dance', 'Burra Katha', 'Harikatha'],
      handicrafts: ['Kalamkari Textiles', 'Kondapalli Toys', 'Mangalagiri Handlooms'],
      highlights: 'Rich Telugu classical heritage, historic temple architecture, and warm coastal hospitality.'
    },
    food: {
      dishes: ['Andhra Thali with Gongura Pachadi', 'Hyderabadi/Andhra Biryani', 'Pesarattu Upma', 'Chepala Pulusu (Fish Curry)'],
      specialty: 'Fiery and aromatic Guntur chili spices with tangy gongura leaves.',
      beverageOrDessert: 'Pootharekulu (paper sweet) & Filter Coffee'
    },
    safety: {
      emergencyHelpline: '112 / 100',
      touristPolice: '1363 (Tourist Police at Tirupati & Vizag Beach)',
      tips: ['Book Tirupati special darshan tickets well in advance via TTD portal', 'Stay hydrated during summer months in coastal areas', 'Follow sea safety flags at Vizag beaches'],
      womenSafetyNote: 'Safe for solo travelers; special female security squads active at major pilgrimage centers.'
    },
    travelInfo: {
      nearestAirports: ['Visakhapatnam International (VTZ)', 'Tirupati Airport (TIR)', 'Vijayawada Airport (VGA)'],
      railwayConnectivity: 'Excellent mainline network via Vijayawada Junction, Vizag, and Tirupati.',
      roadConnectivity: 'NH-16 links Chennai to Kolkata along the coastal spine.',
      idealStayDuration: '4 - 6 Days'
    }
  },
  {
    id: 'arunachal-pradesh',
    name: 'Arunachal Pradesh',
    type: 'State',
    capital: 'Itanagar',
    zone: 'North-East',
    image: 'https://img.magnific.com/premium-photo/arunachal-pradesh-foundation-day_548646-87690.jpg?ga=GA1.1.240894342.1782198686&semt=ais_hybrid&w=740&q=80',
    tagline: 'The Land of Dawn-Lit Mountains & Sacred Monasteries',
    description: 'India’s easternmost frontier boasting snow-capped peaks, verdant valleys, indigenous tribal traditions, and Tawang Monastery.',
    officialLanguages: ['English', 'Hindi', 'Indigenous Tribal Dialects'],
    bestSeason: 'October to April',
    touristPlaces: [
      { name: 'Tawang Monastery & Sela Pass', description: 'India’s largest monastery perched at 10,000 ft with high mountain glacial lakes', tag: 'Heritage' },
      { name: 'Ziro Valley', description: 'UNESCO-recognized cradle of the Apatani tribe surrounded by pine hills', tag: 'Eco-Culture' },
      { name: 'Namdapha National Park', description: 'Dense biodiversity hotspot harboring four species of big cats', tag: 'Wildlife' },
      { name: 'Dirang & Sangti Valley', description: 'Picturesque valleys with kiwi orchards, hot springs, and black-necked cranes', tag: 'Scenic' },
    ],
    culture: {
      festivals: ['Losar (Monpa New Year)', 'Torgya', 'Ziro Music Festival', 'Dree Festival'],
      artForms: ['Aji Lhamu Pantomime Dance', 'Thangka Painting', 'Monpa Woodcarving'],
      handicrafts: ['Cane & Bamboo Crafts', 'Monpa Handwoven Blankets', 'Yak Wool Shawls'],
      highlights: 'Enchanting harmony of Tibetan Mahayana Buddhism and vibrant animist tribal lifestyles.'
    },
    food: {
      dishes: ['Thukpa & Zan (Millet Porridge)', 'Pika Pila (Bamboo Shoot Pickle)', 'Smoked Pork with King Chili', 'Lukter (Beef with Flaked Chilis)'],
      specialty: 'Naturally fermented bamboo shoot flavors with indigenous Himalayan wild herbs.',
      beverageOrDessert: 'Apong (Traditional fermented rice beer) & Butter Tea'
    },
    safety: {
      emergencyHelpline: '112 / 100',
      touristPolice: '1363 (Tourist Information Hub, Itanagar)',
      tips: ['Inner Line Permit (ILP) is mandatory for domestic visitors; PAP for foreign tourists', 'Carry warm thermal clothing for high-altitude passes', 'Hire experienced 4WD drivers for mountain hairpin routes'],
      womenSafetyNote: 'Tribe-led community structures make Arunachal very hospitable and respectful to female travelers.'
    },
    travelInfo: {
      nearestAirports: ['Donyi Polo Airport, Itanagar (HGI)', 'Tezpur Airport (Assam)', 'Guwahati (GAU) for broad connections'],
      railwayConnectivity: 'Naharlagun railway station near Itanagar connected to Guwahati & Delhi.',
      roadConnectivity: 'Trans-Arunachal Highway; snow chains occasionally required near Sela Pass in winter.',
      idealStayDuration: '6 - 9 Days',
      permitRequired: 'Mandatory ILP (Inner Line Permit) easily acquired online at arunachalilp.gov.in'
    }
  },
  {
    id: 'assam',
    name: 'Assam',
    type: 'State',
    capital: 'Dispur (Guwahati)',
    zone: 'North-East',
    image: 'https://cdn.britannica.com/47/156447-004-A32902EB/tea-plantation-summer-monsoon-Assam-India-state.jpg',
    tagline: 'The Gateway to the North-East & Land of Red River',
    description: 'Sprawling tea gardens, the mighty Brahmaputra river, Kamakhya temple, and the UNESCO world heritage one-horned rhino sanctuary.',
    officialLanguages: ['Assamese', 'Bodo', 'Bengali'],
    bestSeason: 'November to April',
    touristPlaces: [
      { name: 'Kaziranga National Park', description: 'World’s highest concentration of the Great Indian One-Horned Rhinoceros', tag: 'Wildlife' },
      { name: 'Majuli Island', description: 'World’s largest inhabited river island and center of Neo-Vaishnavite Satra culture', tag: 'Culture' },
      { name: 'Kamakhya Temple', description: 'Ancient Shakti Peetha atop Nilachal Hill with panoramic views of Brahmaputra', tag: 'Spiritual' },
      { name: 'Manas National Park', description: 'UNESCO biosphere reserve bordering Bhutan with wild water buffaloes', tag: 'Eco-Tour' },
    ],
    culture: {
      festivals: ['Rongali Bihu (Spring)', 'Kongali Bihu', 'Bhogali Bihu', 'Ambubachi Mela'],
      artForms: ['Bihu Folk Dance', 'Sattriya Classical Dance', 'Bhaona (Traditional Drama)'],
      handicrafts: ['Muga Silk (Golden Silk of Assam)', 'Assamese Gamosa', 'Jaapi (Woven Bamboo Hat)'],
      highlights: 'Centuries-old monastic satras, exquisite golden silks, and riverine folk celebrations.'
    },
    food: {
      dishes: ['Assamese Thali with Khar and Tenga (Sour fish curry)', 'Duck with Ash Gourd (Haah Joha)', 'Pitha & Laru', 'Masor Tenga'],
      specialty: 'Minimal spice usage highlighting natural herbs, sour elephant apples, and mustard oil.',
      beverageOrDessert: 'Assam Orthodox Black Milk Tea & Rice Wine'
    },
    safety: {
      emergencyHelpline: '112 / 100',
      touristPolice: '1363 (Guwahati Airport & Kaziranga Checkpoints)',
      tips: ['Kaziranga safari zones are closed during monsoon months (May to October)', 'Use certified jeep and elephant safari operators inside national parks', 'Wear breathable cottons during humid daytime excursions'],
      womenSafetyNote: 'Guwahati is a vibrant metro with safe transit; group safari tours recommended in rural reserves.'
    },
    travelInfo: {
      nearestAirports: ['Lokpriya Gopinath Bordoloi International Airport, Guwahati (GAU)', 'Jorhat Airport (JRH)', 'Dibrugarh (DIB)'],
      railwayConnectivity: 'Guwahati Junction is the major railway hub connecting North-East India with Delhi, Kolkata, and Mumbai.',
      roadConnectivity: 'AH-1 and NH-27 form high-speed corridors across the state.',
      idealStayDuration: '4 - 7 Days'
    }
  },
  {
    id: 'bihar',
    name: 'Bihar',
    type: 'State',
    capital: 'Patna',
    zone: 'East',
    image: 'https://www.incredibleindia.gov.in/content/dam/incredible-india/images/festivals-and-events/regional-festivals/chhath-puja/chhath-puja-bihar-2-fes-body1.jpeg',
    tagline: 'The Sacred Cradle of Buddhism, Jainism & Nalanda',
    description: 'Walk the paths of Buddha at the Mahabodhi Temple in Bodh Gaya, explore ruins of Nalanda University, and experience the sacred fervor of Chhath Puja.',
    officialLanguages: ['Hindi', 'Urdu', 'Maithili', 'Bhojpuri', 'Magahi'],
    bestSeason: 'October to March',
    touristPlaces: [
      { name: 'Bodh Gaya (Mahabodhi Temple)', description: 'UNESCO World Heritage Site where Siddhartha Gautama attained enlightenment under the Bodhi Tree', tag: 'Spiritual' },
      { name: 'Nalanda University Ruins', description: 'Ancient 5th-century international university and architectural wonder', tag: 'Heritage' },
      { name: 'Rajgir & Vishwa Shanti Stupa', description: 'Hot springs, Japanese Peace Pagoda, and Gridhakuta (Vulture Peak)', tag: 'History' },
      { name: 'Vaishali', description: 'Birthplace of Lord Mahavira and historic capital of the ancient Licchavi republic', tag: 'Sacred' },
    ],
    culture: {
      festivals: ['Chhath Puja', 'Sonepur Cattle Fair', 'Buddha Jayanti', 'Sama Chakeva'],
      artForms: ['Madhubani / Mithila Painting', 'Manjusha Art', 'Bhojpuri Folk Songs'],
      handicrafts: ['Madhubani Canvas & Wall Hangings', 'Sikki Grass Crafts', 'Bhagalpuri Silk (Tussar)'],
      highlights: 'Spiritual epicenter of non-violence, ancient monastic scholarship, and sacred river veneration.'
    },
    food: {
      dishes: ['Litti Chokha with Sattu & Ghee', 'Sattu Paratha & Sharbat', 'Bihari Kebabs', 'Khaja of Silao (GI Tag)'],
      specialty: 'Roasted gram flour (sattu) cooked over charcoal embers, paired with mashed roasted brinjal/tomatoes.',
      beverageOrDessert: 'Tilkut of Gaya & Anarsa'
    },
    safety: {
      emergencyHelpline: '112 / 100',
      touristPolice: '1363 (Tourist Assistance at Bodh Gaya & Rajgir)',
      tips: ['Dress reverently inside Mahabodhi temple premises', 'Verify registered tour guides at Nalanda Archaeological Site', 'Book evening trains in advance during Chhath festival season'],
      womenSafetyNote: 'Buddhist pilgrimage circuits have active tourist police and high international traveler security.'
    },
    travelInfo: {
      nearestAirports: ['Gaya International Airport (GAY)', 'Jay Prakash Narayan Airport, Patna (PAT)'],
      railwayConnectivity: 'Patna Junction & Gaya Junction are major stops on the Delhi-Kolkata Grand Chord line.',
      roadConnectivity: 'Well connected by NH-31 and NH-19 (Grand Trunk Road).',
      idealStayDuration: '3 - 5 Days'
    }
  },
  {
    id: 'chhattisgarh',
    name: 'Chhattisgarh',
    type: 'State',
    capital: 'Raipur',
    zone: 'Central',
    image: 'https://t4.ftcdn.net/jpg/18/39/06/01/360_F_1839060198_Wg83KAwo0BiOrKmcefddrGpfFtgwETAl.jpg',
    tagline: 'The Green Heart of India & Niagara of Chitrakote',
    description: 'Blessed with 44% forest cover, majestic horseshoe waterfalls, ancient tribal heritage in Bastar, and sacred temples of Sirpur.',
    officialLanguages: ['Chhattisgarhi', 'Hindi'],
    bestSeason: 'October to March',
    touristPlaces: [
      { name: 'Chitrakote Waterfalls', description: 'Widest waterfall in India, often celebrated as the Niagara of India', tag: 'Nature' },
      { name: 'Bastar & Jagdalpur', description: 'Living tribal communities, Bell Metal (Dhokra) art, and Kanger Valley National Park', tag: 'Culture' },
      { name: 'Sirpur Heritage Site', description: 'Remarkable Buddhist, Hindu, and Jain archaeological monuments on the banks of Mahanadi', tag: 'Archaeology' },
      { name: 'Tirathgarh Falls & Kutumsar Caves', description: 'Multi-tiered waterfall and subterranean limestone stalactite caverns', tag: 'Adventure' },
    ],
    culture: {
      festivals: ['Bastar Dussehra (75-day festival)', 'Madai Festival', 'Rajim Kumbh'],
      artForms: ['Panthi Dance', 'Raut Nacha', 'Pandavani Folk Singing'],
      handicrafts: ['Bastar Dhokra Bell Metal', 'Wrought Iron Crafts (Loha Shilp)', 'Kosa Silk'],
      highlights: '75-day long non-violent Bastar Dussehra dedicated to Goddess Danteshwari and indigenous forest rituals.'
    },
    food: {
      dishes: ['Chila with Tomato Chutney', 'Farra (Steamed Rice Rolls)', 'Muthia', 'Bafauri'],
      specialty: 'Nutrient-rich indigenous rice and lentil preparations, gently steamed or griddled.',
      beverageOrDessert: 'Mahua drink (traditional) & Dehrori (sweet fried dumplings in syrup)'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: '1363 (Raipur & Jagdalpur Tourist Offices)',
      tips: ['Stick to official tourism circuits when visiting forested waterfalls', 'Purchase authentic Dhokra crafts directly from artisan cooperatives', 'Carry mosquito repellent for rainforest treks'],
      womenSafetyNote: 'Main tourism circuits around Raipur, Sirpur, and Chitrakote are peaceful and welcoming.'
    },
    travelInfo: {
      nearestAirports: ['Swami Vivekananda Airport, Raipur (RPR)', 'Jagdalpur Airport (JGB)'],
      railwayConnectivity: 'Raipur Junction and Bilaspur Junction on the Howrah-Mumbai line.',
      roadConnectivity: 'NH-30 and NH-53 provide smooth highway transit across the state.',
      idealStayDuration: '3 - 5 Days'
    }
  },
  {
    id: 'goa',
    name: 'Goa',
    type: 'State',
    capital: 'Panaji',
    zone: 'West',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Pearl of the Orient, Golden Shores & Portuguese Charm',
    description: 'Famous for sun-kissed Arabian Sea beaches, UNESCO Baroque churches in Old Goa, spice plantations, vibrant shacks, and susegad lifestyle.',
    officialLanguages: ['Konkani', 'English', 'Marathi', 'Portuguese (Historical)'],
    bestSeason: 'November to February',
    touristPlaces: [
      { name: 'Old Goa & Basilica of Bom Jesus', description: 'UNESCO World Heritage church enshrining the mortal remains of St. Francis Xavier', tag: 'Heritage' },
      { name: 'Palolem & Agonda Beaches (South Goa)', description: 'Crescent-shaped serene beaches with peaceful golden sands and dolphin spotting', tag: 'Beaches' },
      { name: 'Dudhsagar Falls', description: 'Spectacular 4-tiered cascading waterfall nestled inside Bhagwan Mahavir Wildlife Sanctuary', tag: 'Nature' },
      { name: 'Fontainhas (Latin Quarter, Panaji)', description: 'Vibrant Portuguese heritage district with narrow streets and colonial pastel villas', tag: 'Culture' },
    ],
    culture: {
      festivals: ['Goa Carnival', 'Shigmo (Spring)', 'Feast of St. Francis Xavier', 'Sao Joao'],
      artForms: ['Fado Music', 'Dekhni & Fugdi Dance', 'Mando Singing'],
      handicrafts: ['Terracotta Pottery', 'Crochet & Lace', 'Brass Metalware'],
      highlights: 'A unique fusion of Konkani coastal traditions and Latin Catholic architectural legacy.'
    },
    food: {
      dishes: ['Goan Fish Curry with Rice', 'Pork Vindaloo', 'Chicken Xacuti', 'Crab Xec Xec'],
      specialty: 'Coconut milk, fiery Kashmiri red chilies, kokum (tangy mangosteen), and toddy vinegar.',
      beverageOrDessert: 'Bebinca (7-layer coconut pudding) & Cashew/Coconut Feni'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: 'Goa Tourist Police (Panaji & Calangute) / 1363',
      tips: ['Heed lifeguard red flags; swimming is banned during turbulent tides', 'Hire scooters and self-drive cars only from authorized yellow-number-plate vendors', 'Wear helmets and avoid drink driving strictly enforced by traffic police'],
      womenSafetyNote: 'Widely regarded as one of India’s most traveler-friendly and relaxed destinations for solo women.'
    },
    travelInfo: {
      nearestAirports: ['Manohar International Airport, Mopa (GOX)', 'Dabolim Airport, Vasco da Gama (GOI)'],
      railwayConnectivity: 'Madgaon Junction & Thivim railway stations via the scenic Konkan Railway.',
      roadConnectivity: 'NH-66 runs along the coastline from Mumbai down to Mangalore.',
      idealStayDuration: '4 - 6 Days'
    }
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    type: 'State',
    capital: 'Gandhinagar',
    zone: 'West',
    image: 'https://media.gettyimages.com/id/699897542/photo/patna-india-gujarat-cm-narendra-modi-at-the-bihar-swabhiman-rally-at-gandhi-maidan-in-patna.jpg?s=612x612&w=0&k=20&c=1bKdNbsLAY3bxYee95F665IxTjzp8KEnuHi52L3AlvQ=',
    tagline: 'Land of Legends, White Desert & Asiatic Lions',
    description: 'Home to the magnificent White Rann of Kutch, Asiatic lions in Gir National Park, Statue of Unity, and Gandhi’s Sabarmati Ashram.',
    officialLanguages: ['Gujarati', 'Hindi'],
    bestSeason: 'October to March',
    touristPlaces: [
      { name: 'Rann of Kutch (White Desert)', description: 'Expansive salt desert hosting the vibrant Rann Utsav under full moon nights', tag: 'Desert' },
      { name: 'Gir National Park', description: 'The only remaining natural habitat in the world for the Asiatic Lion', tag: 'Wildlife' },
      { name: 'Statue of Unity (Kevadia)', description: 'World’s tallest statue (182m) honoring Sardar Vallabhbhai Patel amidst Narmada hills', tag: 'Monument' },
      { name: 'Somnath & Dwarka Temples', description: 'Ancient coastal pilgrimage shrines of the Char Dham and first Jyotirlinga', tag: 'Spiritual' },
    ],
    culture: {
      festivals: ['Navratri (9 nights of Garba)', 'International Kite Festival (Uttarayan)', 'Rann Utsav'],
      artForms: ['Garba & Dandiya Raas', 'Bhavai Folk Theatre'],
      handicrafts: ['Bandhani (Tie-dye)', 'Rogan Art of Nirona', 'Patola Silk Weaving of Patan', 'Mirror Work Embroidery'],
      highlights: 'Longest coastline in India, entrepreneurial warmth, and energetic folk dances.'
    },
    food: {
      dishes: ['Gujarati Thali with Dal, Shaak & Rotli', 'Dhokla & Khandvi', 'Undhiyu', 'Thepla with Chhundo'],
      specialty: 'A delicate harmony of sweet, savory, and tangy notes enriched with asafoetida and sesame.',
      beverageOrDessert: 'Jalebi-Fafda, Shrikhand & Masala Chaas'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: '1363 (Tourist Police at Statue of Unity & Sabarmati)',
      tips: ['Rann of Kutch permit is required online for foreign and domestic visitors', 'Book Gir lion safari permits months in advance via the official forest department portal', 'Gujarat is a dry state; foreign and non-resident domestic tourists can obtain liquor permits at approved counters'],
      womenSafetyNote: 'Widely recognized as one of the safest states in India with round-the-clock street life during festivals.'
    },
    travelInfo: {
      nearestAirports: ['Sardar Vallabhbhai Patel International Airport, Ahmedabad (AMD)', 'Rajkot (Hirasar)', 'Bhuj (BHJ)', 'Vadodara (BDQ)'],
      railwayConnectivity: 'High-speed broad gauge rail network with Vande Bharat Express linking Mumbai to Ahmedabad and Gandhinagar.',
      roadConnectivity: 'NE-1 Expressways and expansive toll highway infrastructure.',
      idealStayDuration: '5 - 8 Days'
    }
  },
  {
    id: 'haryana',
    name: 'Haryana',
    type: 'State',
    capital: 'Chandigarh',
    zone: 'North',
    image: 'https://s7ap1.scene7.com/is/image/incredibleindia/1-brahma-sarovar-kurukshetra-haryana-state-hero?qlt=82&ts=1726732478958',
    tagline: 'Land of the Gita, Ancient Battlefields & Rural Grandeur',
    description: 'Historic battleground of Kurukshetra where the Bhagavad Gita was expounded, bustling Cyber City Gurugram, and lush agricultural heartlands.',
    officialLanguages: ['Hindi', 'Haryanvi', 'Punjabi'],
    bestSeason: 'October to March',
    touristPlaces: [
      { name: 'Kurukshetra (Brahma Sarovar & Jyotisar)', description: 'Sacred birthplace of the Bhagavad Gita with the colossal holy sarovar', tag: 'Spiritual' },
      { name: 'Sultanpur National Park', description: 'Famous bird sanctuary hosting thousands of migratory winter birds from Siberia and Central Asia', tag: 'Nature' },
      { name: 'Yadavindra Gardens (Pinjore)', description: '17th-century terraced Mughal gardens set against Shivalik foothills', tag: 'Heritage' },
      { name: 'Surajkund Crafts Mela (Faridabad)', description: 'World’s largest international artisan and folk crafts fair held every February', tag: 'Culture' },
    ],
    culture: {
      festivals: ['Gita Mahotsav', 'Surajkund International Crafts Fair', 'Teej', 'Baisakhi'],
      artForms: ['Saang Folk Theatre', 'Raginis (Folk ballads)', 'Dhamal Dance'],
      handicrafts: ['Panipat Handloom Carpets & Quilts', 'Terracotta Pottery', 'Phulkari Embroidery'],
      highlights: 'Vibrant rural valor, sporting champion culture, and ancient Vedic wisdom.'
    },
    food: {
      dishes: ['Bajra Khichdi with Fresh Ghee', 'Sarson ka Saag & Makki Roti', 'Kadhi Pakora', 'Hara Dhania Cholia'],
      specialty: 'Rich dairy products: buffalo butter (makhan), freshly churned curd, and whole-grain millets.',
      beverageOrDessert: 'Malpua, Ghevar, & Sweet Tall Lassi'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: '1363 (Haryana Tourism Information Centers)',
      tips: ['Foggy conditions on GT Road highways during December-January require careful driving', 'Use metro networks for commuting across Gurugram and Faridabad', 'Wear comfortable walking shoes for birdwatching at Sultanpur'],
      womenSafetyNote: 'Gurugram metro lines have dedicated women’s coaches; 112 emergency response is integrated statewide.'
    },
    travelInfo: {
      nearestAirports: ['Indira Gandhi International Airport, Delhi (DEL) adjacent to Gurugram', 'Shaheed Bhagat Singh International Airport, Chandigarh (IXC)'],
      railwayConnectivity: 'Northern Railway connects major junctions like Ambala Cantt, Kurukshetra, and Panipat.',
      roadConnectivity: 'Delhi-Chandigarh Highway (NH-44) and Kundli-Manesar-Palwal (KMP) Expressway.',
      idealStayDuration: '2 - 4 Days'
    }
  },
  {
    id: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    type: 'State',
    capital: 'Shimla (Summer) / Dharamshala (Winter)',
    zone: 'North',
    image: 'https://t4.ftcdn.net/jpg/02/20/63/07/360_F_220630708_T0NnOVCNUpbxZRSbVn3q3uXMVGWOqiYA.jpg',
    tagline: 'Devbhoomi — The Abode of Snow & Pine-Clad Valleys',
    description: 'Renowned for mountain paradises of Manali, Dharamshala (residence of the Dalai Lama), UNESCO Kalka-Shimla toy train, and rugged Spiti Valley.',
    officialLanguages: ['Hindi', 'Pahari Dialects', 'Kangri'],
    bestSeason: 'March to June (Pleasant) & Dec to Feb (Snowfall)',
    touristPlaces: [
      { name: 'Shimla & Kalka Toy Train', description: 'Colonial hill station with Mall Road, Jakhoo temple, and UNESCO heritage mountain train', tag: 'Colonial' },
      { name: 'Manali & Atal Tunnel (Rohtang)', description: 'Gateway to high adventure, Solang Valley sports, and scenic Old Manali cafes', tag: 'Adventure' },
      { name: 'Dharamshala & McLeod Ganj', description: 'Seat of His Holiness Dalai Lama, Tibetan monasteries, and Triund trek', tag: 'Spiritual' },
      { name: 'Spiti Valley & Key Monastery', description: 'Cold mountain desert with ancient Tibetan monasteries perched at 13,000 ft', tag: 'Himalayas' },
    ],
    culture: {
      festivals: ['Kullu Dussehra (International Festival)', 'Minjar Fair', 'Losar in Spiti', 'Halda'],
      artForms: ['Nati Folk Dance (Guinness Record)', 'Kangra Miniature Painting'],
      handicrafts: ['Kullu Shawls with Geometric Borders', 'Himachali Topis (Caps)', 'Chamba Rumal (Embroidery)'],
      highlights: 'Spiritual reverence for local village devtas, mountain hospitality, and Buddhist meditation.'
    },
    food: {
      dishes: ['Himachali Dham (Festive feast cooked in brass pots)', 'Siddu with Ghee', 'Madra (Chickpea yogurt curry)', 'Chha Gosht'],
      specialty: 'Hearty fermented wheat breads and slow-simmered spiced yogurt gravies keeping travelers warm.',
      beverageOrDessert: 'Mittha (Sweet sweetened saffron rice with dry fruits) & Kangra Green Tea'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: '1363 (Tourist Police booths on Shimla Mall Road & Manali)',
      tips: ['Avoid landslide-prone mountain routes during peak monsoon (July-August)', 'Check Atal Tunnel snow advisories before crossing towards Lahaul', 'Keep motion sickness medicine handy for winding mountain passes'],
      womenSafetyNote: 'Highly peaceful state with low crime rates, trusted homestays, and widespread solo backpacking community.'
    },
    travelInfo: {
      nearestAirports: ['Kangra Airport, Gaggal/Dharamshala (DHM)', 'Kullu-Manali Airport, Bhuntar (KUU)', 'Shimla Airport, Jubbarhatti (SLV)'],
      railwayConnectivity: 'UNESCO Kalka-Shimla narrow gauge toy train; broad gauge links up to Una Himachal.',
      roadConnectivity: 'Chandigarh-Manali 4-lane expressway and scenic Himalayan roads.',
      idealStayDuration: '5 - 8 Days'
    }
  },
  {
    id: 'jharkhand',
    name: 'Jharkhand',
    type: 'State',
    capital: 'Ranchi',
    zone: 'East',
    image: 'https://external-preview.redd.it/jharkhand-koi-koi-nahi-jaanta-hai-v0-bDE1aWpiOGl2bDJlMRU1qem5-t0TCGmPc08PDPWtEcrY5b09AeziuqW0sNXG.png?width=640&crop=smart&format=pjpg&auto=webp&s=c81ae54ba36508b4d766bf07bd1c78ec08ccc9aa',
    tagline: 'The Land of Cascading Waterfalls & Sacred Hills',
    description: 'Blessed with Hundru and Dassam waterfalls, Betla National Park, sacred Jain shrine Shikharji atop Parasnath, and rich tribal art.',
    officialLanguages: ['Hindi', 'Santhali', 'Khortha', 'Nagpuri', 'Ho'],
    bestSeason: 'October to March',
    touristPlaces: [
      { name: 'Ranchi Waterfalls Circuit', description: 'City of Waterfalls: Hundru, Jonha, Dassam, and Hirni cascading through Sal forests', tag: 'Nature' },
      { name: 'Parasnath Hill (Shikharji)', description: 'Highest mountain peak in Jharkhand and the supreme Jain pilgrimage site where 20 Tirthankaras attained salvation', tag: 'Sacred' },
      { name: 'Betla National Park & Palamu Fort', description: 'Early project tiger sanctuary with historic double forts of Chero dynasty in thick jungle', tag: 'Wildlife' },
      { name: 'Deoghar (Baidyanath Dham)', description: 'One of the twelve revered Jyotirlingas, drawing millions during the Shravani Mela', tag: 'Spiritual' },
    ],
    culture: {
      festivals: ['Sarhul (Sal Flower Festival)', 'Karma', 'Sohrai & Khovar', 'Tusu Parab'],
      artForms: ['Chhau Dance (Seraikela)', 'Jhumair Folk Dance', 'Paika Martial Dance'],
      handicrafts: ['Sohrai Mural Paintings (GI Tag)', 'Dhokra Metal Casting', 'Bamboo & Wood carving'],
      highlights: 'Sacred nature worship (Sarnaism), reverence for trees, and centuries of vibrant community singing.'
    },
    food: {
      dishes: ['Dhuska with Chana Aloo Sabzi', 'Litti with Mutton Gravy', 'Rugra (Wild Mushroom Curry)', 'Bamboo Shoot Curry'],
      specialty: 'Crispy deep-fried rice and black-lentil dhuska cakes, complemented with seasonal wild forest produce.',
      beverageOrDessert: 'Arsa Roti & Tilkut'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: '1363 (Jharkhand Tourism Helpline)',
      tips: ['Avoid swimming near underwater rock edges at Dassam and Hundru falls', 'Pre-register for Baidyanath Jyotirlinga darshan passes during Shravan month', 'Engage certified eco-guides for deep trail walking in Betla'],
      womenSafetyNote: 'Deoghar, Ranchi city, and Parasnath hill pathways are well lit and monitored by police squads.'
    },
    travelInfo: {
      nearestAirports: ['Birsa Munda Airport, Ranchi (IXR)', 'Deoghar Airport (DGH) with direct Delhi/Kolkata flights'],
      railwayConnectivity: 'Ranchi Junction, Tatanagar (Jamshedpur), and Dhanbad Junction connect to all major Indian cities.',
      roadConnectivity: 'NH-33 and NH-19 (Golden Quadrilateral).',
      idealStayDuration: '3 - 5 Days'
    }
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    type: 'State',
    capital: 'Bengaluru',
    zone: 'South',
    image: 'https://media.gettyimages.com/id/1356564599/photo/view-of-hindu-stone-temple-at-hampi-karnataka.jpg?s=612x612&w=0&k=20&c=KO0aFzoW7WxTn-9Wpc3PYDQ1wm10BHOBnUX_pXVFn8U=',
    tagline: 'One State, Many Worlds — Hampi Ruins & Coffee Hills',
    description: 'From the UNESCO stone marvels of the Vijayanagara Empire in Hampi to the misty coffee plantations of Coorg and tech hub Bengaluru.',
    officialLanguages: ['Kannada'],
    bestSeason: 'October to March',
    touristPlaces: [
      { name: 'Hampi (UNESCO World Heritage Site)', description: 'Surreal boulder landscape sheltering magnificent temples, royal palaces, and stone chariot', tag: 'Heritage' },
      { name: 'Coorg (Kodagu)', description: 'Scotland of India: lush coffee hills, Abbey Falls, and Tibetan Golden Temple in Bylakuppe', tag: 'Hills' },
      { name: 'Mysuru (Mysore Palace)', description: 'Royal heritage city famed for the illuminated Amba Vilas Palace and Chamundi Hill', tag: 'Royalty' },
      { name: 'Gokarna & Murudeshwar', description: 'Spiritual Om Beach, Mahabaleshwar temple, and colossal towering Shiva statue on the Arabian Sea', tag: 'Coastal' },
    ],
    culture: {
      festivals: ['Mysuru Dasara (Grand Jamboo Savari)', 'Kambala (Buffalo Racing)', 'Karaga', 'Hampi Utsav'],
      artForms: ['Yakshagana Folk Theatre', 'Dollu Kunitha Dance', 'Carnatic Music Traditions'],
      handicrafts: ['Mysore Silk Sarees', 'Channapatna Wooden Toys (GI Tag)', 'Sandalwood Carvings'],
      highlights: 'Grand medieval empires, Hoysala architecture in Belur & Halebidu, and vibrant coastal culture.'
    },
    food: {
      dishes: ['Bisi Bele Bath with Boondi', 'Mysore Masala Dosa', 'Pandi Curry (Coorg Pork)', 'Neer Dosa with Mangalorean Fish Curry'],
      specialty: 'Fragrant ghee roasts, coconut-laced coastal curries, and rich Kodava pepper spice blends.',
      beverageOrDessert: 'Mysore Pak & Authentic South Indian Filter Coffee'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: '1363 (Karnataka Tourist Police at Hampi & Mysuru Palace)',
      tips: ['Wear comfortable walking footwear for boulder terrain in Hampi', 'Book KSTDC jungle lodges well in advance for Kabini and Bandipur safaris', 'Respect silence inside Tibetan monasteries in Bylakuppe'],
      womenSafetyNote: 'Very friendly for solo travelers with exceptional public transport (KSRTC Flybus & Airavat).'
    },
    travelInfo: {
      nearestAirports: ['Kempegowda International Airport, Bengaluru (BLR)', 'Mangaluru International Airport (IXE)', 'Hubballi Airport (HBX)'],
      railwayConnectivity: 'Extensive rail network connecting Bengaluru, Mysuru, Hubballi, and Hospet (Hampi).',
      roadConnectivity: 'Bengaluru-Mysuru 10-lane Expressway and coastal NH-66.',
      idealStayDuration: '5 - 8 Days'
    }
  },
  {
    id: 'kerala',
    name: 'Kerala',
    type: 'State',
    capital: 'Thiruvananthapuram',
    zone: 'South',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    tagline: 'God’s Own Country — Backwaters, Ayurveda & Spice Hills',
    description: 'Emerald backwaters of Alleppey, rolling tea gardens in Munnar, historic Fort Kochi, and ancient Ayurvedic wellness traditions.',
    officialLanguages: ['Malayalam', 'English'],
    bestSeason: 'September to March',
    touristPlaces: [
      { name: 'Alleppey & Kumarakom Backwaters', description: 'Overnight wooden kettuvallam houseboat cruises gliding along serene canals and lagoons', tag: 'Backwaters' },
      { name: 'Munnar & Eravikulam National Park', description: 'Misty tea plantations, endangered Nilgiri Tahr, and Anamudi (South India’s highest peak)', tag: 'Tea Hills' },
      { name: 'Fort Kochi & Mattancherry', description: 'Iconic Chinese fishing nets, Jewish Synagogue, Dutch colonial palaces, and spice bazaars', tag: 'Heritage' },
      { name: 'Wayanad & Chembra Peak', description: 'Heart-shaped mountain lake, Edakkal prehistoric cave petroglyphs, and bamboo forests', tag: 'Eco-Tour' },
    ],
    culture: {
      festivals: ['Onam (Harvest Festival & Vallamkali Boat Race)', 'Vishu', 'Thrissur Pooram (Elephant & Drum Spectacle)', 'Theyyam'],
      artForms: ['Kathakali Classical Dance-Drama', 'Kalaripayattu Martial Arts', 'Mohiniyattam'],
      handicrafts: ['Aranmula Metal Mirrors (GI Tag)', 'Coir Products', 'Kasavu Gold-bordered Handloom Sarees'],
      highlights: '100% literacy, eco-tourism stewardship, and peaceful interfaith coexistence.'
    },
    food: {
      dishes: ['Kerala Sadya on Banana Leaf (24+ vegetarian delicacies)', 'Appam with Vegetable Stew', 'Karimeen Pollichathu (Pearl Spot Fish)', 'Malabar Biryani'],
      specialty: 'Pure coconut oil, fresh grated coconut, curry leaves, crushed black peppercorns, and mustard tempering.',
      beverageOrDessert: 'Palada Payasam & Fresh Tender Coconut Water'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: '1363 (Kerala Tourist Police with kiosks at Kochi & Kovalam)',
      tips: ['Only rent houseboats certified with green safety stickers by DTPC/Kerala Tourism', 'Undergo authentic Ayurvedic Panchakarma only at government-accredited centers', 'Mind slippery rocks near Athirappilly waterfalls'],
      womenSafetyNote: 'Top-rated state for women travelers; safe public state transport and women-run She-Taxis.'
    },
    travelInfo: {
      nearestAirports: ['Cochin International Airport (COK) - World’s first solar-powered airport', 'Trivandrum International (TRV)', 'Calicut (CCJ)', 'Kannur (CNN)'],
      railwayConnectivity: 'Main coastal line running north to south from Kasaragod to Thiruvananthapuram.',
      roadConnectivity: 'NH-66 coastal highway connects all primary destinations.',
      idealStayDuration: '5 - 8 Days'
    }
  },
  {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    type: 'State',
    capital: 'Bhopal',
    zone: 'Central',
    image: 'https://media.gettyimages.com/id/541388300/photo/the-jehangir-mahal-palace.jpg?s=612x612&w=0&k=20&c=cnPcZdn0LW1xrHCQkp0pQvciOOmjkyoBvp0QC09WPR0=',
    tagline: 'The Heart of Incredible India — Tigers, Temples & Stupas',
    description: 'Home to India’s highest tiger population across Kanha and Bandhavgarh, the ancient erotic sculptures of Khajuraho, and Sanchi Stupa.',
    officialLanguages: ['Hindi', 'Bundelkhandi', 'Malwi'],
    bestSeason: 'October to March',
    touristPlaces: [
      { name: 'Khajuraho Group of Monuments', description: 'UNESCO World Heritage temples famed for intricate sandstone carvings celebrating human joy', tag: 'UNESCO' },
      { name: 'Kanha & Bandhavgarh National Parks', description: 'The original inspiration for Kipling’s The Jungle Book, offering prime Royal Bengal Tiger sightings', tag: 'Wildlife' },
      { name: 'Sanchi & Bhimbetka Caves', description: 'Great Buddhist Stupa built by Emperor Ashoka and 30,000-year-old prehistoric rock shelters', tag: 'History' },
      { name: 'Ujjain (Mahakaleshwar Jyotirlinga)', description: 'Ancient holy city on the Shipra river with Bhasma Aarti and Mahakal Lok corridor', tag: 'Spiritual' },
    ],
    culture: {
      festivals: ['Khajuraho Dance Festival', 'Tansen Music Festival (Gwalior)', 'Ujjain Simhastha Kumbh', 'Lokrang'],
      artForms: ['Gond Painting', 'Bhagoria Tribal Dance', 'Dhrupad Classical Vocal Music'],
      handicrafts: ['Chanderi & Maheshwari Silk Sarees', 'Batik Prints of Ujjain', 'Zari Zardozi of Bhopal'],
      highlights: 'Dense teak forest ecosystems, architectural wonders of Orchha, and serene Narmada river ghats in Maheshwar.'
    },
    food: {
      dishes: ['Indori Poha with Sev & Jalebi', 'Bhutte ka Kees (Spiced grated corn)', 'Dal Bafla with Ghee', 'Bhopali Gosht Korma'],
      specialty: 'Savory street-food culinary heritage centered in Indore’s night food market, Sarafa Bazaar.',
      beverageOrDessert: 'Mawa Bati & Shikanji of Indore'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: '1363 (Tourist Assistance at Khajuraho, Sanchi, & Ujjain)',
      tips: ['Advance booking on mpforest.gov.in is essential for tiger reserve safaris', 'Dress respectfully when entering temples in Ujjain and Omkareshwar', 'Sarafa Bazaar night market operates safely till 2 AM with vibrant families'],
      womenSafetyNote: 'Designated Safe Tourism Destination for Women project active across 50 key tourist spots.'
    },
    travelInfo: {
      nearestAirports: ['Devi Ahilya Bai Holkar Airport, Indore (IDR)', 'Raja Bhoj Airport, Bhopal (BHO)', 'Khajuraho Airport (HJR)', 'Gwalior Airport (GWL)'],
      railwayConnectivity: 'Bhopal and Itarsi are major central junctions linking North, South, East, and West India.',
      roadConnectivity: 'Well-paved national highways and state expressways connecting all tourist circuits.',
      idealStayDuration: '5 - 8 Days'
    }
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    type: 'State',
    capital: 'Mumbai',
    zone: 'West',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Chatrapati_Shivaji_Maharaj_terminus._Mumbai._Maharashtra.jpg',
    tagline: 'Unlimited Maharashtra — Forts of Shivaji & Caves of Ajanta',
    description: 'Financial capital Mumbai, UNESCO cave masterpieces of Ajanta and Ellora, hill stations of Western Ghats, and Maratha sea forts.',
    officialLanguages: ['Marathi', 'Hindi', 'English'],
    bestSeason: 'October to March (Monsoons great for Western Ghat treks)',
    touristPlaces: [
      { name: 'Mumbai (Gateway of India & Marine Drive)', description: 'Vibrant mega-city with British colonial architecture, Bollywood studios, and Queen’s Necklace', tag: 'Metropolis' },
      { name: 'Ajanta & Ellora Caves (Chhatrapati Sambhajinagar)', description: 'UNESCO rock-cut cave temples featuring the monolithic Kailash Temple carved from a single cliff', tag: 'UNESCO' },
      { name: 'Lonavala, Khandala & Mahabaleshwar', description: 'Misty Western Ghats hill stations with strawberry farms, waterfalls, and cliffside forts', tag: 'Hill Station' },
      { name: 'Shirdi (Sai Baba Sansthan)', description: 'World-renowned spiritual center attracting devotees from across the globe', tag: 'Spiritual' },
    ],
    culture: {
      festivals: ['Ganesh Chaturthi (Spectacular celebrations)', 'Gudi Padwa', 'Shivaji Maharaj Jayanti', 'Banganga Music Festival'],
      artForms: ['Lavani Folk Dance', 'Powada Heroic Ballads', 'Koli Fisherfolk Dance'],
      handicrafts: ['Paithani Silk Sarees with Peacock Borders', 'Warli Tribal Paintings', 'Kolhapuri Leather Chappals'],
      highlights: 'Indomitable spirit of Chhatrapati Shivaji Maharaj, Sahyadri mountain trekking, and Bollywood cinema.'
    },
    food: {
      dishes: ['Vada Pav (The Mumbai Burger)', 'Pav Bhaji & Misal Pav', 'Puran Poli with Ghee', 'Malvani Fish Curry with Solkadhi'],
      specialty: 'Kokum-infused coconut coastal gravies paired with fiery Goda and Kolhapuri spice masalas.',
      beverageOrDessert: 'Aamras (Alphonso Mango pulp) & Solkadhi'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: '1363 / Mumbai Police Tourist Cell at Gateway of India',
      tips: ['Use metered black-and-yellow cabs or auto-rickshaws; always insist on the meter', 'Exercise caution near Western Ghat waterfall edges during torrential monsoons', 'Keep tickets safe on Mumbai local trains; first-class and ladies coaches are clearly marked'],
      womenSafetyNote: 'Mumbai is widely considered India’s safest metropolitan city for women at night.'
    },
    travelInfo: {
      nearestAirports: ['Chhatrapati Shivaji Maharaj International Airport, Mumbai (BOM)', 'Pune International Airport (PNQ)', 'Shirdi Airport (SAG)', 'Dr. Babasaheb Ambedkar Airport, Nagpur (NAG)'],
      railwayConnectivity: 'Central and Western Railway headquarters in Mumbai connecting every corner of India.',
      roadConnectivity: 'Mumbai-Pune Expressway, Samruddhi Mahamarg, and Mumbai Coastal Road.',
      idealStayDuration: '5 - 8 Days'
    }
  },
  {
    id: 'manipur',
    name: 'Manipur',
    type: 'State',
    capital: 'Imphal',
    zone: 'North-East',
    image: 'https://media.istockphoto.com/id/830702060/photo/farmers-loktak-lake-manipur-india.jpg?s=612x612&w=0&k=20&c=xjzVTfYNoRAyfDflwZFAE25Hwin_i2te7s9oAf6Xb3o=',
    tagline: 'The Jeweled Land of Floating Phumdis & Classical Dance',
    description: 'Home to the world’s only floating national park on Loktak Lake, the endangered Sangai dancing deer, and Asia’s largest women-run market.',
    officialLanguages: ['Manipuri (Meiteilon)', 'English'],
    bestSeason: 'October to April',
    touristPlaces: [
      { name: 'Loktak Lake & Keibul Lamjao', description: 'World’s only floating national park on unique circular floating biomass islands (phumdis)', tag: 'Eco-Wonder' },
      { name: 'Ima Keithel (Mother’s Market, Imphal)', description: '500-year-old iconic commercial market operated solely by over 5,000 women traders', tag: 'Culture' },
      { name: 'Kangla Fort & Govindaji Temple', description: 'Ancient royal seat of the Manipur Kingdom situated along the Imphal River', tag: 'History' },
      { name: 'Dzukou Valley (Bordering Nagaland)', description: 'Trekker’s paradise famous for seasonal Dzukou lilies and dramatic rolling emerald hills', tag: 'Trekking' },
    ],
    culture: {
      festivals: ['Sangai Festival', 'Yaoshang (Manipuri Holi with Thabal Chongba)', 'Cheiraoba (New Year)', 'Ningol Chakouba'],
      artForms: ['Manipuri Classical Dance (Raas Leela)', 'Thang-Ta Martial Arts', 'Pung Cholom (Drum Dance)'],
      handicrafts: ['Kauna Water Reed Bags', 'Manipuri Handloom Shawls & Phanek', 'Black Stone Pottery of Longpi'],
      highlights: 'Birthplace of modern Polo (Sagol Kangjei), matrilineal market empowerment, and devotion to Radha-Krishna.'
    },
    food: {
      dishes: ['Kangshoi (Vegetable stew with dried fish)', 'Eromba (Boiled vegetables mashed with fermented fish and king chili)', 'Singju (Fiery spicy salad)', 'Chak-Hao Kheer (Black Rice Pudding)'],
      specialty: 'Nutritious organic wild greens seasoned with aromatic herbs and fermented fish (ngari).',
      beverageOrDessert: 'Chak-Hao Kheer (GI-tagged purple-black rice dessert)'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: '1363 (Manipur Tourism Directorate, Imphal)',
      tips: ['Check current regional travel advisories before planning rural explorations', 'ILP (Inner Line Permit) is mandatory for domestic visitors; register online at manipurilp.gov.in', 'Respect customs and traditions inside Ima Keithel market'],
      womenSafetyNote: 'The matriarchal reverence in Manipuri culture ensures deep respect and safety for women travelers.'
    },
    travelInfo: {
      nearestAirports: ['Bir Tikendrajit International Airport, Imphal (IMF) with daily flights to Delhi, Kolkata, and Guwahati.'],
      railwayConnectivity: 'Jiribam railway station; rail connectivity under expansion to Imphal.',
      roadConnectivity: 'NH-2 (Imphal-Kohima) and NH-37 link Imphal with neighboring states.',
      idealStayDuration: '4 - 6 Days',
      permitRequired: 'Inner Line Permit (ILP) required for non-resident domestic tourists.'
    }
  },
  {
    id: 'meghalaya',
    name: 'Meghalaya',
    type: 'State',
    capital: 'Shillong',
    zone: 'North-East',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    tagline: 'The Abode of Clouds & Living Bio-Engineering Bridges',
    description: 'Double Decker Living Root Bridges in Cherrapunji, crystal-clear waters of Umngot River in Dawki, and clean village Mawlynnong.',
    officialLanguages: ['English', 'Khasi', 'Garo', 'Pnar'],
    bestSeason: 'October to May',
    touristPlaces: [
      { name: 'Cherrapunji (Sohra) & Double Decker Root Bridge', description: 'Centuries-old bio-engineered living tree root bridges and Nohkalikai Waterfall', tag: 'Living Wonder' },
      { name: 'Dawki & Umngot River', description: 'Crystal-clear river where boats seem to float on transparent glass-like water', tag: 'Nature' },
      { name: 'Mawlynnong Village', description: 'Recognized as Asia’s Cleanest Village with community compost culture and Sky Walk', tag: 'Eco-Living' },
      { name: 'Shillong & Umiam Lake', description: 'Scotland of the East: vibrant rock music scene, Police Bazar, and serene reservoir lake', tag: 'Hill Station' },
    ],
    culture: {
      festivals: ['Shad Suk Mynsiem', 'Nongkrem Dance Festival', 'Wangala (100 Drums Garo Festival)', 'Cherry Blossom Festival'],
      artForms: ['Khasi Drumming', 'Laho Dance', 'Garo Folk Ballads'],
      handicrafts: ['Cane & Bamboo Mats', 'Khasi Traditional Knives', 'Endi Silk Shawls'],
      highlights: 'Matrilineal society where lineage and heritage are passed through daughters; deep eco-conservation ethics.'
    },
    food: {
      dishes: ['Jadoh (Red rice cooked with pork)', 'Dohkhlieh (Pork salad with onions and chilies)', 'Tungrymbai (Fermented soybean stew)', 'Pukhlein (Fried rice-flour jaggery bread)'],
      specialty: 'Locally grown black sesame seeds, fermented beans, and smoked mountain meats.',
      beverageOrDessert: 'Kwai (Betel nut and leaf ritual) & Cinnamon Tea'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: '1363 (Shillong Police Assistance & Meghalaya Tourism)',
      tips: ['Wear trekking shoes with strong grip for descending the 3,500 stairs to Nongriat root bridges', 'Keep rain jackets handy even during spring months', 'Respect strict village cleanliness rules in Mawlynnong (no littering)'],
      womenSafetyNote: 'As a proud matrilineal society, women travelers experience an exceptionally secure, empowering atmosphere.'
    },
    travelInfo: {
      nearestAirports: ['Shillong Airport, Umroi (SHL)', 'Lokpriya Gopinath Bordoloi International Airport, Guwahati (GAU) - 3 hours by taxi'],
      railwayConnectivity: 'Guwahati railway station (100 km) is the nearest rail hub with regular shared taxi service to Shillong.',
      roadConnectivity: 'NH-6 provides a smooth 4-lane highway from Guwahati to Shillong.',
      idealStayDuration: '4 - 7 Days'
    }
  },
  {
    id: 'mizoram',
    name: 'Mizoram',
    type: 'State',
    capital: 'Aizawl',
    zone: 'North-East',
    image: 'https://images.unsplash.com/photo-1626014303757-656447750849?auto=format&fit=crop&w=1200&q=80',
    tagline: 'The Land of Rolling Hills, Bamboo Forests & Cheraw Dance',
    description: 'Picturesque ridge-top capital Aizawl, Reiek mountain cliffs, peaceful bamboo groves, and the famous high-energy Cheraw bamboo dance.',
    officialLanguages: ['Mizo', 'English'],
    bestSeason: 'October to March',
    touristPlaces: [
      { name: 'Aizawl City & Solomon’s Temple', description: 'Cliff-hanging capital city with Solomon’s Temple, Durtlang Hills, and vibrant Bara Bazar', tag: 'City Views' },
      { name: 'Reiek Tlang Peak', description: 'Scenic mountain cliff providing breathtaking 360-degree views of Bangladesh plains', tag: 'Trekking' },
      { name: 'Vantawng Falls & Thenzawl', description: 'Highest uninterrupted waterfall in Mizoram surrounded by lush handloom weaving village', tag: 'Waterfalls' },
      { name: 'Tamdil Lake (Lake of Mustard)', description: 'Serene natural lake surrounded by tropical evergreen forests and peaceful boat rides', tag: 'Tranquil' },
    ],
    culture: {
      festivals: ['Chapchar Kut (Spring Harvest Festival)', 'Mim Kut', 'Pawl Kut', 'Thalfavang Kut'],
      artForms: ['Cheraw (Bamboo Dance)', 'Khuallam (Dance of Guests)', 'Chheihlam'],
      handicrafts: ['Puan (Intricately patterned woven traditional skirts)', 'Bamboo Hats & Baskets', 'Smoking Pipes'],
      highlights: 'The guiding social code of "Tlawmngaihna" — selfless hospitality and community service to guests.'
    },
    food: {
      dishes: ['Bai (Steamed pork with bamboo shoots and mustard leaves)', 'Vawksa Rep (Smoked pork curry)', 'Sawhchiar (Mizo rice and meat porridge)', 'Chhum Han (Steamed mixed greens)'],
      specialty: 'Clean, oil-free organic boiled dishes infused with fresh ginger, garlic, and wild herbs.',
      beverageOrDessert: 'Zuh (Traditional rice beverage) & Fresh Wild Honey'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: '1363 (Mizoram Tourism Directorate, Aizawl)',
      tips: ['Inner Line Permit (ILP) is mandatory for domestic visitors; obtain online or at Lengpui Airport on arrival', 'Sundays are strictly observed as rest days; most shops and restaurants close for church services', 'Drive gently on narrow mountain zigzag roads'],
      womenSafetyNote: 'Crime rates against travelers are among the lowest in India; highly polite and civic-minded populace.'
    },
    travelInfo: {
      nearestAirports: ['Lengpui Airport, Aizawl (AJL) with daily flights to Kolkata, Guwahati, and Delhi.'],
      railwayConnectivity: 'Bairabi railway station; extension to Sairang near Aizawl nearing completion.',
      roadConnectivity: 'NH-54 connects Aizawl to Silchar in Assam.',
      idealStayDuration: '4 - 6 Days',
      permitRequired: 'ILP mandatory for domestic travelers.'
    }
  },
  {
    id: 'nagaland',
    name: 'Nagaland',
    type: 'State',
    capital: 'Kohima',
    zone: 'North-East',
    image: 'https://images.unsplash.com/photo-1626014303757-656447750849?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Land of 16 Warrior Tribes & The Hornbill Festival',
    description: 'Renowned for the world-famous Hornbill Festival, historic Kohima War Cemetery, green Khonoma village, and Dzukou Valley.',
    officialLanguages: ['English', 'Nagamese', 'Tribal Dialects'],
    bestSeason: 'October to May (Hornbill Festival is Dec 1-10)',
    touristPlaces: [
      { name: 'Kisama Heritage Village & Hornbill Festival', description: 'Cultural arena where all 16 Naga tribes assemble with traditional morungs, attire, and dances', tag: 'Festival' },
      { name: 'Dzukou Valley & Japfu Peak', description: 'Enchanting high-altitude valley famous for the endemic Dzukou lily and pristine rolling meadows', tag: 'Adventure' },
      { name: 'Khonoma Green Village', description: 'Asia’s first certified green village, famed for terrace farming and community hunting bans', tag: 'Eco-Village' },
      { name: 'Kohima War Cemetery', description: 'Immaculate WWII Commonwealth memorial at Garrison Hill overlooking Kohima town', tag: 'History' },
    ],
    culture: {
      festivals: ['Hornbill Festival (Festival of Festivals)', 'Sekrenyi (Angami)', 'Moatsu (Ao)', 'Aoleang (Konyak)'],
      artForms: ['War Dances', 'Folk Choral Harmonies', 'Woodcarvings on Morung Pillars'],
      handicrafts: ['Naga Warrior Shawls with specific tribal motifs', 'Beaded Jewelry', 'Bamboo & Cane Spear Crafts'],
      highlights: 'Warrior courage turned into eco-conservation, vibrant indigenous regalia, and choral music mastery.'
    },
    food: {
      dishes: ['Smoked Pork with Axone (Fermented Soybean)', 'Boiled Rice with Naga King Chili (Bhut Jolokia)', 'Bamboo Shoot Fish Curry', 'Galho (Naga Khichdi with herbs)'],
      specialty: 'Smoked meats, fermented bamboo shoots, and world’s hottest natural chili, the Bhut Jolokia.',
      beverageOrDessert: 'Zutho (Sweet fermented rice beverage)'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: '1363 / Nagaland Tourist Police deployed during Hornbill Festival',
      tips: ['Domestic tourists require an Inner Line Permit (ILP); obtain via ilp.nagaland.gov.in', 'Book Kohima hotels and homestays months ahead if visiting for Hornbill Festival (Dec 1-10)', 'Taste Bhut Jolokia chili in tiny, microscopic quantities!'],
      womenSafetyNote: 'Naga communities are respectful and welcoming to female travelers; tourist police actively assist at Kisama.'
    },
    travelInfo: {
      nearestAirports: ['Dimapur Airport (DMU) with direct flights to Kolkata and Guwahati; Kohima is 2.5 hours drive from Dimapur.'],
      railwayConnectivity: 'Dimapur railway station is well-connected to Guwahati, Delhi, and Kolkata on the broad gauge line.',
      roadConnectivity: 'NH-29 connects Dimapur to Kohima and Imphal.',
      idealStayDuration: '4 - 7 Days',
      permitRequired: 'ILP mandatory for Indian citizens; foreigners must register at local FRO.'
    }
  },
  {
    id: 'odisha',
    name: 'Odisha',
    type: 'State',
    capital: 'Bhubaneswar',
    zone: 'East',
    image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80',
    tagline: 'India’s Best Kept Secret — Sun Temple, Puri & Chilika',
    description: 'The monumental Sun Temple of Konark, holy Jagannath Temple in Puri, Asia’s largest brackish water lagoon at Chilika, and Odissi classical dance.',
    officialLanguages: ['Odia'],
    bestSeason: 'October to March',
    touristPlaces: [
      { name: 'Konark Sun Temple (UNESCO Site)', description: '13th-century architectural masterpiece carved in the shape of a monumental 24-wheeled chariot', tag: 'UNESCO' },
      { name: 'Puri (Jagannath Temple & Golden Beach)', description: 'One of the four sacred Char Dham pilgrimage sites, famous for the colossal annual Ratha Yatra', tag: 'Sacred' },
      { name: 'Chilika Lake & Satapada', description: 'Asia’s largest coastal lagoon home to rare Irrawaddy dolphins and millions of migratory birds', tag: 'Eco-Wonder' },
      { name: 'Bhubaneswar (Temple City of India)', description: 'Historic capital boasting Lingaraj Temple, Mukteshvara Temple, and ancient Udayagiri-Khandagiri caves', tag: 'Heritage' },
    ],
    culture: {
      festivals: ['Ratha Yatra of Puri (Chariot Festival)', 'Konark Dance Festival', 'Dhanu Jatra', 'Raja Parba'],
      artForms: ['Odissi Classical Dance', 'Gotipua Dance', 'Pala and Daskathia'],
      handicrafts: ['Pattachitra Paintings on Palm Leaves (Raghurajpur)', 'Silver Filigree (Tarakasi of Cuttack - GI Tag)', 'Pipili Applique Work'],
      highlights: 'Kalinga architectural grandeur, maritime trade history (Bali Yatra), and profound Jagannath spiritual traditions.'
    },
    food: {
      dishes: ['Mahaprasad of Puri Jagannath Temple (56 Bhog)', 'Dalma (Lentils simmered with raw vegetables)', 'Pakhala Bhata (Fermented cooling rice)', 'Chhena Poda (Caramelized baked cheese cake)'],
      specialty: 'Subtle culinary elegance cooked in earthen pots without onion or garlic in temple cuisine.',
      beverageOrDessert: 'Chhena Poda & Authentic Rasagola of Pahala'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: '1363 (Tourist Police booths at Puri Beach & Konark)',
      tips: ['Non-Hindus are not permitted inside Jagannath Temple sanctum; view temple from nearby Raghunandan library terrace', 'Only hire government-certified life-guarded boats at Chilika Satapada for dolphin watching', 'Stay within safe swimming flags on Puri Golden Beach'],
      womenSafetyNote: 'Puri and Bhubaneswar have active beach police patrols and friendly community atmosphere.'
    },
    travelInfo: {
      nearestAirports: ['Biju Patnaik International Airport, Bhubaneswar (BBI) with extensive domestic and international connections.'],
      railwayConnectivity: 'Bhubaneswar and Puri are major East Coast Railway terminals with direct trains from Delhi, Kolkata, and Chennai.',
      roadConnectivity: 'NH-16 runs through Bhubaneswar connecting Chennai and Kolkata.',
      idealStayDuration: '4 - 6 Days'
    }
  },
  {
    id: 'punjab',
    name: 'Punjab',
    type: 'State',
    capital: 'Chandigarh',
    zone: 'North',
    image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Land of Five Rivers, Golden Temple & Big Hearts',
    description: 'Experience divine peace at Sri Harmandir Sahib (Golden Temple) in Amritsar, the patriotic fervor of Wagah Border, and world-renowned Punjabi hospitality.',
    officialLanguages: ['Punjabi'],
    bestSeason: 'October to March',
    touristPlaces: [
      { name: 'Amritsar (Golden Temple - Sri Harmandir Sahib)', description: 'Supreme spiritual center of Sikhism, serving 100,000 free meals daily in the world’s largest langar', tag: 'Spiritual' },
      { name: 'Attari-Wagah Border Ceremony', description: 'Electrifying daily evening military parade and flag-lowering ceremony at the India-Pakistan border', tag: 'Patriotic' },
      { name: 'Jallianwala Bagh & Partition Museum', description: 'Solemn historical sites commemorating India’s freedom struggle and the 1947 partition memories', tag: 'History' },
      { name: 'Qila Mubarak (Bathinda/Patiala)', description: 'Ancient fortified royal palaces with Sheesh Mahal and rich heritage of Patiala Maharajas', tag: 'Forts' },
    ],
    culture: {
      festivals: ['Baisakhi (Harvest & Khalsa Creation)', 'Lohri', 'Gurpurab', 'Hola Mohalla at Anandpur Sahib'],
      artForms: ['Bhangra & Giddha Folk Dances', 'Gatka Martial Arts', 'Sufi Musical Traditions'],
      handicrafts: ['Phulkari Floral Embroidery', 'Juttis (Embroidered Leather Shoes)', 'Parandis (Hair Ornaments)'],
      highlights: 'The selfless principle of "Seva" (service), unbounded culinary generosity, and vibrant festive energy.'
    },
    food: {
      dishes: ['Amritsari Kulcha with Chole', 'Sarson da Saag with Makki di Roti & White Butter', 'Butter Chicken & Tandoori Chicken', 'Dal Makhani with Laccha Paratha'],
      specialty: 'Clay tandoor cooking with generous lashings of pure desi ghee, cream, and fresh home-churned butter.',
      beverageOrDessert: 'Tall brass glass of Sweet Amritsari Lassi & Pinni'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: '1363 (Tourist Information Hubs at Golden Temple & Amritsar Railway Station)',
      tips: ['Cover your head and remove shoes before entering Golden Temple complex; head scarves provided free at entrance', 'Arrive at Wagah Border by 3:30 PM to secure good stadium seating for the 5:00 PM parade', 'Drink bottled or RO water during hot daytime hours'],
      womenSafetyNote: 'Amritsar Golden Temple complex is open 24x7 and is one of the safest sanctuaries in the world for women travelers.'
    },
    travelInfo: {
      nearestAirports: ['Sri Guru Ram Dass Jee International Airport, Amritsar (ATQ)', 'Chandigarh International Airport (IXC)'],
      railwayConnectivity: 'Direct high-speed Shatabdi and Vande Bharat Express trains connect Delhi to Amritsar and Jalandhar.',
      roadConnectivity: 'Grand Trunk Road (NH-44) provides a rapid multi-lane highway corridor from Delhi.',
      idealStayDuration: '3 - 5 Days'
    }
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    type: 'State',
    capital: 'Jaipur',
    zone: 'West',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80',
    tagline: 'The Land of Kings, Sand Dunes & Magnificent Forts',
    description: 'Palaces of Jaipur and Udaipur, Golden Fort of Jaisalmer, blue lanes of Jodhpur, and camel safaris across the Thar Desert.',
    officialLanguages: ['Hindi', 'Rajasthani (Marwari, Mewari, Dhundhari)'],
    bestSeason: 'October to March',
    touristPlaces: [
      { name: 'Jaipur (Pink City - Amber Fort & Hawa Mahal)', description: 'UNESCO World Heritage city with sandstone hill fortresses, City Palace, and astronomical observatory', tag: 'UNESCO' },
      { name: 'Udaipur (City of Lakes & City Palace)', description: 'Romantic lake palaces floating on Lake Pichola surrounded by the Aravalli mountain ranges', tag: 'Royalty' },
      { name: 'Jaisalmer (Golden Fort & Thar Sand Dunes)', description: 'Living desert fortress made of yellow sandstone with camel safaris and folk camps under stars', tag: 'Desert' },
      { name: 'Jodhpur (Blue City & Mehrangarh Fort)', description: 'Imposing fortress looming over azure-painted lanes, royal cenotaphs, and Umaid Bhawan Palace', tag: 'Forts' },
    ],
    culture: {
      festivals: ['Pushkar Camel Fair', 'Desert Festival Jaisalmer', 'Teej & Gangaur in Jaipur', 'Marwar Festival'],
      artForms: ['Ghoomar Dance', 'Kalbelia Snake Charmer Dance (UNESCO)', 'Kathputli Puppet Theatre', 'Manganiyar & Langa Folk Music'],
      handicrafts: ['Blue Pottery of Jaipur', 'Bandhej & Leheriya Sarees', 'Miniature Paintings', 'Kundan-Meenakari Jewelry'],
      highlights: 'Chivalric Rajput valor, royal palace hotels, camel caravans, and kaleidoscopic turbans.'
    },
    food: {
      dishes: ['Dal Baati Churma with Ghee', 'Laal Maas (Spicy mutton with Mathania chilis)', 'Pyaaz Kachori with Mint Chutney', 'Gatte ki Sabzi & Ker Sangri'],
      specialty: 'Arid desert cooking crafted to endure long journeys, using buttermilk, gram flour, and wild desert beans.',
      beverageOrDessert: 'Ghevar soaked in saffron sugar syrup & Mawa Kachori'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: '1363 (Dedicated Rajasthan Tourist Assistance Force at all major forts)',
      tips: ['Hire only authorized guides displaying official Department of Tourism ID badges', 'Stay hydrated and wear UV sunglasses when walking fort ramparts at noon', 'Pre-book desert camel safaris through verified camp operators in Sam/Khuri'],
      womenSafetyNote: 'Major tourist cities have heavy tourist police presence; respectful local culture with trusted heritage homestays.'
    },
    travelInfo: {
      nearestAirports: ['Jaipur International Airport (JAI)', 'Maharana Pratap Airport, Udaipur (UDR)', 'Jodhpur Airport (JDH)', 'Jaisalmer Airport (JSA)'],
      railwayConnectivity: 'Extensive broad gauge and luxury tourist trains like Palace on Wheels connecting all major tourist hubs.',
      roadConnectivity: 'Delhi-Mumbai Expressway and NH-48 provide fast connectivity from the national capital.',
      idealStayDuration: '6 - 10 Days'
    }
  },
  {
    id: 'sikkim',
    name: 'Sikkim',
    type: 'State',
    capital: 'Gangtok',
    zone: 'North-East',
    image: 'https://images.unsplash.com/photo-1626014303757-656447750849?auto=format&fit=crop&w=1200&q=80',
    tagline: 'The Organic Himalayan Kingdom under Kangchenjunga',
    description: 'India’s first 100% organic state, guarded by Mount Kangchenjunga, boasting sacred Tsomgo Lake, Rumtek Monastery, and Yumthang Valley.',
    officialLanguages: ['Nepali', 'Sikkimese (Bhutia)', 'Lepcha', 'English'],
    bestSeason: 'March to May (Rhododendrons) & Oct to mid-Dec (Clear Peaks)',
    touristPlaces: [
      { name: 'Gangtok & Tsomgo (Changu) Lake', description: 'Vibrant capital with MG Marg pedestrian boulevard and glacial mountain lake at 12,310 ft', tag: 'High Lake' },
      { name: 'Nathula Pass & Baba Mandir', description: 'Ancient Silk Route pass on the Indo-China border perched at 14,140 ft', tag: 'Border' },
      { name: 'Yumthang Valley of Flowers & Zero Point', description: 'North Sikkim wonderland blooming with 24 species of rhododendrons and snowfields', tag: 'Alpine' },
      { name: 'Pelling & Skywalk', description: 'Close-up panoramic views of Mt. Kangchenjunga, Rabdentse royal ruins, and glass skywalk', tag: 'Peaks' },
    ],
    culture: {
      festivals: ['Losar (Tibetan New Year)', 'Pang Lhabsol (Worship of Mt. Kangchenjunga)', 'Saga Dawa', 'Losoong (Namsoong)'],
      artForms: ['Cham Mask Dance performed by lamas', 'Lepcha Folk Songs', 'Singhi Chham (Snow Lion Dance)'],
      handicrafts: ['Thangka Buddhist Scrolls', 'Choktse Wooden Folding Tables', 'Bhutia Woven Woolen Carpets'],
      highlights: '100% certified organic farming, plastic-free eco tourism policies, and deep Buddhist spiritual calm.'
    },
    food: {
      dishes: ['Sikkimese Momos with Dalle Chili Dip', 'Thukpa (Hearty noodle soup)', 'Phagshapa (Pork with radish and dried chilies)', 'Gundruk Soup (Fermented greens)'],
      specialty: 'Organic Himalayan mountain vegetables paired with searing Dalle Khursani cherry peppers.',
      beverageOrDessert: 'Chaang (Warm fermented millet brew served in bamboo tongba) & Butter Tea'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: '1363 (Tourist Information Centre, MG Marg Gangtok)',
      tips: ['Protected Area Permits (PAP) are required for Nathula, Tsomgo Lake, and North Sikkim (apply through registered travel agencies)', 'Plastic packaged drinking water bottles are strictly banned in North Sikkim; use reusable flasks', 'Acclimatize properly at Gangtok before traveling to Zero Point'],
      womenSafetyNote: 'Consistently ranked among the safest and most gender-equal states in India for solo female backpackers.'
    },
    travelInfo: {
      nearestAirports: ['Pakyong Airport near Gangtok (PYG)', 'Bagdogra International Airport, West Bengal (IXB) - 4.5 hours drive'],
      railwayConnectivity: 'New Jalpaiguri (NJP) in West Bengal is the closest mainline rail hub; Sivok-Rangpo rail line under construction.',
      roadConnectivity: 'NH-10 connects Siliguri to Gangtok along the roaring Teesta river valley.',
      idealStayDuration: '5 - 8 Days',
      permitRequired: 'Permit required for Nathula, Tsomgo Lake, and North Sikkim.'
    }
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    type: 'State',
    capital: 'Chennai',
    zone: 'South',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Land of Dravidian Gopurams, Carnatic Music & Nilgiri Hills',
    description: 'Towering temple gopurams in Madurai, UNESCO Shore Temple at Mahabalipuram, French-influenced colonial charms, and misty hill stations of Ooty.',
    officialLanguages: ['Tamil'],
    bestSeason: 'November to March',
    touristPlaces: [
      { name: 'Madurai (Meenakshi Amman Temple)', description: 'Architectural wonder with 14 colossal sculpted gopurams towering over the vibrant temple city', tag: 'Dravidian' },
      { name: 'Mahabalipuram (Mamallapuram UNESCO)', description: '7th-century rock-cut monolithic rathas, Shore Temple, and Arjuna’s Penance bas-relief', tag: 'UNESCO' },
      { name: 'Ooty & Nilgiri Mountain Railway', description: 'Queen of Hill Stations with botanical gardens, tea estates, and UNESCO heritage steam toy train', tag: 'Hills' },
      { name: 'Rameswaram & Dhanushkodi', description: 'Sacred island temple, Pamban sea bridge, and ghost town where Indian Ocean meets Bay of Bengal', tag: 'Sacred Coastal' },
    ],
    culture: {
      festivals: ['Pongal (4-day Harvest Festival)', 'Jallikattu', 'Natyanjali Dance Festival', 'Margazhi Music Season (Chennai)'],
      artForms: ['Bharatanatyam Classical Dance', 'Carnatic Music', 'Villu Pattu (Bow Song)'],
      handicrafts: ['Kanchipuram Pure Silk Sarees (GI Tag)', 'Tanjore Gold Foil Paintings', 'Swamimalai Bronze Idols'],
      highlights: 'One of the world’s longest surviving classical civilizations, literature spanning 2,000+ years, and magnificent temple architecture.'
    },
    food: {
      dishes: ['Chettinad Chicken Curry with Parotta', 'Idli, Medu Vada & Sambar with 3 Chutneys', 'Dindigul Thalappakatti Biryani', 'Kothu Parotta'],
      specialty: 'Chettinad pepper and star-anise spice blends, stone-ground rice batters, and cooling curd rice.',
      beverageOrDessert: 'Degree Filter Coffee & Tirunelveli Halwa'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: '1363 (Tourist Police at Mamallapuram & Chennai Central)',
      tips: ['Dress modestly (shoulders and knees covered) when visiting active Dravidian temples', 'Book Nilgiri Toy Train tickets weeks ahead on IRCTC as seats sell out quickly', 'Enjoy filter coffee at traditional stainless-steel tumbler dabaras for authentic taste'],
      womenSafetyNote: 'Very safe state with extensive 24/7 public bus network, well-lit temple corridors, and supportive police.'
    },
    travelInfo: {
      nearestAirports: ['Chennai International Airport (MAA)', 'Coimbatore International Airport (CJB)', 'Madurai Airport (IXM)', 'Tiruchirappalli (TRZ)'],
      railwayConnectivity: 'Southern Railway hub with Vande Bharat Express connecting Chennai to Mysuru, Coimbatore, and Tirunelveli.',
      roadConnectivity: 'Extensive multi-lane national highways and state expressways.',
      idealStayDuration: '5 - 9 Days'
    }
  },
  {
    id: 'telangana',
    name: 'Telangana',
    type: 'State',
    capital: 'Hyderabad',
    zone: 'South',
    image: 'https://images.unsplash.com/photo-1629853381673-832103f56e07?auto=format&fit=crop&w=1200&q=80',
    tagline: 'The City of Pearls, Charminar & Kakatiya Heritage',
    description: 'Historic Golconda Fort, 400-year-old Charminar, UNESCO Ramappa Temple in Warangal, world-famous Dum Biryani, and modern HITEC City.',
    officialLanguages: ['Telugu', 'Urdu'],
    bestSeason: 'October to March',
    touristPlaces: [
      { name: 'Hyderabad (Charminar & Golconda Fort)', description: 'Iconic 4-minaret monument surrounded by Laad Bazaar bangles and legendary acoustic fort', tag: 'Heritage' },
      { name: 'Warangal & Ramappa Temple (UNESCO)', description: '13th-century Kakatiya temple built with lightweight floating bricks, and Thousand Pillar Temple', tag: 'UNESCO' },
      { name: 'Ramoji Film City', description: 'World’s largest integrated film studio complex covering over 2,000 acres of cinematic sets', tag: 'Entertainment' },
      { name: 'Nagarjuna Sagar Dam', description: 'One of the world’s largest masonry dams with an ancient Buddhist island museum (Nagarjunakonda)', tag: 'History' },
    ],
    culture: {
      festivals: ['Bathukamma (Floral Festival of Telangana)', 'Bonalu', 'Sankranti', 'Milad-un-Nabi'],
      artForms: ['Perini Sivatandavam (Dance of Warriors)', 'Oggu Katha', 'Gussadi Folk Dance'],
      handicrafts: ['Pochampally Ikat Sarees (GI Tag)', 'Bidriware Inlaid Metalcraft', 'Nirmal Wooden Toys and Paintings'],
      highlights: 'Ganga-Jamuni Tehzeeb (seamless confluence of Deccani Islamic and Telugu Hindu cultures).'
    },
    food: {
      dishes: ['Hyderabadi Dum Biryani with Mirchi ka Salan', 'Haleem (Slow-cooked mutton stew during Ramadan)', 'Sarva Pindi (Crispy spicy rice pancake)', 'Khatti Dal with Rice'],
      specialty: 'Aromatic basmati rice layered with marinated meat, saffron, fried onions, and slow-cooked on dum in sealed pots.',
      beverageOrDessert: 'Double ka Meetha, Qubani ka Meetha, & Irani Chai with Osmania Biscuits'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: '1363 (Tourist Police booth at Charminar & Golconda Fort)',
      tips: ['Use Hyderabad Metro rail for rapid travel between Charminar, Secunderabad, and HITEC City', 'Sample authentic Irani chai at historic cafes near Charminar', 'Bargain politely when purchasing lacquer bangles at Laad Bazaar'],
      womenSafetyNote: 'SHE Teams of Telangana Police provide specialized 24/7 safety and anti-harassment coverage across the city.'
    },
    travelInfo: {
      nearestAirports: ['Rajiv Gandhi International Airport, Hyderabad (HYD) - Award-winning global hub.'],
      railwayConnectivity: 'Major South Central Railway terminals at Secunderabad, Hyderabad Deccan (Nampally), and Kacheguda.',
      roadConnectivity: 'Outer Ring Road (ORR) 8-lane expressway circles the capital connecting NH-44 and NH-65.',
      idealStayDuration: '3 - 5 Days'
    }
  },
  {
    id: 'tripura',
    name: 'Tripura',
    type: 'State',
    capital: 'Agartala',
    zone: 'North-East',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Land of Royal Water Palaces & Mysterious Rock Carvings',
    description: 'Neermahal lake palace floating on Rudrasagar, rock-cut bas-relief sculptures of Unakoti, and the grand white Ujjayanta Palace.',
    officialLanguages: ['Bengali', 'Kokborok', 'English'],
    bestSeason: 'October to March',
    touristPlaces: [
      { name: 'Neermahal (Water Palace, Melaghar)', description: 'Eastern India’s only floating water palace, built in the middle of Rudrasagar Lake', tag: 'Palace' },
      { name: 'Unakoti Rock Carvings', description: 'Ancient 7th-9th century rock-cut Shaivite bas-relief sculptures featuring massive faces carved into a forested cliff', tag: 'Archaeology' },
      { name: 'Ujjayanta Palace (Agartala)', description: 'Magnificent Indo-Saracenic royal palace surrounded by Mughal gardens, now housing the State Museum', tag: 'Museum' },
      { name: 'Tripura Sundari Temple (Matabari, Udaipur)', description: 'One of the 51 holiest Shakti Peethas, consecrated in 1501 AD beside a tortoise-filled sacred lake', tag: 'Spiritual' },
    ],
    culture: {
      festivals: ['Kharchi Puja (Worship of 14 Gods)', 'Garia Puja', 'Ker Puja', 'Neermahal Water Festival'],
      artForms: ['Hojagiri Reang Dance (balancing on earthen pots)', 'Garia Dance', 'Jhum Folk Dance'],
      handicrafts: ['Cane and Bamboo Furnishings & Screens', 'Tripuri Traditional Handwoven Shawls (Rignai & Risa)'],
      highlights: 'Fascinating synthesis of Manikya dynasty royal traditions and 19 indigenous tribal customs.'
    },
    food: {
      dishes: ['Mui Borok (Traditional fermented fish curry with berma)', 'Chakhwi (Bamboo shoot and pork preparation)', 'Gudok (Mashed vegetable mash)', 'Bhangui (Sun-dried rice cooked in banana leaves)'],
      specialty: 'Completely oil-free, health-conscious tribal cooking infused with aromatic berma (fermented fish) and wild herbs.',
      beverageOrDessert: 'Awan Bangwi & Fresh Queen Pineapple'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: '1363 (Tripura Tourism Information Centre, Agartala)',
      tips: ['Engage a registered boat at Rajghat to cross over to Neermahal palace in Rudrasagar lake', 'Hire a full-day cab to visit Unakoti as it is situated 180 km north of Agartala', 'Taste the world-famous sweet Tripura Queen Pineapple'],
      womenSafetyNote: 'Peaceful, green state with friendly locals and visible police patrolling in Agartala and Udaipur.'
    },
    travelInfo: {
      nearestAirports: ['Maharaja Bir Bikram Airport, Agartala (IXA) with direct flights to Kolkata, Delhi, and Guwahati.'],
      railwayConnectivity: 'Agartala railway station linked with broad gauge trains to Guwahati, Sealdah (Kolkata), and Anand Vihar (Delhi).',
      roadConnectivity: 'NH-8 links Agartala through Assam with the rest of India.',
      idealStayDuration: '3 - 5 Days'
    }
  },
  {
    id: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    type: 'State',
    capital: 'Lucknow',
    zone: 'North',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Heartland of India — Taj Mahal, Sacred Varanasi & Awadh',
    description: 'The monumental Taj Mahal in Agra, transcendental spiritual river ghats of Varanasi, royal Awadhi palaces in Lucknow, and sacred Ayodhya.',
    officialLanguages: ['Hindi', 'Urdu'],
    bestSeason: 'October to March',
    touristPlaces: [
      { name: 'Agra (Taj Mahal & Agra Fort)', description: 'UNESCO Wonder of the World: the sublime white marble mausoleum built by Mughal Emperor Shah Jahan', tag: 'UNESCO' },
      { name: 'Varanasi (Kashi Vishwanath & Ganga Ghats)', description: 'World’s oldest living city, famous for evening Ganga Aarti at Dashashwamedh Ghat and boat cruises', tag: 'Spiritual' },
      { name: 'Lucknow (Bara Imambara & Rumi Darwaza)', description: 'City of Nawabs, celebrated for architectural gravity-defying maze (Bhool Bhulaiya) and Chikankari', tag: 'Culture' },
      { name: 'Ayodhya (Ram Janmabhoomi & Saryu Ghats)', description: 'Ancient sacred epic city, birthplace of Lord Rama, with grand temple corridor and river evening aarti', tag: 'Sacred' },
    ],
    culture: {
      festivals: ['Kumbh Mela (Prayagraj)', 'Dev Deepawali (Varanasi)', 'Lathmar Holi (Barsana)', 'Taj Mahotsav (Agra)'],
      artForms: ['Kathak Classical Dance', 'Biraha Folk Ballads', 'Ramlila and Raslila'],
      handicrafts: ['Chikan Embroidery of Lucknow (GI Tag)', 'Banarasi Brocade Silk Sarees', 'Brassware of Moradabad', 'Firozabad Glassware'],
      highlights: 'Epicenter of Indian epics Ramayana and Mahabharata, Mughal architectural zenith, and classical courtly etiquette (Tehzeeb).'
    },
    food: {
      dishes: ['Awadhi Biryani & Galouti Kebabs', 'Banarasi Tamatar Chaat & Kachori Jalebi', 'Agra Petha', 'Mathura ke Pede'],
      specialty: 'Melt-in-the-mouth Awadhi royal dum cuisine paired with legendary sweet treats and savory street chaat.',
      beverageOrDessert: 'Malaiyo (Winter saffron foam), Thandai, & Shahi Tukda'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: '1363 / Dedicated UP Tourist Police at Taj Mahal & Varanasi Ghats',
      tips: ['Purchase Taj Mahal tickets online in advance at asi.payumoney.com to skip ticket counter queues', 'Taj Mahal remains closed on Fridays for prayers', 'Beware of unauthorized touts near Agra Cantt and Varanasi railway stations; use pre-paid booths'],
      womenSafetyNote: 'Strict security corridors and specialized women police patrols at major monument and temple corridors.'
    },
    travelInfo: {
      nearestAirports: ['Chaudhary Charan Singh International Airport, Lucknow (LKO)', 'Lal Bahadur Shastri Airport, Varanasi (VNS)', 'Ayodhya Maharishi Valmiki Airport (AYJ)', 'Upcoming Noida International (Jewar)'],
      railwayConnectivity: 'Unrivaled railway hub with major junctions at Mughalsarai (Pt. Deen Dayal Upadhyaya), Kanpur, Lucknow, and Agra.',
      roadConnectivity: 'Yamuna Expressway, Agra-Lucknow Expressway, and Purvanchal Expressway provide world-class road speed.',
      idealStayDuration: '5 - 9 Days'
    }
  },
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    type: 'State',
    capital: 'Dehradun (Winter) / Gairsain (Summer)',
    zone: 'North',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Devbhoomi — Yoga Capital of the World & Sacred Himalayas',
    description: 'Yoga centers of Rishikesh, Holy Ganga Aarti in Haridwar, Char Dham shrines (Badrinath, Kedarnath), and Jim Corbett National Park.',
    officialLanguages: ['Hindi', 'Sanskrit', 'Garhwali', 'Kumaoni'],
    bestSeason: 'March to June & September to November',
    touristPlaces: [
      { name: 'Rishikesh & Haridwar', description: 'Yoga capital of the world with Ram Jhula, white-water river rafting, and mystical Har Ki Pauri Ganga Aarti', tag: 'Spiritual' },
      { name: 'Kedarnath & Badrinath (Char Dham)', description: 'High-altitude sacred Himalayan shrines set against dramatic snow peaks and glacial valleys', tag: 'Pilgrimage' },
      { name: 'Nainital & Mussoorie', description: 'Charming colonial hill stations with emerald Naini Lake, Kempty Falls, and Gun Hill vistas', tag: 'Hill Station' },
      { name: 'Jim Corbett National Park & Valley of Flowers', description: 'India’s oldest national park for wild tigers, alongside the UNESCO alpine flower valley', tag: 'UNESCO Nature' },
    ],
    culture: {
      festivals: ['Kumbh Mela (Haridwar)', 'International Yoga Festival (Rishikesh)', 'Nanda Devi Raj Jat', 'Harela'],
      artForms: ['Chholiya Sword Dance', 'Jhora Folk Dance', 'Garhwali & Kumaoni Folk Singing'],
      handicrafts: ['Aipan Ritual Folk Art (GI Tag)', 'Ringal Bamboo Crafts', 'Kumaoni Woolen Shawls & Blankets'],
      highlights: 'Birthplace of the sacred rivers Ganga and Yamuna, Himalayan eco-stewardship (Chipko Movement), and yogic enlightenment.'
    },
    food: {
      dishes: ['Kafuli (Spinach and fenugreek gravy)', 'Chainsoo (Roasted black gram dal)', 'Aloo ke Gutke with Fried Green Chilis', 'Bhatt ki Churkani'],
      specialty: 'Nutritious mountain lentil preparations seasoned with wild Himalayan aromatic seeds like Jakhiya and Jhangora millets.',
      beverageOrDessert: 'Bal Mithai of Almora (Coated with sugar beads) & Singodi'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: '1363 (Uttarakhand Tourist Police active at Rishikesh Ghats & Char Dham)',
      tips: ['Char Dham Yatra requires mandatory biometric registration on registrationandtouristcare.uk.gov.in', 'River rafting in Rishikesh is closed during peak monsoon (July-August)', 'Undergo a medical fitness check before undertaking the high-altitude Kedarnath trek (11,755 ft)'],
      womenSafetyNote: 'Rishikesh ashrams and hill stations are renowned worldwide for accommodating solo women travelers safely.'
    },
    travelInfo: {
      nearestAirports: ['Jolly Grant Airport, Dehradun (DED)', 'Pantnagar Airport (PGH) for Nainital and Kumaon region.'],
      railwayConnectivity: 'Haridwar, Dehradun, and Kathgodam provide mainline train connectivity with Delhi and northern metros.',
      roadConnectivity: 'Char Dham All-Weather Road Highway and Delhi-Dehradun Expressway.',
      idealStayDuration: '5 - 8 Days'
    }
  },
  {
    id: 'west-bengal',
    name: 'West Bengal',
    type: 'State',
    capital: 'Kolkata',
    zone: 'East',
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Sweetest Part of India — Darjeeling Hills, Royal Tigers & Durga Puja',
    description: 'Colonial grand monuments in Kolkata, tea gardens and toy train in Darjeeling, Sundarbans mangrove tiger delta, and UNESCO Durga Puja.',
    officialLanguages: ['Bengali', 'English', 'Nepali (in Darjeeling)'],
    bestSeason: 'October to March',
    touristPlaces: [
      { name: 'Kolkata (Victoria Memorial & Howrah Bridge)', description: 'City of Joy: British colonial grandeur, yellow ambassador taxis, tramways, and lively College Street book stalls', tag: 'Colonial Heritage' },
      { name: 'Darjeeling & Tiger Hill', description: 'Queen of the Hills: world-famous Darjeeling tea estates, UNESCO Toy Train, and sunrise over Kangchenjunga', tag: 'Himalayan Hills' },
      { name: 'Sundarbans National Park (UNESCO Site)', description: 'World’s largest coastal mangrove forest and unique swimming habitat of the Royal Bengal Tiger', tag: 'Mangrove Eco' },
      { name: 'Shantiniketan (UNESCO World Heritage)', description: 'Nobel laureate Rabindranath Tagore’s university town celebrating open-air learning and Baul music', tag: 'UNESCO Culture' },
    ],
    culture: {
      festivals: ['Durga Puja (UNESCO Intangible Cultural Heritage)', 'Poush Mela in Shantiniketan', 'Kolkata International Book Fair', 'Poila Boishakh (Bengali New Year)'],
      artForms: ['Baul Folk Music', 'Chhau Dance (Purulia)', 'Rabindra Sangeet & Bengali Cinema'],
      handicrafts: ['Baluchari & Jamdani Silk Sarees', 'Terracotta Crafts of Bankura', 'Sholapith Artwork', 'Kantha Embroidery'],
      highlights: 'Intellectual Renaissance, literary passion, vibrant Durga Puja public art galleries, and soulful Baul minstrel songs.'
    },
    food: {
      dishes: ['Macher Jhol with Steamed Basmati Rice', 'Kolkata Biryani with Aloo and Egg', 'Kathi Rolls (Invented at Nizam’s)', 'Shorshe Ilish (Hilsa fish in mustard gravy)'],
      specialty: 'Paanch Phoron (5-spice mix), pungent cold-pressed mustard oil, and delicate freshwater river fish.',
      beverageOrDessert: 'Rosogolla, Mishti Doi, Sandesh & First-Flush Darjeeling Tea'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: '1363 (Kolkata Police Tourist Assistance Kiosks at Howrah & Park Street)',
      tips: ['Kolkata metro is the fastest, cleanest way to navigate north and south Kolkata', 'Book Sundarbans mangrove motorboat tours exclusively through authorized eco-tourism operators', 'Wake up at 3:30 AM to catch sunrise over Kangchenjunga at Tiger Hill, Darjeeling'],
      womenSafetyNote: 'Kolkata is frequently ranked as India’s safest metropolitan city for women by the National Crime Records Bureau.'
    },
    travelInfo: {
      nearestAirports: ['Netaji Subhash Chandra Bose International Airport, Kolkata (CCU)', 'Bagdogra International Airport, Siliguri (IXB) for Darjeeling.'],
      railwayConnectivity: 'Howrah Junction and Sealdah are two of India’s busiest railway terminals linking all regions.',
      roadConnectivity: 'NH-16 and NH-19 connect Kolkata smoothly to southern and northern India.',
      idealStayDuration: '5 - 8 Days'
    }
  },

  // ================= 8 UNION TERRITORIES =================
  {
    id: 'andaman-nicobar',
    name: 'Andaman and Nicobar Islands',
    type: 'Union Territory',
    capital: 'Port Blair',
    zone: 'Islands',
    image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Emerald Archipelago, Cellular Jail & Turquoise Reefs',
    description: 'Historical Cellular Jail in Port Blair, world-famous Radhanagar Beach in Havelock, scuba diving coral reefs, and bioluminescent night kayaking.',
    officialLanguages: ['Hindi', 'English', 'Bengali', 'Tamil'],
    bestSeason: 'October to May',
    touristPlaces: [
      { name: 'Havelock Island (Swaraj Dweep & Radhanagar Beach)', description: 'Rated among Asia’s best beaches with powdery white sand and stunning turquoise sunsets', tag: 'Beaches' },
      { name: 'Cellular Jail National Memorial (Port Blair)', description: 'Historic colonial prison known as Kaala Paani, with poignant sound and light history show', tag: 'National History' },
      { name: 'Neil Island (Shaheed Dweep)', description: 'Chilled-out island famed for natural rock bridge, Lakshmanpur beach, and coral snorkeling', tag: 'Reefs' },
      { name: 'Baratang Island & Limestone Caves', description: 'Boat ride through dense mangrove creeks leading to prehistoric limestone caves', tag: 'Adventure' },
    ],
    culture: {
      festivals: ['Island Tourism Festival (January)', 'Monsoon Music Festival', 'Subhash Mela'],
      artForms: ['Indigenous Tribal Songs', 'Multi-cultural Indian coastal folk arts'],
      handicrafts: ['Mother-of-Pearl Shell Crafts', 'Cane & Coconut Shell Carvings', 'Nicobarese Mats'],
      highlights: 'Pristine marine biodiversity, coral conservation, and rich freedom struggle history.'
    },
    food: {
      dishes: ['Fresh Grilled Lobster & Red Snapper', 'Coconut Prawn Curry', 'Amritsari Kulcha / South Indian coastal dishes', 'Tandoori Crab'],
      specialty: 'Catch-of-the-day seafood seasoned with coconut milk, garlic, curry leaves, and coastal spices.',
      beverageOrDessert: 'Fresh Green Coconut Water & Tropical Mango Shakes'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: '1363 (Tourist Police kiosks at Port Blair Jetty & Havelock)',
      tips: ['Pre-book government or private catamaran ferries (Makruzz/Green Ocean) between Port Blair, Havelock, and Neil', 'Interacting with or photographing protected indigenous tribes (Jarawa) is strictly illegal and punishable by law', 'Do not touch or extract corals; severe environmental penalties apply at airports'],
      womenSafetyNote: 'Exceptionally peaceful, welcoming island territory with virtually non-existent street crime.'
    },
    travelInfo: {
      nearestAirports: ['Veer Savarkar International Airport, Port Blair (IXZ) with direct flights from Delhi, Chennai, Kolkata, and Bengaluru.'],
      railwayConnectivity: 'No railway network on the islands.',
      roadConnectivity: 'Andaman Trunk Road (NH-4) connects Port Blair to Diglipur in North Andaman; inter-island travel is via ferry.',
      idealStayDuration: '5 - 7 Days'
    }
  },
  {
    id: 'chandigarh',
    name: 'Chandigarh',
    type: 'Union Territory',
    capital: 'Chandigarh',
    zone: 'North',
    image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80',
    tagline: 'The City Beautiful — Le Corbusier’s Architectural Marvel',
    description: 'India’s first planned modern city, designed by French architect Le Corbusier, famous for the whimsical Rock Garden, Sukhna Lake, and clean boulevards.',
    officialLanguages: ['English', 'Hindi', 'Punjabi'],
    bestSeason: 'October to March',
    touristPlaces: [
      { name: 'Rock Garden of Chandigarh (Nek Chand)', description: 'World-famous 40-acre sculpture garden crafted entirely from recycled urban and industrial waste', tag: 'Sculpture' },
      { name: 'Sukhna Lake & Promenade', description: 'Picturesque 3-sq-km man-made lake at the foothills of the Shivalik Himalayas with pedal boating', tag: 'Tranquility' },
      { name: 'Capitol Complex (UNESCO World Heritage)', description: 'Le Corbusier’s modernist architectural masterpiece featuring the High Court, Secretariat, and Open Hand Monument', tag: 'UNESCO' },
      { name: 'Zakir Hussain Rose Garden', description: 'Asia’s largest botanical rose garden featuring over 50,000 rose bushes across 1,600 varieties', tag: 'Garden' },
    ],
    culture: {
      festivals: ['Rose Festival (February)', 'Chandigarh Carnival (November)', 'Baisakhi & Teej Celebrations'],
      artForms: ['Modernist Architecture Tours', 'Punjabi Theatre and Folk Music', 'Open Hand Art Gatherings'],
      handicrafts: ['Modern Sculptures', 'Phulkari Embroidery', 'Terracotta Garden Ware'],
      highlights: 'Seamless synthesis of urban planning, green open spaces, zero above-ground roundabouts, and high quality of life.'
    },
    food: {
      dishes: ['Chole Bhature with Pickled Carrots', 'Tandoori Soya Chaap', 'Butter Chicken with Butter Naan', 'Dahi Bhalla'],
      specialty: 'A sophisticated combination of hearty Punjabi tandoori classics and contemporary global cafe gastronomy.',
      beverageOrDessert: 'Kulfi Falooda & Patiala Lassi'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: '1363 (Chandigarh Police Tourist Cell at Sukhna Lake)',
      tips: ['Speed limits and lane driving are strictly monitored via automated smart traffic cameras', 'Register for guided tours of the UNESCO Capitol Complex at the Tourist Information Centre', 'Rent a Smart Bike from automated public bike docking stations along Sector pathways'],
      womenSafetyNote: 'Widely recognized as one of India’s most orderly, well-patrolled, and safe cities for women.'
    },
    travelInfo: {
      nearestAirports: ['Shaheed Bhagat Singh International Airport, Chandigarh (IXC) with flights to all Indian metros and Dubai.'],
      railwayConnectivity: 'Chandigarh Junction connects with rapid Shatabdi and Vande Bharat Express services from New Delhi (3 hours).',
      roadConnectivity: 'Seamless 4-lane and 6-lane highways connecting Delhi (NH-44) and Himachal hill gateways.',
      idealStayDuration: '2 - 3 Days'
    }
  },
  {
    id: 'dadra-nagar-haveli-daman-diu',
    name: 'Dadra and Nagar Haveli and Daman and Diu',
    type: 'Union Territory',
    capital: 'Daman',
    zone: 'West',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Portuguese Fortress Shores & Peaceful Tribal Greenery',
    description: 'Portuguese sea-facing forts in Diu, gold sand beaches in Daman, deer safari and tribal museums in Dadra and Nagar Haveli.',
    officialLanguages: ['Gujarati', 'Hindi', 'Konkani', 'Portuguese (Historical)'],
    bestSeason: 'October to March',
    touristPlaces: [
      { name: 'Diu Fort & Naida Caves', description: 'Massive 16th-century sea fortress with ancient cannons, and surreal subterranean sunlit caves', tag: 'Portuguese Fort' },
      { name: 'Nagoa Beach (Diu)', description: 'Horseshoe-shaped tranquil beach shaded by unique African Hoka palm trees', tag: 'Beaches' },
      { name: 'Moti Daman & Nani Daman Forts', description: 'Twin twin Portuguese stone fortifications guarding the Daman Ganga river estuary', tag: 'Colonial' },
      { name: 'Silvassa & Dudhani Lake', description: 'Verdant capital of Dadra and Nagar Haveli famous for tribal culture, deer safari, and water sports', tag: 'Eco-Tour' },
    ],
    culture: {
      festivals: ['Fiesta De Diu (Asia’s longest beach festival)', 'Garba during Navratri', 'Tarpa Dance Festival (Silvassa)'],
      artForms: ['Mando and Portuguese Folk Dances', 'Tarpa Tribal Dance', 'Bhavada Dance'],
      handicrafts: ['Tortoise Shell Crafts (historical)', 'Warli & Kokna Tribal Paintings', 'Bamboo Basketry'],
      highlights: 'Laid-back coastal ambiance, pristine Portuguese baroque churches, and tribal forest tranquility.'
    },
    food: {
      dishes: ['Fresh Coastal Prawn Fry & Lobster', 'Diu Crab Curry', 'Chicken Cozido (Portuguese stew)', 'Dhokla and Gujarati Kathiyawadi Thali'],
      specialty: 'Portuguese-influenced coastal seafood preparations seasoned with coconut and mild spices.',
      beverageOrDessert: 'Tender Coconut Water & Traditional Goan-Portuguese Bebinca'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: '1363 (Tourist Information Counters at Daman Beach & Diu Fort)',
      tips: ['Swimming is restricted at Jampore beach during low tide due to muddy flats; enjoy watersports instead', 'Wear sneakers when navigating the uneven rock steps inside Naida Caves', 'Carry sun protection when exploring the open parapets of Diu Fort'],
      womenSafetyNote: 'Extremely peaceful Union Territory with safe nightlife and low crime indices.'
    },
    travelInfo: {
      nearestAirports: ['Diu Airport (DIU) with direct flights to Mumbai and Ahmedabad; Surat Airport (STV) is 120 km from Daman.'],
      railwayConnectivity: 'Vapi railway station (12 km from Daman) on Mumbai-Delhi line; Veraval is closest to Diu (85 km).',
      roadConnectivity: 'NH-48 connects Mumbai to Vapi/Daman in just 3 hours.',
      idealStayDuration: '3 - 5 Days'
    }
  },
  {
    id: 'delhi',
    name: 'Delhi (NCT)',
    type: 'Union Territory',
    capital: 'New Delhi',
    zone: 'North',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Dilwalo ki Dilli — 1,000 Years of Empires & Vibrant Bazaars',
    description: 'The monumental Red Fort, Qutub Minar, Humayun’s Tomb, India Gate, Chandni Chowk street food lanes, and the seat of Indian democracy.',
    officialLanguages: ['Hindi', 'English', 'Punjabi', 'Urdu'],
    bestSeason: 'October to March',
    touristPlaces: [
      { name: 'Red Fort & Chandni Chowk (Old Delhi)', description: 'Grand 17th-century Mughal red sandstone citadel, Jama Masjid, and Asia’s busiest spice and food bazaar', tag: 'UNESCO' },
      { name: 'Qutub Minar & Mehrauli Heritage Park', description: 'World’s tallest brick minaret (72.5m) built in 1192 AD, standing amidst ancient rust-free iron pillars and ruins', tag: 'UNESCO' },
      { name: 'Humayun’s Tomb & Sunder Nursery', description: 'UNESCO garden tomb that inspired the Taj Mahal, adjacent to heritage botanical gardens', tag: 'Mughal' },
      { name: 'India Gate & Kartavya Path', description: 'National war memorial arch illuminated at night, facing Rashtrapati Bhavan and Parliament', tag: 'National Icon' },
    ],
    culture: {
      festivals: ['Republic Day Parade (Jan 26)', 'Qutub Festival', 'Dilli Haat Crafts & Food Festivals', 'Diwali & Eid in Old Delhi'],
      artForms: ['Dastangoi (Urdu storytelling)', 'Kathak & Classical Concerts', 'Qawwali at Hazrat Nizamuddin Dargah'],
      handicrafts: ['Zari Zardozi Embroidery', 'Meenakari Jewelry', 'Handmade Parchment Lamps & Pottery'],
      highlights: 'Continuously inhabited for millennia across eight historic cities, combining ancient monuments with a cosmopolitan world metropolis.'
    },
    food: {
      dishes: ['Butter Chicken with Tandoori Naan (Originated at Moti Mahal)', 'Chandni Chowk Parathe & Chole Bhature', 'Dahi Bhalla & Gol Gappe', 'Nihari with Khamiri Roti'],
      specialty: 'The undisputed culinary capital of India, fusing royal Mughal court recipes with rich Punjabi street foods.',
      beverageOrDessert: 'Rabri Falooda, Jaleba with Rabri, & Kulfi'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: '1363 / Special Delhi Police Tourist Assistance Unit (Paharganj, Connaught Place, India Gate)',
      tips: ['Use the world-class Delhi Metro network; it is air-conditioned, fast, and covers all major attractions seamlessly', 'The first coach of every Delhi Metro train is strictly reserved for women', 'Ignore touts claiming monuments are closed or offering unofficial shopping detours around Connaught Place'],
      womenSafetyNote: 'Delhi Metro has dedicated women’s coaches and heavy CISF security; 112 emergency response is rapid.'
    },
    travelInfo: {
      nearestAirports: ['Indira Gandhi International Airport (DEL) - Major international aviation hub with dedicated Airport Express Metro.'],
      railwayConnectivity: 'New Delhi (NDLS), Old Delhi (DLI), Hazrat Nizamuddin (NZM), and Anand Vihar (ANVT) terminals.',
      roadConnectivity: 'Eastern & Western Peripheral Expressways, Yamuna Expressway, and Delhi-Mumbai Expressway.',
      idealStayDuration: '3 - 5 Days'
    }
  },
  {
    id: 'jammu-kashmir',
    name: 'Jammu and Kashmir',
    type: 'Union Territory',
    capital: 'Srinagar (Summer) / Jammu (Winter)',
    zone: 'North',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Paradise on Earth — Dal Lake Shikaras & Gulmarg Snow',
    description: 'Gliding on wooden Shikaras along Dal Lake in Srinagar, world-class skiing on Apharwat Peak in Gulmarg, and Vaishno Devi shrine in Jammu.',
    officialLanguages: ['Kashmiri', 'Dogri', 'Urdu', 'Hindi', 'English'],
    bestSeason: 'April to October (Gardens & Lakes) & Dec to March (Snow Sports)',
    touristPlaces: [
      { name: 'Srinagar (Dal Lake Houseboats & Mughal Gardens)', description: 'Charming carved wooden houseboats, floating vegetable market, and Nishat & Shalimar Mughal gardens', tag: 'Lakes' },
      { name: 'Gulmarg & Gondola Cable Car', description: 'Asia’s highest cable car taking skiers to 13,780 ft on Apharwat peak, offering panoramic snowscapes', tag: 'Skiing' },
      { name: 'Pahalgam (Valley of Shepherds & Betaab Valley)', description: 'Verdant pine forests, Lidder river trout angling, and base camp for the holy Amarnath Yatra', tag: 'Valley' },
      { name: 'Katra (Mata Vaishno Devi Shrine)', description: 'Holy cave shrine in the Trikuta mountains, visited by millions of devotees round the year', tag: 'Sacred' },
    ],
    culture: {
      festivals: ['Tulip Festival (Asia’s largest tulip garden in April)', 'Shikara Festival', 'Baisakhi & Eid', 'Navreh'],
      artForms: ['Rouf Folk Dance', 'Bhand Pather Folk Theatre', 'Sufiana Kalam Music with Santoor'],
      handicrafts: ['Pashmina & Kani Handwoven Shawls', 'Walnut Wood Carvings', 'Papier-Mache Crafts', 'Kashmiri Silk Carpets'],
      highlights: 'Poetic natural beauty, gentle hospitality (Kashmiriyat), and centuries of artisan craftsmanship.'
    },
    food: {
      dishes: ['Kashmiri Wazwan (36-course royal banquet with Rogan Josh, Rista, & Gushtaba)', 'Dum Aloo & Nadru Yakhni (Lotus stem yogurt curry)', 'Modur Pulao', 'Tabak Maaz'],
      specialty: 'Aromatic fennel powder, dried ginger (sonth), Kashmiri red chili, and saffron without garlic or onion in Pandit cuisine.',
      beverageOrDessert: 'Kahwa (Green tea brewed with saffron, cardamom, and sliced almonds) & Noon Chai'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: '1363 / J&K Tourist Police Station, TRC Srinagar (24/7 assistance)',
      tips: ['Book Gulmarg Gondola phase 1 and phase 2 tickets strictly through the official website jammukashmircablecar.com', 'Pre-agree on Shikara cruise rates as per government rate boards installed at Dal Lake Ghats', 'Carry valid photo identification at all transit checkpoints'],
      womenSafetyNote: 'Kashmiri locals are exceptionally hospitable and helpful; tourist police desks are active in Srinagar, Gulmarg, and Pahalgam.'
    },
    travelInfo: {
      nearestAirports: ['Sheikh ul-Alam International Airport, Srinagar (SXR)', 'Jammu Airport (IXJ)'],
      railwayConnectivity: 'Udhampur-Srinagar-Baramulla Rail Link (USBRL) featuring the world’s highest railway arch bridge over the Chenab River.',
      roadConnectivity: 'NH-44 connects Jammu to Srinagar through the engineering marvel of the Syama Prasad Mookerjee and Banihal tunnels.',
      idealStayDuration: '5 - 8 Days'
    }
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    type: 'Union Territory',
    capital: 'Leh',
    zone: 'North',
    image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Land of High Passes, Blue Glacial Lakes & Monasteries',
    description: 'Cobalt-blue waters of Pangong Tso, white sand dunes of Nubra Valley with double-humped camels, Khardung La pass, and cliffside gompas.',
    officialLanguages: ['Ladakhi (Bhoti)', 'Hindi', 'English'],
    bestSeason: 'May to September',
    touristPlaces: [
      { name: 'Pangong Tso Crystal Lake', description: 'Breathtaking 134-km long high-altitude lake (14,270 ft) that dramatically changes color from turquoise to deep indigo', tag: 'Alpine Lake' },
      { name: 'Nubra Valley & Hunder Sand Dunes', description: 'Cold desert dunes where rare double-humped Bactrian camels roam against a backdrop of snowy peaks', tag: 'Desert Valley' },
      { name: 'Thiksey & Hemis Monasteries', description: 'Majestic multi-tiered Tibetan Buddhist monasteries housing giant golden statues of Maitreya Buddha', tag: 'Monasteries' },
      { name: 'Khardung La Pass (17,982 ft)', description: 'World-famous motorable mountain pass offering adrenaline and dramatic Himalayan vistas', tag: 'Mountain Pass' },
    ],
    culture: {
      festivals: ['Hemis Festival (Cham Sacred Mask Dances)', 'Ladakh Festival (September)', 'Losar (New Year)', 'Dosmoche'],
      artForms: ['Cham Sacred Dances by Lamas', 'Ladakhi Folk Songs with Surna and Daman', 'Thangka Silk Painting'],
      handicrafts: ['Ladakhi Pashmina Shawls', 'Yak Wool Blankets', 'Tibetan Silver Jewelry', 'Clay Sculptures'],
      highlights: 'Spiritual reverence for Buddhist monasteries, deep ecological awareness, and extreme mountain resilience.'
    },
    food: {
      dishes: ['Ladakhi Thukpa (Noodle soup with vegetables)', 'Steamed Momos with fiery chili dip', 'Tingmo (Soft steamed flower bread)', 'Chhurpi (Hard Yak cheese cubes)'],
      specialty: 'Hearty, warming high-altitude foods based on roasted barley flour (tsampa), noodles, and root vegetables.',
      beverageOrDessert: 'Gur Gur Chai (Ladakhi Butter Tea with salt) & Apricot Juice'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: '1363 (Leh Tourist Police Station & SNM Hospital Hub)',
      tips: ['MANDATORY: Rest completely for the first 24 to 48 hours upon landing in Leh to prevent Acute Mountain Sickness (AMS)', 'Inner Line Permits (ILP) are mandatory for Pangong Tso, Nubra Valley, and Tso Moriri (obtain online at lahdclehpermit.in)', 'Drink 4-5 liters of water daily and carry Diamox if recommended by your physician'],
      womenSafetyNote: 'Ladakh has zero tolerance for crime and is universally regarded as one of the safest regions on earth for solo women travelers.'
    },
    travelInfo: {
      nearestAirports: ['Kushok Bakula Rimpochee Airport, Leh (IXL) - One of the highest commercial airports in the world (10,682 ft).'],
      railwayConnectivity: 'No railway service in Ladakh; nearest railheads are Jammu Tawi and Chandigarh.',
      roadConnectivity: 'Manali-Leh Highway (via Atal Tunnel) and Srinagar-Leh Highway (via Zoji La), open from late May to October.',
      idealStayDuration: '6 - 9 Days',
      permitRequired: 'Inner Line Permit (ILP) required for Nubra Valley, Pangong Tso, and Hanle dark sky sanctuary.'
    }
  },
  {
    id: 'lakshadweep',
    name: 'Lakshadweep',
    type: 'Union Territory',
    capital: 'Kavaratti',
    zone: 'Islands',
    image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Coral Paradise of 36 Turquoise Atolls & Untouched Lagoons',
    description: 'India’s smallest Union Territory, comprising 36 pristine coral atolls with crystal-clear lagoons, scuba diving, and sustainable eco-tourism.',
    officialLanguages: ['Malayalam', 'Jesy (Dweep Bhasha)', 'Mahl (Minicoy)'],
    bestSeason: 'October to May',
    touristPlaces: [
      { name: 'Bangaram Island & Lagoon', description: 'Teardrop-shaped uninhabited coral island surrounded by a shallow turquoise lagoon with vibrant bioluminescent plankton', tag: 'Atoll' },
      { name: 'Agatti Island & Reef', description: 'Scenic airstrip extending into the turquoise ocean, offering world-class scuba diving and snorkeling', tag: 'Reef' },
      { name: 'Kavaratti Island (Capital)', description: 'Vibrant administrative atoll with the Marine Aquarium, glass-bottom boats, and ornate Ujra Mosque', tag: 'Culture' },
      { name: 'Minicoy Island (Maliku)', description: 'Southernmost atoll known for its historic British Lighthouse (1885), unique Mahl culture, and lava dance', tag: 'Heritage Atoll' },
    ],
    culture: {
      festivals: ['Eid-ul-Fitr & Eid-ul-Adha', 'Milad-un-Nabi', 'National Mini-Olympic Sports'],
      artForms: ['Kolkali Folk Dance (Stick dance)', 'Parichakali (Shield and sword dance)', 'Lava Dance of Minicoy'],
      handicrafts: ['Coconut Shell Artifacts', 'Coir Mats & Ropes', 'Tortoise Shell & Coral Artistry (preservation focus)'],
      highlights: 'Strictly preserved marine ecosystem, sustainable community-based tourism, and warm island hospitality.'
    },
    food: {
      dishes: ['Tuna Fry & Tuna Thoran (Masmin)', 'Kadapam (Rice cakes in spicy coconut curry)', 'Octopus Fry', 'Coconut Rice with Fish Curry'],
      specialty: 'Ocean-fresh Skipjack and Yellowfin tuna prepared with fresh grated coconut, curry leaves, and coastal chilies.',
      beverageOrDessert: 'Tender Coconut Water & Kinnathappam (Steamed coconut cake)'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: '1363 (Lakshadweep Tourism Administration, Kavaratti & Agatti)',
      tips: ['Entry permit is mandatory for ALL visitors (including Indian citizens); obtain through authorized travel agents or ePermit portal', 'Alcohol consumption is prohibited on all islands except Bangaram Island Resort', 'Respect fragile coral reefs: walking on live coral or removing shells is strictly forbidden'],
      womenSafetyNote: 'Remarkably safe, close-knit island community with zero street crime; deeply respectful culture.'
    },
    travelInfo: {
      nearestAirports: ['Agatti Island Airport (AGX) with daily flights from Kochi (Cochin International, Kerala).'],
      railwayConnectivity: 'No railway network on the islands.',
      roadConnectivity: 'No inter-island roads; speedboats, catamarans, and passenger ships operate between islands from Kochi.',
      idealStayDuration: '4 - 6 Days',
      permitRequired: 'Mandatory Entry Permit required for all tourists prior to booking travel.'
    }
  },
  {
    id: 'puducherry',
    name: 'Puducherry',
    type: 'Union Territory',
    capital: 'Puducherry',
    zone: 'South',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    tagline: 'The French Riviera of the East & Auroville Sanctuary',
    description: 'Pastel yellow colonial villas in White Town, spiritual serenity of Sri Aurobindo Ashram, universal township Auroville, and Promenade Beach.',
    officialLanguages: ['Tamil', 'French', 'English', 'Telugu', 'Malayalam'],
    bestSeason: 'October to March',
    touristPlaces: [
      { name: 'White Town (French Quarter) & Promenade', description: 'Cobblestone avenues lined with colonial bougainvillea-draped yellow mansions and seaside rock beach', tag: 'French Heritage' },
      { name: 'Auroville & The Matrimandir', description: 'Universal township dedicated to human unity, featuring the iconic golden globe meditation sanctuary', tag: 'Meditation' },
      { name: 'Sri Aurobindo Ashram', description: 'Spiritual retreat founded by Sri Aurobindo and The Mother, fostering deep inner contemplation', tag: 'Spiritual' },
      { name: 'Paradise Beach (Chunnambar Boat House)', description: 'Golden sand island beach accessible via a scenic boat ride through backwater creeks', tag: 'Beach' },
    ],
    culture: {
      festivals: ['French National Day (Bastille Day - July 14)', 'Auroville Birthday Celebrations (Feb 28)', 'International Yoga Festival (January)', 'Masi Magam'],
      artForms: ['Contemporary Dance at Auroville', 'French Chanson and Classical Tamil Bharatanatyam', 'Terracotta Pottery'],
      handicrafts: ['Handmade Paper from Sri Aurobindo Ashram', 'Auroville Organic Incense & Candles', 'Leather Goods and Stoneware'],
      highlights: 'Harmonious Franco-Tamil architectural synthesis, artisanal sourdough bakeries, and holistic conscious living.'
    },
    food: {
      dishes: ['Crepes and French Baguettes with Brie', 'Pondicherry Fish Assad (Turmeric coconut cream curry)', 'Crispy Dosa with Sambhar', 'Ratatouille & Wood-fired Pizza'],
      specialty: 'A seamless culinary marriage between traditional Tamil spices and classic French haute cuisine techniques.',
      beverageOrDessert: 'Café au Lait, French Pastries, & Filter Coffee'
    },
    safety: {
      emergencyHelpline: '112',
      touristPolice: '1363 / Special Beach Tourist Police on Promenade',
      tips: ['Explore White Town effortlessly by renting a bicycle or vintage scooter', 'Book Matrimandir inner chamber meditation passes at least 2 to 3 days in advance at the Auroville Visitors Centre', 'Promenade Beach road is completely pedestrian-only from 6 PM to 7:30 AM every evening'],
      womenSafetyNote: 'Auroville and White Town are renowned for their peaceful, cosmopolitan, and solo-traveler friendly environment.'
    },
    travelInfo: {
      nearestAirports: ['Puducherry Airport (PNY) with flights from Bengaluru and Hyderabad; Chennai International Airport (MAA) is 140 km away.'],
      railwayConnectivity: 'Puducherry railway station connects to Chennai, Bengaluru, and Delhi.',
      roadConnectivity: 'East Coast Road (ECR) from Chennai is one of the most scenic coastal highway drives in India.',
      idealStayDuration: '2 - 4 Days'
    }
  }
];
