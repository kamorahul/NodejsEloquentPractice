const {MongoClient,ObjectID} = require("mongodb");
const fs = require('fs');
const config= require('./config.json');
class mangeese {
    async connect(url) {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url).then(
                (db) => resolve(db)
            ).catch(
                e => reject(e)
            );
        });
    }

    async model(collectionName, Schema, callback) {
        this.db = await this.connect(config.url)
        this.db.createCollection(collectionName);
        this.Schema = Schema;
        console.log('collection has been created succesfully');
        callback();
    }
    insert(obj) {
        const count = Object.keys(obj).length;
        let flag = 0;
        for (let i in obj) {
            if (typeof (obj[i]) === typeof (this.Schema[i]())) {
                flag++;
            }
        }

        if (flag === count) {
            console.log('Everything has matched');
            this.db.collection('mangeese').insertOne(obj, (err, res) => {
                if (err) {
                    return console.log(err);
                }
                // console.log(res);
            })
        }
        else{
            console.log('Error in matching the schema ');
        }

        // if(typeof(obj.name)===typeof(this.Schema.name())){

        // }
     
        // console.log(this.db);


    }


}


module.exports = mangeese;