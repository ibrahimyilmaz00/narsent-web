"use client";

import { BrainCircuit, ShieldAlert, Zap, Check, Database, Cpu, FileCheck } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/src/components/ui/reveal";

const features = [
    {
        icon: BrainCircuit,
        title: "Predictive Pattern Recognition",
        description:
            "Milyonlarca satır ERP ve banka verisini tarayarak gözle görülmeyen finansal trendleri keşfeder.",
    },
    {
        icon: ShieldAlert,
        title: "Real-time Anomaly Detection",
        description:
            "Hatalı faturaları, mükerrer ödemeleri ve anormal nakit çıkışlarını gerçekleşmeden önce yakalar.",
    },
    {
        icon: Zap,
        title: "Automated Action Triggers",
        description:
            "Bir risk tespit edildiğinde sadece uyarmakla kalmaz, onayınıza sunulmak üzere otomatik aksiyon taslakları hazırlar.",
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
                            Verinin Arkasındaki Otonom Beyin: Horizon AI.
                        </h1>
                        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400">
                            Sadece geçmişi raporlayan değil, gelecekteki nakit akışını,
                            anormallikleri ve riskleri saniyeler içinde öngören yapay zeka
                            mimarisi ile tanışın.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href="/request-demo"
                                className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-[#E5F33D] px-8 text-sm font-bold text-black transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(229,243,61,0.25)] sm:w-auto"
                            >
                                Demoyu Planla
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-zinc-700 bg-transparent px-8 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:bg-white/5 hover:text-white sm:w-auto"
                            >
                                Teknik Döküman
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
                            Veriden Otonom Karara: 3 Adım.
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
                                    "Tüm ERP ve Banka verilerinizin saniyeler içinde anomali taramasından geçmesi.",
                            },
                            {
                                step: "02",
                                icon: Cpu,
                                title: "Contextual Reasoning",
                                description:
                                    "Sistemin, geçmiş finansal hareketlerinize bakarak bu verinin ne anlama geldiğini kavraması.",
                            },
                            {
                                step: "03",
                                icon: FileCheck,
                                title: "Execution Drafts",
                                description:
                                    "İnsan onayına hazır, otonom aksiyon önerilerinin oluşturulması.",
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
                                Kendi Finansal Dilinizi Konuşur.
                            </h2>
                            <p className="mb-8 max-w-lg text-base leading-relaxed text-zinc-400">
                                Narsent Horizon AI, genel geçer LLM&apos;ler gibi değildir. Sizin
                                sektörünüze, şirketinizin geçmiş verilerine ve nakit
                                döngülerinize göre özel olarak eğitilir (Fine-tuning).
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
                                { value: "%99.8", label: "Anomali Yakalama Hassasiyeti" },
                                {
                                    value: "40 Saat",
                                    label: "Haftalık Tasarruf Edilen Finansal Analiz Süresi",
                                },
                                {
                                    value: "< 2 Sn",
                                    label: "Milyon Satırlık Veriyi İşleme Hızı",
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
                            Horizon AI&apos;ı Kendi Verilerinizde Test Edin.
                        </h2>
                        <p className="mx-auto mb-10 max-w-xl text-base text-zinc-400">
                            30 dakikalık canlı demo ile finansal verileriniz üzerinde otonom
                            karar altyapısını deneyimleyin.
                        </p>
                        <Link
                            href="/request-demo"
                            className="inline-flex h-12 items-center justify-center rounded-lg bg-[#E5F33D] px-10 text-sm font-bold text-black transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(229,243,61,0.25)]"
                        >
                            Demoyu Planla
                        </Link>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
