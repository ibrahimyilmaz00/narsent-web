"use client";

import { LineChart, Check, TrendingUp, ArrowUpDown, SlidersHorizontal, Sparkles, Database, RefreshCw, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/src/components/ui/reveal";

export default function CashflowPage() {
    return (
        <div className="min-h-screen bg-[#0B0C10]">
            {/* Hero */}
            <section className="px-4 pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="container mx-auto max-w-4xl text-center">
                    <Reveal direction="up">
                        <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#E5F33D]">
                            Cashflow &amp; Liquidity
                        </span>
                        <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                            End the Blind Flight in Cashflow.
                        </h1>
                        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400">
                            Leave static Excel spreadsheets behind. Consolidate all your bank
                            accounts on a single screen and see your future liquidity position
                            today with AI-powered autonomous forecasts.
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
                                Customer Stories
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
                            3 Pillars of the Transition from Excel to Autonomous Intelligence.
                        </h2>
                    </Reveal>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {[
                            {
                                icon: Database,
                                title: "Single Source of Truth",
                                text: "Forget dozens of separate bank screens and ERP modules. All your financial data is collected, cleaned, and standardized in a single isolated pool within seconds.",
                            },
                            {
                                icon: RefreshCw,
                                title: "Continuous Synchronization",
                                text: "Static month-end reports are history. Narsent synchronizes your data 24/7 non-stop, delivering a living, real-time financial overview updated every second.",
                            },
                            {
                                icon: ShieldAlert,
                                title: "Proactive Liquidity Defense",
                                text: "Protect your financial health proactively with an AI shield that detects cash shortfalls months before they occur, not after.",
                            },
                        ].map((pillar, index) => {
                            const Icon = pillar.icon;
                            return (
                                <Reveal key={pillar.title} direction="up" delay={0.1 + index * 0.15}>
                                    <div className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-[#11121A] p-8 transition-all duration-300 hover:border-zinc-700">
                                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E5F33D]/10 text-[#E5F33D]">
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

            {/* ═══ FEATURE ZIGZAG #1: Forecasts ═══ */}
            <section id="forecasts" className="scroll-mt-32 px-4 py-16 md:py-32">
                <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left — Text */}
                    <Reveal direction="left">
                        <div className="flex flex-col">
                            <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#E5F33D]">
                                Automated Rolling Forecasts
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                13-Week Autonomous Cash Projection.
                            </h2>
                            <p className="mb-8 max-w-lg text-base leading-relaxed text-zinc-400">
                                Analyzes your historical ERP data and invoice maturities to
                                generate cashflow forecasts with 98% accuracy — no human
                                intervention required. Bury static Excel spreadsheets for good.
                            </p>
                            <ul className="flex flex-col gap-4">
                                {[
                                    "Real-time sync via open banking",
                                    "Macroeconomic factor calibration",
                                    "Real-time budget vs. actual variance analysis",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E5F33D]/15 text-[#E5F33D]">
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
                            <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-[#E5F33D]/5 blur-[100px]" />
                            <div className="relative flex h-80 w-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#11121A] p-6 backdrop-blur-xl">
                                <div
                                    className="pointer-events-none absolute inset-0 opacity-[0.03]"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                        backgroundSize: "24px 24px",
                                    }}
                                />
                                {/* Mock chart header */}
                                <div className="relative z-10 mb-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <TrendingUp className="h-4 w-4 text-[#E5F33D]" />
                                        <span className="text-xs font-semibold text-zinc-300">13-Week Rolling Forecast</span>
                                    </div>
                                    <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                                        98.5% Accuracy
                                    </span>
                                </div>
                                {/* Mock chart bars */}
                                <div className="relative z-10 flex flex-1 items-end gap-1.5">
                                    {[65, 45, 72, 58, 80, 68, 90, 55, 75, 85, 60, 78, 92].map((h, i) => (
                                        <div
                                            key={i}
                                            className="flex-1 rounded-t-sm bg-gradient-to-t from-[#E5F33D]/30 to-[#E5F33D]/80 transition-all duration-300"
                                            style={{ height: `${h}%` }}
                                        />
                                    ))}
                                </div>
                                {/* Weeks label */}
                                <div className="relative z-10 mt-3 flex justify-between text-[10px] text-zinc-600">
                                    <span>W1</span><span>W4</span><span>W8</span><span>W13</span>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ═══ FEATURE ZIGZAG #2: Multi-Bank (Reversed) ═══ */}
            <section id="multi-bank" className="scroll-mt-32 bg-[#0a0a0f] px-4 py-16 md:py-32">
                <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left — Visual */}
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
                                {/* Mock consolidation panel */}
                                <div className="relative z-10 mb-4 flex items-center gap-2">
                                    <ArrowUpDown className="h-4 w-4 text-emerald-400" />
                                    <span className="text-xs font-semibold text-zinc-300">Multi-Bank Consolidation</span>
                                </div>
                                <div className="relative z-10 flex flex-1 flex-col gap-3">
                                    {[
                                        { bank: "Garanti BBVA", balance: "₺12.4M", status: "connected" },
                                        { bank: "Akbank", balance: "₺8.7M", status: "connected" },
                                        { bank: "HSBC", balance: "$2.1M", status: "connected" },
                                        { bank: "QNB Finansbank", balance: "₺5.3M", status: "connected" },
                                    ].map((item) => (
                                        <div
                                            key={item.bank}
                                            className="flex items-center justify-between rounded-xl border border-zinc-800/60 bg-white/[0.02] px-4 py-3"
                                        >
                                            <span className="text-sm font-medium text-zinc-300">{item.bank}</span>
                                            <div className="flex items-center gap-3">
                                                <span className="text-sm font-bold text-white">{item.balance}</span>
                                                <div className="flex items-center gap-1">
                                                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                                                    <span className="text-[10px] font-medium text-emerald-400">Connected</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Right — Text */}
                    <Reveal direction="right">
                        <div className="flex flex-col">
                            <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
                                Multi-Bank Visibility
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                All Your Bank Accounts on One Screen.
                            </h2>
                            <p className="mb-8 max-w-lg text-base leading-relaxed text-zinc-400">
                                Consolidate all your cash positions across different countries
                                and banks in real-time on a single autonomous dashboard.
                            </p>
                            <ul className="flex flex-col gap-4">
                                {[
                                    "Global API and Swift integrations",
                                    "Automatic multi-currency (FX) conversion",
                                    "Zero-latency balance reconciliation",
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

            {/* ═══ FEATURE ZIGZAG #3: Scenario Planning ═══ */}
            <section id="scenario" className="scroll-mt-32 px-4 py-16 md:py-32">
                <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left — Text */}
                    <Reveal direction="left">
                        <div className="flex flex-col">
                            <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-purple-400">
                                What-If Simulations
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                Dynamic What-If Simulations.
                            </h2>
                            <p className="mb-8 max-w-lg text-base leading-relaxed text-zinc-400">
                                What happens to your liquidity if you make a large payment or
                                collections are delayed by 15 days? Stress-test risks before
                                they materialize.
                            </p>
                            <ul className="flex flex-col gap-4">
                                {[
                                    "Drag-and-drop scenario builder",
                                    "Cash burn rate alerts",
                                    "Autonomous action drafts",
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

                    {/* Right — Visual */}
                    <Reveal direction="right">
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
                                {/* Mock scenario header */}
                                <div className="relative z-10 mb-4 flex items-center gap-2">
                                    <SlidersHorizontal className="h-4 w-4 text-purple-400" />
                                    <span className="text-xs font-semibold text-zinc-300">Scenario Simulator</span>
                                </div>
                                {/* Scenario cards */}
                                <div className="relative z-10 flex flex-1 flex-col gap-3">
                                    {/* Scenario A */}
                                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3">
                                        <div className="mb-1 flex items-center justify-between">
                                            <span className="text-xs font-semibold text-red-300">Scenario A: Collections Delayed 15 Days</span>
                                            <span className="rounded bg-red-500/20 px-1.5 py-0.5 text-[10px] font-bold text-red-400">HIGH RISK</span>
                                        </div>
                                        <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
                                            <div className="h-full w-[35%] rounded-full bg-gradient-to-r from-red-500 to-red-400" />
                                        </div>
                                        <span className="mt-1 text-[10px] text-red-400/60">Liquidity: -₺3.2M</span>
                                    </div>
                                    {/* Scenario B */}
                                    <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3">
                                        <div className="mb-1 flex items-center justify-between">
                                            <span className="text-xs font-semibold text-emerald-300">Scenario B: Early Collection Action</span>
                                            <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-bold text-emerald-400">OPTIMAL</span>
                                        </div>
                                        <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
                                            <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400" />
                                        </div>
                                        <span className="mt-1 text-[10px] text-emerald-400/60">Liquidity: +₺1.8M</span>
                                    </div>
                                    {/* Slider mock */}
                                    <div className="mt-auto rounded-xl border border-zinc-800/60 bg-white/[0.02] px-4 py-3">
                                        <span className="mb-2 block text-[10px] font-medium text-zinc-500">Delay Duration (Days)</span>
                                        <div className="relative h-1.5 w-full rounded-full bg-zinc-800">
                                            <div className="absolute left-0 top-0 h-full w-[45%] rounded-full bg-gradient-to-r from-purple-500 to-purple-400" />
                                            <div className="absolute top-1/2 left-[45%] h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-purple-400 bg-[#11121A]" />
                                        </div>
                                        <div className="mt-1 flex justify-between text-[10px] text-zinc-600">
                                            <span>0</span><span>15</span><span>30</span><span>60</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ═══ FEATURE ZIGZAG #4: Capital Optimization (Reversed) ═══ */}
            <section id="capital-optimization" className="scroll-mt-32 bg-[#0a0a0f] px-4 py-16 md:py-32">
                <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left — Visual */}
                    <Reveal direction="left">
                        <div className="relative flex items-center justify-center">
                            <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-[#E5F33D]/5 blur-[100px]" />
                            <div className="relative flex h-80 w-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#11121A] p-6 backdrop-blur-xl">
                                <div
                                    className="pointer-events-none absolute inset-0 opacity-[0.03]"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                        backgroundSize: "24px 24px",
                                    }}
                                />
                                {/* Mock AI notification */}
                                <div className="relative z-10 mb-4 flex items-center gap-2">
                                    <Sparkles className="h-4 w-4 text-[#E5F33D]" />
                                    <span className="text-xs font-semibold text-zinc-300">Horizon AI Recommendation</span>
                                    <span className="ml-auto rounded-md bg-[#E5F33D]/10 px-2 py-0.5 text-[10px] font-bold text-[#E5F33D]">
                                        JUST NOW
                                    </span>
                                </div>
                                <div className="relative z-10 flex flex-1 flex-col gap-4">
                                    {/* Alert card */}
                                    <div className="rounded-xl border border-[#E5F33D]/20 bg-[#E5F33D]/5 px-5 py-4">
                                        <span className="mb-1 block text-sm font-bold text-[#E5F33D]">
                                            ₺2.5M Idle Cash Detected
                                        </span>
                                        <p className="text-xs leading-relaxed text-zinc-400">
                                            Balance with no movement in the last 14 days has been
                                            analyzed. An investment opportunity under current market
                                            conditions is being identified.
                                        </p>
                                    </div>
                                    {/* Recommendation card */}
                                    <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-5 py-4">
                                        <div className="mb-2 flex items-center gap-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                            <span className="text-xs font-semibold text-emerald-300">
                                                Recommendation: Transfer to Overnight Fund
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-zinc-400">Estimated Yield</span>
                                            <span className="text-lg font-extrabold text-emerald-400">4.2%</span>
                                        </div>
                                        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
                                            <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-emerald-500 to-[#E5F33D]" />
                                        </div>
                                    </div>
                                    {/* Action button mock */}
                                    <div className="mt-auto flex gap-3">
                                        <div className="flex-1 rounded-lg bg-[#E5F33D] py-2.5 text-center text-xs font-bold text-black">
                                            Approve &amp; Transfer
                                        </div>
                                        <div className="flex-1 rounded-lg border border-zinc-700 py-2.5 text-center text-xs font-medium text-zinc-400">
                                            More Options
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Right — Text */}
                    <Reveal direction="right">
                        <div className="flex flex-col">
                            <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#E5F33D]">
                                Working Capital Optimization
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                Idle Cash &amp; Working Capital Optimization.
                            </h2>
                            <p className="mb-8 max-w-lg text-base leading-relaxed text-zinc-400">
                                Don&apos;t just monitor idle cash sitting in your accounts — turn it
                                into profit. Horizon AI identifies idle liquidity and presents
                                autonomous actions to invest in overnight funds or capture early
                                payment discounts from suppliers.
                            </p>
                            <ul className="flex flex-col gap-4">
                                {[
                                    "Autonomous treasury recommendations",
                                    "Supplier-specific discount opportunities",
                                    "Overnight yield and repo simulations",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E5F33D]/15 text-[#E5F33D]">
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

            {/* Performance & ROI Metrics */}
            <section
                className="px-4 py-16 md:py-32"
                style={{
                    background:
                        "radial-gradient(ellipse at center, rgba(229,243,61,0.04) 0%, #0B0C10 60%, #0B0C10 100%)",
                }}
            >
                <div className="container mx-auto max-w-5xl">
                    <Reveal direction="up">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            {[
                                { value: "98.5%", label: "Cashflow Forecast Accuracy" },
                                { value: "Zero", label: "Manual Consolidation Required" },
                                { value: "3x", label: "Strategic Decision-Making Speed" },
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
                            Make Your Cashflow Autonomous.
                        </h2>
                        <p className="mx-auto mb-10 max-w-xl text-base text-zinc-400">
                            Experience the future of liquidity management with a 30-minute
                            live demo.
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
