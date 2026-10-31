
/* =====================================
   MOBILE MENU
===================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("show");

        const icon = menuToggle.querySelector("i");

        if (navLinks.classList.contains("show")) {
            icon.classList.replace("fa-bars", "fa-xmark");
        } else {
            icon.classList.replace("fa-xmark", "fa-bars");
        }

    });

}


/* =====================================
   CLOSE MOBILE MENU
===================================== */

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

        const icon = menuToggle.querySelector("i");

        if (icon) {
            icon.classList.replace("fa-xmark", "fa-bars");
        }

    });

});


/* =====================================
   PAGE LOADER
===================================== */

window.addEventListener("load", function () {

    const loader = document.getElementById("pageLoader");

    if (loader) {

        setTimeout(function () {
            loader.classList.add("loader-hidden");
        }, 500);

    }

});


/* =====================================
   SCROLL PROGRESS BAR
===================================== */

window.addEventListener("scroll", function () {

    const progressBar = document.getElementById("progressBar");

    const scrollTop = window.scrollY;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        scrollHeight > 0
            ? (scrollTop / scrollHeight) * 100
            : 0;

    if (progressBar) {
        progressBar.style.width = progress + "%";
    }

});


/* =====================================
   BACK TO TOP BUTTON
===================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (backToTop) {

        if (window.scrollY > 400) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    }

});

if (backToTop) {

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =====================================
   ACTIVE NAVIGATION ON SCROLL
===================================== */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navigationLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


/* =====================================
   SMOOTH SCROLL
===================================== */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});
