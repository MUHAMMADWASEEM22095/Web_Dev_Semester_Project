require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON data
app.use(express.json());
const cors = require('cors');
app.use(cors()); // Enable CORS for all routes


// 📡 Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/AirBnbDb", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
  .then(() => console.log('✅ Connected to MongoDB!'))
  .catch(err => console.error('❌ Error connecting to MongoDB:', err));

// 🗂 Import Airbnb model
const Airbnb = require('./Models/Airbnb'); // Adjusted model import to match your Airbnb model

// 📥 API to fetch all Airbnb data
app.get('/', async (req, res) => {
    try {
        const airbnbs = await Airbnb.find(); // Fetch all documents from the "Airbnb" collection
        res.status(200).json(airbnbs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching Airbnb data', error });
    }
});

// 📥 API to fetch all airbnbs (same as root endpoint)
app.get('/airbnbs', async (req, res) => {
    try {
        const airbnbs = await Airbnb.find(); // Fetch all documents from the "Airbnb" collection
        res.status(200).json(airbnbs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching Airbnb data', error });
    }
});

// 📥 API to fetch an Airbnb by ID
app.get('/airbnbs/:id', async (req, res) => {
    try {
        const airbnb = await Airbnb.findById(req.params.id); // Find a specific Airbnb by ID
        if (!airbnb) return res.status(404).json({ message: 'Airbnb not found' });
        res.status(200).json(airbnb);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching Airbnb data', error });
    }
});

// 🛠️ API to create a new Airbnb listing
app.post('/airbnbs', async (req, res) => {
    try {
        const newAirbnb = new Airbnb(req.body); // Create a new Airbnb from the request body
        await newAirbnb.save();
        res.status(201).json(newAirbnb);
    } catch (error) {
        res.status(500).json({ message: 'Error creating Airbnb listing', error });
    }
});

// 🚀 Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
