"use client";

import { Check, BrainCircuit, Network, FileText, CheckCircle, Receipt } from "lucide-react";
import { Reveal } from "@/src/components/ui/reveal";

function FeatureItem({ text }: { text: string }) {
    return (
        <li className="flex items-center gap-3">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                <Check className="h-3 w-3" />
            </div>
            <span className="text-sm text-zinc-300">{text}</span>
        </li>
    );
}

export function FlagshipProducts() {
    return (
        <section className="w-full bg-[#0B0C10] py-16 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <Reveal direction="up">
                    <div className="mb-24 flex flex-col items-center text-center">
                        <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#E5F33D]">
                            Flagship Modules
                        </span>
                        <h2 className="max-w-4xl text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-7xl">
                            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                                The New Standard for Financial Operations.
                            </span>
                        </h2>
                    </div>
                </Reveal>

                {/* Product 1: Horizon AI — Text Left, Visual Right */}
                <div className="mb-32 grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left — Text */}
                    <Reveal direction="left">
                        <div className="flex flex-col">
                            <h3 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                Narsent Horizon AI
                            </h3>
                            <p className="mb-8 max-w-lg text-base leading-relaxed text-zinc-400">
                                It doesn&apos;t just read data — it understands the story behind it.
                                Processes millions of rows of financial data in seconds to detect
                                anomalies and deliver proactive action recommendations.
                            </p>
                            <ul className="flex flex-col gap-4">
                                <FeatureItem text="Predictive Pattern Recognition" />
                                <FeatureItem text="Anomaly Detection" />
                                <FeatureItem text="Automated Action Triggers" />
                            </ul>
                        </div>
                    </Reveal>

                    {/* Right — Visual */}
                    <Reveal direction="right">
                        <div className="relative flex items-center justify-center">
                            {/* Outer glow */}
                            <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-indigo-600/15 blur-[100px]" />
                            <div className="relative flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-950/50 via-[#11121A] to-[#0B0C10] backdrop-blur-xl">
                                {/* Dot grid */}
                                <div
                                    className="pointer-events-none absolute inset-0 opacity-[0.04]"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                        backgroundSize: "24px 24px",
                                    }}
                                />
                                {/* Floating network nodes */}
                                <div className="absolute left-8 top-8 flex h-10 w-10 items-center justify-center rounded-lg bg-[#E5F33D]/10 text-[#E5F33D] opacity-60">
                                    <Network className="h-5 w-5" />
                                </div>
                                <div className="absolute right-12 top-16 flex h-8 w-8 items-center justify-center rounded-md bg-indigo-500/10 text-indigo-400 opacity-40">
                                    <Network className="h-4 w-4" />
                                </div>
                                <div className="absolute bottom-12 left-16 flex h-8 w-8 items-center justify-center rounded-md bg-purple-500/10 text-purple-400 opacity-40">
                                    <Network className="h-4 w-4" />
                                </div>
                                {/* Central Icon */}
                                <div className="relative z-10 flex flex-col items-center gap-4">
                                    <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-[#E5F33D]/10 text-[#E5F33D] shadow-[0_0_60px_rgba(229,243,61,0.15)]">
                                        <BrainCircuit className="h-12 w-12" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                                        Autonomous Reasoning
                                    </span>
                                </div>
                                {/* Connection lines */}
                                <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-10">
                                    <line x1="52" y1="52" x2="50%" y2="50%" stroke="#E5F33D" strokeWidth="1" />
                                    <line x1="80%" y1="25%" x2="50%" y2="50%" stroke="#818CF8" strokeWidth="1" />
                                    <line x1="20%" y1="75%" x2="50%" y2="50%" stroke="#A78BFA" strokeWidth="1" />
                                </svg>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* Product 2: Autonomous Receivables — Visual Left, Text Right */}
                <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left — Visual */}
                    <Reveal direction="left">
                        <div className="relative flex items-center justify-center order-2 lg:order-1">
                            {/* Outer glow */}
                            <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-purple-600/10 blur-[100px]" />
                            <div className="relative flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#11121A] via-[#0B0C10] to-purple-950/30 backdrop-blur-xl">
                                {/* Dot grid */}
                                <div
                                    className="pointer-events-none absolute inset-0 opacity-[0.04]"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                        backgroundSize: "24px 24px",
                                    }}
                                />
                                {/* Floating invoice elements */}
                                <div className="absolute left-10 top-10 flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2 backdrop-blur-sm">
                                    <Receipt className="h-4 w-4 text-[#E5F33D]" />
                                    <span className="text-xs text-zinc-400">INV-2024-0847</span>
                                    <span className="text-xs font-semibold text-emerald-400">Paid</span>
                                </div>
                                <div className="absolute right-8 top-20 flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2 backdrop-blur-sm opacity-70">
                                    <FileText className="h-4 w-4 text-zinc-500" />
                                    <span className="text-xs text-zinc-500">INV-2024-0903</span>
                                    <span className="text-xs font-semibold text-amber-400">Pending</span>
                                </div>
                                <div className="absolute bottom-16 left-12 flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2 backdrop-blur-sm opacity-50">
                                    <FileText className="h-4 w-4 text-zinc-600" />
                                    <span className="text-xs text-zinc-500">INV-2024-1024</span>
                                    <span className="text-xs font-semibold text-red-400">Overdue</span>
                                </div>
                                {/* Central Icon */}
                                <div className="relative z-10 flex flex-col items-center gap-4">
                                    <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-purple-500/10 text-purple-400 shadow-[0_0_60px_rgba(168,85,247,0.15)]">
                                        <CheckCircle className="h-12 w-12" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                                        Collection Engine
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Right — Text */}
                    <Reveal direction="right">
                        <div className="flex flex-col order-1 lg:order-2">
                            <h3 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                Autonomous Receivables Management
                            </h3>
                            <p className="mb-8 max-w-lg text-base leading-relaxed text-zinc-400">
                                Analyzes customer payment behaviors to predict risky collections
                                in advance. Protects your cash cycle with intelligent alerts
                                before maturity delays occur.
                            </p>
                            <ul className="flex flex-col gap-4">
                                <FeatureItem text="Dynamic Credit Scoring" />
                                <FeatureItem text="Automated Dunning Workflows" />
                                <FeatureItem text="Cash-in Forecasting" />
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
