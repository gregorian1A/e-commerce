require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://new-user-gregor:123123123a@shopping-cart-01.h3sia.mongodb.net/cart01?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log("Mongo connection successful")
    } catch (error) {
        console.log("Mongo connection failed")
        process.exit(1)
    }
};

module.exports = connectDB;