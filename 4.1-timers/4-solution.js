// 4-solution.js

const myFunc = delay => {

	console.log(`hello after ${delay} seconds`)

}

setTimeout(myFunc, 5*1000, 'five')
setTimeout(myFunc, 10*1000, 'ten')