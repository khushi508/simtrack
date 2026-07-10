require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// ---------- middleware ----------
app.use(express.json());
app.use(cors({
  origin: [
    'https://khushi508.github.io',   // your live GitHub Pages site
    'http://127.0.0.1:5500',         // VS Code Live Server (local testing)
    'http://localhost:5500'
  ]
}));

// ---------- database connection ----------
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// ---------- schema + model ----------
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// ---------- routes ----------

// Health check — visit this URL in a browser to confirm the API is alive
app.get('/', (req, res) => {
  res.send('Simtrak API is running.');
});

// Save a new contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are all required.' });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ success: true, message: 'Message saved successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong saving your message.' });
  }
});

// (Optional) View all submissions — useful while testing, remove or protect before sharing publicly
app.get('/api/contact', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch messages.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
