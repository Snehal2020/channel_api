const express=require('express');
require('./db')
const Message = require('./model')
const app=express();
app.use(express.json());

app.get('/getall-messages',async(req,res)=>{
    try {
        apidata= Message.find({})
        const data=await apidata
        res.send(data)
       } catch (error) {
        console.log(error)
       }
})

app.post('/send-message',async(req,res)=>{
    try {
        const {content}= req.body;
        if(!content)
        {
            res.send({message:"Please fill the complete details"})
        }
        var messagedata=new Message({content})
        await messagedata.save();
        res.status(201).send({success:true,message:"Message added successfully"})
       } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in message post',
            error
        })
       }
})
// app.post('/',async(req,res)=>{
//     try {
//         apidata= model.find({})
//         const data=await apidata
//         res.send(data)
//        } catch (error) {
//         console.log(error)
//        }
// })


app.listen(3000||PORT,()=>{
    console.log("listening on 3000 port")
})