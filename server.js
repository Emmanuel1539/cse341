// server setup

const express = require('express');
const app = express();
const mongodb = require('./database/database');
 

 
// including routes

app.use('/', require('./routes'));



const port = 3000;

mongodb.initDb((error) => {
if(error){
  console.log(error)
}
else{
  app.listen(process.env.PORT || port, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
  });
}

});

