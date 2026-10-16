
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const dropdowns = document.querySelectorAll(".dropdown");
const authBtn = document.getElementById("authBtn");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector(".dropdown-btn");

    button.addEventListener("click", () => {
        const shouldOpen = !dropdown.classList.contains("active");

        dropdowns.forEach((item) => {
            item.classList.remove("active");
            item.querySelector(".dropdown-btn")
                .setAttribute("aria-expanded", "false");
        });

        if (shouldOpen) {
            dropdown.classList.add("active");
            button.setAttribute("aria-expanded", "true");
        }
    });
});

document.addEventListener("click", (event) => {
    if (!event.target.closest(".dropdown")) {
        dropdowns.forEach((dropdown) => {
            dropdown.classList.remove("active");
            dropdown.querySelector(".dropdown-btn")
                .setAttribute("aria-expanded", "false");
        });
    }
});

document.querySelectorAll(".dropdown-menu a").forEach((link) => {
    link.addEventListener("click", () => {
        dropdowns.forEach((dropdown) => {
            dropdown.classList.remove("active");
            dropdown.querySelector(".dropdown-btn")
                .setAttribute("aria-expanded", "false");
        });

        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

authBtn.addEventListener("click", () => {
    if (authBtn.textContent === "Login") {
        alert("Login page will open here.");
    } else {
        const confirmLogout = confirm("Do you want to logout?");

        if (confirmLogout) {
            authBtn.textContent = "Login";
            alert("You have logged out.");
        }
    }
});
