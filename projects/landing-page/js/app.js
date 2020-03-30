/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let navbarlist = document.querySelector("#navbar__list");
let sections = document.querySelectorAll("[data-nav]");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav & add eventlisteners for click
function buildmenu(){
    for (let section of sections) {
        let navitem = document.createElement("li");
        navitem.innerText = section.getAttribute("data-nav");
        navitem.addEventListener("click",scrolltosection);
        navitem.className = "menu__link";
        navbarlist.appendChild(navitem);
    }
}
// Add class 'active' to section when near top of viewport
function makeactive(event) {
    for (let section of sections) {
        var rect = section.getBoundingClientRect();
        if (rect.top < 700 & rect.top > -120){
            section.className = "your-active-class";
        }
        else{
            section.className = "";
        }
    }
}
// Scroll to section
function scrolltosection(event) { 
    var e = document.querySelector("[data-nav='" + event.target.innerText + "']");
    e.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildmenu();
// Scroll to section on link click
//added in buildmenu function
// Set sections as active
document.addEventListener("scroll", makeactive);



