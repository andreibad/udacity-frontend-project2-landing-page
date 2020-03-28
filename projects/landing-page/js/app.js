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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function sectionview() {
    console.log('The section was viewed');
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
let navbarlist = document.querySelector("#navbar__list");
let sections = document.querySelectorAll("[data-nav]");
for (let section of sections) {
      console.log(section);
      let navitem = document.createElement("li");
      let navlink = document.createElement("a");
      navlink.innerText = section.getAttribute("data-nav");
      navlink.setAttribute("href","#"+ section.getAttribute("data-nav"))
      navlink.className = "menu__link";
      navitem.appendChild(navlink)
      navbarlist.appendChild(navitem);
  }

// Add class 'active' to section when near top of viewport
function makeactive(event) {
    console.log("scrolling");
    for (let section of sections) {
        var rect = section.getBoundingClientRect();
        console.log(rect.top);
        if (rect.top < 700 & rect.top > -120){
            section.className = "your-active-class";
        }
        else{
            section.className = "";
        }
    }
}
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
let main = document.querySelector("main");
console.log(main);
document.addEventListener("scroll",makeactive);



