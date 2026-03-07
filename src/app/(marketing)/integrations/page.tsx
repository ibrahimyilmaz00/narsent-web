"use client";

import { useState, useMemo } from "react";
import {
    Search,
    ExternalLink,
    FileText,
    Building2,
    Landmark,
    Wrench,
    Workflow,
    LayoutGrid,
    Plug,
    ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/src/components/ui/reveal";

type Category = "all" | "erp" | "banking" | "local" | "automations";

interface Integration {
    name: string;
    category: Category;
    tag: "Official" | "Enterprise" | "Partner" | "Universal" | "Standard" | "Global";
    description: string;
    color: string;
    abbr: string;
}

const integrations: Integration[] = [
    // ERPs
    {
        name: "SAP S/4HANA",
        category: "erp",
        tag: "Enterprise",
        description: "Full bidirectional sync with SAP financial modules including FI, CO, and MM. Real-time journal entry extraction.",
        color: "from-blue-500/20 to-blue-600/5",
        abbr: "SAP",
    },
    {
        name: "Oracle NetSuite",
        category: "erp",
        tag: "Official",
        description: "Native SuiteScript-based connector for GL, AP/AR, and cash management modules with sub-minute latency.",
        color: "from-red-500/20 to-red-600/5",
        abbr: "ORA",
    },
    {
        name: "Microsoft Dynamics 365",
        category: "erp",
        tag: "Official",
        description: "Azure-native integration with Dynamics Finance & Operations. Supports multi-entity and multi-currency setups.",
        color: "from-sky-500/20 to-sky-600/5",
        abbr: "D365",
    },
    {
        name: "Logo Tiger",
        category: "erp",
        tag: "Partner",
        description: "Deep integration with Logo Tiger ERP for Turkish market. Covers e-Invoice, e-Ledger, and full GL sync.",
        color: "from-orange-500/20 to-orange-600/5",
        abbr: "LGO",
    },
    // Banking
    {
        name: "Open Banking API",
        category: "banking",
        tag: "Universal",
        description: "Connect securely to 50+ local and international banks via PSD2-compliant Open Banking APIs. Real-time cash positioning.",
        color: "from-emerald-500/20 to-emerald-600/5",
        abbr: "OB",
    },
    {
        name: "MT940 & CAMT Parser",
        category: "banking",
        tag: "Standard",
        description: "Automated processing of end-of-day bank statements. Intelligent parsing of MT940, CAMT.053, and generic CSV formats.",
        color: "from-blue-500/20 to-blue-600/5",
        abbr: "MT",
    },
    {
        name: "SWIFT & SEPA Gateway",
        category: "banking",
        tag: "Global",
        description: "Track international wire transfers and SEPA payments seamlessly with global banking network compatibility.",
        color: "from-purple-500/20 to-purple-600/5",
        abbr: "SW",
    },
    // Global Tools
    {
        name: "Stripe",
        category: "automations",
        tag: "Official",
        description: "Automatic reconciliation of Stripe payouts, refunds, and disputes with your ERP general ledger.",
        color: "from-indigo-500/20 to-indigo-600/5",
        abbr: "STR",
    },
    {
        name: "QuickBooks",
        category: "local",
        tag: "Official",
        description: "Cloud-native sync for small to mid-market financials. Covers chart of accounts, invoices, and bank feeds.",
        color: "from-emerald-500/20 to-emerald-600/5",
        abbr: "QB",
    },
    {
        name: "Xero",
        category: "local",
        tag: "Official",
        description: "OAuth 2.0 secured integration for real-time P\u0026L, balance sheet, and cashflow statement extraction.",
        color: "from-sky-500/20 to-sky-600/5",
        abbr: "XRO",
    },
    {
        name: "Zapier",
        category: "automations",
        tag: "Partner",
        description: "Connect Narsent to 5,000+ apps. Trigger financial workflows from CRM events, form submissions, and more.",
        color: "from-orange-500/20 to-orange-600/5",
        abbr: "ZAP",
    },
];

const categories: { key: Category; label: string; icon: React.ElementType }[] = [
    { key: "all", label: "All", icon: LayoutGrid },
    { key: "erp", label: "ERP Systems", icon: Building2 },
    { key: "banking", label: "Banking", icon: Landmark },
    { key: "local", label: "Local Tools", icon: Wrench },
    { key: "automations", label: "Automations", icon: Workflow },
];

function IntegrationCard({ integration }: { integration: Integration }) {
    const tagColors: Record<string, string> = {
        Enterprise: "border-[#E5F33D]/30 bg-[#E5F33D]/10 text-[#E5F33D]",
        Official: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
        Universal: "border-sky-500/30 bg-sky-500/10 text-sky-400",
        Global: "border-indigo-500/30 bg-indigo-500/10 text-indigo-400",
        Standard: "border-amber-500/30 bg-amber-500/10 text-amber-400",
        Partner: "border-zinc-600/30 bg-zinc-600/10 text-zinc-400",
    };
    const tagColor = tagColors[integration.tag] || tagColors.Partner;

    return (
        <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#11121A] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#E5F33D]/30 hover:shadow-[0_0_40px_rgba(229,243,61,0.04)]">
            {/* Glow */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/[0.02] blur-[60px] transition-all duration-500 group-hover:bg-[#E5F33D]/5" />

            <div className="relative z-10 flex h-full flex-col">
                {/* Top Row: Logo + Tag */}
                <div className="mb-5 flex items-start justify-between">
                    {/* Abstract Logo */}
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${integration.color} border border-white/5 text-sm font-black text-white`}>
                        {integration.abbr}
                    </div>
                    <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${tagColor}`}>
                        {integration.tag}
                    </span>
                </div>

                {/* Name */}
                <h3 className="mb-2 text-lg font-bold text-white">{integration.name}</h3>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-zinc-400">
                    {integration.description}
                </p>

                {/* Actions */}
                <div className="mt-auto">
                    <button className="inline-flex h-9 w-full items-center justify-center rounded-lg bg-[#E5F33D]/10 px-4 text-xs font-semibold text-[#E5F33D] transition-colors hover:bg-[#E5F33D]/20">
                        <Plug className="mr-1.5 h-3 w-3" />
                        Connect
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function IntegrationsPage() {
    const [activeCategory, setActiveCategory] = useState<Category>("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredIntegrations = useMemo(() => {
        return integrations.filter((integration) => {
            const matchesCategory =
                activeCategory === "all" || integration.category === activeCategory;
            const matchesSearch =
                searchQuery === "" ||
                integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                integration.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    return (
        <div className="min-h-screen bg-[#0B0C10]">
            {/* Hero */}
            <section className="px-4 pt-32 pb-8 md:pt-40 md:pb-12">
                <div className="container mx-auto max-w-4xl text-center">
                    <Reveal direction="up">
                        <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#E5F33D]">
                            Integration Hub
                        </span>
                        <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                            Connect Your Entire Financial Stack.
                        </h1>
                        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400">
                            Seamlessly integrate Narsent with your existing ERPs, banks, and
                            local financial tools. Zero manual mapping, total autonomy.
                        </p>

                        {/* Search Bar */}
                        <div className="mx-auto max-w-xl">
                            <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-[#11121A] px-5 py-3.5 transition-colors focus-within:border-[#E5F33D]/40 focus-within:shadow-[0_0_20px_rgba(229,243,61,0.05)]">
                                <Search className="h-5 w-5 shrink-0 text-zinc-500" />
                                <input
                                    type="text"
                                    placeholder="Search 50+ integrations..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-transparent text-sm text-white placeholder:text-zinc-500 focus:outline-none"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="shrink-0 text-xs text-zinc-500 hover:text-zinc-300"
                                    >
                                        Clear
                                    </button>
                                )}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Category Tabs */}
            <section className="px-4 pb-12 pt-4">
                <div className="container mx-auto max-w-4xl">
                    <Reveal direction="up" delay={0.15}>
                        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                            {categories.map((cat) => {
                                const Icon = cat.icon;
                                const isActive = activeCategory === cat.key;
                                return (
                                    <button
                                        key={cat.key}
                                        onClick={() => setActiveCategory(cat.key)}
                                        className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold transition-all duration-200 ${isActive
                                            ? "border border-[#E5F33D]/40 bg-[#E5F33D]/10 text-[#E5F33D] shadow-[0_0_15px_rgba(229,243,61,0.06)]"
                                            : "border border-zinc-800 bg-[#11121A] text-zinc-400 hover:border-zinc-700 hover:text-zinc-300"
                                            }`}
                                    >
                                        <Icon className="h-3.5 w-3.5" />
                                        {cat.label}
                                    </button>
                                );
                            })}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Integration Grid */}
            <section className="px-4 pb-16 md:pb-24">
                <div className="container mx-auto max-w-6xl">
                    {filteredIntegrations.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredIntegrations.map((integration, index) => (
                                <Reveal key={integration.name} direction="up" delay={0.05 + index * 0.05}>
                                    <IntegrationCard integration={integration} />
                                </Reveal>
                            ))}
                        </div>
                    ) : (
                        <Reveal direction="up">
                            <div className="flex flex-col items-center justify-center rounded-2xl border border-zinc-800 bg-[#11121A] px-8 py-20 text-center">
                                <Search className="mb-4 h-10 w-10 text-zinc-700" />
                                <h3 className="mb-2 text-lg font-semibold text-zinc-300">
                                    No integrations found
                                </h3>
                                <p className="mb-6 max-w-sm text-sm text-zinc-500">
                                    Try adjusting your search or browse a different category.
                                </p>
                                <button
                                    onClick={() => {
                                        setSearchQuery("");
                                        setActiveCategory("all");
                                    }}
                                    className="text-xs font-semibold text-[#E5F33D] hover:underline"
                                >
                                    Clear filters
                                </button>
                            </div>
                        </Reveal>
                    )}
                </div>
            </section>

            {/* Metrics Bar */}
            <section
                className="px-4 py-16 md:py-24"
                style={{
                    background:
                        "radial-gradient(ellipse at center, rgba(67, 56, 202, 0.06) 0%, #0B0C10 60%, #0B0C10 100%)",
                }}
            >
                <div className="container mx-auto max-w-5xl">
                    <Reveal direction="up">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                            {[
                                { value: "50+", label: "Supported Integrations" },
                                { value: "<50ms", label: "Average Sync Latency" },
                                { value: "99.99%", label: "Uptime SLA" },
                                { value: "0", label: "Data Breaches. Ever." },
                            ].map((metric) => (
                                <div
                                    key={metric.label}
                                    className="flex flex-col items-center rounded-2xl border border-zinc-800/50 bg-white/[0.02] p-8 text-center backdrop-blur-sm"
                                >
                                    <span className="mb-2 text-3xl font-extrabold text-[#E5F33D] md:text-4xl">
                                        {metric.value}
                                    </span>
                                    <span className="text-xs text-zinc-400">{metric.label}</span>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Request a Connector CTA */}
            <section className="px-4 py-16 md:py-24">
                <div className="container mx-auto max-w-3xl">
                    <Reveal scale>
                        <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-[#11121A] p-10 text-center backdrop-blur-xl md:p-16">
                            <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[#E5F33D]/5 blur-[80px]" />
                            <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-indigo-500/5 blur-[80px]" />
                            <div
                                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                                style={{
                                    backgroundImage:
                                        "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                    backgroundSize: "24px 24px",
                                }}
                            />

                            <div className="relative z-10">
                                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E5F33D]/10 text-[#E5F33D]">
                                    <ExternalLink className="h-7 w-7" />
                                </div>
                                <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                                    Don&apos;t See Your System?
                                </h2>
                                <p className="mx-auto mb-8 max-w-lg text-base text-zinc-400">
                                    We&apos;re constantly expanding our integration ecosystem. Request
                                    a custom connector and our engineering team will scope it
                                    within 48 hours.
                                </p>
                                <Link
                                    href="/request-demo"
                                    className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#E5F33D] px-8 text-sm font-bold text-black transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(229,243,61,0.25)]"
                                >
                                    Request Integration
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                </Link>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
