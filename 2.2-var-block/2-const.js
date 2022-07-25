//2-const.js

//scalar values
const score = 42;
const message = 'Hello';

//score = 60; //error

//arrays and objects
const numbers = [1,2,3,4];
const student = {
	firstName: 'John',
	lastName: 'Doe',
};

//numbers = [4,5,6]; //error

console.log(numbers);

Object.freeze(numbers);

numbers[0] = 99; // no impact as we use obejct.freeze

console.log(numbers);