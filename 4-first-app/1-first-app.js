const http = require('http');

const requestListener = (request, response)=>{
	response.write('Hello from different world\n');
	response.end(); //to close http
	//response.end('Hello World from different world\n');
}

const server = http.createServer(requestListener);
//requesListener is a reference to the function

const confirmationCallback = ()=>{
	console.log('Server is running...');
}

server.listen(9000, confirmationCallback );