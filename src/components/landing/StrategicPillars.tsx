"use client";

import { LineChart, ShieldCheck, BrainCircuit, Check } from "lucide-react";
import { Reveal } from "@/src/components/ui/reveal";

const features1 = [
    "Predictive Rolling Forecasts",
    "Inflation (IAS 29) Calibration",
    "Multi-Source Consolidation",
];

const features2 = [
    "Behavioral Leakage Detection",
    "Dual Scoring Engine",
    "Pre-emptive Alerting",
];

const features3 = [
    "Explainable AI Framework (XAI)",
    "Root-Cause Analysis",
    "Decision Traceability",
];

function FeatureList({ items }: { items: string[] }) {
    return (
        <ul className="flex flex-col gap-3">
            {items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                        <Check className="h-3 w-3" />
                    </div>
                    <span className="text-sm text-zinc-300">{item}</span>
                </li>
            ))}
        </ul>
    );
}

export function StrategicPillars() {
    return (
        <section
            className="relative w-full py-16 sm:py-24 md:py-32"
            style={{
                background:
                    "radial-gradient(ellipse at center, rgba(67, 56, 202, 0.08) 0%, #0B0C10 60%, #0B0C10 100%)",
            }}
        >
            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
                <Reveal direction="up">
                    {/* Eyebrow */}
                    <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#E5F33D]">
                        The Narsent Architecture
                    </span>

                    {/* Headline */}
                    <h2 className="mb-6 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
                        Üç Stratejik Sütun.{" "}
                        <span className="bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text text-transparent">
                            Tek Bir Otonom Akıl.
                        </span>
                    </h2>

                    {/* Subtext */}
                    <p className="mb-16 max-w-2xl text-lg text-zinc-400">
                        Nakit akışınızı, alacaklarınızı ve karar alma süreçlerinizi tek bir
                        çatı altında birleştiren yeni nesil finansal altyapı.
                    </p>
                </Reveal>

                {/* Asymmetric Bento Grid */}
                <div className="grid w-full max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3 lg:grid-rows-2">
                    {/* Card 1 — Flagship (Cashflow & Liquidity) */}
                    <Reveal direction="up" delay={0.1} className="lg:col-span-2 lg:row-span-2">
                        <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-10 text-left backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#E5F33D]/50 hover:shadow-[0_0_40px_rgba(229,243,61,0.08)]">
                            {/* Dot grid texture */}
                            <div
                                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                                style={{
                                    backgroundImage:
                                        "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                    backgroundSize: "20px 20px",
                                }}
                            />
                            {/* Subtle glow */}
                            <div className="pointer-events-none absolute -top-20 -left-20 h-60 w-60 rounded-full bg-[#E5F33D]/5 blur-[80px]" />

                            <div className="relative z-10 flex h-full flex-col">
                                <div>
                                    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E5F33D]/10 text-[#E5F33D]">
                                        <LineChart className="h-8 w-8" />
                                    </div>
                                    <h3 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
                                        Cashflow &amp; Liquidity
                                    </h3>
                                    <p className="mb-8 max-w-md text-sm leading-relaxed text-zinc-400">
                                        Real-time visibility into your entire cash position with
                                        AI-powered predictions that adapt to market volatility.
                                    </p>
                                </div>

                                <FeatureList items={features1} />

                                {/* 30-Day Cashflow Projection Chart */}
                                <div className="mt-8 w-full rounded-xl border border-white/5 bg-white/[0.02] p-6">
                                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                                        Projections &amp; Insights
                                    </p>
                                    <svg
                                        viewBox="0 0 400 140"
                                        className="w-full"
                                        preserveAspectRatio="none"
                                    >
                                        {/* Y-axis grid lines */}
                                        <line x1="0" y1="20" x2="400" y2="20" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                                        <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                                        <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                                        <line x1="0" y1="110" x2="400" y2="110" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

                                        {/* Gradient fill under the line */}
                                        <defs>
                                            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#E5F33D" stopOpacity="0.15" />
                                                <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.02" />
                                            </linearGradient>
                                            <filter id="glow">
                                                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                                <feMerge>
                                                    <feMergeNode in="coloredBlur" />
                                                    <feMergeNode in="SourceGraphic" />
                                                </feMerge>
                                            </filter>
                                        </defs>

                                        {/* Area fill */}
                                        <path
                                            d="M0,90 C30,85 60,70 100,65 C140,60 160,75 200,55 C240,35 270,45 300,30 C330,20 360,25 400,15 L400,130 L0,130 Z"
                                            fill="url(#chartFill)"
                                        />

                                        {/* Main line with glow */}
                                        <path
                                            d="M0,90 C30,85 60,70 100,65 C140,60 160,75 200,55 C240,35 270,45 300,30 C330,20 360,25 400,15"
                                            fill="none"
                                            stroke="#E5F33D"
                                            strokeWidth="2.5"
                                            filter="url(#glow)"
                                        />

                                        {/* Data points */}
                                        <circle cx="100" cy="65" r="3" fill="#E5F33D" />
                                        <circle cx="200" cy="55" r="3" fill="#E5F33D" />
                                        <circle cx="300" cy="30" r="3" fill="#E5F33D" />
                                        <circle cx="400" cy="15" r="4" fill="#E5F33D" stroke="#0B0C10" strokeWidth="2" />
                                    </svg>

                                    {/* X-axis labels */}
                                    <div className="mt-2 flex justify-between text-[10px] text-zinc-600">
                                        <span>Day 1</span>
                                        <span>Day 7</span>
                                        <span>Day 14</span>
                                        <span>Day 21</span>
                                        <span>Day 30</span>
                                    </div>

                                    {/* Projection Stats */}
                                    <div className="mt-5 flex items-center gap-6">
                                        <div className="rounded-lg border border-white/5 bg-white/[0.03] px-4 py-2">
                                            <p className="text-[10px] uppercase tracking-wider text-zinc-500">Projected End Balance</p>
                                            <p className="text-sm font-semibold text-white">$1.2M USD</p>
                                        </div>
                                        <div className="rounded-lg border border-white/5 bg-white/[0.03] px-4 py-2">
                                            <p className="text-[10px] uppercase tracking-wider text-zinc-500">Confidence</p>
                                            <p className="text-sm font-semibold text-emerald-400">94%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Card 2 — Receivables & Revenue (Top Right) */}
                    <Reveal direction="up" delay={0.3}>
                        <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 text-left backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#E5F33D]/50 hover:shadow-[0_0_30px_rgba(229,243,61,0.08)]">
                            {/* Dot grid texture */}
                            <div
                                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                                style={{
                                    backgroundImage:
                                        "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                    backgroundSize: "20px 20px",
                                }}
                            />

                            <div className="relative z-10">
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E5F33D]/10 text-[#E5F33D]">
                                    <ShieldCheck className="h-7 w-7" />
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-white">
                                    Receivables & Revenue
                                </h3>
                                <div className="mt-5">
                                    <FeatureList items={features2} />
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Card 3 — Decision Intelligence & Trust (Bottom Right) */}
                    <Reveal direction="up" delay={0.5}>
                        <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 text-left backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#E5F33D]/50 hover:shadow-[0_0_30px_rgba(229,243,61,0.08)]">
                            {/* Dot grid texture */}
                            <div
                                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                                style={{
                                    backgroundImage:
                                        "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                    backgroundSize: "20px 20px",
                                }}
                            />

                            <div className="relative z-10">
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E5F33D]/10 text-[#E5F33D]">
                                    <BrainCircuit className="h-7 w-7" />
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-white">
                                    Decision Intelligence & Trust
                                </h3>
                                <div className="mt-5">
                                    <FeatureList items={features3} />
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
