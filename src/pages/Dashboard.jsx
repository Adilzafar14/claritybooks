import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import KPICard from "../components/KPICard";
import BalanceSheetChart from "../components/BalanceSheetChart";
import TrendChart from "../components/TrendChart";
import AnomalyPanel from "../components/AnomalyPanel";
import TransactionTable from "../components/TransactionTable";
import AICopilot from "../components/AICopilot";
import { kpiData } from "../data/accentureData";

export default function Dashboard() {
  const [kpis, setKpis] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/kpis")
      .then(res => res.json())
      .then(data => {
        setKpis(data.kpis);
        setLoading(false);
      })
      .catch(err => {
        console.log("API error:", err);
        setLoading(false);
      });
  }, []);

  const displayKpis = kpis.length > 0 ? kpis.map(k => ({
  label: k.kpi_name,
  value: `${k.kpi_value} ${k.kpi_unit}`,
  change: k.variance_pct,
  color: k.status === 'GOOD' ? '#10b981' : 
         k.status === 'WARNING' ? '#f59e0b' : '#ef4444'
})) : kpiData;

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      background: "#0f1117",
      color: "#fff",
      fontFamily: "Inter, sans-serif"
    }}>
      <Sidebar />

      <div style={{ flex: 1, overflow: "auto" }}>
        <TopBar />

        <div style={{ padding: "20px" }}>

          {/* KPI Cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "16px",
            marginBottom: "20px"
          }}>
            {displayKpis.map((kpi, i) => (
              <KPICard
                key={i}
                label={kpi.label}
                value={kpi.value}
                change={kpi.change}
                color={kpi.color}
              />
            ))}
          </div>

          {/* Row 2 */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr 1fr",
            gap: "16px",
            marginBottom: "20px"
          }}>
            <BalanceSheetChart />
            <TrendChart />
            <AICopilot />
          </div>

          {/* Row 3 */}
          <div style={{ marginBottom: "20px" }}>
            <AnomalyPanel />
          </div>

          {/* Row 4 */}
          <TransactionTable />

        </div>
      </div>
    </div>
  );
}