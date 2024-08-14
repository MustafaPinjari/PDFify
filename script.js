
// JavaScript to toggle the mobile navigation menu
document.getElementById('hamburger-menu').addEventListener('click', function () {
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
  });

// Optional: Close the menu when clicking outside
document.addEventListener("click", function(e) {
    var menu = document.getElementById("nav-menu");
    var hamburger = document.getElementById("hamburger");

    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
        menu.classList.remove("show");
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('nav i.fa-bars'); // Select the hamburger icon
    const navMenu = document.querySelector('nav .flex.space-x-6'); // Select the menu that should be shown/hidden

    menuIcon.addEventListener('click', function () {
        navMenu.classList.toggle('show'); // Toggle the 'show' class to display/hide the menu
    });
});


  