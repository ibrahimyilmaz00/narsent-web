"use client";

import { Check, Activity, BarChart3, BellRing, AlertTriangle, CheckCircle, Timer, Brain, ArrowLeftRight, Database, RefreshCw, Zap } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/src/components/ui/reveal";

export default function ReceivablesPage() {
    return (
        <div className="min-h-screen bg-[#0B0C10]">
            {/* Hero */}
            <section className="px-4 pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="container mx-auto max-w-4xl text-center">
                    <Reveal direction="up">
                        <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#E5F33D]">
                            Receivables &amp; Revenue
                        </span>
                        <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                            Tahsilatları Beklemeyin, Otonom Yönetin.
                        </h1>
                        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400">
                            Vadesi geçmiş faturaların peşinden koşmayı bırakın. Narsent
                            Horizon AI, müşteri ödeme alışkanlıklarını analiz ederek riskli
                            tahsilatları önceden tahmin eder ve otonom uyarılarla nakit
                            döngünüzü korur.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href="/request-demo"
                                className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-[#E5F33D] px-8 text-sm font-bold text-black transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(229,243,61,0.25)] sm:w-auto"
                            >
                                Demoyu Planla
                            </Link>
                            <Link
                                href="#leakage"
                                className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-zinc-700 bg-transparent px-8 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:bg-white/5 hover:text-white sm:w-auto"
                            >
                                Özellikleri İncele
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
                            Reaktif Tahsilattan Otonom Gelir Güvencesine.
                        </h2>
                    </Reveal>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {[
                            {
                                icon: Timer,
                                title: "DSO Optimizasyonu",
                                text: "Tahsilat sürelerini manuel takip yerine otonom akışlarla minimize edin.",
                            },
                            {
                                icon: Brain,
                                title: "Akıllı Risk Skorlama",
                                text: "Sadece geçmişe değil, anlık ödeme davranışlarına dayalı dinamik risk analizi.",
                            },
                            {
                                icon: ArrowLeftRight,
                                title: "Otonom Mutabakat",
                                text: "Banka dekontları ile ERP faturalarını hatasız eşleştiren yapay zeka katmanı.",
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

            {/* ═══ ZIGZAG #1: Leakage Detection ═══ */}
            <section id="leakage" className="scroll-mt-32 px-4 py-16 md:py-32">
                <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left — Text */}
                    <Reveal direction="left">
                        <div className="flex flex-col">
                            <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#E5F33D]">
                                Leakage Detection
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                Behavioral Leakage Detection.
                            </h2>
                            <p className="mb-8 max-w-lg text-base leading-relaxed text-zinc-400">
                                Müşterilerinizin ödeme alışkanlıklarındaki en küçük sapmaları
                                bile yakalayın. Sistemsel hataları veya bilinçli geciktirmeleri
                                otonom olarak analiz eder, nakit sızıntısını oluşmadan durdurur.
                            </p>
                            <ul className="flex flex-col gap-4">
                                {[
                                    "Anomali tespit motoru",
                                    "Tarihsel davranış analizi",
                                    "Sektörel benchmark karşılaştırması",
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
                                    <Activity className="h-4 w-4 text-red-400" />
                                    <span className="text-xs font-semibold text-zinc-300">Anomaly Detection Engine</span>
                                    <span className="ml-auto rounded-md bg-red-500/10 px-2 py-0.5 text-[10px] font-bold text-red-400">
                                        LIVE
                                    </span>
                                </div>
                                <div className="relative z-10 flex flex-1 flex-col gap-3">
                                    {[
                                        { customer: "Müşteri #2841", change: "Ödeme süresi +12 gün sapma", severity: "high" },
                                        { customer: "Müşteri #1205", change: "Kısmi ödeme paterni başladı", severity: "medium" },
                                        { customer: "Müşteri #3092", change: "İade oranı %340 arttı", severity: "high" },
                                    ].map((item) => (
                                        <div
                                            key={item.customer}
                                            className={`flex items-center justify-between rounded-xl border px-4 py-3 ${item.severity === "high"
                                                    ? "border-red-500/20 bg-red-500/5"
                                                    : "border-amber-500/20 bg-amber-500/5"
                                                }`}
                                        >
                                            <div className="flex flex-col">
                                                <span className={`text-xs font-semibold ${item.severity === "high" ? "text-red-300" : "text-amber-300"}`}>
                                                    {item.customer}
                                                </span>
                                                <span className="text-[10px] text-zinc-500">{item.change}</span>
                                            </div>
                                            <span className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${item.severity === "high"
                                                    ? "bg-red-500/20 text-red-400"
                                                    : "bg-amber-500/20 text-amber-400"
                                                }`}>
                                                {item.severity === "high" ? "CRITICAL" : "WARNING"}
                                            </span>
                                        </div>
                                    ))}
                                    <div className="mt-auto flex items-center gap-2 rounded-xl border border-zinc-800/60 bg-white/[0.02] px-4 py-2.5">
                                        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />
                                        <span className="text-[10px] text-zinc-500">3 anomali aktif olarak izleniyor</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ═══ ZIGZAG #2: Scoring Engine (Reversed) ═══ */}
            <section id="scoring" className="scroll-mt-32 bg-[#0a0a0f] px-4 py-16 md:py-32">
                <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left — Visual */}
                    <Reveal direction="left">
                        <div className="relative flex items-center justify-center">
                            <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-cyan-500/5 blur-[100px]" />
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
                                    <BarChart3 className="h-4 w-4 text-cyan-400" />
                                    <span className="text-xs font-semibold text-zinc-300">Narsent Dual Score</span>
                                </div>
                                <div className="relative z-10 flex flex-1 flex-col gap-4">
                                    {/* Traditional Score */}
                                    <div className="rounded-xl border border-zinc-800/60 bg-white/[0.02] px-5 py-4">
                                        <div className="mb-2 flex items-center justify-between">
                                            <span className="text-xs text-zinc-500">Geleneksel Kredi Skoru</span>
                                            <span className="text-sm font-bold text-zinc-400">720</span>
                                        </div>
                                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
                                            <div className="h-full w-[72%] rounded-full bg-zinc-600" />
                                        </div>
                                        <span className="mt-1 block text-[10px] text-zinc-600">Statik · Aylık güncelleme</span>
                                    </div>
                                    {/* Narsent Score */}
                                    <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-5 py-4">
                                        <div className="mb-2 flex items-center justify-between">
                                            <span className="text-xs font-semibold text-cyan-300">Narsent Score™</span>
                                            <span className="text-lg font-extrabold text-cyan-400">847</span>
                                        </div>
                                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
                                            <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-cyan-500 to-[#E5F33D]" />
                                        </div>
                                        <span className="mt-1 block text-[10px] text-cyan-400/60">Dinamik · Anlık ERP verisi</span>
                                    </div>
                                    {/* Delta */}
                                    <div className="mt-auto flex items-center justify-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-2.5">
                                        <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                                        <span className="text-xs font-semibold text-emerald-300">
                                            +127 puan daha hassas risk tespiti
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Right — Text */}
                    <Reveal direction="right">
                        <div className="flex flex-col">
                            <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                                Dual Scoring
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                Narsent Dual Scoring Engine.
                            </h2>
                            <p className="mb-8 max-w-lg text-base leading-relaxed text-zinc-400">
                                Geleneksel, hantal kredi skorlarını unutun. Narsent,
                                ERP&apos;nizdeki anlık işlem verisiyle banka verilerini
                                harmanlayarak her müşteri için yaşayan bir güven skoru üretir.
                            </p>
                            <ul className="flex flex-col gap-4">
                                {[
                                    "Dinamik limit yönetimi",
                                    "Real-time risk güncellemesi",
                                    "Otonom kredi onay taslakları",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-400">
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

            {/* ═══ ZIGZAG #3: Default Alerting ═══ */}
            <section id="alerting" className="scroll-mt-32 px-4 py-16 md:py-32">
                <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left — Text */}
                    <Reveal direction="left">
                        <div className="flex flex-col">
                            <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
                                Default Prevention
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                Pre-emptive Default Alerting.
                            </h2>
                            <p className="mb-8 max-w-lg text-base leading-relaxed text-zinc-400">
                                Vade geçtikten sonra değil, geçmeden aylar önce uyarılın.
                                Horizon AI, iflas veya temerrüt risklerini ödeme
                                performansındaki mikro-değişimlerden saptar.
                            </p>
                            <ul className="flex flex-col gap-4">
                                {[
                                    "Proaktif risk uyarıları",
                                    "Otomatik tahsilat aksiyonları",
                                    "Hukuki süreç entegrasyonu",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-amber-400">
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
                            <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-amber-500/5 blur-[100px]" />
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
                                    <BellRing className="h-4 w-4 text-amber-400" />
                                    <span className="text-xs font-semibold text-zinc-300">Pre-emptive Alert Timeline</span>
                                </div>
                                <div className="relative z-10 flex flex-1 flex-col gap-3">
                                    {/* Timeline */}
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 flex flex-col items-center">
                                            <div className="h-2 w-2 rounded-full bg-emerald-400" />
                                            <div className="h-10 w-px bg-zinc-800" />
                                        </div>
                                        <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-2">
                                            <span className="text-[10px] text-zinc-500">90 gün önce</span>
                                            <p className="text-xs font-medium text-emerald-300">Mikro-sapma tespit edildi</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 flex flex-col items-center">
                                            <div className="h-2 w-2 rounded-full bg-amber-400" />
                                            <div className="h-10 w-px bg-zinc-800" />
                                        </div>
                                        <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 px-3 py-2">
                                            <span className="text-[10px] text-zinc-500">45 gün önce</span>
                                            <p className="text-xs font-medium text-amber-300">Otonom hatırlatıcı gönderildi</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 flex flex-col items-center">
                                            <div className="h-2 w-2 rounded-full bg-red-400" />
                                            <div className="h-10 w-px bg-zinc-800" />
                                        </div>
                                        <div className="rounded-lg border border-red-500/20 bg-red-500/5 px-3 py-2">
                                            <span className="text-[10px] text-zinc-500">15 gün önce</span>
                                            <p className="text-xs font-medium text-red-300">Temerrüt riski → Hukuki akış tetiklendi</p>
                                        </div>
                                    </div>
                                    <div className="mt-auto flex items-center gap-3">
                                        <div className="mt-1 flex flex-col items-center">
                                            <div className="h-2 w-2 rounded-full bg-[#E5F33D]" />
                                        </div>
                                        <div className="rounded-lg border border-[#E5F33D]/20 bg-[#E5F33D]/5 px-3 py-2">
                                            <span className="text-[10px] text-zinc-500">Bugün</span>
                                            <p className="text-xs font-bold text-[#E5F33D]">Ödeme alındı ✓ Vade içinde kapandı</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ═══ ZIGZAG #4: Smart Cash Matching (Reversed) ═══ */}
            <section id="reconciliation" className="scroll-mt-32 bg-[#0a0a0f] px-4 py-16 md:py-32">
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
                                <div className="relative z-10 mb-4 flex items-center gap-2">
                                    <ArrowLeftRight className="h-4 w-4 text-emerald-400" />
                                    <span className="text-xs font-semibold text-zinc-300">AI Cash Matching</span>
                                    <span className="ml-auto rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                                        100% ACCURACY
                                    </span>
                                </div>
                                <div className="relative z-10 flex flex-1 flex-col gap-3">
                                    {[
                                        { bank: "Garanti — ₺84.250,00", invoice: "FTR-2024-1847", status: "matched" },
                                        { bank: "Akbank — ₺215.000,00", invoice: "FTR-2024-1923", status: "matched" },
                                        { bank: "İş Bankası — ₺12.740,50", invoice: "FTR-2024-1901", status: "matched" },
                                    ].map((item) => (
                                        <div
                                            key={item.invoice}
                                            className="flex items-center justify-between rounded-xl border border-emerald-500/15 bg-emerald-500/5 px-4 py-3"
                                        >
                                            <div className="flex flex-col">
                                                <span className="text-xs font-medium text-zinc-300">{item.bank}</span>
                                                <span className="text-[10px] text-zinc-500">{item.invoice}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                                                <span className="text-[10px] font-bold text-emerald-400">MATCHED</span>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="mt-auto rounded-xl border border-red-500/15 bg-red-500/5 px-4 py-3">
                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-col">
                                                <span className="text-xs font-medium text-zinc-300">QNB — ₺5.200,00</span>
                                                <span className="text-[10px] text-zinc-500">Eşleşme yok</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <AlertTriangle className="h-3.5 w-3.5 text-amber-400" />
                                                <span className="text-[10px] font-bold text-amber-400">İADE AKIŞI</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Right — Text */}
                    <Reveal direction="right">
                        <div className="flex flex-col">
                            <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
                                Cash Reconciliation
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                Smart AI Cash Matching.
                            </h2>
                            <p className="mb-8 max-w-lg text-base leading-relaxed text-zinc-400">
                                Banka hesabınıza gelen binlerce ödemeyi, açıklama kısmındaki
                                karmaşaya rağmen doğru faturalarla saniyeler içinde %100
                                doğrulukla eşleştirin.
                            </p>
                            <ul className="flex flex-col gap-4">
                                {[
                                    "%100 manuel iş yükü eliminasyonu",
                                    "Banka-ERP tam senkronizasyonu",
                                    "Hatalı ödeme otonom iade akışı",
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
                                { value: "%30", label: "Ortalama DSO (Tahsilat Süresi) Düşüşü" },
                                { value: "%100", label: "Manuel Fatura-Dekont Eşleştirme Eliminasyonu" },
                                { value: "5x", label: "Erken Uyarı (Default Alert) Hassasiyeti" },
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
                            Tahsilat Süreçlerinizi Otonom Hale Getirin.
                        </h2>
                        <p className="mx-auto mb-10 max-w-xl text-base text-zinc-400">
                            30 dakikalık canlı demo ile proaktif tahsilat altyapısını
                            deneyimleyin.
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
