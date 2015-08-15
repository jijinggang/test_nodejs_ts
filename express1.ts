/// <reference path="typings/express/express.d.ts" />
import express = require('express');
export function test(){
	
	var app = express();
	app.get('/',function(req,res){
		res.send('hello world!!!!');
	})
	app.listen(80);
}