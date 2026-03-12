"use client";

import { Suspense, useEffect, useState } from "react";
import { ArrowRight, BookOpen, FileText, Newspaper, Rocket, Clock } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Reveal } from "@/src/components/ui/reveal";

import { getBlogs } from "@/src/app/actions/blog";

const categories = ["All", "Customer Stories", "Blog", "Whitepapers", "Product Updates"];

const getCategoryStyles = (category: string) => {
    switch (category) {
        case "Whitepaper": return { color: "text-purple-400", bg: "bg-purple-500/10" };
        case "Blog": return { color: "text-cyan-400", bg: "bg-cyan-500/10" };
        case "Product Update": return { color: "text-emerald-400", bg: "bg-emerald-500/10" };
        case "Customer Story": return { color: "text-amber-400", bg: "bg-amber-500/10" };
        default: return { color: "text-zinc-400", bg: "bg-zinc-500/10" };
    }
};

function ResourcesContent() {
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get("category") || "All";

    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [articles, setArticles] = useState<any[]>([]);
    const [featuredArticle, setFeaturedArticle] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const data = await getBlogs(false);
                const formatted = data.map((blog: any) => {
                    const wordCount = blog.content ? blog.content.split(/\s+/).length : 0;
                    const readTime = Math.max(1, Math.ceil(wordCount / 200));
                    const styles = getCategoryStyles(blog.category);

                    return {
                        id: blog.id,
                        slug: blog.slug,
                        category: blog.category,
                        readTime: `${readTime} min read`,
                        title: blog.title,
                        description: blog.content ? blog.content.substring(0, 120) + '...' : '',
                        color: styles.color,
                        bg: styles.bg,
                    };
                });

                // Find latest case study or whitepaper for featured, fallback to latest post
                const featured = formatted.find((a: any) => a.category === "Customer Story" || a.category === "Whitepaper") || formatted[0];
                setFeaturedArticle(featured || null);
                setArticles(formatted);
            } catch (error) {
                console.error("Failed to fetch public blogs", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    useEffect(() => {
        const cat = searchParams.get("category");
        if (cat && categories.includes(cat)) {
            setActiveCategory(cat);
        }
    }, [searchParams]);

    const filteredArticles =
        activeCategory === "All"
            ? articles
            : articles.filter((a) => {
                if (activeCategory === "Customer Stories") return a.category === "Customer Story";
                if (activeCategory === "Product Updates") return a.category === "Product Update";
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
                            The Knowledge Hub for Autonomous Finance.
                        </h1>
                        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400">
                            Deep dives into AI-powered financial transformation, customer
                            success stories, and explainable AI (XAI) insights.
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
            {featuredArticle && (
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
                                        <div className={`flex h-20 w-20 items-center justify-center rounded-2xl border ${featuredArticle.color.replace('text-', 'border-').replace('400', '500/20')} ${featuredArticle.bg} ${featuredArticle.color}`}>
                                            {featuredArticle.category === "Whitepaper" && <FileText className="h-10 w-10" />}
                                            {featuredArticle.category === "Blog" && <Newspaper className="h-10 w-10" />}
                                            {featuredArticle.category === "Product Update" && <Rocket className="h-10 w-10" />}
                                            {featuredArticle.category === "Customer Story" && <BookOpen className="h-10 w-10" />}
                                        </div>
                                        <span className={`text-xs font-bold uppercase ${featuredArticle.color}/60`}>FEATURED {featuredArticle.category}</span>
                                    </div>
                                </div>

                                {/* Right — Content */}
                                <div className="flex flex-col justify-center p-8 md:p-12">
                                    <span className={`mb-4 inline-block w-fit rounded-md px-3 py-1 text-xs font-bold ${featuredArticle.bg} ${featuredArticle.color}`}>
                                        {featuredArticle.category}
                                    </span>
                                    <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                                        {featuredArticle.title}
                                    </h2>
                                    <p className="mb-8 max-w-lg text-sm leading-relaxed text-zinc-400">
                                        {featuredArticle.description}
                                    </p>
                                    <Link
                                        href={`/resources/${featuredArticle.slug}`}
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#E5F33D] transition-colors hover:text-white"
                                    >
                                        Read {featuredArticle.category}
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>
            )}

            {/* Articles Grid */}
            <section className="px-4 py-16 md:py-24">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {filteredArticles.map((article, index) => (
                            <Reveal key={article.title} direction="up" delay={0.05 + index * 0.08}>
                                <Link href={`/resources/${article.slug}`} className="group block h-full">
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
                                                {article.category === "Product Update" && <Rocket className="h-6 w-6" />}
                                                {article.category === "Customer Story" && <BookOpen className="h-6 w-6" />}
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
                                        The Future of Finance, In Your Inbox.
                                    </h2>
                                    <p className="text-sm text-zinc-400">
                                        Monthly newsletter on autonomous finance, XAI research,
                                        and product updates.
                                    </p>
                                </div>
                                <div className="flex w-full max-w-md gap-3 lg:w-auto">
                                    <input
                                        type="email"
                                        placeholder="cfo@company.com"
                                        className="h-12 flex-1 rounded-lg border border-zinc-700 bg-black/40 px-4 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-[#E5F33D]/50 focus:ring-1 focus:ring-[#E5F33D]/20"
                                    />
                                    <button className="h-12 shrink-0 rounded-lg bg-[#E5F33D] px-6 text-sm font-bold text-black transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(229,243,61,0.2)]">
                                        Subscribe
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

export default function ResourcesPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#0B0C10] flex items-center justify-center text-white">Loading...</div>}>
            <ResourcesContent />
        </Suspense>
    );
}
