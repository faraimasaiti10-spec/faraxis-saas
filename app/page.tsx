"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  async function askAI() {
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    setReply(data.reply);
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Faraxis AI</h1>

      <textarea
        style={{ width: "100%", height: 120 }}
        placeholder="Ask Faraxis..."
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={askAI} style={{ marginTop: 10 }}>
        Send
      </button>

      <h3>Response:</h3>
      <pre>{reply}</pre>
    </div>
  );
}
