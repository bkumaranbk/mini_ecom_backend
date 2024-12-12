const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`MY EXPRESS APP IS RUNNING..... ${PORT}`);
});