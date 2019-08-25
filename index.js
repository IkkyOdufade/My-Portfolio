const express = require ('express');
const cors = require ('cors');
const app =  express();
app.use(express.json());
app.use(cors())
const PORT = 6343;
const mongoose = require('mongoose');
const contact = require('../myPortfolio/models/contactme')


mongoose.connect('mongodb://127.0.0.1:27017/portfolio', err=>{
    if (!err) {
        console.log("Connection successful");
        
    }else{
        console.log(err);
        
    }
})



app.get('/getdata',(request, respond)=>{
    const data = request.query
    const contactForm = new contact({
        yourname:data.yourname,
        youremail:data.youremail,
        yourmessage:data.yourmessage

    })
    contactForm.save((err,doc)=>{
        console.log(data);
        
        return respond.json(doc)
    })
})






 app.listen(PORT,(err)=>{
if (!err) {
   console.log("We're here!!");
    
}else{
    console.log(err);
    
}
 })