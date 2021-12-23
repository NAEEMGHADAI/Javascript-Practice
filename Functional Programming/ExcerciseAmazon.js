// Amazon shopping
const user = {
	name: "Kim",
	active: true,
	cart: [],
	purchases: [],
};

const item1 = {
	name: "hair oil",
	price: 50,
};
const item2 = {
	name: "Face Cream",
	price: 100,
};

function AddToCart(item, num) {
	user.cart[num] = item;
}

function AddTax(item) {
	const price = item.price;
	const tax = (price * 3) / 100;
	item.price = tax + price;
}
AddTax(item1);
AddTax(item2);
AddToCart(item1, 0);
AddToCart(item2, 1);
console.log(user.cart);

//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.
