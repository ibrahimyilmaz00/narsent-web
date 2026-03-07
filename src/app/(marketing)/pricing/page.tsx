"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/src/components/ui/reveal";
import { useState } from "react";

const plans = [
    {
        name: "Advanced",
        price: "$2,500",
        period: "/ month",
        subtext: "Billed annually",
        highlight: false,
        features: [
            "Multi-Bank Consolidation (Up to 20 accounts)",
            "90-Day Liquidity Forecasting",
            "Automated AP/AR Reconciliation via Nexus",
            "Centralized Cashflow Dashboard",
        ],
        cta: "Request Demo",
        ctaHref: "/request-demo",
        ctaStyle:
            "border border-zinc-700 bg-transparent text-zinc-300 hover:border-zinc-500 hover:bg-white/5 hover:text-white",
    },
    {
        name: "Enterprise",
        price: "Custom Pricing",
        period: "",
        subtext: "Tailored to transaction volume",
        highlight: true,
        features: [
            "Unlimited Multi-Entity & Multi-Currency Consolidation",
            "Horizon AI: Predictive Scenario & What-If Engine",
            "Zero-Touch Ledger Clean-up (Unstructured Data Normalization)",
            "Custom Machine Learning Models",
            "Dedicated Tenant Architecture & 24/7 SLA",
        ],
        cta: "Contact Sales",
        ctaHref: "/request-demo",
        ctaStyle:
            "bg-[#E5F33D] text-black font-bold hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(229,243,61,0.25)]",
    },
];

const faqs = [
    {
        question: "How does the platform handle multi-entity and multi-currency holding structures?",
        answer:
            "Narsent normalizes all global currencies in real-time. The system provides a consolidated group-level view of liquidity, while keeping individual subsidiary data securely isolated and accessible within their specific dashboards.",
    },
    {
        question: "Our existing ERP data is completely unstructured and messy. Can Nexus handle this?",
        answer:
            "Yes. Nexus is built with an autonomous data-cleansing engine. It automatically identifies, cleanses, and maps unstructured CSVs or legacy ERP feeds into the Narsent Standard before it even reaches the dashboard. No manual formatting required.",
    },
    {
        question: "Can the variables in the Horizon AI forecasting models be adjusted?",
        answer:
            "Absolutely. While Horizon AI provides baseline autonomous predictions, organizations can inject custom macroeconomic variables (like expected inflation spikes or FX volatility) to simulate aggressive or defensive scenarios accurately.",
    },
    {
        question: "Is there a limit to the transaction volume the system can process?",
        answer:
            "The Enterprise tier runs on dedicated infrastructure designed for institutional volume, processing millions of ledger rows and real-time bank feeds without rate limits or performance degradation.",
    },
];

function FaqItem({
    question,
    answer,
}: {
    question: string;
    answer: string;
}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-zinc-800/50">
            <button
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-white"
            >
                <span className="text-base font-medium text-zinc-200">{question}</span>
                <span className="ml-4 shrink-0 text-xl text-zinc-500">
                    {open ? "−" : "+"}
                </span>
            </button>
            {open && (
                <p className="pb-5 text-sm leading-relaxed text-zinc-400">{answer}</p>
            )}
        </div>
    );
}

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-[#0B0C10]">
            {/* Hero */}
            <section className="px-4 pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="container mx-auto max-w-4xl text-center">
                    <Reveal direction="up">
                        <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                            Engineered for Autonomous Finance. Built for Scale.
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-zinc-400">
                            Align your financial tech stack with a pricing model built for complexity. Narsent delivers unified liquidity visibility, multi-entity consolidation, and predictive AI—all in one centralized platform.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="px-4 pb-16 md:pb-24">
                <div className="container mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
                    {plans.map((plan, index) => (
                        <Reveal key={plan.name} direction="up" delay={0.1 + index * 0.15}>
                            <div
                                className={`relative flex h-full flex-col rounded-2xl border p-8 md:p-10 backdrop-blur-xl transition-all duration-300 ${plan.highlight
                                    ? "border-[#E5F33D]/50 bg-[#11121A] shadow-[0_0_40px_rgba(229,243,61,0.06)]"
                                    : "border-zinc-800 bg-[#11121A]"
                                    }`}
                            >
                                {/* Glow for Enterprise */}
                                {plan.highlight && (
                                    <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#E5F33D]/5 blur-[60px]" />
                                )}

                                {/* Plan Name */}
                                <h3 className="mb-2 text-2xl font-bold text-white">
                                    {plan.name}
                                </h3>

                                {/* Price */}
                                <div className="mb-2 mt-4 flex items-baseline">
                                    <span className="text-5xl font-extrabold text-white">
                                        {plan.price}
                                    </span>
                                    {plan.period && (
                                        <span className="ml-2 text-base font-medium text-zinc-400">
                                            {plan.period}
                                        </span>
                                    )}
                                </div>
                                <div className="mb-8 text-sm font-medium text-zinc-500">
                                    {plan.subtext}
                                </div>

                                {/* Features */}
                                <div className="mb-10 flex flex-1 flex-col">
                                    <ul className="flex flex-col gap-5">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-4">
                                                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E5F33D]/15 text-[#E5F33D]">
                                                    <Check className="h-3 w-3" />
                                                </div>
                                                <span className="text-sm font-medium leading-relaxed text-zinc-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA */}
                                <Link
                                    href={plan.ctaHref}
                                    className={`mt-auto inline-flex h-14 w-full items-center justify-center rounded-xl text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#E5F33D] focus:ring-offset-2 focus:ring-offset-[#11121A] ${plan.ctaStyle}`}
                                >
                                    {plan.cta}
                                </Link>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="px-4 pb-24 md:pb-32">
                <div className="container mx-auto max-w-3xl">
                    <Reveal direction="up">
                        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
                            Frequently Asked Questions
                        </h2>
                    </Reveal>
                    <Reveal direction="up" delay={0.2}>
                        <div className="rounded-2xl border border-zinc-800 bg-[#11121A] px-6 py-2 md:px-10 md:py-4">
                            {faqs.map((faq) => (
                                <FaqItem
                                    key={faq.question}
                                    question={faq.question}
                                    answer={faq.answer}
                                />
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
