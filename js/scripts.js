// Business Logic
function PizzaOrder(name, size, toppings, receive) {
  this.name = name;
  this.size = size;
  this.toppings = toppings;
  this.receive = receive;
}

PizzaOrder.prototype.priceCalculator = function(checkedToppings) {
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
  let toppingsPrice = checkedToppings.length * 0.5;
  totalPrice += toppingsPrice;
  return totalPrice
}
// User Interface Logic
$(document).ready(function() {
  let newPizza = new PizzaOrder;
  $("#pizza-order").submit(function() {
    event.preventDefault();
    const custName = $("#customer-name").val();
    const custSize = $("#pizza-size").val();
    const custToppings = [];
    const custReceive = $("input:radio[name=receive]:checked").val();
    let subtotal = 0;
    $("input:checkbox[name=toppings]:checked").each(function(){ 
      custToppings.push($(this).val());
    });
    newPizza.name = custName;
    newPizza.toppings = custToppings;
    newPizza.size = custSize;
    subtotal += newPizza.priceCalculator(custToppings);
    if (custReceive === "delivery") {
      subtotal += 3;
    }
    $("#output").text("$" + parseFloat(subtotal).toFixed(2));
  })
})