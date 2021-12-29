class authenticationError extends Error {
	constructor(message) {
		super(message);
		this.name = "authenticationError";
		this.favFood = "vadaPav";
	}
}

class PermissionError extends Error {
	constructor(message) {
		super(message);
		this.name = "PermissionError";
		this.message = message;
		this.favouriteSnack = "grapes";
	}
}
class DatabaseError extends Error {
	constructor(message) {
		super(message);
		this.name = "DatabaseError";
		this.message = message;
	}
}

const a = new authenticationError("oopsie");
console.log(a);
