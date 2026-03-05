import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";

const footerLinks = {
    products: [
        { label: "Horizon AI", href: "/products/horizon-ai" },
        { label: "Narsent Nexus", href: "/products/nexus" },
        { label: "Cashflow Intelligence", href: "/solutions/cashflow" },
    ],
    company: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Blog", href: "/resources" },
        { label: "Contact", href: "#" },
    ],
    legal: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Security & Trust", href: "/solutions/trust" },
    ],
};

const socials = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
];

export function Footer() {
    return (
        <footer className="w-full border-t border-zinc-800/50 bg-black py-20">
            <div className="container mx-auto px-4 md:px-6">
                {/* Grid */}
                <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:gap-16">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="inline-block">
                            <span className="text-xl font-bold tracking-widest text-white">NARSENT</span>
                        </Link>
                        <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
                            The autonomous reasoning layer for modern finance teams.
                        </p>
                        <div className="mt-6 flex items-center gap-4">
                            {socials.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <Link
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-zinc-500 transition-colors hover:border-zinc-600 hover:text-white"
                                    >
                                        <Icon className="h-4 w-4" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold text-white">Products</h4>
                        <ul className="flex flex-col gap-3">
                            {footerLinks.products.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm text-zinc-400 transition-colors hover:text-[#E5F33D]">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold text-white">Company</h4>
                        <ul className="flex flex-col gap-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm text-zinc-400 transition-colors hover:text-[#E5F33D]">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold text-white">Legal</h4>
                        <ul className="flex flex-col gap-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm text-zinc-400 transition-colors hover:text-[#E5F33D]">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-16 border-t border-zinc-800/50 pt-8">
                    <p className="text-sm text-zinc-600">
                        &copy; 2024 Narsent. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
