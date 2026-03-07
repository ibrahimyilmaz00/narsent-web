import { ScanSearch, ShieldCheck } from "lucide-react";

export function TrustAndGovernance() {
    return (
        <section
            className="relative w-full py-16 md:py-32"
            style={{
                backgroundColor: "#0B0C10",
                backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
            }}
        >
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="mb-20 flex flex-col items-center text-center">
                    <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#E5F33D]">
                        Trust &amp; Governance
                    </span>
                    <h2 className="mb-6 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
                        Not a Black Box. Transparent Intelligence.
                    </h2>
                    <p className="max-w-2xl text-lg text-zinc-400">
                        Narsent explains the mathematical rationale behind every decision
                        and protects your financial data with bank-grade encryption.
                    </p>
                </div>

                {/* Two Pillar Cards */}
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Pillar 1 — Explainable AI */}
                    <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-white/5 p-10 backdrop-blur-xl transition-all duration-300 hover:border-[#E5F33D]/40 hover:shadow-[0_0_40px_rgba(229,243,61,0.06)]">
                        {/* Subtle glow */}
                        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#E5F33D]/5 blur-[60px]" />

                        <div className="relative z-10">
                            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E5F33D]/10 text-[#E5F33D]">
                                <ScanSearch className="h-8 w-8" />
                            </div>
                            <h3 className="mb-4 text-2xl font-bold text-white">
                                Explainable AI (XAI) Framework
                            </h3>
                            <p className="text-base leading-relaxed text-zinc-400">
                                See how the AI thinks. Narsent reports the root cause
                                (Root-Cause Analysis) of every anomaly it detects and every
                                prediction it delivers, step by step. It presents an auditable
                                and transparent decision tree.
                            </p>
                        </div>
                    </div>

                    {/* Pillar 2 — Enterprise Data Security */}
                    <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-white/5 p-10 backdrop-blur-xl transition-all duration-300 hover:border-[#E5F33D]/40 hover:shadow-[0_0_40px_rgba(229,243,61,0.06)]">
                        {/* Subtle glow */}
                        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#E5F33D]/5 blur-[60px]" />

                        <div className="relative z-10">
                            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E5F33D]/10 text-[#E5F33D]">
                                <ShieldCheck className="h-8 w-8" />
                            </div>
                            <h3 className="mb-4 text-2xl font-bold text-white">
                                Bank-Grade Isolation
                            </h3>
                            <p className="text-base leading-relaxed text-zinc-400">
                                Your data is your privacy. Protected with AES-256 end-to-end encryption
                                and zero-trust architecture. Your financial data is never used to
                                train open AI models (LLMs). Fully isolated and secure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
