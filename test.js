const customMongoose = require('./customMongoose.js');

customMongoose.customCollection("user",{
                                        "parameters":{
                                                        "name":{
                                                                "type": "String"
                                                               },
                                                        "email": {
                                                                "type": "String"
                                                               },
                                                        "registered":
                                                                {
                                                                   "type": "Boolean"
                                                                 }
                                                     },
                                                     "required": "name",
                                                     "trim"    : ["name","email"]
                                 });
customMongoose.insert("user",{
                              name:"Javaid",
                              email:"rahijavaid5@gmail.com",
                              registered:true});
