// Business Logic

function Pizza(pizzaSize, delivery, test, toppings, toppings2) {
	this.pizzaSize = pizzaSize;
	this.delivery = delivery;
	this.test = test;
	this.toppings = toppings
	this.toppings2 = toppings2
	// this.addMile = addMile;
	// this.toppings = toppings;
}

Pizza.prototype.price = function() {
	//all pizzas begin with a base price of 10
	var pizzaPrice = 10;
if (
		this.pizzaSize === "Large" ||
		this.pizzaSize === "Medium"
		) {
		pizzaPrice += 4;
	} else if (this.pizzaSize === "Small") {
		pizzaPrice += 0;
	}

	if (
		this.toppings === "Bacon" ||
		this.toppings === "Ham" ||
		this.toppings === "Pepperoni"||
		this.toppings === "Sausage"
		) {
		pizzaPrice += 3;
	} else if (this.toppings === "Meatball(+$1)") {
		pizzaPrice += 4;
	}

	if (
		this.toppings2 === "Tomatoe" ||
		this.toppings2 === "mushroom" ||
		this.toppings2 === "Spinach"||
		this.toppings2 === "Garlic"
		) {
		pizzaPrice += 3;
	} else if (this.toppings2 === "Anchovies(+$1)") {
		pizzaPrice += 4;
	}




	//if  pizza is under 5 mile add 5 dollars to its cost.

	if (this.delivery === "Yes" ) {
		pizzaPrice += 5;
	} else if (this.delivery === "No") {
		pizzaPrice += 0;
	}

	if (this.delivery === "Yes" && this.test === "Yes" ) {
		pizzaPrice += 5;
	} else if (this.test === "No") {
		pizzaPrice += 0;
	}

	// if (this.delivery === "Yes" && this.addMile === true) {
	// 	pizzaPrice += 5;
	// } else if (this.addMile === false) {
	// 	pizzaPrice += 0;
	// }



  return pizzaPrice;
};


// UI Logic


$(document).ready(function() {

	$("form#pizza-information").submit(function(event) {

		event.preventDefault();

		var sizeInput = $("select#size").val();
		var deliveryInput = $("select#delivery").val();
		var testInput = $("select#test").val();
		var toppingsInput = $("select#toppings").val();
		var toppingsInput2 = $("select#toppings2").val();

		newPizza = new Pizza(sizeInput, deliveryInput ,testInput, toppingsInput,toppingsInput2);
		newPizzaPrice = newPizza.price();

		$("span#finalPrice").append(newPizzaPrice);
		

	});
});
