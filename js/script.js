document.addEventListener("DOMContentLoaded", function () {

    // ================================
    // NAVIGATION
    // ================================

    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId.startsWith("#")) {

                event.preventDefault();

                const targetSection = document.querySelector(targetId);

                if (targetSection) {

                    targetSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }
            }

        });

    });


    // ================================
    // WORK CARD
    // ================================

    function showProject(project) {

    if (project === "website") {

        alert(
            "Business Website\n\n" +
            "Category: Website Development\n\n" +
            "A modern website concept created " +
            "for a professional business."
        );

    }

    else if (project === "management") {

        alert(
            "Digital Management System\n\n" +
            "Category: Web Application\n\n" +
            "A web-based system designed to " +
            "organize business data efficiently."
        );

    }

    else if (project === "interface") {

        alert(
            "Modern Interface\n\n" +
            "Category: UI Design\n\n" +
            "A clean interface concept focused " +
            "on usability and visual consistency."
        );

    }

}

    // ================================
    // CONTACT FORM
    // ================================

    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const message = document.querySelector("#message").value.trim();

            if (name === "" || email === "" || message === "") {

                alert("Please complete all fields.");

                return;
            }

            alert(
                "Thank you, " +
                name +
                "! Your message has been received."
            );

            contactForm.reset();

        });

    }


    // ================================
    // HERO BUTTON
    // ================================

    const exploreButton = document.querySelector(
        '.hero a[href="#work"]'
    );

    if (exploreButton) {

        exploreButton.addEventListener("click", function () {

            const workSection = document.querySelector("#work");

            if (workSection) {

                workSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }


    // ================================
    // CONTACT BUTTON
    // ================================

    const contactButton = document.querySelector(
        '.hero a[href="#contact"]'
    );

    if (contactButton) {

        contactButton.addEventListener("click", function () {

            const contactSection = document.querySelector("#contact");

            if (contactSection) {

                contactSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }

});