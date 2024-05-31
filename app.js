const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

// MongoDB Connection
const dbURI = process.env.MONGODB_URI || 'mongodb+srv://zenpackdb.zh97j4v.mongodb.net/" --apiVersion 1 --username mohamedrb --password uTgu5FDm139BNDnc';
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

