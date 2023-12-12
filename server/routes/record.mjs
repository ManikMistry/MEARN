import express from 'express';

const router=express.Router();

router.get('/',(req,res)=>{
    res.send('Hello world from get requset').statusCode(200);
    
})
export default router;