document.addEventListener("DOMContentLoaded", () => {
    // Hero section animation
    setTimeout(() => {
        document.querySelectorAll(".fade-in").forEach(el => {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        });
    }, 500);

    // Theme Toggle
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        themeToggle.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Hero section animation
    setTimeout(() => {
        document.querySelectorAll(".fade-in").forEach(el => {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        });
    }, 500);
    
    // Theme Toggle
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        themeToggle.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
    });

    // Add delay to body animation to create smooth intro effect
    document.body.style.animationDelay = "0.2s";
});
