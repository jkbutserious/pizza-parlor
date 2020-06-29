// Business Logic
function PizzaOrder() {
  this.name = "",
  this.size = "",
  this.meats = [],
  this.veggies = [],
  this.other = []
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
  const meatsPrice = this.meats.length * 0.5;
  const veggiesPrice = this.veggies.length * 0.25;
  const otherPrice = this.other.length * 0.35;
  const toppingsPrice = meatsPrice + veggiesPrice + otherPrice;
  totalPrice += toppingsPrice;
  return totalPrice
}

// User Interface Logic
$(document).ready(function() {
  $("#pizza-order").keypress(
    function(event){
      if (event.which == '13') {
        event.preventDefault();
      }
  });

  let newPizza = new PizzaOrder();
  $("#name-next").click(function() {
    newPizza.name = $("#customer-name").val();
    $("#your-name").text(newPizza.name);
    $("#name-group").toggle("slide");
    $("#size-group").toggle("slide");
    $("#output").show();
  });
  $("#back-to-name").click(function() {
    $("#name-group").toggle("slide");
    $("#size-group").toggle("slide");
  });
  $("#size-next").click(function() {
    newPizza.size = $("#pizza-size").val();
    $("#your-size").text(newPizza.size)
    $("#size-group").toggle("slide");
    $("#toppings-group").toggle("slide");
  });
  $("#back-to-size").click(function() {
    $("#size-group").toggle("slide");
    $("#toppings-group").toggle("slide");
  });
  $("#toppings-next").click(function() {
    $("ul#your-toppings").empty();
    $("input:checkbox[name=meat]:checked").each(function(){ 
      newPizza.meats.push($(this).val());
    });
    $("input:checkbox[name=veggies]:checked").each(function(){ 
      newPizza.veggies.push($(this).val());
    });
    $("input:checkbox[name=other]:checked").each(function(){ 
      newPizza.other.push($(this).val());
    });
    (newPizza.meats).forEach(function(element) {
      $("#your-toppings").append("<li>" + element + "</li>");
    });
    (newPizza.veggies).forEach(function(element) {
      $("#your-toppings").append("<li>" + element + "</li>");
    });
    (newPizza.other).forEach(function(element) {
      $("#your-toppings").append("<li>" + element + "</li>");
    });
    $("#toppings-group").toggle("slide");
    $("#receive-group").toggle("slide");
  });
  $("#back-to-toppings").click(function() {
    $("#toppings-group").toggle("slide");
    $("#receive-group").toggle("slide");
    $("#pizza-tracker").hide("slide");
  });
  $("#pickup-option").click(function() {
    $("#address-label").hide();
    $("#customer-address").hide();
  });
  $("#delivery-option").click(function() {
    $("#address-label").show();
    $("#customer-address").show();
  });
  $("#submit-button").click(function() {
    $("#pizza-tracker").show("slide");
    $("#your-name-tracker").text(newPizza.name);
    $("#your-address-tracker").text($("#customer-address").val());
  });
  $("#pizza-order").submit(function(event) {
    event.preventDefault();
    const custReceive = $("input:radio[name=receive]:checked").val();
    let subtotal = 0;
    
    subtotal += newPizza.priceCalculator(newPizza.meats, newPizza.veggies, newPizza.other);
    if (custReceive === "delivery") {
      subtotal += 3;
      // return subtotal;
    };
    $("#price").text("$" + parseFloat(subtotal).toFixed(2));
  });


 
})