// 3-create-file-open

var fs = require('fs')

fs.open('myNewFile2.txt', 'w', function (err, file){
	if (err) throw err;
	console.log('saved!')
})

//fs.open() method takes a "flag" as the second argument
//if the flag is 'w' for 'writting', the specified file is opened for writing
// if the file does not exits, and an empty file is created