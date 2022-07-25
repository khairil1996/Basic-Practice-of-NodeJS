// 7-delete
var fs = require('fs')

fs.unlink('myNewFile2.txt', function(err){
	if(err) throw err;
	console.log("file deleted")
})

//fs.unlink() method deletes the specified file