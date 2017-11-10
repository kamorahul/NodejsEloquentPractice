const mangeese=require('./connect');
const Schema={
    name:String,
    age:Number
};
const User=new mangeese();
User.model('Mangeese',Schema,()=>{
    User.insert(
        {
            name:"rajneet",
            age:'63'
        }
    );
});


// User.insert();
// let database;
//  User.connect("mongodb://127.0.0.1:27017/TodoApp");
// .then(
//     (db)=>console.log(db)
// ).catch(
//     e=>console.log(e)
// )
// ,(db)=> {
//     database=db;    
// User.model(db,'mangeese',Schema);
// User.insert(db,{name:"Malkeet",email:"abc@gmail.com",age:30});

// } );

// const model=User.model('malkeetTest',{name:String,age:Number});
// User.model('Mangeese',Schema);

