//var process = require('process');
import child_process = require('child_process');

function test_ping(){
	var child = child_process.spawn('ping', ['baidu.com','-n','5']);
	console.log("process1:","start.")
	child.stdout.pipe(process.stdout);
	child.stdout.on('end', function(){
		console.log("process1:","end.")
	})
}


export function test(){
	
	console.log(process.argv.slice(2));
	test_ping();
}