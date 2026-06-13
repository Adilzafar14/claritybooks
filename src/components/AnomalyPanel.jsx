import React from "react";
import { anomalies } from "../data/accentureData";

const severityConfig = {
  HIGH:   { bg: "#ef444422", text: "#ef4444", icon: "🚨" },
  MEDIUM: { bg: "#f59e0b22", text: "#f59e0b", icon: "⚠️" },
  LOW:    { bg: "#10b98122", text: "#10b981", icon: "ℹ️" },
};

export default function AnomalyPanel() {
  return (
    <div style={{
      background: "#1a1d2e",
      borderRadius: "12px",
      padding: "20px",
      border: "1px solid #2d3148"
    }}>
      {/* Header */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "16px"
      }}>
        <h3 style={{
          color: "#fff",
          fontSize: "14px",
          fontWeight: "600",
          margin: 0
        }}>
          Anomaly Detection
        </h3>
        <span style={{
          color: "#6366f1",
          fontSize: "12px",
          cursor: "pointer"
        }}>
          View All
        </span>
      </div>

      {/* Anomaly List */}
      {anomalies.map((a, i) => (
        <div key={i} style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 0",
          borderBottom: i < anomalies.length - 1
            ? "1px solid #2d3148"
            : "none"
        }}>
          {/* Left */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}>
            <div style={{
              width: "34px",
              height: "34px",
              borderRadius: "8px",
              background: severityConfig[a.severity].bg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px"
            }}>
              {severityConfig[a.severity].icon}
            </div>
            <div>
              <p style={{
                color: "#fff",
                fontSize: "13px",
                fontWeight: "600",
                margin: 0
              }}>
                {a.type}
              </p>
              <p style={{
                color: "#6b7280",
                fontSize: "11px",
                margin: 0
              }}>
                {a.account}
              </p>
            </div>
          </div>

          {/* Right */}
          <div style={{ textAlign: "right" }}>
            <p style={{
              color: "#fff",
              fontSize: "13px",
              fontWeight: "600",
              margin: "0 0 4px 0"
            }}>
              {a.amount}
            </p>
            <span style={{
              background: severityConfig[a.severity].bg,
              color: severityConfig[a.severity].text,
              fontSize: "10px",
              padding: "2px 8px",
              borderRadius: "20px",
              fontWeight: "600"
            }}>
              {a.severity}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
