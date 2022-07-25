// 1-read-file.js

const http = require('http')
const fs = require('fs')
//filesystem module

const server = http.createServer((request,response) => {

	fs.readFile('demo-1.html', function(err, data){

		response.writeHead(200, {'Content-Type':'text/html'})
		response.write(data)
		//data from demo-1.html
		response.end()



	})
	//second argument, to check whether 1st argument successfully call or not

});

server.listen(9000, () =>{
	console.log('server is running...')
})