const data = {
    personal_details: {
        name: "Malkeet",
        age: 21,
        address: {
            street: "dablehar road",
            district: "Jammu",
            state: "J&k",
            Zip: 181102
        }
    },
    qualification: [
        {
        "Secondary": {
            name: "Sun Shine Public High School",
            yearOfComplettion: 2012,
            cgpa: 8.8
        }
        
    },
    {
        Senior_Secondary: {
            name: "Govt. Higher Secondary School",
            yearOfComplettion: 2014,
            cgpa: 8.2
        }
    },
        {
        "B.Tech": {
            name: "Lovely Professional University",
            yearOfComplettion: 2018,
            cgpa: 8.45
        }
    }
],

    skills: ['JavaScript', 'Angular4', 'Reactjs', 'Java', 'Nodejs', 'MongoDB'],

    Projects: [{
            name: "Eyekart",
            duration: "On Going",
            languages_used: ["JavaScript", "Nodejs", "Angular4"]
        },
        {
            name: "Chat Room",
            duration: "On Going",
            languages_used: ["Nodejs", "Jquery", "Express"]
        },
        {
            name: "Recipe Book",
            duration: "1 month",
            languages_used: ["JavaScript", "Nodejs", "Angular4"]
        }, {
            name: "Weather React",
            duration: "On Going",
            languages_used: ["JavaScript", "Reactjs", "Redux"]
        }
    ],
    hobbies: ["Cooking", "Singing", "Playing Videogames", "Reading"],

    achievements: ["Ranked 4th in Congnizant Master Code Challenge", "Completed all the free code camp front end challenges"]

}
console.log(JSON.stringify(data));