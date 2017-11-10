module.exports={
Schema :{
  title:  'string',
  author: 'string',
  comments: [{ body: 'string', date: 'Date' }],
  date: { type: 'Date', default: 'Date.now' },
  hit: 'boolean',
  meta: {
    views: 'number'
        }
},
 
Schema_testcase:{
title:  'Bahubali',
author: 'SSRajamouli', 
comments: [{ body: 'name', date: Date }],
date: { type: Date, default: Date.now },
hit: true,
meta: {
views: 1000,
      }
},
 
user:{
  name:'string',
  password:'string',
},
user_1:{
  name:'kasu',
  password:'@123',
   }
}