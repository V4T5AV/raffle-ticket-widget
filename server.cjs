// server.cjs
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Mock user tickets (in-memory for demo)
let userTickets = { '123': 3 };

// GET /api/raffle-status?userId=123
app.get('/api/raffle-status', (req, res) => {
  const userId = req.query.userId;
  const tickets = userTickets[userId] || 0;
  res.json({ tickets });
});

// POST /api/raffle-entry
app.post('/api/raffle-entry', (req, res) => {
  // For demo, increment tickets randomly
  const userId = '123';
  const newTickets = Math.floor(Math.random() * 10 + 1);
  userTickets[userId] = newTickets;
  res.json({ success: true, tickets: newTickets });
});

// POST /api/create-checkout-session
app.post('/api/create-checkout-session', (req, res) => {
  // For demo, return a fake Stripe session ID
  res.json({ sessionId: 'test_session_123' });
});

app.listen(PORT, () => {
  console.log(`Mock API server running on http://localhost:${PORT}`);
}); 