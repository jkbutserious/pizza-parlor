// Business Logic
function PizzaOrder(name, size, toppings, receive) {
  this.name = name;
  this.size = size;
  this.toppings = toppings;
  this.receive = receive;
}

PizzaOrder.prototype.priceCalculator = function() {
  let totalPrice = 0;
  // Size price calculation
  if (this.size === "Small") {
    totalPrice = 7;
  }
  else if (this.size === "Medium") {
    totalPrice = 9;
  }
  else if (this.size === "Large") {
    totalPrice = 11;
  }
  else if (this.size === "X-Large") {
    totalPrice = 13;
  }

  // Toppings price calculation
  let toppingsPrice = this.toppings.length() * 0.5;
  totalPrice += toppingsPrice;
  // Receive price calculation
}
// User Interface Logic
$(document).ready(function() {
  let newPizza = new PizzaOrder;
  $("#pizza-order").submit(function() {
    event.preventDefault();
    const custName = $("#customer-name").val();
    const custSize = $("#pizza-size").val();
    const custToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function(){ 
      custToppings.push($(this).val());
    });
    newPizza.toppings = custToppings;
    newPizza.name = custName;
    newPizza.size = custSize;
  })
})