const mongoose = require('mongoose');
const DB_NAME=require('../constants');
require('dotenv').config();


const connectDB = async ()=>{
   
    try {
        const connectionInstace=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST = ${connectionInstace.connection.host}`);
    } catch (error) {
        console.log('MONGODB connection error',error);
        process.exit(1);
    }
}

module.exports = connectDB;