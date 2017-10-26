var data={
	"header":{"name":"Siddharth Sahu","intro":"Electronics and Communication Engineer with great interest in Data Science. Aiming to learn ,analyze andunderstand the complex data for taking decision",
		"contact":{"email":"siddharth.sahu172@gmail.com","phone":[9041252678,8249591088],"address":"Chandigarh,India","social":{"gmail":"siddharth.sahu172@gmail.com","linkedin":"linkedin.com/in/siddharthsahu172","github":"github.com/sidsahu172"}
	}

},
"Education":{
	"Graduation":{"college":"Lovely Professional University,Phagwara","course":"B.Tech","stream":"ECE","percentage":77.67,"year":2018},
	"Intermediate":{"school":"St.Pauls School,Rourkela","stream":"science","percentage":89.8,"year":2013},
	"Matriculation":{"school":"St.Mary's Convent School,Birmitrapur","stream":"science","percentage":89.6,"year":2011}
},

"Projects":[{"title":"Dictpy","description":"A dictionary which produces the meaning of word if asked and also suggest the near match to the word if spelled incorrect."},
	        {"title":"RMS","description":"Billing software to compute daily billing, manage store resources and compute analytics on sales."},
	        {"title":"MoneyBall","description":"Analysis of salary and performance data of baseball players to find new players for a certain team using R programming."}
],

"Experience":[{ "designation":"Student Counselor","company":"Lovely Professional University,Phagwara", "department":"Division of Admissions",
                "duration":"2 months","description":"Admissions assistant, Online registration and Survey"
}

],

"Skills":[{"R":"Advance"},{"Java":"Advance"},{"Python":"Beginner"},{"SQL":"Intermediate"},{"HTML":"Intermediate"},
           {"Excel":"Intermediate"},{"Tableau":"Intermediate"},{"Javascript":"Beginner"},{"Machine Learning":"Beginner"}


],
"Achievements":["People’s Choice Award in NASA Space Apps Challenge organized by NASA Delhi Chapter.",
               "1st Prize in Aquajet –Water Rocket Competition in the Annual Tech Fest of Lovely Professional University (Twice).",
               "Silver Medal in Week of Code competition organised by Hackerrank"


               ],
"Certificates":[{"title":"R Developer","duration":"1 month"},{"title":"Data Analyst","duration":"2 months"},
                {"title":"Web Developement","duration":"2 months"},{"title":"Python","duration":"2 months"}

],

"Languages":["Hindi","English","Oriya"]



}

console.log(data.header.name)
console.log(data.header.contact.social.linkedin)
console.log(data.header.contact.social.github)
console.log(data.Projects[2])
