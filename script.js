/**
 * Animation Controller for TriJem33 Consulting Website
 * Handles fade-up animations and accent dots
 */

// Animation handler for elements with fade-up class
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-up');

    elements.forEach(element => {
        const position = element.getBoundingClientRect();

        // Check if element is in viewport
        if (position.top < window.innerHeight - 100) {
            element.classList.add('animate');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Initial check on page load
document.addEventListener('DOMContentLoaded', function () {
    // Run initial animation check
    animateOnScroll();

    // Add reveal class to content-reveal elements after a delay
    setTimeout(() => {
        document.querySelectorAll('.content-reveal').forEach(el => {
            el.classList.add('reveal');
        });
    }, 300);

    // Add accent dots to each section
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        // Add multiple accent dots to each section
        for (let i = 0; i < 8; i++) {
            const dot = document.createElement('div');
            dot.className = 'accent-dot';
            section.appendChild(dot);
            console.log('accent dot added');
        }
    });
});