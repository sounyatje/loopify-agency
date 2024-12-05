const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const validator = require('validator');
const { v4: uuidv4 } = require('uuid'); // Import the uuidv4 function to generate unique IDs

const app = express();
app.use(cors());
app.use(express.json());

const emailFilePath = path.join(__dirname, 'data', 'data.json');

// Route to save emails in the JSON file
app.post('/save-email', (req, res) => {
  const { email } = req.body;

  // Validate the email before proceeding
  if (!validator.isEmail(email)) {
    console.log('Invalid email:', email);
    return res.status(400).json({ message: 'Invalid email' });
  }

  console.log('Email received:', email);

  // Read the existing emails from the file
  fs.readFile(emailFilePath, 'utf-8', (err, data) => {
    if (err) {
      console.log('Error reading file:', err);
      return res.status(500).json({ message: 'Error reading the file' });
    }

    let emails = [];
    if (data) {
      try {
        emails = JSON.parse(data); // Parse the existing JSON data
      } catch (parseError) {
        console.log('Error parsing JSON:', parseError);
        return res.status(500).json({ message: 'Error reading data' });
      }
    }

    // Generate a unique ID for this email
    const emailWithId = {
      id: uuidv4(), // Generate a unique ID
      email,
    };

    // Add the email with the ID to the list
    emails.push(emailWithId);

    // Save the emails back to the JSON file
    fs.writeFile(emailFilePath, JSON.stringify(emails, null, 2), (err) => {
      if (err) {
        console.log('Error writing to file:', err);
        return res.status(500).json({ message: 'Error writing to the file' });
      }

      console.log('Email saved:', email);
      res.status(200).json({ message: 'Email saved successfully' });
    });
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
