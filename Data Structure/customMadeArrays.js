class MyArray {
	constructor() {
		this.lenght = 0;
		this.data = {};
	}

	get(index) {
		if (index < this.lenght) {
			return this.data[index];
		}
		return "Index Out Of Bound";
	}
	push(item) {
		this.data[this.lenght] = item;
		this.lenght++;
		return this.lenght;
	}
	pop() {
		if (this.lenght > 0) {
			const lastItem = this.data[this.lenght - 1];
			delete this.data[this.lenght - 1];
			this.lenght--;
			return lastItem;
		}
		return "Index Out Of Bound";
	}

	delete(index) {
		if (index < this.lenght) {
			const item = this.data[index];
			this.shiftItems(index);
			return item;
		}
		return "Index Out Of Bound";
	}

	shiftItems(index) {
		for (let i = index; i < this.lenght - 1; i++) {
			this.data[i] = this.data[i + 1];
		}
		delete this.data[this.lenght - 1];
	}
}

const Array = new MyArray();
console.log(Array.push("Hi"));
console.log(Array.push("Hello"));
console.log(Array.push("Hi"));
console.log(Array.push("Hello"));
console.log(Array.get(4));
console.log(Array);
console.log(Array.pop());
console.log(Array.pop());
console.log(Array.pop());
console.log(Array.pop());
console.log(Array.pop());
// console.log(Array.delete(4));
console.log(Array);
