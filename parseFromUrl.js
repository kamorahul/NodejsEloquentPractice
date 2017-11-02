//var reg=/((http|localhost):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+\.[^#?\s]+)(#[\w\-]+)?/;
//var reg=new RegExp(/username\=([a-zA-Z]+[0-9]*)?((\&)(password)\=([\w+]+))/);


var reg=new RegExp(/username\=([a-zA-Z]+[0-9]*)((\&)(password)\=([\w+]+))/);
var detail=require("./detail.json");

var decode=(urll)=>{     //method for url match to RegExp
  if(urll.match(reg))
  {
      console.log("\nurl matched successfully to RegExp");

      var name=/=(.*)&/.exec(urll);
      var pass=/password=(.*)$/.exec(urll);
      //console.log( name[1],pass[1]);
      for(var i =0;i<detail.info.length;i++) /// match username and password to database in json form detail.json
    {
        if(name[1]==detail.info[i].username)
        {
            if(pass[1]==detail.info[i].password)
            {
              return "Authenticated successful\n";
            }
        }
    }
      return "Authenticated unsuccessful\n";
  }
  else {
    {
      return "url not match";
    }
  }
 }


module.exports={
decode
}
