require('./server/config/config')

const express = require('express');
const mongoose =require('mongoose')
const bodyParser = require('body-Parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(require('./server/routes/usuario'))

mongoose.connect('mongodb://localhost:27017/cocoa',{useCreateIndex: true, useNewUrlParser:true,useUnifiedTopology:true} ,(err,res)=>{
    if (err) throw err;
    
    console.log("Base de datos inline")
})

app.listen(process.env.PORT, () => {
    console.log("Escuchando en el puerto: ", process.env.PORT);
});