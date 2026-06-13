from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from supabase import create_client
import os
from dotenv import load_dotenv

load_dotenv()

# Supabase connect
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")
supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

app = FastAPI(
    title="ClarityBooks API",
    description="AI Finance Transformation Platform",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3002"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {
        "status": "online",
        "platform": "ClarityBooks AI Finance Platform",
        "version": "1.0.0"
    }

@app.get("/api/v1/health")
def health():
    return {"status": "healthy"}

@app.get("/api/v1/kpis")
def get_kpis():
    data = supabase.table("fact_kpis").select("*").execute()
    return {
        "period": "FY2023",
        "company": "Accenture PLC",
        "kpis": data.data
    }

@app.get("/api/v1/anomalies")
def get_anomalies():
    data = supabase.table("fact_anomalies").select("*").execute()
    return {
        "total": len(data.data),
        "anomalies": data.data
    }

@app.get("/api/v1/balance-sheet")
def get_balance_sheet():
    data = supabase.table("fact_balance_sheet").select("*").execute()
    return {
        "period": "FY2023",
        "data": data.data
    }

@app.get("/api/v1/accounts")
def get_accounts():
    data = supabase.table("dim_accounts").select("*").execute()
    return {"accounts": data.data}