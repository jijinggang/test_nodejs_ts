/// <reference path="typings/socket.io/socket.io.d.ts" />

import ws = require('socket.io');
import http = require('http');

function testServer(port:number){
	ws.listen(801,function(err){
		if(!err){
			console.log("ws1:",'ws listener ok');
		}
	});
}

function testClient(port:number){
	
}


export function test(){
	var port = 80;
	testServer(port);
	testClient(port);
}