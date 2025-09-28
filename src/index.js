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
		console.log(`${this.name} moves`);
	}

	say() {
		console.log(`${this.name} sounds`);
	}

	eat() {
		console.log(`${this.name} eats`);
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
		console.log(`${this.name} flies`);
	}

	say() {
		console.log(`${this.name} chirps`);
	}

	eat() {
		console.log(`${this.name} eats corn`);
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
		console.log(`${this.name} swims`);
	}

	say() {
		console.log(`${this.name} is silent. Its a fish`);
	}

	eat() {
		console.log(`${this.name} eats plankton`);
	}
}


class Predators extends Mammals {
	constructor(name, age, weight, limbAmount) {
		super(name, age, weight, limbAmount)
	}

	static isPredator(obj) {
		return obj instanceof Predators
	}

	eat() {
		console.log(`${this.name} eats meat`);
	}
}

class Whales extends Mammals {
	constructor(name, age, weight, limbAmount) {
		super(name, age, weight, limbAmount)
	}

	static isWhale(obj) {
		return obj instanceof Whales
	}
}

class Primates extends Mammals {
	constructor(name, age, weight, limbAmount) {
		super(name, age, weight, limbAmount)
	}

	static isPrimate(obj) {
		return obj instanceof Primates
	}
}

class Dog extends Predators {
	constructor(name, age, weight, limbAmount = 4) {
		super(name, age, weight, limbAmount);
	}

	static isDog(obj) {
		return obj instanceof Dog
	}

	move() {
		console.log(`${this.name} runs`);
	}

	eat() {
		console.log(`${this.name} eats bone`);
	}
}

class Dolphin extends Whales {
	constructor(name, age, weight, limbAmount) {
		super(name, age, weight, limbAmount);
	}

	static isDolphin(obj) {
		return obj instanceof Dolphin
	}

	move() {
		console.log(`${this.name} swims`);
	}

	eat() {
		console.log(`${this.name} eats fish`);
	}
}

class Human extends Primates {
	constructor(name, age, weight, limbAmount = 4) {
		super(name, age, weight, limbAmount);
	}

	static isHuamn(obj) {
		return obj instanceof Human
	}

	move() {
		console.log(`${this.name} walks`);
	}

	say() {
		console.log(`${this.name} talks`);
	}

	eat() {
		console.log(`${this.name} eats fastfood`);
	}
}