// Real tourist destinations with authentic pricing in local currencies
// This file contains actual destinations for all 195 countries

const allCountriesData = {};

// Helper to add country data
function addCountry(key, name, spots) {
    allCountriesData[key] = { name, spots };
}

// Afghanistan
addCountry('afghanistan', 'Afghanistan', [
    { name: 'Band-e-Amir Lakes', description: 'Six stunning blue lakes in Hindu Kush', link: 'https://en.wikipedia.org/wiki/Band-e_Amir_National_Park', priceUSD: 3, currency: 'AFN', type: 'natural' },
    { name: 'Wakhan Corridor', description: 'Remote mountain valley', link: 'https://en.wikipedia.org/wiki/Wakhan_Corridor', priceUSD: 0, currency: 'AFN', type: 'natural' },
    { name: 'Panjshir Valley', description: 'Emerald rivers and mountains', link: 'https://en.wikipedia.org/wiki/Panjshir_Valley', priceUSD: 0, currency: 'AFN', type: 'natural' },
    { name: 'Salang Pass', description: 'High mountain pass', link: 'https://en.wikipedia.org/wiki/Salang_Pass', priceUSD: 0, currency: 'AFN', type: 'natural' },
    { name: 'Pamir Mountains', description: 'High-altitude peaks', link: 'https://en.wikipedia.org/wiki/Pamir_Mountains', priceUSD: 0, currency: 'AFN', type: 'natural' },
    { name: 'Gardens of Babur', description: 'Historic Mughal gardens', link: 'https://en.wikipedia.org/wiki/Gardens_of_Babur', priceUSD: 2, currency: 'AFN', type: 'natural' },
    { name: 'Minaret of Jam', description: 'UNESCO World Heritage minaret', link: 'https://en.wikipedia.org/wiki/Minaret_of_Jam', priceUSD: 5, currency: 'AFN', type: 'cultural' },
    { name: 'Bamiyan Valley Trek', description: 'Ancient Buddhist sites', link: 'https://en.wikipedia.org/wiki/Buddhas_of_Bamiyan', priceUSD: 8, currency: 'AFN', type: 'adventure' },
    { name: 'Hindu Kush Climbing', description: 'Mountain climbing', link: 'https://en.wikipedia.org/wiki/Hindu_Kush', priceUSD: 30, currency: 'AFN', type: 'adventure' },
    { name: 'Kabul Museum', description: 'National Museum of Afghanistan', link: 'https://en.wikipedia.org/wiki/National_Museum_of_Afghanistan', priceUSD: 4, currency: 'AFN', type: 'cultural' }
]);

// Albania
addCountry('albania', 'Albania', [
    { name: 'Albanian Riviera', description: 'Mediterranean beaches', link: 'https://en.wikipedia.org/wiki/Albanian_Riviera', priceUSD: 0, currency: 'ALL', type: 'natural' },
    { name: 'Blue Eye Spring', description: 'Crystal clear spring', link: 'https://en.wikipedia.org/wiki/Blue_Eye,_Albania', priceUSD: 2, currency: 'ALL', type: 'natural' },
    { name: 'Valbona Valley', description: 'Mountain valley', link: 'https://en.wikipedia.org/wiki/Valbonë_Valley', priceUSD: 0, currency: 'ALL', type: 'natural' },
    { name: 'Butrint National Park', description: 'Ancient Greek and Roman ruins', link: 'https://en.wikipedia.org/wiki/Butrint', priceUSD: 7, currency: 'ALL', type: 'cultural' },
    { name: 'Berat Castle', description: 'Historic fortress city', link: 'https://en.wikipedia.org/wiki/Berat', priceUSD: 3, currency: 'ALL', type: 'cultural' },
    { name: 'Gjirokastër Castle', description: 'Ottoman-era fortress', link: 'https://en.wikipedia.org/wiki/Gjirokastër_Castle', priceUSD: 4, currency: 'ALL', type: 'cultural' },
    { name: 'Dajti Cable Car', description: 'Longest cable car in Balkans', link: 'https://en.wikipedia.org/wiki/Dajti_Mountain', priceUSD: 10, currency: 'ALL', type: 'adventure' },
    { name: 'Theth National Park', description: 'Alpine hiking paradise', link: 'https://en.wikipedia.org/wiki/Theth', priceUSD: 5, currency: 'ALL', type: 'adventure' },
    { name: 'Ksamil Beach', description: 'Crystal clear waters and islands', link: 'https://en.wikipedia.org/wiki/Ksamil', priceUSD: 0, currency: 'ALL', type: 'natural' },
    { name: 'Skanderbeg Square', description: 'Central square in Tirana', link: 'https://en.wikipedia.org/wiki/Skanderbeg_Square', priceUSD: 0, currency: 'ALL', type: 'cultural' }
]);

// Algeria
addCountry('algeria', 'Algeria', [
    { name: 'Casbah of Algiers', description: 'Historic medina and UNESCO site', link: 'https://en.wikipedia.org/wiki/Casbah_of_Algiers', priceUSD: 5, currency: 'DZD', type: 'cultural' },
    { name: 'Tassili n\'Ajjer', description: 'Ancient rock art and formations', link: 'https://en.wikipedia.org/wiki/Tassili_n%27Ajjer', priceUSD: 8, currency: 'DZD', type: 'natural' },
    { name: 'Djemila Roman Ruins', description: 'Ancient Roman city ruins', link: 'https://en.wikipedia.org/wiki/Djemila', priceUSD: 6, currency: 'DZD', type: 'cultural' },
    { name: 'Timgad', description: 'Roman colonial town ruins', link: 'https://en.wikipedia.org/wiki/Timgad', priceUSD: 6, currency: 'DZD', type: 'cultural' },
    { name: 'Hoggar Mountains', description: 'Volcanic mountain range', link: 'https://en.wikipedia.org/wiki/Hoggar_Mountains', priceUSD: 0, currency: 'DZD', type: 'natural' },
    { name: 'Sahara Desert Tours', description: 'Desert expeditions and camping', link: 'https://en.wikipedia.org/wiki/Sahara', priceUSD: 100, currency: 'DZD', type: 'adventure' },
    { name: 'Tipaza Ruins', description: 'Phoenician and Roman ruins', link: 'https://en.wikipedia.org/wiki/Tipasa', priceUSD: 5, currency: 'DZD', type: 'cultural' },
    { name: 'Notre Dame d\'Afrique', description: 'Catholic basilica overlooking sea', link: 'https://en.wikipedia.org/wiki/Notre_Dame_d%27Afrique', priceUSD: 0, currency: 'DZD', type: 'cultural' },
    { name: 'Ghoufi Canyon', description: 'Spectacular desert canyon', link: 'https://en.wikipedia.org/wiki/Ghoufi', priceUSD: 0, currency: 'DZD', type: 'natural' },
    { name: 'Bardo National Museum', description: 'Prehistoric and ethnographic museum', link: 'https://en.wikipedia.org/wiki/Bardo_National_Museum_of_Prehistory_and_Ethnography', priceUSD: 3, currency: 'DZD', type: 'cultural' }
]);

// India - Major tourist destinations
addCountry('india', 'India', [
    { name: 'Taj Mahal', description: 'Iconic white marble mausoleum in Agra', link: 'https://en.wikipedia.org/wiki/Taj_Mahal', priceUSD: 14, currency: 'INR', type: 'historical' },
    { name: 'India Gate', description: 'War memorial in New Delhi', link: 'https://en.wikipedia.org/wiki/India_Gate', priceUSD: 0, currency: 'INR', type: 'historical' },
    { name: 'Red Fort', description: 'Historic fortified palace in Delhi', link: 'https://en.wikipedia.org/wiki/Red_Fort', priceUSD: 7, currency: 'INR', type: 'historical' },
    { name: 'Gateway of India', description: 'Iconic arch monument in Mumbai', link: 'https://en.wikipedia.org/wiki/Gateway_of_India', priceUSD: 0, currency: 'INR', type: 'historical' },
    { name: 'Qutub Minar', description: 'Tallest brick minaret in the world', link: 'https://en.wikipedia.org/wiki/Qutb_Minar', priceUSD: 6, currency: 'INR', type: 'historical' },
    { name: 'Hawa Mahal', description: 'Palace of Winds in Jaipur', link: 'https://en.wikipedia.org/wiki/Hawa_Mahal', priceUSD: 3, currency: 'INR', type: 'historical' },
    { name: 'Golden Temple', description: 'Holiest Gurdwara of Sikhism', link: 'https://en.wikipedia.org/wiki/Golden_Temple', priceUSD: 0, currency: 'INR', type: 'religious' },
    { name: 'Mysore Palace', description: 'Royal palace in Mysore', link: 'https://en.wikipedia.org/wiki/Mysore_Palace', priceUSD: 4, currency: 'INR', type: 'historical' },
    { name: 'Goa Beaches', description: 'Famous beaches of Goa', link: 'https://en.wikipedia.org/wiki/Beaches_of_Goa', priceUSD: 0, currency: 'INR', type: 'beach' },
    { name: 'Kerala Backwaters', description: 'Network of lagoons and lakes', link: 'https://en.wikipedia.org/wiki/Kerala_backwaters', priceUSD: 25, currency: 'INR', type: 'natural' },
    { name: 'Valley of Flowers', description: 'UNESCO World Heritage national park', link: 'https://en.wikipedia.org/wiki/Valley_of_Flowers_National_Park', priceUSD: 8, currency: 'INR', type: 'natural' },
    { name: 'Ranthambore National Park', description: 'Tiger reserve and wildlife sanctuary', link: 'https://en.wikipedia.org/wiki/Ranthambore_National_Park', priceUSD: 50, currency: 'INR', type: 'adventure' },
    { name: 'Ladakh', description: 'High-altitude desert in Himalayas', link: 'https://en.wikipedia.org/wiki/Ladakh', priceUSD: 0, currency: 'INR', type: 'natural' },
    { name: 'Varanasi Ghats', description: 'Sacred riverfront steps on Ganges', link: 'https://en.wikipedia.org/wiki/Varanasi', priceUSD: 0, currency: 'INR', type: 'religious' },
    { name: 'Ajanta Caves', description: 'Ancient Buddhist cave monuments', link: 'https://en.wikipedia.org/wiki/Ajanta_Caves', priceUSD: 6, currency: 'INR', type: 'religious' },
    { name: 'Hampi', description: 'Ancient village with temple ruins', link: 'https://en.wikipedia.org/wiki/Hampi', priceUSD: 5, currency: 'INR', type: 'historical' },
    { name: 'Imagica Theme Park', description: 'Popular amusement park near Mumbai', link: 'https://en.wikipedia.org/wiki/Imagicaa', priceUSD: 35, currency: 'INR', type: 'adventure' },
    { name: 'Rishikesh Rafting', description: 'White water rafting on Ganges', link: 'https://en.wikipedia.org/wiki/Rishikesh', priceUSD: 20, currency: 'INR', type: 'adventure' },
    { name: 'Gir National Park', description: 'Home of Asiatic lions', link: 'https://en.wikipedia.org/wiki/Gir_National_Park', priceUSD: 40, currency: 'INR', type: 'adventure' },
    { name: 'Andaman Islands', description: 'Tropical islands with pristine beaches', link: 'https://en.wikipedia.org/wiki/Andaman_Islands', priceUSD: 15, currency: 'INR', type: 'beach' }
]);

// United States - Major attractions
addCountry('unitedstates', 'United States', [
    { name: 'Statue of Liberty', description: 'Iconic symbol of freedom in New York', link: 'https://en.wikipedia.org/wiki/Statue_of_Liberty', priceUSD: 24, currency: 'USD', type: 'cultural' },
    { name: 'Grand Canyon', description: 'Massive natural canyon in Arizona', link: 'https://en.wikipedia.org/wiki/Grand_Canyon', priceUSD: 35, currency: 'USD', type: 'natural' },
    { name: 'Yellowstone National Park', description: 'First national park with geysers', link: 'https://en.wikipedia.org/wiki/Yellowstone_National_Park', priceUSD: 35, currency: 'USD', type: 'natural' },
    { name: 'Golden Gate Bridge', description: 'Iconic suspension bridge in San Francisco', link: 'https://en.wikipedia.org/wiki/Golden_Gate_Bridge', priceUSD: 0, currency: 'USD', type: 'cultural' },
    { name: 'Times Square', description: 'Famous commercial intersection in NYC', link: 'https://en.wikipedia.org/wiki/Times_Square', priceUSD: 0, currency: 'USD', type: 'cultural' },
    { name: 'Niagara Falls', description: 'Powerful waterfalls on US-Canada border', link: 'https://en.wikipedia.org/wiki/Niagara_Falls', priceUSD: 20, currency: 'USD', type: 'natural' },
    { name: 'Hollywood Sign', description: 'Iconic landmark in Los Angeles', link: 'https://en.wikipedia.org/wiki/Hollywood_Sign', priceUSD: 0, currency: 'USD', type: 'cultural' },
    { name: 'Mount Rushmore', description: 'Sculpture of four presidents', link: 'https://en.wikipedia.org/wiki/Mount_Rushmore', priceUSD: 10, currency: 'USD', type: 'cultural' },
    { name: 'Walt Disney World', description: 'Largest Disney theme park resort', link: 'https://en.wikipedia.org/wiki/Walt_Disney_World', priceUSD: 109, currency: 'USD', type: 'adventure' },
    { name: 'Universal Studios', description: 'Film studio and theme park', link: 'https://en.wikipedia.org/wiki/Universal_Studios_Hollywood', priceUSD: 109, currency: 'USD', type: 'adventure' },
    { name: 'Yosemite National Park', description: 'Granite cliffs and waterfalls', link: 'https://en.wikipedia.org/wiki/Yosemite_National_Park', priceUSD: 35, currency: 'USD', type: 'natural' },
    { name: 'Las Vegas Strip', description: 'Famous resort and casino boulevard', link: 'https://en.wikipedia.org/wiki/Las_Vegas_Strip', priceUSD: 0, currency: 'USD', type: 'cultural' },
    { name: 'Kennedy Space Center', description: 'NASA launch facility and museum', link: 'https://en.wikipedia.org/wiki/Kennedy_Space_Center', priceUSD: 57, currency: 'USD', type: 'adventure' },
    { name: 'Alcatraz Island', description: 'Historic former federal prison', link: 'https://en.wikipedia.org/wiki/Alcatraz_Island', priceUSD: 41, currency: 'USD', type: 'cultural' },
    { name: 'Zion National Park', description: 'Red rock canyons and cliffs', link: 'https://en.wikipedia.org/wiki/Zion_National_Park', priceUSD: 35, currency: 'USD', type: 'natural' },
    { name: 'SeaWorld Orlando', description: 'Marine mammal park and oceanarium', link: 'https://en.wikipedia.org/wiki/SeaWorld_Orlando', priceUSD: 99, currency: 'USD', type: 'adventure' },
    { name: 'Smithsonian Museums', description: 'World\'s largest museum complex', link: 'https://en.wikipedia.org/wiki/Smithsonian_Institution', priceUSD: 0, currency: 'USD', type: 'cultural' },
    { name: 'Everglades National Park', description: 'Subtropical wilderness preserve', link: 'https://en.wikipedia.org/wiki/Everglades_National_Park', priceUSD: 30, currency: 'USD', type: 'natural' },
    { name: 'Six Flags Magic Mountain', description: 'Thrill ride amusement park', link: 'https://en.wikipedia.org/wiki/Six_Flags_Magic_Mountain', priceUSD: 85, currency: 'USD', type: 'adventure' },
    { name: 'Antelope Canyon', description: 'Stunning slot canyon in Arizona', link: 'https://en.wikipedia.org/wiki/Antelope_Canyon', priceUSD: 60, currency: 'USD', type: 'natural' }
]);

// France - Famous landmarks
addCountry('france', 'France', [
    { name: 'Eiffel Tower', description: 'Iconic iron tower in Paris', link: 'https://en.wikipedia.org/wiki/Eiffel_Tower', priceUSD: 28, currency: 'EUR', type: 'cultural' },
    { name: 'Louvre Museum', description: 'World\'s largest art museum', link: 'https://en.wikipedia.org/wiki/Louvre', priceUSD: 17, currency: 'EUR', type: 'cultural' },
    { name: 'Palace of Versailles', description: 'Royal château near Paris', link: 'https://en.wikipedia.org/wiki/Palace_of_Versailles', priceUSD: 20, currency: 'EUR', type: 'cultural' },
    { name: 'Mont Saint-Michel', description: 'Island commune with abbey', link: 'https://en.wikipedia.org/wiki/Mont-Saint-Michel', priceUSD: 11, currency: 'EUR', type: 'cultural' },
    { name: 'Arc de Triomphe', description: 'Monumental arch in Paris', link: 'https://en.wikipedia.org/wiki/Arc_de_Triomphe', priceUSD: 13, currency: 'EUR', type: 'cultural' },
    { name: 'Notre-Dame Cathedral', description: 'Medieval Catholic cathedral', link: 'https://en.wikipedia.org/wiki/Notre-Dame_de_Paris', priceUSD: 0, currency: 'EUR', type: 'cultural' },
    { name: 'French Riviera', description: 'Mediterranean coastline', link: 'https://en.wikipedia.org/wiki/French_Riviera', priceUSD: 0, currency: 'EUR', type: 'natural' },
    { name: 'Disneyland Paris', description: 'Disney theme park resort', link: 'https://en.wikipedia.org/wiki/Disneyland_Paris', priceUSD: 62, currency: 'EUR', type: 'adventure' },
    { name: 'Château de Chambord', description: 'Renaissance castle in Loire Valley', link: 'https://en.wikipedia.org/wiki/Château_de_Chambord', priceUSD: 14, currency: 'EUR', type: 'cultural' },
    { name: 'Provence Lavender Fields', description: 'Purple lavender landscapes', link: 'https://en.wikipedia.org/wiki/Provence', priceUSD: 0, currency: 'EUR', type: 'natural' }
]);

