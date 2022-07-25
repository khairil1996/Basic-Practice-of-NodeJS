// 8-rename

var fs = require('fs');

fs.rename('myNewFile1.txt', 'myFile1-gotRenamed.txt', function (err){
	if(err) throw err;
	console.log('file renamed')
})

// fs.rename() method renames the specified file