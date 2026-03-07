"use client";

import { Download, Search, Eye } from "lucide-react";
import { useState } from "react";

const statusFilters = ["All", "Pending", "Contacted", "Demo Completed", "Closed"];

const statusStyle: Record<string, string> = {
    Pending: "bg-amber-500/15 text-amber-400",
    Contacted: "bg-blue-500/15 text-blue-400",
    "Demo Completed": "bg-emerald-500/15 text-emerald-400",
    Closed: "bg-zinc-700/40 text-zinc-500",
};

const leads = [
    {
        company: "Koç Holding A.Ş.",
        name: "Ahmet Yıldırım",
        email: "ahmet.y@koc.com.tr",
        role: "CFO",
        erp: "SAP",
        date: "7 Mar 2026",
        status: "Pending",
    },
    {
        company: "Sabancı Holding",
        name: "Elif Kaya",
        email: "elif.k@sabanci.com",
        role: "VP Finance",
        erp: "Oracle",
        date: "5 Mar 2026",
        status: "Contacted",
    },
    {
        company: "Anadolu Efes",
        name: "Murat Demir",
        email: "murat.d@anadoluefes.com",
        role: "Finance Director",
        erp: "NetSuite",
        date: "2 Mar 2026",
        status: "Demo Completed",
    },
    {
        company: "Turkcell Communications",
        name: "Zeynep Arslan",
        email: "zeynep.a@turkcell.com.tr",
        role: "CTO",
        erp: "Logo",
        date: "28 Feb 2026",
        status: "Pending",
    },
    {
        company: "Eczacıbaşı Holding",
        name: "Can Özkan",
        email: "can.o@eczacibasi.com.tr",
        role: "CFO",
        erp: "SAP",
        date: "25 Feb 2026",
        status: "Closed",
    },
];

const stats = [
    { label: "Total Leads", value: "128" },
    { label: "Pending", value: "14" },
    { label: "Conversion Rate", value: "12%" },
];

export default function LeadsPage() {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    const filtered = leads.filter((l) => {
        const matchesSearch =
            l.company.toLowerCase().includes(search.toLowerCase()) ||
            l.email.toLowerCase().includes(search.toLowerCase());
        const matchesStatus =
            statusFilter === "All" || l.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="flex flex-col gap-8">
            {/* ── Header ── */}
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                    <h1 className="text-2xl font-bold text-white">
                        Demo Leads
                    </h1>
                    <p className="mt-1 text-sm text-zinc-400">
                        Manage potential customers and form submissions
                    </p>
                </div>
                <button className="inline-flex h-10 shrink-0 items-center gap-2 rounded-lg border border-zinc-700 bg-transparent px-5 text-xs font-semibold text-zinc-400 transition-colors hover:border-zinc-500 hover:text-white">
                    <Download className="h-4 w-4" />
                    Export (CSV)
                </button>
            </div>

            {/* ── Stat Cards ── */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {stats.map((s) => (
                    <div
                        key={s.label}
                        className="relative overflow-hidden rounded-xl border border-zinc-800 bg-[#11121A] px-6 py-5"
                    >
                        <div
                            className="pointer-events-none absolute inset-0 opacity-[0.03]"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                backgroundSize: "20px 20px",
                            }}
                        />
                        <p className="relative z-10 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                            {s.label}
                        </p>
                        <p className="relative z-10 mt-1 text-2xl font-extrabold text-white">
                            {s.value}
                        </p>
                    </div>
                ))}
            </div>

            {/* ── Search & Filter ── */}
            <div className="flex flex-col gap-4 sm:flex-row">
                <div className="relative flex-1">
                    <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                    <input
                        type="text"
                        placeholder="Search company or email..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full rounded-lg border border-zinc-800 bg-[#11121A] py-2.5 pl-11 pr-4 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-[#E5F33D]/40 focus:ring-1 focus:ring-[#E5F33D]/20"
                    />
                </div>
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="appearance-none rounded-lg border border-zinc-800 bg-[#11121A] px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-[#E5F33D]/40 [&>option]:bg-[#11121A]"
                >
                    {statusFilters.map((s) => (
                        <option key={s} value={s}>
                            {s === "All" ? "Status: All" : s}
                        </option>
                    ))}
                </select>
            </div>

            {/* ── Data Table ── */}
            <div className="overflow-hidden rounded-xl border border-zinc-800 bg-[#11121A]">
                <table className="w-full">
                    <thead>
                        <tr className="bg-zinc-900/50">
                            <th className="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                                Company
                            </th>
                            <th className="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                                Contact
                            </th>
                            <th className="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                                ERP System
                            </th>
                            <th className="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                                Date
                            </th>
                            <th className="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                                Status
                            </th>
                            <th className="px-6 py-3.5 text-right text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((lead, i) => (
                            <tr
                                key={i}
                                className="border-t border-zinc-800/40 transition-colors hover:bg-zinc-800/30"
                            >
                                <td className="px-6 py-4 text-sm font-medium text-zinc-200">
                                    {lead.company}
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-sm font-medium text-zinc-300">
                                        {lead.name}{" "}
                                        <span className="text-zinc-600">
                                            · {lead.role}
                                        </span>
                                    </p>
                                    <p className="mt-0.5 text-xs text-zinc-500">
                                        {lead.email}
                                    </p>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="rounded-md bg-zinc-800/60 px-2 py-0.5 text-xs font-semibold text-zinc-400">
                                        {lead.erp}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-zinc-500">
                                    {lead.date}
                                </td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-bold ${statusStyle[lead.status] ??
                                            "bg-zinc-700/40 text-zinc-500"
                                            }`}
                                    >
                                        {lead.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-end">
                                        <button
                                            aria-label="Review"
                                            className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:bg-white/[0.06] hover:text-white"
                                        >
                                            <Eye className="h-4 w-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {filtered.length === 0 && (
                            <tr>
                                <td
                                    colSpan={6}
                                    className="px-6 py-12 text-center text-sm text-zinc-600"
                                >
                                    No results found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
