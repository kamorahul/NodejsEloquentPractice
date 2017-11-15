var url_parts={};
var address="www.mail.google.com/?emale=ruhul31@gmail.com##pass=poiuytrewq";
address.replace(new RegExp("([^?=*##]+)(=([^##]*))?","g"),
function($0,$1,$2,$3){
    url_parts[$1]=$3;
}); 
//console.log(url_parts);
console.log(JSON.stringify(url_parts));