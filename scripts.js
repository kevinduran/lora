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
  var shop_total = document.querySelector('.price_num').innerText;


  //loop through buttons to collect the data of the clicked item
  for (var i = 0; i < yellow_btn_shop.length; i++) {
    yellow_btn_shop[i].addEventListener("click", function () {
      //set the location of our selected items


      var shop_list = document.querySelector('.open_menu-items');
      if (shop_list.innerText == 'YOUR CART IS EMPTY') {
        shop_list.innerHTML = '';
      }
      if (shop_total == '$0.00') {
        shop_total = "";
      }

      newShopTotal = Number(shop_total);




      var yellowCircle = document.querySelector('.circle');
      yellowCircle.style.visibility = 'visible';
      yellowCircle.innerHTML++;

      //collect the text of the selected element 

      //possibly create 2 variables to hold both specific things
      var shop_data = this.parentNode.getElementsByClassName('bold')[0].innerHTML;
      var shop_data_two = this.parentNode.getElementsByClassName('bold')[1].innerHTML;
      var shop_data_two_number = shop_data_two.slice(-2);
      var newNumber = Number(shop_data_two_number);
      shop_total = newShopTotal + newNumber;

      var shop_total_element = document.createElement('p');
      shop_total_element.innerHTML = shop_total;
      alert(shop_total_element.innerHTML);

      //create a new element to hold the text , add css class to it
      var shop_data_container = document.createElement('li');
      //place text inside newly created element
      shop_data_container.innerHTML += shop_data + " ";
      shop_data_container.innerHTML += shop_data_two;
      //instead of alert.insert into HTML
      var item_add = document.createElement('p');
      item_add.classList.add('item_added')
      item_add.innerText = 'item added!';
      var added_container = this.nextSibling;
      added_container.appendChild(item_add);
      var added = function () {
        item_add.remove();
      }
      setTimeout(added, 666);


      //set selected items in appropriate location
      shop_list.innerHTML += shop_data_container.innerHTML + "<br>" + "<br>";
      var replaceChild = document.querySelector('.replace');
      var oldChild = document.querySelector('.price_num');
    });

  };
});

var emptyButton = document.querySelector('.emptyButton');
emptyButton.addEventListener('click', function () {
  var shop_list = document.querySelector('.open_menu-items');
  shop_list.innerHTML = '';
  var yellowCircle = document.querySelector('.circle');
  yellowCircle.innerText = 0;

});