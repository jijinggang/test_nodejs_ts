/// <reference path="typings/socket.io/socket.io.d.ts" />

import socketio = require('socket.io');
import http = require('http');
import express = require('express');

function testServer(port:number){
	var app = express();
	var server = http.createServer(app);
	var io = socketio(server);
	server.listen(port, function() {
		console.log('ws1:', 'listen on port', port);
	})
	app.use(express.static(__dirname + '/../public'));

	
	var id = 0;
	io.on('connection', function(sock) {
		var mid = id++;
		console.log("ws1:", "user connect,id", mid);
		sock.on('disconnect', function() {
			console.log("ws1:", "user disconnect,id",mid);
		})
		sock.on('msg', function(data) {
			io.emit('s2c',mid.toString()+":" + data);
			//sock.send(data);
			console.log('ws1:', 'recv', data.toString());
		})
	})
}




export function test(){
	var port = 80;
	testServer(port);
	//testClient(port);
}