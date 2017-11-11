const info={
    Name:"Rajpal Singh",
    Age:22,
    Address:{
        Flat_No:7,
        Block:"20A",
        Street:"South City 2",
        City:"Pune",
        State:"Maharashtra",
        Country:"India",
        Pincode:145455,
    },
    Qualifications:{
        Graduation:{
            Course:"Bachelor of Technology",
            Stream:"Computer Science and Engineering",
            Institute:"Lovely Professional University",
            Year_of_completion:2018,
            Cgpa:8,
        },
        Intermediate:{
            Institute:"Nav Jeevan Mission School",
            Year_of_completion:2014,
            Cgpa:8.4,
        },
        Matriculate:{
            Institute:"Nav Jeevan Mission School",
            Year_of_completion:2011,
            Cgpa:9.8,
        },
    },
    Skills:["C","C++","Java","Python","HTML","CSS","Nodejs"],

    Projects:[
        {
            Name:"Notepad",
            Languages_Used:["Java","Javascript"],
        },
        {
            Name:"Encrypted Chat Application",
            Languages_Used:["Python"],
        },
        {
            Name:"Smart Blog",
            Languages_Used:["Python","Django","MySQL"],
        },
    ],
    Hobbies:["Travelling","Singing","Playing Games","Exploring Things"],

    Achievements:[
        "Bagged 3rd prize in google hackathon",
        "Participated in Social-Awareness program",
        "Participated in Tree-Plantation campaign program",
    ],
}

console.log(info.Achievements[0]);
console.log(JSON.stringify(info));