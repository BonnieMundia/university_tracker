import { NextResponse } from "next/server";
import { applications, countrySignals, opportunities, studentProfile } from "@/lib/data";

export async function GET() {
  const bestValue = applications
    .map((item) => ({
      university: item.university,
      score: Math.round((item.careerScore * 0.34 + item.migrationScore * 0.24 + item.admissionProbability * 0.18 + item.scholarshipProbability * 0.14) - ((item.tuitionUsd + item.livingCostUsd - item.scholarshipUsd) / 1800)),
      netYearOneUsd: item.tuitionUsd + item.livingCostUsd - item.scholarshipUsd
    }))
    .sort((a, b) => b.score - a.score);

  return NextResponse.json({
    profile: studentProfile,
    generatedAt: new Date().toISOString(),
    recommendation: "Scholarship-first EU strategy with Canada as a career-upside stretch option.",
    bestValue,
    countrySuitability: countrySignals,
    opportunities
  });
}
