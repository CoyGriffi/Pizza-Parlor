//business logic

// this is all wrong
// const pizza = {
//   size: ["small", "medium", "large"],
//   toppings:["mushrooms", "garlic", "onions", "peppers"]
// }

  
  
function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
    this.price = 0;
  }

Pizza.prototype.pizzaSizePrice = function() {
const minPrice = 6;
  if (this.size === "small") {
    this.price = minPrice + 5; 
  }
  if (this.size === "medium") {
    this.price = minPrice + 7;
  }
  if (this.size === "large") {
    this.price = minPrice + 9;
  }
}

Pizza.prototype.pizzaToppingPrice = function() {
  const toppingPrice = 1.50;
  let checkValue = document.querySelector("#topping").checked;
  this.price += checkValue * toppingPrice;
}

Pizza.prototype.totalPizzaPrice = function() {
  this.pizzaSizePrice();
  this.pizzaToppingPrice();
}

//UI logic

$(document).ready(function(){
  $("form#orderForm").submit(function(event){
    event.preventDefault();