import Link from "next/link";
import { Linkedin, Twitter, Github } from "lucide-react";

const columns = [
    {
        title: "PRODUCTS",
        links: [
            { label: "Horizon AI", href: "/products/horizon-ai" },
            { label: "Narsent Nexus", href: "/products/nexus" },
        ],
    },
    {
        title: "COMPANY",
        links: [
            { label: "Pricing", href: "/pricing" },
            { label: "Resources", href: "/resources" },
            { label: "Request Demo", href: "/request-demo" },
        ],
    },
    {
        title: "LEGAL",
        links: [
            { label: "Privacy Policy", href: "/legal/privacy" },
            { label: "Terms of Service", href: "/legal/terms" },
            { label: "GDPR & KVKK", href: "/legal/kvkk" },
            { label: "Cookie Policy", href: "/legal/cookies" },
        ],
    },
];

const socials = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "X (Twitter)" },
    { icon: Github, href: "#", label: "GitHub" },
];

export function Footer() {
    return (
        <footer className="w-full border-t border-zinc-900 bg-[#0B0C10] py-24">
            <div className="container mx-auto px-4 md:px-6">
                {/* ── Main Grid ── */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:grid-cols-5 lg:gap-16">
                    {/* ── Col 1: Brand & Vision (wider) ── */}
                    <div className="md:col-span-2">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-extrabold tracking-[0.15em] text-white">
                                NARSENT
                            </span>
                        </Link>
                        <p className="mt-5 max-w-sm text-sm leading-relaxed text-zinc-500">
                            Don&apos;t leave your cashflow to guesswork — leave
                            it to mathematics. Next-generation autonomous
                            finance architecture.
                        </p>
                    </div>

                    {/* ── Col 2-3: Link Columns ── */}
                    {columns.map((col) => (
                        <div key={col.title}>
                            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white">
                                {col.title}
                            </h4>
                            <ul className="flex flex-col gap-3.5">
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* ── Contact Column ── */}
                    <div>
                        <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white">
                            CONTACT
                        </h4>
                        <a
                            href="mailto:info@narsent.com"
                            className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
                        >
                            info@narsent.com
                        </a>
                        <p className="mt-3 text-xs leading-relaxed text-zinc-500">
                            Teknopark Izmir, Turkey
                        </p>
                    </div>
                </div>

                {/* ── Bottom Bar ── */}
                <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-zinc-900 pt-8 sm:flex-row">
                    <div className="flex flex-col gap-2">
                        <p className="text-sm text-zinc-600">
                            &copy; 2026 Narsent. All rights reserved.
                        </p>
                        <p className="max-w-xl text-xs text-zinc-600">
                            By using this website, you accept our Terms of Service and acknowledge that you have read our Privacy Policy and Cookie Policy.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        {socials.map((social) => {
                            const Icon = social.icon;
                            return (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-zinc-500 transition-all duration-200 hover:border-zinc-600 hover:text-white"
                                >
                                    <Icon className="h-4 w-4" />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}
