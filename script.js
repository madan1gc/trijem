/**
 * Animation Controller for TriJem33 Consulting Website
 * Handles element animations, accent dots, and interactive effects
 */

// Animation handler for elements with fade-up class
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-up');

    elements.forEach(element => {
        const position = element.getBoundingClientRect();

        // Check if element is in viewport with some buffer
        if (position.top < window.innerHeight - 100) {
            element.classList.add('animate');
        }
    });
}

// Initialize animations and decorative elements
document.addEventListener('DOMContentLoaded', function () {
    // Initial animation check
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
        }
        
        // Add one larger floating bubble to each section
        const bubble = document.createElement('div');
        bubble.className = 'floating-bubble';
        section.appendChild(bubble);
    });

    // Apply staggered animations to principle cards
    const cards = document.querySelectorAll('.principle-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
    });

    // Apply staggered animations to differentiator list items
    const listItems = document.querySelectorAll('.differentiators-list li');
    listItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });

    // Initialize parallax effect for decorative elements
    initParallaxEffect();
});

// Mouse parallax effect for accent dots
function initParallaxEffect() {
    document.addEventListener('mousemove', function(e) {
        const dots = document.querySelectorAll('.accent-dot');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        dots.forEach((dot, index) => {
            // Apply subtle movement based on mouse position
            // Different movement amount for each dot creates depth perception
            const moveX = (mouseX - 0.5) * (index % 5) * 10;
            const moveY = (mouseY - 0.5) * (index % 3) * 10;
            
            // Use transform to maintain smooth animation performance
            dot.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    }, { passive: true }); // Use passive event listener for better performance
}

// Toggle animation for certain interactions (can be called from HTML)
function toggleAnimation(elementId, className) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.toggle(className);
    }
}

// Add subtle animation to headings when they come into view
function animateHeadings() {
    const headings = document.querySelectorAll('h2, h3');
    
    headings.forEach(heading => {
        const position = heading.getBoundingClientRect();
        
        if (position.top < window.innerHeight - 50) {
            heading.classList.add('visible');
        }
    });
}

// Handle scroll events for animations
window.addEventListener('scroll', function() {
    animateOnScroll();
    animateHeadings();
}, { passive: true });

// Handle window resize to recalculate positions if needed
window.addEventListener('resize', function() {
    animateOnScroll();
}, { passive: true });

// Optional: Add subtle color shift to accent elements on scroll
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollPosition / maxScroll;
    
    // Subtle hue shift based on scroll position
    const hue = 30 + (scrollPercentage * 15); // Adjust range as needed
    
    // Apply to accent elements if desired
    document.querySelectorAll('.accent-element').forEach(el => {
        el.style.backgroundColor = `hsl(${hue}, 80%, 60%)`;
    });
});

// Make sure animations play when page loads even if already scrolled
if (document.readyState === 'complete') {
    animateOnScroll();
} else {
    window.addEventListener('load', animateOnScroll);
}