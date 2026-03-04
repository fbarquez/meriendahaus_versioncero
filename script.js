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
            prod_chocotorta: 'Tarta Chocotorta',
            tiktok_title: 'Comunidad',
            tiktok_subtitle: 'Ver Reseñas'
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
            prod_chocotorta: 'Chocotorta Cake',
            tiktok_title: 'Community',
            tiktok_subtitle: 'Watch Reviews'
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
            prod_chocotorta: 'Chocotorta-Torte',
            tiktok_title: 'Community',
            tiktok_subtitle: 'Bewertungen'
        }
    };

    const legalContent = {
        impressum: `
            <h2>IMPRESSUM</h2>
            <div class="legal-scroll-content">
                <p><strong>Merienda Haus</strong><br>
                Inhaber: Paolo Zagami<br>
                Apostel-Paulus-Straße 4<br>
                10823 Berlin<br>
                Deutschland</p>
                
                <p><strong>E-Mail:</strong> <a href="mailto:hola@meriendahaus.com">hola@meriendahaus.com</a><br>
                <strong>Tel.:</strong> +49 163 1593783</p>
                
                <p><strong>USt-IdNr.:</strong> DE311996944</p>
                
                <p><strong>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</strong><br>
                Paolo Zagami, Anschrift wie oben</p>
                
                <p>Dieses Impressum gilt auch für die Website www.meriendahaus.com sowie für den Instagram-Auftritt @meriendahaus.</p>
                
                <hr>
                
                <h3>Verbraucherstreitbeilegung (§ 36 VSBG)</h3>
                <p>Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                
                <h3>Haftung für Inhalte</h3>
                <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Inhalte umgehend.</p>
                
                <h3>Haftung für Links</h3>
                <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir keine Gewähr. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links umgehend.</p>
                
                <h3>Urheberrecht</h3>
                <p>Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung und Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung.</p>
                
                <h3>Widerspruch gegen Werbe-E-Mails</h3>
                <p>Der Nutzung der im Impressum veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung wird hiermit widersprochen.</p>
            </div>
        `,
        privacy: `
            <h2>Datenschutzerklärung</h2>
            <div class="legal-scroll-content">
                <p>Wir nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst. Wir verarbeiten personenbezogene Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften, insbesondere der Datenschutz-Grundverordnung (DSGVO) sowie dem Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz (TDDDG).</p>

                <h3>1. Verantwortlicher</h3>
                <p><strong>Merienda Haus</strong><br>
                Inhaber: Paolo Zagami<br>
                Apostel-Paulus-Straße 4, 10823 Berlin, Deutschland<br>
                E-Mail: hola@meriendahaus.com<br>
                Telefon: +49 163 1593783</p>

                <h3>2. Datenverarbeitung beim Besuch unserer Website</h3>
                <p><strong>a) Technische Bereitstellung / Server-Logfiles</strong><br>
                Beim Aufruf unserer Website werden durch den Webserver automatisch Informationen verarbeitet, die Ihr Browser übermittelt (IP-Adresse, Datum/Uhrzeit, aufgerufene Seite, Referrer-URL, Browsertyp).<br>
                Zweck: Auslieferung der Website sowie Gewährleistung von Stabilität und Sicherheit.<br>
                Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.</p>

                <p><strong>b) Cookies</strong><br>
                Wir verwenden keine Analyse- oder Marketing-Cookies. Soweit technisch notwendige Cookies eingesetzt werden, erfolgt dies auf Grundlage von § 25 Abs. 2 TDDDG sowie Art. 6 Abs. 1 lit. f DSGVO.</p>

                <h3>3. Keine Bestellungen über unsere Website / Weiterleitung zu Wolt</h3>
                <p>Auf unserer Website werden derzeit keine Bestellungen entgegengenommen. Wenn Sie Produkte über Wolt bestellen, erfolgt die Verarbeitung Ihrer Daten nach den Datenschutzbestimmungen von Wolt. Unsere Website enthält hierzu lediglich einen Link.</p>

                <h3>4. Zahlungen im Ladengeschäft (SumUp)</h3>
                <p>Wenn Sie bei uns im Ladengeschäft bargeldlos bezahlen, werden Zahlungsdaten zur Abwicklung an den Zahlungsdienstleister SumUp übermittelt.<br>
                Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertrag/Zahlungsabwicklung).</p>

                <h3>5. Kontaktaufnahme</h3>
                <p>Wenn Sie uns per E-Mail oder telefonisch kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung der Anfrage.<br>
                Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO oder Art. 6 Abs. 1 lit. f DSGVO.</p>

                <h3>6. Social Media: Instagram</h3>
                <p>Wir betreiben eine Onlinepräsenz auf Instagram (Meta Platforms Ireland Limited). Weitere Informationen finden Sie in den Datenschutzinformationen von Instagram/Meta.</p>

                <h3>7. Ihre Rechte</h3>
                <p>Sie haben Rechte auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO), Widerspruch (Art. 21 DSGVO) und Widerruf (Art. 7 Abs. 3 DSGVO).<br>
                Zudem besteht ein Beschwerderecht bei der Aufsichtsbehörde (Berliner Beauftragte für Datenschutz).</p>

                <h3>8. Stand dieser Datenschutzerklärung</h3>
                <p>03.03.2026</p>
            </div>
        `
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
    const tiktokModal = document.getElementById('tiktok-modal');
    const legalContentContainer = document.getElementById('legal-content-container');

    document.getElementById('b2b-trigger').addEventListener('click', () => b2bModal.classList.add('is-visible'));
    document.getElementById('tiktok-trigger').addEventListener('click', () => {
        tiktokModal.classList.add('is-visible');
        playTikTokVideo(currentTikTokIndex);
    });

    document.getElementById('close-b2b').addEventListener('click', () => b2bModal.classList.remove('is-visible'));
    document.getElementById('close-legal').addEventListener('click', () => legalModal.classList.remove('is-visible'));
    document.getElementById('close-tiktok').addEventListener('click', () => {
        tiktokModal.classList.remove('is-visible');
        pauseAllTikTokVideos();
    });

    // TikTok Slider Logic
    let currentTikTokIndex = 0;
    const tiktokSlides = document.querySelectorAll('.tiktok-slide');
    const tiktokWrapper = document.getElementById('tiktok-wrapper');
    const tiktokDots = document.querySelectorAll('.tiktok-dots .dot');

    function updateTikTokSlider() {
        tiktokWrapper.style.transform = `translateX(-${currentTikTokIndex * 100}%)`;
        tiktokSlides.forEach((slide, index) => {
            if (index === currentTikTokIndex) {
                slide.classList.add('active');
                playTikTokVideo(index);
            } else {
                slide.classList.remove('active');
                pauseTikTokVideo(index);
            }
        });
        tiktokDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentTikTokIndex);
        });
    }

    function playTikTokVideo(index) {
        const video = tiktokSlides[index].querySelector('video');
        if (video) video.play();
    }

    function pauseTikTokVideo(index) {
        const video = tiktokSlides[index].querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    }

    function pauseAllTikTokVideos() {
        tiktokSlides.forEach((_, index) => pauseTikTokVideo(index));
    }

    document.getElementById('tiktok-next').addEventListener('click', () => {
        currentTikTokIndex = (currentTikTokIndex + 1) % tiktokSlides.length;
        updateTikTokSlider();
    });

    document.getElementById('tiktok-prev').addEventListener('click', () => {
        currentTikTokIndex = (currentTikTokIndex - 1 + tiktokSlides.length) % tiktokSlides.length;
        updateTikTokSlider();
    });

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

    // 5. Bestseller Slider Loop
    let currentSlide = 0;
    const slides = document.querySelectorAll('.product-slide');
    if (slides.length > 0) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000);
    }

    // 6. Language Switcher (Inside Menu)
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
