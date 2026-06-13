import React from "react";

export default function TopBar() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 24px",
      background: "#13151f",
      borderBottom: "1px solid #1f2335",
      position: "sticky",
      top: 0,
      zIndex: 10
    }}>
      {/* Left Side */}
      <div>
        <h1 style={{
          color: "#fff",
          fontSize: "18px",
          fontWeight: "700",
          margin: 0
        }}>
          CFO Dashboard
        </h1>
        <p style={{
          color: "#6b7280",
          fontSize: "12px",
          margin: 0
        }}>
          Real-time Financial Intelligence • Accenture FY2023
        </p>
      </div>

      {/* Right Side */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "16px"
      }}>
        {/* Search */}
        <div style={{
          background: "#1a1d2e",
          borderRadius: "8px",
          padding: "8px 16px",
          color: "#6b7280",
          fontSize: "13px",
          border: "1px solid #2d3148",
          cursor: "pointer"
        }}>
          🔍 Search...
        </div>

        {/* Notification */}
        <div style={{
          background: "#1a1d2e",
          borderRadius: "8px",
          padding: "8px 12px",
          color: "#6b7280",
          border: "1px solid #2d3148",
          cursor: "pointer",
          position: "relative"
        }}>
          🔔
          <span style={{
            position: "absolute",
            top: "4px",
            right: "4px",
            background: "#ef4444",
            borderRadius: "50%",
            width: "8px",
            height: "8px",
            display: "block"
          }} />
        </div>

        {/* User */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "10px"
        }}>
          <div style={{
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "700",
            fontSize: "14px",
            color: "#fff"
          }}>
            A
          </div>
          <div>
            <p style={{
              color: "#fff",
              fontSize: "13px",
              fontWeight: "600",
              margin: 0
            }}>
              Data Analyst
            </p>
            <p style={{
              color: "#6b7280",
              fontSize: "11px",
              margin: 0
            }}>
              CFO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
