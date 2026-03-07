import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, FileText, Newspaper, Rocket, BookOpen, ArrowRight } from "lucide-react";
import { Reveal } from "@/src/components/ui/reveal";

/* ═══ Mock Article Database ═══ */
const articlesDb: Record<
    string,
    {
        title: string;
        category: string;
        readTime: string;
        date: string;
        color: string;
        bg: string;
        excerpt: string;
        content: {
            intro: string;
            sections: { heading: string; body: string }[];
            blockquote: string;
            conclusion: string;
        };
    }
> = {
    "dual-scoring-engine": {
        title: "Dual Scoring Engine: The End of Traditional Credit Scoring",
        category: "Whitepaper",
        readTime: "8 min read",
        date: "March 2026",
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        excerpt:
            "Discover how Narsent's dual-layer scoring engine delivers 127% more precise risk detection compared to static credit scores.",
        content: {
            intro:
                "Traditional credit scoring models were designed for a pre-digital era. They rely on lagging indicators — historical payment data, static financial ratios, and annual filings — to assess risk. In a world where cashflow volatility can shift within hours, these models are dangerously outdated. Narsent's Dual Scoring Engine represents a paradigm shift: a real-time, dual-layer approach that combines behavioral analytics with deterministic financial signals.",
            sections: [
                {
                    heading: "Layer 1: Deterministic Financial Scoring",
                    body: "The first layer analyzes hard financial data — bank balances, invoice aging, payment velocity, and ERP-derived ratios — to produce a baseline risk score. This layer operates on structured data ingested via Nexus, ensuring sub-second processing across multi-entity corporate structures. Unlike traditional models, it recalculates continuously, not quarterly.",
                },
                {
                    heading: "Layer 2: Behavioral & Contextual Intelligence",
                    body: "The second layer employs machine learning models trained on transactional patterns, communication sentiment (NLP-based), and macroeconomic signals. It detects early warning signs — delayed email responses from AR departments, shifts in ordering patterns, or regional economic stress — that deterministic models miss entirely.",
                },
                {
                    heading: "Fusion & Explainability",
                    body: "Both layers are fused using a weighted ensemble method, with each score accompanied by a natural-language explanation (XAI). Every risk assessment includes a plain-English summary of why the score was assigned, making it audit-ready and regulator-friendly from day one.",
                },
            ],
            blockquote:
                "We don't just tell you *what* the risk score is — we tell you *why*. That's the difference between a black box and a decision-support system.",
            conclusion:
                "The Dual Scoring Engine is not an incremental improvement; it's a foundational rethinking of credit intelligence for the autonomous finance era. By combining real-time financial signals with behavioral context and explainable outputs, Narsent delivers risk visibility that legacy systems simply cannot match.",
        },
    },
    "13-week-liquidity-playbook": {
        title: "13-Week Liquidity Playbook for CFOs",
        category: "Blog",
        readTime: "5 min read",
        date: "March 2026",
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
        excerpt:
            "How rolling forecast methodology is applied in modern finance teams and the steps from Excel to autonomous intelligence.",
        content: {
            intro:
                "The 13-week cashflow forecast is the gold standard of liquidity management. Yet the vast majority of finance teams still build it in spreadsheets — manually, weekly, with error rates that would be unacceptable in any engineering discipline. This playbook outlines the journey from static Excel models to an autonomous, AI-driven forecasting pipeline.",
            sections: [
                {
                    heading: "Week 1–4: The Foundation — Data Consolidation",
                    body: "Before any forecasting can begin, you need a single source of truth. This means connecting all bank accounts, ERPs, and payment platforms into a unified data layer. Narsent's Nexus connector handles this automatically, normalizing formats from SAP, Oracle, Dynamics, and 50+ banking APIs into a canonical schema.",
                },
                {
                    heading: "Week 5–8: Pattern Recognition & Baseline",
                    body: "With clean, consolidated data, Horizon AI begins identifying recurring patterns — payroll cycles, seasonal revenue fluctuations, vendor payment terms, and tax obligations. The system establishes a rolling baseline forecast that updates daily, not weekly.",
                },
                {
                    heading: "Week 9–13: Scenario Modeling & Alerts",
                    body: "The final phase activates predictive scenario modeling. CFOs can simulate 'what-if' conditions — delayed receivables, accelerated capex, FX shocks — and see the impact on liquidity in real-time. Automated alerts trigger when projected balances breach configurable thresholds.",
                },
            ],
            blockquote:
                "The best 13-week forecast is the one you never have to build manually. Let the machine handle the arithmetic; you handle the strategy.",
            conclusion:
                "Moving from Excel to autonomous forecasting isn't a technology upgrade — it's an operational transformation. The CFOs who make this shift gain not just accuracy, but time: time to focus on strategic decisions instead of data wrangling.",
        },
    },
    "horizon-ai-v2-4": {
        title: "Horizon AI v2.4: Autonomous Root-Cause Analysis",
        category: "Product Update",
        readTime: "3 min read",
        date: "March 2026",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        excerpt:
            "The latest release introduces a root-cause analysis engine that traces cashflow deviations to their source in seconds.",
        content: {
            intro:
                "We're excited to announce Horizon AI v2.4 — a major release focused on autonomous root-cause analysis for cashflow deviations. When your forecast diverges from reality, Horizon AI now tells you exactly why, down to the specific invoice, customer, or operational event that caused the variance.",
            sections: [
                {
                    heading: "What's New: Root-Cause Tracing",
                    body: "The new engine automatically decomposes any cashflow deviation into its contributing factors. If Tuesday's inflow was $120K below forecast, v2.4 will surface the exact invoices that were delayed, the customers responsible, and the historical probability of similar delays — all within seconds, with zero manual investigation.",
                },
                {
                    heading: "Improved Alert Intelligence",
                    body: "Alerts are now context-aware. Instead of simple threshold breaches, Horizon AI v2.4 considers the magnitude, frequency, and business impact of deviations before triggering notifications. This reduces alert fatigue by an estimated 60% while ensuring critical issues surface immediately.",
                },
            ],
            blockquote:
                "The goal of v2.4 is simple: when something deviates, you should know why before you even ask the question.",
            conclusion:
                "Horizon AI v2.4 is available now for all Enterprise customers. Reach out to your account manager or schedule a demo to see the new root-cause engine in action.",
        },
    },
    "retail-giant-x-case-study": {
        title: "Retail Giant X Cut Collection Times by 40%",
        category: "Customer Story",
        readTime: "6 min read",
        date: "February 2026",
        color: "text-amber-400",
        bg: "bg-amber-500/10",
        excerpt:
            "Read how a 500+ store retail chain optimized DSO using Narsent Pre-emptive Alerting.",
        content: {
            intro:
                "When a 500+ store retail chain approached Narsent, their average days-sales-outstanding (DSO) stood at 62 days. Manual collection processes, fragmented ERP data across subsidiaries, and zero predictive capability meant cash was trapped in the receivables pipeline for weeks longer than necessary.",
            sections: [
                {
                    heading: "The Challenge: Fragmented Data, Slow Collections",
                    body: "The retailer operated three separate ERP instances across regions, each with different chart-of-accounts structures. AR teams worked in silos, relying on aging reports exported to Excel. By the time a delayed payment was flagged, it was already 30+ days overdue.",
                },
                {
                    heading: "The Solution: Nexus + Horizon AI",
                    body: "Narsent's Nexus connector unified all three ERP instances into a single financial data layer within 48 hours. Horizon AI then applied its dual scoring engine to every open receivable, assigning real-time risk scores and triggering pre-emptive alerts — before invoices became overdue.",
                },
                {
                    heading: "The Results: DSO from 62 to 37 Days",
                    body: "Within 90 days of deployment, the retailer reduced DSO from 62 to 37 days — a 40% improvement. The pre-emptive alerting system identified at-risk invoices an average of 11 days before they would have been flagged by traditional aging reports.",
                },
            ],
            blockquote:
                "We went from chasing overdue invoices to preventing them. That's not incremental — that's transformational.",
            conclusion:
                "This case study demonstrates the power of combining unified data infrastructure (Nexus) with predictive intelligence (Horizon AI). The result: faster collections, lower risk, and a finance team that operates proactively instead of reactively.",
        },
    },
    "explainable-ai-in-finance": {
        title: "Why Explainable AI (XAI) Is Essential in Finance",
        category: "Whitepaper",
        readTime: "10 min read",
        date: "January 2026",
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        excerpt:
            "From black-box models to transparent intelligence: regulatory expectations, audit trails, and NLP-based decision summaries.",
        content: {
            intro:
                "The promise of AI in finance is immense: faster decisions, better risk detection, automated operations. But there's a critical gap between what AI can do and what regulators, auditors, and boards will accept. That gap is explainability. This paper argues that XAI — Explainable Artificial Intelligence — is not a nice-to-have feature; it is a regulatory and operational necessity.",
            sections: [
                {
                    heading: "The Regulatory Imperative",
                    body: "Financial regulators worldwide are converging on a clear principle: if an AI system makes or influences a financial decision, the logic behind that decision must be auditable. The EU AI Act, OCC guidelines, and MAS frameworks all require 'meaningful explanations' for automated decisions affecting credit, risk, and capital allocation.",
                },
                {
                    heading: "Beyond Compliance: Operational Trust",
                    body: "Explainability isn't just about satisfying regulators — it's about building trust with the humans who rely on AI outputs. A CFO who receives a risk alert needs to understand *why* the alert was triggered to take appropriate action. A black-box score of '72' is useless without context. Narsent's XAI layer generates plain-English summaries for every prediction, score, and recommendation.",
                },
                {
                    heading: "NLP-Based Decision Summaries",
                    body: "Narsent uses natural language processing to convert model outputs into structured, human-readable explanations. Instead of presenting feature importance weights, the system produces summaries like: 'This customer's risk score increased by 15 points due to a 23% decline in payment velocity over the last 30 days, combined with a regional credit environment downgrade.'",
                },
            ],
            blockquote:
                "An AI system that cannot explain its decisions is an AI system that cannot be trusted. In finance, trust is not optional — it is the product.",
            conclusion:
                "As financial AI moves from experimentation to production, explainability will separate viable systems from regulatory liabilities. Narsent's commitment to XAI ensures that every autonomous decision is transparent, auditable, and trustworthy.",
        },
    },
    "multi-bank-visibility": {
        title: "Multi-Bank Visibility: All Banks on One Screen",
        category: "Blog",
        readTime: "4 min read",
        date: "March 2026",
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
        excerpt:
            "Exploring the technical infrastructure of multi-bank consolidation through open banking APIs and Swift integrations.",
        content: {
            intro:
                "For any company operating across multiple banks — which is virtually every mid-market and enterprise organization — the daily reality is fragmented: different portals, different file formats, different reporting cadences. Multi-bank visibility means collapsing all of that into a single, real-time view. Here's how Narsent makes it work.",
            sections: [
                {
                    heading: "The Multi-Bank Problem",
                    body: "A typical mid-market company has 3-7 banking relationships. Each bank provides data in its own format (MT940, CAMT.053, proprietary CSV), through its own portal, on its own schedule. Treasury teams spend hours each day downloading, normalizing, and reconciling this data manually.",
                },
                {
                    heading: "The Narsent Approach: Universal Connectors",
                    body: "Narsent's banking integration layer supports PSD2/Open Banking APIs, SWIFT MT/MX message parsing, and direct file ingestion. All data is normalized into a canonical schema within seconds of receipt, regardless of source bank or format. The result: a single cash position dashboard that updates in real-time across all banking relationships.",
                },
            ],
            blockquote:
                "Your banking infrastructure is a patchwork. Your cash visibility shouldn't be.",
            conclusion:
                "Multi-bank visibility is not a luxury — it's a prerequisite for effective treasury management. With Narsent, the complexity of managing multiple banking relationships disappears behind a single, real-time interface.",
        },
    },
};

