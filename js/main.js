//Navigation menu
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menuNav.classList.add("show");
    menu.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menuNav.classList.remove("show");
    menu.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    showMenu = false;
  }
}

/* --- home animation --- */
var homeHeaderBg = document.querySelector(".home-header-bg"),
    strokes = document.querySelectorAll(".strokes > div"),
    titleBox = document.querySelector(".home-title > div"),
    tm = new TimelineMax();

  tm.from(homeHeaderBg, 0.5, {
    autoAlpha: 0,
    ease: Power2.easeIn
  })
    .add("start")
    .staggerFrom(
      strokes,
      0.5,
      {
        y: -100 + "%"
      },
      0.1
    )
    .from(
      titleBox,
      0.5,
      {
        x: -101 + "%",
        ease: Power2.easeInOut
      },
      "start"
    )
    .from(document.querySelectorAll(".text-title, .text-subtitle"), 0.1, {
      opacity: 0
    })
    .to(titleBox, 0.5, {
      x: 101 + "%",
      ease: Power2.easeInOut
    });

/* --- /home animation --- */

/* --- smooth scroll behavior --- */
function smoothScroll(target, duration){
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top + window.scrollY ;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime){
    if(startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if(timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  }
  
   requestAnimationFrame(animation);

}

var btnPortfolio = document.querySelector('.scrl');
btnPortfolio.addEventListener('click', function(){
  smoothScroll('.clearfix', 1000);
});
