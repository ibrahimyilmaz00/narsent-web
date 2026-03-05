import { Check, Lock } from "lucide-react";
import Link from "next/link";

export default function RequestDemoPage() {
    return (
        <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
            {/* Left — Dark Trust & Persuasion Panel */}
            <div className="flex flex-col justify-center bg-[#0B0C10] px-8 py-16 md:px-16 lg:px-24">
                {/* Logo */}
                <Link href="/" className="mb-12 inline-block">
                    <span className="text-lg font-bold tracking-widest text-white">
                        NARSENT
                    </span>
                </Link>

                {/* Headline */}
                <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Narsent&apos;i İş Başında Görün.
                </h1>

                {/* Subheadline */}
                <p className="mb-10 max-w-md text-base leading-relaxed text-zinc-400">
                    Kendi finansal verilerinizle otonom karar altyapısının nasıl çalıştığını
                    30 dakikada keşfedin.
                </p>

                {/* Feature List */}
                <ul className="flex flex-col gap-4">
                    {[
                        "Live Data Integration",
                        "Custom Workflow Walkthrough",
                        "ROI & Pricing Analysis",
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E5F33D]/15 text-[#E5F33D]">
                                <Check className="h-3.5 w-3.5" />
                            </div>
                            <span className="text-sm font-medium text-zinc-300">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right — Form Panel */}
            <div className="flex flex-col justify-center bg-[#11121A] px-8 py-16 md:px-16 lg:px-24">
                <div className="mx-auto w-full max-w-md">
                    <h2 className="mb-2 text-2xl font-bold text-white">
                        Demo Talep Formu
                    </h2>
                    <p className="mb-8 text-sm text-zinc-500">
                        Alanları doldurun, ekibimiz 24 saat içinde sizinle iletişime geçsin.
                    </p>

                    <form className="flex flex-col gap-5">
                        {/* Work Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-zinc-500"
                            >
                                Work Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="you@company.com"
                                className="h-11 w-full rounded-lg border border-zinc-800 bg-white/5 px-4 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-[#E5F33D]/50 focus:ring-1 focus:ring-[#E5F33D]/30"
                            />
                        </div>

                        {/* First Name + Last Name */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label
                                    htmlFor="firstName"
                                    className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-zinc-500"
                                >
                                    First Name
                                </label>
                                <input
                                    id="firstName"
                                    type="text"
                                    placeholder="John"
                                    className="h-11 w-full rounded-lg border border-zinc-800 bg-white/5 px-4 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-[#E5F33D]/50 focus:ring-1 focus:ring-[#E5F33D]/30"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="lastName"
                                    className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-zinc-500"
                                >
                                    Last Name
                                </label>
                                <input
                                    id="lastName"
                                    type="text"
                                    placeholder="Doe"
                                    className="h-11 w-full rounded-lg border border-zinc-800 bg-white/5 px-4 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-[#E5F33D]/50 focus:ring-1 focus:ring-[#E5F33D]/30"
                                />
                            </div>
                        </div>

                        {/* Company Name */}
                        <div>
                            <label
                                htmlFor="company"
                                className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-zinc-500"
                            >
                                Company Name
                            </label>
                            <input
                                id="company"
                                type="text"
                                placeholder="Acme Inc."
                                className="h-11 w-full rounded-lg border border-zinc-800 bg-white/5 px-4 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-[#E5F33D]/50 focus:ring-1 focus:ring-[#E5F33D]/30"
                            />
                        </div>

                        {/* Job Title */}
                        <div>
                            <label
                                htmlFor="jobTitle"
                                className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-zinc-500"
                            >
                                Job Title
                            </label>
                            <input
                                id="jobTitle"
                                type="text"
                                placeholder="Chief Financial Officer"
                                className="h-11 w-full rounded-lg border border-zinc-800 bg-white/5 px-4 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-[#E5F33D]/50 focus:ring-1 focus:ring-[#E5F33D]/30"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="mt-2 h-12 w-full rounded-lg bg-[#E5F33D] text-sm font-bold text-black transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(229,243,61,0.25)] focus:outline-none focus:ring-2 focus:ring-[#E5F33D] focus:ring-offset-2 focus:ring-offset-[#11121A]"
                        >
                            Demoyu Planla
                        </button>
                    </form>

                    {/* Privacy Note */}
                    <div className="mt-6 flex items-start gap-2 text-zinc-600">
                        <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                        <p className="text-xs leading-relaxed">
                            Bilgileriniz gizlidir ve üçüncü taraflarla paylaşılmaz.{" "}
                            <Link href="#" className="text-zinc-400 underline hover:text-white">
                                Gizlilik Politikası
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
