// ============================================
// RSVP Form Handling
// ============================================

document.getElementById('rsvpForm').addEventListener('submit', function(e) {
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

    // Optional: Send email (requires backend)
    // sendEmailNotification(formData);

    console.log('RSVP Response:', formData);
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
    document.getElementById('wedding-date').textContent = 'Saturday, July 4, 2026';
    document.getElementById('wedding-time').textContent = '6:00 PM';
    document.getElementById('wedding-location').textContent = 'Beautiful Venue, Romania';

    // You can also update contact info
    // document.querySelector('.contact-info a').href = 'mailto:your-email@example.com';
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

// Add fade-in animation to sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
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
// Theme Customization
// ============================================

function setWeddingDate(date, time, location) {
    document.getElementById('wedding-date').textContent = date;
    document.getElementById('wedding-time').textContent = time;
    document.getElementById('wedding-location').textContent = location;
}

function setContactInfo(email, phone) {
    const emailLink = document.querySelector('.contact-info a[href^="mailto:"]');
    const phoneLink = document.querySelector('.contact-info a[href^="tel:"]');
    
    if (emailLink) emailLink.href = `mailto:${email}`;
    if (phoneLink) phoneLink.href = `tel:${phone}`;
}

// ============================================
// Mobile Menu Toggle (Optional)
// ============================================

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
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