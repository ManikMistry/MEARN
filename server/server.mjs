import express from 'express'
import records from './routes/record.mjs'


const app=express();
const PORT=5050;

console.log(records);
// app.get('/',(req,res)=>{
//     res.send('hello world')
// })
app.use("/api/v1/record",records)

app.listen(PORT,()=>{
    console.log('sever running on port',PORT);
})