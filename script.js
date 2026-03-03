document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');
    const loadingBar = document.getElementById('loading-bar');
    const loadingText = document.getElementById('loading-text');
    const bento = document.getElementById('bento-grid');
    const body = document.body;

    const translations = {
        ES: { 
            hero_title: 'Un hogar lejos de casa.', 
            hero_subtitle: 'Sabores auténticos de Argentina y Uruguay en Schöneberg.', 
            open_now: 'Abierto ahora', 
            handmade: 'Hecho a mano desde cero', 
            info_title: '¿Qué es una Merienda?', 
            info_desc: 'Un pequeño snack entre las 5 y 7 pm para conectar. Sabor casero con hospitalidad cálida.', 
            b2b_tag: 'B2B & Eventos', 
            b2b_title: 'Lleva el sabor real a tu oficina o café.', 
            b2b_cta: 'Contactar con Ventas', 
            fresh_badge: 'RECIÉN HORNEADO', 
            product_name: 'Alfajores de Maicena', 
            follow_ig: 'Seguir en Instagram', 
            delivery: 'Entrega Wolt', 
            wolt_title: 'Wolt Delivery',
            modal_title: 'Solicitud B2B & Catering',
            modal_subtitle: 'Llevemos los sabores latinos a tu evento.',
            opening_hours_title: 'Horarios',
            location_title: 'Ubicación',
            legal_title: 'Legal & Privacidad',
            language_title: 'Idioma',
            tag_bestseller: 'Más vendido',
            tag_classic: 'Tradición',
            tag_favorite: 'Favoritos',
            prod_alfajores: 'Alfajores de Maicena',
            prod_medialunas: 'Medialunas de Manteca',
            prod_chocotorta: 'Tarta Chocotorta'
        },
        EN: { 
            hero_title: 'Home away from home.', 
            hero_subtitle: 'Authentic flavours of Argentina & Uruguay in Schöneberg.', 
            open_now: 'Open now', 
            handmade: 'Handmade from scratch', 
            info_title: 'What is a Merienda?', 
            info_desc: 'A small snack between 5 and 7 pm to bridge the time. Homemade goodness with warm hospitality.', 
            b2b_tag: 'B2B & Events', 
            b2b_title: 'Bring authentic taste to your office.', 
            b2b_cta: 'Contact Sales', 
            fresh_badge: 'FRESHLY BAKED', 
            product_name: 'Maicena Alfajores', 
            follow_ig: 'Follow on Instagram', 
            delivery: 'Wolt Delivery', 
            wolt_title: 'Wolt Delivery',
            modal_title: 'B2B Inquiry',
            modal_subtitle: "Let's bring Latin American flavors to your event.",
            opening_hours_title: 'Opening Hours',
            location_title: 'Location',
            legal_title: 'Legal & Privacy',
            language_title: 'Language',
            tag_bestseller: 'Bestseller',
            tag_classic: 'Tradition',
            tag_favorite: 'Favorites',
            prod_alfajores: 'Maicena Alfajores',
            prod_medialunas: 'Butter Medialunas',
            prod_chocotorta: 'Chocotorta Cake'
        },
        DE: { 
            hero_title: 'Ein zweites Zuhause.', 
            hero_subtitle: 'Authentische Aromen aus Argentinien & Uruguay in Schöneberg.', 
            open_now: 'Jetzt geöffnet', 
            handmade: 'Von Grund auf handgefertigt', 
            info_title: 'Was ist eine Merienda?', 
            info_desc: 'Ein kleiner Snack zwischen 17 y 19 Uhr. Hausgemachte Köstlichkeiten.', 
            b2b_tag: 'B2B & Events', 
            b2b_title: 'Bringen Sie echten Geschmack in Ihr Büro.', 
            b2b_cta: 'Vertrieb kontaktieren', 
            fresh_badge: 'FRISCH GEBACKEN', 
            product_name: 'Maisstärken-Alfajores', 
            follow_ig: 'Auf Instagram folgen', 
            delivery: 'Wolt Lieferung', 
            wolt_title: 'Wolt Delivery',
            modal_title: 'B2B & Catering Anfrage',
            modal_subtitle: 'Bringen wir lateinamerikanische Aromen zu Ihrem Event.',
            opening_hours_title: 'Öffnungszeiten',
            location_title: 'Standort',
            legal_title: 'Rechtliches',
            language_title: 'Sprache',
            tag_bestseller: 'Bestseller',
            tag_classic: 'Tradition',
            tag_favorite: 'Favoriten',
            prod_alfajores: 'Maisstärken-Alfajores',
            prod_medialunas: 'Butter-Medialunas',
            prod_chocotorta: 'Chocotorta-Torte'
        }
    };

    const legalContent = {
        impressum: `<h2>Impressum</h2><p><strong>Merienda Haus</strong><br>Apostel-Paulus-Straße 4<br>10823 Berlin</p><p>Inhaber: Domenika Warmuth</p><p>USt-IdNr.: [Number]</p>`,
        privacy: `<h2>Privacy Policy</h2><p>Data collected is used exclusively for B2B responses.</p>`
    };

    function updateLanguage(lang) {
        document.querySelectorAll('[data-t]').forEach(el => {
            const key = el.getAttribute('data-t');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }

    // Initialize in English
    updateLanguage('EN');

    // 1. Splash Logic - ELEGANT RHYTHM
    let progress = 0;
    const interval = setInterval(() => {
        progress += 2;
        loadingBar.style.width = `${progress}%`;
        if (progress === 30) loadingText.textContent = "Welcome to Merienda Haus";
        if (progress === 80) loadingText.textContent = "Enjoy your stay!";
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                splash.classList.add('is-hidden');
                body.classList.remove('is-locked');
                bento.classList.add('is-ready');
                checkContext();
            }, 600);
        }
    }, 50);

    // 2. Modals Logic
    const b2bModal = document.getElementById('b2b-modal');
    const legalModal = document.getElementById('legal-modal');
    const legalContentContainer = document.getElementById('legal-content-container');

    document.getElementById('b2b-trigger').addEventListener('click', () => b2bModal.classList.add('is-visible'));
    document.getElementById('close-b2b').addEventListener('click', () => b2bModal.classList.remove('is-visible'));
    document.getElementById('close-legal').addEventListener('click', () => legalModal.classList.remove('is-visible'));

    document.querySelectorAll('.legal-trigger').forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.getAttribute('data-modal');
            legalContentContainer.innerHTML = legalContent[type];
            legalModal.classList.add('is-visible');
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) e.target.classList.remove('is-visible');
    });

    document.getElementById('b2b-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('.submit-btn');
        btn.textContent = "Sending...";
        setTimeout(() => {
            e.target.style.display = "none";
            document.getElementById('form-success').style.display = "block";
        }, 1500);
    });

    // 3. Side Menu Drawer
    const sideMenu = document.getElementById('side-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');

    const toggleMenu = () => {
        sideMenu.classList.toggle('is-visible');
        menuOverlay.classList.toggle('is-visible');
    };

    menuToggle.addEventListener('click', toggleMenu);
    closeMenu.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', toggleMenu);

    // 4. Weather
    async function checkContext() {
        const hour = new Date().getHours();
        if (hour >= 19 || hour < 7) body.classList.add('night-mode');
        try {
            const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true');
            const data = await res.json();
            document.getElementById('weather-text').textContent = `Berlin: ${Math.round(data.current_weather.temperature)}°C`;
        } catch (e) { document.getElementById('weather-text').textContent = 'Berlin: 18°C'; }
    }

    // 5. Instagram Reel Logic (Video is handled by HTML autoplay/loop)
    const reel = document.getElementById('ig-reel');
    if (reel) {
        reel.addEventListener('loadeddata', () => {
            reel.play().catch(e => console.log("Auto-play prevented, waiting for interaction."));
        });
    }

    // 6. Bestseller Slider Loop
    let currentSlide = 0;
    const slides = document.querySelectorAll('.product-slide');
    if (slides.length > 0) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000);
    }

    // 7. Language Switcher (Inside Menu)
    const langSpans = document.querySelectorAll('.lang-switcher-menu span');
    langSpans.forEach(span => {
        span.onclick = () => {
            langSpans.forEach(s => s.classList.remove('active'));
            span.classList.add('active');
            updateLanguage(span.dataset.lang);
        };
    });

    document.getElementById('wolt-island').addEventListener('click', (e) => e.stopPropagation());
});
