@echo off
rem press ctrl+shift+b
call tsc -p public --outDir public -m commonjs
call tsc -p server --outDir server/build -m commonjs 
call node server/build/main