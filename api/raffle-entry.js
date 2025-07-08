export default function handler(req, res) {
  // Always return a random ticket count for demo
  const newTickets = Math.floor(Math.random() * 10 + 1);
  res.status(200).json({ success: true, tickets: newTickets });
} 