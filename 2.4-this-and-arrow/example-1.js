//this-example-1.js

//regular function
const func1 = function(){
	console.dir(this, {depth:0});
	//'this' here is the caller of func1
	//global this
};

//arrow function
const func2 = () => {
	console.dir(this);

	//'this' here is NOT the caller of func2
	//it is the same 'this' found in func2's scope

};

func1();
func2();