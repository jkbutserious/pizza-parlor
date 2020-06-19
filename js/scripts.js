// Business Logic
function PizzaOrder(name, size, toppings, receive) {
  this.name = name;
  this.size = size;
  this.toppings = toppings;
  this.receive = receive;
}

PizzaOrder.prototype.priceCalculator = function() {
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

  // Toppings price calculation
  let toppingsPrice = this.toppings.length() * 0.5;
  price += toppingsPrice;
  // Receive price calculation
}
// User Interface Logic
$(document).ready(function() {
  let newPizza = new PizzaOrder;
  $("#pizza-order").submit(function() {
    event.preventDefault();
    const custName = $("#customer-name").val();
    const size = $("#pizza-size").val();
    const test = [];
    $("#input:checkbox[name=meat]:checked").each(function() {
      test.push($(this).val());
    });
    newPizza.toppings = test;
    newPizza.name = custName;

  })
})