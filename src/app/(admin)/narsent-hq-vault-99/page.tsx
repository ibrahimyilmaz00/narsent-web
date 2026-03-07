import { FileText, Users, BarChart3 } from "lucide-react";

const stats = [
    {
        label: "Total Resources",
        value: "12",
        icon: FileText,
        badge: null,
    },
    {
        label: "New Demo Leads",
        value: "5",
        icon: Users,
        badge: "+2 this week",
    },
    {
        label: "Monthly Visitors",
        value: "2.4K",
        icon: BarChart3,
        badge: null,
    },
];

const recentLeads = [
    {
        company: "Akbank T.A.Ş.",
        email: "ahmet.y@akbank.com",
        date: "7 Mar 2026",
        status: "Pending",
    },
    {
        company: "Koç Holding A.Ş.",
        email: "elif.k@koc.com.tr",
        date: "5 Mar 2026",
        status: "Reviewed",
    },
    {
        company: "Vestel Electronics",
        email: "murat.d@vestel.com.tr",
        date: "3 Mar 2026",
        status: "Pending",
    },
];

export default function AdminDashboard() {
    return (
        <div className="flex flex-col gap-8">
            {/* ── Welcome ── */}
            <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-white">
                    Welcome back, Ibo
                </h1>
                <p className="mt-1 text-sm text-zinc-500">
                    Here&apos;s your site overview
                </p>
            </div>

            {/* ── Stats Cards ── */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div
                            key={stat.label}
                            className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-[#11121A] p-6"
                        >
                            {/* Dot pattern */}
                            <div
                                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                                style={{
                                    backgroundImage:
                                        "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                    backgroundSize: "20px 20px",
                                }}
                            />
                            <div className="relative z-10">
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05]">
                                    <Icon className="h-5 w-5 text-zinc-400" />
                                </div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                                    {stat.label}
                                </p>
                                <div className="mt-1 flex items-baseline gap-2">
                                    <span className="text-3xl font-extrabold text-white">
                                        {stat.value}
                                    </span>
                                    {stat.badge && (
                                        <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                                            {stat.badge}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* ── Recent Leads Table ── */}
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#11121A]">
                <div className="border-b border-zinc-800/60 px-6 py-4">
                    <h2 className="text-sm font-bold text-white">
                        Recent Demo Requests
                    </h2>
                </div>
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-zinc-800/40">
                            <th className="px-6 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                                Company
                            </th>
                            <th className="px-6 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                                Email
                            </th>
                            <th className="px-6 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                                Date
                            </th>
                            <th className="px-6 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentLeads.map((lead, i) => (
                            <tr
                                key={i}
                                className="border-b border-zinc-800/20 transition-colors hover:bg-white/[0.02]"
                            >
                                <td className="px-6 py-4 text-sm font-medium text-zinc-200">
                                    {lead.company}
                                </td>
                                <td className="px-6 py-4 text-sm text-zinc-400">
                                    {lead.email}
                                </td>
                                <td className="px-6 py-4 text-sm text-zinc-500">
                                    {lead.date}
                                </td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-bold ${lead.status === "Reviewed"
                                                ? "bg-emerald-500/15 text-emerald-400"
                                                : "bg-amber-500/15 text-amber-400"
                                            }`}
                                    >
                                        {lead.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
