var isActive = false;

$(".nav_button").on("click", function() {
  if (isActive) {
    $(this).removeClass("active forward");
    $("body").removeClass("menu-open");
  } else {
    $(this).addClass("active forward");
    $("body").addClass("menu-open");
  }

  isActive = !isActive;
});

$(".nav_shop").on("click", function() {
  if (isActive) {
    $(this).removeClass("active forward");
    $("body").removeClass("shop-open");
  } else {
    $(this).addClass("active forward");
    $("body").addClass("shop-open");
  }

  isActive = !isActive;
});
