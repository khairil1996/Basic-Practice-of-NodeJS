// nodemon-example

const http = require('http')

const server = http.createServer((req,res)=>{
	res.end('hello some abc\n')

})

server.listen(9000, () =>{
	console.log('server is running...')
})