@echo off
rem press ctrl+shift+b
call tsc -p server --outDir server/build -m commonjs 
call node server/build/main