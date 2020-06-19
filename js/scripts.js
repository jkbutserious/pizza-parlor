// Business Logic
function PizzaOrder(name, size, meats, veggies, other) {
  this.name = name,
  this.size = size,
  this.meats = meats,
  this.veggies = veggies,
  this.other = other
}

PizzaOrder.prototype.priceCalculator = function(checkedMeats, checkedVeggies, checkedOther) {
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
  const meatsPrice = checkedMeats.length * 0.5;
  const veggiesPrice = checkedVeggies.length * 0.25;
  const otherPrice = checkedOther.length * 0.35;
  const toppingsPrice = meatsPrice + veggiesPrice + otherPrice;
  totalPrice += toppingsPrice;
  return totalPrice
}
// User Interface Logic
$(document).ready(function() {
  let newPizza = new PizzaOrder;
  $("#pizza-order").submit(function() {
    event.preventDefault();
    newPizza.name = $("#customer-name").val();
    newPizza.size = $("#pizza-size").val();
    newPizza.meats = [];
    newPizza.veggies = [];
    newPizza.other = [];

    const custReceive = $("input:radio[name=receive]:checked").val();
    let subtotal = 0;
    $("input:checkbox[name=meat]:checked").each(function(){ 
      newPizza.meats.push($(this).val());
    });
    $("input:checkbox[name=veggies]:checked").each(function(){ 
      newPizza.veggies.push($(this).val());
    });
    $("input:checkbox[name=other]:checked").each(function(){ 
      newPizza.other.push($(this).val());
    });
    
    subtotal += newPizza.priceCalculator(newPizza.meats, newPizza.veggies, newPizza.other);
    if (custReceive === "delivery") {
      subtotal += 3;
    }
    $("#price").text("$" + parseFloat(subtotal).toFixed(2));
  });
  $("#name-next").click(function() {
    $("#name-group").toggle("slide");
    $("#size-group").toggle("slide");
  })
  $("#back-to-name").click(function() {
    $("#name-group").toggle("slide");
    $("#size-group").toggle("slide");
  })
  $("#size-next").click(function() {
    $("#size-group").toggle("slide");
    $("#toppings-group").toggle("slide");
  })
  $("#back-to-size").click(function() {
    $("#size-group").toggle("slide");
    $("#toppings-group").toggle("slide");
  })
  $("#toppings-next").click(function() {
    $("#toppings-group").toggle("slide");
    $("#receive-group").toggle("slide");
  })
  $("#back-to-toppings").click(function() {
    $("#toppings-group").toggle("slide");
    $("#receive-group").toggle("slide");
  })
})