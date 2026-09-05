/* =====================================================
   ZAHIRA SHIRIN PORTFOLIO
   JAVASCRIPT
===================================================== */


/* ---------- NAVBAR SCROLL EFFECT ---------- */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* ---------- MOBILE MENU ---------- */

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-active");

});


/* ---------- CLOSE MOBILE MENU ---------- */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("mobile-active");

    });

});


/* ---------- SCROLL REVEAL ---------- */

const revealElements = document.querySelectorAll(
    ".section-heading, .skill-card, .project-card, .experience-item, .research-card, .timeline-item"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* ---------- CONSOLE MESSAGE ---------- */

console.log(
    "Welcome to Zahira Shirin's portfolio ✦"
);