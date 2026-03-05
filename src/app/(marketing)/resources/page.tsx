"use client";

import { useState } from "react";
import { Check, ArrowRight, BookOpen, FileText, Newspaper, Rocket, Clock } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/src/components/ui/reveal";

const categories = ["Tümü", "Müşteri Hikayeleri", "Blog", "Whitepapers", "Ürün Güncellemeleri"];

const articles = [
    {
        category: "Whitepaper",
        readTime: "8 min read",
        title: "Dual Scoring Engine: Geleneksel Kredi Skorlamasının Sonu",
        description:
            "Narsent'in çift katmanlı puanlama motorunun, statik kredi skorlarına karşı nasıl %127 daha hassas risk tespiti sağladığını keşfedin.",
        color: "text-purple-400",
        bg: "bg-purple-500/10",
    },
    {
        category: "Blog",
        readTime: "5 min read",
        title: "CFO'lar İçin 13 Haftalık Likidite Rehberi",
        description:
            "Rolling forecast yönteminin modern finans ekiplerinde nasıl uygulandığını ve Excel'den otonom zekaya geçişin adımlarını anlattık.",
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
    },
    {
        category: "Ürün Güncellemesi",
        readTime: "3 min read",
        title: "Horizon AI v2.4: Otonom Root-Cause Analysis",
        description:
            "En son sürümde eklenen kök neden analizi motoru, nakit akışı sapmalarını saniyeler içinde kaynağına kadar izliyor.",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
    },
    {
        category: "Müşteri Hikayesi",
        readTime: "6 min read",
        title: "Perakende Devi X, Tahsilat Süresini %40 Kısalttı",
        description:
            "500+ mağazalık bir perakende zincirinin Narsent Pre-emptive Alerting ile DSO'yu nasıl optimize ettiğini okuyun.",
        color: "text-amber-400",
        bg: "bg-amber-500/10",
    },
    {
        category: "Whitepaper",
        readTime: "10 min read",
        title: "Explainable AI (XAI) Finans Sektöründe Neden Zorunlu?",
        description:
            "Kara kutu modellerinden şeffaf zekaya geçiş: regülatör beklentileri, denetim izleri ve NLP tabanlı karar özetleri.",
        color: "text-purple-400",
        bg: "bg-purple-500/10",
    },
    {
        category: "Blog",
        readTime: "4 min read",
        title: "Multi-Bank Visibility: Tek Ekranda Tüm Bankalar",
        description:
            "Açık bankacılık API'leri ve Swift entegrasyonlarıyla çoklu banka konsolidasyonunun teknik altyapısını inceliyoruz.",
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
    },
];

