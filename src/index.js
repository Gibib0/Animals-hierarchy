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
		console.log('Its moving');
	}

	say() {
		console.log('Its talking');
	}

	eat() {
		console.log('Its eating');
	}
}

class Mammals extends Animal {
	constructor(name, age, weight, limbAmount) {
		super(name, age, weight, limbAmount)
	}
}

