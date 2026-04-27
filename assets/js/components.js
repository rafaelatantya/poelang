async function fetchAndInsert(id, url) {
    const el = document.getElementById(id);
    if (!el) return;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to load ${url}`);
        const html = await response.text();
        el.innerHTML = html;

        // Active State Highlighting for Mobile Nav
        if (id === 'mobile-nav-placeholder') {
            const currentPath = window.location.pathname.split('/').pop() || 'index.html';
            const navLinks = el.querySelectorAll('a');
            navLinks.forEach(link => {
                const linkPath = link.getAttribute('href');
                const isExternal = link.getAttribute('target') === '_blank';
                
                // Only highlight if it's not an external link and matches path
                if (!isExternal && (linkPath === currentPath || (currentPath === 'index.html' && linkPath === '/'))) {
                    link.classList.add('bg-black', 'text-primary', 'rounded-xl', 'px-4', 'py-2');
                    const icon = link.querySelector('.material-symbols-outlined');
                    if (icon) icon.style.fontVariationSettings = "'FILL' 1";
                }
            });
        }
    } catch (error) {
        console.error(error);
    }
}

const GLOBAL_ADDRESS = "BRONTOKUSUMAN MG 3/312 YOGYAKARTA 55153";

function loadMarquee() {
    const placeholder = document.getElementById('marquee-placeholder');
    if (!placeholder) return;

    const roomId = placeholder.getAttribute('data-room');
    const customText = placeholder.getAttribute('data-text');

    let text = customText || GLOBAL_ADDRESS;
    if (roomId) {
        text += ` • KAMAR ${roomId} • KOS POELANG • YOGYAKARTA`;
    } else if (!customText) {
        text += ` • UNIT TERBATAS • KOS POELANG • YOGYAKARTA`;
    }

    const repeatedText = `${text} • `.repeat(4);

    placeholder.innerHTML = `
        <div class="infinite-marquee-container">
            <div class="animate-marquee">
                <div class="marquee-group"><span>${repeatedText}</span></div>
                <div class="marquee-group"><span>${repeatedText}</span></div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    // Load all components
    fetchAndInsert('navbar-placeholder', 'components/navbar.html');
    fetchAndInsert('footer-placeholder', 'components/footer.html');
    fetchAndInsert('mobile-nav-placeholder', 'components/mobile-nav.html');
    fetchAndInsert('fab-placeholder', 'components/fab.html');
    
    // Load Marquee
    loadMarquee();
});
