import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Attempt to fetch from HuggingFace backend using the env variable prefix REACT_APP_
    const fetchUrl = import.meta.env.REACT_APP_API_URL 
      ? `${import.meta.env.REACT_APP_API_URL}/api/vitals` 
      : 'http://127.0.0.1:8000/api/vitals';

    fetch(fetchUrl)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => {
        console.error("Backend not reachable. Displaying local dummy data.", err);
        // Fallback exact dummy data to ensure UI is always visible per requirements
        setData({
          patient: {
            name: "Neha Patel",
            age: 54,
            conditions: ["Type 2 Diabetes", "Hypertension"],
            doctor: "Dr. Sharma",
            clinic: "Jaipur Medical Centre"
          },
          vitals: {
            bp: "148/94",
            bp_trend: "rising",
            hba1c: "7.8%",
            hba1c_trend: "creeping up",
            heart_rate: "76 bpm",
            bmi: 28.4
          },
          mirror_score: {
            overall: 62,
            max: 100,
            breakdown: {
              physical: 58,
              mental: 44,
              lifestyle: 71,
              adherence: 55,
              social: 82
            }
          },
          causal_chain: [
            "Work Stress",
            "Sleep Disruption",
            "Cortisol Elevation",
            "BP Rising",
            "Glucose Instability"
          ],
          risks: [
            {"name": "Cardiovascular event", "probability": "67%", "level": "HIGH"},
            {"name": "Insulin dependency", "probability": "41%", "level": "MEDIUM"},
            {"name": "Diabetic neuropathy", "probability": "18%", "level": "LOW"}
          ]
        });
      });
  }, []);

  if (!data) {
    return <div style={{ padding: "4rem", textAlign: "center" }}>INITIALIZING SENTINEL...</div>;
  }

  return (
    <div className="layout-grid">
      {/* Sidebar / Patient Context */}
      <aside className="sidebar">
        <h2 className="headline-sm">{data.patient.name}</h2>
        <p style={{ opacity: 0.7, marginBottom: "2rem" }}>Age {data.patient.age} • {data.patient.doctor} • {data.patient.clinic}</p>
        
        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "0.75rem", textTransform: "uppercase", opacity: 0.5, marginBottom: "0.5rem" }}>Conditions</h3>
          {data.patient.conditions.map(c => (
            <div key={c} style={{ background: "rgba(255,255,255,0.05)", padding: "0.5rem 1rem", borderRadius: "8px", marginBottom: "0.5rem" }}>
              {c}
            </div>
          ))}
        </div>

        <div>
          <h3 style={{ fontSize: "0.75rem", textTransform: "uppercase", opacity: 0.5, marginBottom: "0.5rem" }}>Risk Vectors</h3>
          {data.risks.map(r => (
            <div key={r.name} style={{ display: "flex", justifyContent: "space-between", background: "rgba(255,255,255,0.05)", padding: "0.75rem 1rem", borderRadius: "8px", marginBottom: "0.5rem", borderLeft: r.level === 'HIGH' ? '3px solid var(--tertiary)' : (r.level === 'MEDIUM' ? '3px solid var(--primary)' : '3px solid var(--secondary)') }}>
              <span>{r.name}</span>
              <span style={{ fontWeight: 600 }}>{r.probability}</span>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Dashboard Panel */}
      <main className="dashboard-content">
        
        <div className="card-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h1 className="headline-sm" style={{ marginBottom: "0.5rem" }}>System Mirror Score</h1>
            <p style={{ opacity: 0.7 }}>Patient stability index combining vital inputs.</p>
          </div>
          <div className="mirror-score-glow">
            <span className="display-lg">{data.mirror_score.overall}</span>
            <span style={{ fontSize: "1.5rem", opacity: 0.5 }}>/{data.mirror_score.max}</span>
          </div>
        </div>

        <div className="grid-3">
          <div className="vital-chip normal">
            <span style={{ fontSize: "0.75rem", textTransform: "uppercase", opacity: 0.7 }}>Heart Rate</span>
            <span className="headline-sm">{data.vitals.heart_rate}</span>
          </div>
          <div className="vital-chip warning">
            <span style={{ fontSize: "0.75rem", textTransform: "uppercase", opacity: 0.7 }}>Blood Pressure ({data.vitals.bp_trend})</span>
            <span className="headline-sm">{data.vitals.bp}</span>
          </div>
          <div className="vital-chip warning">
            <span style={{ fontSize: "0.75rem", textTransform: "uppercase", opacity: 0.7 }}>HbA1c ({data.vitals.hba1c_trend})</span>
            <span className="headline-sm">{data.vitals.hba1c}</span>
          </div>
          <div className="vital-chip normal">
            <span style={{ fontSize: "0.75rem", textTransform: "uppercase", opacity: 0.7 }}>BMI</span>
            <span className="headline-sm">{data.vitals.bmi}</span>
          </div>
        </div>

        <div className="card-container">
          <h2 className="headline-sm" style={{ marginBottom: "1.5rem" }}>Causal Chain Analysis</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", position: "relative" }}>
            {/* The line connecting nodes */}
            <div style={{ position: "absolute", left: "15px", top: "10px", bottom: "10px", width: "2px", background: "var(--outline-variant)" }}></div>
            
            {data.causal_chain.map((event, idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "center", gap: "1.5rem", zIndex: 1 }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: idx === data.causal_chain.length - 1 ? "var(--tertiary)" : "var(--surface-high)", border: "2px solid var(--bg-surface)", display: "flex", alignItems:"center", justifyContent:"center", fontSize:"0.75rem" }}>
                  {idx + 1}
                </div>
                <div style={{ background: "rgba(255,255,255,0.02)", padding: "0.75rem 1.5rem", borderRadius: "8px", flex: 1, border: idx === data.causal_chain.length - 1 ? "1px solid rgba(255,178,186,0.2)" : "done" }}>
                  {event}
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
