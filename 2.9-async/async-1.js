// async-1.js

const https = require('https');

//our long operation
function fetchData(url){
	const promiseToken = new Promise((resolve,reject)=>{
		https.get(url, (response)=>{
			let data = '';
			response.on('data', (rd)=> data = data+rd);
			response.on('end', ()=> resolve(data));

		});			
	}); 
	//promise = a contract, after operation completes, then return desired result
	//result is data from url
	//the code above to fecth data from server (url)
	return promiseToken;
}

console.log(`Program Starts`);

const promiseToken = fetchData('https://www.javascript.com/'); //as it returns promise token, so define promise token on the left
//to catch the result we use 'then' function
promiseToken.then((promiseData)=>{
	console.log(promiseData.length);
})
//above means that when the operation is completed, then execute this function
//smoothly without blocking the ui

console.log(`Program ends`);
