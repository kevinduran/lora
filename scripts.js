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
  var shop_total_display = document.querySelector('.price_num');
  var sum = 0;
  var shop_list = document.querySelector('.open_menu-items');
  //add text to shoplist to begin with
  if (shop_total_display.innerText == '$0.00') {
    shop_list.innerText = 'YOUR CART IS EMPTY';
  }
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
      //need to store the actual number in  a variable
      var shop_data_two_number = shop_data_two.slice(-2);
      var newNumber = Number(shop_data_two_number);
      //properly adjust the new sum total
      sum += newNumber;
      // display on the dom with a money sign for better look
      shop_total_display.innerText = "$" + sum + ".00";
      var shop_data_container = document.createElement('li');
      shop_data_container.innerHTML += shop_data + " ..... ";
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
      setTimeout(added, 550);
      
      //displaying chosen items to the DOM
      shop_list.innerHTML += shop_data_container.innerHTML + "<br>" + "<br>";
       //LOCAL STORAGE
       localStorage.setItem('shop_list', shop_list.innerText);
       console.log(localStorage);

    });
  };
  //empty cart items button
  var emptyButton = document.querySelector('.emptyButton');
  emptyButton.addEventListener('click', function () {
    var shop_list = document.querySelector('.open_menu-items');
    shop_list.innerHTML = 'YOUR CART IS EMPTY';
    var yellowCircle = document.querySelector('.circle');
    yellowCircle.innerText = 0;
    //empty the total price
    var emptyTotal = document.querySelector('.price_num');
    emptyTotal.innerText = '$0.00';
    sum = 0;

  });

});



// GSAP ANIMATIONS header
gsap.to('#header', {
  delay:1,
  duration:0.5,
  opacity:1
})
gsap.to('#nav', {
  delay:0.5,
  duration:0.5,
  height:100
})

gsap.to('.nav_btn', {
  delay:2,
  rotation:0.01,
  duration:1,
  opacity:1,
  y:200
})

gsap.to('.nav_logo', {
  delay:2.4,
  duration:1,
  opacity:1,
  y:24
})
gsap.to('.nav_shop', {
  delay:2.7,
  duration:0.3,
  opacity:1,
  y:20
})


