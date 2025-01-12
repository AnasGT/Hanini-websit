let toggleButton = document.querySelector(".toggle-menu");
let navLinks = document.querySelector("header nav ul");
let links = document.querySelectorAll("header nav ul li a");

// Toggle menu for mobile
toggleButton.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent click from bubbling to document
    navLinks.classList.toggle("open");
});

// Close menu when clicking anywhere in the document
document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !toggleButton.contains(e.target)) {
        navLinks.classList.remove("open");
    }
});

// Add click event to all navigation links
links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        links.forEach(link => link.classList.remove("active"));
        
        // Add active class to clicked link
        this.classList.add("active");
        
        // Get the target section
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        
        // Smooth scroll to target
        targetSection.scrollIntoView({ behavior: "smooth" });
        
        // Close mobile menu
        navLinks.classList.remove("open");
    });
});

// Prevent menu from closing when clicking inside it
navLinks.addEventListener("click", (e) => {
    e.stopPropagation();
});
