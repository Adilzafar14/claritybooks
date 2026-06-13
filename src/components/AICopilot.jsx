import React, { useState } from "react";

const suggestions = [
  "Why did liabilities increase?",
  "Which accounts have unusual activity?",
  "Show unreconciled transactions",
  "Generate executive summary",
];

const responses = {
  "Why did liabilities increase?":
    "Accenture FY2023 mein liabilities $485M badhi — mainly income tax payable increase hua kyunki company ka profit zyada tha. Long-term debt stable raha at $43M.",
  "Which accounts have unusual activity?":
    "3 accounts flagged: (1) Treasury Shares $7.06B — 45% above average, (2) Goodwill $15.57B — 18.6% YoY increase, (3) Restructuring Charges $1.06B — new in FY2023.",
  "Show unreconciled transactions":
    "2 items found: JE-2023-001 Treasury Shares $7.06B pending review. JE-2023-002 Goodwill $15.57B acquisition payment under verification.",
  "Generate executive summary":
    "Accenture FY2023: Revenue $64.1B (+4.1% YoY), Net Income $7.0B, Total Assets $51.2B. Strong cash $9.0B. Key risks: Goodwill $15.57B, Restructuring $1.06B. Current Ratio 1.30 — monitor liquidity.",
};

export default function AICopilot() {
  const [chat, setChat]         = useState([]);
  const [question, setQuestion] = useState("");

  const ask = (q) => {
    const answer = responses[q] ||
      "ClarityBooks AI: Based on Accenture FY2023 data, this requires deeper analysis. Please check the detailed reports section.";
    setChat([...chat, { q, a: answer }]);
    setQuestion("");
  };

  return (
    <div style={{
      background: "#1a1d2e",
      borderRadius: "12px",
      padding: "20px",
      border: "1px solid #6366f133",
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }}>
      {/* Header */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h3 style={{
          color: "#fff",
          fontSize: "14px",
          fontWeight: "600",
          margin: 0
        }}>
          🤖 AI Finance Copilot
        </h3>
        <span style={{
          background: "#6366f133",
          color: "#6366f1",
          fontSize: "10px",
          padding: "2px 8px",
          borderRadius: "20px",
          fontWeight: "700"
        }}>
          BETA
        </span>
      </div>

      <p style={{
        color: "#9ca3af",
        fontSize: "12px",
        margin: 0
      }}>
        Ask me anything about Accenture financials...
      </p>

      {/* Chat History */}
      {chat.length > 0 && (
        <div style={{
          maxHeight: "150px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        }}>
          {chat.map((c, i) => (
            <div key={i}>
              <p style={{
                color: "#6366f1",
                fontSize: "11px",
                margin: "0 0 2px 0",
                fontWeight: "600"
              }}>
                ❓ {c.q}
              </p>
              <p style={{
                color: "#d1d5db",
                fontSize: "11px",
                margin: 0,
                lineHeight: "1.6",
                background: "#2d3148",
                padding: "8px",
                borderRadius: "6px"
              }}>
                🤖 {c.a}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Suggestions */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "6px"
      }}>
        {suggestions.map((s, i) => (
          <button
            key={i}
            onClick={() => ask(s)}
            style={{
              background: "#2d3148",
              border: "1px solid #3d4168",
              color: "#9ca3af",
              fontSize: "11px",
              padding: "7px 10px",
              borderRadius: "6px",
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.2s"
            }}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Input */}
      <div style={{
        display: "flex",
        gap: "8px"
      }}>
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && question && ask(question)}
          placeholder="Ask a question..."
          style={{
            flex: 1,
            background: "#2d3148",
            border: "1px solid #3d4168",
            borderRadius: "8px",
            padding: "8px 12px",
            color: "#fff",
            fontSize: "12px",
            outline: "none"
          }}
        />
        <button
          onClick={() => question && ask(question)}
          style={{
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            border: "none",
            borderRadius: "8px",
            padding: "8px 14px",
            color: "#fff",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          ➤
        </button>
      </div>
    </div>
  );
}
