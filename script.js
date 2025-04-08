function animateOnScroll() {
    const elements = document.querySelectorAll(".fade-up");

    elements.forEach((element) => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
            element.classList.add("animate");
        }
    });
}

window.addEventListener("scroll", animateOnScroll);

document.addEventListener("DOMContentLoaded", function () {
    animateOnScroll();
    setTimeout(() => {
        document.querySelectorAll(".content-reveal").forEach((el) => {
            el.classList.add("reveal");
        });
    }, 300);

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        for (let i = 0; i < 8; i++) {
            const dot = document.createElement("div");
            dot.className = "accent-dot";
            section.appendChild(dot);
            console.log("accent dot added");
        }
    });
});
