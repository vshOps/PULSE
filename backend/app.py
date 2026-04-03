from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="PULSE Backend - Hugging Face Deployment")

# Enable CORS for the frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins for easy integration
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"status": "ok", "message": "PULSE API is running"}

@app.get("/api/vitals")
def get_vitals():
    return {
        "patient": {
            "name": "Neha Patel",
            "age": 54,
            "conditions": ["Type 2 Diabetes", "Hypertension"],
            "doctor": "Dr. Sharma",
            "clinic": "Jaipur Medical Centre"
        },
        "vitals": {
            "bp": "148/94",
            "bp_trend": "rising",
            "hba1c": "7.8%",
            "hba1c_trend": "creeping up",
            "heart_rate": "76 bpm",
            "bmi": 28.4
        },
        "mirror_score": {
            "overall": 62,
            "max": 100,
            "breakdown": {
                "physical": 58,
                "mental": 44,
                "lifestyle": 71,
                "adherence": 55,
                "social": 82
            }
        },
        "causal_chain": [
            "Work Stress",
            "Sleep Disruption",
            "Cortisol Elevation",
            "BP Rising",
            "Glucose Instability"
        ],
        "risks": [
            {"name": "Cardiovascular event", "probability": "67%", "level": "HIGH"},
            {"name": "Insulin dependency", "probability": "41%", "level": "MEDIUM"},
            {"name": "Diabetic neuropathy", "probability": "18%", "level": "LOW"}
        ]
    }
