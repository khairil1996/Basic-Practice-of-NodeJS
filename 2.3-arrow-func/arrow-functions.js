//arrow-function.js

//es5
var normalFunction = function (x,y){
	return x+y;
}

//es6 : arrow Function

const arrowFunction = (x,y) => {
	//line 1
	//line 2
	return x+y;
}

const arrowFunction2 = (x,y) => x+y;
//when only have 1 line of code

const arrowFunction3 = (message) => console.log(message);

//invoking functions

console.log(normalFunction(2,3));

console.log(arrowFunction(2,3));

console.log(arrowFunction2(2,3));

arrowFunction3("hi");

const arrowFunction4 = message => message;

console.log(arrowFunction4('hello 4'));