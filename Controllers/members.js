const { MongoClient, ObjectId } = require('mongodb')
const url = 'mongodb://localhost:27017'
const dbName = 'book'
const client = new MongoClient(url,{useNewUrlParser : true})
const Member = require('../Models/members')

class Members {

    static create(req,res){
        MongoClient.connect(url,function(err,client){
            console.log('connected successfully');
            
            const db = client.db(dbName)
            const libCollection = db.collection('member')

            libCollection
             .insertOne({
                 _id : req.body._id,
                 name : String,
                 address : String,
                 zipcode : String,
                 email : String,
                 phone : String
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
            const libCollection = db.collection('member')

            libCollection
             .updateOne({_id : req.body._id}, {$set :{address : req.body.address}}, function(err, r){
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
            const libCollection = db.collection('member')

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
            const libCollection = db.collection('member')

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

module.exports = Members
