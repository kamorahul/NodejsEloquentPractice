#!/bin/sh
TIMESTAMP=`date +%F-%H%M`
touch /home/atif/Desktop/bu$TIMESTAMP.txt
mongoexport --db Emp --collection Employee -o /home/atif/Desktop/bu$TIMESTAMP.txt
tar -zcvf /home/atif/Desktop/e.tar  /home/atif/Desktop/bu$TIMESTAMP.txt
#tar -zcvf destinatio/Ourfile.tar /location_where_file_is_stored
