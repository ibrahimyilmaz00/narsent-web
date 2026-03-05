"use client";

import { Database, Shield, Globe, Server, Check, RefreshCw, Zap, Lock } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/src/components/ui/reveal";

const integrations = [
    "SAP", "Oracle", "NetSuite", "Logo", "Dynamics 365", "QuickBooks",
    "Xero", "Garanti BBVA", "İş Bankası", "Yapı Kredi", "Akbank", "QNB Finansbank",
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
                            Finansal Verinizin Kesintisiz ve Güvenli Ağ Geçidi:{" "}
                            <span className="text-[#E5F33D]">Nexus.</span>
                        </h1>
                        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400">
                            ERP sistemleriniz, banka hesaplarınız ve finansal tablolarınız
                            arasında gerçek zamanlı, hata toleranssız ve banka seviyesinde
                            güvenli bir köprü kurun.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href="#integrations"
                                className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-[#E5F33D] px-8 text-sm font-bold text-black transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(229,243,61,0.25)] sm:w-auto"
                            >
                                Entegrasyonları Gör
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-zinc-700 bg-transparent px-8 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:bg-white/5 hover:text-white sm:w-auto"
                            >
                                Güvenlik Standartları
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Bento Grid Features */}
            <section className="px-4 py-16 md:py-32">
                <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Card 1 — Wide */}
                    <Reveal direction="up" delay={0.1} className="md:col-span-2">
                        <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-[#11121A] p-8 backdrop-blur-xl transition-all duration-300 hover:border-zinc-700 md:p-12">
                            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#E5F33D]/5 blur-[80px]" />
                            <div className="relative z-10">
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E5F33D]/10 text-[#E5F33D]">
                                    <Globe className="h-7 w-7" />
                                </div>
                                <h3 className="mb-3 text-2xl font-bold text-white">
                                    Evrensel ERP Uyumluluğu
                                </h3>
                                <p className="mb-8 max-w-xl text-sm leading-relaxed text-zinc-400">
                                    SAP, Oracle, NetSuite ve Logo gibi global/yerel 50+ sisteme
                                    tak-çalıştır bağlanır.
                                </p>
                                {/* Mini integration logos */}
                                <div className="flex flex-wrap gap-3">
                                    {["SAP", "Oracle", "NetSuite", "Logo", "Dynamics 365", "Xero"].map(
                                        (name) => (
                                            <div
                                                key={name}
                                                className="rounded-lg border border-zinc-800 bg-white/[0.03] px-4 py-2 text-xs font-medium text-zinc-400"
                                            >
                                                {name}
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Card 2 — Square */}
                    <Reveal direction="up" delay={0.25}>
                        <div className="group flex h-full flex-col rounded-2xl border border-zinc-800 bg-[#11121A] p-8 backdrop-blur-xl transition-all duration-300 hover:border-zinc-700">
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                                <Server className="h-7 w-7" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-white">
                                Sıfır Veri Kaybı
                            </h3>
                            <p className="text-sm leading-relaxed text-zinc-400">
                                Continuous sync teknolojisi ile saniyelik kopmalarda bile veriyi
                                kuyruklar ve eksiksiz işler.
                            </p>
                            {/* Visual indicator */}
                            <div className="mt-auto pt-8">
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                                    <span className="text-xs font-medium text-emerald-400">
                                        Live Sync Active
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Card 3 — Square */}
                    <Reveal direction="up" delay={0.4}>
                        <div className="group flex h-full flex-col rounded-2xl border border-zinc-800 bg-[#11121A] p-8 backdrop-blur-xl transition-all duration-300 hover:border-zinc-700">
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                                <Shield className="h-7 w-7" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-white">
                                Askeri Düzey İzolasyon
                            </h3>
                            <p className="text-sm leading-relaxed text-zinc-400">
                                Her müşteri için ayrı şifrelenmiş veri havuzları. ISO 27001 ve
                                SOC2 uyumlu altyapı.
                            </p>
                            {/* Compliance badges */}
                            <div className="mt-auto flex flex-wrap gap-2 pt-8">
                                {["ISO 27001", "SOC2", "KVKK"].map((badge) => (
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
            </section>

            {/* Data Pipeline Flow */}
            <section className="px-4 py-16 md:py-32">
                <div className="container mx-auto max-w-6xl">
                    <Reveal direction="up">
                        <h2 className="mb-16 text-center text-3xl font-extrabold tracking-tight text-white md:mb-24 md:text-4xl lg:text-5xl">
                            Gerçek Zamanlı Veri Boru Hattı.
                        </h2>
                    </Reveal>

                    <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
                        {/* Step 1 */}
                        <Reveal direction="up" delay={0.1}>
                            <div className="flex flex-col items-center rounded-2xl border border-zinc-800 bg-[#11121A] p-8 text-center">
                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E5F33D]/10 text-[#E5F33D]">
                                    <Database className="h-7 w-7" />
                                </div>
                                <h3 className="mb-2 text-lg font-bold text-white">Extract (Çekme)</h3>
                                <p className="text-sm leading-relaxed text-zinc-400">
                                    Dağınık ERP ve banka verileriniz API veya güvenli tünellerle
                                    saniyeler içinde anlık olarak çekilir.
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
                                <h3 className="mb-2 text-lg font-bold text-white">Transform (Dönüştürme)</h3>
                                <p className="text-sm leading-relaxed text-zinc-400">
                                    Narsent Engine, karmaşık finansal formatları tekilleştirir,
                                    hataları temizler ve standartlaştırır.
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
                                <h3 className="mb-2 text-lg font-bold text-white">Load (Yükleme)</h3>
                                <p className="text-sm leading-relaxed text-zinc-400">
                                    Temizlenmiş veri, anormallik taraması için sıfır gecikmeyle
                                    (zero-latency) Horizon AI motoruna aktarılır.
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
                                Security & Compliance
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                Sıfır Tolerans, Tam İzolasyon.
                            </h2>
                            <p className="mb-8 max-w-lg text-base leading-relaxed text-zinc-400">
                                Finansal verileriniz bizim en kırmızı çizgimizdir. Her müşteri
                                için fiziksel olarak ayrılmış veri havuzları (Tenant Isolation)
                                kullanırız. Verileriniz ne başka şirketlerin verileriyle karışır
                                ne de açık yapay zeka modellerini eğitmek için dışarı sızar.
                            </p>
                            <ul className="flex flex-col gap-4">
                                {[
                                    "End-to-End Encryption (AES-256)",
                                    "SOC 2 Type II & ISO 27001",
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

            {/* Integration Strip */}
            <section id="integrations" className="px-4 py-16 md:py-24">
                <div className="container mx-auto max-w-5xl">
                    <Reveal direction="up">
                        <div className="rounded-2xl bg-zinc-900/30 px-8 py-12 text-center md:px-16">
                            <h3 className="mb-8 text-sm font-bold uppercase tracking-[0.25em] text-zinc-500">
                                Güvenle Bağlandığımız Sistemler
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
                            Nexus ile Tüm Verilerinizi Tek Noktada Birleştirin.
                        </h2>
                        <p className="mx-auto mb-10 max-w-xl text-base text-zinc-400">
                            30 dakikalık canlı demo ile entegrasyon altyapınızı keşfedin.
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
