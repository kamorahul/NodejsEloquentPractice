const tz=require('./timezones.json/timezones.json')
,indian_offset = new Date().getTimezoneOffset()/60//will be always -5.5
,set_time=10
,everyhour=1000;
setInterval(()=>{
var h=new Date().getHours()
,utc=h+indian_offset+0.5
,time=[];
for(i in tz)time.push(tz[i].offset+utc);//respective time at all timezones
console.log(`servers have been backedup @:-`)
for(i in time){
  if(time[i]>23)time[i]-=24;if(time[i]<0)time[i]+=24;//adjusting time of everycountry
  if(time[i]==set_time)print(tz[i].utc);}
},everyhour)
function print(array){for(i in array)console.log('--->'+array[i])}
