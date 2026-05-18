import type { CSSProperties } from "react";
import { applications, advisorInsights, countrySignals, opportunities, studentProfile, timeline } from "@/lib/data";

const totalDeadlines = applications.length + opportunities.filter((item) => item.deadline !== "Rolling").length;
const bestCountry = [...countrySignals].sort((a, b) => b.suitability - a.suitability)[0];
const bestValue = [...applications].sort((a, b) =>
  (b.careerScore + b.migrationScore + b.scholarshipProbability - (b.tuitionUsd + b.livingCostUsd - b.scholarshipUsd) / 1000) -
  (a.careerScore + a.migrationScore + a.scholarshipProbability - (a.tuitionUsd + a.livingCostUsd - a.scholarshipUsd) / 1000)
)[0];

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

function ScoreRing({ score, label }: { score: number; label: string }) {
  return (
    <div className="score-ring" style={{ "--score": `${score * 3.6}deg` } as CSSProperties}>
      <span>{score}</span>
      <small>{label}</small>
    </div>
  );
}

function SignalBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="signal-bar">
      <div>
        <span>{label}</span>
        <strong>{value}%</strong>
      </div>
      <i style={{ width: `${value}%` }} />
    </div>
  );
}

export default function Home() {
  return (
    <main className="shell">
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />

      <nav className="topbar glass">
        <div className="brand">
          <span className="brand-orb">A</span>
          <div>
            <strong>Atlas Opportunity OS</strong>
            <small>Private AI strategist for {studentProfile.name}</small>
          </div>
        </div>
        <div className="nav-links">
          <a href="#applications">Applications</a>
          <a href="#countries">Countries</a>
          <a href="#opportunities">Opportunities</a>
          <a href="#roadmap">Roadmap</a>
        </div>
        <button className="mode-toggle">Dark / Light intelligence</button>
      </nav>

      <section className="hero">
        <div className="hero-copy glass">
          <p className="eyebrow">Personal command center · {studentProfile.targetIntake}</p>
          <h1>Good evening, {studentProfile.name}. Your global engineering future is being optimized.</h1>
          <p className="mission">{studentProfile.mission}</p>
          <div className="hero-actions">
            <button>Generate weekly AI report</button>
            <button className="secondary">Ask Atlas Advisor</button>
          </div>
          <div className="focus-tags">
            {studentProfile.focusAreas.map((area) => <span key={area}>{area}</span>)}
          </div>
        </div>

        <aside className="ai-brief glass">
          <div className="assistant-orb">AI</div>
          <h2>Strategic verdict</h2>
          <p>Best value target: <strong>{bestValue.university}</strong>. Best country fit: <strong>{bestCountry.country}</strong>. Maintain a scholarship-first portfolio with one high-upside Canada option.</p>
          <div className="brief-grid">
            <ScoreRing score={bestCountry.suitability} label="country fit" />
            <ScoreRing score={bestValue.careerScore} label="career lift" />
          </div>
        </aside>
      </section>

      <section className="kpi-grid">
        <article className="glass kpi"><span>Active applications</span><strong>{applications.length}</strong><small>Across {new Set(applications.map((app) => app.country)).size} countries</small></article>
        <article className="glass kpi"><span>Tracked deadlines</span><strong>{totalDeadlines}</strong><small>Scholarship + university pipeline</small></article>
        <article className="glass kpi"><span>Budget ceiling</span><strong>{money.format(studentProfile.budgetCeilingUsd)}</strong><small>{studentProfile.riskTolerance}</small></article>
        <article className="glass kpi"><span>Top opportunity fit</span><strong>{Math.max(...opportunities.map((item) => item.fit))}%</strong><small>Portfolio sprint improves all outcomes</small></article>
      </section>

      <section className="dashboard-grid" id="applications">
        <div className="section-heading">
          <p className="eyebrow">University application tracker</p>
          <h2>AI-ranked applications with cost, admission, scholarship, housing, and migration intelligence</h2>
        </div>
        {applications.map((app) => {
          const netCost = app.tuitionUsd + app.livingCostUsd - app.scholarshipUsd;
          return (
            <article className="application-card glass" key={app.university}>
              <div className="card-head">
                <div>
                  <small>{app.city}, {app.country}</small>
                  <h3>{app.university}</h3>
                  <p>{app.program}</p>
                </div>
                <span className="status">{app.status}</span>
              </div>
              <p className="specialization">{app.specialization}</p>
              <div className="metrics-row">
                <ScoreRing score={app.admissionProbability} label="admit" />
                <ScoreRing score={app.scholarshipProbability} label="funding" />
                <ScoreRing score={app.migrationScore} label="mobility" />
              </div>
              <div className="cost-grid">
                <span><small>Tuition</small>{money.format(app.tuitionUsd)}</span>
                <span><small>Living</small>{money.format(app.livingCostUsd)}</span>
                <span><small>Rent/mo</small>{money.format(app.rentUsd)}</span>
                <span><small>Net year 1</small>{money.format(netCost)}</span>
              </div>
              <div className="deadline">Deadline: <strong>{app.deadline}</strong></div>
              <p className="verdict">{app.verdict}</p>
            </article>
          );
        })}
      </section>

      <section className="comparison-panel glass" id="countries">
        <div className="section-heading compact">
          <p className="eyebrow">Country comparison analytics</p>
          <h2>Suitability, migration runway, safety, quality of life, cloud demand, and telecom growth</h2>
        </div>
        <div className="country-table">
          {countrySignals.map((country) => (
            <article key={country.country} className="country-row">
              <div className="country-title">
                <strong>{country.country}</strong>
                <small>{country.postStudyVisa} · {country.difficulty}</small>
              </div>
              <SignalBar label="Suitability" value={country.suitability} />
              <SignalBar label="PR probability" value={country.prProbability} />
              <SignalBar label="Cloud demand" value={country.cloudDemand} />
              <SignalBar label="Telecom demand" value={country.telecomDemand} />
            </article>
          ))}
        </div>
      </section>

      <section className="intelligence-grid">
        <article className="glass module" id="opportunities">
          <div className="section-heading compact">
            <p className="eyebrow">Personalized global opportunities feed</p>
            <h2>Scholarships, assistantships, internships, waivers, and strategic career sprints</h2>
          </div>
          <div className="opportunity-list">
            {opportunities.map((item) => (
              <div className="opportunity" key={item.title}>
                <span>{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.reason}</p>
                <footer><strong>{item.fit}% fit</strong><small>{item.location} · {item.value} · {item.deadline}</small></footer>
              </div>
            ))}
          </div>
        </article>

        <article className="glass module advisor">
          <div className="section-heading compact">
            <p className="eyebrow">Atlas AI recommendations</p>
            <h2>Next-best actions for admissions, scholarships, relocation, and career ROI</h2>
          </div>
          <ol>
            {advisorInsights.map((insight) => <li key={insight}>{insight}</li>)}
          </ol>
        </article>
      </section>

      <section className="planner-grid" id="roadmap">
        <article className="glass roadmap">
          <div className="section-heading compact">
            <p className="eyebrow">Timeline planner</p>
            <h2>Fall 2027 execution roadmap</h2>
          </div>
          {timeline.map((item) => (
            <div className="timeline-item" key={item.month}>
              <span>{item.month}</span>
              <p>{item.action}</p>
              <strong>{item.urgency}</strong>
            </div>
          ))}
        </article>

        <article className="glass simulator">
          <div className="section-heading compact">
            <p className="eyebrow">Future career simulator</p>
            <h2>Projected global pathway</h2>
          </div>
          <div className="career-ladder">
            <span>2026<br />Portfolio + SOP</span>
            <span>2027<br />Funded MSc admit</span>
            <span>2028<br />Cloud/telecom internship</span>
            <span>2029<br />Graduate engineer</span>
            <span>2031<br />Senior infrastructure track</span>
          </div>
          <p>The simulator weights employability, visa duration, rent pressure, assistantship odds, internship density, and long-term residency options before recommending where to go next.</p>
        </article>
      </section>

      <div className="floating-ai glass">
        <span>Ask Atlas</span>
        <strong>“Should I apply to this university?”</strong>
      </div>
    </main>
  );
}
