// ADA Compliance - Add aria-live regions for dynamic content
const liveRegion = document.createElement('div');
liveRegion.setAttribute('aria-live', 'polite');
liveRegion.setAttribute('aria-atomic', 'true');
liveRegion.classList.add('sr-only');
document.body.appendChild(liveRegion);

// Announce page changes for screen readers
function announce(message) {
    liveRegion.textContent = message;
    setTimeout(() => {
        liveRegion.textContent = '';
    }, 1000);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Add skip to content functionality
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.classList.add('skip-link');
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Announce page load
    announce(`Loaded ${document.title}`);
});

// Form validation helper
function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.setAttribute('aria-invalid', 'true');
            isValid = false;
        } else {
            field.removeAttribute('aria-invalid');
        }
    });

    return isValid;
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            announce(`Navigated to ${target.textContent || 'section'}`);
        }
    });
});