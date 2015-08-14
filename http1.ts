import http = require('http');
export class Http1{
	_server:http.Server;
	
	public Start(port:number){
		this._server = http.createServer(function(req,res){
	  		res.writeHead(200, {'Content-Type': 'text/html'}); 
  			res.write('<h1>Node.js</h1>'); 
  			res.end('<p>Hello World</p>'); 
		}).listen(port);
		console.log("http1:","server start on "+port);
	}

	public Close(){
		if(this._server){
			this._server.close();
			console.log("http1:","server closed...");
		}
	}
	
	static wget(url:string){
		http.get(url,function(res){
			var body = [];
			res.on('data', function(chunk){
				body.push(chunk);
			});
			res.on('end', function(){
				console.log("http1:","wget", body.toString());
			});
		})
	}
}

export function test(){
	var h = new Http1();
	h.Start(80);
	setTimeout(function(){
		h.Close();
	},10000);
	Http1.wget("http://127.0.0.1");
}