//const { getHeapSpaceStatistics } = require("v8");

//NAV MENU OPEN
var isActive = false;
$(".nav_button").on("click", function () {
  if (isActive) {
    $(this).removeClass("active forward");
    $("body").removeClass("menu-open");
  } else {
    $(this).addClass("active forward");
    $("body").addClass("menu-open");
  }
  isActive = !isActive;
});




// GSAP ANIMATIONS header
gsap.to('#header', {
  duration:0.5,
  opacity:1
})
gsap.to('#hours', { 
  duration:0.5,
  opacity:1
})
gsap.to('#menu', { 
  duration:0.5,
  opacity:1
})
gsap.to('#contact', {
  duration:0.5,
  opacity:1
})
gsap.to('#nav', {
  duration:0.5,
  opacity:1
})

gsap.to('.nav_btn', {
  duration:1,
  opacity:1,
})

gsap.to('.nav_logo', {  
  duration:1,
  opacity:1,
})
gsap.to('.nav_shop', {
  duration:0.5,
  opacity:1,
})
gsap.to('.header_logo', { 
  opacity:1,
  duration:0.5,
  y:20
  
})
gsap.to('.main_btn', {
  opacity:1,
  duration:0.5,  
})
gsap.to('.header_logo-two', {
  opacity:1,
  duration:0.5,
  x:-15
});

console.log('...testing')