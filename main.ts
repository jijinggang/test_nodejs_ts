/// <reference path="typings/node/node.d.ts" />
import fs = require('fs');
//import a = require('./a');

function copy(src:string, dst:string){
	fs.createReadStream(src).pipe(fs.createWriteStream(dst));
	//fs.writeFileSync(dst, fs.readFileSync(src))
}

console.info("helloworld");

//var a1 = new a.A1();
//a1.sayhello("world!!!");
fs.writeFile("./1.txt", "hello world")

var argv = process.argv;
copy("1.txt","2.txt");