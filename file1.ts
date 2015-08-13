import fs = require('fs');

export class File1{
	static copy(src:string, dst:string){
		fs.createReadStream(src).pipe(fs.createWriteStream(dst));
		//fs.writeFileSync(dst, fs.readFileSync(src))
	}
	static write(fileName:string, value:any) {
		fs.writeFile(fileName, value)
	}
	static exists(file:string):boolean{
		return fs.existsSync(file);
	}
	
	static test(){
		this.write("1.txt","helloworld!");
		this.copy("1.txt","2.txt");
		console.log("copy 1.txt to 2.txt");
	}
}