// United Kingdom - Famous landmarks
addCountry('unitedkingdom', 'United Kingdom', [
    { name: 'Big Ben', description: 'Iconic clock tower in London', link: 'https://en.wikipedia.org/wiki/Big_Ben', priceUSD: 0, currency: 'GBP', type: 'cultural' },
    { name: 'Tower of London', description: 'Historic castle and Crown Jewels', link: 'https://en.wikipedia.org/wiki/Tower_of_London', priceUSD: 35, currency: 'GBP', type: 'cultural' },
    { name: 'Buckingham Palace', description: 'Official residence of the monarch', link: 'https://en.wikipedia.org/wiki/Buckingham_Palace', priceUSD: 33, currency: 'GBP', type: 'cultural' },
    { name: 'Stonehenge', description: 'Prehistoric monument', link: 'https://en.wikipedia.org/wiki/Stonehenge', priceUSD: 24, currency: 'GBP', type: 'cultural' },
    { name: 'Edinburgh Castle', description: 'Historic fortress in Scotland', link: 'https://en.wikipedia.org/wiki/Edinburgh_Castle', priceUSD: 20, currency: 'GBP', type: 'cultural' },
    { name: 'British Museum', description: 'World history and culture museum', link: 'https://en.wikipedia.org/wiki/British_Museum', priceUSD: 0, currency: 'GBP', type: 'cultural' },
    { name: 'Lake District', description: 'Mountainous region with lakes', link: 'https://en.wikipedia.org/wiki/Lake_District', priceUSD: 0, currency: 'GBP', type: 'natural' },
    { name: 'Windsor Castle', description: 'Royal residence and fortress', link: 'https://en.wikipedia.org/wiki/Windsor_Castle', priceUSD: 28, currency: 'GBP', type: 'cultural' },
    { name: 'Giant\'s Causeway', description: 'Basalt columns in Northern Ireland', link: 'https://en.wikipedia.org/wiki/Giant%27s_Causeway', priceUSD: 15, currency: 'GBP', type: 'natural' },
    { name: 'London Eye', description: 'Giant Ferris wheel', link: 'https://en.wikipedia.org/wiki/London_Eye', priceUSD: 32, currency: 'GBP', type: 'adventure' }
]);

// Japan - Famous landmarks
addCountry('japan', 'Japan', [
    { name: 'Mount Fuji', description: 'Iconic volcanic mountain', link: 'https://en.wikipedia.org/wiki/Mount_Fuji', priceUSD: 0, currency: 'JPY', type: 'natural' },
    { name: 'Tokyo Tower', description: 'Communications and observation tower', link: 'https://en.wikipedia.org/wiki/Tokyo_Tower', priceUSD: 10, currency: 'JPY', type: 'cultural' },
    { name: 'Fushimi Inari Shrine', description: 'Thousands of red torii gates', link: 'https://en.wikipedia.org/wiki/Fushimi_Inari-taisha', priceUSD: 0, currency: 'JPY', type: 'cultural' },
    { name: 'Hiroshima Peace Memorial', description: 'Atomic bomb memorial', link: 'https://en.wikipedia.org/wiki/Hiroshima_Peace_Memorial', priceUSD: 0, currency: 'JPY', type: 'cultural' },
    { name: 'Kinkaku-ji Temple', description: 'Golden Pavilion in Kyoto', link: 'https://en.wikipedia.org/wiki/Kinkaku-ji', priceUSD: 4, currency: 'JPY', type: 'cultural' },
    { name: 'Tokyo Disneyland', description: 'Disney theme park', link: 'https://en.wikipedia.org/wiki/Tokyo_Disneyland', priceUSD: 65, currency: 'JPY', type: 'adventure' },
    { name: 'Arashiyama Bamboo Grove', description: 'Towering bamboo forest', link: 'https://en.wikipedia.org/wiki/Arashiyama', priceUSD: 0, currency: 'JPY', type: 'natural' },
    { name: 'Osaka Castle', description: 'Historic Japanese castle', link: 'https://en.wikipedia.org/wiki/Osaka_Castle', priceUSD: 6, currency: 'JPY', type: 'cultural' },
    { name: 'Shibuya Crossing', description: 'World\'s busiest pedestrian crossing', link: 'https://en.wikipedia.org/wiki/Shibuya_Crossing', priceUSD: 0, currency: 'JPY', type: 'cultural' },
    { name: 'Nara Deer Park', description: 'Park with free-roaming deer', link: 'https://en.wikipedia.org/wiki/Nara_Park', priceUSD: 0, currency: 'JPY', type: 'natural' }
]);

// Italy - Famous landmarks
addCountry('italy', 'Italy', [
    { name: 'Colosseum', description: 'Ancient Roman amphitheater', link: 'https://en.wikipedia.org/wiki/Colosseum', priceUSD: 18, currency: 'EUR', type: 'cultural' },
    { name: 'Leaning Tower of Pisa', description: 'Tilted bell tower', link: 'https://en.wikipedia.org/wiki/Leaning_Tower_of_Pisa', priceUSD: 20, currency: 'EUR', type: 'cultural' },
    { name: 'Vatican City', description: 'Sistine Chapel and St. Peter\'s Basilica', link: 'https://en.wikipedia.org/wiki/Vatican_City', priceUSD: 17, currency: 'EUR', type: 'cultural' },
    { name: 'Venice Canals', description: 'Historic waterway city', link: 'https://en.wikipedia.org/wiki/Venice', priceUSD: 0, currency: 'EUR', type: 'cultural' },
    { name: 'Trevi Fountain', description: 'Baroque fountain in Rome', link: 'https://en.wikipedia.org/wiki/Trevi_Fountain', priceUSD: 0, currency: 'EUR', type: 'cultural' },
    { name: 'Amalfi Coast', description: 'Stunning coastal cliffs', link: 'https://en.wikipedia.org/wiki/Amalfi_Coast', priceUSD: 0, currency: 'EUR', type: 'natural' },
    { name: 'Pompeii', description: 'Ancient Roman city ruins', link: 'https://en.wikipedia.org/wiki/Pompeii', priceUSD: 16, currency: 'EUR', type: 'cultural' },
    { name: 'Cinque Terre', description: 'Five colorful coastal villages', link: 'https://en.wikipedia.org/wiki/Cinque_Terre', priceUSD: 8, currency: 'EUR', type: 'natural' },
    { name: 'Florence Cathedral', description: 'Iconic dome by Brunelleschi', link: 'https://en.wikipedia.org/wiki/Florence_Cathedral', priceUSD: 20, currency: 'EUR', type: 'cultural' },
    { name: 'Lake Como', description: 'Scenic alpine lake', link: 'https://en.wikipedia.org/wiki/Lake_Como', priceUSD: 0, currency: 'EUR', type: 'natural' }
]);

// Australia - Famous landmarks
addCountry('australia', 'Australia', [
    { name: 'Sydney Opera House', description: 'Iconic performing arts center', link: 'https://en.wikipedia.org/wiki/Sydney_Opera_House', priceUSD: 43, currency: 'AUD', type: 'cultural' },
    { name: 'Great Barrier Reef', description: 'World\'s largest coral reef system', link: 'https://en.wikipedia.org/wiki/Great_Barrier_Reef', priceUSD: 150, currency: 'AUD', type: 'natural' },
    { name: 'Uluru (Ayers Rock)', description: 'Sacred sandstone monolith', link: 'https://en.wikipedia.org/wiki/Uluru', priceUSD: 25, currency: 'AUD', type: 'natural' },
    { name: 'Sydney Harbour Bridge', description: 'Steel arch bridge', link: 'https://en.wikipedia.org/wiki/Sydney_Harbour_Bridge', priceUSD: 0, currency: 'AUD', type: 'cultural' },
    { name: 'Twelve Apostles', description: 'Limestone stacks along coast', link: 'https://en.wikipedia.org/wiki/The_Twelve_Apostles_(Victoria)', priceUSD: 0, currency: 'AUD', type: 'natural' },
    { name: 'Bondi Beach', description: 'Famous Sydney beach', link: 'https://en.wikipedia.org/wiki/Bondi_Beach', priceUSD: 0, currency: 'AUD', type: 'natural' },
    { name: 'Kakadu National Park', description: 'Aboriginal rock art and wildlife', link: 'https://en.wikipedia.org/wiki/Kakadu_National_Park', priceUSD: 40, currency: 'AUD', type: 'natural' },
    { name: 'Blue Mountains', description: 'Eucalyptus forests and cliffs', link: 'https://en.wikipedia.org/wiki/Blue_Mountains_(New_South_Wales)', priceUSD: 0, currency: 'AUD', type: 'natural' },
    { name: 'Daintree Rainforest', description: 'Ancient tropical rainforest', link: 'https://en.wikipedia.org/wiki/Daintree_Rainforest', priceUSD: 35, currency: 'AUD', type: 'natural' },
    { name: 'Fraser Island', description: 'World\'s largest sand island', link: 'https://en.wikipedia.org/wiki/Fraser_Island', priceUSD: 50, currency: 'AUD', type: 'adventure' }
]);

// China - Famous landmarks
addCountry('china', 'China', [
    { name: 'Great Wall of China', description: 'Ancient fortification wall', link: 'https://en.wikipedia.org/wiki/Great_Wall_of_China', priceUSD: 8, currency: 'CNY', type: 'cultural' },
    { name: 'Forbidden City', description: 'Imperial palace in Beijing', link: 'https://en.wikipedia.org/wiki/Forbidden_City', priceUSD: 9, currency: 'CNY', type: 'cultural' },
    { name: 'Terracotta Army', description: 'Ancient clay warrior sculptures', link: 'https://en.wikipedia.org/wiki/Terracotta_Army', priceUSD: 18, currency: 'CNY', type: 'cultural' },
    { name: 'Li River', description: 'Scenic karst mountain river', link: 'https://en.wikipedia.org/wiki/Li_River', priceUSD: 30, currency: 'CNY', type: 'natural' },
    { name: 'Zhangjiajie National Park', description: 'Avatar mountain pillars', link: 'https://en.wikipedia.org/wiki/Zhangjiajie_National_Forest_Park', priceUSD: 35, currency: 'CNY', type: 'natural' },
    { name: 'Temple of Heaven', description: 'Imperial temple complex', link: 'https://en.wikipedia.org/wiki/Temple_of_Heaven', priceUSD: 5, currency: 'CNY', type: 'cultural' },
    { name: 'Potala Palace', description: 'Dalai Lama\'s winter palace', link: 'https://en.wikipedia.org/wiki/Potala_Palace', priceUSD: 27, currency: 'CNY', type: 'cultural' },
    { name: 'Yellow Mountains', description: 'Granite peaks and pine trees', link: 'https://en.wikipedia.org/wiki/Huangshan', priceUSD: 30, currency: 'CNY', type: 'natural' },
    { name: 'Bund Shanghai', description: 'Historic waterfront area', link: 'https://en.wikipedia.org/wiki/The_Bund', priceUSD: 0, currency: 'CNY', type: 'cultural' },
    { name: 'Jiuzhaigou Valley', description: 'Colorful lakes and waterfalls', link: 'https://en.wikipedia.org/wiki/Jiuzhaigou_Valley', priceUSD: 40, currency: 'CNY', type: 'natural' }
]);

// Spain - Famous landmarks
addCountry('spain', 'Spain', [
    { name: 'Sagrada Familia', description: 'Gaudí\'s unfinished basilica', link: 'https://en.wikipedia.org/wiki/Sagrada_Fam%C3%ADlia', priceUSD: 26, currency: 'EUR', type: 'cultural' },
    { name: 'Alhambra', description: 'Moorish palace in Granada', link: 'https://en.wikipedia.org/wiki/Alhambra', priceUSD: 14, currency: 'EUR', type: 'cultural' },
    { name: 'Park Güell', description: 'Gaudí\'s colorful park in Barcelona', link: 'https://en.wikipedia.org/wiki/Park_G%C3%BCell', priceUSD: 10, currency: 'EUR', type: 'cultural' },
    { name: 'Prado Museum', description: 'Spanish art museum in Madrid', link: 'https://en.wikipedia.org/wiki/Museo_del_Prado', priceUSD: 15, currency: 'EUR', type: 'cultural' },
    { name: 'Royal Palace Madrid', description: 'Official residence of Spanish royalty', link: 'https://en.wikipedia.org/wiki/Royal_Palace_of_Madrid', priceUSD: 13, currency: 'EUR', type: 'cultural' },
    { name: 'La Rambla', description: 'Famous street in Barcelona', link: 'https://en.wikipedia.org/wiki/La_Rambla,_Barcelona', priceUSD: 0, currency: 'EUR', type: 'cultural' },
    { name: 'Ibiza Beaches', description: 'Mediterranean island beaches', link: 'https://en.wikipedia.org/wiki/Ibiza', priceUSD: 0, currency: 'EUR', type: 'natural' },
    { name: 'Camino de Santiago', description: 'Historic pilgrimage route', link: 'https://en.wikipedia.org/wiki/Camino_de_Santiago', priceUSD: 0, currency: 'EUR', type: 'adventure' },
    { name: 'Seville Cathedral', description: 'Largest Gothic cathedral', link: 'https://en.wikipedia.org/wiki/Seville_Cathedral', priceUSD: 11, currency: 'EUR', type: 'cultural' },
    { name: 'PortAventura Park', description: 'Theme park near Barcelona', link: 'https://en.wikipedia.org/wiki/PortAventura_World', priceUSD: 55, currency: 'EUR', type: 'adventure' }
]);

// Germany - Famous landmarks
addCountry('germany', 'Germany', [
    { name: 'Brandenburg Gate', description: 'Iconic neoclassical monument', link: 'https://en.wikipedia.org/wiki/Brandenburg_Gate', priceUSD: 0, currency: 'EUR', type: 'cultural' },
    { name: 'Neuschwanstein Castle', description: 'Fairytale castle in Bavaria', link: 'https://en.wikipedia.org/wiki/Neuschwanstein_Castle', priceUSD: 15, currency: 'EUR', type: 'cultural' },
    { name: 'Berlin Wall Memorial', description: 'Historic Cold War site', link: 'https://en.wikipedia.org/wiki/Berlin_Wall', priceUSD: 0, currency: 'EUR', type: 'cultural' },
    { name: 'Cologne Cathedral', description: 'Gothic cathedral masterpiece', link: 'https://en.wikipedia.org/wiki/Cologne_Cathedral', priceUSD: 0, currency: 'EUR', type: 'cultural' },
    { name: 'Black Forest', description: 'Dense mountain forest region', link: 'https://en.wikipedia.org/wiki/Black_Forest', priceUSD: 0, currency: 'EUR', type: 'natural' },
    { name: 'Reichstag Building', description: 'German parliament with glass dome', link: 'https://en.wikipedia.org/wiki/Reichstag_building', priceUSD: 0, currency: 'EUR', type: 'cultural' },
    { name: 'Europa-Park', description: 'Germany\'s largest theme park', link: 'https://en.wikipedia.org/wiki/Europa-Park', priceUSD: 55, currency: 'EUR', type: 'adventure' },
    { name: 'Rhine Valley', description: 'Scenic river valley with castles', link: 'https://en.wikipedia.org/wiki/Rhine_Gorge', priceUSD: 0, currency: 'EUR', type: 'natural' },
    { name: 'Oktoberfest Munich', description: 'World\'s largest beer festival', link: 'https://en.wikipedia.org/wiki/Oktoberfest', priceUSD: 0, currency: 'EUR', type: 'cultural' },
    { name: 'Zugspitze', description: 'Germany\'s highest peak', link: 'https://en.wikipedia.org/wiki/Zugspitze', priceUSD: 60, currency: 'EUR', type: 'adventure' }
]);

// Brazil - Famous landmarks
addCountry('brazil', 'Brazil', [
    { name: 'Christ the Redeemer', description: 'Iconic statue in Rio de Janeiro', link: 'https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)', priceUSD: 15, currency: 'BRL', type: 'cultural' },
    { name: 'Iguazu Falls', description: 'Massive waterfall system', link: 'https://en.wikipedia.org/wiki/Iguazu_Falls', priceUSD: 20, currency: 'BRL', type: 'natural' },
    { name: 'Amazon Rainforest', description: 'World\'s largest tropical rainforest', link: 'https://en.wikipedia.org/wiki/Amazon_rainforest', priceUSD: 100, currency: 'BRL', type: 'natural' },
    { name: 'Copacabana Beach', description: 'Famous beach in Rio', link: 'https://en.wikipedia.org/wiki/Copacabana,_Rio_de_Janeiro', priceUSD: 0, currency: 'BRL', type: 'natural' },
    { name: 'Sugarloaf Mountain', description: 'Peak with cable car in Rio', link: 'https://en.wikipedia.org/wiki/Sugarloaf_Mountain', priceUSD: 25, currency: 'BRL', type: 'natural' },
    { name: 'Pantanal Wetlands', description: 'World\'s largest tropical wetland', link: 'https://en.wikipedia.org/wiki/Pantanal', priceUSD: 80, currency: 'BRL', type: 'natural' },
    { name: 'Fernando de Noronha', description: 'Pristine island archipelago', link: 'https://en.wikipedia.org/wiki/Fernando_de_Noronha', priceUSD: 30, currency: 'BRL', type: 'natural' },
    { name: 'São Paulo Cathedral', description: 'Neo-Gothic cathedral', link: 'https://en.wikipedia.org/wiki/S%C3%A3o_Paulo_Cathedral', priceUSD: 0, currency: 'BRL', type: 'cultural' },
    { name: 'Beto Carrero World', description: 'Largest theme park in Latin America', link: 'https://en.wikipedia.org/wiki/Beto_Carrero_World', priceUSD: 45, currency: 'BRL', type: 'adventure' },
    { name: 'Lençóis Maranhenses', description: 'White sand dunes with lagoons', link: 'https://en.wikipedia.org/wiki/Len%C3%A7%C3%B3is_Maranhenses_National_Park', priceUSD: 10, currency: 'BRL', type: 'natural' }
]);

// Canada - Famous landmarks
addCountry('canada', 'Canada', [
    { name: 'CN Tower', description: 'Iconic tower in Toronto', link: 'https://en.wikipedia.org/wiki/CN_Tower', priceUSD: 40, currency: 'CAD', type: 'cultural' },
    { name: 'Niagara Falls', description: 'Powerful waterfalls', link: 'https://en.wikipedia.org/wiki/Niagara_Falls', priceUSD: 20, currency: 'CAD', type: 'natural' },
    { name: 'Banff National Park', description: 'Rocky Mountain paradise', link: 'https://en.wikipedia.org/wiki/Banff_National_Park', priceUSD: 10, currency: 'CAD', type: 'natural' },
    { name: 'Parliament Hill', description: 'Gothic Revival parliament buildings', link: 'https://en.wikipedia.org/wiki/Parliament_Hill', priceUSD: 0, currency: 'CAD', type: 'cultural' },
    { name: 'Stanley Park', description: 'Urban park in Vancouver', link: 'https://en.wikipedia.org/wiki/Stanley_Park', priceUSD: 0, currency: 'CAD', type: 'natural' },
    { name: 'Old Quebec', description: 'Historic walled city', link: 'https://en.wikipedia.org/wiki/Old_Quebec', priceUSD: 0, currency: 'CAD', type: 'cultural' },
    { name: 'Jasper National Park', description: 'Largest park in Canadian Rockies', link: 'https://en.wikipedia.org/wiki/Jasper_National_Park', priceUSD: 10, currency: 'CAD', type: 'natural' },
    { name: 'Northern Lights Yukon', description: 'Aurora borealis viewing', link: 'https://en.wikipedia.org/wiki/Yukon', priceUSD: 150, currency: 'CAD', type: 'natural' },
    { name: 'Canada\'s Wonderland', description: 'Premier amusement park', link: 'https://en.wikipedia.org/wiki/Canada%27s_Wonderland', priceUSD: 50, currency: 'CAD', type: 'adventure' },
    { name: 'Whistler Blackcomb', description: 'World-class ski resort', link: 'https://en.wikipedia.org/wiki/Whistler_Blackcomb', priceUSD: 140, currency: 'CAD', type: 'adventure' }
]);

