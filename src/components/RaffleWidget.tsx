import { useEffect, useState } from "react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { toast } from "sonner";

const userId = 123;

export default function RaffleWidget() {
  const [expanded, setExpanded] = useState(false);
  const [tickets, setTickets] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchTickets = async () => {
    try {
      const res = await fetch(`/api/raffle-status?userId=${userId}`);
      const data = await res.json();
      setTickets(data.tickets);
      setError(null);
    } catch {
      setError("Error, try again.");
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const joinRaffle = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/raffle-entry", {
        method: "POST",
      });
      const data = await res.json();
      if (data.success) {
        setTickets(data.tickets);
        toast.success("You joined the raffle!");
        setError(null);
      } else {
        setError("Error, try again.");
      }
    } catch {
      setError("Error, try again.");
    } finally {
      setLoading(false);
    }
  };

  const buyTicket = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: 100, currency: "usd" }),
      });
      const data = await res.json();
      if (data.sessionId) {
        window.location.href = `https://checkout.stripe.com/pay/${data.sessionId}`;
      } else {
        toast.error("Error, try again.");
      }
    } catch {
      toast.error("Error, try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <TooltipProvider>
      <div className="fixed bottom-4 right-4 z-50">
        {!expanded ? (
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => setExpanded(true)}
                className="w-12 h-12 bg-[hsl(var(--coral))] rounded-lg flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform"
              >
                🎟️
              </button>
            </TooltipTrigger>
            <TooltipContent className="bg-black text-white px-2 py-1 rounded">
              You have {tickets ?? "..."} ticket(s)
            </TooltipContent>
          </Tooltip>
        ) : (
          <div className="w-80 h-[350px] bg-white rounded-xl shadow-xl p-6 flex flex-col justify-between animate-slideUp">
            <div>
              <h2 className="text-xl font-semibold text-center mb-4 text-charcoal">
                🎟️ You have {tickets ?? "..."} ticket(s)
              </h2>

              {error && (
                <p className="text-red-500 text-sm text-center mb-2">{error}</p>
              )}

              <button
                onClick={joinRaffle}
                disabled={loading}
                style={{ background: "var(--primary-color, hsl(140, 60%, 40%))", color: "#fff" }}
                className="w-full py-2 rounded-md hover:opacity-90 transition disabled:opacity-60"
              >
                {loading ? "Joining..." : "Join the Raffle"}
              </button>

              <button
                onClick={buyTicket}
                disabled={loading}
                style={{ background: "var(--accent-color, hsl(220, 90%, 56%))", color: "#fff" }}
                className="w-full mt-3 border border-gray-300 py-2 rounded-md hover:opacity-90 transition disabled:opacity-60"
              >
                {loading ? "Redirecting..." : "Buy Ticket for $1"}
              </button>
            </div>

            <button
              onClick={() => setExpanded(false)}
              className="text-sm text-gray-500 hover:underline mt-4"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </TooltipProvider>
  );
}
