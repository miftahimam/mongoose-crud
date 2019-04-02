const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const port = 9000

mongoose.connect('mongodb://localhost:27017/book', {useNewUrlParser :true})

app.use(express.json())

app.use(express.urlencoded({extended : true}))

app.use('/', require('./routes/index'))

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
    
})
