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
  for (let i = 0; i < this.toppings.length; i++) {
    this.price += 1.50;
  }
}

Pizza.prototype.totalPizzaPrice = function() {
  this.pizzaSizePrice();
  this.pizzaToppingPrice();
}

//UI logic

$(document).ready(function(){
  $("form#totalOrder").submit(function(event){
    event.preventDefault();
    const size = $("#pizzaSize").val();
      const toppings = $('input:checkbox[name=toppings]:checked').map(function() {
        return this.value;
      }).get();

      let newPizzaOrder = new Pizza(size, toppings);
      newPizzaOrder.totalPizzaPrice();
      $("#pizzaPrice").html(`<p>Your total is $${newPizzaOrder.price}</p>`);
  });
});