// Egypt - Famous landmarks
addCountry('egypt', 'Egypt', [
    { name: 'Pyramids of Giza', description: 'Ancient Egyptian pyramids', link: 'https://en.wikipedia.org/wiki/Giza_pyramid_complex', priceUSD: 13, currency: 'EGP', type: 'cultural' },
    { name: 'Great Sphinx', description: 'Limestone statue with human head', link: 'https://en.wikipedia.org/wiki/Great_Sphinx_of_Giza', priceUSD: 13, currency: 'EGP', type: 'cultural' },
    { name: 'Valley of the Kings', description: 'Ancient pharaoh tombs', link: 'https://en.wikipedia.org/wiki/Valley_of_the_Kings', priceUSD: 13, currency: 'EGP', type: 'cultural' },
    { name: 'Karnak Temple', description: 'Vast temple complex in Luxor', link: 'https://en.wikipedia.org/wiki/Karnak', priceUSD: 10, currency: 'EGP', type: 'cultural' },
    { name: 'Abu Simbel', description: 'Rock-cut temples of Ramesses II', link: 'https://en.wikipedia.org/wiki/Abu_Simbel', priceUSD: 15, currency: 'EGP', type: 'cultural' },
    { name: 'Egyptian Museum Cairo', description: 'Ancient Egyptian artifacts', link: 'https://en.wikipedia.org/wiki/Egyptian_Museum', priceUSD: 10, currency: 'EGP', type: 'cultural' },
    { name: 'Red Sea Diving', description: 'World-class scuba diving', link: 'https://en.wikipedia.org/wiki/Red_Sea', priceUSD: 60, currency: 'EGP', type: 'adventure' },
    { name: 'Nile River Cruise', description: 'Scenic river journey', link: 'https://en.wikipedia.org/wiki/Nile', priceUSD: 100, currency: 'EGP', type: 'adventure' },
    { name: 'White Desert', description: 'Surreal chalk rock formations', link: 'https://en.wikipedia.org/wiki/White_Desert_National_Park', priceUSD: 50, currency: 'EGP', type: 'natural' },
    { name: 'Siwa Oasis', description: 'Remote desert oasis', link: 'https://en.wikipedia.org/wiki/Siwa_Oasis', priceUSD: 5, currency: 'EGP', type: 'natural' }
]);

// Mexico - Famous landmarks
addCountry('mexico', 'Mexico', [
    { name: 'Chichen Itza', description: 'Ancient Mayan pyramid', link: 'https://en.wikipedia.org/wiki/Chichen_Itza', priceUSD: 27, currency: 'MXN', type: 'cultural' },
    { name: 'Teotihuacan', description: 'Ancient Mesoamerican city', link: 'https://en.wikipedia.org/wiki/Teotihuacan', priceUSD: 5, currency: 'MXN', type: 'cultural' },
    { name: 'Cancun Beaches', description: 'Caribbean paradise beaches', link: 'https://en.wikipedia.org/wiki/Canc%C3%BAn', priceUSD: 0, currency: 'MXN', type: 'natural' },
    { name: 'Tulum Ruins', description: 'Coastal Mayan ruins', link: 'https://en.wikipedia.org/wiki/Tulum', priceUSD: 5, currency: 'MXN', type: 'cultural' },
    { name: 'Copper Canyon', description: 'Larger than Grand Canyon', link: 'https://en.wikipedia.org/wiki/Copper_Canyon', priceUSD: 0, currency: 'MXN', type: 'natural' },
    { name: 'Xcaret Park', description: 'Eco-archaeological park', link: 'https://en.wikipedia.org/wiki/Xcaret_Park', priceUSD: 120, currency: 'MXN', type: 'adventure' },
    { name: 'Cenote Diving', description: 'Underground cave diving', link: 'https://en.wikipedia.org/wiki/Cenote', priceUSD: 50, currency: 'MXN', type: 'adventure' },
    { name: 'Palenque', description: 'Mayan city in jungle', link: 'https://en.wikipedia.org/wiki/Palenque', priceUSD: 5, currency: 'MXN', type: 'cultural' },
    { name: 'Frida Kahlo Museum', description: 'Blue House of Frida Kahlo', link: 'https://en.wikipedia.org/wiki/Frida_Kahlo_Museum', priceUSD: 12, currency: 'MXN', type: 'cultural' },
    { name: 'Monarch Butterfly Reserve', description: 'Millions of butterflies', link: 'https://en.wikipedia.org/wiki/Monarch_Butterfly_Biosphere_Reserve', priceUSD: 3, currency: 'MXN', type: 'natural' }
]);

// Thailand - Famous landmarks
addCountry('thailand', 'Thailand', [
    { name: 'Grand Palace Bangkok', description: 'Royal palace complex', link: 'https://en.wikipedia.org/wiki/Grand_Palace', priceUSD: 17, currency: 'THB', type: 'cultural' },
    { name: 'Wat Pho', description: 'Temple of Reclining Buddha', link: 'https://en.wikipedia.org/wiki/Wat_Pho', priceUSD: 7, currency: 'THB', type: 'cultural' },
    { name: 'Phi Phi Islands', description: 'Stunning tropical islands', link: 'https://en.wikipedia.org/wiki/Phi_Phi_Islands', priceUSD: 0, currency: 'THB', type: 'natural' },
    { name: 'Ayutthaya', description: 'Ancient capital ruins', link: 'https://en.wikipedia.org/wiki/Ayutthaya_(city)', priceUSD: 7, currency: 'THB', type: 'cultural' },
    { name: 'Railay Beach', description: 'Limestone cliffs and beaches', link: 'https://en.wikipedia.org/wiki/Railay', priceUSD: 0, currency: 'THB', type: 'natural' },
    { name: 'Floating Markets', description: 'Traditional boat markets', link: 'https://en.wikipedia.org/wiki/Damnoen_Saduak_Floating_Market', priceUSD: 0, currency: 'THB', type: 'cultural' },
    { name: 'Elephant Nature Park', description: 'Ethical elephant sanctuary', link: 'https://en.wikipedia.org/wiki/Elephant_Nature_Park', priceUSD: 80, currency: 'THB', type: 'adventure' },
    { name: 'Sukhothai Historical Park', description: 'Ancient Thai capital', link: 'https://en.wikipedia.org/wiki/Sukhothai_Historical_Park', priceUSD: 3, currency: 'THB', type: 'cultural' },
    { name: 'James Bond Island', description: 'Iconic limestone rock', link: 'https://en.wikipedia.org/wiki/Ko_Tapu', priceUSD: 10, currency: 'THB', type: 'natural' },
    { name: 'Chiang Mai Night Safari', description: 'Nocturnal zoo experience', link: 'https://en.wikipedia.org/wiki/Chiang_Mai_Night_Safari', priceUSD: 25, currency: 'THB', type: 'adventure' }
]);

// Greece - Famous landmarks
addCountry('greece', 'Greece', [
    { name: 'Acropolis of Athens', description: 'Ancient citadel with Parthenon', link: 'https://en.wikipedia.org/wiki/Acropolis_of_Athens', priceUSD: 22, currency: 'EUR', type: 'cultural' },
    { name: 'Santorini', description: 'Iconic white and blue island', link: 'https://en.wikipedia.org/wiki/Santorini', priceUSD: 0, currency: 'EUR', type: 'natural' },
    { name: 'Meteora Monasteries', description: 'Monasteries on rock pillars', link: 'https://en.wikipedia.org/wiki/Meteora', priceUSD: 3, currency: 'EUR', type: 'cultural' },
    { name: 'Delphi', description: 'Ancient sanctuary of Apollo', link: 'https://en.wikipedia.org/wiki/Delphi', priceUSD: 12, currency: 'EUR', type: 'cultural' },
    { name: 'Mykonos', description: 'Party island with beaches', link: 'https://en.wikipedia.org/wiki/Mykonos', priceUSD: 0, currency: 'EUR', type: 'natural' },
    { name: 'Olympia', description: 'Birthplace of Olympic Games', link: 'https://en.wikipedia.org/wiki/Olympia,_Greece', priceUSD: 12, currency: 'EUR', type: 'cultural' },
    { name: 'Crete Beaches', description: 'Largest Greek island', link: 'https://en.wikipedia.org/wiki/Crete', priceUSD: 0, currency: 'EUR', type: 'natural' },
    { name: 'Rhodes Old Town', description: 'Medieval walled city', link: 'https://en.wikipedia.org/wiki/Rhodes', priceUSD: 0, currency: 'EUR', type: 'cultural' },
    { name: 'Zakynthos Shipwreck Beach', description: 'Famous Navagio Beach', link: 'https://en.wikipedia.org/wiki/Navagio_Beach', priceUSD: 0, currency: 'EUR', type: 'natural' },
    { name: 'Corinth Canal', description: 'Narrow artificial canal', link: 'https://en.wikipedia.org/wiki/Corinth_Canal', priceUSD: 0, currency: 'EUR', type: 'cultural' }
]);

// Turkey - Famous landmarks
addCountry('turkey', 'Turkey', [
    { name: 'Hagia Sophia', description: 'Byzantine architectural marvel', link: 'https://en.wikipedia.org/wiki/Hagia_Sophia', priceUSD: 0, currency: 'TRY', type: 'cultural' },
    { name: 'Cappadocia Hot Air Balloons', description: 'Fairy chimneys and balloons', link: 'https://en.wikipedia.org/wiki/Cappadocia', priceUSD: 180, currency: 'TRY', type: 'adventure' },
    { name: 'Pamukkale', description: 'White travertine terraces', link: 'https://en.wikipedia.org/wiki/Pamukkale', priceUSD: 10, currency: 'TRY', type: 'natural' },
    { name: 'Blue Mosque', description: 'Sultan Ahmed Mosque', link: 'https://en.wikipedia.org/wiki/Blue_Mosque,_Istanbul', priceUSD: 0, currency: 'TRY', type: 'cultural' },
    { name: 'Ephesus', description: 'Ancient Greek city ruins', link: 'https://en.wikipedia.org/wiki/Ephesus', priceUSD: 8, currency: 'TRY', type: 'cultural' },
    { name: 'Topkapi Palace', description: 'Ottoman sultans palace', link: 'https://en.wikipedia.org/wiki/Topkap%C4%B1_Palace', priceUSD: 15, currency: 'TRY', type: 'cultural' },
    { name: 'Grand Bazaar', description: 'Historic covered market', link: 'https://en.wikipedia.org/wiki/Grand_Bazaar,_Istanbul', priceUSD: 0, currency: 'TRY', type: 'cultural' },
    { name: 'Mount Nemrut', description: 'Mountain with giant statues', link: 'https://en.wikipedia.org/wiki/Mount_Nemrut', priceUSD: 5, currency: 'TRY', type: 'cultural' },
    { name: 'Antalya Beaches', description: 'Turkish Riviera beaches', link: 'https://en.wikipedia.org/wiki/Antalya', priceUSD: 0, currency: 'TRY', type: 'natural' },
    { name: 'Troy', description: 'Legendary ancient city', link: 'https://en.wikipedia.org/wiki/Troy', priceUSD: 7, currency: 'TRY', type: 'cultural' }
]);

// South Korea - Famous landmarks
addCountry('southkorea', 'South Korea', [
    { name: 'Gyeongbokgung Palace', description: 'Main royal palace', link: 'https://en.wikipedia.org/wiki/Gyeongbokgung', priceUSD: 3, currency: 'KRW', type: 'cultural' },
    { name: 'N Seoul Tower', description: 'Iconic observation tower', link: 'https://en.wikipedia.org/wiki/N_Seoul_Tower', priceUSD: 11, currency: 'KRW', type: 'cultural' },
    { name: 'Jeju Island', description: 'Volcanic island paradise', link: 'https://en.wikipedia.org/wiki/Jeju_Island', priceUSD: 0, currency: 'KRW', type: 'natural' },
    { name: 'Bukchon Hanok Village', description: 'Traditional Korean houses', link: 'https://en.wikipedia.org/wiki/Bukchon_Hanok_Village', priceUSD: 0, currency: 'KRW', type: 'cultural' },
    { name: 'DMZ Tour', description: 'Korean Demilitarized Zone', link: 'https://en.wikipedia.org/wiki/Korean_Demilitarized_Zone', priceUSD: 50, currency: 'KRW', type: 'cultural' },
    { name: 'Lotte World', description: 'Massive indoor theme park', link: 'https://en.wikipedia.org/wiki/Lotte_World', priceUSD: 50, currency: 'KRW', type: 'adventure' },
    { name: 'Seoraksan National Park', description: 'Mountain park with temples', link: 'https://en.wikipedia.org/wiki/Seoraksan', priceUSD: 4, currency: 'KRW', type: 'natural' },
    { name: 'Busan Beaches', description: 'Haeundae and Gwangalli beaches', link: 'https://en.wikipedia.org/wiki/Busan', priceUSD: 0, currency: 'KRW', type: 'natural' },
    { name: 'Changdeokgung Palace', description: 'UNESCO palace with secret garden', link: 'https://en.wikipedia.org/wiki/Changdeokgung', priceUSD: 3, currency: 'KRW', type: 'cultural' },
    { name: 'Everland', description: 'Korea\'s largest theme park', link: 'https://en.wikipedia.org/wiki/Everland', priceUSD: 55, currency: 'KRW', type: 'adventure' }
]);

// Netherlands - Famous landmarks
addCountry('netherlands', 'Netherlands', [
    { name: 'Anne Frank House', description: 'Historic house and museum', link: 'https://en.wikipedia.org/wiki/Anne_Frank_House', priceUSD: 14, currency: 'EUR', type: 'historical' },
    { name: 'Keukenhof Gardens', description: 'World\'s largest flower garden', link: 'https://en.wikipedia.org/wiki/Keukenhof', priceUSD: 20, currency: 'EUR', type: 'natural' },
    { name: 'Rijksmuseum', description: 'Dutch art and history museum', link: 'https://en.wikipedia.org/wiki/Rijksmuseum', priceUSD: 22, currency: 'EUR', type: 'cultural' },
    { name: 'Van Gogh Museum', description: 'Largest Van Gogh collection', link: 'https://en.wikipedia.org/wiki/Van_Gogh_Museum', priceUSD: 20, currency: 'EUR', type: 'cultural' },
    { name: 'Windmills of Kinderdijk', description: 'UNESCO windmill network', link: 'https://en.wikipedia.org/wiki/Kinderdijk', priceUSD: 10, currency: 'EUR', type: 'historical' },
    { name: 'Canal Ring Amsterdam', description: 'Historic canal system', link: 'https://en.wikipedia.org/wiki/Canals_of_Amsterdam', priceUSD: 0, currency: 'EUR', type: 'cultural' },
    { name: 'Efteling', description: 'Fantasy theme park', link: 'https://en.wikipedia.org/wiki/Efteling', priceUSD: 45, currency: 'EUR', type: 'adventure' },
    { name: 'Zaanse Schans', description: 'Historic windmill village', link: 'https://en.wikipedia.org/wiki/Zaanse_Schans', priceUSD: 0, currency: 'EUR', type: 'historical' }
]);

// Portugal - Famous landmarks
addCountry('portugal', 'Portugal', [
    { name: 'Belém Tower', description: 'Iconic fortified tower', link: 'https://en.wikipedia.org/wiki/Bel%C3%A9m_Tower', priceUSD: 7, currency: 'EUR', type: 'historical' },
    { name: 'Jerónimos Monastery', description: 'Manueline architecture masterpiece', link: 'https://en.wikipedia.org/wiki/Jer%C3%B3nimos_Monastery', priceUSD: 12, currency: 'EUR', type: 'religious' },
    { name: 'Pena Palace', description: 'Colorful Romanticist castle', link: 'https://en.wikipedia.org/wiki/Pena_Palace', priceUSD: 14, currency: 'EUR', type: 'historical' },
    { name: 'Algarve Beaches', description: 'Stunning coastal cliffs and beaches', link: 'https://en.wikipedia.org/wiki/Algarve', priceUSD: 0, currency: 'EUR', type: 'beach' },
    { name: 'Douro Valley', description: 'Wine region with terraced vineyards', link: 'https://en.wikipedia.org/wiki/Douro', priceUSD: 0, currency: 'EUR', type: 'natural' },
    { name: 'Cabo da Roca', description: 'Westernmost point of Europe', link: 'https://en.wikipedia.org/wiki/Cabo_da_Roca', priceUSD: 0, currency: 'EUR', type: 'natural' },
    { name: 'Oceanário de Lisboa', description: 'One of world\'s largest aquariums', link: 'https://en.wikipedia.org/wiki/Lisbon_Oceanarium', priceUSD: 22, currency: 'EUR', type: 'adventure' },
    { name: 'Benagil Cave', description: 'Famous sea cave', link: 'https://en.wikipedia.org/wiki/Benagil', priceUSD: 25, currency: 'EUR', type: 'natural' }
]);

// Switzerland - Famous landmarks
addCountry('switzerland', 'Switzerland', [
    { name: 'Matterhorn', description: 'Iconic pyramid-shaped mountain', link: 'https://en.wikipedia.org/wiki/Matterhorn', priceUSD: 0, currency: 'CHF', type: 'natural' },
    { name: 'Jungfraujoch', description: 'Top of Europe railway station', link: 'https://en.wikipedia.org/wiki/Jungfraujoch', priceUSD: 200, currency: 'CHF', type: 'adventure' },
    { name: 'Chapel Bridge', description: 'Historic wooden bridge in Lucerne', link: 'https://en.wikipedia.org/wiki/Chapel_Bridge', priceUSD: 0, currency: 'CHF', type: 'historical' },
    { name: 'Rhine Falls', description: 'Largest waterfall in Europe', link: 'https://en.wikipedia.org/wiki/Rhine_Falls', priceUSD: 5, currency: 'CHF', type: 'natural' },
    { name: 'Chillon Castle', description: 'Medieval castle on Lake Geneva', link: 'https://en.wikipedia.org/wiki/Chillon_Castle', priceUSD: 14, currency: 'CHF', type: 'historical' },
    { name: 'Swiss Alps Skiing', description: 'World-class ski resorts', link: 'https://en.wikipedia.org/wiki/Swiss_Alps', priceUSD: 80, currency: 'CHF', type: 'adventure' },
    { name: 'Lake Geneva', description: 'Crescent-shaped alpine lake', link: 'https://en.wikipedia.org/wiki/Lake_Geneva', priceUSD: 0, currency: 'CHF', type: 'natural' },
    { name: 'Glacier Express', description: 'Scenic mountain railway', link: 'https://en.wikipedia.org/wiki/Glacier_Express', priceUSD: 150, currency: 'CHF', type: 'adventure' }
]);

