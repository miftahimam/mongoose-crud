const { MongoClient, ObjectId } = require('mongodb')
const url = 'mongodb://localhost:27017'
const dbName = 'book'
const client = new MongoClient(url,{useNewUrlParser : true})
const Book = require('../Models/books')

class Books {

    static create(req,res){
        MongoClient.connect(url,function(err,client){
            console.log('connected successfully');
            
            const db = client.db(dbName)
            const libCollection = db.collection('kitab')

            libCollection
             .insertOne({
                 _id : req.body._id,
                 isbn : String,
                 title : String,
                 author : String,
                 category : String,
                 stock : Number
             }, function(err, r){
                 if(err){
                     res.status(500).json(err)
                     client.close()
                 } else {
                     res.status(201).json('sukes masukan data')
                     client.close()
                     
                 }
             })

        }); 
    }
    static update(req,res){
        MongoClient.connect(url,function(err,client){
            console.log('connected successfully');
            
            const db = client.db(dbName)
            const libCollection = db.collection('kitab')

            libCollection
             .updateOne({_id : req.body._id}, {$set :{title : req.body.title}}, function(err, r){
                 if(err){
                     res.status(500).json(err)
                     client.close()
                 } else {
                     
                         res.status(200).json('updated successfully')
                         client.close()
                 }

             }) 
        });
    }
    static read(req,res){

        MongoClient.connect(url,function(err,client){
            console.log('connected successfully');

            const db = client.db(dbName)
            const libCollection = db.collection('kitab')

            libCollection
            .find({})
            .toArray(function(err,doc){
                if(err){
                    res.status(500).json({err : err})
                    client.close()
                } else {
                    res.status(200).json(doc)
                    client.close()
                }
            })
        });
    }
    static delete(req,res){
        MongoClient.connect(url,function(err,client){
            console.log('connected successfully');
            
            const db = client.db(dbName)
            const libCollection = db.collection('kitab')

            libCollection
             .deleteOne({_id : req.body._id}, function(err,result){
                 if(err){
                     res.status(500).json(err)
                     client.close()
                 } else {
                     res.status(200).json('deleted success')
                     client.close()
                 }
             })
        });
    }
    
}

module.exports = Books
