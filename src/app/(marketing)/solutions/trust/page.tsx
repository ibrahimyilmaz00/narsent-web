"use client";

import { Check, Search, BrainCircuit, Scale, FileSearch, Eye, ShieldCheck, Lock, GitBranch, Layers, UserCog } from "lucide-react";
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
                            Kara Kutu Değil, Şeffaf Zeka.
                        </h1>
                        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400">
                            Narsent, aldığı her kararın arkasındaki matematiksel dayanağı ve
                            veri izini (audit trail) saniyeler içinde raporlar. Yapay zekaya
                            güvenin, otonom kararların izlenebilirliğinden emin olun.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href="/request-demo"
                                className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-amber-400 px-8 text-sm font-bold text-black transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(251,191,36,0.25)] sm:w-auto"
                            >
                                Demoyu Planla
                            </Link>
                            <Link
                                href="#traceability"
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
                            Otonom Zekaya Güvenin 3 Temel Taşı.
                        </h2>
                    </Reveal>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {[
                            {
                                icon: Eye,
                                title: "Sıfır Kara Kutu",
                                text: "Yapay zekanın aldığı her karar, insan dilinde ve şeffaf bir nedensellikle sunulur.",
                            },
                            {
                                icon: FileSearch,
                                title: "Kesintisiz Denetim İzi",
                                text: "Her tahminin arkasındaki ERP ve banka verisine milisaniyeler içinde inin.",
                            },
                            {
                                icon: Lock,
                                title: "Banka Seviyesinde İzolasyon",
                                text: "Verileriniz hiçbir global LLM modelini eğitmek için kullanılmaz, size özel kalır.",
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
                    {/* Left — Text */}
                    <Reveal direction="left">
                        <div className="flex flex-col">
                            <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
                                Traceability
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                Decision Traceability (Karar İzlenebilirliği).
                            </h2>
                            <p className="mb-8 max-w-lg text-base leading-relaxed text-zinc-400">
                                Bir otonom tahmin veya aksiyon önerildiğinde, sistemin bunu
                                &quot;Neden&quot; önerdiğini tek tıkla görün. Hangi ERP
                                faturasından, hangi makroekonomik veriden yola çıkıldığını adım
                                adım geriye doğru izleyin.
                            </p>
                            <ul className="flex flex-col gap-4">
                                {[
                                    "Uçtan uca veri kaynağı takibi",
                                    "Matematiksel dayanak raporlaması",
                                    "Görselleştirilmiş karar ağacı",
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

                    {/* Right — Visual */}
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
                                    {/* Root */}
                                    <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-2.5">
                                        <span className="text-xs font-bold text-amber-300">Karar: ₺1.2M Nakit Açığı Uyarısı</span>
                                    </div>
                                    <div className="ml-4 border-l border-zinc-800 pl-4">
                                        <div className="mb-2 rounded-lg border border-zinc-800/60 bg-white/[0.02] px-3 py-2">
                                            <span className="text-[10px] text-zinc-500">Kaynak 1</span>
                                            <p className="text-xs text-zinc-300">ERP: FTR-2024-3841 vadesi 15 gün geçmiş</p>
                                        </div>
                                        <div className="mb-2 rounded-lg border border-zinc-800/60 bg-white/[0.02] px-3 py-2">
                                            <span className="text-[10px] text-zinc-500">Kaynak 2</span>
                                            <p className="text-xs text-zinc-300">Banka API: Garanti BBVA bakiye düşüşü -₺800K</p>
                                        </div>
                                        <div className="mb-2 rounded-lg border border-zinc-800/60 bg-white/[0.02] px-3 py-2">
                                            <span className="text-[10px] text-zinc-500">Kaynak 3</span>
                                            <p className="text-xs text-zinc-300">Makro: TCMB faiz kararı → maliyet artışı</p>
                                        </div>
                                    </div>
                                    <div className="mt-auto rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-2">
                                        <span className="text-[10px] font-bold text-amber-400">Güven Skoru: %97.2 · 3 bağımsız kaynak doğrulandı</span>
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
                    {/* Left — Visual */}
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
                                    {/* Model output */}
                                    <div className="rounded-xl border border-zinc-800/60 bg-white/[0.02] px-4 py-3">
                                        <span className="mb-1 block text-[10px] font-bold text-zinc-500">MODEL ÇIKTISI</span>
                                        <p className="font-mono text-[10px] leading-relaxed text-zinc-600">
                                            pred_cashgap=1.2M, conf=0.972, feat_imp=[inv_overdue:0.41, bank_bal:0.33, macro:0.26]
                                        </p>
                                    </div>
                                    {/* Arrow */}
                                    <div className="flex items-center justify-center">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400">
                                            <span className="text-sm">↓</span>
                                        </div>
                                    </div>
                                    {/* Human readable */}
                                    <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 px-4 py-3">
                                        <span className="mb-1 block text-[10px] font-bold text-purple-400">İNSAN DİLİ ÇEVİRİSİ</span>
                                        <p className="text-xs leading-relaxed text-zinc-300">
                                            &quot;Önümüzdeki 2 hafta içinde ₺1.2M nakit açığı bekleniyor.
                                            En büyük etken (%41) vadesi geçmiş faturalar. Banka bakiyesi
                                            düşüşü (%33) ve TCMB faiz kararı (%26) riski artırıyor.&quot;
                                        </p>
                                    </div>
                                    <div className="mt-auto flex items-center gap-2 rounded-lg border border-zinc-800/40 bg-white/[0.01] px-3 py-2">
                                        <Layers className="h-3 w-3 text-purple-400" />
                                        <span className="text-[10px] text-zinc-500">3 parametre ağırlığı şeffaf olarak raporlandı</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Right — Text */}
                    <Reveal direction="right">
                        <div className="flex flex-col">
                            <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-purple-400">
                                Explainable AI
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                Explainable AI (Açıklanabilir Yapay Zeka).
                            </h2>
                            <p className="mb-8 max-w-lg text-base leading-relaxed text-zinc-400">
                                Karmaşık derin öğrenme modellerini ve Narsent Horizon
                                AI&apos;ın akıl yürütme (reasoning) sürecini, finans
                                ekibinizin okuyabileceği sade, insan diline (NLP)
                                dönüştürüyoruz.
                            </p>
                            <ul className="flex flex-col gap-4">
                                {[
                                    "NLP tabanlı karar özetleri",
                                    "Parametre ağırlıklarının şeffaflığı",
                                    "Kullanıcı dostu denetim paneli",
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
                    {/* Left — Text */}
                    <Reveal direction="left">
                        <div className="flex flex-col">
                            <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-red-400">
                                Root-Cause Analysis
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                Otonom Root-Cause Analysis (Kök Neden Analizi).
                            </h2>
                            <p className="mb-8 max-w-lg text-base leading-relaxed text-zinc-400">
                                Nakit akışınızda bir sapma veya anormallik olduğunda yüzlerce
                                Excel sekmesinde hata aramayı bırakın. Sistem saniyeler içinde
                                hatanın kök nedenini (Örn: Tedarikçi X&apos;in gecikmesi) bulur
                                ve raporlar.
                            </p>
                            <ul className="flex flex-col gap-4">
                                {[
                                    "Saniyelik anomali tespiti",
                                    "Çapraz tablo veri doğrulama",
                                    "Otonom düzeltme önerileri",
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
                                    <Scale className="h-4 w-4 text-red-400" />
                                    <span className="text-xs font-semibold text-zinc-300">Root-Cause Engine</span>
                                    <span className="ml-auto rounded-md bg-red-500/10 px-2 py-0.5 text-[10px] font-bold text-red-400">
                                        0.8 SN
                                    </span>
                                </div>
                                <div className="relative z-10 flex flex-1 flex-col gap-3">
                                    {/* Anomaly */}
                                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3">
                                        <span className="text-xs font-bold text-red-300">Anomali: ₺340K Nakit Çıkışı Sapması</span>
                                        <p className="mt-1 text-[10px] text-zinc-500">Beklenen: ₺1.8M · Gerçekleşen: ₺2.14M</p>
                                    </div>
                                    {/* Analysis steps */}
                                    <div className="flex flex-col gap-1.5 pl-3 border-l border-zinc-800">
                                        <div className="rounded-lg bg-white/[0.02] px-3 py-1.5">
                                            <span className="text-[10px] text-zinc-500">1. ERP kontrolü →</span>
                                            <span className="ml-1 text-[10px] text-zinc-400">3 beklenmeyen ödeme emri</span>
                                        </div>
                                        <div className="rounded-lg bg-white/[0.02] px-3 py-1.5">
                                            <span className="text-[10px] text-zinc-500">2. Tedarikçi analizi →</span>
                                            <span className="ml-1 text-[10px] text-zinc-400">Tedarikçi X erken fatura kesmiş</span>
                                        </div>
                                        <div className="rounded-lg bg-white/[0.02] px-3 py-1.5">
                                            <span className="text-[10px] text-zinc-500">3. Çapraz doğrulama →</span>
                                            <span className="ml-1 text-[10px] text-zinc-400">Kontrat koşulları ihlal edilmiş</span>
                                        </div>
                                    </div>
                                    {/* Result */}
                                    <div className="mt-auto rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-2.5">
                                        <span className="text-xs font-bold text-emerald-300">
                                            Kök Neden: Tedarikçi X — Erken faturalama (₺340K)
                                        </span>
                                        <p className="mt-0.5 text-[10px] text-emerald-400/60">
                                            Öneri: Ödeme iade taslağı hazırlandı
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
                                    <ShieldCheck className="h-4 w-4 text-emerald-400" />
                                    <span className="text-xs font-semibold text-zinc-300">Compliance Dashboard</span>
                                </div>
                                <div className="relative z-10 flex flex-1 flex-col gap-3">
                                    {[
                                        { label: "Tenant Isolation", status: "ACTIVE", icon: "🔒" },
                                        { label: "AES-256 Encryption", status: "ACTIVE", icon: "🛡️" },
                                        { label: "SOC 2 Type II", status: "CERTIFIED", icon: "✓" },
                                        { label: "ISO 27001", status: "CERTIFIED", icon: "✓" },
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
                                            Denetim Raporu İndir
                                        </div>
                                        <div className="flex-1 rounded-lg border border-zinc-700 py-2.5 text-center text-xs font-medium text-zinc-400">
                                            RBAC Ayarları
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
                                Audit & Compliance
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                Continuous Audit &amp; Compliance.
                            </h2>
                            <p className="mb-8 max-w-lg text-base leading-relaxed text-zinc-400">
                                Finansal verileriniz ve otonom kararlarınız, ISO 27001 ve SOC 2
                                Type II standartlarındaki izole ağ geçidimizde (Nexus)
                                şifrelenir. Denetim ekipleri (Big 4) için tek tıkla hazır
                                raporlar.
                            </p>
                            <ul className="flex flex-col gap-4">
                                {[
                                    "Tenant Isolation (Müşteri Veri İzolasyonu)",
                                    "AES-256 Şifreleme",
                                    "Rol bazlı yetkilendirme (RBAC)",
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
                                { value: "%100", label: "Karar İzlenebilirliği (Audit Trail)" },
                                { value: "< 1 Sn", label: "Kök Neden (Root-Cause) Tespit Hızı" },
                                { value: "SOC 2 & ISO", label: "Global Güvenlik Standartları" },
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
                            Otonom Kararlara Güvenin, Şeffaflıkla.
                        </h2>
                        <p className="mx-auto mb-10 max-w-xl text-base text-zinc-400">
                            30 dakikalık canlı demo ile şeffaf yapay zeka altyapısını
                            deneyimleyin.
                        </p>
                        <Link
                            href="/request-demo"
                            className="inline-flex h-12 items-center justify-center rounded-lg bg-amber-400 px-10 text-sm font-bold text-black transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(251,191,36,0.25)]"
                        >
                            Demoyu Planla
                        </Link>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
