// 4-create-file-writeFile.js

var fs = require('fs');

fs.writeFile('myNewFile3.txt', 'Hello content!', function (err){
	if (err) throw err;
	console.log('Saved!');
})

// the fs.writeFile() method replaces the specified file and content if it exists
// if the file does not exits, a new file , containing the specified content , will be created: