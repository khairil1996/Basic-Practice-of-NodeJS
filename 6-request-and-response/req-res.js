const http = require('http');

const requestListener = (request, response)=>{
	//console.dir(request, {depth:0});
	console.dir(response, {depth:0});
	//note: for response, we can read and write
	//console.log(request.url);
	//console.log("test message");
	response.write('Hello from different world\n');
	response.end(); //to close http
	}

const server = http.createServer(requestListener);

const confirmationCallback = ()=>{
	console.log('Server is running...');
}

server.listen(9000, confirmationCallback );