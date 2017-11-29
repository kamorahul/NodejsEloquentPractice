var hb={
  "name":null,
  "age":null,
  "height":null,
  "weight":null,
  "gender":null,
  "phone":null,
  "email":null,
  "hobbies":null,
  "qualifications":null,
};
get();
get(){for(i in hb){hb[i]=prompt("Enter "+i);}}
//value.x and value[x] access the same property
//The difference is how x is interpreted
