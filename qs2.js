//var z=require('./login');
var uri = 'abc.com/?name=ajeet&age=22&sex=male&length=5'
var queryString = {};
//console.log(z);
//var urt=z.uri
uri.replace(
    new RegExp("([^?=&]+)(=([^&]*))?", "g"),
    function($0, $1, $2, $3) 
    { 
        //console.log($0,$1,$2,$3);
        queryString[$1] = $3; 
    }
);


// console.log(queryString);
//z(queryString);
var fo=JSON.stringify(queryString);

console.log(JSON.stringify(queryString));





/*



/
([^?=&]+)(=([^&]*))?
/
g
1st Capturing Group ([^?=&]+)
Match a single character not present in the list below [^?=&]+
+ Quantifier — Matches between one and unlimited times, as many times as possible, giving back as needed (greedy)
?=& matches a single character in the list ?=& (case sensitive)
2nd Capturing Group (=([^&]*))?
? Quantifier — Matches between zero and one times, as many times as possible, giving back as needed (greedy)
= matches the character = literally (case sensitive)
3rd Capturing Group ([^&]*)
Match a single character not present in the list below [^&]*
* Quantifier — Matches between zero and unlimited times, as many times as possible, giving back as needed (greedy)
& matches the character & literally (case sensitive)
Global pattern flags
g modifier: global. All matches (don't return after first match)
MATCH INFORMATION



Match 1
Full match	0-8	`abc.com/`
Group 1.	n/a	`abc.com/`
Match 2
Full match	9-19	`name=ajeet`
Group 1.	n/a	`name`
Group 2.	n/a	`=ajeet`
Group 3.	n/a	`ajeet`
Match 3
Full match	20-26	`age=22`
Group 1.	n/a	`age`
Group 2.	n/a	`=22`
Group 3.	n/a	`22`
Match 4
Full match	27-35	`sex=male`
Group 1.	n/a	`sex`
Group 2.	n/a	`=male`
Group 3.	n/a	`male`
Match 5
Full match	36-44	`length=5`
Group 1.	n/a	`length`
Group 2.	n/a	`=5`
Group 3.	n/a	`5`

*/