"use client";

import { Check, BrainCircuit, Scale, FileSearch, Eye, ShieldCheck, Lock, GitBranch, Layers, UserCog } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/src/components/ui/reveal";

export default function TrustPage() {
    return (
        <div className="min-h-screen bg-[#0B0C10]">
            {/* Hero */}
            <section className="px-4 pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="container mx-auto max-w-4xl text-center">
                    <Reveal direction="up">
                        <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
                            Decision Intelligence &amp; Trust
                        </span>
                        <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                            Not a Black Box — Transparent Intelligence.
                        </h1>
                        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400">
                            Narsent reports the mathematical rationale and data trail (audit
                            trail) behind every decision within seconds. Trust the AI, and
                            be confident in the traceability of autonomous decisions.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href="/request-demo"
                                className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-amber-400 px-8 text-sm font-bold text-black transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(251,191,36,0.25)] sm:w-auto"
                            >
                                Schedule a Demo
                            </Link>
                            <Link
                                href="#traceability"
                                className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-zinc-700 bg-transparent px-8 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:bg-white/5 hover:text-white sm:w-auto"
                            >
                                Explore Features
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Macro Vision — 3 Pillar Grid */}
            <section className="px-4 py-16 md:py-32">
                <div className="container mx-auto max-w-6xl">
                    <Reveal direction="up">
                        <h2 className="mb-16 text-center text-3xl font-bold text-white md:mb-20 md:text-4xl">
                            3 Pillars of Trust in Autonomous Intelligence.
                        </h2>
                    </Reveal>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {[
                            {
                                icon: Eye,
                                title: "Zero Black Box",
                                text: "Every decision made by the AI is presented with transparent causality in human language.",
                            },
                            {
                                icon: FileSearch,
                                title: "Continuous Audit Trail",
                                text: "Drill down to the ERP and bank data behind every prediction within milliseconds.",
                            },
                            {
                                icon: Lock,
                                title: "Bank-Grade Isolation",
                                text: "Your data is never used to train any global LLM model — it stays exclusively yours.",
                            },
                        ].map((pillar, index) => {
                            const Icon = pillar.icon;
                            return (
                                <Reveal key={pillar.title} direction="up" delay={0.1 + index * 0.15}>
                                    <div className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-[#11121A] p-8 transition-all duration-300 hover:border-zinc-700">
                                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400">
                                            <Icon className="h-7 w-7" />
                                        </div>
                                        <h3 className="mb-3 text-lg font-bold text-white">
                                            {pillar.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-zinc-400">
                                            {pillar.text}
                                        </p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══ ZIGZAG #1: Decision Traceability ═══ */}
            <section id="traceability" className="scroll-mt-32 px-4 py-16 md:py-32">
                <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    <Reveal direction="left">
                        <div className="flex flex-col">
                            <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
                                Traceability
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                Decision Traceability.
                            </h2>
                            <p className="mb-8 max-w-lg text-base leading-relaxed text-zinc-400">
                                When an autonomous prediction or action is recommended, see
                                &quot;Why&quot; the system recommended it with a single click.
                                Trace back step-by-step which ERP invoice and which
                                macroeconomic data point was the starting point.
                            </p>
                            <ul className="flex flex-col gap-4">
                                {[
                                    "End-to-end data source tracking",
                                    "Mathematical rationale reporting",
                                    "Visualized decision tree",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400/15 text-amber-400">
                                            <Check className="h-3 w-3" />
                                        </div>
                                        <span className="text-sm text-zinc-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal direction="right">
                        <div className="relative flex items-center justify-center">
                            <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-amber-400/5 blur-[100px]" />
                            <div className="relative flex h-80 w-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#11121A] p-6 backdrop-blur-xl">
                                <div
                                    className="pointer-events-none absolute inset-0 opacity-[0.03]"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                        backgroundSize: "24px 24px",
                                    }}
                                />
                                <div className="relative z-10 mb-4 flex items-center gap-2">
                                    <GitBranch className="h-4 w-4 text-amber-400" />
                                    <span className="text-xs font-semibold text-zinc-300">Decision Tree Trace</span>
                                </div>
                                <div className="relative z-10 flex flex-1 flex-col gap-2.5">
                                    <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-2.5">
                                        <span className="text-xs font-bold text-amber-300">Decision: ₺1.2M Cash Gap Alert</span>
                                    </div>
                                    <div className="ml-4 border-l border-zinc-800 pl-4">
                                        <div className="mb-2 rounded-lg border border-zinc-800/60 bg-white/[0.02] px-3 py-2">
                                            <span className="text-[10px] text-zinc-500">Source 1</span>
                                            <p className="text-xs text-zinc-300">ERP: INV-2024-3841 overdue by 15 days</p>
                                        </div>
                                        <div className="mb-2 rounded-lg border border-zinc-800/60 bg-white/[0.02] px-3 py-2">
                                            <span className="text-[10px] text-zinc-500">Source 2</span>
                                            <p className="text-xs text-zinc-300">Bank API: Garanti BBVA balance drop -₺800K</p>
                                        </div>
                                        <div className="mb-2 rounded-lg border border-zinc-800/60 bg-white/[0.02] px-3 py-2">
                                            <span className="text-[10px] text-zinc-500">Source 3</span>
                                            <p className="text-xs text-zinc-300">Macro: CBRT rate decision → cost increase</p>
                                        </div>
                                    </div>
                                    <div className="mt-auto rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-2">
                                        <span className="text-[10px] font-bold text-amber-400">Confidence Score: 97.2% · 3 independent sources verified</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ═══ ZIGZAG #2: Explainable AI (Reversed) ═══ */}
            <section id="xai" className="scroll-mt-32 bg-[#0a0a0f] px-4 py-16 md:py-32">
                <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    <Reveal direction="left">
                        <div className="relative flex items-center justify-center">
                            <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-purple-500/5 blur-[100px]" />
                            <div className="relative flex h-80 w-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#11121A] p-6 backdrop-blur-xl">
                                <div
                                    className="pointer-events-none absolute inset-0 opacity-[0.03]"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                        backgroundSize: "24px 24px",
                                    }}
                                />
                                <div className="relative z-10 mb-4 flex items-center gap-2">
                                    <BrainCircuit className="h-4 w-4 text-purple-400" />
                                    <span className="text-xs font-semibold text-zinc-300">XAI Reasoning Output</span>
                                </div>
                                <div className="relative z-10 flex flex-1 flex-col gap-3">
                                    <div className="rounded-xl border border-zinc-800/60 bg-white/[0.02] px-4 py-3">
                                        <span className="mb-1 block text-[10px] font-bold text-zinc-500">MODEL OUTPUT</span>
                                        <p className="font-mono text-[10px] leading-relaxed text-zinc-600">
                                            pred_cashgap=1.2M, conf=0.972, feat_imp=[inv_overdue:0.41, bank_bal:0.33, macro:0.26]
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400">
                                            <span className="text-sm">↓</span>
                                        </div>
                                    </div>
                                    <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 px-4 py-3">
                                        <span className="mb-1 block text-[10px] font-bold text-purple-400">HUMAN-READABLE TRANSLATION</span>
                                        <p className="text-xs leading-relaxed text-zinc-300">
                                            &quot;A ₺1.2M cash gap is expected within the next 2 weeks.
                                            The biggest factor (41%) is overdue invoices. Bank balance
                                            decline (33%) and CBRT rate decision (26%) amplify the risk.&quot;
                                        </p>
                                    </div>
                                    <div className="mt-auto flex items-center gap-2 rounded-lg border border-zinc-800/40 bg-white/[0.01] px-3 py-2">
                                        <Layers className="h-3 w-3 text-purple-400" />
                                        <span className="text-[10px] text-zinc-500">3 parameter weights transparently reported</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal direction="right">
                        <div className="flex flex-col">
                            <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-purple-400">
                                Explainable AI
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                Explainable AI (XAI).
                            </h2>
                            <p className="mb-8 max-w-lg text-base leading-relaxed text-zinc-400">
                                We translate complex deep learning models and Narsent Horizon
                                AI&apos;s reasoning process into plain, human-readable language
                                (NLP) that your finance team can understand.
                            </p>
                            <ul className="flex flex-col gap-4">
                                {[
                                    "NLP-based decision summaries",
                                    "Transparent parameter weights",
                                    "User-friendly audit panel",
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
                </div>
            </section>

            {/* ═══ ZIGZAG #3: Root-Cause Analysis ═══ */}
            <section id="root-cause" className="scroll-mt-32 px-4 py-16 md:py-32">
                <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    <Reveal direction="left">
                        <div className="flex flex-col">
                            <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-red-400">
                                Root-Cause Analysis
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                Autonomous Root-Cause Analysis.
                            </h2>
                            <p className="mb-8 max-w-lg text-base leading-relaxed text-zinc-400">
                                When there&apos;s a deviation or anomaly in your cashflow, stop
                                searching for errors across hundreds of Excel tabs. The system
                                finds the root cause (e.g., Supplier X&apos;s delay) within seconds
                                and reports it.
                            </p>
                            <ul className="flex flex-col gap-4">
                                {[
                                    "Sub-second anomaly detection",
                                    "Cross-table data validation",
                                    "Autonomous correction recommendations",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-red-400">
                                            <Check className="h-3 w-3" />
                                        </div>
                                        <span className="text-sm text-zinc-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal direction="right">
                        <div className="relative flex items-center justify-center">
                            <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-red-500/5 blur-[100px]" />
                            <div className="relative flex h-80 w-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#11121A] p-6 backdrop-blur-xl">
                                <div
                                    className="pointer-events-none absolute inset-0 opacity-[0.03]"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                        backgroundSize: "24px 24px",
                                    }}
                                />
                                <div className="relative z-10 mb-4 flex items-center gap-2">
                                    <Scale className="h-4 w-4 text-red-400" />
                                    <span className="text-xs font-semibold text-zinc-300">Root-Cause Engine</span>
                                    <span className="ml-auto rounded-md bg-red-500/10 px-2 py-0.5 text-[10px] font-bold text-red-400">
                                        0.8 SEC
                                    </span>
                                </div>
                                <div className="relative z-10 flex flex-1 flex-col gap-3">
                                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3">
                                        <span className="text-xs font-bold text-red-300">Anomaly: ₺340K Cash Outflow Deviation</span>
                                        <p className="mt-1 text-[10px] text-zinc-500">Expected: ₺1.8M · Actual: ₺2.14M</p>
                                    </div>
                                    <div className="flex flex-col gap-1.5 pl-3 border-l border-zinc-800">
                                        <div className="rounded-lg bg-white/[0.02] px-3 py-1.5">
                                            <span className="text-[10px] text-zinc-500">1. ERP check →</span>
                                            <span className="ml-1 text-[10px] text-zinc-400">3 unexpected payment orders</span>
                                        </div>
                                        <div className="rounded-lg bg-white/[0.02] px-3 py-1.5">
                                            <span className="text-[10px] text-zinc-500">2. Supplier analysis →</span>
                                            <span className="ml-1 text-[10px] text-zinc-400">Supplier X issued early invoice</span>
                                        </div>
                                        <div className="rounded-lg bg-white/[0.02] px-3 py-1.5">
                                            <span className="text-[10px] text-zinc-500">3. Cross-validation →</span>
                                            <span className="ml-1 text-[10px] text-zinc-400">Contract terms violated</span>
                                        </div>
                                    </div>
                                    <div className="mt-auto rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-2.5">
                                        <span className="text-xs font-bold text-emerald-300">
                                            Root Cause: Supplier X — Early invoicing (₺340K)
                                        </span>
                                        <p className="mt-0.5 text-[10px] text-emerald-400/60">
                                            Recommendation: Payment refund draft prepared
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ═══ ZIGZAG #4: Audit & Compliance (Reversed) ═══ */}
            <section id="audit-compliance" className="scroll-mt-32 bg-[#0a0a0f] px-4 py-16 md:py-32">
                <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    <Reveal direction="left">
                        <div className="relative flex items-center justify-center">
                            <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-emerald-500/5 blur-[100px]" />
                            <div className="relative flex h-80 w-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#11121A] p-6 backdrop-blur-xl">
                                <div
                                    className="pointer-events-none absolute inset-0 opacity-[0.03]"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                        backgroundSize: "24px 24px",
                                    }}
                                />
                                <div className="relative z-10 mb-4 flex items-center gap-2">
                                    <ShieldCheck className="h-4 w-4 text-emerald-400" />
                                    <span className="text-xs font-semibold text-zinc-300">Compliance Dashboard</span>
                                </div>
                                <div className="relative z-10 flex flex-1 flex-col gap-3">
                                    {[
                                        { label: "Tenant Isolation", status: "ACTIVE", icon: "🔒" },
                                        { label: "AES-256 Encryption", status: "ACTIVE", icon: "🛡️" },
                                        { label: "Zero-Trust Framework", status: "ACTIVE", icon: "🔒" },
                                        { label: "E2E Encryption", status: "ACTIVE", icon: "🛡️" },
                                    ].map((item) => (
                                        <div
                                            key={item.label}
                                            className="flex items-center justify-between rounded-xl border border-emerald-500/15 bg-emerald-500/5 px-4 py-3"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-sm">{item.icon}</span>
                                                <span className="text-xs font-medium text-zinc-300">{item.label}</span>
                                            </div>
                                            <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-bold text-emerald-400">
                                                {item.status}
                                            </span>
                                        </div>
                                    ))}
                                    <div className="mt-auto flex gap-3">
                                        <div className="flex-1 rounded-lg bg-amber-400 py-2.5 text-center text-xs font-bold text-black">
                                            Download Audit Report
                                        </div>
                                        <div className="flex-1 rounded-lg border border-zinc-700 py-2.5 text-center text-xs font-medium text-zinc-400">
                                            RBAC Settings
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal direction="right">
                        <div className="flex flex-col">
                            <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
                                Audit &amp; Compliance
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                Continuous Audit &amp; Compliance.
                            </h2>
                            <p className="mb-8 max-w-lg text-base leading-relaxed text-zinc-400">
                                Your financial data and autonomous decisions are encrypted in
                                our isolated gateway (Nexus) with AES-256 end-to-end encryption
                                and zero-trust architecture. One-click audit-ready reports for Big 4
                                teams.
                            </p>
                            <ul className="flex flex-col gap-4">
                                {[
                                    "Tenant isolation (customer data isolation)",
                                    "AES-256 encryption",
                                    "Role-based access control (RBAC)",
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
                </div>
            </section>

            {/* Trust Metrics */}
            <section
                className="px-4 py-16 md:py-32"
                style={{
                    background:
                        "radial-gradient(ellipse at center, rgba(251,191,36,0.04) 0%, #0B0C10 60%, #0B0C10 100%)",
                }}
            >
                <div className="container mx-auto max-w-5xl">
                    <Reveal direction="up">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            {[
                                { value: "100%", label: "Decision Traceability (Audit Trail)" },
                                { value: "< 1 Sec", label: "Root-Cause Detection Speed" },
                                { value: "Zero-Trust", label: "Enterprise Security Architecture" },
                            ].map((metric) => (
                                <div
                                    key={metric.value}
                                    className="flex flex-col items-center rounded-2xl border border-zinc-800/50 bg-white/[0.02] p-10 text-center backdrop-blur-sm"
                                >
                                    <span className="mb-3 text-5xl font-extrabold text-amber-400 md:text-6xl">
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
                            Trust Autonomous Decisions, with Transparency.
                        </h2>
                        <p className="mx-auto mb-10 max-w-xl text-base text-zinc-400">
                            Experience the transparent AI infrastructure with a 30-minute
                            live demo.
                        </p>
                        <Link
                            href="/request-demo"
                            className="inline-flex h-12 items-center justify-center rounded-lg bg-amber-400 px-10 text-sm font-bold text-black transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(251,191,36,0.25)]"
                        >
                            Schedule a Demo
                        </Link>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
