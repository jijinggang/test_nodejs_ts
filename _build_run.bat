@echo off
rem press ctrl+shift+b
tsc -p . --outDir build -m commonjs & node build/main