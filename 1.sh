#!/bin/bash
#backup mongodb
NOW=$(date +"%Y-%m-%d-%H-%M")
echo $NOW
tar -zcvf /home/rajpal/Desktop/jugnoo/$NOW.tar.tgz /home/rajpal/mongodata
