"use client";

import { useState, FormEvent } from "react";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pin }),
    });

    if (res.ok) {
      setAuthenticated(true);
    } else {
      setError(true);
      setPin("");
    }
    setLoading(false);
  };

  if (authenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-sm w-full">
        <div className="mb-8">
          <div className="inline-block mb-4 px-4 py-1.5 border border-teal/30 rounded-full text-teal text-sm tracking-widest uppercase">
            Confidential
          </div>
          <h1 className="text-3xl font-bold mb-2">EU Distribution Strategy</h1>
          <p className="text-slate text-sm">Tigo Energy · 2026</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Enter PIN"
              className="w-full bg-navy-light border border-white/10 rounded-xl px-4 py-3 text-center text-lg tracking-widest placeholder:text-slate/40 focus:outline-none focus:border-teal/50 transition-colors"
              autoFocus
            />
          </div>
          {error && (
            <p className="text-red-400 text-sm">Incorrect PIN. Please try again.</p>
          )}
          <button
            type="submit"
            disabled={loading || !pin}
            className="w-full bg-teal hover:bg-teal-light disabled:opacity-50 text-white rounded-xl px-4 py-3 font-medium transition-colors"
          >
            {loading ? "Verifying..." : "Enter Presentation"}
          </button>
        </form>

        <p className="text-slate/40 text-xs mt-8">
          Contact the presenter if you need access
        </p>
      </div>
    </div>
  );
}
