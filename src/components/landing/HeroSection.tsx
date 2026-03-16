"use client";

import { Caveat } from "next/font/google";
import { useState, useEffect } from "react";

const caveat = Caveat({ subsets: ["latin"], weight: "700" });
import { Play, Home, Clock } from "lucide-react";
import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
    DialogDescription,
} from "@/src/components/ui/dialog";

export function HeroSection() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <section className="relative w-full overflow-hidden bg-[#0a0a0f] py-16 sm:py-24 md:py-32 flex flex-col items-center justify-center min-h-[90vh]">
            {/* Background Glow */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple-900/30 blur-[150px] rounded-full pointer-events-none" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
                {/* Typography */}
                <div className="max-w-4xl space-y-4 mb-16">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                        Don&apos;t just report your financials.
                        <br />
                        <span className={`${caveat.className} inline-block mt-2 text-[#E5F33D] text-7xl sm:text-8xl md:text-[6rem] leading-none -rotate-2 transform`}>
                            Execute them.
                        </span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-zinc-400 sm:text-xl md:mt-6">
                        The autonomous reasoning layer that moves your company&apos;s financial data
                        beyond static reporting and turns it into decisive actions in seconds.
                    </p>

                    <div className="mt-8">
                        <Link href="/request-demo" className="inline-flex h-12 items-center justify-center rounded-md bg-[#4F46E5] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#4338CA] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2 focus:ring-offset-[#0B0C10]">
                            Book a demo <span className="ml-2">→</span>
                        </Link>
                    </div>
                </div>

                {/* Video Area */}
                <div className="relative w-full max-w-5xl mx-auto mt-8 pb-4 md:pb-16">
                    {mounted ? (
                        <Dialog>
                            <DialogTrigger asChild>
                                <div className="group relative aspect-[16/9] w-full cursor-pointer rounded-xl border border-zinc-800/50 bg-[#12121A] shadow-2xl transition-all hover:border-zinc-700/50 flex items-center justify-center overflow-hidden">
                                    {/* Fake Window Controls */}
                                    <div className="absolute top-4 left-4 flex gap-1.5">
                                        <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                                        <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                                        <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
                                    </div>

                                    {/* Dashboard Placeholder Content */}
                                    <div className="flex flex-col items-center justify-center opacity-40">
                                        <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-[#4F46E5] mb-2 tracking-tight">Financial Dashboard Preview</h2>
                                        <p className="text-zinc-300 font-medium tracking-wide">Watch Demo Video</p>
                                    </div>

                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                                        <div className="flex h-14 w-14 md:h-20 md:w-20 items-center justify-center rounded-full bg-[#4F46E5] text-white shadow-lg transition-transform group-hover:scale-110">
                                            <Play className="h-6 w-6 md:h-8 md:w-8 ml-1 fill-current" />
                                        </div>
                                    </div>
                                </div>
                            </DialogTrigger>

                            <DialogContent className="sm:max-w-4xl p-0 overflow-hidden border-zinc-800 bg-black">
                                {/* Added accessibility title/description */}
                                <div className="sr-only">
                                    <DialogTitle>Demo Video</DialogTitle>
                                    <DialogDescription>Watch the Narsent platform demo.</DialogDescription>
                                </div>
                                <div className="aspect-video w-full">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </DialogContent>
                        </Dialog>
                    ) : (
                        <div className="relative aspect-[16/9] w-full rounded-xl border border-zinc-800/50 bg-[#12121A] shadow-2xl flex items-center justify-center overflow-hidden">
                            <div className="absolute top-4 left-4 flex gap-1.5">
                                <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                                <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                                <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
                            </div>
                            <div className="flex flex-col items-center justify-center opacity-40">
                                <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-[#4F46E5] mb-2 tracking-tight">Financial Dashboard Preview</h2>
                                <p className="text-zinc-300 font-medium tracking-wide">Watch Demo Video</p>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                <div className="flex h-14 w-14 md:h-20 md:w-20 items-center justify-center rounded-full bg-[#4F46E5] text-white shadow-lg">
                                    <Play className="h-6 w-6 md:h-8 md:w-8 ml-1 fill-current" />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Floating Cards — static on mobile, absolute on md+ */}
                    <div className="flex flex-row items-center justify-center gap-3 w-full px-4 mt-6 md:mt-0 md:block md:px-0">
                        {/* Card 1 - Revenue */}
                        <div className="relative md:absolute md:-left-6 md:-bottom-2 flex flex-col rounded-2xl bg-[#0C0E2B] p-3 md:p-5 shadow-2xl w-[45%] md:w-44 z-20 border border-[#1a1d45]">
                            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                                <div className="flex h-8 w-8 md:h-12 md:w-12 items-center justify-center rounded-lg md:rounded-xl bg-[#4F46E5] text-white shadow-lg">
                                    <Home className="h-4 w-4 md:h-6 md:w-6" />
                                </div>
                                <span className="text-xs md:text-base font-semibold text-white">Revenue</span>
                            </div>
                            <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">+127%</div>
                            <div className="text-xs md:text-sm text-[#E5F33D] font-medium">vs last quarter</div>
                        </div>

                        {/* Real-time Dashboard Label (Center) */}
                        <div className="hidden md:block md:absolute md:bottom-4 md:left-1/2 md:-translate-x-1/2 z-20">
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold text-white">Real-time Dashboard</span>
                                <span className="text-xs text-zinc-500">Live financial insights</span>
                            </div>
                        </div>

                        {/* Card 2 - Time Saved */}
                        <div className="relative md:absolute md:-right-6 md:-bottom-2 flex flex-col rounded-2xl bg-[#0C0E2B] p-3 md:p-5 shadow-2xl w-[45%] md:w-44 z-20 border border-[#1a1d45]">
                            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                                <div className="flex h-8 w-8 md:h-12 md:w-12 items-center justify-center rounded-lg md:rounded-xl bg-gradient-to-br from-[#FF8C42] to-[#FF5F56] text-white shadow-lg">
                                    <Clock className="h-4 w-4 md:h-6 md:w-6" />
                                </div>
                                <span className="text-xs md:text-base font-semibold text-white">Time Saved</span>
                            </div>
                            <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">35hrs</div>
                            <div className="text-xs md:text-sm text-[#FF8C42] font-medium">per week</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
