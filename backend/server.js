require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { scheduleMessage } = require('./scheduler');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Health check or base route
app.get('/', (req, res) => {
  res.send('✅ Task Scheduler Backend is running');
});

// API route
app.post('/api/schedule', (req, res) => {
  const tasks = req.body.tasks;
  tasks.forEach(task => {
    scheduleMessage(task);
  });
  res.json({ message: 'Tasks scheduled successfully!' });
});

app.listen(5000, () => console.log('🚀 Server running on port 5000'));
