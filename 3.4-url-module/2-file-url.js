// 2-file-url

const http = require('http')
const url = require('url')
const fs = require('fs')

const server = http.createServer(function (req,res){

	//localhost:9000/demo1.html or localhost:9000/demo2.html

	const urlObject = url.parse(req.url, true)
	const fileName = "." + urlObject.pathname // ./demo2.html

	fs.readFile(fileName, function(err, data){

		if(err){
			res.writeHead(404, {'Content-Type':'text/html'} )
			return res.end('404 not found')
		}

		res.writeHead(200, {'Content-Type':'text/html'})
		res.write(data)
		res.end()

	})

})

server.listen(9000, ()=>{
	console.log('server is running...')
})