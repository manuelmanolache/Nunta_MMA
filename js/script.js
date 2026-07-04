// ============================================
// Splash Screen / Opening Page Handler
// ============================================

function isInViewport(sectionRect) {
    return sectionRect.top < window.innerHeight && sectionRect.bottom > 0;
}

function initializeSplashScreen() {
    const splashScreen = document.getElementById('splashScreen');
    const splashImage = document.getElementById('splash-photo');
    const fallbackImages = ['images/invitation.jpg', 'images/couple.jpg'];
    let fallbackIndex = 0;

    if (!splashScreen || !splashImage) {
        return;
    }

    function showFallbackState() {
        splashScreen.classList.add('image-failed');
    }

    splashImage.addEventListener('load', function() {
        if (splashImage.naturalWidth > 0) {
            splashScreen.classList.remove('image-failed');
        }
    });

    splashImage.addEventListener('error', function() {
        if (fallbackIndex < fallbackImages.length) {
            splashImage.src = fallbackImages[fallbackIndex];
            fallbackIndex++;
            return;
        }

        showFallbackState();
    });

    if (splashImage.complete && splashImage.naturalWidth === 0) {
        showFallbackState();
    }
}

function enterWebsite() {
    const splashScreen = document.getElementById('splashScreen');
    const mainContent = document.getElementById('mainContent');
    
    // Add animation classes
    splashScreen.classList.add('hidden');
    splashScreen.classList.remove('active');
    mainContent.classList.remove('hidden');
    
    // Optionally scroll to top
    window.scrollTo(0, 0);

    // IntersectionObserver does not re-fire for elements whose parent transitions
    // from display:none to visible, so manually reveal any sections that are
    // already in the viewport after the splash screen is dismissed.
    requestAnimationFrame(function() {
        mainContent.querySelectorAll('section').forEach(function(section) {
            var sectionRect = section.getBoundingClientRect();
            if (isInViewport(sectionRect)) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    });
}

// Allow Enter key to proceed from splash screen
document.addEventListener('keydown', function(event) {
    const splashScreen = document.getElementById('splashScreen');
    if (splashScreen && splashScreen.classList.contains('active')) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            enterWebsite();
        }
    }
});

// ============================================
// RSVP Form Handling
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initializeSplashScreen();

    // Check if form exists before adding listener
    const rsvpForm = document.getElementById('rsvpForm');
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                attending: document.getElementById('attending').value,
                guests: document.getElementById('guests').value,
                dietary: document.getElementById('dietary').value,
                message: document.getElementById('message').value
            };

            // Validate form
            if (!formData.name || !formData.email || !formData.attending || !formData.guests) {
                showFormMessage('Please fill in all required fields.', 'error');
                return;
            }

            // Store data in localStorage (for demo purposes)
            const responses = JSON.parse(localStorage.getItem('rsvpResponses')) || [];
            responses.push({
                ...formData,
                timestamp: new Date().toLocaleString()
            });
            localStorage.setItem('rsvpResponses', JSON.stringify(responses));

            // Show success message
            showFormMessage('Thank you for your RSVP! We look forward to celebrating with you! 🎉', 'success');

            // Reset form
            document.getElementById('rsvpForm').reset();

            console.log('RSVP Response:', formData);
        });
    }
});

// Function to display form messages
function showFormMessage(message, type) {
    const messageElement = document.getElementById('formMessage');
    messageElement.textContent = message;
    messageElement.className = `form-message ${type}`;

    // Hide message after 5 seconds
    setTimeout(() => {
        messageElement.className = 'form-message';
    }, 5000);
}

// ============================================
// Smooth Scrolling for Navigation Links
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// Wedding Details (Update these with your info)
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Update these with your actual wedding details
    const dateElement = document.getElementById('wedding-date');
    const timeElement = document.getElementById('wedding-time');
    const locationElement = document.getElementById('wedding-location');
    
    if (dateElement) dateElement.textContent = 'Saturday, July 4, 2026';
    if (timeElement) timeElement.textContent = '6:00 PM';
    if (locationElement) locationElement.textContent = 'Beautiful Venue, Romania';
});

// ============================================
// Image Lazy Loading
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src; // Trigger load
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => imageObserver.observe(img));
}

// ============================================
// Scroll Animation for Elements
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add fade-in animation to sections (after splash screen)
document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('mainContent');
    if (mainContent) {
        mainContent.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    }
});

// ============================================
// Print RSVP Responses (Admin Feature)
// ============================================

function printRSVPResponses() {
    const responses = JSON.parse(localStorage.getItem('rsvpResponses')) || [];
    console.log('=== RSVP RESPONSES ===');
    console.table(responses);
    return responses;
}

// Access in browser console with: printRSVPResponses()

// ============================================
// Theme Customization Functions
// ============================================

function setWeddingDate(date, time, location) {
    const dateElement = document.getElementById('wedding-date');
    const timeElement = document.getElementById('wedding-time');
    const locationElement = document.getElementById('wedding-location');
    
    if (dateElement) dateElement.textContent = date;
    if (timeElement) timeElement.textContent = time;
    if (locationElement) locationElement.textContent = location;
}

function setContactInfo(email, phone) {
    const emailLink = document.querySelector('.contact-info a[href^="mailto:"]');
    const phoneLink = document.querySelector('.contact-info a[href^="tel:"]');
    
    if (emailLink) emailLink.href = `mailto:${email}`;
    if (phoneLink) phoneLink.href = `tel:${phone}`;
}

// ============================================
// Countdown Timer (Optional)
// ============================================

function startCountdown(weddingDate) {
    const updateCountdown = () => {
        const today = new Date().getTime();
        const wedding = new Date(weddingDate).getTime();
        const difference = wedding - today;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            console.log(`Wedding in: ${days}d ${hours}h ${minutes}m ${seconds}s`);
        }
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Usage: startCountdown('July 4, 2026');
