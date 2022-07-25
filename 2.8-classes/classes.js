class Animal {
	constructor(colorValue){
	this.color = colorValue; //creates the color property for this class
	}
	greet(){
	console.log(`Hello, my color is ${this.color}!`);
}
}

class Dog extends Animal {
	constructor(colorValue, breedName){
		super(colorValue);
		this.breed = breedName;
	}
	greet(){
		// super.greet();
		console.log(`Hello, my breed is ${this.breed} and color is ${this.color}`);
	}
}

const obj1 = new Animal(`white`);
const obj2 = new Dog('Brown', 'Pug');
const obj3 = new Dog('Black', 'Labrador');

obj3.walk = () =>{
	console.log(`i am walking`);
}

obj3.greet = () =>{ //overridden
	console.log(`I am a special greet function`);
}

obj1.greet();
obj2.greet();
obj3.greet();

//obj2.walk(); //error 
obj3.walk();


