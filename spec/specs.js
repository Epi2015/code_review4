describe('Pizza', function() {
	it("creates a new Pizza with the given properties", function() {

		var testPizza = new Pizza("Small", "No", "No", "mushroom", "peppers");
		expect(testPizza.pizzaSize).to.equal("Small");
		expect(testPizza.delivery).to.equal("No");
		expect(testPizza.test).to.equal("No");
		expect(testPizza.toppings).to.equal("mushroom");
		expect(testPizza.toppings2).to.equal("peppers");
	});
});


// describe('Contact', function() {
// 	it("creates a new contact with the given properties", function() {
// 		var testContact = new Contact("Rita", "Moreno");
// 		expect(testContact.firstName).to.equal("Rita");
// 		expect(testContact.lastName).to.equal("Moreno");
// 		expect(testContact.addresses).to.eql([]);
// 	});
//
// 	it("adds the fullName method to a contact", function() {
// 		var testContact = new Contact("Sherlock", "Holmes");
// 		expect(testContact.fullName()).to.equal("Sherlock Holmes");
// 	});
//
//
// });
