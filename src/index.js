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

	static isMammal(obj) {
		return obj instanceof Mammals
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
	constructor(name, age, weight, limbAmount = 0) {
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

	say() {
		console.log(`${this.name} barks`);
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

	static isHuman(obj) {
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

const dog1 = new Dog('Sharik', 5, 5)
const dog2 = new Dog('Barbos', 11, 25, 3)

const dolphin1 = new Dolphin('Flipper', 10, 150, 0)
const dolphin2 = new Dolphin('Goody', 3, 80)

const human1 = new Human('John', 30, 78, 4)
const human2 = new Human('Maria', 24, 60, 4)

const animal1 = new Animal('Cat', 2, 3, 4)
const animal2 = new Animal('Hippo', 13, 90, 4)

const bird1 = new Birds('jack', 2, 0.5, 4)
const bird2 = new Birds('black', 10, 10, 4)


dog1.move()
dog2.say()
dog1.eat()

dolphin1.say()
dolphin1.move()

human1.move()
human1.say()

console.log(dog1.age);
console.log(dolphin1.weight);
console.log(human1.limbAmount);

console.log(Animal.isAnimal(dog1));
console.log(Mammals.isMammal(dolphin1));
console.log(Dog.isDog(dolphin2));
console.log(Human.isHuman(dog2));
console.log(Dolphin.isDolphin(dog2));
console.log(Birds.isBird(bird1));