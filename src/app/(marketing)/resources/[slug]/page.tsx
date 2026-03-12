import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, FileText, Newspaper, Rocket, BookOpen, ArrowRight } from "lucide-react";
import { Reveal } from "@/src/components/ui/reveal";

import { getBlogBySlug, getBlogs } from "@/src/app/actions/blog";

const categoryStyle: Record<string, { color: string, bg: string }> = {
    Whitepaper: { color: "text-blue-400", bg: "bg-blue-500/15" },
    "Case Study": { color: "text-purple-400", bg: "bg-purple-500/15" },
    Blog: { color: "text-zinc-400", bg: "bg-zinc-700/40" },
    "Product Update": { color: "text-emerald-400", bg: "bg-emerald-500/15" },
    "Customer Story": { color: "text-amber-400", bg: "bg-amber-500/15" }
};

/* ═══ SEO: Dynamic Metadata ═══ */
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const article = await getBlogBySlug(slug);
    if (!article || article.status !== "Published") {
        return { title: "Article Not Found | Narsent" };
    }
    return {
        title: `${article.title} | Narsent Insights`,
        description: article.content.substring(0, 150) + "...",
    };
}

/* ═══ Category Icon Helper ═══ */
function CategoryIcon({ category, className }: { category: string; className?: string }) {
    switch (category) {
        case "Whitepaper":
            return <FileText className={className} />;
        case "Blog":
            return <Newspaper className={className} />;
        case "Product Update":
            return <Rocket className={className} />;
        case "Customer Story":
            return <BookOpen className={className} />;
        default:
            return <FileText className={className} />;
    }
}

/* ═══ Page Component ═══ */
export default async function ArticlePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const article = await getBlogBySlug(slug);
    const relatedLinks = await getBlogs(false);

    /* 404 fallback */
    if (!article || article.status !== "Published") {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center bg-[#0B0C10] px-4 text-center">
                <h1 className="mb-4 text-4xl font-bold text-white">Article Not Found</h1>
                <p className="mb-8 text-zinc-400">
                    The article you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <Link
                    href="/resources"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#E5F33D] hover:underline"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Resources
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0B0C10]">
            {/* Back Button */}
            <div className="container mx-auto max-w-6xl px-4 pt-28 md:pt-36">
                <Reveal direction="left">
                    <Link
                        href="/resources"
                        className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-white"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Resources
                    </Link>
                </Reveal>
            </div>

            {/* Main Grid */}
            <div className="container mx-auto max-w-6xl px-4 py-10 md:py-16">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                    {/* ═══ Left: Article Content (8 cols) ═══ */}
                    <article className="lg:col-span-8">
                        <Reveal direction="up">
                            {/* Badge */}
                            <span
                                className={`mb-6 inline-block rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wider ${categoryStyle[article.category]?.bg || "bg-zinc-700/40"} ${categoryStyle[article.category]?.color || "text-zinc-400"}`}
                            >
                                {article.category}
                            </span>

                            {/* Title */}
                            <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                                {article.title}
                            </h1>

                            {/* Meta */}
                            <div className="mb-12 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
                                <span className="flex items-center gap-1.5">
                                    <Clock className="h-3.5 w-3.5" />
                                    {Math.max(1, Math.ceil(article.content.split(' ').length / 200))} min read
                                </span>
                                <span className="h-1 w-1 rounded-full bg-zinc-700" />
                                <span className="flex items-center gap-1.5">
                                    <Calendar className="h-3.5 w-3.5" />
                                    Published {new Date(article.publishedAt ?? new Date()).toLocaleDateString("en-GB", { day: 'numeric', month: 'short', year: 'numeric' })}
                                </span>
                            </div>
                        </Reveal>

                        <Reveal direction="up" delay={0.1}>
                            <div className="space-y-8 prose prose-invert max-w-none">
                                {article.coverImage && (
                                    <div className="mb-8 overflow-hidden rounded-xl border border-zinc-800">
                                        <img src={article.coverImage} alt={article.title} className="w-full object-cover" />
                                    </div>
                                )}
                                <div className="text-lg leading-relaxed text-zinc-300 whitespace-pre-wrap">
                                    {article.content}
                                </div>
                            </div>
                        </Reveal>
                    </article>

                    {/* ═══ Right: Sticky Sidebar (4 cols) ═══ */}
                    <aside className="lg:col-span-4">
                        <div className="sticky top-24 space-y-6">
                            <Reveal direction="right" delay={0.2}>
                                {/* CTA Card */}
                                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#11121A] p-8">
                                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#E5F33D]/5 blur-[60px]" />
                                    <div className="relative z-10">
                                        <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-zinc-400`}>
                                            <CategoryIcon category={article.category} className="h-6 w-6" />
                                        </div>
                                        <h3 className="mb-2 text-lg font-bold text-white">
                                            Transform Your Cashflow
                                        </h3>
                                        <p className="mb-6 text-sm leading-relaxed text-zinc-400">
                                            Ready to see Narsent in action? Schedule a personalized
                                            demo and discover how autonomous finance can
                                            revolutionize your operations.
                                        </p>
                                        <Link
                                            href="/request-demo"
                                            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#E5F33D] px-6 py-3.5 text-sm font-bold text-black transition-all duration-200 hover:shadow-[0_0_30px_rgba(229,243,61,0.25)]"
                                        >
                                            Schedule a Demo
                                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                        </Link>
                                    </div>
                                </div>
                            </Reveal>

                            <Reveal direction="right" delay={0.3}>
                                {/* Related Content */}
                                <div className="rounded-2xl border border-zinc-800 bg-[#11121A] p-6">
                                    <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-zinc-500">
                                        More to Explore
                                    </h4>
                                    <ul className="space-y-3">
                                        {relatedLinks
                                            .filter((a: any) => a.slug !== slug)
                                            .slice(0, 3)
                                            .map((a: any) => (
                                                <li key={a.id}>
                                                    <Link
                                                        href={`/resources/${a.slug}`}
                                                        className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-white/5"
                                                    >
                                                        <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${categoryStyle[a.category]?.bg || "bg-zinc-700/40"} ${categoryStyle[a.category]?.color || "text-zinc-400"}`}>
                                                            <CategoryIcon category={a.category} className="h-4 w-4" />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">
                                                                {a.title}
                                                            </p>
                                                            <span className="text-[10px] text-zinc-600">{Math.max(1, Math.ceil((a.content?.split(' ').length || 10) / 200))} min read</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </Reveal>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
