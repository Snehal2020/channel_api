const mongoose = require('mongoose');

const messageSchema=new mongoose.Schema({
   
    content:{
        type:String,
        require:true
    },
    timestamp: {
        type: Date,
        default: Date.now
      }
  
})
// const channelSchema = new Schema({
//     collections: [messageSchema]
//   });
module.exports=mongoose.model('Message',messageSchema)

