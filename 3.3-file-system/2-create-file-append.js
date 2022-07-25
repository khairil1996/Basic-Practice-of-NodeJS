// 2-create-file-append

var fs = require('fs');

fs.appendFile('myNewFile1.txt', 'Hello World!', function (err){
	if(err) throw err;
	console.log('saved!')
})

//the fs.appendFile() method appends specified contect to a file
//if the file does not exist , the file will be created