// ============================================
// CLARITYBOOKS — REAL ACCENTURE DATA
// Source: SEC EDGAR 10-K FY2023
// ============================================

export const companyInfo = {
  name: "Accenture PLC",
  ticker: "ACN",
  fiscalYear: "FY2023",
  reportingDate: "August 31, 2023",
  currency: "USD"
};

export const kpiData = [
  { label: "Total Assets",        value: "$51.2B", change: +8.43,  color: "#6366f1" },
  { label: "Total Liabilities",   value: "$24.8B", change: -0.53,  color: "#f59e0b" },
  { label: "Shareholders Equity", value: "$26.5B", change: +16.33, color: "#10b981" },
  { label: "Current Ratio",       value: "1.30",   change: +0.05,  color: "#8b5cf6" },
  { label: "Debt to Equity",      value: "0.94",   change: -0.07,  color: "#06b6d4" },
];

export const balanceSheetData = [
  { name: "Current Assets",          value: 23381931, color: "#6366f1" },
  { name: "Non-Current Assets",      value: 27863374, color: "#8b5cf6" },
  { name: "Current Liabilities",     value: 18009038, color: "#f59e0b" },
  { name: "Non-Current Liabilities", value: 6777674,  color: "#10b981" },
];

export const trendData = [
  { month: "Sep 22", assets: 47263, liabilities: 24516 },
  { month: "Nov 22", assets: 47727, liabilities: 23270 },
  { month: "Feb 23", assets: 50128, liabilities: 24066 },
  { month: "May 23", assets: 51245, liabilities: 24787 },
  { month: "Aug 23", assets: 51531, liabilities: 24045 },
];

export const anomalies = [
  { id: "JE-2023-001", type: "Large Transaction", account: "Treasury Shares",  amount: "$7.06B", severity: "HIGH",   description: "Share buyback 45% above 3-year average" },
  { id: "JE-2023-002", type: "Rapid Increase",    account: "Goodwill",         amount: "$15.57B",severity: "HIGH",   description: "Goodwill increased 18.58% YoY" },
  { id: "JE-2023-003", type: "Threshold Breach",  account: "Accrued Payroll",  amount: "$7.5B",  severity: "MEDIUM", description: "Verify headcount alignment" },
  { id: "JE-2023-004", type: "Variance Flag",     account: "Deferred Revenue", amount: "$4.9B",  severity: "LOW",    description: "Revenue increased 9.5%" },
];

export const transactions = [
  { date: "31 Aug 2023", id: "JE-2023-001", desc: "Share Buyback",    account: "Treasury Shares",   debit: "7,062,512", credit: "-",         status: "Posted" },
  { date: "31 Aug 2023", id: "JE-2023-002", desc: "Acquisition",      account: "Goodwill",          debit: "2,530,863", credit: "-",         status: "Posted" },
  { date: "31 Aug 2023", id: "JE-2023-003", desc: "Dividend Payment", account: "Retained Earnings", debit: "-",         credit: "2,827,394", status: "Posted" },
  { date: "31 Aug 2023", id: "JE-2023-004", desc: "Operating Cash",   account: "Cash & Equivalents",debit: "-",         credit: "9,045,032", status: "Posted" },
];
