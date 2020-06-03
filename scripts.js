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





//SHOP MENU OPEN
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
window.addEventListener('load', (event) => {
  //creating variables
  var yellow_btn_shop = document.getElementsByClassName('yellow_btn');
  var shop_total = document.querySelector('.price_num').innerText;
  var shop_total_display =  document.querySelector('.price_num');
  var sum = 0;
  //loop through all yellow shop buttons...
  for (var i = 0; i < yellow_btn_shop.length; i++) {
    //than way when you click, it only points to the clicked element
    yellow_btn_shop[i].addEventListener("click", function () {
      //on click...erase placeholder text
      var shop_list = document.querySelector('.open_menu-items');
      if (shop_list.innerText == 'YOUR CART IS EMPTY') {
        shop_list.innerText = '';
      }
      shop_total_display.innerText = '';
      //turn the shop_total string into a number
      var newShopTotal = Number(shop_total);
      //on click, show yellow ball on cart icon that has a #
      var yellowCircle = document.querySelector('.circle');
      yellowCircle.style.visibility = 'visible';
      yellowCircle.innerHTML++;
      //use variables to store the heading and price of each item
      var shop_data = this.parentNode.getElementsByClassName('bold')[0].innerHTML;
      var shop_data_two = this.parentNode.getElementsByClassName('bold')[1].innerHTML;
      //need to store the number in  a variable
      var shop_data_two_number = shop_data_two.slice(-2);
      var newNumber = Number(shop_data_two_number);
      
      sum += newNumber;
      shop_total_display.innerText = "$" + sum + ".00";
      //BUG need to converte to a stringe after?
      // shop_total = newShopTotal + newNumber;
      // var shop_total_element = document.createElement('p');
      // shop_total_element.innerHTML = shop_total;
      //BUG?DUPLICATE? create and place clicked menu item on the shop output
      var shop_data_container = document.createElement('li');
      shop_data_container.innerHTML += shop_data + " ";
      shop_data_container.innerHTML += shop_data_two;
      //"item added!" feature 
      var item_add = document.createElement('p');
      item_add.classList.add('item_added')
      item_add.innerText = 'item added!';
      var added_container = this.nextSibling;
      added_container.appendChild(item_add);
      var added = function () {
        item_add.remove();
      }
      setTimeout(added, 666);
      //displaying chosen items to the DOM
      shop_list.innerHTML += shop_data_container.innerHTML + "<br>" + "<br>";
    });
  };
});
//empty cart items button
var emptyButton = document.querySelector('.emptyButton');
emptyButton.addEventListener('click', function () {
  var shop_list = document.querySelector('.open_menu-items');
  shop_list.innerHTML = '';
  var yellowCircle = document.querySelector('.circle');
  yellowCircle.innerText = 0;
  //empty the total price
  var emptyTotal = document.querySelector('.price_num');
  emptyTotal.innerText = '$0.00';
});