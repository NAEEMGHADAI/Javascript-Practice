class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	} //O(1)

	set(key, value) {
		const newKey = this._hash(key);
		if (!this.data[newKey]) {
			this.data[newKey] = [];
		}
		this.data[newKey].push([key, value]);
		return this.data;
	} //O(1)

	get(key) {
		const newKey = this._hash(key);
		const value = this.data[newKey];
		if (newKey) {
			for (let i = 0; i < value.length; i++) {
				if (value[i][0] === key) {
					return value[i][1];
				}
			}
		} //O(1)
		return undefined;
	}
	keys() {
		const array = [];
		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i]) {
				array.push(this.data[i][0][0]);
			}
		}
		return array;
	}
}

const myHashTable = new HashTable(250);
console.log("Set Grapes: ", myHashTable.set("grapes", 10000));
console.log("Get Grapes: ", myHashTable.get("grapes"));
console.log("Set Apples: ", myHashTable.set("apples", 9));
console.log("Get Apples: ", myHashTable.get("apples"));
console.log("Set Oranges: ", myHashTable.set("Oranges", 100));
console.log("Get Oranges: ", myHashTable.get("Oranges"));
console.log("Keys", myHashTable.keys());
