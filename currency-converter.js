// Currency conversion rates (approximate, base USD)
const currencyRates = {
    'USD': 1, 'EUR': 0.92, 'GBP': 0.79, 'JPY': 149.50, 'CNY': 7.24, 'INR': 83.12,
    'AUD': 1.53, 'CAD': 1.36, 'CHF': 0.88, 'NZD': 1.67, 'SEK': 10.87, 'NOK': 10.78,
    'DKK': 6.87, 'SGD': 1.34, 'HKD': 7.82, 'KRW': 1315.50, 'MXN': 17.12, 'BRL': 4.98,
    'ZAR': 18.65, 'RUB': 92.50, 'TRY': 28.75, 'AED': 3.67, 'SAR': 3.75, 'THB': 35.42,
    'MYR': 4.72, 'IDR': 15678, 'PHP': 56.25, 'VND': 24350, 'PLN': 4.02, 'CZK': 22.85,
    'HUF': 356.20, 'RON': 4.58, 'BGN': 1.80, 'HRK': 6.93, 'ISK': 137.50, 'ILS': 3.65,
    'EGP': 30.90, 'MAD': 10.12, 'NGN': 775.50, 'KES': 129.40, 'GHS': 12.05, 'TZS': 2515,
    'UGX': 3705, 'ZMW': 26.85, 'BWP': 13.52, 'MUR': 45.75, 'SCR': 13.42, 'AOA': 827.50,
    'XOF': 603.50, 'XAF': 603.50, 'CLP': 975.30, 'ARS': 350.75, 'COP': 4125, 'PEN': 3.76,
    'UYU': 39.25, 'PYG': 7285, 'BOB': 6.91, 'VES': 36.15, 'CRC': 520.30, 'GTQ': 7.82,
    'HNL': 24.68, 'NIO': 36.75, 'PAB': 1, 'DOP': 58.95, 'JMD': 155.20, 'TTD': 6.78,
    'BBD': 2, 'XCD': 2.70, 'BSD': 1, 'BZD': 2.02, 'GYD': 209.15, 'HTG': 131.85,
    'AFN': 70.50, 'PKR': 278.45, 'BDT': 109.75, 'LKR': 325.60, 'NPR': 132.95, 'BTN': 83.12,
    'MMK': 2100, 'KHR': 4085, 'LAK': 20750, 'AMD': 386.50, 'GEL': 2.68, 'AZN': 1.70,
    'KZT': 452.30, 'UZS': 12450, 'KGS': 89.25, 'TJS': 10.95, 'TMT': 3.50, 'BYN': 3.27,
    'UAH': 36.85, 'MDL': 17.68, 'ALL': 92.50, 'MKD': 56.75, 'RSD': 107.85, 'BAM': 1.80,
    'QAR': 3.64, 'OMR': 0.38, 'KWD': 0.31, 'BHD': 0.38, 'JOD': 0.71, 'LBP': 89500,
    'IQD': 1310, 'SYP': 13000, 'YER': 250.50, 'IRR': 42000, 'DZD': 135.20, 'TND': 3.12,
    'LYD': 4.85, 'MAD': 10.12, 'MRU': 39.75, 'SDG': 601.50, 'SSP': 1305, 'ETB': 55.85,
    'ERN': 15, 'DJF': 177.50, 'SOS': 571, 'KMF': 452.50, 'MGA': 4525, 'MWK': 1685,
    'MZN': 63.75, 'ZWL': 322, 'LSL': 18.65, 'SZL': 18.65, 'NAD': 18.65, 'BWP': 13.52,
    'GMD': 67.25, 'GNF': 8605, 'SLL': 19750, 'LRD': 187.50, 'CVE': 101.50, 'STN': 22.55,
    'BIF': 2850, 'RWF': 1285, 'CDF': 2785, 'FJD': 2.26, 'PGK': 3.95, 'SBD': 8.52,
    'VUV': 122.50, 'WST': 2.73, 'TOP': 2.35, 'MVR': 15.42, 'SCR': 13.42
};

// User preferences
let userCountry = null;
let userCurrency = 'USD';

// Get user's selected country
function getUserCountry() {
    return localStorage.getItem('userCountry') || null;
}

// Set user's country
function setUserCountry(country, currency) {
    localStorage.setItem('userCountry', country);
    localStorage.setItem('userCurrency', currency);
    userCountry = country;
    userCurrency = currency;
}

// Convert price from USD to user's currency
function convertPrice(priceUSD, targetCurrency) {
    if (priceUSD === 0) return 'Free';
    
    const rate = currencyRates[targetCurrency] || 1;
    const convertedPrice = Math.round(priceUSD * rate);
    
    // Format with currency symbol
    return `${convertedPrice} ${targetCurrency}`;
}

// Get formatted price for display
function getDisplayPrice(spot) {
    const userCurr = localStorage.getItem('userCurrency') || 'USD';
    
    if (spot.priceUSD === 0) return 'Free';
    
    return convertPrice(spot.priceUSD, userCurr);
}

// Initialize user preferences
function initializeUserPreferences() {
    const savedCountry = getUserCountry();
    if (savedCountry) {
        userCountry = savedCountry;
        userCurrency = localStorage.getItem('userCurrency') || 'USD';
        return true;
    }
    return false;
}
