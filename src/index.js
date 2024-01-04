const connectDB = require('./db/index');
require('dotenv').config({path:'./env'})


connectDB();


// const express = require('express');
// const app = express();

// ( async ()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//        app.on('error',()=>{
//         console.log('Error',error);
//         throw error
//        })

//     app.listen(process.env.PORT,()=>{
//         console.log(`App listening on port ${process.env.PORT}`);
//     })   
//     } catch (error) {
//         console.log('Error:', error);
//         throw err
//     }
// })()