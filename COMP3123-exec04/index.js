const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// GET request to /hello
app.get('/hello', (req, res) => {
    res.send("Hello Express JS");
});

// GET request to /user with query parameters
app.get('/user', (req, res) => {
    const firstname = req.query.firstname || "Pritesh"; // Default name
    const lastname = req.query.lastname || "Patel"; // Default last name
    res.json({ firstname, lastname });
});

// POST request to /user with path parameters
app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params; // Extracting path parameters
    res.json({ firstname, lastname });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