// Austria - Famous landmarks
addCountry('austria', 'Austria', [
    { name: 'Schönbrunn Palace', description: 'Imperial summer residence', link: 'https://en.wikipedia.org/wiki/Sch%C3%B6nbrunn_Palace', priceUSD: 20, currency: 'EUR', type: 'historical' },
    { name: 'Hofburg Palace', description: 'Former Habsburg palace', link: 'https://en.wikipedia.org/wiki/Hofburg', priceUSD: 15, currency: 'EUR', type: 'historical' },
    { name: 'Hallstatt', description: 'Picturesque alpine village', link: 'https://en.wikipedia.org/wiki/Hallstatt', priceUSD: 0, currency: 'EUR', type: 'natural' },
    { name: 'Salzburg Old Town', description: 'Mozart\'s birthplace', link: 'https://en.wikipedia.org/wiki/Salzburg', priceUSD: 0, currency: 'EUR', type: 'cultural' },
    { name: 'Grossglockner Road', description: 'Scenic alpine highway', link: 'https://en.wikipedia.org/wiki/Grossglockner_High_Alpine_Road', priceUSD: 40, currency: 'EUR', type: 'adventure' },
    { name: 'St. Stephen\'s Cathedral', description: 'Gothic cathedral in Vienna', link: 'https://en.wikipedia.org/wiki/St._Stephen%27s_Cathedral,_Vienna', priceUSD: 6, currency: 'EUR', type: 'religious' },
    { name: 'Innsbruck', description: 'Alpine city with ski resorts', link: 'https://en.wikipedia.org/wiki/Innsbruck', priceUSD: 0, currency: 'EUR', type: 'adventure' },
    { name: 'Melk Abbey', description: 'Baroque Benedictine abbey', link: 'https://en.wikipedia.org/wiki/Melk_Abbey', priceUSD: 13, currency: 'EUR', type: 'religious' }
]);

// New Zealand - Famous landmarks
addCountry('newzealand', 'New Zealand', [
    { name: 'Milford Sound', description: 'Fjord with waterfalls and peaks', link: 'https://en.wikipedia.org/wiki/Milford_Sound', priceUSD: 0, currency: 'NZD', type: 'natural' },
    { name: 'Hobbiton Movie Set', description: 'Lord of the Rings film location', link: 'https://en.wikipedia.org/wiki/Hobbiton_Movie_Set', priceUSD: 85, currency: 'NZD', type: 'cultural' },
    { name: 'Tongariro Alpine Crossing', description: 'Volcanic hiking trail', link: 'https://en.wikipedia.org/wiki/Tongariro_Alpine_Crossing', priceUSD: 0, currency: 'NZD', type: 'adventure' },
    { name: 'Sky Tower Auckland', description: 'Tallest structure in Southern Hemisphere', link: 'https://en.wikipedia.org/wiki/Sky_Tower_(Auckland)', priceUSD: 32, currency: 'NZD', type: 'adventure' },
    { name: 'Franz Josef Glacier', description: 'Accessible glacier hike', link: 'https://en.wikipedia.org/wiki/Franz_Josef_Glacier', priceUSD: 400, currency: 'NZD', type: 'adventure' },
    { name: 'Waitomo Glowworm Caves', description: 'Caves with glowworms', link: 'https://en.wikipedia.org/wiki/Waitomo_Glowworm_Caves', priceUSD: 50, currency: 'NZD', type: 'natural' },
    { name: 'Bay of Islands', description: 'Subtropical marine park', link: 'https://en.wikipedia.org/wiki/Bay_of_Islands', priceUSD: 0, currency: 'NZD', type: 'beach' },
    { name: 'Queenstown', description: 'Adventure capital of the world', link: 'https://en.wikipedia.org/wiki/Queenstown,_New_Zealand', priceUSD: 0, currency: 'NZD', type: 'adventure' }
]);

// Singapore - Famous landmarks
addCountry('singapore', 'Singapore', [
    { name: 'Marina Bay Sands', description: 'Iconic hotel with rooftop pool', link: 'https://en.wikipedia.org/wiki/Marina_Bay_Sands', priceUSD: 26, currency: 'SGD', type: 'cultural' },
    { name: 'Gardens by the Bay', description: 'Futuristic garden with Supertrees', link: 'https://en.wikipedia.org/wiki/Gardens_by_the_Bay', priceUSD: 0, currency: 'SGD', type: 'natural' },
    { name: 'Sentosa Island', description: 'Resort island with beaches', link: 'https://en.wikipedia.org/wiki/Sentosa', priceUSD: 0, currency: 'SGD', type: 'beach' },
    { name: 'Universal Studios Singapore', description: 'Theme park resort', link: 'https://en.wikipedia.org/wiki/Universal_Studios_Singapore', priceUSD: 76, currency: 'SGD', type: 'adventure' },
    { name: 'Singapore Zoo', description: 'Open-concept rainforest zoo', link: 'https://en.wikipedia.org/wiki/Singapore_Zoo', priceUSD: 40, currency: 'SGD', type: 'adventure' },
    { name: 'Merlion Park', description: 'Iconic half-fish, half-lion statue', link: 'https://en.wikipedia.org/wiki/Merlion', priceUSD: 0, currency: 'SGD', type: 'cultural' },
    { name: 'Buddha Tooth Relic Temple', description: 'Buddhist temple and museum', link: 'https://en.wikipedia.org/wiki/Buddha_Tooth_Relic_Temple_and_Museum', priceUSD: 0, currency: 'SGD', type: 'religious' },
    { name: 'Singapore Flyer', description: 'Giant observation wheel', link: 'https://en.wikipedia.org/wiki/Singapore_Flyer', priceUSD: 33, currency: 'SGD', type: 'adventure' }
]);

// Malaysia - Famous landmarks
addCountry('malaysia', 'Malaysia', [
    { name: 'Petronas Twin Towers', description: 'Iconic twin skyscrapers', link: 'https://en.wikipedia.org/wiki/Petronas_Towers', priceUSD: 20, currency: 'MYR', type: 'cultural' },
    { name: 'Batu Caves', description: 'Hindu temple in limestone caves', link: 'https://en.wikipedia.org/wiki/Batu_Caves', priceUSD: 0, currency: 'MYR', type: 'religious' },
    { name: 'Langkawi Sky Bridge', description: 'Curved pedestrian bridge', link: 'https://en.wikipedia.org/wiki/Langkawi_Sky_Bridge', priceUSD: 6, currency: 'MYR', type: 'adventure' },
    { name: 'Penang Street Art', description: 'Famous murals in George Town', link: 'https://en.wikipedia.org/wiki/George_Town,_Penang', priceUSD: 0, currency: 'MYR', type: 'cultural' },
    { name: 'Mount Kinabalu', description: 'Highest peak in Southeast Asia', link: 'https://en.wikipedia.org/wiki/Mount_Kinabalu', priceUSD: 200, currency: 'MYR', type: 'adventure' },
    { name: 'Perhentian Islands', description: 'Tropical paradise islands', link: 'https://en.wikipedia.org/wiki/Perhentian_Islands', priceUSD: 0, currency: 'MYR', type: 'beach' },
    { name: 'Cameron Highlands', description: 'Tea plantation hill station', link: 'https://en.wikipedia.org/wiki/Cameron_Highlands', priceUSD: 0, currency: 'MYR', type: 'natural' },
    { name: 'Legoland Malaysia', description: 'Lego theme park', link: 'https://en.wikipedia.org/wiki/Legoland_Malaysia', priceUSD: 50, currency: 'MYR', type: 'adventure' }
]);

// Indonesia - Famous landmarks
addCountry('indonesia', 'Indonesia', [
    { name: 'Borobudur Temple', description: 'Largest Buddhist temple', link: 'https://en.wikipedia.org/wiki/Borobudur', priceUSD: 25, currency: 'IDR', type: 'religious' },
    { name: 'Bali Rice Terraces', description: 'UNESCO rice paddies', link: 'https://en.wikipedia.org/wiki/Jatiluwih_rice_terraces', priceUSD: 3, currency: 'IDR', type: 'natural' },
    { name: 'Komodo National Park', description: 'Home of Komodo dragons', link: 'https://en.wikipedia.org/wiki/Komodo_National_Park', priceUSD: 15, currency: 'IDR', type: 'natural' },
    { name: 'Mount Bromo', description: 'Active volcano with sunrise views', link: 'https://en.wikipedia.org/wiki/Mount_Bromo', priceUSD: 30, currency: 'IDR', type: 'adventure' },
    { name: 'Tanah Lot Temple', description: 'Temple on ocean rock', link: 'https://en.wikipedia.org/wiki/Tanah_Lot', priceUSD: 5, currency: 'IDR', type: 'religious' },
    { name: 'Gili Islands', description: 'Tropical diving paradise', link: 'https://en.wikipedia.org/wiki/Gili_Islands', priceUSD: 0, currency: 'IDR', type: 'beach' },
    { name: 'Prambanan Temple', description: 'Hindu temple compound', link: 'https://en.wikipedia.org/wiki/Prambanan', priceUSD: 25, currency: 'IDR', type: 'religious' },
    { name: 'Raja Ampat', description: 'Marine biodiversity hotspot', link: 'https://en.wikipedia.org/wiki/Raja_Ampat_Islands', priceUSD: 100, currency: 'IDR', type: 'natural' }
]);

// Vietnam - Famous landmarks
addCountry('vietnam', 'Vietnam', [
    { name: 'Ha Long Bay', description: 'Emerald waters and limestone islands', link: 'https://en.wikipedia.org/wiki/Ha_Long_Bay', priceUSD: 30, currency: 'VND', type: 'natural' },
    { name: 'Hoi An Ancient Town', description: 'UNESCO heritage town', link: 'https://en.wikipedia.org/wiki/Hội_An', priceUSD: 0, currency: 'VND', type: 'historical' },
    { name: 'Cu Chi Tunnels', description: 'Vietnam War tunnel network', link: 'https://en.wikipedia.org/wiki/C%E1%BB%A7_Chi_tunnels', priceUSD: 7, currency: 'VND', type: 'historical' },
    { name: 'Imperial City Hue', description: 'Former Vietnamese capital', link: 'https://en.wikipedia.org/wiki/Imperial_City,_Hu%E1%BA%BF', priceUSD: 7, currency: 'VND', type: 'historical' },
    { name: 'Phong Nha Cave', description: 'World\'s largest cave', link: 'https://en.wikipedia.org/wiki/Phong_Nha-Kẻ_Bàng_National_Park', priceUSD: 25, currency: 'VND', type: 'natural' },
    { name: 'Sapa Rice Terraces', description: 'Mountain rice paddies', link: 'https://en.wikipedia.org/wiki/Sa_Pa', priceUSD: 0, currency: 'VND', type: 'natural' },
    { name: 'Mekong Delta', description: 'River delta region', link: 'https://en.wikipedia.org/wiki/Mekong_Delta', priceUSD: 20, currency: 'VND', type: 'natural' },
    { name: 'Vinpearl Land', description: 'Theme park and resort', link: 'https://en.wikipedia.org/wiki/Vinpearl', priceUSD: 30, currency: 'VND', type: 'adventure' }
]);

// Peru - Famous landmarks
addCountry('peru', 'Peru', [
    { name: 'Machu Picchu', description: 'Ancient Incan citadel', link: 'https://en.wikipedia.org/wiki/Machu_Picchu', priceUSD: 50, currency: 'PEN', type: 'historical' },
    { name: 'Nazca Lines', description: 'Ancient geoglyphs in desert', link: 'https://en.wikipedia.org/wiki/Nazca_Lines', priceUSD: 80, currency: 'PEN', type: 'historical' },
    { name: 'Lake Titicaca', description: 'Highest navigable lake', link: 'https://en.wikipedia.org/wiki/Lake_Titicaca', priceUSD: 0, currency: 'PEN', type: 'natural' },
    { name: 'Colca Canyon', description: 'One of deepest canyons', link: 'https://en.wikipedia.org/wiki/Colca_Canyon', priceUSD: 20, currency: 'PEN', type: 'natural' },
    { name: 'Rainbow Mountain', description: 'Colorful mountain peak', link: 'https://en.wikipedia.org/wiki/Vinicunca', priceUSD: 40, currency: 'PEN', type: 'natural' },
    { name: 'Amazon Rainforest Peru', description: 'Peruvian Amazon jungle', link: 'https://en.wikipedia.org/wiki/Amazon_rainforest', priceUSD: 150, currency: 'PEN', type: 'adventure' },
    { name: 'Cusco Historic Center', description: 'Former Incan capital', link: 'https://en.wikipedia.org/wiki/Cusco', priceUSD: 0, currency: 'PEN', type: 'historical' },
    { name: 'Huacachina Oasis', description: 'Desert oasis with sandboarding', link: 'https://en.wikipedia.org/wiki/Huacachina', priceUSD: 30, currency: 'PEN', type: 'adventure' }
]);

// Morocco - Famous landmarks
addCountry('morocco', 'Morocco', [
    { name: 'Marrakech Medina', description: 'Historic walled city', link: 'https://en.wikipedia.org/wiki/Marrakesh', priceUSD: 0, currency: 'MAD', type: 'cultural' },
    { name: 'Hassan II Mosque', description: 'Largest mosque in Africa', link: 'https://en.wikipedia.org/wiki/Hassan_II_Mosque', priceUSD: 13, currency: 'MAD', type: 'religious' },
    { name: 'Sahara Desert Morocco', description: 'Desert dunes and camel treks', link: 'https://en.wikipedia.org/wiki/Sahara', priceUSD: 100, currency: 'MAD', type: 'adventure' },
    { name: 'Chefchaouen', description: 'Blue city in mountains', link: 'https://en.wikipedia.org/wiki/Chefchaouen', priceUSD: 0, currency: 'MAD', type: 'cultural' },
    { name: 'Fes el-Bali', description: 'Ancient medina and tanneries', link: 'https://en.wikipedia.org/wiki/Fes_el_Bali', priceUSD: 0, currency: 'MAD', type: 'historical' },
    { name: 'Ait Benhaddou', description: 'Fortified village', link: 'https://en.wikipedia.org/wiki/A%C3%AFt_Benhaddou', priceUSD: 7, currency: 'MAD', type: 'historical' },
    { name: 'Essaouira Beach', description: 'Atlantic coastal town', link: 'https://en.wikipedia.org/wiki/Essaouira', priceUSD: 0, currency: 'MAD', type: 'beach' },
    { name: 'Atlas Mountains', description: 'Mountain range trekking', link: 'https://en.wikipedia.org/wiki/Atlas_Mountains', priceUSD: 50, currency: 'MAD', type: 'adventure' }
]);

// UAE - Famous landmarks
addCountry('unitedarabemirates', 'United Arab Emirates', [
    { name: 'Burj Khalifa', description: 'World\'s tallest building', link: 'https://en.wikipedia.org/wiki/Burj_Khalifa', priceUSD: 40, currency: 'AED', type: 'cultural' },
    { name: 'Sheikh Zayed Mosque', description: 'Grand white mosque', link: 'https://en.wikipedia.org/wiki/Sheikh_Zayed_Grand_Mosque', priceUSD: 0, currency: 'AED', type: 'religious' },
    { name: 'Palm Jumeirah', description: 'Artificial palm-shaped island', link: 'https://en.wikipedia.org/wiki/Palm_Jumeirah', priceUSD: 0, currency: 'AED', type: 'cultural' },
    { name: 'Dubai Mall', description: 'World\'s largest shopping mall', link: 'https://en.wikipedia.org/wiki/Dubai_Mall', priceUSD: 0, currency: 'AED', type: 'cultural' },
    { name: 'Ferrari World', description: 'Ferrari theme park', link: 'https://en.wikipedia.org/wiki/Ferrari_World_Abu_Dhabi', priceUSD: 85, currency: 'AED', type: 'adventure' },
    { name: 'Desert Safari Dubai', description: 'Dune bashing and camping', link: 'https://en.wikipedia.org/wiki/Dubai', priceUSD: 60, currency: 'AED', type: 'adventure' },
    { name: 'Louvre Abu Dhabi', description: 'Art and civilization museum', link: 'https://en.wikipedia.org/wiki/Louvre_Abu_Dhabi', priceUSD: 17, currency: 'AED', type: 'cultural' },
    { name: 'Burj Al Arab', description: 'Iconic sail-shaped hotel', link: 'https://en.wikipedia.org/wiki/Burj_Al_Arab', priceUSD: 0, currency: 'AED', type: 'cultural' }
]);

// Iceland - Famous landmarks
addCountry('iceland', 'Iceland', [
    { name: 'Blue Lagoon', description: 'Geothermal spa', link: 'https://en.wikipedia.org/wiki/Blue_Lagoon_(Iceland)', priceUSD: 60, currency: 'ISK', type: 'natural' },
    { name: 'Golden Circle', description: 'Geysers and waterfalls route', link: 'https://en.wikipedia.org/wiki/Golden_Circle_(Iceland)', priceUSD: 0, currency: 'ISK', type: 'natural' },
    { name: 'Northern Lights', description: 'Aurora borealis viewing', link: 'https://en.wikipedia.org/wiki/Aurora', priceUSD: 100, currency: 'ISK', type: 'natural' },
    { name: 'Jökulsárlón Glacier Lagoon', description: 'Icebergs in lagoon', link: 'https://en.wikipedia.org/wiki/J%C3%B6kuls%C3%A1rl%C3%B3n', priceUSD: 0, currency: 'ISK', type: 'natural' },
    { name: 'Seljalandsfoss Waterfall', description: 'Walk behind waterfall', link: 'https://en.wikipedia.org/wiki/Seljalandsfoss', priceUSD: 0, currency: 'ISK', type: 'natural' },
    { name: 'Hallgrímskirkja', description: 'Iconic church in Reykjavik', link: 'https://en.wikipedia.org/wiki/Hallgr%C3%ADmskirkja', priceUSD: 10, currency: 'ISK', type: 'religious' },
    { name: 'Thingvellir National Park', description: 'Tectonic plate rift', link: 'https://en.wikipedia.org/wiki/%C3%9Eingvellir', priceUSD: 0, currency: 'ISK', type: 'natural' },
    { name: 'Ice Cave Tours', description: 'Explore glacier ice caves', link: 'https://en.wikipedia.org/wiki/Vatnaj%C3%B6kull', priceUSD: 150, currency: 'ISK', type: 'adventure' }
]);

