var resume = { 
                "personal_details":{ 
                	"name":"Rahul Kumar",
                	"dob":"30-01-1997",
                    "sex":"Male",
                    "nationality":"Indian",
                    "email":"rahulkumar310197@gmail.com",
                    "mobile_no":"9530775578",
                    "address":"GC-20 IFFCO Township, PO - Ghiyanagar, Phulpur, Allahabad, Uttar Pradesh"
                 },
                
                "acedemic_qualification":[
                    { "year":2018,
                      "degree":"BTech(CSE)",
                      "institute":"Lovely Professional University, Phagwara",
                      "percentage":"64.41"
                    },
                    { "year":"2014",
                      "degree":"XII(CBSE)",
                      "institute":"Kendriya Vidyalaya, IFFCO, Phulpur, Allahabad",
                      "percentage":"60.16%"
                    },
                    { "year":"",
                      "degree":"X(CBSE)",
                      "institute":"Kendriya Vidyalaya, IFFCO, Phulpur, Allahabad",
                      "percentage":"72.6"
                    }   
                ],

                "projects":[
                    { "name":"Media Player",
                      "language":"java and xml",
                      "institute":"Lovely Professional University",
                      "duration_month":4,
                      "discription":"Created a Media Player Application for Android based devices using Java and XML. The application can play various types of media formats (mp3, wma, wav, acc). The user can perform many media related tasks such as creating playlist, forward, rewind, play, pause, seek etc."
                    },
                    { "name":"Alumni Database Management System",
                      "language":"java",
                      "institute":"Lovely Professional University",
                      "duration_month":4,
                      "discription":"Created a full-fledged Alumni Database Management System for computers on which JDK was installed using Java and MySQL. The application allows old and new students of university or college to communicate with each other. This allows students to know about each other and their current activities."
                    }
                    
                ],

                "extra_curricular_act":{
                    "certificates":[
                        {  "name":"Java",
                           "institute":"UPTEC",
                           "year":2015
                        },

                        {  "name":"Android app development",
                           "institute":"udemy",
                           "year":2017
                        },

                        {  "name":"Web development with PHP",
                           "institute":"IBM",
                           "year":2017
                        }

                    ],

                    "achivements":[
                        { "discription":"Participated in Coding Competition Hackathron organized by HackerRank"},
                        { "discription":"Participated in Coding Competition Cypher organized by CodeChef"},
                        { "discription":"Secured 3 rd place in Java quiz competition at UPTEC Allahabad"},
                                                
                    ]
                      
                    
                },

                "language_proficiency":[
                    "English","Hindi"
                ]
                                      
};

console.log(resume.personal_details.name);
console.log(resume.extra_curricular_act.certificates[0].name);
console.log(resume.extra_curricular_act.certificates[0].institute);
console.log(resume.extra_curricular_act.certificates[0].year);
