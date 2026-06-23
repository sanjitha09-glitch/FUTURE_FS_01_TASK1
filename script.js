/* ==========================================
   PORTFOLIO JAVASCRIPT
   Katukuri Sanjitha Portfolio
========================================== */

/* ==========================================
   PAGE LOAD ANIMATION
========================================== */

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});


/* ==========================================
   TYPING ANIMATION
========================================== */

const typingElement = document.getElementById("typing");

const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "JavaScript Enthusiast",
    "Python Programmer",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeWriter() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeWriter, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

        }

    }

    setTimeout(typeWriter, deleting ? 60 : 120);
}

typeWriter();


/* ==========================================
   MOBILE MENU TOGGLE
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("mobile-open");

        if (navLinks.classList.contains("mobile-open")) {

            navLinks.style.display = "flex";
            navLinks.style.flexDirection = "column";
            navLinks.style.position = "absolute";
            navLinks.style.top = "80px";
            navLinks.style.right = "20px";
            navLinks.style.width = "250px";
            navLinks.style.padding = "20px";
            navLinks.style.borderRadius = "15px";
            navLinks.style.background = "#1E293B";
            navLinks.style.backdropFilter = "blur(15px)";
            navLinks.style.zIndex = "999";

        } else {

            navLinks.style.display = "none";

        }

    });

}


/* ==========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================== */

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth < 768) {

            navLinks.style.display = "none";

            navLinks.classList.remove("mobile-open");

        }

    });

});


/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(
`
.about,
.skills,
.projects,
.education,
.certifications,
.contact,
.project-card,
.skill-card,
.info-card,
.cert-card,
.hire-card,
.stat-card
`
);

function revealSections() {

    revealElements.forEach(element => {

        const windowHeight =
            window.innerHeight;

        const revealTop =
            element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (
            revealTop <
            windowHeight - revealPoint
        ) {

            element.classList.add("active-reveal");

        }

    });

}

window.addEventListener(
    "scroll",
    revealSections
);

window.addEventListener(
    "load",
    revealSections
);


/* ==========================================
   ACTIVE NAVBAR HIGHLIGHT
========================================== */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove(
            "active-link"
        );

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add(
                "active-link"
            );

        }

    });

});


/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters =
    document.querySelectorAll(".counter");

const speed = 100;

function animateCounter(counter) {

    const target =
        +counter.dataset.target;

    let count = 0;

    const updateCounter = () => {

        const increment =
            target / speed;

        if (count < target) {

            count += increment;

            counter.innerText =
                Math.ceil(count);

            requestAnimationFrame(
                updateCounter
            );

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

}

const counterObserver =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter(
                entry.target
            );

            counterObserver.unobserve(
                entry.target
            );

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const backToTop =
document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.classList.add(
    "back-to-top"
);

document.body.appendChild(
    backToTop
);

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 400) {

            backToTop.style.display =
                "block";

        } else {

            backToTop.style.display =
                "none";

        }

    }
);

backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    }
);


/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

const navbar =
document.querySelector(".navbar");

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(15,23,42,.95)";

            navbar.style.backdropFilter =
                "blur(20px)";

        } else {

            navbar.style.background =
                "rgba(15,23,42,.65)";

        }

    }
);


/* ==========================================
   CONTACT FORM
========================================== */

const contactForm =
document.querySelector(
    ".contact-form"
);

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        e => {

            e.preventDefault();

            alert(
                "Thank you for contacting me! I will get back to you soon."
            );

            contactForm.reset();

        }
    );

}


/* ==========================================
   PROJECT CARD INTERACTION
========================================== */

const projectCards =
document.querySelectorAll(
    ".project-card"
);

projectCards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
                "translateY(-15px) scale(1.02)";

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "translateY(0) scale(1)";

        }
    );

});


/* ==========================================
   SKILL CARD GLOW
========================================== */

const skillCards =
document.querySelectorAll(
    ".skill-card"
);

skillCards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.boxShadow =
                "0 0 30px rgba(59,130,246,.4)";

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.boxShadow =
                "none";

        }
    );

});


/* ==========================================
   SMOOTH BUTTON EFFECT
========================================== */

document.querySelectorAll(
    ".btn"
).forEach(button => {

    button.addEventListener(
        "mouseenter",
        () => {

            button.style.transform =
                "translateY(-4px)";

        }
    );

    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform =
                "translateY(0)";

        }
    );

});


/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log(`
====================================
 Portfolio Loaded Successfully 🚀
 Katukuri Sanjitha Portfolio
====================================
`);