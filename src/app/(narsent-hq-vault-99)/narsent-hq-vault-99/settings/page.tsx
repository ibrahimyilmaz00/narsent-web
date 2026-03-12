"use client";

import { useState } from "react";
import { Save, Copy, UserPlus, AlertTriangle, Trash2 } from "lucide-react";

export default function SettingsPage() {
    const [platformName, setPlatformName] = useState("Narsent");
    const [supportEmail, setSupportEmail] = useState("info@narsent.com");
    const [maintenance, setMaintenance] = useState(false);
    const [toast, setToast] = useState("");

    const showToast = (msg: string) => {
        setToast(msg);
        setTimeout(() => setToast(""), 2000);
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        showToast("Copied to clipboard!");
    };

    const inputClass =
        "w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-[#E5F33D]/40 focus:ring-1 focus:ring-[#E5F33D]/20 placeholder:text-zinc-600";
    const labelClass =
        "mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-zinc-500";

    return (
        <div className="flex flex-col gap-6">
            {/* ── Header ── */}
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                    <h1 className="text-2xl font-bold text-white">
                        Site & System Settings
                    </h1>
                    <p className="mt-1 text-sm text-zinc-400">
                        Manage platform integrations, API keys, and your team
                    </p>
                </div>
                <button
                    onClick={() => showToast("Changes saved!")}
                    className="inline-flex h-10 shrink-0 items-center gap-2 rounded-lg bg-[#E5F33D] px-5 text-sm font-bold text-black transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(229,243,61,0.2)] active:scale-[0.98]"
                >
                    <Save className="h-4 w-4" />
                    Save Changes
                </button>
            </div>

            {/* ── Card 1: Platform Info ── */}
            <div className="rounded-xl border border-zinc-800 bg-[#11121A] p-6">
                <h2 className="mb-5 text-sm font-bold text-white">
                    Platform Information
                </h2>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                        <label className={labelClass}>Platform Name</label>
                        <input
                            type="text"
                            value={platformName}
                            onChange={(e) => setPlatformName(e.target.value)}
                            className={inputClass}
                        />
                    </div>
                    <div>
                        <label className={labelClass}>Support Email</label>
                        <input
                            type="email"
                            value={supportEmail}
                            onChange={(e) => setSupportEmail(e.target.value)}
                            className={inputClass}
                        />
                    </div>
                </div>
            </div>

            {/* ── Card 2: API & Integrations ── */}
            <div className="rounded-xl border border-zinc-800 bg-[#11121A] p-6">
                <h2 className="mb-5 text-sm font-bold text-white">
                    System Integrations
                </h2>
                <div className="flex flex-col gap-5">
                    {/* OpenAI Key */}
                    <div>
                        <label className={labelClass}>
                            OpenAI API Key (for Horizon AI)
                        </label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                readOnly
                                value="sk-live-••••••••••••••••••••••••"
                                className={`${inputClass} flex-1 font-mono text-xs tracking-wider text-zinc-400`}
                            />
                            <button
                                type="button"
                                onClick={() =>
                                    copyToClipboard(
                                        "sk-live-xxxxxxxxxxxxxxxxxxxx"
                                    )
                                }
                                className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-lg border border-zinc-800 text-zinc-500 transition-colors hover:border-zinc-600 hover:text-white"
                            >
                                <Copy className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    {/* Webhook Secret */}
                    <div>
                        <label className={labelClass}>
                            Global ERP Webhook Secret
                        </label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                readOnly
                                value="whsec_••••••••••••••••••••••••"
                                className={`${inputClass} flex-1 font-mono text-xs tracking-wider text-zinc-400`}
                            />
                            <button
                                type="button"
                                onClick={() =>
                                    copyToClipboard(
                                        "whsec_xxxxxxxxxxxxxxxxxxxx"
                                    )
                                }
                                className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-lg border border-zinc-800 text-zinc-500 transition-colors hover:border-zinc-600 hover:text-white"
                            >
                                <Copy className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Card 3: Team ── */}
            <div className="rounded-xl border border-zinc-800 bg-[#11121A] p-6">
                <h2 className="mb-5 text-sm font-bold text-white">
                    Authorization
                </h2>

                {/* Member */}
                <div className="flex items-center justify-between rounded-lg border border-zinc-800/60 bg-zinc-900/30 px-4 py-3">
                    <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E5F33D]/15 text-xs font-bold text-[#E5F33D]">
                            IY
                        </div>
                        <div>
                            <p className="text-sm font-medium text-zinc-200">
                                Ibo Yilmaz
                            </p>
                            <p className="text-[11px] text-zinc-500">
                                Founder / Admin
                            </p>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="rounded-md border border-zinc-700 px-3 py-1.5 text-[11px] font-semibold text-zinc-400 transition-colors hover:border-zinc-500 hover:text-white"
                    >
                        Change Role
                    </button>
                </div>

                {/* Invite */}
                <button
                    type="button"
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-zinc-800 py-3 text-xs font-semibold text-zinc-500 transition-colors hover:border-zinc-600 hover:text-zinc-300"
                >
                    <UserPlus className="h-4 w-4" />
                    Invite New Member
                </button>
            </div>

            {/* ── Danger Zone ── */}
            <div className="rounded-xl border border-red-900/50 bg-red-950/10 p-6">
                <h2 className="mb-4 flex items-center gap-2 text-sm font-bold text-red-400">
                    <AlertTriangle className="h-4 w-4" />
                    Danger Zone
                </h2>
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    {/* Maintenance Toggle */}
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            role="switch"
                            aria-checked={maintenance}
                            onClick={() => setMaintenance(!maintenance)}
                            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ${maintenance ? "bg-red-500" : "bg-zinc-700"
                                }`}
                        >
                            <span
                                className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-lg transition-transform duration-200 ${maintenance
                                        ? "translate-x-5"
                                        : "translate-x-0"
                                    }`}
                            />
                        </button>
                        <span className="text-sm text-zinc-300">
                            Enable Maintenance Mode
                        </span>
                    </div>

                    {/* Clear Cache */}
                    <button
                        type="button"
                        onClick={() => showToast("Cache cleared!")}
                        className="inline-flex items-center gap-2 rounded-lg border border-red-900/60 bg-red-950/30 px-4 py-2 text-xs font-semibold text-red-400 transition-colors hover:bg-red-900/30 hover:text-red-300"
                    >
                        <Trash2 className="h-3.5 w-3.5" />
                        Clear All Cache
                    </button>
                </div>
            </div>

            {/* ── Toast ── */}
            <div
                className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl border border-zinc-700 bg-[#11121A] px-5 py-3.5 shadow-2xl transition-all duration-500 ${toast
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-4 opacity-0"
                    }`}
            >
                <span className="text-sm font-semibold text-white">
                    {toast}
                </span>
            </div>
        </div>
    );
}
