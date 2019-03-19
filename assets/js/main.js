---
---

// -----------------
// Load Particles.js from NPM
// -----------------
const particles = require('particles.js');

var base_url = window.location.origin;

particlesJS.load('particles-js', '{{site.url}}/assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});
// -----------------

// -----------------
// Load Three.js from NPM
// -----------------
var THREE = require('THREE');

// -----------------

// -----------------
// Slide down animation for menus
// -----------------
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        var childDivs = document.getElementById('main-menu').getElementsByClassName('navbar-item');

        for (i = 0; i < childDivs.length; i++) {
            var childDiv = childDivs[i];
            childDiv.classList.add('slide-down');
        }
    }, 0);
}, false);
// -----------------


// -----------------
// Add click animation to tabs class
// -----------------
document.addEventListener('DOMContentLoaded', function () {
    // Get the container element
    var tabcontent = document.getElementsByClassName('tab-content');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }


    var tabsElements = document.getElementsByClassName('tabs');

    for (var i = 0; i < tabsElements.length; i++) {
        // Get unordered list element
        var tabsList = tabsElements[i].getElementsByClassName('container')[0].getElementsByTagName("UL")[0];
        // Get all children list items
        var tabs = tabsList.children;
        // Loop through the children and add the active class to the current/clicked button
        for (var i = 0; i < tabs.length; i++) {
            document.getElementById(tabsList.getElementsByClassName("is-active")[0].getAttribute('data-tab')).style.display = 'block';

            tabs[i].addEventListener("click", function () {
                var current = tabsList.getElementsByClassName("is-active");
                current[0].classList.toggle('is-active');
                this.className += " is-active";


                var tabcontent = document.getElementsByClassName('tab-content');
                for (i = 0; i < tabcontent.length; i++) {
                    tabcontent[i].style.display = "none";
                }
                // Show the current tab, and add an "active" class to the button that opened the tab
                var currentContent = document.getElementById(this.getAttribute('data-tab'));
                currentContent.style.display = "block";
                currentContent.classList.add('is-active');   
            
            });
        }
    }
}, false);

// -----------------


// -----------------
// Fill mobile menu
// -----------------
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});
// -----------------

