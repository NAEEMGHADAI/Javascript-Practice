var car = {
	registrationNumber: "GA12345",
	brand: "Toyota",

	displayDetails: function () {
		console.log(this.registrationNumber + " " + this.brand);
	},
};

car.displayDetails();
var myCarDetails = car.displayDetails.bind(car);
myCarDetails();

Function.prototype.bind = function (variable) {
	const self = this;
	return function () {
		return self.apply(variable);
	};
};

var myCarDetails = car.displayDetails.bind(car);
myCarDetails();
