const cache=require('./cache');

//The mock data which we have in our database
const ages={
  Atif:'21',
  saqib:'25',
  wasif:'28'
}

/*
  Used an asynch function,which accepts a name and a callback function
  to be called once we fetch age from our database.
*/

const getAgeFromDb= (name,cb) => setTimeout(()=>{
 console.log('Fetching from db')
 
 //Returns does not exist if unknown name is given
 const age=ages[name] || 'Does not exist'

 //call the callback function
 cb(age)
},1000)

//Function which makes use of cache
module.exports = (name,cb) => { 
 
 //First, check if the age exists in our cache
 cache.get(name, (err,age)=>{
  if(age!= null){

  //if it does return in callback
  return cb(age)
  }
  
  /*
    IF it does not exist in the cache, then we query it from our mock database
  */
  getAgeFromDb(name,age => {
   //Here our data is stored in the cache
   cache.set(name,age,()=>{
     cb(age) 
   })
  })
 })
}