export default function ResourcesPage() {
    const [activeCategory, setActiveCategory] = useState("Tümü");

    const filteredArticles =
        activeCategory === "Tümü"
            ? articles
            : articles.filter((a) => {
                if (activeCategory === "Müşteri Hikayeleri") return a.category === "Müşteri Hikayesi";
                if (activeCategory === "Ürün Güncellemeleri") return a.category === "Ürün Güncellemesi";
                return a.category === activeCategory;
            });

    return (
        <div className="min-h-screen bg-[#0B0C10]">
            {/* Hero */}
            <section className="px-4 pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="container mx-auto max-w-4xl text-center">
                    <Reveal direction="up">
                        <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
                            Knowledge &amp; Resources
                        </span>
                        <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                            Otonom Finansın Bilgi Merkezi.
                        </h1>
                        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400">
                            Yapay zeka destekli finansal dönüşüm, müşteri başarı hikayeleri
                            ve XAI (Açıklanabilir Yapay Zeka) üzerine derinlemesine analizler.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Category Filter */}
            <section className="px-4 pb-8">
                <div className="container mx-auto max-w-4xl">
                    <Reveal direction="up" delay={0.1}>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${activeCategory === cat
                                            ? "bg-[#E5F33D] text-black shadow-[0_0_20px_rgba(229,243,61,0.15)]"
                                            : "border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Featured Story */}
            <section className="px-4 py-16">
                <div className="container mx-auto max-w-6xl">
                    <Reveal direction="up">
                        <div className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-zinc-800 bg-[#11121A] transition-all duration-300 hover:border-zinc-700 lg:grid-cols-2">
                            {/* Left — Visual */}
                            <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-sky-950/30 via-[#11121A] to-purple-950/20 lg:h-auto">
                                <div
                                    className="pointer-events-none absolute inset-0 opacity-[0.04]"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                        backgroundSize: "24px 24px",
                                    }}
                                />
                                <div className="pointer-events-none absolute h-48 w-48 rounded-full bg-sky-500/10 blur-[80px]" />
                                <div className="relative z-10 flex flex-col items-center gap-3">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10 text-sky-400">
                                        <BookOpen className="h-10 w-10" />
                                    </div>
                                    <span className="text-xs font-bold text-sky-400/60">FEATURED CASE STUDY</span>
                                </div>
                            </div>

                            {/* Right — Content */}
                            <div className="flex flex-col justify-center p-8 md:p-12">
                                <span className="mb-4 inline-block w-fit rounded-md bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-400">
                                    Müşteri Hikayesi
                                </span>
                                <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                                    Global Lojistik Devi, Narsent ile DSO&apos;yu 45 Günden 30
                                    Güne Nasıl Düşürdü?
                                </h2>
                                <p className="mb-8 max-w-lg text-sm leading-relaxed text-zinc-400">
                                    Manuel mutabakat süreçlerini sıfıra indiren ve otonom erken
                                    uyarı sistemiyle tahsilatları güvenceye alan X Lojistik&apos;in
                                    dönüşüm hikayesi.
                                </p>
                                <Link
                                    href="#"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#E5F33D] transition-colors hover:text-white"
                                >
                                    Vaka Analizini Oku
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="px-4 py-16 md:py-24">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {filteredArticles.map((article, index) => (
                            <Reveal key={article.title} direction="up" delay={0.05 + index * 0.08}>
                                <Link href="#" className="group block h-full">
                                    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#11121A] transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
                                        {/* Visual placeholder */}
                                        <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-[#11121A] to-[#0a0a0f]">
                                            <div
                                                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                                                style={{
                                                    backgroundImage:
                                                        "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                                    backgroundSize: "20px 20px",
                                                }}
                                            />
                                            <div className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-xl ${article.bg} ${article.color}`}>
                                                {article.category === "Whitepaper" && <FileText className="h-6 w-6" />}
                                                {article.category === "Blog" && <Newspaper className="h-6 w-6" />}
                                                {article.category === "Ürün Güncellemesi" && <Rocket className="h-6 w-6" />}
                                                {article.category === "Müşteri Hikayesi" && <BookOpen className="h-6 w-6" />}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-1 flex-col p-6">
                                            <div className="mb-3 flex items-center gap-3">
                                                <span className={`text-[10px] font-bold uppercase ${article.color}`}>
                                                    {article.category}
                                                </span>
                                                <span className="flex items-center gap-1 text-[10px] text-zinc-600">
                                                    <Clock className="h-3 w-3" />
                                                    {article.readTime}
                                                </span>
                                            </div>
                                            <h3 className="mb-2 text-base font-bold text-white group-hover:text-[#E5F33D] transition-colors">
                                                {article.title}
                                            </h3>
                                            <p className="mt-auto text-xs leading-relaxed text-zinc-500">
                                                {article.description}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="px-4 py-16 md:py-24">
                <div className="container mx-auto max-w-4xl">
                    <Reveal direction="up">
                        <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-[#11121A] p-8 md:p-16">
                            <div
                                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                                style={{
                                    backgroundImage:
                                        "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                    backgroundSize: "24px 24px",
                                }}
                            />
                            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#E5F33D]/5 blur-[80px]" />

                            <div className="relative z-10 flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
                                <div className="text-center lg:text-left">
                                    <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">
                                        Finansın Geleceği Gelen Kutunuzda.
                                    </h2>
                                    <p className="text-sm text-zinc-400">
                                        Otonom finans, XAI araştırmaları ve ürün güncellemeleri
                                        hakkında aylık bülten.
                                    </p>
                                </div>
                                <div className="flex w-full max-w-md gap-3 lg:w-auto">
                                    <input
                                        type="email"
                                        placeholder="cfo@sirket.com"
                                        className="h-12 flex-1 rounded-lg border border-zinc-700 bg-black/40 px-4 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-[#E5F33D]/50 focus:ring-1 focus:ring-[#E5F33D]/20"
                                    />
                                    <button className="h-12 shrink-0 rounded-lg bg-[#E5F33D] px-6 text-sm font-bold text-black transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(229,243,61,0.2)]">
                                        Abone Ol
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
