const express = require('express');
const router = express.Router();

// Handle contact form submission
router.post('/', (req, res) => {
  const { name, email, message } = req.body;

  // Here you would typically handle the form submission, e.g., save to a database or send an email
  // For now, we'll just send a success response
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Simulate successful submission
  res.status(200).json({ message: 'Contact form submitted successfully' });
});

module.exports = router;