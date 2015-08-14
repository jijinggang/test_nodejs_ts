import fs = require('fs');

export class File1{
	static copy(src:string, dst:string){
		var r = fs.createReadStream(src);
		var w = fs.createWriteStream(dst);
		r.pipe(w);
		r.on('end', function(){
			console.log("file1:","copy", src, "to", dst, " over!" )
		});
		//fs.writeFileSync(dst, fs.readFileSync(src))
	}
	static write(fileName:string, value:any) {
		fs.writeFile(fileName, value,function(err,data){
			if(err){
				console.log("file1:","err write:", fileName);
			}else{
				console.log("file1:","write ok:",fileName);
			}
		});
	}
	static exists(file:string):boolean{
		return fs.existsSync(file);
	}
	
	
	static readFile(src:string){
		fs.readFile(src, function(err, data){
			if(err){
				console.log("file1:","read file async error");
			}else{
				console.log("file1:",'read file async, data:', data);
			}
		})
	}
	
	static readFileSync(src:string){
		try{
			var data:Buffer = fs.readFileSync(src);
			console.log("file1:",'read file sync, data:', data);
		}catch(err){
			console.log("file1:","read file sync error");
		}
	}
	
	static test(){
		var src ="1.txt";
		this.write(src,"helloworld!");
		this.readFile(src);
		this.readFileSync(src);
		this.copy(src,"2.txt");

	}
}
