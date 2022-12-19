require("dotenv").config();
const mongoose = require('mongoose');

const db = () => {
    try {
    mongoose
        .set("strictQuery", false)
        .connect(process.env.MONGODB_URI)
        .then(()=> {
            console.log('* Database Connected *')
        })
    } catch (e) {
        console.log(e);
    }
}

module.exports = db;




  