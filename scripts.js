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


//SHOPPING CART

//variable declarations
window.addEventListener('load', (event) => {
  var yellow_btn_shop = document.getElementsByClassName('yellow_btn');

  //loop through buttons to collect the data of the clicked item
  for (var i = 0; i < yellow_btn_shop.length; i++) {
    yellow_btn_shop[i].addEventListener("click", function() {
      //collect the text of the selected element
      var shop_data = this.parentNode.innerText;
      //create a new element to hold the text
      var shop_data_container = document.createElement('li');
      //place text inside newly created element
      shop_data_container.innerHTML = shop_data;
      alert(shop_data_container.innerHTML);
      //set the location of our selected items
      var shop_list = document.querySelector('.open_menu-items');
      //set selected items in appropriate location
      shop_list.innerHTML += shop_data_container.innerHTML;
    });
  }
});




//replicate the problem. small button .clicked . red box appears.


//need to possibly click the button
//that then collects the data from the  item being clicked on
//somehow transfre that data to a (created?) element that we then append to the menu list?