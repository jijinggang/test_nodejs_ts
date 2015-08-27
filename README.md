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
	
	npm install express //安装web框架，非必须
	tsd install express //安装express的typescript接口定义文件
	

###在ts文件中引用库

	/// <reference path="typings/node/node.d.ts" />
	import fs = require('fs');
	
#附录 常用命令

- 初始化package.json npm init
- npm install 根据package.json自动安装依赖项
- 本地目录安装包 npm install --save xxx / npm uninstall xxx
- 全局目录安装包 npm install -g xxx / npm uninstall -g xxx
- 安装js库对应的typescript接口 tsd install xxx
- 监视一个目录的ts文件变化  tsc -w -p xxx