export default function handler(req, res) {
  // In-memory user tickets (not persistent, resets on each function cold start)
  const userTickets = { '123': 3 };
  const { userId } = req.query;
  const tickets = userTickets[userId] || 0;
  res.status(200).json({ tickets });
} 