import {
  IndiaRegion,
  EnrichedCultureFoodData,
  RegionalDishItem,
  FestivalItem,
  ArtAndCraftItem,
  TraditionalAttire,
  LocalCustomItem,
  LocalExperienceItem
} from '../types';

// Curated specialized culture & food data for notable states and UTs
export const CURATED_CULTURE_FOOD: Record<string, Partial<EnrichedCultureFoodData>> = {
  rajasthan: {
    dishes: [
      {
        id: 'raj-dal-baati-churma',
        name: 'Dal Baati Churma',
        description: 'Crispy whole-wheat flour dough balls baked over charcoal embers, dipped in pure desi ghee, served with Panchmel dal and sweet crushed churma.',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
        isVegetarian: true,
        dishType: 'Main Course',
        tasteProfile: 'Hearty, earthy with smoky ghee aromas',
        servingTradition: 'Served on large brass thalis with garlic chutney and buttermilk'
      },
      {
        id: 'raj-laal-maas',
        name: 'Laal Maas',
        description: 'Fiery royal mutton curry cooked slowly with traditional Mathania red chillies, mustard oil, and whole spices once savored by Rajput kings.',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
        isVegetarian: false,
        dishType: 'Main Course',
        tasteProfile: 'Fiery, rich, and fragrant with whole cloves',
        servingTradition: 'Paired with bajra roti (pearl millet flatbread) or fragrant steamed rice'
      },
      {
        id: 'raj-pyaaz-kachori',
        name: 'Jodhpuri Pyaaz Kachori',
        description: 'Golden, flaky deep-fried pastry pocket bursting with a spiced filling of sautéed onions, fennel seeds, coriander, and garam masala.',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
        isVegetarian: true,
        dishType: 'Street Food',
        tasteProfile: 'Crispy, tangy, and deeply aromatic',
        servingTradition: 'Best enjoyed piping hot with tamarind and mint-coriander chutneys'
      },
      {
        id: 'raj-gatte-ki-sabzi',
        name: 'Gatte Ki Sabzi',
        description: 'Poached chickpea flour (besan) dumplings simmered in a tangy, spiced yogurt-based curry infused with ajwain and hing.',
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
        isVegetarian: true,
        dishType: 'Main Course',
        tasteProfile: 'Tangy, smooth yogurt gravy with tender gram dumplings',
        servingTradition: 'Staple desert preparation requiring minimal green vegetables'
      },
      {
        id: 'raj-ghevar',
        name: 'Jaipuri Malai Ghevar',
        description: 'Disc-shaped honeycomb sweet made from all-purpose flour soaked in saffron sugar syrup, lavishly crowned with rabri and silver vark.',
        image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80',
        isVegetarian: true,
        dishType: 'Dessert',
        tasteProfile: 'Delicately crunchy, creamy, and perfumed with cardamom',
        servingTradition: 'Traditional centerpiece of Teej and Raksha Bandhan festivities'
      }
    ],
    festivals: [
      {
        id: 'raj-pushkar-fair',
        name: 'Pushkar Camel Fair (Kartik Purnima)',
        timing: 'November / Autumn Full Moon',
        description: 'One of the world’s largest camel and livestock gatherings where nomadic traders, folk musicians, and holy lake pilgrims converge on desert dunes.',
        highlight: 'Camel beauty contests, turban tying competitions, and evening desert Maha Aarti'
      },
      {
        id: 'raj-desert-festival',
        name: 'Jaisalmer Desert Festival',
        timing: 'February / Late Winter',
        description: 'Celebration of Rajasthani desert heritage against the golden sandstone ramparts of Jaisalmer Fort with folk ballets and camel polo.',
        highlight: 'Gair and Fire dancers performing on the glowing Sam Sand Dunes'
      },
      {
        id: 'raj-teej-gangaur',
        name: 'Teej & Gangaur Royal Pageant',
        timing: 'March - April & August',
        description: 'Sacred processions of Goddess Parvati accompanied by caparisoned elephants, vintage royal palanquins, and women singing folk songs in leheriya.',
        highlight: 'Royal procession through the historic Tripolia Gate of the Old Pink City'
      }
    ],
    artsAndCrafts: [
      {
        id: 'raj-ghoomar',
        name: 'Ghoomar & Kalbelia Dance',
        category: 'Folk Dance',
        description: 'Graceful pirouetting Ghoomar dance performed by veiled women in vibrant swirling ghagras, alongside the snake-charming acrobatics of Kalbelia dancers (UNESCO Intangible Cultural Heritage).',
        giTagOrOrigin: 'Rajasthan Folk Heritage'
      },
      {
        id: 'raj-blue-pottery',
        name: 'Jaipur Blue Pottery',
        category: 'Handicraft & Textile',
        description: 'Turquoise-glazed quartz pottery fired without clay, hand-painted with Persian floral motifs and cobalt blue mineral dyes.',
        giTagOrOrigin: 'GI Tagged (Jaipur, Rajasthan)'
      },
      {
        id: 'raj-bandhani',
        name: 'Bandhani & Leheriya Tie-Dye',
        category: 'Handicraft & Textile',
        description: 'Intricate tie-and-dye textile artistry creating wave (leheriya) and dotted (bandhej) patterns on pure cotton and georgette fabrics.',
        giTagOrOrigin: 'GI Tagged (Jodhpur & Jaipur)'
      },
      {
        id: 'raj-kathputli',
        name: 'Kathputli String Puppetry',
        category: 'Music & Theatre',
        description: 'Ancient marionette theatrical storytelling enacted by Bhatt community artists using wooden dolls adorned in traditional Rajasthani attire.',
        giTagOrOrigin: 'Traditional Performing Art'
      }
    ],
    attire: {
      mens: 'Angrakha or Kurta with Dhoti/Churidar, paired with a brightly coiled 9-meter Safa or Pagri (turban) indicating community and region.',
      womens: 'Swirling 80-kali Ghagra (flared skirt), fitted Kanchli (blouse), and sheer Odhna (veil) decorated with Gota Patti and mirror work.',
      textiles: 'Kota Doria, Sanganeri hand block prints, Bagru mud-resist prints, and Barmeri embroidery.',
      accessories: 'Borla (forehead ornament), Aad (choker necklace), and carved camel leather juttis with curled tips.'
    },
    customs: [
      {
        title: 'The Greeting of "Khamma Ghani"',
        description: 'Traditional greeting conveying deep respect and peace, answered warmly with "Ghani Khamma" alongside folded hands.',
        etiquetteTip: 'Always respond with folded hands and a slight bow when greeted by elders or palace hosts.'
      },
      {
        title: 'Manuhaar (Hospitality Protocol)',
        description: 'A deeply cherished Rajput ritual of urging guests to take a second serving of food or sweets as a sign of affection and goodwill.',
        etiquetteTip: 'Politely accept at least a token sweet or spoonful of ghee when pressed by your hosts.'
      },
      {
        title: 'Turban & Head Covering in Holy Places',
        description: 'Turbans denote honor and status. In temples like Ranakpur and Nathdwara, covering one’s head is a mark of reverence.',
        etiquetteTip: 'Carry a cotton scarf or handkerchief to cover your head prior to entering sanctums.'
      }
    ],
    experiences: [
      {
        id: 'raj-exp-pottery',
        title: 'Blue Pottery Masterclass with Artisan Guilds',
        category: 'Hands-on Craft',
        description: 'Shape and hand-paint your own quartz tile under the mentorship of National Award-winning artisans in Jaipur.',
        duration: '2.5 Hours',
        highlight: 'Take home your customized glazed ceramic tile artwork'
      },
      {
        id: 'raj-exp-royal-feast',
        title: 'Royal Thali Tasting in a Heritage Haveli',
        category: 'Culinary',
        description: 'Dine under frescoed courtyard arches with a 15-dish traditional Rajasthani degustation accompanied by live sitar and sarangi.',
        duration: '2 Hours',
        highlight: 'Learn secret heirloom spice mixes from royal family chefs'
      },
      {
        id: 'raj-exp-manganiyar',
        title: 'Desert Stargazing & Manganiyar Musical Soiree',
        category: 'Spiritual / Folk',
        description: 'Gather around a crackling campfire amid sand dunes as Manganiyar folk masters sing soulful Sufi and Thar desert verses.',
        duration: '3 Hours',
        highlight: 'Acoustic Kamaicha and Khartal performances under starlit skies'
      }
    ]
  },

  kerala: {
    dishes: [
      {
        id: 'ker-sadya',
        name: 'Traditional Kerala Sadya Feast',
        description: 'Opulent vegetarian grand feast consisting of 24–28 delicacies including Avial, Olan, Thoran, Sambar, Pachadi, and Parippu.',
        image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80',
        isVegetarian: true,
        dishType: 'Main Course',
        tasteProfile: 'Harmonious balance of sweet, sour, salty, and coconut cream',
        servingTradition: 'Eaten traditionally with hands on a tapering plantain banana leaf'
      },
      {
        id: 'ker-appam-stew',
        name: 'Appam with Vegetable / Chicken Stew',
        description: 'Lacy, fermented rice pancakes with a pillowy soft center, served with aromatic coconut milk stew simmered with whole spices.',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
        isVegetarian: true,
        dishType: 'Main Course',
        tasteProfile: 'Mild, subtly sweet, and rich with coconut milk and curry leaves',
        servingTradition: 'Quintessential Kerala Christian Sunday morning breakfast'
      },
      {
        id: 'ker-karimeen-pollichathu',
        name: 'Karimeen Pollichathu',
        description: 'Fresh backwater pearl spot fish marinated in shallots, green chillies, ginger, and curry leaf paste, wrapped in banana leaf and pan-roasted.',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
        isVegetarian: false,
        dishType: 'Main Course',
        tasteProfile: 'Tangy, spicy, and infused with smoky banana leaf aroma',
        servingTradition: 'Signature backwater delicacy paired with Kerala red matta rice'
      },
      {
        id: 'ker-palada-payasam',
        name: 'Palada Pradhaman Payasam',
        description: 'Luxurious dessert made by slow-simmering rice flakes (ada) in condensed full-cream milk, sugar, and cardamom until caramelized rose-gold.',
        image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80',
        isVegetarian: true,
        dishType: 'Dessert',
        tasteProfile: 'Sweet, rich, creamy with melt-in-the-mouth rice pastry flakes',
        servingTradition: 'The crowning sweet course of festive celebrations'
      }
    ],
    festivals: [
      {
        id: 'ker-onam',
        name: 'Onam Harvest Festival (Thiruvonam)',
        timing: 'August - September (Chingam Month)',
        description: 'Celebrates the mythical homecoming of egalitarian King Mahabali with intricate floral carpets (Pookkalam) and Vallam Kali snake boat races.',
        highlight: 'Aranmula boat race chant and communal Grand Onam Sadya'
      },
      {
        id: 'ker-thrissur-pooram',
        name: 'Thrissur Pooram Temple Spectacle',
        timing: 'April - May (Medam Month)',
        description: 'The mother of all temple pageants featuring 30 caparisoned elephants, synchronized Ilanjithara Melam percussion orchestra, and colorful Kudamattam umbrellas.',
        highlight: 'Electrifying Chenda Melam drum symphony and midnight fireworks'
      },
      {
        id: 'ker-theyyam',
        name: 'Theyyam Ritual Performance Season',
        timing: 'November to May (North Malabar)',
        description: 'Ancient sacred ritual dance where performers transform into living deities through blood-red facial paint, colossal headgear, and fire leaps.',
        highlight: 'Midnight shrine performances in sacred groves (Kavus) of Kannur'
      }
    ],
    artsAndCrafts: [
      {
        id: 'ker-kathakali',
        name: 'Kathakali Classical Dance-Drama',
        category: 'Classical Art',
        description: 'Dramatic storytelling combining stylized facial mudras, grand paccha (green) noble makeup, and narrative drumming retelling the Mahabharata.',
        giTagOrOrigin: 'UNESCO Intangible Heritage'
      },
      {
        id: 'ker-kalaripayattu',
        name: 'Kalaripayattu Martial Art',
        category: 'Folk Dance',
        description: 'One of the world’s oldest surviving martial arts originating from Kerala, featuring flexible sword (urumi) combat, agility leaps, and pressure point strikes.',
        giTagOrOrigin: 'Ancient Vedic Martial Discipline'
      },
      {
        id: 'ker-aranmula-mirror',
        name: 'Aranmula Kannadi Metal Mirror',
        category: 'Handicraft & Textile',
        description: 'Handmade front-surface metal alloy mirrors crafted by a secret family formula in Aranmula village, reflecting zero secondary refraction.',
        giTagOrOrigin: 'GI Tagged (Aranmula, Kerala)'
      }
    ],
    attire: {
      mens: 'Kasavu Mundu (fine cream cotton woven cloth with pure gold zari border) tucked at the waist, worn with Melmundu or linen shirt.',
      womens: 'Two-piece Set-Mundu (Mundum Neriyathum) or Kasavu Saree in ivory handloom cotton bordered with glittering gold temple borders.',
      textiles: 'Balaramapuram cotton, Chendamangalam handloom, and Kuthampully weaves.',
      accessories: 'Palakka Mala (emerald leaf necklace), Mullamottu Mala (jasmine bud chain), and fresh jasmine flowers woven into hair.'
    },
    customs: [
      {
        title: 'Eating on Banana Leaf (Vaazhayila)',
        description: 'The leaf tip must always point to the left of the diner. Courses are served in a precise spatial order starting with salt and pickles.',
        etiquetteTip: 'After finishing, fold the banana leaf in half towards yourself to express satisfaction.'
      },
      {
        title: 'Temple Dress Code (Kshethram Maryada)',
        description: 'Traditional Hindu temples in Kerala require men to enter bare-chested wearing a clean white mundu, and women in sarees or salwar.',
        etiquetteTip: 'Electronic devices, cameras, and leather items must be left at outer cloakrooms.'
      },
      {
        title: 'The Greeting of "Namaskaram"',
        description: 'Universal Malayalam greeting with palms pressed together at chest level denoting humility and mutual respect.',
        etiquetteTip: 'Smile warmly and greet hosts with "Namaskaram" upon arriving at homestays.'
      }
    ],
    experiences: [
      {
        id: 'ker-exp-sadya',
        title: 'Village Cooking & Sadya Workshop',
        category: 'Culinary',
        description: 'Learn to scrape fresh coconuts, temper curry leaves, and brew authentic sambar and payasam in an open-air village kitchen.',
        duration: '3 Hours',
        highlight: 'Enjoy your own hand-cooked 12-item sadya on fresh banana leaves'
      },
      {
        id: 'ker-exp-kathakali',
        title: 'Kathakali Green Room & Mudra Workshop',
        category: 'Spiritual / Folk',
        description: 'Watch the painstaking 2-hour natural mineral makeup transformation of Kathakali artists before enjoying an intimate live excerpt.',
        duration: '2.5 Hours',
        highlight: 'Learn the 9 fundamental Navarasa facial expressions from master performers'
      },
      {
        id: 'ker-exp-backwater',
        title: 'Canal Canoe & Coir Spinning Trail',
        category: 'Community Trail',
        description: 'Paddle through silent village canals, witness women spinning coconut husk into coir rope, and sip sweet tender coconut water.',
        duration: '2 Hours',
        highlight: 'Intimate access to small waterways inaccessible to motorized houseboats'
      }
    ]
  },

  goa: {
    dishes: [
      {
        id: 'goa-fish-curry',
        name: 'Goan Fish Curry Rice',
        description: 'Fresh kingfish or pomfret simmered in a coconut milk gravy flavored with tangy dried kokum, red Kashmiri chillies, and aromatic coriander.',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
        isVegetarian: false,
        dishType: 'Main Course',
        tasteProfile: 'Tangy from kokum, rich from coconut, and gently spicy',
        servingTradition: 'The everyday staple lunch of every Goan home, served with red rice'
      },
      {
        id: 'goa-pork-vindaloo',
        name: 'Authentic Goan Vindaloo',
        description: 'Portuguese-influenced heritage stew marinated in toddy vinegar, garlic, ginger, cloves, and cinnamon with deep, mellow tartness.',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
        isVegetarian: false,
        dishType: 'Main Course',
        tasteProfile: 'Sharp, piquant, sour, and intensely flavorful',
        servingTradition: 'Tastes even better on the second day paired with crusty poi bread'
      },
      {
        id: 'goa-bebinca',
        name: 'Traditional Goan Bebinca',
        description: 'The queen of Goan desserts, a multi-layered cake baked one layer at a time using coconut milk, egg yolks, sugar, ghee, and nutmeg.',
        image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80',
        isVegetarian: false,
        dishType: 'Dessert',
        tasteProfile: 'Rich, caramelized, custard-like texture perfumed with nutmeg',
        servingTradition: 'Traditional centerpiece of Catholic Christmas and Christian weddings'
      },
      {
        id: 'goa-poi',
        name: 'Poi with Chourico (Goan Sausage)',
        description: 'Spicy, smoked Goan pork sausages sautéed with onions and stuffed into traditional wood-fired whole wheat pocket bread (poi).',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
        isVegetarian: false,
        dishType: 'Street Food',
        tasteProfile: 'Smoky, tangy, fatty, and spicy with palm vinegar notes',
        servingTradition: 'Bought hot from traditional village bakeries (poders)'
      }
    ],
    festivals: [
      {
        id: 'goa-carnival',
        name: 'Goa Carnival & King Momo Parade',
        timing: 'February / Pre-Lent',
        description: 'Four days of jubilant street parades led by King Momo under the motto of "Kha, Piye ani Maja Kar" (Eat, Drink and Make Merry).',
        highlight: 'Colorful floats, brass bands, and masked dancers through Panaji and Margao'
      },
      {
        id: 'goa-shigmo',
        name: 'Shigmo Spring Festival (Shigmotsav)',
        timing: 'March / Phalguna Month',
        description: 'Goan Hindu equivalent of Holi celebrating the homecoming of warriors with vibrant Ghode Modni horse dances and Romtamel processions.',
        highlight: 'Giant mythological effigies depicting folklore legends dancing on the streets'
      },
      {
        id: 'goa-bonderam',
        name: 'Bonderam Flag Festival',
        timing: 'August (Divar Island)',
        description: 'A mock battle festival on Divar Island commemorating historic village boundary disputes with colorful flags and lively carnival music.',
        highlight: 'Community float parades and traditional mock photash toy-shooter battles'
      }
    ],
    artsAndCrafts: [
      {
        id: 'goa-fado',
        name: 'Goan Fado & Mando Music',
        category: 'Music & Theatre',
        description: 'Melancholic Portuguese-Goan vocal ballads accompanied by classical Spanish guitar and Portuguese viola, expressing saudade (longing).',
        giTagOrOrigin: 'Luso-Goan Cultural Tradition'
      },
      {
        id: 'goa-azulejos',
        name: 'Hand-painted Azulejo Ceramic Tiles',
        category: 'Handicraft & Textile',
        description: 'Glazed blue and white decorative ceramic tiles depicting Goan village life, historic churches, and flora, introduced during the Portuguese era.',
        giTagOrOrigin: 'Goa Heritage Craft'
      },
      {
        id: 'goa-fugdi',
        name: 'Fugdi & Dhalo Folk Dances',
        category: 'Folk Dance',
        description: 'Spirited folk dances performed in circles by Goan women during Ganesh Chaturthi and harvest celebrations with rhythmic clapping.',
        giTagOrOrigin: 'Konkani Indigenous Tradition'
      }
    ],
    attire: {
      mens: 'Light pastel cotton shirts with bermuda shorts or trousers; traditional fishermen wear cotton vests with brightly checkered loincloths (kashti).',
      womens: 'Traditional Kunbi 9-yard cotton saree in red and yellow checks, knotted at the right shoulder; casual attire leans towards breezy floral sundresses.',
      textiles: 'Kunbi handloom weave reviving centuries-old indigenous Konkan weaving patterns.',
      accessories: 'Pearl-encrusted gold bangles (kanknam) and traditional floral head garlands.'
    },
    customs: [
      {
        title: 'Susegad (The Spirit of Contentment)',
        description: 'A relaxed, unhurried attitude to life that cherishes peace, afternoon siestas, good food, and work-life balance.',
        etiquetteTip: 'Respect the afternoon quiet hours (1:30 PM to 4:00 PM) when smaller shops and village taverns close for siesta.'
      },
      {
        title: 'Taverna Social Culture',
        description: 'Village taverns in Goa serve as community gathering hubs for neighborhood conversations, feni tasting, and acoustic singing.',
        etiquetteTip: 'Engage respectfully with locals; tavernas are relaxed neighborhood sanctuaries.'
      },
      {
        title: 'Church Decorum & Beach Etiquette',
        description: 'While beachwear is standard along the coastline, visiting churches and rural villages requires shoulders and knees to be respectfully covered.',
        etiquetteTip: 'Carry a sarong or light shirt when heading from the beach into town centers.'
      }
    ],
    experiences: [
      {
        id: 'goa-exp-spice-cook',
        title: 'Heritage Spice Plantation Walk & Cooking',
        category: 'Culinary',
        description: 'Walk through vanilla, cardamom, and black pepper groves in Ponda followed by a cooking session of Goan peri-peri and fish curry.',
        duration: '3 Hours',
        highlight: 'Taste fresh peri-peri masala made with stone-ground local spices'
      },
      {
        id: 'goa-exp-azulejo',
        title: 'Azulejo Tile Painting Workshop in Fontainhas',
        category: 'Hands-on Craft',
        description: 'Learn the intricate art of Portuguese glazed tile painting from a resident artist in the Latin Quarter of Panaji.',
        duration: '2 Hours',
        highlight: 'Create and take home your own personalized Goan house nameplate tile'
      },
      {
        id: 'goa-exp-fado',
        title: 'Intimate Candlelit Fado Concert & Wine Evening',
        category: 'Spiritual / Folk',
        description: 'Listen to haunting fado melodies performed live by Fadistas in a 200-year-old restored Portuguese colonial salon.',
        duration: '2 Hours',
        highlight: 'Soulful Portuguese and Konkani melodies paired with local artisanal appetizers'
      }
    ]
  },

  ladakh: {
    dishes: [
      {
        id: 'lad-thukpa',
        name: 'Traditional Ladakhi Thukpa',
        description: 'Heartwarming Himalayan noodle soup simmered in rich vegetable or mutton broth with shredded seasonal greens, ginger, and wild mountain herbs.',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
        isVegetarian: true,
        dishType: 'Main Course',
        tasteProfile: 'Warm, savory, soothing, and subtly spiced with ginger',
        servingTradition: 'Eaten hot in high-altitude winters around the traditional kitchen bukhari stove'
      },
      {
        id: 'lad-momos',
        name: 'Steamed Tingmo & Momos',
        description: 'Delicate hand-pinched steamed dumplings stuffed with local yak cheese (chhurpi) or seasoned mutton, paired with fermented flower-shaped steamed bread (Tingmo).',
        image: 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=800&q=80',
        isVegetarian: true,
        dishType: 'Street Food',
        tasteProfile: 'Soft, fluffy bread with fiery chili-garlic and sesame dips',
        servingTradition: 'Everyday staple lunch across Leh cafes and monasteries'
      },
      {
        id: 'lad-gur-gur-cha',
        name: 'Butter Tea (Gur Gur Cha)',
        description: 'Traditional pink salted tea brewed with black tea leaves, churned vigorously in wooden cylinders with yak butter and rock salt.',
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
        isVegetarian: true,
        dishType: 'Beverage',
        tasteProfile: 'Creamy, salty, comforting, and deeply hydrating in dry alpine air',
        servingTradition: 'Constantly replenished by Ladakhi hosts as a gesture of enduring welcome'
      },
      {
        id: 'lad-chhurpi',
        name: 'Khambir with Chhurpi Dip',
        description: 'Thick, pan-baked fermented sourdough bread accompanied by hardened savory dried yak cheese (chhurpi) and apricot jam.',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
        isVegetarian: true,
        dishType: 'Snack',
        tasteProfile: 'Hearty, crusty sourdough with rich fermented cheese notes',
        servingTradition: 'Traditional morning breakfast of nomadic Changpa shepherds'
      }
    ],
    festivals: [
      {
        id: 'lad-hemis',
        name: 'Hemis Monastery Mask Festival',
        timing: 'June - July (Tsechu Day)',
        description: 'Commemorates Guru Padmasambhava with vibrant sacred Cham dances performed by lamas in elaborate silk brocades and fearsome wooden masks.',
        highlight: 'Sacred horn fanfares and unrolling of the two-storey embroidered silk Thangka'
      },
      {
        id: 'lad-losar',
        name: 'Losar (Tibetan New Year)',
        timing: 'December / Winter Solstice',
        description: 'Ladakhi New Year marked by butter lamps (chome) illuminating monastery rooftops, purification rituals, and Metho torch processions.',
        highlight: 'Communal visits, Ibex dough figurines, and Chang barley beer feasts'
      }
    ],
    artsAndCrafts: [
      {
        id: 'lad-thangka',
        name: 'Thangka Buddhist Silk Paintings',
        category: 'Classical Art',
        description: 'Sacred scroll paintings depicting Buddhist deities, mandalas, and spiritual cosmologies rendered in powdered mineral pigments and gold dust.',
        giTagOrOrigin: 'Tibetan-Ladakhi Spiritual Heritage'
      },
      {
        id: 'lad-pashmina',
        name: 'Ladakhi Pashmina (Lena Shawls)',
        category: 'Handicraft & Textile',
        description: 'Ultra-fine raw cashmere hand-combed from high-altitude Changthangi mountain goats grazing at 14,000 ft, hand-spun by women cooperatives.',
        giTagOrOrigin: 'GI Tagged (Ladakh Cashmere)'
      }
    ],
    attire: {
      mens: 'Goncha (thick woolen robe tied with a vibrant sash or Skerekh) worn with felt mountain boots and felt cap.',
      womens: 'Flared woolen Goncha topped with heavy turquoise and coral necklace (Kanthi) and the magnificent semi-precious Perakh headdress.',
      textiles: 'Nambu (coarse hand-woven yak/sheep wool) and pure Changthang pashmina.',
      accessories: 'Perakh (turquoise-studded wing headdress passed down through mother-to-daughter lineages).'
    },
    customs: [
      {
        title: 'Greeting with "Julley"',
        description: 'The magic word of Ladakh meaning Hello, Thank You, and Goodbye all in one sincere, smiling breath.',
        etiquetteTip: 'Always greet locals with a warm "Julley" and slight head nod.'
      },
      {
        title: 'Clockwise Circumambulation (Kora)',
        description: 'Always walk around stupas (chortens), mani stone walls, and monasteries in a clockwise direction.',
        etiquetteTip: 'Never step over sacred prayer flags or scripture books.'
      }
    ],
    experiences: [
      {
        id: 'lad-exp-monastery',
        title: 'Dawn Monastery Chanting & Butter Lamp Lighting',
        category: 'Spiritual / Folk',
        description: 'Sit quietly inside the ancient mud-brick prayer hall of Thiksey or Hemis as young novice monks chant morning sutras to deep brass horns.',
        duration: '1.5 Hours',
        highlight: 'Offer butter lamps alongside lamas in 1,000-year-old frescoed halls'
      },
      {
        id: 'lad-exp-apricot',
        title: 'Nubra Valley Apricot Orchard Walk & Jam Making',
        category: 'Culinary',
        description: 'Pick sun-sweetened Raktsey Karpo white apricots in Nubra Valley and learn the heritage sundrying technique.',
        duration: '2 Hours',
        highlight: 'Taste fresh cold-pressed apricot kernel oil and sweet preserves'
      }
    ]
  },

  'uttar-pradesh': {
    dishes: [
      {
        id: 'up-galouti-kebab',
        name: 'Lucknowi Galouti Kebab',
        description: 'Melt-in-your-mouth minced meat or lentil patties marinated with over 160 secret herbs and potli masala, perfected in the royal Awadhi kitchens of Nawab Asaf-ud-Daula.',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
        isVegetarian: false,
        dishType: 'Main Course',
        tasteProfile: 'Silky smooth, delicately smoked with charcoal and cloves',
        servingTradition: 'Served atop soft, saffron-infused Ulte Tawe Ka Paratha'
      },
      {
        id: 'up-banarasi-chaat',
        name: 'Banarasi Tamatar Chaat',
        description: 'Varanasi’s legendary hot street delicacy made with spiced mashed tomatoes, boiled potatoes, hing, ginger, topped with sugar syrup and crispy namkeen.',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
        isVegetarian: true,
        dishType: 'Street Food',
        tasteProfile: 'Piquant sweet-sour-spicy explosion served piping hot in earthen kulhads',
        servingTradition: 'Eaten right off street carts in Kashi’s bustling Godowlia chowk'
      },
      {
        id: 'up-bedmi-poori',
        name: 'Mathura Bedmi Poori & Dubki Wale Aloo',
        description: 'Crispy deep-fried whole wheat flatbreads stuffed with spiced urad dal paste, served with thin spicy potato curry and sweet pumpkin sabzi.',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
        isVegetarian: true,
        dishType: 'Main Course',
        tasteProfile: 'Hearty, robust, earthy with hing (asafoetida) and fenugreek',
        servingTradition: 'Iconic pilgrim breakfast around the temple ghats of Mathura and Vrindavan'
      },
      {
        id: 'up-makhan-malai',
        name: 'Malaiyo / Makhan Malai',
        description: 'Ethereal winter froth whipped from milk dew under open moonlit winter skies, flavored with saffron, cardamom, and chopped pistachios.',
        image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80',
        isVegetarian: true,
        dishType: 'Dessert',
        tasteProfile: 'Cloud-like, melting instantaneously on the tongue with sweet saffron essence',
        servingTradition: 'Available only in chilly winter mornings across Lucknow and Varanasi'
      }
    ],
    festivals: [
      {
        id: 'up-dev-deepawali',
        name: 'Varanasi Dev Deepawali',
        timing: 'November (Kartik Purnima)',
        description: 'The night the gods descend to bathe in the Ganga; over one million earthen diyas ignite across all 84 historic stone ghats of Kashi.',
        highlight: 'Synchronized Maha Aarti at Dashashwamedh Ghat viewed from riverboats'
      },
      {
        id: 'up-barsana-holi',
        name: 'Lathmar Holi of Barsana & Nandgaon',
        timing: 'February - March (Spring)',
        description: 'Unique mythological festival where women playfully strike men shielded with leather shields, re-enacting Krishna and Radha’s banter.',
        highlight: 'Clouds of organic herbal gulal and folk Raslila singing'
      }
    ],
    artsAndCrafts: [
      {
        id: 'up-chikankari',
        name: 'Lucknowi Chikankari Embroidery',
        category: 'Handicraft & Textile',
        description: 'Delicate hand shadow-work embroidery on fine muslin, georgette, and cotton featuring 36 distinct historic stitches like Bakhiya and Phanda.',
        giTagOrOrigin: 'GI Tagged (Lucknow, UP)'
      },
      {
        id: 'up-banarasi-silk',
        name: 'Banarasi Brocade & Zari Sarees',
        category: 'Handicraft & Textile',
        description: 'Opulent silk sarees hand-woven with pure gold and silver metallic zari threads displaying intricate Mughal jall, amru, and paisley motifs.',
        giTagOrOrigin: 'GI Tagged (Varanasi, UP)'
      },
      {
        id: 'up-kathak',
        name: 'Kathak Classical Dance (Lucknow Gharana)',
        category: 'Classical Art',
        description: 'Rhythmic storytelling classical dance characterized by rapid footwork (tatkar), pirouettes (chakkars), and subtle emotional abhinaya.',
        giTagOrOrigin: 'Classical Dance Originating from Gangetic Temple Storytellers'
      }
    ],
    attire: {
      mens: 'Lucknowi Chikan Kurta with Pajama or Dhoti, paired with a velvet Nehru jacket and traditional Kolhapuri or embroidered Mojaris.',
      womens: 'Rich Banarasi Brocade Saree or pastel Chikan Salwar Kameez adorned with Mukaish metallic speck work.',
      textiles: 'Pure Katan Silk, Organza, Muslin, and Chanderi blends.',
      accessories: 'Jhumkas, Passa (side hair brooch), and natural floral Ittar (perfume) dabbed on wrists.'
    },
    customs: [
      {
        title: 'Tehzeeb & "Pehle Aap" Courtesy',
        description: 'The famed courtly etiquette of Awadh prioritizing grace, polite speech, gentle deferral, and hospitality.',
        etiquetteTip: 'Speak with warmth and respectful phrasing like "Shukriya" and "Aadab".'
      },
      {
        title: 'Sacred Ganga Reverence',
        description: 'The river Ganga is venerated as Mother (Maa Ganga). Throwing non-biodegradable trash into the river is strictly frowned upon.',
        etiquetteTip: 'Light eco-friendly leaf diyas with marigold petals rather than synthetic materials.'
      }
    ],
    experiences: [
      {
        id: 'up-exp-boat-aarti',
        title: 'Sunrise Ganges Rowing Boat & Ghat Walking Tour',
        category: 'Spiritual / Folk',
        description: 'Glide quietly past centuries-old palatial ghats as morning sun illuminates bathers, Vedic priests chanting mantras, and temple bells.',
        duration: '2.5 Hours',
        highlight: 'Watch the sunrise paint Varanasi’s crescent riverfront in burnished gold'
      },
      {
        id: 'up-exp-chikan-trail',
        title: 'Lucknow Chikan Master Embroidery Workshop',
        category: 'Hands-on Craft',
        description: 'Visit heritage artisan clusters in Old Lucknow to learn the needlework history and practice the shadow-work stitch.',
        duration: '2 Hours',
        highlight: 'Watch master national artisans draft hand-carved wooden block patterns'
      }
    ]
  },

  'west-bengal': {
    dishes: [
      {
        id: 'wb-macher-jhol',
        name: 'Ilish / Rui Macher Jhol',
        description: 'Tender fresh hilsa or rohu fish simmered in a light golden mustard oil broth fragrant with nigella seeds (kalo jeere), green chillies, and turmeric.',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
        isVegetarian: false,
        dishType: 'Main Course',
        tasteProfile: 'Pungent, comforting, sharp mustard aroma with delicate fish sweetness',
        servingTradition: 'Poured over hot Gobindobhog fragrant rice with sliced green chillies'
      },
      {
        id: 'wb-shukto',
        name: 'Traditional Shukto',
        description: 'Complex bitter-sweet vegetable starter stew cooked with bitter gourd, raw banana, drumsticks, and bori (sun-dried lentil dumplings) in milk and ginger-radhuni paste.',
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
        isVegetarian: true,
        dishType: 'Main Course',
        tasteProfile: 'Subtle, gently bitter, cleansing, and restorative',
        servingTradition: 'Always served as the ceremonial first course of a traditional Bengali meal'
      },
      {
        id: 'wb-kathi-roll',
        name: 'Kolkata Kathi Roll',
        description: 'Crisp paratha shallow fried with egg, wrapped around marinated charcoal-grilled spiced chicken skewers, sliced red onions, green chillies, and lime juice.',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
        isVegetarian: false,
        dishType: 'Street Food',
        tasteProfile: 'Crispy, smoky, juicy, and tangy street sensation',
        servingTradition: 'Originated at Nizam’s in Kolkata in the 1930s; eaten on the go wrapped in paper'
      },
      {
        id: 'wb-mishti-doi',
        name: 'Mishti Doi & Rosogolla',
        description: 'Slow-fermented caramelized sweet curd set in rustic porous clay pots, alongside soft spongy cottage cheese spheres soaked in warm cardamom sugar syrup.',
        image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80',
        isVegetarian: true,
        dishType: 'Dessert',
        tasteProfile: 'Silky, molasses-rich, caramelized dairy delight with mild earthy clay undertones',
        servingTradition: 'Unmissable sweet finale of every Bengali family feast'
      }
    ],
    festivals: [
      {
        id: 'wb-durga-puja',
        name: 'Kolkata Durga Puja (UNESCO Cultural Heritage)',
        timing: 'September - October (Ashwin Month)',
        description: 'Spectacular city-wide public art celebration transforming Kolkata into an open-air museum with thousands of themed artisanal pandals and Dhunuchi dances.',
        highlight: 'Sindoor Khela on Dashami and hypnotic Dhak drum symphonies'
      },
      {
        id: 'wb-poush-mela',
        name: 'Shantiniketan Poush Mela',
        timing: 'Late December (Shantiniketan)',
        description: 'Commemorating Rabindranath Tagore’s university founding with wandering Baul mystic minstrels, tribal Santhal dances, and rural handicraft fairs.',
        highlight: 'Soul-stirring Baul singing with Ektara under Chhatimtala trees'
      }
    ],
    artsAndCrafts: [
      {
        id: 'wb-patachitra',
        name: 'Kalighat & Bengal Patachitra Scrolls',
        category: 'Handicraft & Textile',
        description: 'Narrative cloth scroll painting accompanied by song recitals (Pater Gaan), created by rural Patua artists using natural vegetable and rock pigments.',
        giTagOrOrigin: 'GI Tagged (Pingla, West Bengal)'
      },
      {
        id: 'wb-jamdani',
        name: 'Baluchari & Jamdani Handloom Sarees',
        category: 'Handicraft & Textile',
        description: 'Legendary silk sarees from Bishnupur featuring hand-woven pictorial vignettes from the Ramayana on the pallu without metallic zari.',
        giTagOrOrigin: 'GI Tagged (Bishnupur, WB)'
      },
      {
        id: 'wb-baul',
        name: 'Baul Mystic Folk Tradition',
        category: 'Music & Theatre',
        description: 'Philosophy and mystic poetry sung by nomadic Baul minstrels renouncing societal orthodoxies, recognized by UNESCO as Intangible Cultural Heritage.',
        giTagOrOrigin: 'UNESCO Intangible Heritage'
      }
    ],
    attire: {
      mens: 'Fine handloom Dhuti-Panjabi (cotton or tussar silk kurta paired with pleated white dhoti edged in delicate border).',
      womens: 'Lal-Paad Shada Saree (white or kora cotton saree with broad crimson red borders) or iconic Baluchari / Jamdani silks.',
      textiles: 'Tangail cotton, Dhaniakhali handloom, Tussar silk, and Kantha embroidered stoles.',
      accessories: 'Shakha-Pola (white conch shell and red lac bangles) and round red vermillion bindi.'
    },
    customs: [
      {
        title: 'The Art of "Adda" (Intellectual Conversations)',
        description: 'An informal intellectual gathering where friends debate cinema, literature, politics, and cricket over unending cups of milky cha.',
        etiquetteTip: 'Join in conversations at local neighborhood tea stalls; opinions are welcomed warmly.'
      },
      {
        title: 'Offering Sweets on Arrival & Departure',
        description: 'No guest enters or departs a Bengali home without being treated to "Misti Mukh" (sweetening the mouth).',
        etiquetteTip: 'Always accept a sweet with gracious thanks; refusing can disappoint your hosts.'
      }
    ],
    experiences: [
      {
        id: 'wb-exp-pandal',
        title: 'Kumartuli Clay Idol Sculptors Trail',
        category: 'Hands-on Craft',
        description: 'Walk through the labyrinthine alleys of Kumartuli along the Hooghly river, watching master clay sculptors shape colossal Durga idols from river silt and straw.',
        duration: '2 Hours',
        highlight: 'Watch the sacred "Chokkhu Daan" ritual of painting the goddess’s eyes'
      },
      {
        id: 'wb-exp-coffee-house',
        title: 'College Street Boi Para & Historic Coffee House Walk',
        category: 'Nature & Heritage',
        description: 'Browse the world’s largest secondhand book market stretching across a mile, followed by black coffee and cutlets at the 1942 Indian Coffee House.',
        duration: '2.5 Hours',
        highlight: 'Discover rare first-edition books and experience historic literary Adda'
      }
    ]
  }
};

