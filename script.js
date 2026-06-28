const words = [
    "Web Developer",
    "Java Programmer",
    "AI Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;

const typingElement =
document.getElementById("typing");

function typeEffect() {

    if(charIndex < words[wordIndex].length){

        typingElement.textContent +=
        words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    } else {

        setTimeout(eraseEffect,1500);
    }
}

function eraseEffect() {

    if(typingElement.textContent.length > 0){

        typingElement.textContent =
        typingElement.textContent.slice(0,-1);

        setTimeout(eraseEffect,50);

    } else {

        wordIndex++;

        if(wordIndex >= words.length){
            wordIndex = 0;
        }

        charIndex = 0;

        setTimeout(typeEffect,300);
    }
}

document.addEventListener(
"DOMContentLoaded",
() => {
    typeEffect();
    initTheme();
    initScrollSpy();
    initMobileMenu();
    initScrollToTop();
}
);

document
.getElementById("contactForm")
.addEventListener("submit",
function(e){

e.preventDefault();

alert(
"Thank you! Your message has been received."
);

this.reset();

});

// Theme Toggle logic
function initTheme() {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const themeIcon = themeToggleBtn.querySelector("i");
    
    const currentTheme = localStorage.getItem("theme") || "dark";
    if (currentTheme === "light") {
        document.body.classList.add("light-mode");
        themeIcon.className = "fas fa-moon";
    } else {
        document.body.classList.remove("light-mode");
        themeIcon.className = "fas fa-sun";
    }

    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        let theme = "dark";
        if (document.body.classList.contains("light-mode")) {
            theme = "light";
            themeIcon.className = "fas fa-moon";
        } else {
            themeIcon.className = "fas fa-sun";
        }
        localStorage.setItem("theme", theme);
    });
}

// ScrollSpy logic to set active class in navbar links
function initScrollSpy() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Highlight a little early as the user scrolls
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
}

// Mobile menu toggle logic
function initMobileMenu() {
    const menuToggleBtn = document.getElementById("menu-toggle");
    const navUl = document.querySelector("nav ul");
    
    if (menuToggleBtn && navUl) {
        menuToggleBtn.addEventListener("click", () => {
            navUl.classList.toggle("open");
            const icon = menuToggleBtn.querySelector("i");
            if (navUl.classList.contains("open")) {
                icon.className = "fas fa-times";
            } else {
                icon.className = "fas fa-bars";
            }
        });

        // Close menu when links are clicked
        const navLinks = document.querySelectorAll("nav ul li a");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navUl.classList.remove("open");
                const icon = menuToggleBtn.querySelector("i");
                icon.className = "fas fa-bars";
            });
        });
    }
}

// Scroll to top button visibility
function initScrollToTop() {
    const scrollTopBtn = document.getElementById("scroll-to-top");
    if (scrollTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add("show");
            } else {
                scrollTopBtn.classList.remove("show");
            }
        });
    }
}