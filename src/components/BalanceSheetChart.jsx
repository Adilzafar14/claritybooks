import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { balanceSheetData } from "../data/accentureData";

export default function BalanceSheetChart() {
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
        Balance Sheet Overview
      </h3>

      {/* Chart */}
      <PieChart width={200} height={180}>
        <Pie
          data={balanceSheetData}
          cx={95}
          cy={85}
          innerRadius={50}
          outerRadius={80}
          paddingAngle={3}
          dataKey="value"
        >
          {balanceSheetData.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          formatter={(v) => `$${(v / 1000000).toFixed(0)}M`}
          contentStyle={{
            background: "#1a1d2e",
            border: "1px solid #2d3148",
            color: "#fff",
            borderRadius: "8px"
          }}
        />
      </PieChart>

      {/* Legend */}
      <div style={{ marginTop: "8px" }}>
        {balanceSheetData.map((item, i) => (
          <div key={i} style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "4px 0",
            fontSize: "12px"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}>
              <div style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: item.color
              }} />
              <span style={{ color: "#9ca3af" }}>
                {item.name}
              </span>
            </div>
            <span style={{
              color: "#fff",
              fontWeight: "600"
            }}>
              ${(item.value / 1000).toFixed(0)}M
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
