// 6-update-writeFile.js

var fs = require('fs');

fs.writeFile('myNewFile3.txt', 'this is my brand new world', function (err){
	if (err) throw err;
	console.log('Replaced!');
})

// the fs.writeFile() method replaces the specified file and content 