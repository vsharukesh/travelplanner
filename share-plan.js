(function(){
  function readLS(key, fallback){ try { return JSON.parse(localStorage.getItem(key) || fallback); } catch(_) { return JSON.parse(fallback); } }
  function writeLS(key, val){ localStorage.setItem(key, JSON.stringify(val)); }

  function getPersonCount(){
    var el = document.getElementById('person-count');
    var n = el ? parseInt(el.value, 10) : 1;
    return isNaN(n) || n < 1 ? 1 : Math.min(50, n);
  }
  function setPersonCount(n){
    var el = document.getElementById('person-count');
    if (el){ el.value = n; var evt = new Event('change'); el.dispatchEvent(evt); }
  }

  function getState(){
    return {
      favorites: readLS('favorites','[]'),
      visited: readLS('visited','[]'),
      planned: readLS('planned','[]'),
      personCount: getPersonCount(),
      userCountry: localStorage.getItem('userCountry') || null,
      userCurrency: localStorage.getItem('userCurrency') || 'USD'
    };
  }

  function setState(state){
    if (state.favorites) writeLS('favorites', state.favorites);
    if (state.visited) writeLS('visited', state.visited);
    if (state.planned) writeLS('planned', state.planned);
    if (state.userCountry) localStorage.setItem('userCountry', state.userCountry);
    if (state.userCurrency) localStorage.setItem('userCurrency', state.userCurrency);
    if (typeof state.personCount === 'number') setPersonCount(state.personCount);
  }

  function createShareUrl(){
    var state = getState();
    var json = JSON.stringify(state);
    var hash = 'plan=' + encodeURIComponent(json);
    var url = location.origin + location.pathname + '#' + hash;
    return url;
  }

  function applyStateFromHash(){
    if (!location.hash) return false;
    var m = location.hash.match(/^#plan=(.*)$/);
    if (!m) return false;
    try {
      var json = decodeURIComponent(m[1]);
      var state = JSON.parse(json);
      setState(state);
      return true;
    } catch(_){ return false; }
  }

  function exportPlan(){
    var blob = new Blob([JSON.stringify(getState(), null, 2)], {type: 'application/json'});
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'travel-plan.json';
    document.body.appendChild(a);
    a.click();
    setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 0);
  }

  function importPlan(file){
    var reader = new FileReader();
    reader.onload = function(){
      try {
        var state = JSON.parse(reader.result);
        setState(state);
        if (window.UIEffects) UIEffects.celebrateAt(window.innerWidth/2, 80);
        if (typeof displayFavorites === 'function') displayFavorites();
        if (typeof displayPlanned === 'function') displayPlanned();
      } catch(_){ /* ignore */ }
    };
    reader.readAsText(file);
  }

  window.SharePlan = { createShareUrl, applyStateFromHash, exportPlan, importPlan };

  document.addEventListener('DOMContentLoaded', function(){
    var applied = applyStateFromHash();
    if (applied) {
      if (typeof displayFavorites === 'function') displayFavorites();
      if (typeof displayPlanned === 'function') displayPlanned();
    }
  });
})();
