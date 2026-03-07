"use client";

import * as React from "react";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

// Reusable menu item component
const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 focus:bg-white/5 text-zinc-400 hover:text-white",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium text-white">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-zinc-500">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";

export function MegaMenu() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-[#0B0C10]">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold tracking-widest text-white">NARSENT</span>
                    </Link>
                </div>

                {/* Center Menu */}
                <div className="hidden md:flex flex-1 justify-center">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-2">
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-zinc-400 hover:text-white hover:bg-white/5 data-[state=open]:bg-white/5 data-[state=open]:text-white focus:bg-white/5 focus:text-white">
                                    Products
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="border-zinc-800 bg-[#0B0C10]">
                                    <div className="flex w-[850px] max-w-full">

                                        {/* Left Section (3 Columns) */}
                                        <div className="grid flex-1 grid-cols-3 gap-4 p-6">

                                            {/* Column 1 */}
                                            <div className="flex flex-col space-y-4">
                                                <Link href="/solutions/cashflow" className="text-sm font-semibold tracking-tight text-white uppercase opacity-80 hover:text-[#E5F33D] transition-colors">Cashflow & Liquidity</Link>
                                                <ul className="flex flex-col space-y-1">
                                                    <li>
                                                        <Link href="/solutions/cashflow#forecasts" className="block rounded-md px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white">
                                                            Predictive Rolling Forecasts
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/solutions/cashflow#multi-bank" className="block rounded-md px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white">
                                                            Inflation (IAS 29) Calibration
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/solutions/cashflow#scenario" className="block rounded-md px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white">
                                                            Multi-Source Consolidation
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Column 2 */}
                                            <div className="flex flex-col space-y-4">
                                                <Link href="/solutions/receivables" className="text-sm font-semibold tracking-tight text-white uppercase opacity-80 hover:text-[#E5F33D] transition-colors">Receivables & Revenue</Link>
                                                <ul className="flex flex-col space-y-1">
                                                    <li>
                                                        <Link href="/solutions/receivables#leakage" className="block rounded-md px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white">
                                                            Behavioral Leakage Detection
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/solutions/receivables#scoring" className="block rounded-md px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white">
                                                            Dual Scoring Engine
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/solutions/receivables#alerting" className="block rounded-md px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white">
                                                            Pre-emptive Default Alerting
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Column 3 */}
                                            <div className="flex flex-col space-y-4">
                                                <Link href="/solutions/trust" className="text-sm font-semibold tracking-tight text-white uppercase opacity-80 hover:text-[#E5F33D] transition-colors">Decision Intelligence & Trust</Link>
                                                <ul className="flex flex-col space-y-1">
                                                    <li>
                                                        <Link href="/solutions/trust#xai" className="block rounded-md px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white">
                                                            Explainable AI Framework
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/solutions/trust#root-cause" className="block rounded-md px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white">
                                                            Root-Cause Analysis
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/solutions/trust#traceability" className="block rounded-md px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white">
                                                            Decision Traceability
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>

                                        {/* Right Section (1 Column) */}
                                        <div className="w-[300px] bg-white/[0.02] border-l border-zinc-800/50 p-6">
                                            <h4 className="text-sm font-semibold tracking-tight text-white uppercase opacity-80 mb-4">Featured Products</h4>
                                            <div className="flex flex-col space-y-3">

                                                {/* Card 1 */}
                                                <Link href="/products/horizon-ai" className="group flex flex-col items-start justify-center rounded-lg border border-zinc-800/60 bg-[#0B0C10] p-4 transition-all hover:border-[#E5F33D]/50 hover:bg-white/5">
                                                    <div className="mb-2 flex items-center gap-2">
                                                        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#E5F33D]/10 text-[#E5F33D]">
                                                            {/* Simple AI icon svg */}
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                                                        </div>
                                                        <span className="font-semibold text-white group-hover:text-[#E5F33D] transition-colors">Horizon AI</span>
                                                    </div>
                                                    <p className="text-xs text-zinc-500 leading-relaxed">Natural Language Assistant for autonomous financial reasoning.</p>
                                                </Link>

                                                {/* Card 2 */}
                                                <Link href="/products/nexus" className="group flex flex-col items-start justify-center rounded-lg border border-zinc-800/60 bg-[#0B0C10] p-4 transition-all hover:border-purple-500/50 hover:bg-white/5">
                                                    <div className="mb-2 flex items-center gap-2">
                                                        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-purple-500/10 text-purple-400">
                                                            {/* Simple Network/Engine icon svg */}
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="14" y="14" width="8" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="8" height="8" rx="2" ry="2"></rect><rect x="8" y="2" width="8" height="8" rx="2" ry="2"></rect><line x1="12" y1="10" x2="16" y2="14"></line><line x1="12" y1="10" x2="8" y2="14"></line></svg>
                                                        </div>
                                                        <span className="font-semibold text-white group-hover:text-purple-400 transition-colors">Narsent Nexus</span>
                                                    </div>
                                                    <p className="text-xs text-zinc-500 leading-relaxed">Continuous & autonomous audit engine for enterprise integrity.</p>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent text-zinc-400 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white")}>
                                    <Link href="/integrations">Integrations</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-zinc-400 hover:text-white hover:bg-white/5 data-[state=open]:bg-white/5 data-[state=open]:text-white focus:bg-white/5 focus:text-white">
                                    Resources
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="border-zinc-800 bg-[#0B0C10]">
                                    <div className="flex w-[750px] max-w-full">

                                        {/* Left Section (2 Columns) */}
                                        <div className="grid flex-1 grid-cols-2 gap-4 p-6">

                                            {/* Column 1 — Knowledge Base */}
                                            <div className="flex flex-col space-y-4">
                                                <h4 className="text-sm font-semibold tracking-tight text-white uppercase opacity-80">Knowledge Base</h4>
                                                <Link href="/resources" className="block rounded-md px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white">
                                                    Blog & Articles
                                                </Link>
                                                <Link href="/resources" className="block rounded-md px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white">
                                                    Financial Guides
                                                </Link>
                                                <Link href="/resources" className="block rounded-md px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white">
                                                    Glossary
                                                </Link>
                                            </div>

                                            {/* Column 2 — Insights & Proofs */}
                                            <div className="flex flex-col space-y-4">
                                                <h4 className="text-sm font-semibold tracking-tight text-white uppercase opacity-80">Insights &amp; Proofs</h4>
                                                <Link href="/resources" className="block rounded-md px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white">
                                                    Customer Success Stories
                                                </Link>
                                                <Link href="/resources" className="block rounded-md px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white">
                                                    Whitepapers
                                                </Link>
                                                <Link href="/resources" className="block rounded-md px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white">
                                                    Autonomous Finance Reports
                                                </Link>
                                            </div>

                                        </div>

                                        {/* Right Section — Featured Card */}
                                        <div className="w-[280px] bg-white/[0.02] border-l border-zinc-800/50 p-6">
                                            <Link href="/resources" className="group flex flex-col rounded-lg border border-zinc-800/60 bg-[#11121A] p-5 transition-all hover:border-[#E5F33D]/40 hover:bg-white/5">
                                                <span className="mb-3 inline-block w-fit rounded-md bg-[#E5F33D]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#E5F33D]">
                                                    New Report
                                                </span>
                                                <span className="mb-2 text-sm font-bold text-white group-hover:text-[#E5F33D] transition-colors">
                                                    2026 Enterprise CFO Outlook.
                                                </span>
                                                <p className="mb-4 text-xs leading-relaxed text-zinc-500">
                                                    The future of autonomous finance based on a survey of 500+ CFOs.
                                                </p>
                                                <span className="mt-auto text-xs font-semibold text-[#E5F33D] transition-colors group-hover:text-white">
                                                    Read Report →
                                                </span>
                                            </Link>
                                        </div>

                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent text-zinc-400 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white")}>
                                    <Link href="/pricing">Pricing</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Right CTA */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/login"
                        className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                    >
                        Login
                    </Link>
                    <Link
                        href="/request-demo"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-[#E5F33D] px-6 text-sm font-semibold text-black transition-colors hover:bg-[#d4e136] focus:outline-none focus:ring-2 focus:ring-[#E5F33D] focus:ring-offset-2 focus:ring-offset-[#0B0C10]"
                    >
                        Request Demo
                    </Link>
                </div>
            </div>
        </header>
    );
}
