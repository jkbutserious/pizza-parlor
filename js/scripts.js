// Business Logic
function PizzaOrder(name, size, toppings, receive) {
  this.name = name;
  this.size = size;
  this.toppings = toppings;
  this.receive = receive;
}

PizzaOrder.prototype.priceCalculator() {
  let price = 0;
  // Size price calculation
  if (this.size === "Small") {
    price = 7;
  }
  else if (this.size === "Medium") {
    price = 9;
  }
  else if (this.size === "Large") {
    price = 11;
  }
  else if (this.size === "X-Large") {
    price = 13;
  }
  return price;

  // Toppings price calculation

  // Receive price calculation
}
// User Interface Logic
$(document).ready(function() {

  
})