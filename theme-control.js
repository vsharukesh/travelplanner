// Day/Night Theme Controller
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('theme-toggle');
    const body = document.body;
    const moon = document.getElementById('moon');
    const stars = document.getElementById('stars');
    const sunContainer = document.getElementById('sun-container');
    const clouds = document.getElementById('clouds');
    
    // Load saved theme preference
    const savedTheme = localStorage.getItem('isDayMode');
    if (savedTheme === 'true') {
        toggle.checked = true;
        updateTheme(true);
    }
    
    // Listen for toggle changes
    if (toggle) {
        toggle.addEventListener('change', function() {
            updateTheme(this.checked);
            localStorage.setItem('isDayMode', this.checked);
        });
    }
    
    function updateTheme(isDayMode) {
        if (isDayMode) {
            // Day mode
            body.classList.add('day-mode');
            
            // Hide moon and stars
            moon.style.opacity = 0;
            moon.style.transform = 'scale(0.7)';
            stars.style.opacity = 0;
            
            // Show sun and clouds
            sunContainer.style.opacity = 1;
            sunContainer.style.transform = 'scale(1)';
            clouds.style.opacity = 1;
            
            // Day background
            const skyBlue = 'rgba(135, 206, 250, 0.3)';
            const lightOverlay = 'rgba(255, 255, 255, 0.2)';
            body.style.background = `linear-gradient(${skyBlue}, ${lightOverlay}), 
                url('https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1920') no-repeat center center fixed`;
        } else {
            // Night mode
            body.classList.remove('day-mode');
            
            // Show moon and stars
            moon.style.opacity = 1;
            moon.style.transform = 'scale(1)';
            stars.style.opacity = 1;
            
            // Hide sun and clouds
            sunContainer.style.opacity = 0;
            sunContainer.style.transform = 'scale(0.7)';
            clouds.style.opacity = 0;
            
            // Night background
            const nightOverlay = 'rgba(0, 0, 0, 0.75)';
            body.style.background = `linear-gradient(${nightOverlay}, ${nightOverlay}), 
                url('https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1920') no-repeat center center fixed`;
        }
        
        body.style.backgroundSize = 'cover';
    }

    const dateBadge = document.createElement('div');
    dateBadge.className = 'date-badge';
    const now = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const formatted = now.toLocaleDateString(undefined, options);
    dateBadge.textContent = `📅 ${formatted} ✈️`;
    document.body.appendChild(dateBadge);
});
