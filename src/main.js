const express = require('express');
const app = express();
const port = 3001; // Your desired port

// Middleware to parse JSON requests
app.use(express.json());

// Registration and verification routes
app.post('/api/register', (req, res) => {
  // Handle user registration here
  // Generate a verification token and send the email
  // ...
  res.send({ success: true });
});

app.get('/api/verify/:token', (req, res) => {
  const { token } = req.params;
  // Validate the token and update user status in the database
  // ...
  res.send({ success: true });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});