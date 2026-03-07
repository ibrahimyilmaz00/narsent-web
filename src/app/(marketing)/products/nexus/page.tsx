"use client";

import { Database, Shield, Globe, Server, Check, RefreshCw, Zap, Lock, Workflow, ShieldCheck, KeyRound, MapPin, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/src/components/ui/reveal";

const integrations = [
    "SAP", "Oracle", "NetSuite", "Logo", "Dynamics 365", "QuickBooks",
    "Xero", "Garanti BBVA", "Isbank", "Yapi Kredi", "Akbank", "QNB Finansbank",
];

export default function NexusPage() {
    return (
        <div className="min-h-screen bg-[#0B0C10]">
            {/* Hero */}
            <section className="px-4 pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="container mx-auto max-w-4xl text-center">
                    <Reveal direction="up">
                        <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
                            Continuous Audit Engine
                        </span>
                        <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                            The Continuous &amp; Secure Gateway for Your Financial Data:{" "}
                            <span className="text-[#E5F33D]">Nexus.</span>
                        </h1>
                        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400">
                            Build a real-time, zero-fault-tolerance, bank-grade secure bridge
                            between your ERP systems, bank accounts, and financial statements.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href="#integrations"
                                className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-[#E5F33D] px-8 text-sm font-bold text-black transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(229,243,61,0.25)] sm:w-auto"
                            >
                                View Integrations
                            </Link>
                            <Link
                                href="#trust"
                                className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-zinc-700 bg-transparent px-8 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:bg-white/5 hover:text-white sm:w-auto"
                            >
                                Security Standards
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ═══ NEW Bento Grid ═══ */}
            <section className="px-4 py-16 md:py-32">
                <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Card 1 — Wide: The Global Ledger Network */}
                    <Reveal direction="up" delay={0.1} className="md:col-span-2">
                        <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-[#11121A] p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#E5F33D]/30 hover:shadow-[0_0_50px_rgba(229,243,61,0.04)] md:p-12">
                            {/* Background network illustration */}
                            <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
                                {/* Network nodes */}
                                <circle cx="15%" cy="30%" r="30" fill="none" stroke="#E5F33D" strokeWidth="0.5" />
                                <circle cx="50%" cy="55%" r="25" fill="none" stroke="#E5F33D" strokeWidth="0.5" />
                                <circle cx="85%" cy="25%" r="28" fill="none" stroke="#818CF8" strokeWidth="0.5" />
                                <circle cx="30%" cy="75%" r="22" fill="none" stroke="#818CF8" strokeWidth="0.5" />
                                <circle cx="70%" cy="70%" r="26" fill="none" stroke="#22c55e" strokeWidth="0.5" />
                                {/* Connection lines */}
                                <line x1="15%" y1="30%" x2="50%" y2="55%" stroke="#E5F33D" strokeWidth="0.4" />
                                <line x1="50%" y1="55%" x2="85%" y2="25%" stroke="#818CF8" strokeWidth="0.4" />
                                <line x1="15%" y1="30%" x2="30%" y2="75%" stroke="#818CF8" strokeWidth="0.4" />
                                <line x1="50%" y1="55%" x2="70%" y2="70%" stroke="#22c55e" strokeWidth="0.4" />
                                <line x1="85%" y1="25%" x2="70%" y2="70%" stroke="#22c55e" strokeWidth="0.4" />
                                <line x1="30%" y1="75%" x2="70%" y2="70%" stroke="#E5F33D" strokeWidth="0.3" />
                                {/* ERP labels at nodes */}
                                <text x="15%" y="30%" textAnchor="middle" fill="#E5F33D" fontSize="8" fontWeight="bold" opacity="0.7" dy=".3em">SAP</text>
                                <text x="85%" y="25%" textAnchor="middle" fill="#818CF8" fontSize="8" fontWeight="bold" opacity="0.7" dy=".3em">ORACLE</text>
                                <text x="50%" y="55%" textAnchor="middle" fill="#E5F33D" fontSize="7" fontWeight="bold" opacity="0.7" dy=".3em">DYNAMICS</text>
                                <text x="30%" y="75%" textAnchor="middle" fill="#818CF8" fontSize="7" fontWeight="bold" opacity="0.5" dy=".3em">NETSUITE</text>
                                <text x="70%" y="70%" textAnchor="middle" fill="#22c55e" fontSize="7" fontWeight="bold" opacity="0.5" dy=".3em">XERO</text>
                                {/* Animated pulse rings */}
                                <circle cx="50%" cy="55%" r="35" fill="none" stroke="#E5F33D" strokeWidth="0.3" opacity="0.3">
                                    <animate attributeName="r" from="30" to="50" dur="3s" repeatCount="indefinite" />
                                    <animate attributeName="opacity" from="0.3" to="0" dur="3s" repeatCount="indefinite" />
                                </circle>
                            </svg>
                            <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#E5F33D]/5 blur-[100px]" />
                            <div className="relative z-10">
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E5F33D]/10 text-[#E5F33D]">
                                    <Globe className="h-7 w-7" />
                                </div>
                                <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
                                    The Global Ledger Network
                                </h3>
                                <p className="mb-8 max-w-2xl text-base leading-relaxed text-zinc-400">
                                    Nexus connects to 50+ ERP platforms, banking APIs, and financial
                                    data sources across the globe. A unified, intelligent mesh that
                                    speaks every financial protocol — from SAP RFC to Open Banking
                                    PSD2.
                                </p>
                                {/* Integration badges */}
                                <div className="flex flex-wrap gap-3">
                                    {["SAP S/4HANA", "Oracle Fusion", "Microsoft Dynamics", "NetSuite", "Logo", "Xero"].map(
                                        (name) => (
                                            <div
                                                key={name}
                                                className="rounded-lg border border-zinc-700/60 bg-white/[0.03] px-4 py-2 text-xs font-medium text-zinc-400 transition-colors hover:border-zinc-600 hover:text-zinc-300"
                                            >
                                                {name}
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Card 2 — Small: Real-time Sync */}
                    <Reveal direction="up" delay={0.25}>
                        <div className="group flex h-full flex-col rounded-2xl border border-zinc-800 bg-[#11121A] p-8 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.06)]">
                            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/5 blur-[60px]" />
                            <div className="relative z-10">
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                                    <Server className="h-7 w-7" />
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-white">
                                    Real-time Sync
                                </h3>
                                <p className="text-sm leading-relaxed text-zinc-400">
                                    Continuous data synchronization with sub-50ms latency. Zero data
                                    loss — even during momentary network disruptions, data is queued
                                    and fully processed.
                                </p>
                            </div>
                            {/* Live indicator + latency */}
                            <div className="relative z-10 mt-auto flex items-center justify-between pt-8">
                                <div className="flex items-center gap-2">
                                    <div className="relative">
                                        <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                                        <div className="absolute inset-0 h-2.5 w-2.5 animate-ping rounded-full bg-emerald-400 opacity-40" />
                                    </div>
                                    <span className="text-xs font-semibold text-emerald-400">
                                        Live Sync Active
                                    </span>
                                </div>
                                <span className="rounded-md border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1 text-[10px] font-bold text-emerald-400">
                                    Latency: &lt;50ms
                                </span>
                            </div>
                        </div>
                    </Reveal>

                    {/* Card 3 — Small: Military-Grade Isolation */}
                    <Reveal direction="up" delay={0.4}>
                        <div className="group flex h-full flex-col rounded-2xl border border-zinc-800 bg-[#11121A] p-8 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.06)]">
                            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-500/5 blur-[60px]" />
                            <div className="relative z-10">
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                                    <Shield className="h-7 w-7" />
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-white">
                                    Military-Grade Isolation
                                </h3>
                                <p className="text-sm leading-relaxed text-zinc-400">
                                    Each customer&apos;s data resides in physically separated,
                                    encrypted vaults. No cross-contamination, no shared models.
                                </p>
                            </div>
                            {/* Isolation badge */}
                            <div className="relative z-10 mt-auto pt-8">
                                <div className="flex items-center gap-3 rounded-xl border border-purple-500/15 bg-purple-500/5 px-4 py-3">
                                    <Lock className="h-4 w-4 text-purple-400" />
                                    <div className="flex flex-col">
                                        <span className="text-xs font-semibold text-purple-300">Isolated Tenant Architecture</span>
                                        <span className="text-[10px] text-zinc-500">AES-256 encrypted · Per-customer vault</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Data Pipeline Flow */}
            <section className="px-4 py-16 md:py-32">
                <div className="container mx-auto max-w-6xl">
                    <Reveal direction="up">
                        <h2 className="mb-16 text-center text-3xl font-extrabold tracking-tight text-white md:mb-24 md:text-4xl lg:text-5xl">
                            Real-Time Data Pipeline.
                        </h2>
                    </Reveal>

                    <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
                        {/* Step 1 */}
                        <Reveal direction="up" delay={0.1}>
                            <div className="flex flex-col items-center rounded-2xl border border-zinc-800 bg-[#11121A] p-8 text-center">
                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E5F33D]/10 text-[#E5F33D]">
                                    <Database className="h-7 w-7" />
                                </div>
                                <h3 className="mb-2 text-lg font-bold text-white">Extract</h3>
                                <p className="text-sm leading-relaxed text-zinc-400">
                                    Your scattered ERP and bank data is instantly pulled via APIs
                                    or secure tunnels within seconds.
                                </p>
                            </div>
                        </Reveal>

                        {/* Arrow 1 */}
                        <div className="hidden items-center justify-center self-center md:flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-500">
                                <span className="text-lg">→</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-center md:hidden">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-500">
                                <span className="text-lg">↓</span>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <Reveal direction="up" delay={0.25}>
                            <div className="flex flex-col items-center rounded-2xl border border-zinc-800 bg-[#11121A] p-8 text-center">
                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                                    <RefreshCw className="h-7 w-7" />
                                </div>
                                <h3 className="mb-2 text-lg font-bold text-white">Transform</h3>
                                <p className="text-sm leading-relaxed text-zinc-400">
                                    Narsent Engine deduplicates complex financial formats, cleanses
                                    errors, and standardizes the data.
                                </p>
                            </div>
                        </Reveal>

                        {/* Arrow 2 */}
                        <div className="hidden items-center justify-center self-center md:flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-500">
                                <span className="text-lg">→</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-center md:hidden">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-500">
                                <span className="text-lg">↓</span>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <Reveal direction="up" delay={0.4}>
                            <div className="flex flex-col items-center rounded-2xl border border-zinc-800 bg-[#11121A] p-8 text-center">
                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                                    <Zap className="h-7 w-7" />
                                </div>
                                <h3 className="mb-2 text-lg font-bold text-white">Load</h3>
                                <p className="text-sm leading-relaxed text-zinc-400">
                                    Cleansed data is fed into the Horizon AI engine with
                                    zero-latency for anomaly scanning.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Security & Compliance — Zigzag */}
            <section className="bg-[#0a0a0f] px-4 py-16 md:py-32">
                <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left — Text */}
                    <Reveal direction="left">
                        <div className="flex flex-col">
                            <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
                                Security &amp; Compliance
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                Zero Tolerance, Full Isolation.
                            </h2>
                            <p className="mb-8 max-w-lg text-base leading-relaxed text-zinc-400">
                                Your financial data is our absolute red line. We use physically
                                separated data pools (Tenant Isolation) for each customer. Your
                                data never mixes with other companies&apos; data and never leaks out
                                to train open AI models.
                            </p>
                            <ul className="flex flex-col gap-4">
                                {[
                                    "End-to-End Encryption (AES-256)",
                                    "Zero-Trust Security Framework",
                                    "Granular Role-Based Access Control (RBAC)",
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
                            <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-emerald-600/10 blur-[100px]" />
                            <div className="relative flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-950/30 via-[#11121A] to-[#0a0a0f] backdrop-blur-xl">
                                <div
                                    className="pointer-events-none absolute inset-0 opacity-[0.04]"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                        backgroundSize: "24px 24px",
                                    }}
                                />
                                <div className="relative z-10 flex flex-col items-center gap-4">
                                    <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-400 shadow-[0_0_60px_rgba(16,185,129,0.15)]">
                                        <Lock className="h-12 w-12" />
                                    </div>
                                    <span className="rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                                        Bank-Grade Security
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ═══ NEW: Autonomous Data Cleansing & Mapping ═══ */}
            <section className="px-4 py-16 md:py-32">
                <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left — Text */}
                    <Reveal direction="left">
                        <div className="flex flex-col">
                            <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-indigo-400">
                                Autonomous Data Cleansing
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                No More Manual Mapping. Just Pure Data.
                            </h2>
                            <p className="mb-8 max-w-lg text-base leading-relaxed text-zinc-400">
                                Nexus automatically identifies, cleanses, and maps inconsistent
                                financial formats into a unified Narsent Standard. Whether
                                it&apos;s a messy CSV or a complex API feed, we normalize it in
                                milliseconds.
                            </p>
                            <ul className="flex flex-col gap-4">
                                {[
                                    "Automatic format detection & normalization",
                                    "Cross-source deduplication engine",
                                    "Schema-agnostic ingestion pipeline",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-400">
                                            <Check className="h-3 w-3" />
                                        </div>
                                        <span className="text-sm text-zinc-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                    {/* Right — Data Cleansing Visual */}
                    <Reveal direction="right">
                        <div className="relative flex items-center justify-center">
                            <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-indigo-500/8 blur-[100px]" />
                            <div className="relative flex h-[400px] w-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#11121A] p-6 backdrop-blur-xl">
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
                                    <Workflow className="h-4 w-4 text-indigo-400" />
                                    <span className="text-xs font-semibold text-zinc-300">Data Mapping Engine</span>
                                    <span className="ml-auto rounded-md bg-indigo-500/10 px-2 py-0.5 text-[10px] font-bold text-indigo-400">
                                        PROCESSING
                                    </span>
                                </div>

                                {/* Messy Input */}
                                <div className="relative z-10 mb-3 rounded-xl border border-red-500/15 bg-red-500/5 px-4 py-3">
                                    <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-red-400">Raw Input</span>
                                    <div className="flex flex-col gap-1 font-mono text-[10px] text-zinc-500">
                                        <span className="line-through opacity-60">DATE;AMT;DESC;;ACCT</span>
                                        <span className="line-through opacity-60">2024/03/15,84250.00,&quot;Pmt - INV#847&quot;</span>
                                        <span className="line-through opacity-60">15-Mar-24|215000|inv-1923|acct_main</span>
                                    </div>
                                </div>

                                {/* Transform Arrow */}
                                <div className="relative z-10 my-2 flex items-center justify-center">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400">
                                        <Sparkles className="h-4 w-4" />
                                    </div>
                                    <div className="absolute left-[calc(50%+28px)] flex items-center gap-1.5">
                                        <ArrowRight className="h-3 w-3 text-indigo-400/50" />
                                        <span className="text-[10px] font-medium text-indigo-400/70">Narsent Standard</span>
                                    </div>
                                </div>

                                {/* Clean Output */}
                                <div className="relative z-10 rounded-xl border border-emerald-500/15 bg-emerald-500/5 px-4 py-3">
                                    <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-emerald-400">Normalized Output</span>
                                    <div className="flex flex-col gap-1.5">
                                        {[
                                            { date: "2024-03-15", amount: "₺84,250.00", invoice: "INV-2024-0847", status: "matched" },
                                            { date: "2024-03-15", amount: "₺215,000.00", invoice: "INV-2024-1923", status: "matched" },
                                        ].map((row) => (
                                            <div key={row.invoice} className="flex items-center justify-between rounded-lg bg-white/[0.02] px-3 py-1.5">
                                                <div className="flex items-center gap-3">
                                                    <span className="font-mono text-[10px] text-zinc-400">{row.date}</span>
                                                    <span className="font-mono text-[10px] font-semibold text-white">{row.amount}</span>
                                                    <span className="font-mono text-[10px] text-zinc-500">{row.invoice}</span>
                                                </div>
                                                <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[9px] font-bold text-emerald-400">✓</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="relative z-10 mt-auto flex items-center justify-between pt-4">
                                    <span className="text-[10px] text-zinc-600">3 formats detected → 1 unified standard</span>
                                    <span className="text-[10px] font-bold text-indigo-400">12ms processing time</span>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ═══ NEW: Institutional Trust & Compliance ═══ */}
            <section id="trust" className="scroll-mt-32 bg-[#0a0a0f] px-4 py-16 md:py-32">
                <div className="container mx-auto max-w-6xl">
                    <Reveal direction="up">
                        <div className="mb-16 flex flex-col items-center text-center md:mb-20">
                            <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#E5F33D]">
                                Institutional Trust
                            </span>
                            <h2 className="mb-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                                Built for Global Standards.
                            </h2>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {/* Bank-Grade Security */}
                        <Reveal direction="up" delay={0.1}>
                            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#11121A] p-8 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.06)]">
                                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/5 blur-[60px] transition-all duration-500 group-hover:bg-emerald-500/12" />
                                <div className="relative z-10">
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                                        <ShieldCheck className="h-7 w-7" />
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold text-white">
                                        Bank-Grade Security Architecture
                                    </h3>
                                    <p className="text-sm leading-relaxed text-zinc-400">
                                        End-to-end AES-256 encryption for data at rest and in
                                        transit. Built with a strict zero-trust framework to ensure
                                        maximum data isolation.
                                    </p>
                                </div>
                                <div className="relative z-10 mt-auto flex flex-wrap gap-2 pt-8">
                                    {["AES-256", "Zero-Trust", "E2E Encrypted"].map((badge) => (
                                        <span
                                            key={badge}
                                            className="rounded-md border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-400"
                                        >
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>

                        {/* GDPR & Data Residency */}
                        <Reveal direction="up" delay={0.25}>
                            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#11121A] p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#E5F33D]/30 hover:shadow-[0_0_40px_rgba(229,243,61,0.04)]">
                                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#E5F33D]/5 blur-[60px] transition-all duration-500 group-hover:bg-[#E5F33D]/10" />
                                <div className="relative z-10">
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E5F33D]/10 text-[#E5F33D]">
                                        <MapPin className="h-7 w-7" />
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold text-white">
                                        GDPR &amp; KVKK Compliant
                                    </h3>
                                    <p className="text-sm leading-relaxed text-zinc-400">
                                        Full data residency compliance with GDPR and KVKK
                                        regulations. Your data stays in the jurisdiction you choose,
                                        always.
                                    </p>
                                </div>
                                <div className="relative z-10 mt-auto flex flex-wrap gap-2 pt-8">
                                    {["GDPR", "KVKK", "Data Residency"].map((badge) => (
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

                        {/* HSM Key Management */}
                        <Reveal direction="up" delay={0.4}>
                            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#11121A] p-8 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.06)]">
                                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-500/5 blur-[60px] transition-all duration-500 group-hover:bg-purple-500/12" />
                                <div className="relative z-10">
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                                        <KeyRound className="h-7 w-7" />
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold text-white">
                                        Hardware Security Modules
                                    </h3>
                                    <p className="text-sm leading-relaxed text-zinc-400">
                                        HSM-backed key management for all encryption operations.
                                        Cryptographic keys never leave the hardware boundary.
                                    </p>
                                </div>
                                <div className="relative z-10 mt-auto flex flex-wrap gap-2 pt-8">
                                    {["HSM", "AES-256", "FIPS 140-2"].map((badge) => (
                                        <span
                                            key={badge}
                                            className="rounded-md border border-purple-500/20 bg-purple-500/5 px-3 py-1 text-xs font-medium text-purple-400"
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

            {/* Integration Strip */}
            <section id="integrations" className="px-4 py-16 md:py-24">
                <div className="container mx-auto max-w-5xl">
                    <Reveal direction="up">
                        <div className="rounded-2xl bg-zinc-900/30 px-8 py-12 text-center md:px-16">
                            <h3 className="mb-8 text-sm font-bold uppercase tracking-[0.25em] text-zinc-500">
                                Systems We Securely Connect To
                            </h3>
                            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                                {integrations.map((name) => (
                                    <div
                                        key={name}
                                        className="rounded-xl border border-zinc-800 bg-white/[0.02] px-5 py-3 text-sm font-medium text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-300"
                                    >
                                        {name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="px-4 py-16 md:py-24">
                <div className="container mx-auto max-w-3xl text-center">
                    <Reveal scale>
                        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                            Unify All Your Data with Nexus.
                        </h2>
                        <p className="mx-auto mb-10 max-w-xl text-base text-zinc-400">
                            Discover your integration infrastructure with a 30-minute live
                            demo.
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
