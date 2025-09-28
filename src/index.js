class Animal {
	static maxAge = 100
	static maxWeight = 1000

	static isAnimal(obj) {
		return obj instanceof Animal
	}

	constructor(name, age, weight, limbAmount) {
		this.name = name
		this.age = age
		this.weight = weight
		this.limbAmount = limbAmount
	}

	move() {
		console.log(`${this.name} moving`);
	}

	say() {
		console.log(`${this.name} talking`);
	}

	eat() {
		console.log(`${this.name} eating`);
	}
}

class Mammals extends Animal {
	constructor(name, age, weight, limbAmount) {
		super(name, age, weight, limbAmount)
	}
}

class Birds extends Animal {
	constructor(name, age, weight, limbAmount) {
		super(name, age, weight, limbAmount)
	}

	static isBird(obj) {
		return obj instanceof Birds
	}

	move() {
		console.log(`${this.name} flying`);
	}

	say() {
		console.log(`${this.name} chirps`);
	}
}

class Fish extends Animal {
	constructor(name, age, weight, limbAmount) {
		super(name, age, weight, limbAmount)
	}

	static isFish(obj) {
		return obj instanceof Fish
	}

	move() {
		console.log(`${this.name} swimming`);
	}

	say() {
		console.log(`${this.name} is silent. Its a fish`);
	}
}
