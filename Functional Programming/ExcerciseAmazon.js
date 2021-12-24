// Amazon shopping
const user = {
	name: "Kim",
	active: true,
	cart: [],
	purchases: [],
};

// const item1 = {
// 	name: "hair oil",
// 	price: 50,
// };
// const item2 = {
// 	name: "Face Cream",
// 	price: 100,
// };

// function AddToCart(item, num) {
// 	user.cart[num] = item;
// }

// function AddTax(item) {
// 	const price = item.price;
// 	const tax = (price * 3) / 100;
// 	item.price = tax + price;
// }
// AddTax(item1);
// AddTax(item2);
// AddToCart(item1, 0);
// AddToCart(item2, 1);
// console.log(user.cart);

// console.log(purchaseItem(user, { name: "laptop", price: 2000 }));
// function purchaseItem(user, item) {
// 	return Object.assign({}, user, { purchases: item });
// }

const amazonHistory = [];

const compose =
	(f, g) =>
	(...args) =>
		f(g(...args));

const pipe =
	(f, g) =>
	(...args) =>
		g(f(...args));

const purchaseItem = (...fns) => fns.reduce(compose);
const purchaseItem2 = (...fns) => fns.reduce(pipe);
purchaseItem2(
	addItemToCart,
	applyTaxToItems,
	buyItem,
	emptyUserCart
)(user, { name: "laptop", price: 60 });
console.log(
	purchaseItem(
		emptyUserCart,
		buyItem,
		applyTaxToItems,
		addItemToCart
	)(user, { name: "laptop", price: 200 })
);

function addItemToCart(user, item) {
	amazonHistory.push(user);
	const updatedCart = user.cart.concat(item);
	return Object.assign({}, user, { cart: updatedCart });
}

function applyTaxToItems(user) {
	amazonHistory.push(user);
	const { cart } = user;
	const taxRate = 1.3;
	const updatedCart = cart.map((item) => {
		return {
			name: item.name,
			price: item.price * taxRate,
		};
	});
	return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user) {
	amazonHistory.push(user);
	return Object.assign({}, user, { purchases: user.cart });
}

function emptyUserCart(user) {
	amazonHistory.push(user);
	return Object.assign({}, user, { cart: [] });
}
//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart
console.log(amazonHistory);

function refundItem() {}
function getUserState() {}

function goBack() {}

function goForward() {}

//Bonus:
// accept refunds.
// Track user history.
