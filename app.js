window.addEventListener("scroll", function(){
  var navbar = document.getElementById("navbar");
  var header = document.getElementById("header");
  if (window.pageYOffset >= header.offsetHeight) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky")
  }
})
var scroll = window.requestAnimationFrame ||
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 
function loop() {
  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });
  scroll(loop);
}
loop();
function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});
navLinks.addEventListener('click', () => {
    navLinks.classList.remove('nav-active');
    burger.classList.remove('toggle');
  });