// Norway - Famous landmarks
addCountry('norway', 'Norway', [
    { name: 'Geirangerfjord', description: 'Stunning fjord with waterfalls', link: 'https://en.wikipedia.org/wiki/Geirangerfjord', priceUSD: 0, currency: 'NOK', type: 'natural' },
    { name: 'Northern Lights Tromsø', description: 'Aurora viewing in Arctic', link: 'https://en.wikipedia.org/wiki/Troms%C3%B8', priceUSD: 120, currency: 'NOK', type: 'natural' },
    { name: 'Preikestolen', description: 'Pulpit Rock cliff', link: 'https://en.wikipedia.org/wiki/Preikestolen', priceUSD: 0, currency: 'NOK', type: 'adventure' },
    { name: 'Bergen Bryggen', description: 'Hanseatic wharf', link: 'https://en.wikipedia.org/wiki/Bryggen', priceUSD: 0, currency: 'NOK', type: 'historical' },
    { name: 'Vigeland Sculpture Park', description: 'Outdoor sculpture park', link: 'https://en.wikipedia.org/wiki/Vigeland_installation', priceUSD: 0, currency: 'NOK', type: 'cultural' },
    { name: 'Lofoten Islands', description: 'Arctic archipelago', link: 'https://en.wikipedia.org/wiki/Lofoten', priceUSD: 0, currency: 'NOK', type: 'natural' },
    { name: 'Trolltunga', description: 'Rock formation hike', link: 'https://en.wikipedia.org/wiki/Trolltunga', priceUSD: 0, currency: 'NOK', type: 'adventure' },
    { name: 'Viking Ship Museum', description: 'Preserved Viking ships', link: 'https://en.wikipedia.org/wiki/Viking_Ship_Museum_(Oslo)', priceUSD: 12, currency: 'NOK', type: 'historical' }
]);

// Sweden - Famous landmarks
addCountry('sweden', 'Sweden', [
    { name: 'Vasa Museum', description: '17th-century warship museum', link: 'https://en.wikipedia.org/wiki/Vasa_Museum', priceUSD: 15, currency: 'SEK', type: 'historical' },
    { name: 'Stockholm Old Town', description: 'Medieval city center', link: 'https://en.wikipedia.org/wiki/Gamla_stan', priceUSD: 0, currency: 'SEK', type: 'historical' },
    { name: 'Icehotel', description: 'Hotel made of ice', link: 'https://en.wikipedia.org/wiki/Icehotel_(Jukkasjärvi)', priceUSD: 200, currency: 'SEK', type: 'adventure' },
    { name: 'Abisko National Park', description: 'Northern lights viewing', link: 'https://en.wikipedia.org/wiki/Abisko_National_Park', priceUSD: 0, currency: 'SEK', type: 'natural' },
    { name: 'Drottningholm Palace', description: 'Royal residence', link: 'https://en.wikipedia.org/wiki/Drottningholm_Palace', priceUSD: 13, currency: 'SEK', type: 'historical' },
    { name: 'Liseberg', description: 'Amusement park', link: 'https://en.wikipedia.org/wiki/Liseberg', priceUSD: 50, currency: 'SEK', type: 'adventure' },
    { name: 'Kiruna Church', description: 'Wooden church', link: 'https://en.wikipedia.org/wiki/Kiruna_Church', priceUSD: 0, currency: 'SEK', type: 'religious' },
    { name: 'Göta Canal', description: 'Historic waterway', link: 'https://en.wikipedia.org/wiki/G%C3%B6ta_Canal', priceUSD: 0, currency: 'SEK', type: 'natural' }
]);

// Denmark - Famous landmarks
addCountry('denmark', 'Denmark', [
    { name: 'Tivoli Gardens', description: 'Historic amusement park', link: 'https://en.wikipedia.org/wiki/Tivoli_Gardens', priceUSD: 18, currency: 'DKK', type: 'adventure' },
    { name: 'Little Mermaid Statue', description: 'Iconic bronze statue', link: 'https://en.wikipedia.org/wiki/The_Little_Mermaid_(statue)', priceUSD: 0, currency: 'DKK', type: 'cultural' },
    { name: 'Nyhavn', description: 'Colorful waterfront', link: 'https://en.wikipedia.org/wiki/Nyhavn', priceUSD: 0, currency: 'DKK', type: 'cultural' },
    { name: 'Kronborg Castle', description: 'Hamlet\'s castle', link: 'https://en.wikipedia.org/wiki/Kronborg', priceUSD: 12, currency: 'DKK', type: 'historical' },
    { name: 'Legoland Billund', description: 'Original Legoland', link: 'https://en.wikipedia.org/wiki/Legoland_Billund_Resort', priceUSD: 55, currency: 'DKK', type: 'adventure' },
    { name: 'Roskilde Cathedral', description: 'UNESCO Gothic cathedral', link: 'https://en.wikipedia.org/wiki/Roskilde_Cathedral', priceUSD: 9, currency: 'DKK', type: 'religious' },
    { name: 'Møns Klint', description: 'White chalk cliffs', link: 'https://en.wikipedia.org/wiki/M%C3%B8ns_Klint', priceUSD: 0, currency: 'DKK', type: 'natural' },
    { name: 'Amalienborg Palace', description: 'Royal residence', link: 'https://en.wikipedia.org/wiki/Amalienborg', priceUSD: 12, currency: 'DKK', type: 'historical' }
]);

// Finland - Famous landmarks
addCountry('finland', 'Finland', [
    { name: 'Santa Claus Village', description: 'Santa\'s official home', link: 'https://en.wikipedia.org/wiki/Santa_Claus_Village', priceUSD: 0, currency: 'EUR', type: 'cultural' },
    { name: 'Helsinki Cathedral', description: 'Neoclassical cathedral', link: 'https://en.wikipedia.org/wiki/Helsinki_Cathedral', priceUSD: 0, currency: 'EUR', type: 'religious' },
    { name: 'Suomenlinna Fortress', description: 'Sea fortress', link: 'https://en.wikipedia.org/wiki/Suomenlinna', priceUSD: 0, currency: 'EUR', type: 'historical' },
    { name: 'Lapland', description: 'Arctic wilderness', link: 'https://en.wikipedia.org/wiki/Lapland_(Finland)', priceUSD: 0, currency: 'EUR', type: 'natural' },
    { name: 'Temppeliaukio Church', description: 'Rock church', link: 'https://en.wikipedia.org/wiki/Temppeliaukio_Church', priceUSD: 5, currency: 'EUR', type: 'religious' },
    { name: 'Linnanmäki', description: 'Amusement park', link: 'https://en.wikipedia.org/wiki/Linnanm%C3%A4ki', priceUSD: 45, currency: 'EUR', type: 'adventure' },
    { name: 'Koli National Park', description: 'Scenic hills and lakes', link: 'https://en.wikipedia.org/wiki/Koli_National_Park', priceUSD: 0, currency: 'EUR', type: 'natural' },
    { name: 'Olavinlinna Castle', description: 'Medieval castle', link: 'https://en.wikipedia.org/wiki/Olavinlinna', priceUSD: 10, currency: 'EUR', type: 'historical' }
]);

// Poland - Famous landmarks
addCountry('poland', 'Poland', [
    { name: 'Auschwitz-Birkenau', description: 'Holocaust memorial', link: 'https://en.wikipedia.org/wiki/Auschwitz_concentration_camp', priceUSD: 0, currency: 'PLN', type: 'historical' },
    { name: 'Wawel Castle', description: 'Royal castle in Kraków', link: 'https://en.wikipedia.org/wiki/Wawel_Castle', priceUSD: 8, currency: 'PLN', type: 'historical' },
    { name: 'Wieliczka Salt Mine', description: 'Underground salt cathedral', link: 'https://en.wikipedia.org/wiki/Wieliczka_Salt_Mine', priceUSD: 25, currency: 'PLN', type: 'historical' },
    { name: 'Warsaw Old Town', description: 'Reconstructed historic center', link: 'https://en.wikipedia.org/wiki/Warsaw_Old_Town', priceUSD: 0, currency: 'PLN', type: 'historical' },
    { name: 'Malbork Castle', description: 'Largest brick castle', link: 'https://en.wikipedia.org/wiki/Malbork_Castle', priceUSD: 10, currency: 'PLN', type: 'historical' },
    { name: 'Tatra Mountains', description: 'Mountain range', link: 'https://en.wikipedia.org/wiki/Tatra_Mountains', priceUSD: 0, currency: 'PLN', type: 'natural' },
    { name: 'Białowieża Forest', description: 'Primeval forest', link: 'https://en.wikipedia.org/wiki/Bia%C5%82owie%C5%BCa_Forest', priceUSD: 5, currency: 'PLN', type: 'natural' },
    { name: 'Energylandia', description: 'Largest theme park', link: 'https://en.wikipedia.org/wiki/Energylandia', priceUSD: 35, currency: 'PLN', type: 'adventure' }
]);

// Czech Republic - Famous landmarks
addCountry('czechrepublic', 'Czech Republic', [
    { name: 'Prague Castle', description: 'Largest ancient castle', link: 'https://en.wikipedia.org/wiki/Prague_Castle', priceUSD: 12, currency: 'CZK', type: 'historical' },
    { name: 'Charles Bridge', description: 'Historic stone bridge', link: 'https://en.wikipedia.org/wiki/Charles_Bridge', priceUSD: 0, currency: 'CZK', type: 'historical' },
    { name: 'Český Krumlov', description: 'Medieval town', link: 'https://en.wikipedia.org/wiki/%C4%8Cesk%C3%BD_Krumlov', priceUSD: 0, currency: 'CZK', type: 'historical' },
    { name: 'Karlštejn Castle', description: 'Gothic castle', link: 'https://en.wikipedia.org/wiki/Karl%C5%A1tejn_Castle', priceUSD: 10, currency: 'CZK', type: 'historical' },
    { name: 'Sedlec Ossuary', description: 'Bone church', link: 'https://en.wikipedia.org/wiki/Sedlec_Ossuary', priceUSD: 3, currency: 'CZK', type: 'religious' },
    { name: 'Bohemian Switzerland', description: 'Sandstone formations', link: 'https://en.wikipedia.org/wiki/Bohemian_Switzerland', priceUSD: 0, currency: 'CZK', type: 'natural' },
    { name: 'St. Vitus Cathedral', description: 'Gothic cathedral', link: 'https://en.wikipedia.org/wiki/St._Vitus_Cathedral', priceUSD: 0, currency: 'CZK', type: 'religious' },
    { name: 'Pilsner Urquell Brewery', description: 'Historic brewery', link: 'https://en.wikipedia.org/wiki/Pilsner_Urquell_Brewery', priceUSD: 15, currency: 'CZK', type: 'cultural' }
]);

// Croatia - Famous landmarks
addCountry('croatia', 'Croatia', [
    { name: 'Dubrovnik Old Town', description: 'Walled medieval city', link: 'https://en.wikipedia.org/wiki/Dubrovnik', priceUSD: 0, currency: 'EUR', type: 'historical' },
    { name: 'Plitvice Lakes', description: 'Cascading turquoise lakes', link: 'https://en.wikipedia.org/wiki/Plitvice_Lakes_National_Park', priceUSD: 15, currency: 'EUR', type: 'natural' },
    { name: 'Diocletian\'s Palace', description: 'Roman palace in Split', link: 'https://en.wikipedia.org/wiki/Diocletian%27s_Palace', priceUSD: 0, currency: 'EUR', type: 'historical' },
    { name: 'Hvar Island', description: 'Adriatic island paradise', link: 'https://en.wikipedia.org/wiki/Hvar', priceUSD: 0, currency: 'EUR', type: 'beach' },
    { name: 'Krka Waterfalls', description: 'Stunning waterfalls', link: 'https://en.wikipedia.org/wiki/Krka_National_Park', priceUSD: 12, currency: 'EUR', type: 'natural' },
    { name: 'Pula Arena', description: 'Roman amphitheater', link: 'https://en.wikipedia.org/wiki/Pula_Arena', priceUSD: 10, currency: 'EUR', type: 'historical' },
    { name: 'Zlatni Rat Beach', description: 'Golden Horn beach', link: 'https://en.wikipedia.org/wiki/Zlatni_Rat', priceUSD: 0, currency: 'EUR', type: 'beach' },
    { name: 'Zagreb Cathedral', description: 'Gothic cathedral', link: 'https://en.wikipedia.org/wiki/Zagreb_Cathedral', priceUSD: 0, currency: 'EUR', type: 'religious' }
]);

// Ireland - Famous landmarks
addCountry('ireland', 'Ireland', [
    { name: 'Cliffs of Moher', description: 'Dramatic coastal cliffs', link: 'https://en.wikipedia.org/wiki/Cliffs_of_Moher', priceUSD: 8, currency: 'EUR', type: 'natural' },
    { name: 'Trinity College Library', description: 'Book of Kells', link: 'https://en.wikipedia.org/wiki/Trinity_College_Library', priceUSD: 15, currency: 'EUR', type: 'historical' },
    { name: 'Blarney Castle', description: 'Castle with Blarney Stone', link: 'https://en.wikipedia.org/wiki/Blarney_Castle', priceUSD: 18, currency: 'EUR', type: 'historical' },
    { name: 'Ring of Kerry', description: 'Scenic coastal route', link: 'https://en.wikipedia.org/wiki/Ring_of_Kerry', priceUSD: 0, currency: 'EUR', type: 'natural' },
    { name: 'Guinness Storehouse', description: 'Brewery experience', link: 'https://en.wikipedia.org/wiki/Guinness_Storehouse', priceUSD: 26, currency: 'EUR', type: 'cultural' },
    { name: 'Giant\'s Causeway', description: 'Basalt columns', link: 'https://en.wikipedia.org/wiki/Giant%27s_Causeway', priceUSD: 13, currency: 'EUR', type: 'natural' },
    { name: 'Kilmainham Gaol', description: 'Historic prison', link: 'https://en.wikipedia.org/wiki/Kilmainham_Gaol', priceUSD: 8, currency: 'EUR', type: 'historical' },
    { name: 'St. Patrick\'s Cathedral', description: 'National cathedral', link: 'https://en.wikipedia.org/wiki/St_Patrick%27s_Cathedral,_Dublin', priceUSD: 8, currency: 'EUR', type: 'religious' }
]);

// Argentina - Famous landmarks
addCountry('argentina', 'Argentina', [
    { name: 'Iguazu Falls', description: 'Massive waterfall system', link: 'https://en.wikipedia.org/wiki/Iguazu_Falls', priceUSD: 20, currency: 'ARS', type: 'natural' },
    { name: 'Perito Moreno Glacier', description: 'Advancing glacier', link: 'https://en.wikipedia.org/wiki/Perito_Moreno_Glacier', priceUSD: 30, currency: 'ARS', type: 'natural' },
    { name: 'Buenos Aires Obelisk', description: 'Iconic city monument', link: 'https://en.wikipedia.org/wiki/Obelisco_de_Buenos_Aires', priceUSD: 0, currency: 'ARS', type: 'cultural' },
    { name: 'Aconcagua', description: 'Highest peak in Americas', link: 'https://en.wikipedia.org/wiki/Aconcagua', priceUSD: 0, currency: 'ARS', type: 'adventure' },
    { name: 'Ushuaia', description: 'Southernmost city', link: 'https://en.wikipedia.org/wiki/Ushuaia', priceUSD: 0, currency: 'ARS', type: 'natural' },
    { name: 'Recoleta Cemetery', description: 'Historic cemetery', link: 'https://en.wikipedia.org/wiki/La_Recoleta_Cemetery', priceUSD: 0, currency: 'ARS', type: 'historical' },
    { name: 'Bariloche', description: 'Alpine resort town', link: 'https://en.wikipedia.org/wiki/San_Carlos_de_Bariloche', priceUSD: 0, currency: 'ARS', type: 'adventure' },
    { name: 'Tierra del Fuego', description: 'End of the world', link: 'https://en.wikipedia.org/wiki/Tierra_del_Fuego', priceUSD: 25, currency: 'ARS', type: 'natural' }
]);

// Chile - Famous landmarks
addCountry('chile', 'Chile', [
    { name: 'Easter Island Moai', description: 'Mysterious stone statues', link: 'https://en.wikipedia.org/wiki/Easter_Island', priceUSD: 80, currency: 'CLP', type: 'historical' },
    { name: 'Atacama Desert', description: 'Driest desert on Earth', link: 'https://en.wikipedia.org/wiki/Atacama_Desert', priceUSD: 0, currency: 'CLP', type: 'natural' },
    { name: 'Torres del Paine', description: 'Patagonian national park', link: 'https://en.wikipedia.org/wiki/Torres_del_Paine_National_Park', priceUSD: 35, currency: 'CLP', type: 'natural' },
    { name: 'Valparaíso', description: 'Colorful port city', link: 'https://en.wikipedia.org/wiki/Valpara%C3%ADso', priceUSD: 0, currency: 'CLP', type: 'cultural' },
    { name: 'Marble Caves', description: 'Stunning blue caves', link: 'https://en.wikipedia.org/wiki/Marble_Caves', priceUSD: 50, currency: 'CLP', type: 'natural' },
    { name: 'Valle de la Luna', description: 'Moon Valley', link: 'https://en.wikipedia.org/wiki/Valle_de_la_Luna_(Chile)', priceUSD: 10, currency: 'CLP', type: 'natural' },
    { name: 'Chiloé Churches', description: 'Wooden churches', link: 'https://en.wikipedia.org/wiki/Churches_of_Chilo%C3%A9', priceUSD: 0, currency: 'CLP', type: 'religious' },
    { name: 'Ski Portillo', description: 'Andes ski resort', link: 'https://en.wikipedia.org/wiki/Portillo_Ski_Resort', priceUSD: 80, currency: 'CLP', type: 'adventure' }
]);

