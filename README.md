#TypeScript&Node

##安装
1. 安装nodejs
2. 安装typescript `npm install -g typescript`
3. 安装tsd `npm install -g tsd`
4. 安装开发工具Visual Studio Code

##项目配置
###配置./tsconfig.json

    {
    	"compilerOptions": {
        "noImplicitAny": false,
        "module": "commonjs",
        "removeComments": false,
        "sourceMap": true
    	}
    }

###配置./.settings/tasks.json

	//tasks.json
	{
    	"version": "0.1.0", 
    	"command": "_build_run.bat",
    	"isShellCommand": true,
    	"showOutput": "always",
	}
	
	//_build_run.bat
	@echo off
	tsc -p . -m commonjs & node main

###安装node或其他库
  
	tsd install node

###在ts文件中引用库

	/// <reference path="typings/node/node.d.ts" />
	import fs = require('fs');