// 5-update-appendFile

var fs = require('fs');

fs.appendFile('myNewFile1.txt', 'this is my appended text', function (err){
	if(err) throw err;
	console.log('updated!')
})

// the fs.appendFile() method appends the specified content at the end of the specified file.