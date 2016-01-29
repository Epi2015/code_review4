// Business Logic

function Pizza(pizzaSize, delivery, addMile, toppings) {
	this.pizzaSize = pizzaSize;
	this.delivery = delivery;
	this.addMile = addMile;
	this.toppings = toppings;
}

Pizza.prototype.price = function() {

	//all pizzas begin with a base price of 8
	var pizzaPrice = 10;

	//Pizza toppings add 2 for each to its cost.
	if (
		this.pizzaSize === "Large" ||
		this.pizzaSize === "Medium"
		) {
		pizzaPrice += 4;
	} else if (this.pizzaSize === "Small") {
		pizzaPrice += 0;
	}


	if (

		this.pizzatoppings === "anchovy" ||
		this.pizzatoppings === "peppers" ||
		this.pizzatoppings === "mushroom"||
		this.pizzatoppings === "sausage"
		) {
		pizzaPrice += 2;
	} else if (this.pizzatoppings === "Extra Cheese") {
		pizzaPrice += 4;
	}

	//if  pizza is for a local delivery add 5 to its cost.

	if (this.delivery === "Yes" ) {
		pizzaPrice += 5;
	} else if (this.delivery ==="No") {
		pizzaPrice += 0;
	}

	if (this.addMile === true) {
		pizzaPrice -=2;
	} else if (this.addMile === false) {
		pizzaPrice += 0;
	}
  return pizzaPrice;
};


// UI Logic


$(document).ready(function() {

	$("form#pizza-information").submit(function(event) {

		event.preventDefault();

		var submittedSize = $("select#size").val();
		var stringMile = $("input#Mile").val();
		var integerMile = parseInt(stringMile);
		var addMile;


		if (integerMile >= 10) {
			addMile = true;
		} else if (integerMile < 10) {
			addMile = false;
		}

		var submittedDelivery = $("select#delivery").val();

		newPizza = new Pizza(submittedSize, submittedDelivery, addMile, toppings);
		newPizzaPrice = newPizza.price();

		$("span#finalPrice").append(newPizzaPrice);

	});
});
