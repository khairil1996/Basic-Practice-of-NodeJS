/*
1. Var vs. Let
2. Block Scopes
*/

{
	//block scope
	var score =31;
}

// console.log(score);

if (true){
	//block scope
}

for (let i=1; i<=10; i++){
	//block scope
}
//use let to private - only in block

// console.log(i);

function multiply(a,b){
	//function scope
	var result = a*b;
	var age = 20;
}
//console.log(age);

multiply (2,3);

//let is private
//const = let but cannot change