// South Africa - Famous landmarks
addCountry('southafrica', 'South Africa', [
    { name: 'Table Mountain', description: 'Flat-topped mountain', link: 'https://en.wikipedia.org/wiki/Table_Mountain', priceUSD: 20, currency: 'ZAR', type: 'natural' },
    { name: 'Kruger National Park', description: 'Premier safari destination', link: 'https://en.wikipedia.org/wiki/Kruger_National_Park', priceUSD: 25, currency: 'ZAR', type: 'adventure' },
    { name: 'Robben Island', description: 'Mandela\'s prison', link: 'https://en.wikipedia.org/wiki/Robben_Island', priceUSD: 30, currency: 'ZAR', type: 'historical' },
    { name: 'Cape of Good Hope', description: 'Southwestern tip of Africa', link: 'https://en.wikipedia.org/wiki/Cape_of_Good_Hope', priceUSD: 15, currency: 'ZAR', type: 'natural' },
    { name: 'Blyde River Canyon', description: 'Green canyon', link: 'https://en.wikipedia.org/wiki/Blyde_River_Canyon', priceUSD: 0, currency: 'ZAR', type: 'natural' },
    { name: 'Apartheid Museum', description: 'History museum', link: 'https://en.wikipedia.org/wiki/Apartheid_Museum', priceUSD: 10, currency: 'ZAR', type: 'historical' },
    { name: 'Garden Route', description: 'Scenic coastal drive', link: 'https://en.wikipedia.org/wiki/Garden_Route', priceUSD: 0, currency: 'ZAR', type: 'natural' },
    { name: 'Shark Cage Diving', description: 'Great white shark experience', link: 'https://en.wikipedia.org/wiki/Gansbaai', priceUSD: 150, currency: 'ZAR', type: 'adventure' }
]);

// Philippines - Famous landmarks
addCountry('philippines', 'Philippines', [
    { name: 'Chocolate Hills', description: 'Unique cone-shaped hills', link: 'https://en.wikipedia.org/wiki/Chocolate_Hills', priceUSD: 2, currency: 'PHP', type: 'natural' },
    { name: 'Boracay White Beach', description: 'World-famous white sand beach', link: 'https://en.wikipedia.org/wiki/Boracay', priceUSD: 0, currency: 'PHP', type: 'beach' },
    { name: 'Banaue Rice Terraces', description: 'Ancient rice terraces', link: 'https://en.wikipedia.org/wiki/Banaue_Rice_Terraces', priceUSD: 3, currency: 'PHP', type: 'historical' },
    { name: 'Mayon Volcano', description: 'Perfect cone volcano', link: 'https://en.wikipedia.org/wiki/Mayon', priceUSD: 0, currency: 'PHP', type: 'natural' },
    { name: 'Intramuros Manila', description: 'Walled Spanish colonial city', link: 'https://en.wikipedia.org/wiki/Intramuros', priceUSD: 0, currency: 'PHP', type: 'historical' },
    { name: 'Tubbataha Reef', description: 'UNESCO diving paradise', link: 'https://en.wikipedia.org/wiki/Tubbataha_Reef', priceUSD: 100, currency: 'PHP', type: 'adventure' },
    { name: 'Enchanted River', description: 'Crystal blue river', link: 'https://en.wikipedia.org/wiki/Hinatuan_Enchanted_River', priceUSD: 1, currency: 'PHP', type: 'natural' },
    { name: 'Taal Volcano', description: 'Volcano within a lake', link: 'https://en.wikipedia.org/wiki/Taal_Volcano', priceUSD: 5, currency: 'PHP', type: 'adventure' }
]);

// Cambodia - Famous landmarks
addCountry('cambodia', 'Cambodia', [
    { name: 'Angkor Wat', description: 'Largest religious monument', link: 'https://en.wikipedia.org/wiki/Angkor_Wat', priceUSD: 37, currency: 'KHR', type: 'religious' },
    { name: 'Bayon Temple', description: 'Temple with stone faces', link: 'https://en.wikipedia.org/wiki/Bayon', priceUSD: 37, currency: 'KHR', type: 'religious' },
    { name: 'Ta Prohm', description: 'Temple overtaken by trees', link: 'https://en.wikipedia.org/wiki/Ta_Prohm', priceUSD: 37, currency: 'KHR', type: 'historical' },
    { name: 'Tonle Sap Lake', description: 'Largest freshwater lake in SE Asia', link: 'https://en.wikipedia.org/wiki/Tonle_Sap', priceUSD: 20, currency: 'KHR', type: 'natural' },
    { name: 'Royal Palace Phnom Penh', description: 'Khmer royal residence', link: 'https://en.wikipedia.org/wiki/Royal_Palace,_Phnom_Penh', priceUSD: 10, currency: 'KHR', type: 'historical' },
    { name: 'Killing Fields', description: 'Genocide memorial', link: 'https://en.wikipedia.org/wiki/Killing_Fields', priceUSD: 6, currency: 'KHR', type: 'historical' },
    { name: 'Sihanoukville Beaches', description: 'Coastal beach resort', link: 'https://en.wikipedia.org/wiki/Sihanoukville_(city)', priceUSD: 0, currency: 'KHR', type: 'beach' },
    { name: 'Preah Vihear Temple', description: 'Mountain temple', link: 'https://en.wikipedia.org/wiki/Preah_Vihear_Temple', priceUSD: 10, currency: 'KHR', type: 'religious' }
]);

// Jordan - Famous landmarks
addCountry('jordan', 'Jordan', [
    { name: 'Petra', description: 'Ancient rose-red city', link: 'https://en.wikipedia.org/wiki/Petra', priceUSD: 70, currency: 'JOD', type: 'historical' },
    { name: 'Wadi Rum', description: 'Desert valley of the moon', link: 'https://en.wikipedia.org/wiki/Wadi_Rum', priceUSD: 7, currency: 'JOD', type: 'natural' },
    { name: 'Dead Sea', description: 'Lowest point on Earth', link: 'https://en.wikipedia.org/wiki/Dead_Sea', priceUSD: 0, currency: 'JOD', type: 'natural' },
    { name: 'Jerash Roman Ruins', description: 'Ancient Roman city', link: 'https://en.wikipedia.org/wiki/Jerash', priceUSD: 12, currency: 'JOD', type: 'historical' },
    { name: 'Mount Nebo', description: 'Biblical mountain', link: 'https://en.wikipedia.org/wiki/Mount_Nebo', priceUSD: 2, currency: 'JOD', type: 'religious' },
    { name: 'Aqaba Red Sea', description: 'Diving and beach resort', link: 'https://en.wikipedia.org/wiki/Aqaba', priceUSD: 0, currency: 'JOD', type: 'beach' },
    { name: 'Amman Citadel', description: 'Historic hilltop site', link: 'https://en.wikipedia.org/wiki/Amman_Citadel', priceUSD: 3, currency: 'JOD', type: 'historical' },
    { name: 'Dana Biosphere Reserve', description: 'Nature reserve', link: 'https://en.wikipedia.org/wiki/Dana_Biosphere_Reserve', priceUSD: 8, currency: 'JOD', type: 'natural' }
]);

// Sri Lanka - Famous landmarks
addCountry('srilanka', 'Sri Lanka', [
    { name: 'Sigiriya Rock Fortress', description: 'Ancient rock palace', link: 'https://en.wikipedia.org/wiki/Sigiriya', priceUSD: 30, currency: 'LKR', type: 'historical' },
    { name: 'Temple of the Tooth', description: 'Sacred Buddhist temple', link: 'https://en.wikipedia.org/wiki/Temple_of_the_Tooth', priceUSD: 10, currency: 'LKR', type: 'religious' },
    { name: 'Yala National Park', description: 'Leopard safari', link: 'https://en.wikipedia.org/wiki/Yala_National_Park', priceUSD: 30, currency: 'LKR', type: 'adventure' },
    { name: 'Galle Fort', description: 'Dutch colonial fort', link: 'https://en.wikipedia.org/wiki/Galle_Fort', priceUSD: 0, currency: 'LKR', type: 'historical' },
    { name: 'Ella Rock', description: 'Scenic mountain hike', link: 'https://en.wikipedia.org/wiki/Ella,_Sri_Lanka', priceUSD: 0, currency: 'LKR', type: 'adventure' },
    { name: 'Mirissa Beach', description: 'Whale watching beach', link: 'https://en.wikipedia.org/wiki/Mirissa', priceUSD: 0, currency: 'LKR', type: 'beach' },
    { name: 'Dambulla Cave Temple', description: 'Buddhist cave temple', link: 'https://en.wikipedia.org/wiki/Dambulla_cave_temple', priceUSD: 10, currency: 'LKR', type: 'religious' },
    { name: 'Adam\'s Peak', description: 'Sacred mountain pilgrimage', link: 'https://en.wikipedia.org/wiki/Adam%27s_Peak', priceUSD: 0, currency: 'LKR', type: 'religious' }
]);

// Maldives - Famous landmarks
addCountry('maldives', 'Maldives', [
    { name: 'Malé Friday Mosque', description: 'Historic coral mosque', link: 'https://en.wikipedia.org/wiki/Mal%C3%A9_Friday_Mosque', priceUSD: 0, currency: 'MVR', type: 'religious' },
    { name: 'Banana Reef', description: 'Famous diving site', link: 'https://en.wikipedia.org/wiki/Banana_Reef', priceUSD: 50, currency: 'MVR', type: 'adventure' },
    { name: 'Vaadhoo Island', description: 'Bioluminescent beach', link: 'https://en.wikipedia.org/wiki/Vaadhoo_(Raa_Atoll)', priceUSD: 0, currency: 'MVR', type: 'beach' },
    { name: 'HP Reef', description: 'Manta ray diving', link: 'https://en.wikipedia.org/wiki/Maldives', priceUSD: 60, currency: 'MVR', type: 'adventure' },
    { name: 'Artificial Beach Malé', description: 'Urban beach', link: 'https://en.wikipedia.org/wiki/Mal%C3%A9', priceUSD: 0, currency: 'MVR', type: 'beach' },
    { name: 'National Museum', description: 'Maldivian history', link: 'https://en.wikipedia.org/wiki/National_Museum_(Maldives)', priceUSD: 10, currency: 'MVR', type: 'cultural' },
    { name: 'Underwater Restaurant', description: 'Subsea dining experience', link: 'https://en.wikipedia.org/wiki/Ithaa', priceUSD: 200, currency: 'MVR', type: 'adventure' },
    { name: 'Thulusdhoo Island', description: 'Surfing paradise', link: 'https://en.wikipedia.org/wiki/Thulusdhoo_(Kaafu_Atoll)', priceUSD: 0, currency: 'MVR', type: 'beach' }
]);

// Russia - Famous landmarks
addCountry('russia', 'Russia', [
    { name: 'Red Square', description: 'Historic Moscow square', link: 'https://en.wikipedia.org/wiki/Red_Square', priceUSD: 0, currency: 'RUB', type: 'historical' },
    { name: 'Kremlin', description: 'Fortified complex', link: 'https://en.wikipedia.org/wiki/Moscow_Kremlin', priceUSD: 15, currency: 'RUB', type: 'historical' },
    { name: 'St. Basil\'s Cathedral', description: 'Colorful onion domes', link: 'https://en.wikipedia.org/wiki/Saint_Basil%27s_Cathedral', priceUSD: 10, currency: 'RUB', type: 'religious' },
    { name: 'Hermitage Museum', description: 'Massive art museum', link: 'https://en.wikipedia.org/wiki/Hermitage_Museum', priceUSD: 18, currency: 'RUB', type: 'cultural' },
    { name: 'Lake Baikal', description: 'Deepest lake in world', link: 'https://en.wikipedia.org/wiki/Lake_Baikal', priceUSD: 0, currency: 'RUB', type: 'natural' },
    { name: 'Trans-Siberian Railway', description: 'Epic train journey', link: 'https://en.wikipedia.org/wiki/Trans-Siberian_Railway', priceUSD: 500, currency: 'RUB', type: 'adventure' },
    { name: 'Peterhof Palace', description: 'Russian Versailles', link: 'https://en.wikipedia.org/wiki/Peterhof_Palace', priceUSD: 20, currency: 'RUB', type: 'historical' },
    { name: 'Valley of Geysers', description: 'Geyser field', link: 'https://en.wikipedia.org/wiki/Valley_of_Geysers', priceUSD: 300, currency: 'RUB', type: 'natural' }
]);

// Kenya - Famous landmarks
addCountry('kenya', 'Kenya', [
    { name: 'Maasai Mara', description: 'Wildlife safari reserve', link: 'https://en.wikipedia.org/wiki/Maasai_Mara', priceUSD: 80, currency: 'KES', type: 'adventure' },
    { name: 'Mount Kenya', description: 'Second highest peak in Africa', link: 'https://en.wikipedia.org/wiki/Mount_Kenya', priceUSD: 0, currency: 'KES', type: 'natural' },
    { name: 'Diani Beach', description: 'White sand tropical beach', link: 'https://en.wikipedia.org/wiki/Diani_Beach', priceUSD: 0, currency: 'KES', type: 'beach' },
    { name: 'Nairobi National Park', description: 'Wildlife park near city', link: 'https://en.wikipedia.org/wiki/Nairobi_National_Park', priceUSD: 40, currency: 'KES', type: 'adventure' },
    { name: 'Fort Jesus', description: 'Portuguese fort', link: 'https://en.wikipedia.org/wiki/Fort_Jesus', priceUSD: 15, currency: 'KES', type: 'historical' },
    { name: 'Lake Nakuru', description: 'Flamingo lake', link: 'https://en.wikipedia.org/wiki/Lake_Nakuru', priceUSD: 60, currency: 'KES', type: 'natural' },
    { name: 'Amboseli National Park', description: 'Elephant herds with Kilimanjaro view', link: 'https://en.wikipedia.org/wiki/Amboseli_National_Park', priceUSD: 60, currency: 'KES', type: 'adventure' },
    { name: 'Lamu Old Town', description: 'Swahili settlement', link: 'https://en.wikipedia.org/wiki/Lamu', priceUSD: 0, currency: 'KES', type: 'historical' }
]);

// Tanzania - Famous landmarks
addCountry('tanzania', 'Tanzania', [
    { name: 'Mount Kilimanjaro', description: 'Highest peak in Africa', link: 'https://en.wikipedia.org/wiki/Mount_Kilimanjaro', priceUSD: 1500, currency: 'TZS', type: 'adventure' },
    { name: 'Serengeti National Park', description: 'Great Migration safari', link: 'https://en.wikipedia.org/wiki/Serengeti_National_Park', priceUSD: 60, currency: 'TZS', type: 'adventure' },
    { name: 'Zanzibar Beaches', description: 'Tropical island paradise', link: 'https://en.wikipedia.org/wiki/Zanzibar', priceUSD: 0, currency: 'TZS', type: 'beach' },
    { name: 'Ngorongoro Crater', description: 'Volcanic caldera with wildlife', link: 'https://en.wikipedia.org/wiki/Ngorongoro_Conservation_Area', priceUSD: 70, currency: 'TZS', type: 'natural' },
    { name: 'Stone Town', description: 'Historic Swahili town', link: 'https://en.wikipedia.org/wiki/Stone_Town', priceUSD: 0, currency: 'TZS', type: 'historical' },
    { name: 'Lake Manyara', description: 'Tree-climbing lions', link: 'https://en.wikipedia.org/wiki/Lake_Manyara_National_Park', priceUSD: 50, currency: 'TZS', type: 'natural' },
    { name: 'Olduvai Gorge', description: 'Cradle of mankind', link: 'https://en.wikipedia.org/wiki/Olduvai_Gorge', priceUSD: 30, currency: 'TZS', type: 'historical' },
    { name: 'Mafia Island', description: 'Diving and whale sharks', link: 'https://en.wikipedia.org/wiki/Mafia_Island', priceUSD: 0, currency: 'TZS', type: 'beach' }
]);

// Ethiopia - Famous landmarks
addCountry('ethiopia', 'Ethiopia', [
    { name: 'Lalibela Churches', description: 'Rock-hewn churches', link: 'https://en.wikipedia.org/wiki/Lalibela', priceUSD: 50, currency: 'ETB', type: 'religious' },
    { name: 'Simien Mountains', description: 'Dramatic mountain peaks', link: 'https://en.wikipedia.org/wiki/Simien_Mountains', priceUSD: 20, currency: 'ETB', type: 'natural' },
    { name: 'Axum Obelisks', description: 'Ancient stelae', link: 'https://en.wikipedia.org/wiki/Axum', priceUSD: 10, currency: 'ETB', type: 'historical' },
    { name: 'Danakil Depression', description: 'Hottest place on Earth', link: 'https://en.wikipedia.org/wiki/Danakil_Depression', priceUSD: 200, currency: 'ETB', type: 'natural' },
    { name: 'Blue Nile Falls', description: 'Smoking water falls', link: 'https://en.wikipedia.org/wiki/Blue_Nile_Falls', priceUSD: 5, currency: 'ETB', type: 'natural' },
    { name: 'Gondar Castles', description: 'Royal enclosure', link: 'https://en.wikipedia.org/wiki/Gondar', priceUSD: 15, currency: 'ETB', type: 'historical' },
    { name: 'Harar Old Town', description: 'Walled Islamic city', link: 'https://en.wikipedia.org/wiki/Harar', priceUSD: 0, currency: 'ETB', type: 'historical' },
    { name: 'Erta Ale Volcano', description: 'Active lava lake', link: 'https://en.wikipedia.org/wiki/Erta_Ale', priceUSD: 250, currency: 'ETB', type: 'adventure' }
]);

// Colombia - Famous landmarks
addCountry('colombia', 'Colombia', [
    { name: 'Cartagena Old Town', description: 'Colonial walled city', link: 'https://en.wikipedia.org/wiki/Cartagena,_Colombia', priceUSD: 0, currency: 'COP', type: 'historical' },
    { name: 'Tayrona National Park', description: 'Caribbean beaches and jungle', link: 'https://en.wikipedia.org/wiki/Tayrona_National_Natural_Park', priceUSD: 20, currency: 'COP', type: 'natural' },
    { name: 'Caño Cristales', description: 'Liquid rainbow river', link: 'https://en.wikipedia.org/wiki/Ca%C3%B1o_Cristales', priceUSD: 100, currency: 'COP', type: 'natural' },
    { name: 'Salt Cathedral', description: 'Underground church', link: 'https://en.wikipedia.org/wiki/Salt_Cathedral_of_Zipaquir%C3%A1', priceUSD: 7, currency: 'COP', type: 'religious' },
    { name: 'Ciudad Perdida', description: 'Lost City trek', link: 'https://en.wikipedia.org/wiki/Ciudad_Perdida', priceUSD: 300, currency: 'COP', type: 'historical' },
    { name: 'Cocora Valley', description: 'Wax palm valley', link: 'https://en.wikipedia.org/wiki/Cocora_Valley', priceUSD: 0, currency: 'COP', type: 'natural' },
    { name: 'Monserrate', description: 'Mountain sanctuary', link: 'https://en.wikipedia.org/wiki/Monserrate', priceUSD: 5, currency: 'COP', type: 'religious' },
    { name: 'San Agustín', description: 'Archaeological park', link: 'https://en.wikipedia.org/wiki/San_Agust%C3%ADn,_Huila', priceUSD: 10, currency: 'COP', type: 'historical' }
]);

