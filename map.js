(function(){
  let map = null;
  let markers = {};
  let bounds = null;

  function el(id){ return document.getElementById(id); }

  function ensureMap(){
    if (map) return map;
    const mapEl = el('map');
    if (!mapEl) return null;
    map = L.map('map', { zoomControl: true, attributionControl: true }).setView([20, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    bounds = L.latLngBounds();
    return map;
  }

  function showMap(){
    const c = el('map-container');
    if (!c) return;
    c.style.display = 'block';
    ensureMap();
    setTimeout(() => { if (map) map.invalidateSize(); }, 50);
  }

  function hideMap(){
    const c = el('map-container');
    if (!c) return;
    c.style.display = 'none';
  }

  function getGeoCache(){
    try { return JSON.parse(localStorage.getItem('geoCache') || '{}'); } catch(_) { return {}; }
  }
  function setGeoCache(cache){
    localStorage.setItem('geoCache', JSON.stringify(cache));
  }

  async function geocode(place, country){
    const key = `${place}__${country}`.toLowerCase();
    const cache = getGeoCache();
    if (cache[key]) return cache[key];
    const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(place + ', ' + country)}`;
    const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
    if (!res.ok) throw new Error('geocode failed');
    const data = await res.json();
    if (data && data[0]) {
      const lat = parseFloat(data[0].lat), lon = parseFloat(data[0].lon);
      cache[key] = { lat, lon };
      setGeoCache(cache);
      return cache[key];
    }
    throw new Error('no results');
  }

  async function addMarker(spotId, spotName, countryName){
    showMap();
    ensureMap();
    try {
      if (markers[spotId]) {
        if (map) {
          map.setView(markers[spotId].getLatLng(), Math.max(6, map.getZoom()));
          markers[spotId].openPopup();
        }
        return;
      }
      const loc = await geocode(spotName, countryName);
      if (!map) return;
      const marker = L.marker([loc.lat, loc.lon]).addTo(map).bindPopup(`<strong>${spotName}</strong><br>${countryName}`);
      markers[spotId] = marker;
      bounds.extend([loc.lat, loc.lon]);
      map.fitBounds(bounds.pad(0.25));
      marker.openPopup();
    } catch(_){ /* ignore */ }
  }

  async function addAllMarkers(countryName, spots){
    showMap();
    ensureMap();
    for (const s of spots) {
      try {
        await addMarker(s.name, s.name, countryName);
      } catch(_){}
    }
  }

  window.MapUtil = { showMap, hideMap, addMarker, addAllMarkers };
})();
