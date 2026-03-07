"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Lock, Shield } from "lucide-react";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.toLowerCase() === "admin@narsent.com") {
            router.push("/narsent-hq-vault-99");
        } else {
            router.push("/");
        }
    };

    return (
        <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
            {/* Left — Brand & Vision */}
            <div
                className="relative flex flex-col justify-center bg-[#0B0C10] px-8 py-16 md:px-16 lg:px-24"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            >
                {/* Logo */}
                <Link href="/" className="absolute left-8 top-8 md:left-16 lg:left-24">
                    <span className="text-lg font-bold tracking-widest text-white">
                        NARSENT
                    </span>
                </Link>

                {/* Center Content */}
                <div className="flex flex-col items-start">
                    <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Autonomous Financial Command Center.
                    </h1>
                    <p className="max-w-md text-base leading-relaxed text-zinc-400">
                        Welcome to Narsent Workspace. Your data is protected
                        with bank-grade isolation and encryption.
                    </p>

                    {/* Security badge */}
                    <div className="mt-8 flex items-center gap-2 text-zinc-600">
                        <Lock className="h-4 w-4" />
                        <span className="text-xs">Bank-Level End-to-end Encryption</span>
                    </div>
                </div>
            </div>

            {/* Right — Login Form */}
            <div className="flex flex-col items-center justify-center bg-[#11121A] px-8 py-16 md:px-16 lg:px-24">
                <div className="w-full max-w-sm">
                    <h2 className="mb-2 text-2xl font-bold text-white">
                        Sign In to Your Account
                    </h2>
                    <p className="mb-8 text-sm text-zinc-500">
                        Enter your credentials to access your Workspace.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        {/* Email */}
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="h-11 w-full rounded-lg border border-zinc-800 bg-white/5 px-4 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-[#E5F33D]/50 focus:ring-1 focus:ring-[#E5F33D]/30"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <div className="mb-1.5 flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="text-xs font-medium uppercase tracking-wider text-zinc-500"
                                >
                                    Password
                                </label>
                                <Link
                                    href="#"
                                    className="text-xs text-zinc-500 transition-colors hover:text-[#E5F33D]"
                                >
                                    Forgot Password
                                </Link>
                            </div>
                            <input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="h-11 w-full rounded-lg border border-zinc-800 bg-white/5 px-4 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-[#E5F33D]/50 focus:ring-1 focus:ring-[#E5F33D]/30"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="mt-1 h-12 w-full rounded-lg bg-[#E5F33D] text-sm font-bold text-black transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(229,243,61,0.25)] focus:outline-none focus:ring-2 focus:ring-[#E5F33D] focus:ring-offset-2 focus:ring-offset-[#11121A]"
                        >
                            Sign In
                        </button>
                    </form>

                    {/* Enterprise SSO */}
                    <div className="mt-6">
                        <button
                            type="button"
                            className="inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-lg border border-zinc-700 bg-transparent text-sm font-medium text-zinc-300 transition-all duration-200 hover:border-zinc-500 hover:bg-zinc-800/50 hover:text-white"
                        >
                            <Shield className="h-4 w-4" />
                            Sign In with Enterprise SSO
                        </button>
                    </div>

                    {/* Sign up link */}
                    <p className="mt-8 text-center text-sm text-zinc-500">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/request-demo"
                            className="font-medium text-[#E5F33D] transition-colors hover:text-[#d4e136]"
                        >
                            Request a Demo
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
