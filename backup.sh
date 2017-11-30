#!/bin/sh
DIR=`date +%m-%d-%y-%m`
DEST=/home/ramnivas/Desktop/db_backups/$DIR
mkdir $DEST
mongodump -h 127.0.0.1 -d storeData  -o $DEST
echo 'backup taken sucessfully'