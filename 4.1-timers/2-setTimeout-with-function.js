// 2-setTimeout-with-function.js

const myFunc = ()=>{

	console.log('hello after 4 seconds')

}

setTimeout(myFunc, 4*1000);

//myFunc (arg1, arg2,arg3, ...)

//setTimeout(myFunc, 5*1000,'a','b',1,2,3)
//a will be parameter of the function