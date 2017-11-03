var data={
	"header":{"name":"Siddharth Sahu","gender":"Male","intro":"Electronics and Communication Engineer with great interest in Data Science. Aiming to learn ,analyze andunderstand the complex data for taking decision",
		"contact":{"email":"siddharth.sahu172@gmail.com","phone":[9041252678,8249591088],"address":"Chandigarh,India"},"social":{"gmail":"siddharth.sahu172@gmail.com","linkedin":"linkedin.com/in/siddharthsahu172","github":"github.com/sidsahu172"}


},
"education":{
	"Graduation":{"college":"Lovely Professional University,Phagwara","course":"B.Tech","stream":"ECE","percentage":77.67,"year":2018},
	"Intermediate":{"school":"St.Pauls School,Rourkela","stream":"science","percentage":89.8,"year":2013},
	"Matriculation":{"school":"St.Mary's Convent School,Birmitrapur","stream":"science","percentage":89.6,"year":2011}
},

"projects":[{"title":"Dictpy","description":"A dictionary which produces the meaning of word if asked and also suggest the near match to the word if spelled incorrect."},
	        {"title":"RMS","description":"Billing software to compute daily billing, manage store resources and compute analytics on sales."},
	        {"title":"MoneyBall","description":"Analysis of salary and performance data of baseball players to find new players for a certain team using R programming."}
],

"experience":[{ "designation":"Student Counselor","company":"Lovely Professional University,Phagwara", "department":"Division of Admissions",
                "duration":"2 months","description":"Admissions assistant, Online registration and Survey"
}

],

"skills":[{"R":"Advance"},{"Java":"Advance"},{"Python":"Beginner"},{"SQL":"Intermediate"},{"HTML":"Intermediate"},
           {"Excel":"Intermediate"},{"Tableau":"Intermediate"},{"Javascript":"Beginner"},{"Machine Learning":"Beginner"}


],
"achievements":["People’s Choice Award in NASA Space Apps Challenge organized by NASA Delhi Chapter.",
               "1st Prize in Aquajet –Water Rocket Competition in the Annual Tech Fest of Lovely Professional University (Twice).",
               "Silver Medal in Week of Code competition organised by Hackerrank"


               ],
"certificates":[{"title":"R Developer","duration":"1 month"},{"title":"Data Analyst","duration":"2 months"},
                {"title":"Web Developement","duration":"2 months"},{"title":"Python","duration":"2 months"}

],

"languages":["Hindi","English","Oriya"]

}
function siddharth(){
  var rl = require("readline");
  var prompts = rl.createInterface(process.stdin, process.stdout);
// Anonymous function
  (function(){
    console.log("Hey there!! What do want to know about Siddharth Sahu ? ");
    console.log("Choose from the options:");
    console.log("1:for complete details");
    console.log("2:for Personal details");
    console.log("3 for Education details");
    console.log("4:for Projects");
    console.log("5:for Skills");
    console.log("6:for Work Experience");
    console.log("7:for Achievements");
    console.log("8:for Certifications");
    console.log("9:for Languages");
    console.log("10:for Contact details");
    console.log("11:for Social Contact details");





})();
  prompts.question("Enter the option: ",function(_ans){
    switch(_ans){
      case "1":
      console.log(data);
      break;

      case "2":
      console.log(data.header);
      break;

      case "3":
      console.log(data.education);
      break;

      case "4":
      console.log(data.projects);
      break;

      case "5":
      console.log(data.skills);
      break;

      case "6":
      console.log(data.experience);
      break;

      case "7":
      console.log(data.achievements);
      break;

      case "8":
      console.log(data.certificates);
      break;

      case "9":
      console.log(data.languages);
      break;

      case "10":
      console.log(data.header.contact);
      break;

      case "11":
      console.log(data.header.social);
      break;


      default:
      console.log("Wrong Option");

    }


process.exit();
  });

}
siddharth()
