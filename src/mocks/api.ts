// src/mocks/api.ts

// Simulate delay
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export async function getRaffleStatus(userId: string) {
  await delay(500); // simulate network delay
  return { tickets: 3 }; // mock ticket count
}

export async function postRaffleEntry() {
  await delay(500);
  return { success: true, tickets: Math.floor(Math.random() * 10 + 1) }; // random ticket count
}

export async function createCheckoutSession() {
  await delay(500);
  return { sessionId: "test_session_123" }; // fake Stripe session ID
}
