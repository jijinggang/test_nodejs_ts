import path = require('path');
import fs = require('fs');


function travel(dir:string, callback){
	fs.readdirSync(dir).forEach(function(file){
		var fullName = path.join(dir,file);
		if(fs.statSync(fullName).isDirectory()){
			travel(fullName, callback);
		}else{
			callback(fullName);
		}
	});
}

export function test(){
	var p = 'foo/bar/.././1.txt'
	console.log("path1:",p, path.normalize(p), path.extname(p));
	console.log("path1: travel....");
	travel("./build", function(fileName){
		console.log("path1:",fileName);
	})
}

