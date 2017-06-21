#!/bin/bash

rm -rf ./dist
npm run build --prod
cd ./dist/static
rm logo_home.png
rm -rf cgi
rm test.*
cd ..
scp -r * root@192.168.3.1:/var/www/
