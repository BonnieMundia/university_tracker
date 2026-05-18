export type Application = {
  university: string;
  country: string;
  city: string;
  program: string;
  specialization: string;
  status: string;
  deadline: string;
  tuitionUsd: number;
  scholarshipUsd: number;
  livingCostUsd: number;
  rentUsd: number;
  admissionProbability: number;
  scholarshipProbability: number;
  careerScore: number;
  migrationScore: number;
  verdict: string;
};

export type CountrySignal = {
  country: string;
  suitability: number;
  postStudyVisa: string;
  prProbability: number;
  engineeringDemand: number;
  cloudDemand: number;
  telecomDemand: number;
  qualityOfLife: number;
  safety: number;
  difficulty: string;
};

export type Opportunity = {
  title: string;
  type: string;
  location: string;
  value: string;
  deadline: string;
  fit: number;
  reason: string;
};

export const studentProfile = {
  name: "Ari Rahman",
  mission: "Secure a funded MSc pathway abroad that compounds into cloud engineering, networking, telecom, and long-term global mobility.",
  currentDegree: "BSc Engineering",
  targetIntake: "Fall 2027",
  focusAreas: ["Cloud Engineering", "Telecommunications", "Distributed Systems", "AI Infrastructure", "Network Security"],
  preferredCountries: ["Canada", "Germany", "Netherlands", "Finland", "Australia", "United Kingdom"],
  budgetCeilingUsd: 22000,
  savingsUsd: 8500,
  riskTolerance: "Balanced but scholarship-first",
  careerNorthStar: "Senior cloud/network infrastructure engineer with migration optionality and startup exposure"
};

export const applications: Application[] = [
  {
    university: "Technical University of Munich",
    country: "Germany",
    city: "Munich",
    program: "MSc Communications Engineering",
    specialization: "Networks, cloud-native communication systems",
    status: "Profile strengthening",
    deadline: "2027-05-31",
    tuitionUsd: 6500,
    scholarshipUsd: 4800,
    livingCostUsd: 15800,
    rentUsd: 850,
    admissionProbability: 68,
    scholarshipProbability: 44,
    careerScore: 93,
    migrationScore: 77,
    verdict: "High ROI if German language and research fit are improved early."
  },
  {
    university: "University of Waterloo",
    country: "Canada",
    city: "Waterloo",
    program: "MEng Electrical and Computer Engineering",
    specialization: "Cloud, distributed systems, networking",
    status: "Shortlisted",
    deadline: "2027-02-01",
    tuitionUsd: 31500,
    scholarshipUsd: 9500,
    livingCostUsd: 17000,
    rentUsd: 980,
    admissionProbability: 61,
    scholarshipProbability: 38,
    careerScore: 96,
    migrationScore: 88,
    verdict: "Strategic career accelerator; financial exposure requires assistantship or co-op plan."
  },
  {
    university: "Aalto University",
    country: "Finland",
    city: "Espoo",
    program: "MSc Communications and Data Science",
    specialization: "5G/6G, cloud services, data networks",
    status: "Scholarship watch",
    deadline: "2027-01-02",
    tuitionUsd: 16500,
    scholarshipUsd: 12000,
    livingCostUsd: 13800,
    rentUsd: 720,
    admissionProbability: 73,
    scholarshipProbability: 57,
    careerScore: 89,
    migrationScore: 82,
    verdict: "Best-fit Nordic option for telecom depth and scholarship leverage."
  },
  {
    university: "TU Delft",
    country: "Netherlands",
    city: "Delft",
    program: "MSc Computer Engineering",
    specialization: "Embedded cloud, systems, networking",
    status: "Documents pending",
    deadline: "2027-04-01",
    tuitionUsd: 23800,
    scholarshipUsd: 15000,
    livingCostUsd: 16400,
    rentUsd: 910,
    admissionProbability: 58,
    scholarshipProbability: 29,
    careerScore: 92,
    migrationScore: 74,
    verdict: "Prestige and ecosystem are strong; scholarship odds need a sharper research narrative."
  }
];

