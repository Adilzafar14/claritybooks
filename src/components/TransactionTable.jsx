import React from "react";
import { transactions } from "../data/accentureData";

export default function TransactionTable() {
  return (
    <div style={{
      background: "#1a1d2e",
      borderRadius: "12px",
      padding: "20px",
      border: "1px solid #2d3148"
    }}>
      {/* Header */}
      <h3 style={{
        color: "#fff",
        fontSize: "14px",
        fontWeight: "600",
        margin: "0 0 16px 0"
      }}>
        Recent Transactions — Accenture FY2023
      </h3>

      {/* Table */}
      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        fontSize: "13px"
      }}>
        <thead>
          <tr style={{
            borderBottom: "1px solid #2d3148"
          }}>
            {["Date","Journal ID","Description",
              "Account","Debit ($K)","Credit ($K)","Status"]
              .map((h) => (
              <th key={h} style={{
                color: "#6b7280",
                fontWeight: "600",
                padding: "8px 12px",
                textAlign: "left"
              }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactions.map((t, i) => (
            <tr key={i} style={{
              borderBottom: "1px solid #1f2335"
            }}>
              <td style={{
                padding: "10px 12px",
                color: "#9ca3af"
              }}>
                {t.date}
              </td>
              <td style={{
                padding: "10px 12px",
                color: "#6366f1",
                fontWeight: "600"
              }}>
                {t.id}
              </td>
              <td style={{
                padding: "10px 12px",
                color: "#fff"
              }}>
                {t.desc}
              </td>
              <td style={{
                padding: "10px 12px",
                color: "#9ca3af"
              }}>
                {t.account}
              </td>
              <td style={{
                padding: "10px 12px",
                color: "#ef4444",
                fontWeight: "600"
              }}>
                {t.debit}
              </td>
              <td style={{
                padding: "10px 12px",
                color: "#10b981",
                fontWeight: "600"
              }}>
                {t.credit}
              </td>
              <td style={{
                padding: "10px 12px"
              }}>
                <span style={{
                  background: "#10b98122",
                  color: "#10b981",
                  padding: "3px 10px",
                  borderRadius: "20px",
                  fontSize: "11px",
                  fontWeight: "600"
                }}>
                  {t.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
