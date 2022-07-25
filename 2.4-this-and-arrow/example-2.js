//'this' here is exports
this.objectName = 'The Exports Object'; 

console.log(this);

const testerObj = {
	//regular func
	func1: function(){
		console.log('func1', this)
	},

	//arrow func
	func2:()=>{
		console.log('func2',this);
	}
}

testerObj.func1();
testerObj.func2();
