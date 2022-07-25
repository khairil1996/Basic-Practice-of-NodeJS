// destructuring-2.js

const [first, second, ,fourth] = [10,20,30,40]
//first = 10
//second = 20
//fourth = 40

//... = rest operator

const [one,...restOfItems] = [1,2,3,4]; // array use []

// one = 1
//restOfItems = [2,3,4]

const data = {
	temp1: '001',
	temp2: '002',
	firstName: 'John'
	lastName: 'Doe'
};

const { temp1, temp2, ...person } = data; // object use {} //new object person
//temp1= '001'
//temp2='002'
// const person = {firstName: 'John', lastName: 'Doe'} //new object


// ... = SPREAD OPERATOR -  can copy array and object //shallow copy
const newArray = [...restOfItems]; //restOfItems = [2,3,4]

const newObject = {
	...person // const person = {firstName: 'John', lastName: 'Doe'} //new object
}