export const countrySignals: CountrySignal[] = [
  { country: "Canada", suitability: 91, postStudyVisa: "Up to 3 years", prProbability: 84, engineeringDemand: 90, cloudDemand: 94, telecomDemand: 83, qualityOfLife: 88, safety: 86, difficulty: "Moderate cost, friendly migration" },
  { country: "Germany", suitability: 88, postStudyVisa: "18-month job search", prProbability: 78, engineeringDemand: 92, cloudDemand: 88, telecomDemand: 91, qualityOfLife: 87, safety: 89, difficulty: "Language and bureaucracy" },
  { country: "Finland", suitability: 86, postStudyVisa: "2 years", prProbability: 79, engineeringDemand: 84, cloudDemand: 86, telecomDemand: 95, qualityOfLife: 92, safety: 94, difficulty: "Smaller market, high fit for telecom" },
  { country: "Netherlands", suitability: 82, postStudyVisa: "1 orientation year", prProbability: 70, engineeringDemand: 87, cloudDemand: 90, telecomDemand: 79, qualityOfLife: 89, safety: 88, difficulty: "Housing pressure" },
  { country: "Australia", suitability: 79, postStudyVisa: "2-4 years", prProbability: 76, engineeringDemand: 82, cloudDemand: 86, telecomDemand: 75, qualityOfLife: 90, safety: 87, difficulty: "Tuition and distance" },
  { country: "United Kingdom", suitability: 76, postStudyVisa: "2 years", prProbability: 61, engineeringDemand: 83, cloudDemand: 91, telecomDemand: 77, qualityOfLife: 84, safety: 82, difficulty: "Shorter PR runway" }
];

export const opportunities: Opportunity[] = [
  { title: "Erasmus Mundus Joint Master scholarship scan", type: "Fully funded", location: "EU", value: "Tuition + stipend", deadline: "2026-12-15", fit: 89, reason: "Best for full funding and multi-country mobility." },
  { title: "DAAD engineering graduate scholarship", type: "Scholarship", location: "Germany", value: "$10k-$14k", deadline: "2026-10-31", fit: 84, reason: "Strong alignment with communications engineering and German ROI." },
  { title: "Nokia Bell Labs student research internship", type: "Internship", location: "Finland / Global", value: "Paid", deadline: "Rolling", fit: 91, reason: "Direct telecom and network infrastructure signal." },
  { title: "Cloud resume challenge + Kubernetes lab portfolio", type: "Career sprint", location: "Remote", value: "Portfolio lift", deadline: "2026-07-30", fit: 96, reason: "Improves admission, assistantship, and job outcomes simultaneously." },
  { title: "University application fee waiver campaign", type: "Fee waiver", location: "Canada / EU", value: "$75-$180 per application", deadline: "2026-09-01", fit: 78, reason: "Reduces portfolio cost while preserving optionality." }
];

export const timeline = [
  { month: "May 2026", action: "Lock target countries, collect transcripts, define program scoring model", urgency: "Now" },
  { month: "Jun 2026", action: "Publish cloud/network portfolio and request recommendation letters", urgency: "High" },
  { month: "Aug 2026", action: "Draft SOP variants for Canada, Germany, Nordics, and Netherlands", urgency: "High" },
  { month: "Oct 2026", action: "Submit scholarship-first applications and assistantship outreach", urgency: "Critical" },
  { month: "Jan 2027", action: "Finalize applications, housing watchlists, and visa document folders", urgency: "Critical" },
  { month: "Apr 2027", action: "Compare offers by ROI, migration path, career outcomes, and funding risk", urgency: "Decision" }
];

export const advisorInsights = [
  "Prioritize Aalto, TUM, and Waterloo because they maximize telecom/cloud signal while preserving migration options.",
  "Create one master SOP narrative around resilient cloud networks for emerging economies, then localize it per country.",
  "Your highest leverage move is a public portfolio: Kubernetes deployment, network observability dashboard, and a short technical blog series.",
  "Cap unfunded first-year exposure below $22k unless the post-study work route and internship density justify the risk.",
  "Begin housing research six months before admission decisions in Delft, Munich, Waterloo, and Espoo to avoid rent shocks."
];
