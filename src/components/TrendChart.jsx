import React from "react";
import {
  LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend,
  ResponsiveContainer
} from "recharts";
import { trendData } from "../data/accentureData";

export default function TrendChart() {
  return (
    <div style={{
      background: "#1a1d2e",
      borderRadius: "12px",
      padding: "20px",
      border: "1px solid #2d3148"
    }}>
      <h3 style={{
        color: "#fff",
        fontSize: "14px",
        fontWeight: "600",
        margin: "0 0 16px 0"
      }}>
        Assets vs Liabilities Trend (FY2023)
      </h3>

      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={trendData}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#2d3148"
          />
          <XAxis
            dataKey="month"
            stroke="#6b7280"
            fontSize={11}
          />
          <YAxis
            stroke="#6b7280"
            fontSize={11}
            tickFormatter={(v) => `$${v/1000}B`}
          />
          <Tooltip
            formatter={(v) => `$${(v/1000).toFixed(1)}B`}
            contentStyle={{
              background: "#1a1d2e",
              border: "1px solid #2d3148",
              color: "#fff",
              borderRadius: "8px"
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="assets"
            stroke="#6366f1"
            strokeWidth={2}
            dot={{ fill: "#6366f1", r: 4 }}
            name="Total Assets"
          />
          <Line
            type="monotone"
            dataKey="liabilities"
            stroke="#f59e0b"
            strokeWidth={2}
            dot={{ fill: "#f59e0b", r: 4 }}
            name="Total Liabilities"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
