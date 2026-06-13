import React, { useState } from "react";

const menuItems = [
  { section: "MAIN", items: [
    { icon: "🏠", label: "Dashboard" },
    { icon: "🗼", label: "Finance Control Tower" },
  ]},
  { section: "DATA MANAGEMENT", items: [
    { icon: "📥", label: "ERP Data Ingestion" },
    { icon: "✅", label: "Data Quality" },
    { icon: "🔄", label: "Reconciliation" },
  ]},
  { section: "FINANCIAL PROCESS", items: [
    { icon: "📋", label: "Balance Sheet" },
    { icon: "📔", label: "Journal Entries" },
    { icon: "📅", label: "Month End Close" },
    { icon: "✔️", label: "Approval Workflows" },
  ]},
  { section: "ANALYTICS", items: [
    { icon: "📈", label: "Financial KPIs" },
    { icon: "🚨", label: "Anomaly Detection" },
    { icon: "📊", label: "Variance Analysis" },
    { icon: "🔮", label: "Forecasting" },
  ]},
  { section: "AI & AUTOMATION", items: [
    { icon: "🤖", label: "AI Finance Copilot" },
    { icon: "💡", label: "Smart Insights" },
    { icon: "🔍", label: "Audit Assistant" },
  ]},
  { section: "REPORTS", items: [
    { icon: "📄", label: "Executive Reports" },
    { icon: "📦", label: "Client Deliverables" },
    { icon: "🗂️", label: "Audit Trail" },
  ]},
];

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <div style={{
      width: "220px",
      minWidth: "220px",
      background: "#13151f",
      borderRight: "1px solid #1f2335",
      overflowY: "auto",
      padding: "16px 0",
      height: "100vh"
    }}>
      {/* Logo */}
      <div style={{
        padding: "0 16px 20px",
        borderBottom: "1px solid #1f2335"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "10px"
        }}>
          <div style={{
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            borderRadius: "8px",
            padding: "6px 10px",
            fontSize: "14px",
            fontWeight: "800",
            color: "#fff"
          }}>CB</div>
          <div>
            <p style={{
              color: "#fff",
              fontWeight: "700",
              fontSize: "15px",
              margin: 0
            }}>ClarityBooks</p>
            <p style={{
              color: "#6b7280",
              fontSize: "10px",
              margin: 0
            }}>AI Finance Platform</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      {menuItems.map((group) => (
        <div key={group.section} style={{ marginTop: "16px" }}>
          <p style={{
            color: "#4b5563",
            fontSize: "10px",
            fontWeight: "600",
            padding: "0 16px",
            letterSpacing: "1px",
            margin: "0 0 4px 0"
          }}>
            {group.section}
          </p>
          {group.items.map((item) => (
            <div
              key={item.label}
              onClick={() => setActive(item.label)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 16px",
                cursor: "pointer",
                margin: "2px 8px",
                borderRadius: "6px",
                borderLeft: active === item.label
                  ? "2px solid #6366f1"
                  : "2px solid transparent",
                background: active === item.label
                  ? "#6366f122"
                  : "transparent",
                color: active === item.label ? "#fff" : "#6b7280",
                fontSize: "13px",
                transition: "all 0.2s"
              }}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
