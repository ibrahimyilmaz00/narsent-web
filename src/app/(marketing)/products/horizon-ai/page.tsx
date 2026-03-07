"use client";

import { BrainCircuit, ShieldAlert, Zap, Check, Database, Cpu, FileCheck, SlidersHorizontal, TrendingUp, TrendingDown, Plug, Landmark, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/src/components/ui/reveal";

const features = [
    {
        icon: BrainCircuit,
        title: "Predictive Pattern Recognition",
        description:
            "Scans millions of rows of ERP and banking data to discover hidden financial trends invisible to the human eye.",
    },
    {
        icon: ShieldAlert,
        title: "Real-time Anomaly Detection",
        description:
            "Catches erroneous invoices, duplicate payments, and abnormal cash outflows before they occur.",
    },
    {
        icon: Zap,
        title: "Automated Action Triggers",
        description:
            "When a risk is detected, it doesn't just alert — it prepares automated action drafts ready for your approval.",
    },
];

export default function HorizonAIPage() {
    return (
        <div className="min-h-screen bg-[#0B0C10]">
            {/* Hero */}
            <section className="px-4 pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="container mx-auto max-w-4xl text-center">
                    <Reveal direction="up">
                        <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#E5F33D]">
                            Narsent Core Engine
                        </span>
                        <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                            The Autonomous Brain Behind Your Data: Horizon AI.
                        </h1>
                        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400">
                            Meet the AI architecture that doesn&apos;t just report the past — it
                            predicts future cashflow, anomalies, and risks in seconds.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href="/request-demo"
                                className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-[#E5F33D] px-8 text-sm font-bold text-black transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(229,243,61,0.25)] sm:w-auto"
                            >
                                Schedule a Demo
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-zinc-700 bg-transparent px-8 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:bg-white/5 hover:text-white sm:w-auto"
                            >
                                Technical Docs
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Deep-Dive Features */}
            <section className="px-4 py-16 md:py-32">
                <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <Reveal key={feature.title} direction="up" delay={0.1 + index * 0.15}>
                                <div className="group flex h-full flex-col rounded-2xl border border-zinc-800 bg-[#11121A] p-8 transition-all duration-300 hover:border-zinc-700 hover:bg-[#13141E]">
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E5F33D]/10 text-[#E5F33D]">
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="mb-3 text-xl font-semibold text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-zinc-400">
                                        {feature.description}
                                    </p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </section>

            {/* How It Works — Vertical Progression */}
            <section className="px-4 py-16 md:py-32">
                <div className="container mx-auto max-w-2xl">
                    <Reveal direction="up">
                        <h2 className="mb-12 text-center text-3xl font-bold text-white md:mb-20 md:text-4xl">
                            From Data to Autonomous Decision: 3 Steps.
                        </h2>
                    </Reveal>

                    {/* Timeline Container */}
                    <div className="relative flex flex-col items-center gap-12 md:gap-20">
                        {/* Vertical Flow Line */}
                        <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#E5F33D]/30 via-zinc-700 to-zinc-800" />

                        {[
                            {
                                step: "01",
                                icon: Database,
                                title: "Data Ingestion",
                                description:
                                    "All your ERP and banking data passes through anomaly scanning within seconds.",
                            },
                            {
                                step: "02",
                                icon: Cpu,
                                title: "Contextual Reasoning",
                                description:
                                    "The system analyzes your historical financial movements to understand what the data means.",
                            },
                            {
                                step: "03",
                                icon: FileCheck,
                                title: "Execution Drafts",
                                description:
                                    "Autonomous action recommendations are generated, ready for human approval.",
                            },
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <Reveal key={item.step} direction="up" delay={0.1 + index * 0.2}>
                                    <div className="relative flex flex-col items-center text-center">
                                        {/* Large Background Step Number */}
                                        <span className="select-none text-7xl font-black leading-none text-[#E5F33D]/[0.07] md:text-9xl">
                                            {item.step}
                                        </span>

                                        {/* Station Card */}
                                        <div className="-mt-6 flex flex-col items-center rounded-3xl border border-zinc-800/60 bg-white/[0.02] px-8 py-6 backdrop-blur-sm md:-mt-10 md:px-12 md:py-8">
                                            {/* Node Dot */}
                                            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-14 md:-translate-y-[4.5rem]">
                                                <div className="h-3 w-3 rounded-full border-2 border-[#E5F33D]/40 bg-[#0B0C10] shadow-[0_0_12px_rgba(229,243,61,0.2)]" />
                                            </div>

                                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E5F33D]/10 text-[#E5F33D]">
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <h3 className="mb-2 text-lg font-semibold text-white">
                                                {item.title}
                                            </h3>
                                            <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Technical Architecture — Zigzag */}
            <section className="px-4 py-16 md:py-32">
                <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left — Text */}
                    <Reveal direction="left">
                        <div className="flex flex-col">
                            <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#E5F33D]">
                                Architecture
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                Speaks Your Financial Language.
                            </h2>
                            <p className="mb-8 max-w-lg text-base leading-relaxed text-zinc-400">
                                Narsent Horizon AI is not like generic LLMs. It is custom
                                fine-tuned to your industry, your company&apos;s historical data,
                                and your cash cycles.
                            </p>
                            <ul className="flex flex-col gap-4">
                                {[
                                    "Domain-Specific Financial Vocabulary",
                                    "Historical Pattern Memory",
                                    "Continuous Model Refinement",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                                            <Check className="h-3 w-3" />
                                        </div>
                                        <span className="text-sm text-zinc-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                    {/* Right — Visual */}
                    <Reveal direction="right">
                        <div className="relative flex items-center justify-center">
                            <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-indigo-600/15 blur-[100px]" />
                            <div className="relative flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-950/50 via-[#11121A] to-[#0B0C10] backdrop-blur-xl">
                                <div
                                    className="pointer-events-none absolute inset-0 opacity-[0.04]"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                        backgroundSize: "24px 24px",
                                    }}
                                />
                                <div className="relative z-10 flex flex-col items-center gap-4">
                                    <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-[#E5F33D]/10 text-[#E5F33D] shadow-[0_0_60px_rgba(229,243,61,0.15)]">
                                        <BrainCircuit className="h-12 w-12" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                                        Custom Model Training
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ═══ NEW: Predictive Scenario Engine ═══ */}
            <section className="bg-[#0a0a0f] px-4 py-16 md:py-32">
                <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left — Text */}
                    <Reveal direction="left">
                        <div className="flex flex-col">
                            <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-purple-400">
                                Predictive Scenario Engine
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                What-if? Analysis: Master Your Future Cashflow.
                            </h2>
                            <p className="mb-8 max-w-lg text-base leading-relaxed text-zinc-400">
                                Horizon AI doesn&apos;t just look at the past. Simulate any
                                financial scenario — inflation spikes, payment delays, or
                                expansion costs — and see the impact on your liquidity in
                                real-time. Turn uncertainty into a strategic advantage.
                            </p>
                            <ul className="flex flex-col gap-4">
                                {[
                                    "Multi-variable stress testing",
                                    "Real-time liquidity impact visualization",
                                    "AI-recommended optimal path",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-500/15 text-purple-400">
                                            <Check className="h-3 w-3" />
                                        </div>
                                        <span className="text-sm text-zinc-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                    {/* Right — Scenario Simulator Visual */}
                    <Reveal direction="right">
                        <div className="relative flex items-center justify-center">
                            <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-purple-500/8 blur-[100px]" />
                            <div className="relative flex h-[420px] w-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#11121A] p-6 backdrop-blur-xl">
                                <div
                                    className="pointer-events-none absolute inset-0 opacity-[0.03]"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                        backgroundSize: "24px 24px",
                                    }}
                                />
                                {/* Header */}
                                <div className="relative z-10 mb-5 flex items-center gap-2">
                                    <SlidersHorizontal className="h-4 w-4 text-purple-400" />
                                    <span className="text-xs font-semibold text-zinc-300">Scenario Simulator</span>
                                    <span className="ml-auto rounded-md bg-purple-500/10 px-2 py-0.5 text-[10px] font-bold text-purple-400">
                                        LIVE
                                    </span>
                                </div>

                                {/* Forecast Chart */}
                                <div className="relative z-10 mb-5 rounded-xl border border-zinc-800/60 bg-white/[0.02] p-4">
                                    <div className="mb-3 flex items-center justify-between">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">13-Week Liquidity Forecast</span>
                                        <span className="text-[10px] text-zinc-600">Q2 2026</span>
                                    </div>
                                    <svg viewBox="0 0 400 100" className="w-full" preserveAspectRatio="none">
                                        <defs>
                                            <linearGradient id="scenarioGradA" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.15" />
                                                <stop offset="100%" stopColor="#22c55e" stopOpacity="0.01" />
                                            </linearGradient>
                                            <linearGradient id="scenarioGradB" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.1" />
                                                <stop offset="100%" stopColor="#ef4444" stopOpacity="0.01" />
                                            </linearGradient>
                                        </defs>
                                        {/* Grid lines */}
                                        <line x1="0" y1="25" x2="400" y2="25" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                                        <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                                        <line x1="0" y1="75" x2="400" y2="75" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                                        {/* Scenario A — Aggressive Growth (green) */}
                                        <path d="M0,60 C40,55 80,50 120,42 C160,34 200,30 240,22 C280,16 320,12 360,8 L400,5" fill="none" stroke="#22c55e" strokeWidth="2" />
                                        <path d="M0,60 C40,55 80,50 120,42 C160,34 200,30 240,22 C280,16 320,12 360,8 L400,5 L400,100 L0,100 Z" fill="url(#scenarioGradA)" />
                                        {/* Scenario B — Market Downturn (red) */}
                                        <path d="M0,60 C40,62 80,65 120,70 C160,74 200,80 240,82 C280,85 320,88 360,90 L400,92" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="6 3" />
                                        <path d="M0,60 C40,62 80,65 120,70 C160,74 200,80 240,82 C280,85 320,88 360,90 L400,92 L400,100 L0,100 Z" fill="url(#scenarioGradB)" />
                                        {/* Current baseline (yellow dashed) */}
                                        <path d="M0,60 C40,58 80,56 120,55 C160,53 200,52 240,50 C280,49 320,48 360,47 L400,46" fill="none" stroke="#E5F33D" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
                                        {/* Data points */}
                                        <circle cx="0" cy="60" r="3" fill="#E5F33D" opacity="0.6" />
                                        <circle cx="400" cy="5" r="3" fill="#22c55e" />
                                        <circle cx="400" cy="92" r="3" fill="#ef4444" />
                                    </svg>
                                    <div className="mt-2 flex justify-between text-[10px] text-zinc-600">
                                        <span>W1</span><span>W4</span><span>W8</span><span>W13</span>
                                    </div>
                                </div>

                                {/* Scenario Cards */}
                                <div className="relative z-10 flex flex-col gap-3">
                                    <div className="flex items-center justify-between rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3">
                                        <div className="flex items-center gap-3">
                                            <TrendingUp className="h-4 w-4 text-emerald-400" />
                                            <div className="flex flex-col">
                                                <span className="text-xs font-semibold text-emerald-300">Scenario A: Aggressive Growth</span>
                                                <span className="text-[10px] text-zinc-500">Revenue +35% · CAPEX +₺2.1M</span>
                                            </div>
                                        </div>
                                        <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-bold text-emerald-400">+₺4.8M</span>
                                    </div>
                                    <div className="flex items-center justify-between rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3">
                                        <div className="flex items-center gap-3">
                                            <TrendingDown className="h-4 w-4 text-red-400" />
                                            <div className="flex flex-col">
                                                <span className="text-xs font-semibold text-red-300">Scenario B: Market Downturn</span>
                                                <span className="text-[10px] text-zinc-500">Collections -20% · FX volatility ↑</span>
                                            </div>
                                        </div>
                                        <span className="rounded bg-red-500/20 px-1.5 py-0.5 text-[10px] font-bold text-red-400">-₺1.9M</span>
                                    </div>
                                </div>

                                {/* AI Recommendation */}
                                <div className="relative z-10 mt-auto pt-4">
                                    <div className="flex items-center gap-2 rounded-lg border border-[#E5F33D]/20 bg-[#E5F33D]/5 px-4 py-2.5">
                                        <BrainCircuit className="h-3.5 w-3.5 text-[#E5F33D]" />
                                        <span className="text-[10px] font-semibold text-[#E5F33D]">AI Optimal Path: Moderate growth with hedging — Net +₺2.6M</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ═══ NEW: Deep ERP & Banking Integration ═══ */}
            <section className="px-4 py-16 md:py-32">
                <div className="container mx-auto max-w-6xl">
                    <Reveal direction="up">
                        <div className="mb-16 flex flex-col items-center text-center md:mb-20">
                            <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#E5F33D]">
                                Integration Power
                            </span>
                            <h2 className="mb-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                                Seamless Connectivity. Unmatched Security.
                            </h2>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {/* Card A — Native ERP */}
                        <Reveal direction="up" delay={0.1}>
                            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#11121A] p-8 transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_40px_rgba(99,102,241,0.08)]">
                                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/8 blur-[60px] transition-all duration-500 group-hover:bg-indigo-500/15" />
                                <div className="relative z-10">
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                                        <Plug className="h-7 w-7" />
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold text-white">
                                        Native ERP Connectors
                                    </h3>
                                    <p className="text-sm leading-relaxed text-zinc-400">
                                        Direct connectors for SAP, Oracle, and Microsoft Dynamics.
                                        No manual exports. Ever.
                                    </p>
                                </div>
                                <div className="relative z-10 mt-auto flex flex-wrap gap-2 pt-8">
                                    {["SAP", "Oracle", "Dynamics 365"].map((name) => (
                                        <span
                                            key={name}
                                            className="rounded-md border border-indigo-500/20 bg-indigo-500/5 px-3 py-1 text-xs font-medium text-indigo-400"
                                        >
                                            {name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>

                        {/* Card B — Open Banking */}
                        <Reveal direction="up" delay={0.25}>
                            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#11121A] p-8 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_40px_rgba(16,185,129,0.08)]">
                                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/8 blur-[60px] transition-all duration-500 group-hover:bg-emerald-500/15" />
                                <div className="relative z-10">
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                                        <Landmark className="h-7 w-7" />
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold text-white">
                                        Open Banking
                                    </h3>
                                    <p className="text-sm leading-relaxed text-zinc-400">
                                        Real-time bank feed synchronization with bank-level
                                        encrypted security protocols.
                                    </p>
                                </div>
                                <div className="relative z-10 mt-auto flex items-center gap-2 pt-8">
                                    <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                                    <span className="text-xs font-medium text-emerald-400">Live Sync Active</span>
                                </div>
                            </div>
                        </Reveal>

                        {/* Card C — Zero-Trust */}
                        <Reveal direction="up" delay={0.4}>
                            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#11121A] p-8 transition-all duration-300 hover:border-[#E5F33D]/40 hover:shadow-[0_0_40px_rgba(229,243,61,0.06)]">
                                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#E5F33D]/5 blur-[60px] transition-all duration-500 group-hover:bg-[#E5F33D]/10" />
                                <div className="relative z-10">
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E5F33D]/10 text-[#E5F33D]">
                                        <ShieldCheck className="h-7 w-7" />
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold text-white">
                                        Zero-Trust Architecture
                                    </h3>
                                    <p className="text-sm leading-relaxed text-zinc-400">
                                        End-to-end encrypted data processing. Your financial
                                        data stays yours, isolated and secure.
                                    </p>
                                </div>
                                <div className="relative z-10 mt-auto flex flex-wrap gap-2 pt-8">
                                    {["AES-256", "Zero-Trust", "E2E Encrypted"].map((badge) => (
                                        <span
                                            key={badge}
                                            className="rounded-md border border-[#E5F33D]/20 bg-[#E5F33D]/5 px-3 py-1 text-xs font-medium text-[#E5F33D]"
                                        >
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Metrics & Proof */}
            <section
                className="px-4 py-16 md:py-32"
                style={{
                    background:
                        "radial-gradient(ellipse at center, rgba(67, 56, 202, 0.08) 0%, #0B0C10 60%, #0B0C10 100%)",
                }}
            >
                <div className="container mx-auto max-w-5xl">
                    <Reveal direction="up">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            {[
                                { value: "99.8%", label: "Anomaly Detection Precision" },
                                {
                                    value: "40 Hrs",
                                    label: "Weekly Financial Analysis Time Saved",
                                },
                                {
                                    value: "< 2 Sec",
                                    label: "Million-Row Data Processing Speed",
                                },
                            ].map((metric) => (
                                <div
                                    key={metric.value}
                                    className="flex flex-col items-center rounded-2xl border border-zinc-800/50 bg-white/[0.02] p-10 text-center backdrop-blur-sm"
                                >
                                    <span className="mb-3 text-5xl font-extrabold text-[#E5F33D] md:text-6xl">
                                        {metric.value}
                                    </span>
                                    <span className="text-sm text-zinc-400">
                                        {metric.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="px-4 py-16 md:py-24">
                <div className="container mx-auto max-w-3xl text-center">
                    <Reveal scale>
                        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                            Test Horizon AI on Your Own Data.
                        </h2>
                        <p className="mx-auto mb-10 max-w-xl text-base text-zinc-400">
                            Experience the autonomous decision-making infrastructure on
                            your financial data with a 30-minute live demo.
                        </p>
                        <Link
                            href="/request-demo"
                            className="inline-flex h-12 items-center justify-center rounded-lg bg-[#E5F33D] px-10 text-sm font-bold text-black transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(229,243,61,0.25)]"
                        >
                            Schedule a Demo
                        </Link>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
