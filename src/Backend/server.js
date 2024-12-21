require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.json());
const cors = require('cors');
app.use(cors()); 



mongoose.connect("mongodb://localhost:27017/AirBnbDb", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
  .then(() => console.log('✅ Connected to MongoDB!'))
  .catch(err => console.error('❌ Error connecting to MongoDB:', err));


const Airbnb = require('./Models/Airbnb');


app.get('/', async (req, res) => {
    try {
        const airbnbs = await Airbnb.find(); 
        res.status(200).json(airbnbs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching Airbnb data', error });
    }
});


app.get('/airbnbs', async (req, res) => {
    try {
        const airbnbs = await Airbnb.find();
        res.status(200).json(airbnbs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching Airbnb data', error });
    }
});


app.get('/airbnbs/:roomno', async (req, res) => {
    try {
        
        const roomno = Number(req.params.roomno); 

       
        const airbnb = await Airbnb.findOne({ roomno: roomno }); 

        if (!airbnb) {
            return res.status(404).json({ message: 'Airbnb not found' });
        }

        res.status(200).json(airbnb); 
    } catch (error) {
        console.error('Error fetching Airbnb data:', error);
        res.status(500).json({ message: 'Error fetching Airbnb data', error });
    }
});


app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});


app.post('/airbnbs', async (req, res) => {
    try {
        const newAirbnb = new Airbnb(req.body); 
        await newAirbnb.save();
        res.status(201).json(newAirbnb);
    } catch (error) {
        res.status(500).json({ message: 'Error creating Airbnb listing', error });
    }
});



app.get('/airbnbs/search', (req, res) => {
    const { query } = req.query; 
    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }

    
    const filteredRooms = rooms.filter(room =>
        room.title.toLowerCase().includes(query.toLowerCase())
    );

    res.json(filteredRooms);
});




app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
