const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const { Schema } = mongoose

let bookSchema = new Schema({
    _id : ObjectId,
    isbn : {
        type : String,
        required : [true, 'isbn is empty']
    },
    title : {
        type : String,
        required : [true, 'title is empty']
    },
    author : {
        type : String,
        required : [true, 'author is empty']
    },
    category : {
        type : String,
        required : [true, 'category is empty']
    },
    stock : Number
})

let Book = mongoose.model('Book', bookSchema)

module.exports = Book


