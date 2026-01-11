// ============================================
// WEDDING INVITATION - RIYA & LAVESH
// Interactive JavaScript
// ============================================

(function() {
    'use strict';
    
    // ============================================
    // DOM ELEMENTS
    // ============================================
    const cardFront = document.getElementById('card-front');
    const cardInside = document.getElementById('card-inside');
    const backgroundMusic = document.getElementById('background-music');
    const calendarBtn = document.getElementById('add-to-calendar-btn');
    const sections = document.querySelectorAll('section');
    
    // ============================================
    // STATE
    // ============================================
    let isCardOpened = false;
    let isMusicPlaying = false;
    
    // ============================================
    // CARD OPENING ANIMATION
    // ============================================
    function openCard() {
        if (isCardOpened) return;
        
        isCardOpened = true;
        
        // Track card opening
        trackEvent('card_opened', {
            'event_category': 'engagement',
            'event_label': 'invitation_card_opened'
        });
        
        // Add opening class to trigger animation
        cardFront.classList.add('opening');
        
        // Show card inside content after animation
        setTimeout(() => {
            cardInside.classList.add('visible');
            cardFront.style.display = 'none';
            
            // Start music
            playBackgroundMusic();
            
            // Initialize scroll reveal
            initScrollReveal();
        }, 600);
    }
    
    // ============================================
    // BACKGROUND MUSIC
    // ============================================
    function playBackgroundMusic() {
        if (isMusicPlaying) return;
        
        // Try to play music
        const playPromise = backgroundMusic.play();
        
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    isMusicPlaying = true;
                    console.log('Music started playing');
                    // Track music play
                    trackEvent('music_started', {
                        'event_category': 'engagement',
                        'event_label': 'background_music_playing'
                    });
                })
                .catch(error => {
                    console.log('Autoplay prevented:', error);
                    // Music autoplay was prevented by browser
                    // User interaction (card tap) should allow it
                    // Try again after a small delay
                    setTimeout(() => {
                        backgroundMusic.play()
                            .then(() => {
                                isMusicPlaying = true;
                            })
                            .catch(e => {
                                console.log('Music play failed:', e);
                            });
                    }, 100);
                });
        }
    }
    
    // ============================================
    // SCROLL REVEAL ANIMATIONS
    // ============================================
    function initScrollReveal() {
        // Intersection Observer for scroll-triggered animations
        const observerOptions = {
            root: null,
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    // Optionally unobserve after revealing
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe all sections
        sections.forEach(section => {
            observer.observe(section);
        });
    }
    
    // ============================================
    // PARALLAX EFFECT (SUBTLE)
    // ============================================
    function initParallax() {
        if (window.innerWidth < 768) return; // Skip on mobile for performance
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            // Apply subtle parallax to background photos
            const photoBackgrounds = document.querySelectorAll('.couple-photo-bg, .couple-photo-side, .couple-photo-footer');
            photoBackgrounds.forEach(bg => {
                const speed = 0.5;
                const yPos = -(scrolled * speed);
                bg.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
    
    // ============================================
    // ADD TO GOOGLE CALENDAR
    // ============================================
    function addToCalendar() {
        // Track calendar button click
        trackEvent('add_to_calendar_clicked', {
            'event_category': 'conversion',
            'event_label': 'google_calendar_add'
        });
        
        // Event details
        const eventDetails = {
            title: 'Riya & Lavesh - Wedding Celebration',
            description: 'Join us in celebrating the wedding of Riya and Lavesh. Reception of Barat at 11:00 AM, followed by Lunch at 1:00 PM, and Vidai at 5:00 PM.',
            location: 'Grand Dream Resort, NH 58, Near Kanker Khera Bypass, Meerut',
            startDate: '20260213T053000Z', // Feb 13, 2026, 11:00 AM IST = 05:30 AM UTC
            endDate: '20260213T113000Z',   // Feb 13, 2026, 5:00 PM IST = 11:30 AM UTC
        };
        
        // Create Google Calendar URL
        const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${eventDetails.startDate}/${eventDetails.endDate}&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}&sf=true&output=xml`;
        
        // Open in new tab
        window.open(googleCalendarUrl, '_blank');
    }
    
    // ============================================
    // SMOOTH SCROLL
    // ============================================
    function initSmoothScroll() {
        // Already handled by CSS scroll-behavior: smooth
        // But we can add programmatic smooth scrolling if needed
    }
    
    // ============================================
    // TOUCH INTERACTIONS FOR MOBILE
    // ============================================
    function initMobileInteractions() {
        // Prevent default zoom on double-tap for card
        cardFront.addEventListener('touchend', (e) => {
            e.preventDefault();
            openCard();
        }, { passive: false });
        
        // Allow normal touch events for calendar button
        calendarBtn.addEventListener('touchend', (e) => {
            e.preventDefault();
            addToCalendar();
        }, { passive: false });
    }
    
    // ============================================
    // PERFORMANCE OPTIMIZATIONS
    // ============================================
    
    // Lazy load images
    function initLazyLoading() {
        if ('loading' in HTMLImageElement.prototype) {
            // Browser supports native lazy loading
            const images = document.querySelectorAll('img[loading="lazy"]');
            images.forEach(img => {
                img.src = img.dataset.src || img.src;
            });
        } else {
            // Fallback for older browsers
            // Images will load normally
        }
    }
    
    // Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // ============================================
    // PRELOAD CRITICAL ASSETS
    // ============================================
    function preloadAssets() {
        // Preload music file
        backgroundMusic.load();
        
        // Preload critical images
        const criticalImages = [
            'images/ganesh.png',
            'images/couple-1.jpg'
        ];
        
        criticalImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }
    
    // ============================================
    // ANALYTICS / TRACKING
    // ============================================
    function trackEvent(eventName, eventData) {
        // Google Analytics 4 event tracking
        if (typeof window.trackInvitationEvent !== 'undefined') {
            window.trackInvitationEvent(eventName, eventData);
        }
        console.log('Event:', eventName, eventData);
    }
    
    // ============================================
    // ERROR HANDLING
    // ============================================
    function handleMusicError() {
        backgroundMusic.addEventListener('error', (e) => {
            console.error('Music loading error:', e);
            // Silently fail - invitation still works without music
        });
    }
    
    // ============================================
    // ACCESSIBILITY
    // ============================================
    function initAccessibility() {
        // Add keyboard support for card opening
        cardFront.setAttribute('tabindex', '0');
        cardFront.setAttribute('role', 'button');
        cardFront.setAttribute('aria-label', 'Open wedding invitation');
        
        cardFront.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openCard();
            }
        });
        
        // Calendar button accessibility
        calendarBtn.setAttribute('aria-label', 'Add wedding event to your Google Calendar');
    }
    
    // ============================================
    // BROWSER COMPATIBILITY CHECKS
    // ============================================
    function checkBrowserCompatibility() {
        // Check for IntersectionObserver support
        if (!('IntersectionObserver' in window)) {
            console.warn('IntersectionObserver not supported - using fallback');
            // Fallback: reveal all sections immediately
            sections.forEach(section => {
                section.classList.add('revealed');
            });
        }
    }
    
    // ============================================
    // SHARE FUNCTIONALITY (Optional)
    // ============================================
    function shareInvitation() {
        if (navigator.share) {
            navigator.share({
                title: 'Riya & Lavesh - Wedding Invitation',
                text: 'You are invited to celebrate our wedding!',
                url: window.location.href
            })
            .then(() => console.log('Shared successfully'))
            .catch(error => console.log('Share failed:', error));
        } else {
            // Fallback: copy link to clipboard
            const url = window.location.href;
            navigator.clipboard.writeText(url)
                .then(() => alert('Link copied to clipboard!'))
                .catch(err => console.error('Copy failed:', err));
        }
    }
    
    // ============================================
    // INITIALIZATION
    // ============================================
    function init() {
        console.log('Wedding Invitation Initialized');
        
        // Check browser compatibility
        checkBrowserCompatibility();
        
        // Preload assets
        preloadAssets();
        
        // Setup accessibility
        initAccessibility();
        
        // Handle music errors
        handleMusicError();
        
        // Card opening event listeners
        cardFront.addEventListener('click', openCard);
        
        // Mobile touch interactions
        initMobileInteractions();
        
        // Calendar button
        calendarBtn.addEventListener('click', addToCalendar);
        
        // Initialize parallax effect (desktop only)
        initParallax();
        
        // Track page load
        trackEvent('invitation_loaded', {
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent
        });
        
        // Remove loading class
        document.body.classList.remove('loading');
    }
    
    // ============================================
    // START APPLICATION
    // ============================================
    
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        // DOM already loaded
        init();
    }
    
    // Expose some functions globally for debugging (optional)
    window.weddingInvitation = {
        openCard,
        addToCalendar,
        shareInvitation
    };
    
})();
