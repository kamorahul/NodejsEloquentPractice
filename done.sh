#!/bin/bash
TIME_STAMP=`date +%H:%M_%F`
touch /home/adithya/Desktop/backup$TIME_STAMP.txt
mongoexport --db npm_expansions --collection xp -o /home/adithya/Desktop/backup$TIME_STAMP.txt
tar -cf /home/adithya/Desktop/backup$TIME_STAMP.tar /home/adithya/Desktop/backup$TIME_STAMP.txt

#0 17 * * * bash /home/adithya/Desktop/done.sh applied to crontab file