// Realistic food imagery mapping based on dish characteristics
const DISH_IMAGE_PRESETS: Record<string, string[]> = {
  rice: [
    'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80'
  ],
  curry: [
    'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80'
  ],
  bread: [
    'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80'
  ],
  dessert: [
    'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80'
  ],
  beverage: [
    'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80'
  ]
};

/**
 * Universal cultural enricher guaranteeing that ANY of India's 36 States & UTs
 * gets an authentic, fully populated Local Culture & Food breakdown.
 */
export function getEnrichedCultureAndFood(region: IndiaRegion): EnrichedCultureFoodData {
  const key = region.id.toLowerCase();

  // If curated entry exists, merge with sensible defaults
  const custom = CURATED_CULTURE_FOOD[key];

  // 1. Process Dishes
  let dishes: RegionalDishItem[] = custom?.dishes || [];
  if (!dishes || dishes.length === 0) {
    const rawDishes = region.food.dishes || ['Regional Specialty Thali', 'Traditional Flatbread & Curry', 'Local Sweet'];
    dishes = rawDishes.map((dName, idx) => {
      const lower = dName.toLowerCase();
      const isNonVeg =
        lower.includes('chicken') ||
        lower.includes('mutton') ||
        lower.includes('fish') ||
        lower.includes('pork') ||
        lower.includes('prawn') ||
        lower.includes('meat') ||
        lower.includes('rogan') ||
        lower.includes('maas') ||
        lower.includes('kabab');

      let category: RegionalDishItem['dishType'] = 'Main Course';
      let img = DISH_IMAGE_PRESETS.curry[idx % DISH_IMAGE_PRESETS.curry.length];

      if (lower.includes('sweet') || lower.includes('halwa') || lower.includes('payasam') || lower.includes('kheer') || lower.includes('laddu') || lower.includes('rasgulla') || lower.includes('ghevar') || lower.includes('sandesh')) {
        category = 'Dessert';
        img = DISH_IMAGE_PRESETS.dessert[idx % DISH_IMAGE_PRESETS.dessert.length];
      } else if (lower.includes('tea') || lower.includes('kahwa') || lower.includes('lassi') || lower.includes('juice') || lower.includes('sharbat')) {
        category = 'Beverage';
        img = DISH_IMAGE_PRESETS.beverage[0];
      } else if (lower.includes('chaat') || lower.includes('kachori') || lower.includes('samosa') || lower.includes('snack') || lower.includes('vada')) {
        category = 'Street Food';
        img = DISH_IMAGE_PRESETS.bread[idx % DISH_IMAGE_PRESETS.bread.length];
      }

      return {
        id: `${region.id}-dish-${idx}`,
        name: dName,
        description: `Authentic culinary specialty of ${region.name}, prepared using indigenous spices, heirloom slow-cooking methods, and locally grown ingredients.`,
        image: img,
        isVegetarian: !isNonVeg,
        dishType: category,
        tasteProfile: isNonVeg ? 'Robust, slow-cooked spices' : 'Balanced, aromatic and wholesome',
        servingTradition: `Cherished everyday delicacy across traditional kitchens in ${region.name}`
      };
    });

    // Add beverage / dessert if available
    if (region.food.beverageOrDessert && !dishes.some(d => d.dishType === 'Beverage' || d.dishType === 'Dessert')) {
      dishes.push({
        id: `${region.id}-beverage-dessert`,
        name: region.food.beverageOrDessert.split(/[,–-]/)[0].trim(),
        description: `Signature regional delicacy of ${region.name}: ${region.food.beverageOrDessert}.`,
        image: DISH_IMAGE_PRESETS.dessert[0],
        isVegetarian: true,
        dishType: region.food.beverageOrDessert.toLowerCase().includes('tea') || region.food.beverageOrDessert.toLowerCase().includes('drink') || region.food.beverageOrDessert.toLowerCase().includes('coffee') ? 'Beverage' : 'Dessert',
        tasteProfile: 'Fragrant, comforting, and traditionally sweetened',
        servingTradition: 'Served at the conclusion of celebratory gatherings or as a hospitality welcome'
      });
    }
  }

  // 2. Process Festivals
  let festivals: FestivalItem[] = custom?.festivals || [];
  if (!festivals || festivals.length === 0) {
    const rawFests = region.culture.festivals || ['State Heritage Day', 'Spring Harvest Celebration', 'Temple Car Pageant'];
    festivals = rawFests.map((fName, idx) => ({
      id: `${region.id}-fest-${idx}`,
      name: fName,
      timing: idx === 0 ? 'Autumn / Post-Monsoon' : (idx === 1 ? 'Spring / Harvest Season' : 'Seasonal Full Moon'),
      description: `Major religious and cultural festival celebrated across ${region.name} with traditional family gatherings, sacred chants, and folk music.`,
      highlight: `Vibrant street processions, traditional attires, and community feasts`
    }));
  }

  // 3. Process Arts & Crafts
  let artsAndCrafts: ArtAndCraftItem[] = custom?.artsAndCrafts || [];
  if (!artsAndCrafts || artsAndCrafts.length === 0) {
    const rawArts = region.culture.artForms || [];
    const rawCrafts = region.culture.handicrafts || [];
    const combined: ArtAndCraftItem[] = [];

    rawArts.forEach((art, idx) => {
      combined.push({
        id: `${region.id}-art-${idx}`,
        name: art,
        category: art.toLowerCase().includes('dance') ? 'Folk Dance' : (art.toLowerCase().includes('theatre') ? 'Music & Theatre' : 'Classical Art'),
        description: `Expressive regional performing art form passed down through generations of artist lineages in ${region.name}.`,
        giTagOrOrigin: `Living Intangible Art of ${region.name}`
      });
    });

    rawCrafts.forEach((craft, idx) => {
      combined.push({
        id: `${region.id}-craft-${idx}`,
        name: craft,
        category: 'Handicraft & Textile',
        description: `Exquisite hand-crafted legacy produced by skilled artisan cooperatives using indigenous handloom or metal/wood sculpting techniques.`,
        giTagOrOrigin: `GI Tagged / Handcrafted in ${region.name}`
      });
    });

    artsAndCrafts = combined.length > 0 ? combined : [
      {
        id: `${region.id}-art-default`,
        name: `${region.name} Traditional Folk Performance`,
        category: 'Folk Dance',
        description: `Rhythmic traditional celebration dance accompanied by indigenous regional instruments.`,
        giTagOrOrigin: 'State Heritage'
      },
      {
        id: `${region.id}-craft-default`,
        name: `${region.name} Handloom Weaving`,
        category: 'Handicraft & Textile',
        description: `Indigenous cotton or silk weaving tradition known for distinct regional border patterns and natural vegetable dyes.`,
        giTagOrOrigin: 'Artisan Cooperative'
      }
    ];
  }

  // 4. Process Attire
  const attire: TraditionalAttire = custom?.attire || {
    mens: `Traditional hand-spun Kurta paired with Dhoti, Pyjama, or lungi, complemented by a regional shoulder scarf (Uttariya) or celebratory turban.`,
    womens: `Handloom Saree woven in traditional regional weaves or flared ethnic skirt-blouse adorned with cultural embroidery and border motifs.`,
    textiles: region.culture.handicrafts.slice(0, 2).join(', ') || 'Hand-spun Khadi cotton, Tussar silk, and natural vegetable dyed weaves',
    accessories: 'Traditional silver or temple gold ornaments, brass hairpins, and hand-embroidered leather juttis'
  };

  // 5. Process Customs
  const customs: LocalCustomItem[] = custom?.customs || [
    {
      title: 'Warm Hospitality & Reverent Greetings',
      description: `Guests are treated with utmost reverence embodying the national ethos of "Atithi Devo Bhava" (The guest is equivalent to God).`,
      etiquetteTip: 'Greet hosts and elders with folded palms and a gentle head bow.'
    },
    {
      title: 'Sacred Sanctuary Etiquette',
      description: `In places of worship across ${region.name}, footwear must always be removed before entering the courtyard or sanctum sanctorum.`,
      etiquetteTip: 'Wear modest clothes that cover shoulders and knees when visiting spiritual monuments.'
    },
    {
      title: 'Dining & Food Sharing Traditions',
      description: `Traditional regional meals are often shared in communal setups, emphasizing purity, gratitude to nature, and non-wastage.`,
      etiquetteTip: 'Eat primarily with your right hand when enjoying authentic traditional thalis.'
    }
  ];

  // 6. Process Experiences
  const experiences: LocalExperienceItem[] = custom?.experiences || [
    {
      id: `${region.id}-exp-culinary`,
      title: `${region.name} Authentic Flavors & Cooking Masterclass`,
      category: 'Culinary',
      description: `Join a local culinary expert in a traditional home kitchen to learn the precise art of hand-ground spice tempering and authentic dish preparation.`,
      duration: '2 to 3 Hours',
      highlight: 'Savor a warm home-cooked multi-course regional feast with your host family'
    },
    {
      id: `${region.id}-exp-craft`,
      title: `Artisans Guild Walk & Handloom Demonstration`,
      category: 'Hands-on Craft',
      description: `Visit centuries-old weaver hamlets or pottery workshops to witness the delicate rhythm of pit-looms and hand-carved woodblocks.`,
      duration: '2 Hours',
      highlight: 'Try your hands on the wooden loom and support artisans with direct purchases'
    },
    {
      id: `${region.id}-exp-folk`,
      title: `Twilight Folk Music & Sacred Aarti Gathering`,
      category: 'Spiritual / Folk',
      description: `Experience the evocative notes of traditional string instruments and community chants as dusk settles over sacred riverbanks or courtyards.`,
      duration: '1.5 Hours',
      highlight: 'Acoustic musical storytelling celebrating local folklore and spiritual ballads'
    }
  ];

  return {
    dishes,
    festivals,
    artsAndCrafts,
    attire,
    customs,
    experiences
  };
}
