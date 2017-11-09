module.exports={
blogSchema :{
  title:  'string',
  author: 'string',
  body:   'string',
  comments: [{ body: 'string', date: 'Date' }],
  date: { type: 'Date', default: 'Date.now' },
  hidden: 'boolean',
  meta: {
    votes: 'number',
    favs:  'number'
        }
},
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
blogSchema_test :{
title:  'And then they were none',
author: 'agatha christie',
body:   'no spoilers',
comments: [{ body: 'nothing', date: Date }],
date: { type: Date, default: Date.now },
hidden: false,
meta: {
votes: 1000,
favs:  100000
      }
},
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
user:{
  name:'string',
  password:'string',
},
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
user_test:{
  name:'adithya',
  password:'123456789',
  blah:'asdf',
  boom:{
    raja:293784
  }
}
}
