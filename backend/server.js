require('dotenv').config();
const path = require('path');
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require("./routes/productRoutes");

connectDB();

const app = express();

app.use(express.static(path.resolve(__dirname, '../frontend/build')));

app.use(express.json());

app.use('/api/products', productRoutes);

app.listen(process.env.PORT || 5000, () => console.log('Server is runing on port 5000'))