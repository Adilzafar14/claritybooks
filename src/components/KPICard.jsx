import React from "react";

export default function KPICard({ label, value, change, color }) {
  const isPositive = change >= 0;

  return (
    <div style={{
      background: "#1a1d2e",
      borderRadius: "12px",
      padding: "20px",
      border: `1px solid ${color}44`,
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Label */}
      <p style={{
        color: "#9ca3af",
        fontSize: "12px",
        margin: "0 0 8px 0",
        fontWeight: "500"
      }}>
        {label}
      </p>

      {/* Value */}
      <h2 style={{
        color: "#ffffff",
        fontSize: "26px",
        fontWeight: "700",
        margin: "0 0 8px 0"
      }}>
        {value}
      </h2>

      {/* Change */}
      <p style={{
        color: isPositive ? "#10b981" : "#ef4444",
        fontSize: "12px",
        margin: 0,
        fontWeight: "600"
      }}>
        {isPositive ? "▲" : "▼"} {Math.abs(change)}%
        <span style={{
          color: "#6b7280",
          fontWeight: "400",
          marginLeft: "6px"
        }}>
          vs Last Year
        </span>
      </p>

      {/* Bottom color bar */}
      <div style={{
        position: "absolute",
        bottom: 0, left: 0,
        height: "3px",
        width: "100%",
        background: `linear-gradient(to right, ${color}, transparent)`
      }} />
    </div>
  );
}
