"use client";

import { Check, ShieldCheck, Lock, Server, Plug, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/src/components/ui/reveal";

export default function EnterprisePage() {
    return (
        <div className="min-h-screen bg-[#0B0C10]">
            {/* VIP Hero */}
            <section className="px-4 pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="container mx-auto max-w-4xl text-center">
                    <Reveal direction="up">
                        <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
                            Narsent for Enterprise
                        </span>
                        <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                            Küresel Finans Operasyonları İçin Limitsiz Ölçek.
                        </h1>
                        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400">
                            Çok uluslu şirketler, karmaşık holding yapıları ve milyar dolarlık
                            nakit akışları için özel olarak tasarlanmış, izole ve otonom finans
                            mimarisi.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href="/contact-sales"
                                className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-[#E5F33D] px-8 text-sm font-bold text-black transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(229,243,61,0.25)] sm:w-auto"
                            >
                                Özel Satış Ekibiyle Görüş
                            </Link>
                            <Link
                                href="#security"
                                className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-zinc-700 bg-transparent px-8 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:bg-white/5 hover:text-white sm:w-auto"
                            >
                                Güvenlik Standartları
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ═══ ZIGZAG #1: Multi-Entity Consolidation ═══ */}
            <section className="scroll-mt-32 px-4 py-16 md:py-32">
                <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left — Text */}
                    <Reveal direction="left">
                        <div className="flex flex-col">
                            <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
                                Multi-Entity
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                Çoklu Şirket (Multi-Entity) Konsolidasyonu.
                            </h2>
                            <p className="mb-8 max-w-lg text-base leading-relaxed text-zinc-400">
                                Holding yapınızdaki onlarca farklı alt şirketin, farklı para
                                birimlerindeki nakit akışını ve banka verilerini tek bir otonom
                                ekranda saniyeler içinde konsolide edin.
                            </p>
                            <ul className="flex flex-col gap-4">
                                {[
                                    "Çoklu para birimi konsolidasyonu",
                                    "Alt şirket bazlı granüler raporlama",
                                    "Holding seviyesinde anlık dashboard",
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
                                    <Building2 className="h-4 w-4 text-amber-400" />
                                    <span className="text-xs font-semibold text-zinc-300">Holding Consolidation</span>
                                </div>
                                <div className="relative z-10 flex flex-1 flex-col gap-2">
                                    {[
                                        { name: "Narsent Türkiye A.Ş.", currency: "₺", amount: "24.5M", status: "text-emerald-400" },
                                        { name: "Narsent Europe GmbH", currency: "€", amount: "8.2M", status: "text-emerald-400" },
                                        { name: "Narsent US Inc.", currency: "$", amount: "12.1M", status: "text-amber-400" },
                                        { name: "Narsent UK Ltd.", currency: "£", amount: "5.7M", status: "text-emerald-400" },
                                    ].map((entity) => (
                                        <div key={entity.name} className="flex items-center justify-between rounded-lg border border-zinc-800/60 bg-white/[0.02] px-4 py-2.5">
                                            <span className="text-xs font-medium text-zinc-300">{entity.name}</span>
                                            <span className={`text-xs font-bold ${entity.status}`}>{entity.currency}{entity.amount}</span>
                                        </div>
                                    ))}
                                    <div className="mt-auto rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-bold text-amber-300">Konsolide Toplam</span>
                                            <span className="text-sm font-extrabold text-amber-400">$50.5M</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ═══ ZIGZAG #2: Custom ERP (Reversed) ═══ */}
            <section className="scroll-mt-32 bg-[#0a0a0f] px-4 py-16 md:py-32">
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
                                    <Plug className="h-4 w-4 text-purple-400" />
                                    <span className="text-xs font-semibold text-zinc-300">Nexus Adapter Engine</span>
                                </div>
                                <div className="relative z-10 flex flex-1 flex-col gap-2.5">
                                    {[
                                        { from: "SAP ECC 6.0", to: "Nexus API", badge: "LEGACY" },
                                        { from: "Oracle E-BS R12", to: "Nexus API", badge: "ON-PREM" },
                                        { from: "Logo Tiger 3", to: "Nexus API", badge: "LOCAL" },
                                        { from: "Custom REST", to: "Nexus API", badge: "CUSTOM" },
                                    ].map((adapter) => (
                                        <div key={adapter.from} className="flex items-center gap-2 rounded-lg border border-zinc-800/60 bg-white/[0.02] px-3 py-2.5">
                                            <span className="text-xs text-zinc-400 flex-1">{adapter.from}</span>
                                            <span className="text-[10px] text-purple-400">→</span>
                                            <span className="text-xs font-medium text-purple-300 flex-1 text-right">{adapter.to}</span>
                                            <span className="ml-2 rounded bg-purple-500/15 px-1.5 py-0.5 text-[9px] font-bold text-purple-400">{adapter.badge}</span>
                                        </div>
                                    ))}
                                    <div className="mt-auto rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-2.5">
                                        <span className="text-[10px] font-bold text-emerald-400">4/4 Adapter Aktif · Ortalama Latency: 12ms</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Right — Text */}
                    <Reveal direction="right">
                        <div className="flex flex-col">
                            <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-purple-400">
                                Custom Integrations
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                Özel (Custom) ERP ve On-Premise Entegrasyonu.
                            </h2>
                            <p className="mb-8 max-w-lg text-base leading-relaxed text-zinc-400">
                                Sadece modern bulut sistemlere değil; kurum içi (On-Premise)
                                sunucularınızda koşan eski nesil, hantal ERP sistemlerinize de
                                Nexus mimarisiyle özel API köprüleri kuruyoruz.
                            </p>
                            <ul className="flex flex-col gap-4">
                                {[
                                    "SAP, Oracle, Logo ve özel ERP desteği",
                                    "On-Premise sunucu bağlantısı",
                                    "Özel API köprü mühendisliği",
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

            {/* ═══ ZIGZAG #3: Single-Tenant + TAM ═══ */}
            <section className="scroll-mt-32 px-4 py-16 md:py-32">
                <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left — Text */}
                    <Reveal direction="left">
                        <div className="flex flex-col">
                            <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
                                Dedicated Infrastructure
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                Single-Tenant Veri İzolasyonu &amp; Özel TAM.
                            </h2>
                            <p className="mb-8 max-w-lg text-base leading-relaxed text-zinc-400">
                                Büyük işlem hacimleriniz için paylaşımlı sunucuları unutun. Size
                                özel tahsis edilmiş (Dedicated) bulut mimarisi ve 7/24 yanınızda
                                olan Teknik Hesap Yöneticiniz (TAM) ile limitsiz ölçeklenin.
                            </p>
                            <ul className="flex flex-col gap-4">
                                {[
                                    "%99.99 Uptime SLA garantisi",
                                    "Dedicated Teknik Hesap Yöneticisi (TAM)",
                                    "Özel bulut ortamı (Private Cloud)",
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
                                    <Server className="h-4 w-4 text-emerald-400" />
                                    <span className="text-xs font-semibold text-zinc-300">Dedicated Infrastructure</span>
                                    <span className="ml-auto rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                                        99.99% UP
                                    </span>
                                </div>
                                <div className="relative z-10 flex flex-1 flex-col gap-3">
                                    <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3">
                                        <span className="text-xs font-bold text-emerald-300">Tenant: Enterprise-TR-001</span>
                                        <p className="mt-1 text-[10px] text-zinc-500">Region: eu-west-1 · vCPU: 32 · RAM: 128GB</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="rounded-lg border border-zinc-800/60 bg-white/[0.02] p-3 text-center">
                                            <span className="block text-lg font-extrabold text-white">99.99%</span>
                                            <span className="text-[10px] text-zinc-500">Uptime (12 Ay)</span>
                                        </div>
                                        <div className="rounded-lg border border-zinc-800/60 bg-white/[0.02] p-3 text-center">
                                            <span className="block text-lg font-extrabold text-white">0</span>
                                            <span className="text-[10px] text-zinc-500">Plansız Kesinti</span>
                                        </div>
                                    </div>
                                    <div className="mt-auto rounded-xl border border-zinc-800/60 bg-white/[0.02] px-4 py-3">
                                        <div className="flex items-center gap-2">
                                            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                                            <span className="text-[10px] font-medium text-zinc-400">TAM: Ayşe K. · Son yanıt: 4 dk önce</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ═══ Security: Honest Architecture ═══ */}
            <section id="security" className="scroll-mt-32 bg-[#0a0a0f] px-4 py-16 md:py-32">
                <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left — Text */}
                    <Reveal direction="left">
                        <div className="flex flex-col">
                            <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
                                Architectural Security
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                Banka Seviyesinde Mimari Güvenlik.
                            </h2>
                            <p className="mb-8 max-w-lg text-base leading-relaxed text-zinc-400">
                                Sertifikalara değil, aşılamaz bir matematiksel izolasyona
                                inanıyoruz. Narsent Nexus ağ geçidinden geçen finansal
                                verileriniz uçtan uca şifrelenir. En önemlisi: Finansal
                                verileriniz KESİNLİKLE genel yapay zeka (LLM) modellerini
                                eğitmek için kullanılmaz, sadece size özel kalır.
                            </p>
                            <ul className="flex flex-col gap-4">
                                {[
                                    "Zero-Data Retention (Sıfır Veri Tutma)",
                                    "Uçtan Uca AES-256 Şifreleme",
                                    "LLM Eğitim İzolasyonu",
                                    "Granüler Rol Bazlı Erişim (RBAC)",
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

                    {/* Right — Nexus Data Pipeline Visual */}
                    <Reveal direction="right">
                        <div className="relative flex items-center justify-center">
                            <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-amber-400/5 blur-[100px]" />
                            <div className="relative flex h-96 w-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#11121A] p-6 backdrop-blur-xl">
                                <div
                                    className="pointer-events-none absolute inset-0 opacity-[0.03]"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                        backgroundSize: "24px 24px",
                                    }}
                                />
                                <div className="relative z-10 mb-5 flex items-center gap-2">
                                    <ShieldCheck className="h-4 w-4 text-amber-400" />
                                    <span className="text-xs font-semibold text-zinc-300">Nexus Data Pipeline</span>
                                    <span className="ml-auto rounded-md bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold text-amber-400">
                                        ENCRYPTED
                                    </span>
                                </div>
                                <div className="relative z-10 flex flex-1 flex-col gap-2.5">
                                    {/* Pipeline stages */}
                                    <div className="rounded-lg border border-zinc-800/60 bg-white/[0.02] px-4 py-2.5">
                                        <div className="flex items-center gap-2">
                                            <Lock className="h-3 w-3 text-amber-400" />
                                            <span className="text-[10px] font-bold text-zinc-400">STAGE 1: Veri Girişi</span>
                                        </div>
                                        <p className="mt-1 text-[10px] text-zinc-500">ERP / Banka API → AES-256 şifreleme</p>
                                    </div>
                                    <div className="flex justify-center text-amber-400/40"><span className="text-xs">↓ encrypted ↓</span></div>
                                    <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-2.5">
                                        <div className="flex items-center gap-2">
                                            <ShieldCheck className="h-3 w-3 text-amber-400" />
                                            <span className="text-[10px] font-bold text-amber-300">STAGE 2: Nexus İzole Ağ Geçidi</span>
                                        </div>
                                        <p className="mt-1 text-[10px] text-zinc-500">Single-tenant processing · Zero data retention</p>
                                    </div>
                                    <div className="flex justify-center text-amber-400/40"><span className="text-xs">↓ isolated ↓</span></div>
                                    <div className="rounded-lg border border-zinc-800/60 bg-white/[0.02] px-4 py-2.5">
                                        <div className="flex items-center gap-2">
                                            <Lock className="h-3 w-3 text-purple-400" />
                                            <span className="text-[10px] font-bold text-zinc-400">STAGE 3: Horizon AI</span>
                                        </div>
                                        <p className="mt-1 text-[10px] text-zinc-500">Otonom reasoning · LLM eğitimine veri sızdırmaz</p>
                                    </div>
                                    <div className="mt-auto rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-2">
                                        <span className="text-[10px] font-bold text-emerald-400">
                                            ✓ Pipeline güvenli · 0 veri sızıntısı · %100 izolasyon aktif
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Enterprise CTA */}
            <section className="px-4 py-16 md:py-24">
                <div className="container mx-auto max-w-3xl text-center">
                    <Reveal scale>
                        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                            Küresel Ölçeğe Hazır mısınız?
                        </h2>
                        <p className="mx-auto mb-10 max-w-xl text-base text-zinc-400">
                            Holding ve çok uluslu yapılar için özelleştirilmiş demo ve
                            teknik mimari sunumu talep edin.
                        </p>
                        <Link
                            href="/contact-sales"
                            className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-[#E5F33D] px-12 text-sm font-bold text-black transition-all duration-200 hover:scale-105 hover:shadow-[0_0_40px_rgba(229,243,61,0.25)]"
                        >
                            Özel Demo Talep Et
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
