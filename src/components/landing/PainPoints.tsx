"use client";

import { Database, Clock, AlertTriangle } from "lucide-react";
import { Reveal } from "@/src/components/ui/reveal";

const painPoints = [
    {
        icon: Database,
        title: "Fragmented Ecosystems",
        description:
            "Financial data sits quietly in silos across ERPs, bank accounts, and thousands of invoices, impossible to analyze without manual extraction.",
    },
    {
        icon: Clock,
        title: "The Reporting Trap",
        description:
            "Wasting weeks of manual financial effort just to look at the past. By the time the report is ready, the data is already obsolete.",
    },
    {
        icon: AlertTriangle,
        title: "Reactive Firefighting",
        description:
            "Discovering revenue leakages and collection risks after the damage is done, rather than preempting them with predictive reasoning.",
    },
];

export function PainPoints() {
    return (
        <section className="w-full bg-[#0B0C10] py-24 sm:py-32">
            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
                <Reveal direction="up">
                    {/* Eyebrow */}
                    <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#E5F33D]">
                        The Cost of Decision Latency
                    </span>

                    {/* Headline */}
                    <h2 className="mb-6 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                        Silent Data. Invisible Risks.
                        <br />
                        Delayed Decisions.
                    </h2>

                    {/* Subtext */}
                    <p className="mb-16 max-w-2xl text-lg text-zinc-400">
                        While your finance team spends weeks gathering and cleaning fragmented
                        data, invisible leaks are already impacting your cash flow.
                    </p>
                </Reveal>

                {/* Cards Grid */}
                <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
                    {painPoints.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <Reveal key={item.title} direction="up" delay={0.1 + index * 0.2}>
                                <div className="group flex h-full flex-col items-start rounded-2xl border border-zinc-800 bg-white/[0.02] p-8 text-left transition-all hover:border-zinc-600 hover:bg-white/[0.04]">
                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E5F33D]/10 text-[#E5F33D]">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="mb-3 text-xl font-semibold text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-zinc-400">
                                        {item.description}
                                    </p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
