"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAction } from "@/src/app/actions/auth";

export default function LoginPage() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        const res = await loginAction(password);
        if (res.success) {
            router.push("/narsent-hq-vault-99");
            router.refresh(); // Ensure layout updates and middleware refetches
        } else {
            setError(res.error || "Login failed");
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#0B0C10] px-4 font-sans text-white">
            <div className="w-full max-w-sm rounded-2xl border border-zinc-800/60 bg-[#11121A] p-8 shadow-2xl">
                <div className="mb-8 text-center">
                    <span className="mb-2 inline-block rounded-md bg-[#E5F33D]/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#E5F33D]">
                        Admin Interface
                    </span>
                    <h1 className="text-2xl font-bold tracking-tight text-white">
                        Enter Vault
                    </h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                            className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-all focus:border-[#E5F33D] focus:ring-1 focus:ring-[#E5F33D]"
                        />
                    </div>
                    {error && <p className="text-sm font-medium text-red-500">{error}</p>}
                    <button
                        type="submit"
                        disabled={loading}
                        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#E5F33D] px-6 py-3 text-sm font-bold text-black transition-all hover:bg-[#d6e339] disabled:opacity-50"
                    >
                        {loading ? "Verifying..." : "Access Vault"}
                    </button>
                </form>
            </div>
        </div>
    );
}
