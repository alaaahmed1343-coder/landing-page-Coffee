
/* ===========================
   Mobile Navigation
=========================== */

const menuButton = document.querySelector("#menuButton");
const navbarNav = document.querySelector("#navbarNav");
const navLinks = document.querySelectorAll(".nav-link");

function closeMenu() {
    navbarNav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
}

menuButton.addEventListener("click", () => {
    const isOpen = navbarNav.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );
});

navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMenu();
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 991) {
        closeMenu();
    }
});

/* ===========================
   Order Form
=========================== */

const orderForm = document.querySelector("#orderForm");
const orderMessage = document.querySelector("#orderMessage");

orderForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!orderForm.checkValidity()) {
        orderForm.reportValidity();
        return;
    }

    const fullName = document.querySelector("#fullName").value.trim();
    const coffeeChoice = document.querySelector("#coffeeChoice");
    const selectedDrink =
        coffeeChoice.options[coffeeChoice.selectedIndex].text;
    const quantity = Number(
        document.querySelector("#quantity").value
    );

    if (!fullName || !selectedDrink || quantity < 1) {
        orderMessage.textContent =
            "Please complete all fields correctly.";
        return;
    }

    orderMessage.textContent =
        `Thank you, ${fullName}! Your order for ${quantity} ${selectedDrink}` +
        `${quantity > 1 ? "s" : ""} has been confirmed.`;

    orderForm.reset();
});

/* ===========================
   Smooth Navigation
=========================== */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            history.replaceState(null, "", targetId);
        }
    });
});
