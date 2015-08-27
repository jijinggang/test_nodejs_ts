@echo off
start http-server -p 80
start http://localhost
start tsc -w -p public --outDir public -m commonjs 

exit
