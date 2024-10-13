const express = require('express');
const app = express();

// Import the calculate routes
const calculateRoutes = require('./routes/calculate');

// Middleware to parse JSON request bodies
app.use(express.json());

// Use the calculate routes
app.use('/api/calculate', calculateRoutes);

// Basic home route
app.get('/', (req, res) => {
  res.send('Welcome to the Calculator API');
});

// Define the port to run the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
