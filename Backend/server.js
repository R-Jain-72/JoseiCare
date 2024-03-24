const express = require('express');
const app = express();
const port = process.env.PORT || 5000; // Use environment variable for port

// Import routes
const complaintRoutes = require('./routes/complaintRoutes');

// Middleware
app.use(express.json()); // Parse incoming JSON data
//app.use(cors()); // Enable CORS (adjust for production)

// Routes
app.use('/api/complaints', complaintRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
