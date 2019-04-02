const mongoose = require('mongoose')
const Schema = mongoose.Schema


let transactionSchema = new Schema({
    _id : ObjectId,
    member : ObjectId,
    in_date : Date,
    out_date : Date,
    due_date : Date,
    fine : Number,
    bookList:new Array()
})

let Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction