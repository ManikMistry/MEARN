import express from 'express';
import db from '../db/conn.mjs';
import { ObjectId } from 'mongodb';

const router=express.Router();

// get all records
router.get('/',async (req,res)=>{
    try{
        const collection=db.collection("records"); 
        // console.log(collection)
        const results=await collection.find({}).toArray();
        res.status(200).send(results);
    }catch(error){
        console.error(error)
        res.status(500).send({error: "Internal Server Error"})
    }
})

// get records by id
router.get('/:id',async (req, res)=>{
    let collection=db.collection("records");
    let query={_id:new ObjectId(req.params.id)}
    // console.log(query)
    let result=await collection.findOne(query);
    // console.log(result)

    if(!result) res.send("Not Found").status(404);
    else res.send(result).status(200)
})

//create a new record
router.post('/',async (req,res)=>{
    let newDocumet={
        VendorName:req.body.VendorName,
        BankAccountNo: req.body.BankAccountNo,
        BankName: req.body.BankName,
        AddressLine1:req.body.AddressLine1,
        AddressLine2:req.body.AddressLine2,
        City:req.body.City,
        Country:req.body.Country,
        ZipCode:req.body.ZipCode
    }
    let collection= await db.collection('records');
    let result=await collection.insertOne(newDocumet);

    res.send(result).status(201)
})

// delete a record 
router.delete('/:id', async (req,res)=>{
    const query={_id: new ObjectId(req.params.id)}
    let collection =db.collection("records")
    let result=await collection.deleteOne(query);

    res.send(result).status(204)
})

//Update record
router.patch('/:id', async (req,res)=>{
    const query= {_id: new ObjectId(req.params.id)};

    const updates={
        $set:{
            VendorName:req.body.VendorName,
            BankAccountNo: req.body.BankAccountNo,
            BankName: req.body.BankName,
            AddressLine1:req.body.AddressLine1,
            AddressLine2:req.body.AddressLine2,
            City:req.body.City,
            Country:req.body.Country,
            ZipCode:req.body.ZipCode
        }
    }
    let collection=db.collection("records")
    let result=await collection.updateOne(query,updates);
    res.send(result).status(200);
})

export default router;