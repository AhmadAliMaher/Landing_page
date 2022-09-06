//Global Variables.
const unOrderedList = document.querySelector("ul");
const sections = Array.from(document.querySelectorAll("section"));

//Create a navigation list dynamically with anchors.
/*
The Reference: 
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_createelement3
*/
const createNavItems = () => {
  for (let section of sections) {
    listItem = document.createElement("li");
    listItem.innerHTML = `<a class='menu__link' href='#${section.id}' >${section.dataset.nav}</a>`;
    unOrderedList.appendChild(listItem);
  }
};
createNavItems();

//Scrolling smoothly through sections & Styling the active list item.
/*
The Reference: 
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_smooth_scroll
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_active_element
*/
const lists = Array.from(document.querySelectorAll("li"));
document.querySelector("html").style.cssText = "scroll-behavior: smooth";
lists.forEach((list) => {
  list.addEventListener("click", function () {
    lists.forEach((list) => list.classList.remove("mystyle"));
    list.classList.add("mystyle");
  });
});

/*Showing the active section while scrolling.

//The Reference: 
https://www.w3schools.com/Jsref/tryit.asp?filename=tryjsref_element_getboundingclientrect
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onscroll_addeventlistener

NOTE:
The hieght for ever section is 570 px.
Sections coordinates depend on y:
Section 1 => y = Start from 0.
Section 2 => y = Start from 570.
Section 3 => y = Start from 1141.
Section 4 => y = Start from 1711.
*/
function myFunction() {
  sections.forEach(function (section) {
    console.log(section.getBoundingClientRect().y);
    if (
      section.getBoundingClientRect().y >= -70 &&
      section.getBoundingClientRect().y <= 500
    ) {
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  });
}
window.addEventListener("scroll", myFunction);

//Some style for navigation bar to be responsive.
unOrderedList.style.cssText = "display: flex-inline;";
