
// STICK SECOND NAV
window.onscroll = function() {myFunction()};
// Get the navbar
var navbar = document.getElementById("nav2");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// progress scroll
var progscr = document.getElementById("_progress");
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    document.getElementById('_progress').style.display = 'block';
  } else {
    navbar.classList.remove("sticky");
    document.getElementById('_progress').style.display = 'none';
  }
}


//PROGRESS BAR
document.addEventListener(
  "scroll",
  function() {
    var scrollTop =
      document.documentElement["scrollTop"] || document.body["scrollTop"];
    var scrollBottom =
      (document.documentElement["scrollHeight"] ||
        document.body["scrollHeight"]) - document.documentElement.clientHeight;
    scrollPercent = scrollTop / scrollBottom * 100 + "%";
    document
      .getElementById("_progress")
      .style.setProperty("--scroll", scrollPercent);
  },
  { passive: true }
);


// button
