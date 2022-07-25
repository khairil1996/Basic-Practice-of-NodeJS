// async-2.js
//more preferred
//promise with async, await

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
	return promiseToken;
}

async function read(){
	const promisedData = await fetchData('https:www.javascript.com/');
	//get data directly using 'await'
	console.log(promisedData.length);
}

console.log(`Program Starts`);

read();

console.log(`Program ends`);
