// 8-solution2

let counter = 0;

const myFunc = () => {
	console.log('hello world');
	counter +=1;

	if (counter === 5){
		console.log('done')
		clearInterval(intervalID)
	}
}

const intervalID = setInterval(myFunc,1000)