"use client";

import { Download, Search, ChevronDown } from "lucide-react";
import { useState } from "react";
import { updateLeadStatus } from "@/src/app/actions/lead";
import { Lead } from "@prisma/client";

const statusFilters = ["All", "New", "Pending", "Contacted", "Demo Completed", "Qualified", "Lost", "Closed"];

const statusStyle: Record<string, string> = {
    New: "bg-purple-500/15 text-purple-400",
    Pending: "bg-amber-500/15 text-amber-400",
    Contacted: "bg-blue-500/15 text-blue-400",
    "Demo Completed": "bg-emerald-500/15 text-emerald-400",
    Qualified: "bg-emerald-500/15 text-emerald-400",
    Lost: "bg-red-500/15 text-red-500",
    Closed: "bg-zinc-700/40 text-zinc-500",
};

export default function ClientLeadsPage({ initialLeads, summaryStats }: { initialLeads: Lead[], summaryStats: { total: number, pending: number, conversion: string } }) {
    const [leads, setLeads] = useState<Lead[]>(initialLeads);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [loadingId, setLoadingId] = useState<string | null>(null);

    const filtered = leads.filter((l) => {
        const matchesSearch =
            l.company.toLowerCase().includes(search.toLowerCase()) ||
            l.email.toLowerCase().includes(search.toLowerCase());
        const matchesStatus =
            statusFilter === "All" || l.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const handleStatusChange = async (id: string, newStatus: string) => {
        setLoadingId(id);
        try {
            await updateLeadStatus(id, newStatus);
            setLeads(leads.map(l => l.id === id ? { ...l, status: newStatus } : l));
        } catch (error) {
            console.error("Failed to update status:", error);
            alert("Failed to update status.");
        } finally {
            setLoadingId(null);
        }
    };

    const handleExportCSV = () => {
        if (leads.length === 0) return;

        const headers = ["ID", "Company", "Name", "Title", "Email", "ERP", "Status", "Date"];
        const csvContent = [headers.join(",")];

        leads.forEach(l => {
            const row = [
                l.id,
                `"${l.company.replace(/"/g, '""')}"`,
                `"${l.name.replace(/"/g, '""')}"`,
                `"${(l.title || "").replace(/"/g, '""')}"`,
                `"${l.email}"`,
                `"${l.erp || ""}"`,
                l.status,
                l.createdAt.toISOString()
            ];
            csvContent.push(row.join(","));
        });

        const blob = new Blob([csvContent.join("\n")], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `demo_leads_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

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
                <button onClick={handleExportCSV} className="inline-flex h-10 shrink-0 items-center gap-2 rounded-lg border border-zinc-700 bg-transparent px-5 text-xs font-semibold text-zinc-400 transition-colors hover:border-zinc-500 hover:text-white">
                    <Download className="h-4 w-4" />
                    Export (CSV)
                </button>
            </div>

            {/* ── Stat Cards ── */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                    { label: "Total Leads", value: summaryStats.total },
                    { label: "Pending/New", value: summaryStats.pending },
                    { label: "Conversion Rate", value: summaryStats.conversion }
                ].map((s) => (
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
                                        {lead.title && <span className="text-zinc-600">· {lead.title}</span>}
                                    </p>
                                    <p className="mt-0.5 text-xs text-zinc-500">
                                        {lead.email}
                                    </p>
                                </td>
                                <td className="px-6 py-4">
                                    {lead.erp && (
                                        <span className="rounded-md bg-zinc-800/60 px-2 py-0.5 text-xs font-semibold text-zinc-400">
                                            {lead.erp}
                                        </span>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-sm text-zinc-500">
                                    {new Date(lead.createdAt).toLocaleDateString("en-GB", { day: 'numeric', month: 'short', year: 'numeric' })}
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
                                    <div className="flex justify-end pr-2">
                                        <div className="relative group">
                                            <button
                                                disabled={loadingId === lead.id}
                                                className="flex h-8 items-center justify-center gap-1 rounded-lg px-2 text-[11px] font-semibold text-zinc-400 transition-colors hover:bg-white/[0.06] hover:text-white disabled:opacity-50"
                                            >
                                                Update
                                                <ChevronDown className="h-3 w-3" />
                                            </button>

                                            {/* Dropdown Menu (Hover based for simplicity, but robust) */}
                                            <div className="absolute right-0 top-full z-50 mt-1 hidden w-36 flex-col overflow-hidden rounded-xl border border-zinc-800 bg-[#11121A] py-1 shadow-2xl group-hover:flex">
                                                {statusFilters.filter(s => s !== "All" && s !== lead.status).map(status => (
                                                    <button
                                                        key={status}
                                                        onClick={() => handleStatusChange(lead.id, status)}
                                                        className="px-4 py-2 text-left text-[11px] font-medium text-zinc-400 hover:bg-white/[0.04] hover:text-white"
                                                    >
                                                        Mark as {status}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
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
