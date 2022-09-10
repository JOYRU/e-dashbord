const express = require("express");
const mongoose = require("mongoose")
require("./db/config");
const User = require('./db/User') ; 
const cors = require('cors');



const app = express();
app.use(express.json()) ; 
app.use(cors()) ; 

app.use(express.json()) ;
app.get('/',async(req,resp)=>{
   
  resp.send('api is on work');
})  ; 
app.post('/register', async(req, resp) => {
 let user = new User(req.body) ;
 let result =await user.save() ;  
  resp.send(result);
});




app.listen(5000);