/* ═══ SEO: Dynamic Metadata ═══ */
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const article = articlesDb[slug];
    if (!article) {
        return { title: "Article Not Found | Narsent" };
    }
    return {
        title: `${article.title} | Narsent Insights`,
        description: article.excerpt,
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
    const article = articlesDb[slug];

    /* 404 fallback */
    if (!article) {
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
                                className={`mb-6 inline-block rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wider ${article.bg} ${article.color}`}
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
                                    {article.readTime}
                                </span>
                                <span className="h-1 w-1 rounded-full bg-zinc-700" />
                                <span className="flex items-center gap-1.5">
                                    <Calendar className="h-3.5 w-3.5" />
                                    Published {article.date}
                                </span>
                            </div>
                        </Reveal>

                        {/* Prose Content */}
                        <Reveal direction="up" delay={0.1}>
                            <div className="space-y-8">
                                {/* Intro */}
                                <p className="text-lg leading-relaxed text-zinc-300">
                                    {article.content.intro}
                                </p>

                                {/* Sections */}
                                {article.content.sections.map((section, i) => (
                                    <div key={i} className="space-y-4">
                                        <h2 className="text-xl font-bold text-white md:text-2xl">
                                            {section.heading}
                                        </h2>
                                        <p className="text-base leading-relaxed text-zinc-400">
                                            {section.body}
                                        </p>
                                    </div>
                                ))}

                                {/* Blockquote */}
                                <blockquote className="relative rounded-xl border-l-4 border-[#E5F33D] bg-[#E5F33D]/5 px-6 py-5 md:px-8 md:py-6">
                                    <p className="text-base italic leading-relaxed text-zinc-300">
                                        &ldquo;{article.content.blockquote}&rdquo;
                                    </p>
                                </blockquote>

                                {/* Conclusion */}
                                <p className="text-base leading-relaxed text-zinc-400">
                                    {article.content.conclusion}
                                </p>
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
                                        <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${article.bg} ${article.color}`}>
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
                                        {Object.entries(articlesDb)
                                            .filter(([key]) => key !== slug)
                                            .slice(0, 3)
                                            .map(([key, a]) => (
                                                <li key={key}>
                                                    <Link
                                                        href={`/resources/${key}`}
                                                        className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-white/5"
                                                    >
                                                        <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${a.bg} ${a.color}`}>
                                                            <CategoryIcon category={a.category} className="h-4 w-4" />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">
                                                                {a.title}
                                                            </p>
                                                            <span className="text-[10px] text-zinc-600">{a.readTime}</span>
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
