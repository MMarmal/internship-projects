const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Connect to MongoDB (service name = 'mongo')
mongoose.connect('mongodb://mongo-db:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Define a simple schema and model
const Item = mongoose.model('Item', new mongoose.Schema({ name: String }));

// Routes
app.get('/', async (req, res) => {
  const items = await Item.find();
  res.send(`<h2>Items in DB:</h2><ul>${items.map(i => `<li>${i.name}</li>`).join('')}</ul>`);
});

app.get('/add/:name', async (req, res) => {
  const item = new Item({ name: req.params.name });
  await item.save();
  res.send(`✅ Added "${req.params.name}" to MongoDB`);
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
