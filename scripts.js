//nav menu open
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
//shop menu open
$(".nav_shop, .ex").on("click", function () {
  if (isActive) {
    $(this).removeClass("active");
    $("body").removeClass("shop-open");
  } else {
    $(this).addClass("active");
    $("body").addClass("shop-open");
  }

  isActive = !isActive;
});


//shopping cart for menu

var yellow_btn_shop = document.getElementsByClassName('yellow_btn');

for (var i = 0; i < yellow_btn_shop.length; i++) {
  yellow_btn_shop[i].addEventListener("click", function () {
    var test = this.parentNode.innerText;
    alert(test);
    var testicle =document.querySelector('.open_menu-items');
    testicle.appendChild(test);
  });
}




