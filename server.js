// load env variables
require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productsRouter = require('./routes/products');

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to DB'));

// accept JSON data
app.use(express.json());

// Routes
app.use('/products', productsRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
