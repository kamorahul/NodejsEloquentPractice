#!/bin/bash
# BackUp DB
NOW=$(date +"%Y-%m-%d-%H-%M")
echo $NOW
tar -zcvf /home/rahul/Desktop/tranning/cron-demo/Custom-cron/$NOW.tar.tgz /MongoDB_Data 
