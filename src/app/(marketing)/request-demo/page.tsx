"use client";

import { Check, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/src/components/ui/reveal";
import { useState } from "react";
import Image from "next/image";

const expectations = [
    "Live ERP and banking integration simulation",
    "Custom XAI reporting demo for your organization",
    "ROI projection based on DSO and burn rate analysis",
];

const trustLogos = [
    { src: "/logos/logo-1.png", alt: "Partner 1" },
    { src: "/logos/logo-2.jpg", alt: "VK Boost" },
    { src: "/logos/logo-3.jpg", alt: "Teknopark" },
    { src: "/logos/logo-4.png", alt: "TİM" },
];

const erpOptions = [
    { value: "", label: "Select Your ERP System" },
    { value: "sap", label: "SAP" },
    { value: "oracle", label: "Oracle" },
    { value: "netsuite", label: "NetSuite" },
    { value: "logo", label: "Logo" },
    { value: "other", label: "Other" },
];

export default function RequestDemoPage() {
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [title, setTitle] = useState("");
    const [erp, setErp] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ email, company, title, erp });
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-[#0B0C10]">
            <section className="px-4 pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="container mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
                    {/* ───── LEFT: Value Proposition ───── */}
                    <Reveal direction="left">
                        <div className="flex flex-col">
                            {/* Badge */}
                            <span className="mb-6 inline-block w-fit rounded-full border border-[#E5F33D]/30 bg-[#E5F33D]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#E5F33D]">
                                1-on-1 Demo
                            </span>

                            {/* H1 */}
                            <h1 className="mb-6 text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]">
                                Make Your Financial Operations{" "}
                                <span className="bg-gradient-to-r from-[#E5F33D] to-[#c8d935] bg-clip-text text-transparent">
                                    Autonomous
                                </span>
                                .
                            </h1>

                            {/* Subtitle */}
                            <p className="mb-10 max-w-lg text-base leading-relaxed text-zinc-400 md:text-lg">
                                In a personalized 30-minute session, discover
                                how Narsent eliminates manual data entry and
                                autonomously manages your cashflow — live.
                            </p>

                            {/* Expectations list */}
                            <div className="mb-12">
                                <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-zinc-300">
                                    What to Expect
                                </h3>
                                <ul className="flex flex-col gap-4">
                                    {expectations.map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E5F33D]/15 text-[#E5F33D]">
                                                <Check className="h-3 w-3" />
                                            </div>
                                            <span className="text-sm leading-relaxed text-zinc-300">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Trust seal */}
                            <div>
                                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
                                    Supported by Turkey&apos;s Innovation Ecosystem
                                </p>
                                <div className="flex flex-wrap items-center gap-6">
                                    {trustLogos.map((logo) => (
                                        <Image
                                            key={logo.src}
                                            src={logo.src}
                                            alt={logo.alt}
                                            width={120}
                                            height={48}
                                            className="object-contain h-8 w-auto"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* ───── RIGHT: Premium Form ───── */}
                    <Reveal direction="right">
                        <div className="relative">
                            {/* Ambient glow */}
                            <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-[#E5F33D]/[0.03] blur-2xl" />

                            <form
                                onSubmit={handleSubmit}
                                className="relative rounded-3xl border border-zinc-800 bg-[#11121A] p-8 shadow-2xl md:p-10"
                            >
                                {/* Dot pattern overlay */}
                                <div
                                    className="pointer-events-none absolute inset-0 rounded-3xl opacity-[0.03]"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                        backgroundSize: "24px 24px",
                                    }}
                                />

                                <div className="relative z-10">
                                    {submitted ? (
                                        /* ═══ Success State ═══ */
                                        <div className="flex flex-col items-center justify-center py-12 text-center">
                                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#E5F33D]/15">
                                                <CheckCircle2 className="h-8 w-8 text-[#E5F33D]" />
                                            </div>
                                            <h2 className="mb-3 text-2xl font-bold text-white">
                                                Request Received!
                                            </h2>
                                            <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
                                                Our team will reach out within 24
                                                hours to schedule your
                                                personalized demo at{" "}
                                                <span className="font-semibold text-zinc-300">
                                                    {email}
                                                </span>
                                                .
                                            </p>
                                        </div>
                                    ) : (
                                        /* ═══ Form State ═══ */
                                        <>
                                            <h2 className="mb-1 text-xl font-bold text-white md:text-2xl">
                                                Request a Free Demo
                                            </h2>
                                            <p className="mb-8 text-sm text-zinc-500">
                                                Our team will get back to you
                                                within 24 hours.
                                            </p>

                                            <div className="flex flex-col gap-4">
                                                {/* Email */}
                                                <div>
                                                    <label
                                                        htmlFor="email"
                                                        className="mb-1.5 block text-xs font-semibold text-zinc-400"
                                                    >
                                                        Work Email
                                                    </label>
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        required
                                                        placeholder="name@company.com"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-[#E5F33D]/50 focus:ring-1 focus:ring-[#E5F33D]/25"
                                                    />
                                                </div>

                                                {/* Company + Title — side by side */}
                                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                    <div>
                                                        <label
                                                            htmlFor="company"
                                                            className="mb-1.5 block text-xs font-semibold text-zinc-400"
                                                        >
                                                            Company Name
                                                        </label>
                                                        <input
                                                            id="company"
                                                            name="company"
                                                            type="text"
                                                            required
                                                            placeholder="Acme Inc."
                                                            value={company}
                                                            onChange={(e) => setCompany(e.target.value)}
                                                            className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-[#E5F33D]/50 focus:ring-1 focus:ring-[#E5F33D]/25"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label
                                                            htmlFor="title"
                                                            className="mb-1.5 block text-xs font-semibold text-zinc-400"
                                                        >
                                                            Job Title
                                                        </label>
                                                        <input
                                                            id="title"
                                                            name="title"
                                                            type="text"
                                                            required
                                                            placeholder="CFO"
                                                            value={title}
                                                            onChange={(e) => setTitle(e.target.value)}
                                                            className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-[#E5F33D]/50 focus:ring-1 focus:ring-[#E5F33D]/25"
                                                        />
                                                    </div>
                                                </div>

                                                {/* ERP Dropdown */}
                                                <div>
                                                    <label
                                                        htmlFor="erp"
                                                        className="mb-1.5 block text-xs font-semibold text-zinc-400"
                                                    >
                                                        Current ERP System
                                                    </label>
                                                    <select
                                                        id="erp"
                                                        name="erp"
                                                        required
                                                        value={erp}
                                                        onChange={(e) => setErp(e.target.value)}
                                                        className="w-full appearance-none rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#E5F33D]/50 focus:ring-1 focus:ring-[#E5F33D]/25 [&:invalid]:text-zinc-600 [&>option]:bg-[#11121A]"
                                                    >
                                                        {erpOptions.map((opt) => (
                                                            <option
                                                                key={opt.value}
                                                                value={opt.value}
                                                                disabled={
                                                                    opt.value === ""
                                                                }
                                                            >
                                                                {opt.label}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>

                                                {/* Submit CTA */}
                                                <button
                                                    type="submit"
                                                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#E5F33D] py-4 text-sm font-bold text-black transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(229,243,61,0.2)] active:scale-[0.98]"
                                                >
                                                    Schedule a Demo
                                                    <ArrowRight className="h-4 w-4" />
                                                </button>
                                            </div>

                                            {/* Trust footer */}
                                            <div className="mt-5 flex items-start gap-2">
                                                <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-zinc-600" />
                                                <p className="text-[11px] leading-relaxed text-zinc-600">
                                                    Your data is protected by
                                                    256-bit end-to-end encryption.
                                                    KVKK and GDPR compliant.
                                                </p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </form>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