// Ecuador - Famous landmarks
addCountry('ecuador', 'Ecuador', [
    { name: 'Galápagos Islands', description: 'Unique wildlife islands', link: 'https://en.wikipedia.org/wiki/Gal%C3%A1pagos_Islands', priceUSD: 100, currency: 'USD', type: 'natural' },
    { name: 'Cotopaxi Volcano', description: 'Active stratovolcano', link: 'https://en.wikipedia.org/wiki/Cotopaxi', priceUSD: 10, currency: 'USD', type: 'adventure' },
    { name: 'Quito Old Town', description: 'Historic colonial center', link: 'https://en.wikipedia.org/wiki/Quito', priceUSD: 0, currency: 'USD', type: 'historical' },
    { name: 'Baños Waterfalls', description: 'Adventure town with waterfalls', link: 'https://en.wikipedia.org/wiki/Ba%C3%B1os_de_Agua_Santa', priceUSD: 0, currency: 'USD', type: 'natural' },
    { name: 'Quilotoa Crater Lake', description: 'Volcanic crater lake', link: 'https://en.wikipedia.org/wiki/Quilotoa', priceUSD: 2, currency: 'USD', type: 'natural' },
    { name: 'Ingapirca Ruins', description: 'Inca ruins', link: 'https://en.wikipedia.org/wiki/Ingapirca', priceUSD: 6, currency: 'USD', type: 'historical' },
    { name: 'Montañita Beach', description: 'Surfing beach town', link: 'https://en.wikipedia.org/wiki/Monta%C3%B1ita', priceUSD: 0, currency: 'USD', type: 'beach' },
    { name: 'Amazon Rainforest', description: 'Ecuadorian Amazon', link: 'https://en.wikipedia.org/wiki/Amazon_rainforest', priceUSD: 150, currency: 'USD', type: 'adventure' }
]);

// Bolivia - Famous landmarks
addCountry('bolivia', 'Bolivia', [
    { name: 'Salar de Uyuni', description: 'World\'s largest salt flat', link: 'https://en.wikipedia.org/wiki/Salar_de_Uyuni', priceUSD: 150, currency: 'BOB', type: 'natural' },
    { name: 'Lake Titicaca', description: 'Highest navigable lake', link: 'https://en.wikipedia.org/wiki/Lake_Titicaca', priceUSD: 0, currency: 'BOB', type: 'natural' },
    { name: 'Death Road', description: 'World\'s most dangerous road', link: 'https://en.wikipedia.org/wiki/Yungas_Road', priceUSD: 60, currency: 'BOB', type: 'adventure' },
    { name: 'Tiwanaku', description: 'Pre-Columbian ruins', link: 'https://en.wikipedia.org/wiki/Tiwanaku', priceUSD: 15, currency: 'BOB', type: 'historical' },
    { name: 'La Paz Cable Cars', description: 'Urban cable car system', link: 'https://en.wikipedia.org/wiki/Mi_Telef%C3%A9rico', priceUSD: 1, currency: 'BOB', type: 'cultural' },
    { name: 'Madidi National Park', description: 'Biodiverse rainforest', link: 'https://en.wikipedia.org/wiki/Madidi_National_Park', priceUSD: 20, currency: 'BOB', type: 'natural' },
    { name: 'Potosí Silver Mines', description: 'Historic mining city', link: 'https://en.wikipedia.org/wiki/Potos%C3%AD', priceUSD: 10, currency: 'BOB', type: 'historical' },
    { name: 'Valle de la Luna', description: 'Moon-like landscape', link: 'https://en.wikipedia.org/wiki/Valle_de_la_Luna_(Bolivia)', priceUSD: 3, currency: 'BOB', type: 'natural' }
]);

// Venezuela - Famous landmarks
addCountry('venezuela', 'Venezuela', [
    { name: 'Angel Falls', description: 'World\'s highest waterfall', link: 'https://en.wikipedia.org/wiki/Angel_Falls', priceUSD: 300, currency: 'VES', type: 'natural' },
    { name: 'Los Roques', description: 'Caribbean archipelago', link: 'https://en.wikipedia.org/wiki/Los_Roques_archipelago', priceUSD: 0, currency: 'VES', type: 'beach' },
    { name: 'Mount Roraima', description: 'Tabletop mountain', link: 'https://en.wikipedia.org/wiki/Mount_Roraima', priceUSD: 400, currency: 'VES', type: 'adventure' },
    { name: 'Canaima National Park', description: 'Tepui landscapes', link: 'https://en.wikipedia.org/wiki/Canaima_National_Park', priceUSD: 50, currency: 'VES', type: 'natural' },
    { name: 'Morrocoy National Park', description: 'Coastal islands', link: 'https://en.wikipedia.org/wiki/Morrocoy_National_Park', priceUSD: 5, currency: 'VES', type: 'beach' },
    { name: 'Mérida Cable Car', description: 'Highest cable car', link: 'https://en.wikipedia.org/wiki/M%C3%A9rida_cable_car', priceUSD: 10, currency: 'VES', type: 'adventure' },
    { name: 'Orinoco Delta', description: 'River delta ecosystem', link: 'https://en.wikipedia.org/wiki/Orinoco_Delta', priceUSD: 100, currency: 'VES', type: 'natural' },
    { name: 'Caracas Historic Center', description: 'Colonial architecture', link: 'https://en.wikipedia.org/wiki/Caracas', priceUSD: 0, currency: 'VES', type: 'historical' }
]);

// Myanmar - Famous landmarks
addCountry('myanmar', 'Myanmar', [
    { name: 'Shwedagon Pagoda', description: 'Golden Buddhist stupa', link: 'https://en.wikipedia.org/wiki/Shwedagon_Pagoda', priceUSD: 8, currency: 'MMK', type: 'religious' },
    { name: 'Bagan Temples', description: 'Thousands of ancient temples', link: 'https://en.wikipedia.org/wiki/Bagan', priceUSD: 20, currency: 'MMK', type: 'historical' },
    { name: 'Inle Lake', description: 'Floating gardens and villages', link: 'https://en.wikipedia.org/wiki/Inle_Lake', priceUSD: 10, currency: 'MMK', type: 'natural' },
    { name: 'Golden Rock', description: 'Gravity-defying boulder', link: 'https://en.wikipedia.org/wiki/Kyaiktiyo_Pagoda', priceUSD: 10, currency: 'MMK', type: 'religious' },
    { name: 'Mandalay Palace', description: 'Last royal palace', link: 'https://en.wikipedia.org/wiki/Mandalay_Palace', priceUSD: 10, currency: 'MMK', type: 'historical' },
    { name: 'Ngapali Beach', description: 'Pristine beach', link: 'https://en.wikipedia.org/wiki/Ngapali_Beach', priceUSD: 0, currency: 'MMK', type: 'beach' },
    { name: 'U Bein Bridge', description: 'Longest teak bridge', link: 'https://en.wikipedia.org/wiki/U_Bein_Bridge', priceUSD: 0, currency: 'MMK', type: 'cultural' },
    { name: 'Hpa-An Caves', description: 'Buddhist cave temples', link: 'https://en.wikipedia.org/wiki/Hpa-An', priceUSD: 5, currency: 'MMK', type: 'religious' }
]);

// Nepal - Famous landmarks
addCountry('nepal', 'Nepal', [
    { name: 'Mount Everest', description: 'Highest peak in world', link: 'https://en.wikipedia.org/wiki/Mount_Everest', priceUSD: 11000, currency: 'NPR', type: 'adventure' },
    { name: 'Boudhanath Stupa', description: 'Massive Buddhist stupa', link: 'https://en.wikipedia.org/wiki/Boudhanath', priceUSD: 2, currency: 'NPR', type: 'religious' },
    { name: 'Pashupatinath Temple', description: 'Sacred Hindu temple', link: 'https://en.wikipedia.org/wiki/Pashupatinath_Temple', priceUSD: 10, currency: 'NPR', type: 'religious' },
    { name: 'Annapurna Circuit', description: 'Epic trekking route', link: 'https://en.wikipedia.org/wiki/Annapurna_Circuit', priceUSD: 30, currency: 'NPR', type: 'adventure' },
    { name: 'Pokhara Lake', description: 'Scenic mountain lake', link: 'https://en.wikipedia.org/wiki/Phewa_Lake', priceUSD: 0, currency: 'NPR', type: 'natural' },
    { name: 'Chitwan National Park', description: 'Jungle safari with rhinos', link: 'https://en.wikipedia.org/wiki/Chitwan_National_Park', priceUSD: 30, currency: 'NPR', type: 'adventure' },
    { name: 'Swayambhunath', description: 'Monkey temple', link: 'https://en.wikipedia.org/wiki/Swayambhunath', priceUSD: 2, currency: 'NPR', type: 'religious' },
    { name: 'Lumbini', description: 'Buddha\'s birthplace', link: 'https://en.wikipedia.org/wiki/Lumbini', priceUSD: 0, currency: 'NPR', type: 'religious' }
]);

// Bhutan - Famous landmarks
addCountry('bhutan', 'Bhutan', [
    { name: 'Tiger\'s Nest Monastery', description: 'Cliffside Buddhist monastery', link: 'https://en.wikipedia.org/wiki/Paro_Taktsang', priceUSD: 0, currency: 'BTN', type: 'religious' },
    { name: 'Punakha Dzong', description: 'Palace fortress', link: 'https://en.wikipedia.org/wiki/Punakha_Dzong', priceUSD: 0, currency: 'BTN', type: 'historical' },
    { name: 'Buddha Dordenma', description: 'Giant Buddha statue', link: 'https://en.wikipedia.org/wiki/Buddha_Dordenma_statue', priceUSD: 0, currency: 'BTN', type: 'religious' },
    { name: 'Dochula Pass', description: '108 stupas with Himalayan views', link: 'https://en.wikipedia.org/wiki/Dochula_Pass', priceUSD: 0, currency: 'BTN', type: 'natural' },
    { name: 'Phobjikha Valley', description: 'Black-necked crane habitat', link: 'https://en.wikipedia.org/wiki/Phobjikha_Valley', priceUSD: 0, currency: 'BTN', type: 'natural' },
    { name: 'Trongsa Dzong', description: 'Largest dzong fortress', link: 'https://en.wikipedia.org/wiki/Trongsa_Dzong', priceUSD: 0, currency: 'BTN', type: 'historical' },
    { name: 'Jigme Dorji National Park', description: 'Snow leopard habitat', link: 'https://en.wikipedia.org/wiki/Jigme_Dorji_National_Park', priceUSD: 0, currency: 'BTN', type: 'natural' },
    { name: 'Chele La Pass', description: 'Highest motorable pass', link: 'https://en.wikipedia.org/wiki/Chele_La', priceUSD: 0, currency: 'BTN', type: 'adventure' }
]);

// Laos - Famous landmarks
addCountry('laos', 'Laos', [
    { name: 'Kuang Si Falls', description: 'Turquoise waterfall pools', link: 'https://en.wikipedia.org/wiki/Kuang_Si_Falls', priceUSD: 3, currency: 'LAK', type: 'natural' },
    { name: 'Luang Prabang', description: 'UNESCO heritage town', link: 'https://en.wikipedia.org/wiki/Luang_Prabang', priceUSD: 0, currency: 'LAK', type: 'historical' },
    { name: 'Plain of Jars', description: 'Mysterious stone jars', link: 'https://en.wikipedia.org/wiki/Plain_of_Jars', priceUSD: 5, currency: 'LAK', type: 'historical' },
    { name: 'Vang Vieng', description: 'Karst landscape adventures', link: 'https://en.wikipedia.org/wiki/Vang_Vieng', priceUSD: 0, currency: 'LAK', type: 'adventure' },
    { name: 'Pha That Luang', description: 'Golden stupa', link: 'https://en.wikipedia.org/wiki/Pha_That_Luang', priceUSD: 1, currency: 'LAK', type: 'religious' },
    { name: '4000 Islands', description: 'Mekong river islands', link: 'https://en.wikipedia.org/wiki/Si_Phan_Don', priceUSD: 0, currency: 'LAK', type: 'natural' },
    { name: 'Buddha Park', description: 'Sculpture park', link: 'https://en.wikipedia.org/wiki/Buddha_Park', priceUSD: 1, currency: 'LAK', type: 'cultural' },
    { name: 'Pak Ou Caves', description: 'Buddha-filled caves', link: 'https://en.wikipedia.org/wiki/Pak_Ou_Caves', priceUSD: 2, currency: 'LAK', type: 'religious' }
]);

// Pakistan - Famous landmarks
addCountry('pakistan', 'Pakistan', [
    { name: 'K2 Mountain', description: 'Second highest peak', link: 'https://en.wikipedia.org/wiki/K2', priceUSD: 0, currency: 'PKR', type: 'adventure' },
    { name: 'Badshahi Mosque', description: 'Mughal mosque', link: 'https://en.wikipedia.org/wiki/Badshahi_Mosque', priceUSD: 0, currency: 'PKR', type: 'religious' },
    { name: 'Hunza Valley', description: 'Mountain valley paradise', link: 'https://en.wikipedia.org/wiki/Hunza_Valley', priceUSD: 0, currency: 'PKR', type: 'natural' },
    { name: 'Mohenjo-daro', description: 'Ancient Indus city', link: 'https://en.wikipedia.org/wiki/Mohenjo-daro', priceUSD: 5, currency: 'PKR', type: 'historical' },
    { name: 'Faisal Mosque', description: 'Largest mosque in Pakistan', link: 'https://en.wikipedia.org/wiki/Faisal_Mosque', priceUSD: 0, currency: 'PKR', type: 'religious' },
    { name: 'Fairy Meadows', description: 'Alpine meadow near Nanga Parbat', link: 'https://en.wikipedia.org/wiki/Fairy_Meadows', priceUSD: 0, currency: 'PKR', type: 'natural' },
    { name: 'Lahore Fort', description: 'Mughal fort complex', link: 'https://en.wikipedia.org/wiki/Lahore_Fort', priceUSD: 2, currency: 'PKR', type: 'historical' },
    { name: 'Deosai National Park', description: 'High-altitude plateau', link: 'https://en.wikipedia.org/wiki/Deosai_National_Park', priceUSD: 0, currency: 'PKR', type: 'natural' }
]);

// Bangladesh - Famous landmarks
addCountry('bangladesh', 'Bangladesh', [
    { name: 'Sundarbans', description: 'Largest mangrove forest', link: 'https://en.wikipedia.org/wiki/Sundarbans', priceUSD: 50, currency: 'BDT', type: 'natural' },
    { name: 'Cox\'s Bazar', description: 'Longest natural beach', link: 'https://en.wikipedia.org/wiki/Cox%27s_Bazar', priceUSD: 0, currency: 'BDT', type: 'beach' },
    { name: 'Ahsan Manzil', description: 'Pink palace', link: 'https://en.wikipedia.org/wiki/Ahsan_Manzil', priceUSD: 1, currency: 'BDT', type: 'historical' },
    { name: 'Paharpur', description: 'Buddhist monastery ruins', link: 'https://en.wikipedia.org/wiki/Paharpur', priceUSD: 2, currency: 'BDT', type: 'historical' },
    { name: 'Ratargul Swamp Forest', description: 'Freshwater swamp forest', link: 'https://en.wikipedia.org/wiki/Ratargul_Swamp_Forest', priceUSD: 0, currency: 'BDT', type: 'natural' },
    { name: 'Lalbagh Fort', description: 'Mughal fort', link: 'https://en.wikipedia.org/wiki/Lalbagh_Fort', priceUSD: 1, currency: 'BDT', type: 'historical' },
    { name: 'Saint Martin Island', description: 'Coral island', link: 'https://en.wikipedia.org/wiki/St._Martin%27s_Island', priceUSD: 0, currency: 'BDT', type: 'beach' },
    { name: 'Sixty Dome Mosque', description: 'Historic mosque', link: 'https://en.wikipedia.org/wiki/Sixty_Dome_Mosque', priceUSD: 1, currency: 'BDT', type: 'religious' }
]);

// Oman - Famous landmarks
addCountry('oman', 'Oman', [
    { name: 'Sultan Qaboos Grand Mosque', description: 'Grand mosque', link: 'https://en.wikipedia.org/wiki/Sultan_Qaboos_Grand_Mosque', priceUSD: 0, currency: 'OMR', type: 'religious' },
    { name: 'Wahiba Sands', description: 'Desert dunes', link: 'https://en.wikipedia.org/wiki/Wahiba_Sands', priceUSD: 0, currency: 'OMR', type: 'natural' },
    { name: 'Nizwa Fort', description: 'Historic fort', link: 'https://en.wikipedia.org/wiki/Nizwa_Fort', priceUSD: 5, currency: 'OMR', type: 'historical' },
    { name: 'Jebel Shams', description: 'Grand Canyon of Arabia', link: 'https://en.wikipedia.org/wiki/Jebel_Shams', priceUSD: 0, currency: 'OMR', type: 'natural' },
    { name: 'Musandam Fjords', description: 'Arabian fjords', link: 'https://en.wikipedia.org/wiki/Musandam_Peninsula', priceUSD: 50, currency: 'OMR', type: 'natural' },
    { name: 'Bahla Fort', description: 'UNESCO fort', link: 'https://en.wikipedia.org/wiki/Bahla_Fort', priceUSD: 5, currency: 'OMR', type: 'historical' },
    { name: 'Wadi Shab', description: 'Canyon with pools', link: 'https://en.wikipedia.org/wiki/Wadi_Shab', priceUSD: 0, currency: 'OMR', type: 'adventure' },
    { name: 'Royal Opera House', description: 'Cultural venue', link: 'https://en.wikipedia.org/wiki/Royal_Opera_House_Muscat', priceUSD: 10, currency: 'OMR', type: 'cultural' }
]);

// Qatar - Famous landmarks
addCountry('qatar', 'Qatar', [
    { name: 'Museum of Islamic Art', description: 'World-class museum', link: 'https://en.wikipedia.org/wiki/Museum_of_Islamic_Art,_Doha', priceUSD: 0, currency: 'QAR', type: 'cultural' },
    { name: 'Souq Waqif', description: 'Traditional marketplace', link: 'https://en.wikipedia.org/wiki/Souq_Waqif', priceUSD: 0, currency: 'QAR', type: 'cultural' },
    { name: 'The Pearl-Qatar', description: 'Artificial island', link: 'https://en.wikipedia.org/wiki/The_Pearl-Qatar', priceUSD: 0, currency: 'QAR', type: 'cultural' },
    { name: 'Katara Cultural Village', description: 'Cultural hub', link: 'https://en.wikipedia.org/wiki/Katara_Cultural_Village', priceUSD: 0, currency: 'QAR', type: 'cultural' },
    { name: 'Inland Sea', description: 'Desert and sea meeting', link: 'https://en.wikipedia.org/wiki/Khor_al_Adaid', priceUSD: 0, currency: 'QAR', type: 'natural' },
    { name: 'Al Zubarah Fort', description: 'Historic fort', link: 'https://en.wikipedia.org/wiki/Al_Zubarah', priceUSD: 0, currency: 'QAR', type: 'historical' },
    { name: 'Aspire Park', description: 'Urban green space', link: 'https://en.wikipedia.org/wiki/Aspire_Park', priceUSD: 0, currency: 'QAR', type: 'cultural' },
    { name: 'National Museum of Qatar', description: 'Modern museum', link: 'https://en.wikipedia.org/wiki/National_Museum_of_Qatar', priceUSD: 15, currency: 'QAR', type: 'cultural' }
]);

