const { MongoClient, ObjectId } = require('mongodb')
const url = 'mongodb://localhost:27017'
const dbName = 'book'
const client = new MongoClient(url,{useNewUrlParser : true})
const Transaction = require('../Models/transactions')

class Transactions {

    static create(req,res){
        MongoClient.connect(url,function(err,client){
            console.log('connected successfully');
            
            const db = client.db(dbName)
            const libCollection = db.collection('transaction')

            libCollection
             .insertOne({
                 _id : req.body._id,
                 member : req.body.member,
                 in_date : req.body.in_date,
                 out_date : req.body.out_date,
                 due_date : req.body.due_date,
                 fine : req.body.fine

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
            const libCollection = db.collection('transaction')

            libCollection
             .updateOne({_id : req.body._id}, {$set :{due_date : req.body.due_date}}, function(err, r){
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
            const libCollection = db.collection('transaction')

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
            const libCollection = db.collection('transaction')

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

module.exports = Transactions
