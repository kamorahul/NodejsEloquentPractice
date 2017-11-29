#!/bin/sh
while true
 do
echo "Sleeping for next 5 seconds"


DIR=`date +%d-%m-%y`
DEST=/home/vikas/cron/db/$DIR


mkdir $DEST
tar -zcvf db/vikasayan.tar.gz db/JSstore

echo "Export Done !!"

mongodump --db 29vikki --collection vikki -o $DEST
echo "Dump Done !!"

sleep 5
mongoexport -d juggernaut-server -c users -o db/JSstore/out.json

mongoexport -d 29vikki -c vikki -o db/JSstore/output.json

done

mongo 127.0.0.1/29vikki --eval "cursor = db.vikki.find({},{"_id":0});
while ( cursor.hasNext() ) {
   printjson( cursor.next() );
}";

