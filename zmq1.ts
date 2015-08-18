/// <reference path="typings/node_zeromq/zmq.d.ts" />
import zmq = require('zmq');

function testServer(port:number){
	var s = zmq.socket('rep');
	s.bind("tcp://*:"+port.toString());
	s.on('message', function(msg){
		console.log("zmq1:","server recv",msg.toString());
		s.send("hi zmq "+ msg.toString());
	});
	
	setTimeout(function(){
		s.send("on connect");
	}, 2000);
	
	process.on('SIGINT', function(){
		s.close();
		console.log("zmq1:","close server")
	})
}


function testClient(url:string,id:string){
	var c = zmq.socket('req')
	c.connect(url);
	
	c.on('message', function(msg){
		console.log("zmq1: client recv" , id,msg.toString());
	})
	
	c.send(id);
	//c.send(id);
	process.on('SIGINT', function(){
		c.close();
		console.log("zmq1:","close client",id)
	})

}
export function test(){
	testServer(91);
	for(var i=1; i<=2; i++){
		testClient("tcp://localhost:91",i.toString());
	}


}