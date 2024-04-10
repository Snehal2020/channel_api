const mongoose = require('mongoose');
// require('dotenv').config()
const db="mongodb+srv://appuser:KBDayPhaY57QWGUD@cluster0.uzcpskp.mongodb.net/api_db?retryWrites=true&w=majority&appName=Cluster0"
try {
  mongoose.connect(db,{ useNewUrlParser: true }).then(()=>{
    console.log('connected successfully')
  })
} catch (error) {
  console.log(error)
}