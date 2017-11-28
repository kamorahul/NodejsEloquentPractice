function call(a,b,c){                            //min - hr - days 

let time =a*60*1000+b*60*60*1000+c*24*60*60*1000
var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    }

console.log("hello");
}


while(1)
{
	
	call(process.argv[2],process.argv[3],process.argv[4]);
}
