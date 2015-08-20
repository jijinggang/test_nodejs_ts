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
	io.on('connection', function(sock) {
		sock.on('echo', function(data) {
			sock.send(data);
			console.log('ws1:', 'recv', data.toString());
		})
	})
}

function testClient(port:number){
	
}


export function test(){
	var port = 80;
	testServer(port);
	//testClient(port);
}