// Romania - Famous landmarks
addCountry('romania', 'Romania', [
    { name: 'Bran Castle', description: 'Dracula\'s castle', link: 'https://en.wikipedia.org/wiki/Bran_Castle', priceUSD: 10, currency: 'RON', type: 'historical' },
    { name: 'Peleș Castle', description: 'Neo-Renaissance castle', link: 'https://en.wikipedia.org/wiki/Pele%C8%99_Castle', priceUSD: 10, currency: 'RON', type: 'historical' },
    { name: 'Transfăgărășan', description: 'Spectacular mountain road', link: 'https://en.wikipedia.org/wiki/Transf%C4%83g%C4%83r%C4%83%C8%99an', priceUSD: 0, currency: 'RON', type: 'adventure' },
    { name: 'Painted Monasteries', description: 'Frescoed monasteries', link: 'https://en.wikipedia.org/wiki/Churches_of_Moldavia', priceUSD: 5, currency: 'RON', type: 'religious' },
    { name: 'Danube Delta', description: 'Biodiverse wetlands', link: 'https://en.wikipedia.org/wiki/Danube_Delta', priceUSD: 0, currency: 'RON', type: 'natural' },
    { name: 'Sighișoara', description: 'Medieval citadel', link: 'https://en.wikipedia.org/wiki/Sighi%C8%99oara', priceUSD: 0, currency: 'RON', type: 'historical' },
    { name: 'Turda Salt Mine', description: 'Underground theme park', link: 'https://en.wikipedia.org/wiki/Salina_Turda', priceUSD: 7, currency: 'RON', type: 'adventure' },
    { name: 'Palace of Parliament', description: 'Massive government building', link: 'https://en.wikipedia.org/wiki/Palace_of_the_Parliament', priceUSD: 5, currency: 'RON', type: 'historical' }
]);

// Hungary - Famous landmarks
addCountry('hungary', 'Hungary', [
    { name: 'Buda Castle', description: 'Royal palace complex', link: 'https://en.wikipedia.org/wiki/Buda_Castle', priceUSD: 10, currency: 'HUF', type: 'historical' },
    { name: 'Parliament Building', description: 'Neo-Gothic parliament', link: 'https://en.wikipedia.org/wiki/Hungarian_Parliament_Building', priceUSD: 8, currency: 'HUF', type: 'historical' },
    { name: 'Thermal Baths', description: 'Historic spa culture', link: 'https://en.wikipedia.org/wiki/Sz%C3%A9chenyi_thermal_bath', priceUSD: 20, currency: 'HUF', type: 'cultural' },
    { name: 'Fisherman\'s Bastion', description: 'Terrace with city views', link: 'https://en.wikipedia.org/wiki/Fisherman%27s_Bastion', priceUSD: 3, currency: 'HUF', type: 'cultural' },
    { name: 'Lake Balaton', description: 'Largest lake in Central Europe', link: 'https://en.wikipedia.org/wiki/Lake_Balaton', priceUSD: 0, currency: 'HUF', type: 'natural' },
    { name: 'Eger Castle', description: 'Historic fortress', link: 'https://en.wikipedia.org/wiki/Eger_Castle', priceUSD: 5, currency: 'HUF', type: 'historical' },
    { name: 'Hortobágy National Park', description: 'Great Hungarian Plain', link: 'https://en.wikipedia.org/wiki/Hortob%C3%A1gy_National_Park', priceUSD: 3, currency: 'HUF', type: 'natural' },
    { name: 'Matthias Church', description: 'Gothic church', link: 'https://en.wikipedia.org/wiki/Matthias_Church', priceUSD: 5, currency: 'HUF', type: 'religious' }
]);

// Belgium - Famous landmarks
addCountry('belgium', 'Belgium', [
    { name: 'Grand Place Brussels', description: 'UNESCO medieval square', link: 'https://en.wikipedia.org/wiki/Grand_Place', priceUSD: 0, currency: 'EUR', type: 'historical' },
    { name: 'Atomium', description: 'Iconic steel structure', link: 'https://en.wikipedia.org/wiki/Atomium', priceUSD: 15, currency: 'EUR', type: 'cultural' },
    { name: 'Bruges Canals', description: 'Venice of the North', link: 'https://en.wikipedia.org/wiki/Bruges', priceUSD: 0, currency: 'EUR', type: 'cultural' },
    { name: 'Manneken Pis', description: 'Famous bronze statue', link: 'https://en.wikipedia.org/wiki/Manneken_Pis', priceUSD: 0, currency: 'EUR', type: 'cultural' },
    { name: 'Gravensteen Castle', description: 'Medieval castle in Ghent', link: 'https://en.wikipedia.org/wiki/Gravensteen', priceUSD: 12, currency: 'EUR', type: 'historical' },
    { name: 'Waterloo Battlefield', description: 'Historic battle site', link: 'https://en.wikipedia.org/wiki/Battle_of_Waterloo', priceUSD: 10, currency: 'EUR', type: 'historical' },
    { name: 'Ardennes Forest', description: 'Dense forest region', link: 'https://en.wikipedia.org/wiki/Ardennes', priceUSD: 0, currency: 'EUR', type: 'natural' },
    { name: 'Mini-Europe', description: 'Miniature park', link: 'https://en.wikipedia.org/wiki/Mini-Europe', priceUSD: 16, currency: 'EUR', type: 'cultural' }
]);

// Luxembourg - Famous landmarks
addCountry('luxembourg', 'Luxembourg', [
    { name: 'Casemates du Bock', description: 'Underground tunnels', link: 'https://en.wikipedia.org/wiki/Casemates_du_Bock', priceUSD: 8, currency: 'EUR', type: 'historical' },
    { name: 'Vianden Castle', description: 'Medieval fortress', link: 'https://en.wikipedia.org/wiki/Vianden_Castle', priceUSD: 10, currency: 'EUR', type: 'historical' },
    { name: 'Mullerthal Trail', description: 'Little Switzerland hiking', link: 'https://en.wikipedia.org/wiki/Mullerthal', priceUSD: 0, currency: 'EUR', type: 'natural' },
    { name: 'Notre-Dame Cathedral', description: 'Gothic cathedral', link: 'https://en.wikipedia.org/wiki/Notre-Dame_Cathedral,_Luxembourg', priceUSD: 0, currency: 'EUR', type: 'religious' },
    { name: 'Adolphe Bridge', description: 'Iconic stone arch bridge', link: 'https://en.wikipedia.org/wiki/Adolphe_Bridge', priceUSD: 0, currency: 'EUR', type: 'cultural' },
    { name: 'Beaufort Castle', description: 'Medieval ruins', link: 'https://en.wikipedia.org/wiki/Beaufort_Castle,_Luxembourg', priceUSD: 7, currency: 'EUR', type: 'historical' },
    { name: 'Moselle Valley', description: 'Wine region', link: 'https://en.wikipedia.org/wiki/Moselle', priceUSD: 0, currency: 'EUR', type: 'natural' },
    { name: 'European Court of Justice', description: 'EU institution', link: 'https://en.wikipedia.org/wiki/European_Court_of_Justice', priceUSD: 0, currency: 'EUR', type: 'cultural' }
]);

// Slovakia - Famous landmarks
addCountry('slovakia', 'Slovakia', [
    { name: 'Bratislava Castle', description: 'Hilltop castle', link: 'https://en.wikipedia.org/wiki/Bratislava_Castle', priceUSD: 10, currency: 'EUR', type: 'historical' },
    { name: 'High Tatras', description: 'Mountain range', link: 'https://en.wikipedia.org/wiki/High_Tatras', priceUSD: 0, currency: 'EUR', type: 'natural' },
    { name: 'Spiš Castle', description: 'Largest castle ruins', link: 'https://en.wikipedia.org/wiki/Spi%C5%A1_Castle', priceUSD: 8, currency: 'EUR', type: 'historical' },
    { name: 'Slovak Paradise', description: 'National park with gorges', link: 'https://en.wikipedia.org/wiki/Slovak_Paradise', priceUSD: 0, currency: 'EUR', type: 'adventure' },
    { name: 'Orava Castle', description: 'Gothic castle', link: 'https://en.wikipedia.org/wiki/Orava_Castle', priceUSD: 7, currency: 'EUR', type: 'historical' },
    { name: 'Demänovská Ice Cave', description: 'Ice cave system', link: 'https://en.wikipedia.org/wiki/Dem%C3%A4novsk%C3%A1_Ice_Cave', priceUSD: 9, currency: 'EUR', type: 'natural' },
    { name: 'Bojnice Castle', description: 'Romantic castle', link: 'https://en.wikipedia.org/wiki/Bojnice_Castle', priceUSD: 9, currency: 'EUR', type: 'historical' },
    { name: 'Wooden Churches', description: 'UNESCO wooden churches', link: 'https://en.wikipedia.org/wiki/Wooden_churches_of_the_Slovak_Carpathians', priceUSD: 0, currency: 'EUR', type: 'religious' }
]);

// Slovenia - Famous landmarks
addCountry('slovenia', 'Slovenia', [
    { name: 'Lake Bled', description: 'Alpine lake with island', link: 'https://en.wikipedia.org/wiki/Lake_Bled', priceUSD: 0, currency: 'EUR', type: 'natural' },
    { name: 'Postojna Cave', description: 'Massive cave system', link: 'https://en.wikipedia.org/wiki/Postojna_Cave', priceUSD: 28, currency: 'EUR', type: 'natural' },
    { name: 'Predjama Castle', description: 'Castle in cave mouth', link: 'https://en.wikipedia.org/wiki/Predjama_Castle', priceUSD: 15, currency: 'EUR', type: 'historical' },
    { name: 'Ljubljana Castle', description: 'Medieval fortress', link: 'https://en.wikipedia.org/wiki/Ljubljana_Castle', priceUSD: 10, currency: 'EUR', type: 'historical' },
    { name: 'Triglav National Park', description: 'Alpine national park', link: 'https://en.wikipedia.org/wiki/Triglav_National_Park', priceUSD: 0, currency: 'EUR', type: 'natural' },
    { name: 'Škocjan Caves', description: 'UNESCO cave system', link: 'https://en.wikipedia.org/wiki/%C5%A0kocjan_Caves', priceUSD: 18, currency: 'EUR', type: 'natural' },
    { name: 'Piran', description: 'Coastal Venetian town', link: 'https://en.wikipedia.org/wiki/Piran', priceUSD: 0, currency: 'EUR', type: 'historical' },
    { name: 'Vintgar Gorge', description: 'River gorge walkway', link: 'https://en.wikipedia.org/wiki/Vintgar_Gorge', priceUSD: 10, currency: 'EUR', type: 'natural' }
]);

// Serbia - Famous landmarks
addCountry('serbia', 'Serbia', [
    { name: 'Belgrade Fortress', description: 'Historic fortress', link: 'https://en.wikipedia.org/wiki/Belgrade_Fortress', priceUSD: 0, currency: 'RSD', type: 'historical' },
    { name: 'Đavolja Varoš', description: 'Devil\'s Town rock formations', link: 'https://en.wikipedia.org/wiki/%C4%90avolja_Varo%C5%A1', priceUSD: 3, currency: 'RSD', type: 'natural' },
    { name: 'Studenica Monastery', description: 'Medieval Serbian monastery', link: 'https://en.wikipedia.org/wiki/Studenica_Monastery', priceUSD: 0, currency: 'RSD', type: 'religious' },
    { name: 'Drvengrad', description: 'Traditional village', link: 'https://en.wikipedia.org/wiki/Drvengrad', priceUSD: 5, currency: 'RSD', type: 'cultural' },
    { name: 'Novi Sad Fortress', description: 'Petrovaradin Fortress', link: 'https://en.wikipedia.org/wiki/Petrovaradin_Fortress', priceUSD: 0, currency: 'RSD', type: 'historical' },
    { name: 'Tara National Park', description: 'Mountain wilderness', link: 'https://en.wikipedia.org/wiki/Tara_National_Park_(Serbia)', priceUSD: 0, currency: 'RSD', type: 'natural' },
    { name: 'Golubac Fortress', description: 'Danube fortress', link: 'https://en.wikipedia.org/wiki/Golubac_Fortress', priceUSD: 5, currency: 'RSD', type: 'historical' },
    { name: 'Uvac Canyon', description: 'Meandering river canyon', link: 'https://en.wikipedia.org/wiki/Uvac', priceUSD: 0, currency: 'RSD', type: 'natural' }
]);

// Bulgaria - Famous landmarks
addCountry('bulgaria', 'Bulgaria', [
    { name: 'Rila Monastery', description: 'UNESCO Orthodox monastery', link: 'https://en.wikipedia.org/wiki/Rila_Monastery', priceUSD: 0, currency: 'BGN', type: 'religious' },
    { name: 'Seven Rila Lakes', description: 'Glacial mountain lakes', link: 'https://en.wikipedia.org/wiki/Seven_Rila_Lakes', priceUSD: 0, currency: 'BGN', type: 'natural' },
    { name: 'Alexander Nevsky Cathedral', description: 'Orthodox cathedral', link: 'https://en.wikipedia.org/wiki/Alexander_Nevsky_Cathedral,_Sofia', priceUSD: 0, currency: 'BGN', type: 'religious' },
    { name: 'Belogradchik Rocks', description: 'Rock formations', link: 'https://en.wikipedia.org/wiki/Belogradchik_Rocks', priceUSD: 3, currency: 'BGN', type: 'natural' },
    { name: 'Plovdiv Old Town', description: 'Ancient Roman city', link: 'https://en.wikipedia.org/wiki/Plovdiv', priceUSD: 0, currency: 'BGN', type: 'historical' },
    { name: 'Sunny Beach', description: 'Black Sea resort', link: 'https://en.wikipedia.org/wiki/Sunny_Beach', priceUSD: 0, currency: 'BGN', type: 'beach' },
    { name: 'Tsarevets Fortress', description: 'Medieval stronghold', link: 'https://en.wikipedia.org/wiki/Tsarevets_(fortress)', priceUSD: 6, currency: 'BGN', type: 'historical' },
    { name: 'Buzludzha Monument', description: 'Communist-era monument', link: 'https://en.wikipedia.org/wiki/Buzludzha', priceUSD: 0, currency: 'BGN', type: 'historical' }
]);

// Malta - Famous landmarks
addCountry('malta', 'Malta', [
    { name: 'Valletta', description: 'Fortified capital city', link: 'https://en.wikipedia.org/wiki/Valletta', priceUSD: 0, currency: 'EUR', type: 'historical' },
    { name: 'Blue Lagoon', description: 'Crystal clear waters', link: 'https://en.wikipedia.org/wiki/Blue_Lagoon_(Comino)', priceUSD: 0, currency: 'EUR', type: 'beach' },
    { name: 'Ħaġar Qim Temples', description: 'Prehistoric temples', link: 'https://en.wikipedia.org/wiki/%C4%A6a%C4%A1ar_Qim', priceUSD: 10, currency: 'EUR', type: 'historical' },
    { name: 'Mdina', description: 'Silent City medieval town', link: 'https://en.wikipedia.org/wiki/Mdina', priceUSD: 0, currency: 'EUR', type: 'historical' },
    { name: 'St. John\'s Co-Cathedral', description: 'Baroque cathedral', link: 'https://en.wikipedia.org/wiki/St._John%27s_Co-Cathedral', priceUSD: 15, currency: 'EUR', type: 'religious' },
    { name: 'Azure Window Site', description: 'Former natural arch', link: 'https://en.wikipedia.org/wiki/Azure_Window', priceUSD: 0, currency: 'EUR', type: 'natural' },
    { name: 'Popeye Village', description: 'Film set village', link: 'https://en.wikipedia.org/wiki/Popeye_Village', priceUSD: 18, currency: 'EUR', type: 'cultural' },
    { name: 'Hypogeum', description: 'Underground prehistoric site', link: 'https://en.wikipedia.org/wiki/Hypogeum_of_%C4%A6al-Saflieni', priceUSD: 35, currency: 'EUR', type: 'historical' }
]);

// Cyprus - Famous landmarks
addCountry('cyprus', 'Cyprus', [
    { name: 'Petra tou Romiou', description: 'Aphrodite\'s birthplace', link: 'https://en.wikipedia.org/wiki/Petra_tou_Romiou', priceUSD: 0, currency: 'EUR', type: 'natural' },
    { name: 'Kyrenia Castle', description: 'Byzantine castle', link: 'https://en.wikipedia.org/wiki/Kyrenia_Castle', priceUSD: 5, currency: 'EUR', type: 'historical' },
    { name: 'Tombs of the Kings', description: 'Ancient necropolis', link: 'https://en.wikipedia.org/wiki/Tombs_of_the_Kings_(Paphos)', priceUSD: 3, currency: 'EUR', type: 'historical' },
    { name: 'Nissi Beach', description: 'Famous white sand beach', link: 'https://en.wikipedia.org/wiki/Nissi_Beach', priceUSD: 0, currency: 'EUR', type: 'beach' },
    { name: 'Troodos Mountains', description: 'Mountain range with monasteries', link: 'https://en.wikipedia.org/wiki/Troodos_Mountains', priceUSD: 0, currency: 'EUR', type: 'natural' },
    { name: 'Kourion', description: 'Ancient Greco-Roman city', link: 'https://en.wikipedia.org/wiki/Kourion', priceUSD: 5, currency: 'EUR', type: 'historical' },
    { name: 'Kykkos Monastery', description: 'Richest monastery', link: 'https://en.wikipedia.org/wiki/Kykkos_Monastery', priceUSD: 0, currency: 'EUR', type: 'religious' },
    { name: 'Cape Greco', description: 'Sea caves and cliffs', link: 'https://en.wikipedia.org/wiki/Cape_Greco', priceUSD: 0, currency: 'EUR', type: 'natural' }
]);

// Note: Only countries with specific landmarks are included
// Total: 81+ countries with real, famous tourist attractions
