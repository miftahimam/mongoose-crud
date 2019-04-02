const mongoose = require('mongoose')
const Schema = mongoose.Schema

let memberSchema = new Schema({
    _id : ObjectId,
    name : {
        type : String,
        required : [true, 'who the hell are you ?']
    },
    address :{
        type : String,
        required : [true, 'your address is empty']
    },
    zipcode :{
        type : String,
        required : [true, 'your zipcode is empty']
    },
    email :{
        type : String,
        validate: {
            is: {
              args: /^[a-zA-Z0-9]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
              msg: 'email format is incorrect'
            }
          }
    },
    phone :{
        type : String,
        required : true
    }
})

let Member = mongoose.model('Member',memberSchema)

module.exports = Member