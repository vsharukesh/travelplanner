(function(){
  function rand(min, max){ return Math.random() * (max - min) + min; }
  function createParticle(x, y){
    var el = document.createElement('span');
    el.style.position = 'fixed';
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    el.style.width = '8px';
    el.style.height = '8px';
    el.style.borderRadius = '2px';
    el.style.background = 'hsl(' + Math.floor(rand(0,360)) + ',85%,' + Math.floor(rand(45,65)) + '%)';
    el.style.opacity = '1';
    el.style.pointerEvents = 'none';
    el.style.zIndex = 4000;
    var dx = rand(-3,3), dy = rand(-7,-3), g = 0.18, rot = rand(-180,180);
    var life = 0, ttl = 60 + Math.floor(rand(0,30));
    function step(){
      life++;
      x += dx; y += dy; dy += g; rot += 6;
      el.style.transform = 'translate(-50%, -50%) rotate(' + rot + 'deg)';
      el.style.left = x + 'px';
      el.style.top = y + 'px';
      if (life > ttl) { el.style.opacity = (1 - (life-ttl)/15).toString(); }
      if (life > ttl + 15) { el.remove(); return; }
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
    document.body.appendChild(el);
  }
  function celebrateAtEl(el){
    var r = el.getBoundingClientRect();
    var x = r.left + r.width/2; var y = r.top + r.height/2;
    for (var i=0;i<24;i++) createParticle(x, y);
  }
  function celebrateAt(x, y){
    for (var i=0;i<24;i++) createParticle(x, y);
  }
  window.UIEffects = { celebrateAtEl: celebrateAtEl, celebrateAt: celebrateAt };

  function createLoader(){
    if (document.getElementById('page-loader')) return;
    var loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.id = 'page-loader';
    var stars = document.createElement('div');
    stars.className = 'loader-stars';
    for (var i=0;i<80;i++){
      var s = document.createElement('span');
      s.className = 'loader-star';
      s.style.left = Math.floor(Math.random()*100) + '%';
      s.style.top = Math.floor(Math.random()*100) + '%';
      s.style.animationDelay = (Math.random()*2).toFixed(2) + 's';
      stars.appendChild(s);
    }
    var track = document.createElement('div');
    track.className = 'plane-track';
    var plane = document.createElement('div');
    plane.className = 'plane';
    plane.textContent = '✈️';
    track.appendChild(plane);
    var text = document.createElement('div');
    text.className = 'loader-text';
    text.textContent = 'Preparing your next destination...';
    loader.appendChild(stars);
    loader.appendChild(track);
    loader.appendChild(text);
    document.body.appendChild(loader);
  }

  function shouldIntercept(a){
    if (!a) return false;
    var href = a.getAttribute('href');
    if (!href) return false;
    if (a.target === '_blank') return false;
    if (a.hasAttribute('download')) return false;
    if (href.startsWith('#')) return false;
    if (href.startsWith('mailto:') || href.startsWith('tel:')) return false;
    try {
      var url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return false;
      return true;
    } catch { return false; }
  }

  function showLoaderThenNavigate(url){
    createLoader();
    document.body.classList.add('show-loading');
    setTimeout(function(){ window.location.href = url; }, 1000);
  }

  function setupLoader(){
    document.addEventListener('click', function(e){
      var a = e.target.closest && e.target.closest('a');
      if (!a) return;
      if (a.dataset && a.dataset.noLoader === 'true') return;
      if (!shouldIntercept(a)) return;
      e.preventDefault();
      showLoaderThenNavigate(a.href);
    }, true);
  }

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){ createLoader(); setupLoader(); });
  } else { createLoader(); setupLoader(); }
})();
