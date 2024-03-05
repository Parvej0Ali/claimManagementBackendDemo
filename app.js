const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const policyRoutes = require('./routes/policyRoutes');
const claimRoutes = require('./routes/claimRoutes');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
const uri = "mongodb+srv://parvej0ali:Hy2A6bLzhE7kPmRS@cluster0.aijfsfk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(uri);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Use routes
app.use('/api', userRoutes);
app.use('/api', policyRoutes);
app.use('/api', claimRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
