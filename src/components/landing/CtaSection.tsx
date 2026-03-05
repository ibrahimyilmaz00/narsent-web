"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/src/components/ui/reveal";

export function CtaSection() {
    return (
        <section
            className="relative w-full py-16 md:py-32"
            style={{
                background:
                    "radial-gradient(ellipse at center, rgba(67, 56, 202, 0.15) 0%, #0B0C10 60%, #0B0C10 100%)",
            }}
        >
            <Reveal scale={true}>
                <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
                    {/* Headline */}
                    <h2 className="mb-6 max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                        Finansal Operasyonlarınızı{" "}
                        <span className="text-[#E5F33D]">Otonom</span> Hale Getirin.
                    </h2>

                    {/* Subtext */}
                    <p className="mb-12 max-w-2xl text-lg leading-relaxed text-zinc-400">
                        Haftalar süren manuel raporlamalara ve görünmez nakit sızıntılarına son
                        verin. Narsent ile geleceğin finansal altyapısına bugün geçin.
                    </p>

                    {/* Action Buttons */}
                    <div className="mb-8 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
                        <Link
                            href="/request-demo"
                            className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-[#E5F33D] px-8 text-sm font-bold text-black transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(229,243,61,0.25)] focus:outline-none focus:ring-2 focus:ring-[#E5F33D] focus:ring-offset-2 focus:ring-offset-[#0B0C10] sm:w-auto"
                        >
                            Demoyu Planlayın
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-zinc-700 bg-transparent px-8 text-sm font-semibold text-zinc-300 transition-all duration-200 hover:border-zinc-500 hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-offset-2 focus:ring-offset-[#0B0C10] sm:w-auto"
                        >
                            Uzmanla Görüşün
                        </Link>
                    </div>

                    {/* Trust Badge */}
                    <div className="flex items-center gap-2 text-center text-zinc-500">
                        <Check className="h-4 w-4 text-emerald-500" />
                        <span className="text-xs">
                            Kurulum veya kredi kartı gerektirmez. ERP sistemlerinize anında entegre olur.
                        </span>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
