"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    FileText,
    Users,
    Settings,
} from "lucide-react";

const navItems = [
    { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { label: "Blog & Resources", href: "/admin/blog", icon: FileText },
    { label: "Demo Leads", href: "/admin/leads", icon: Users },
    { label: "Site Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();

    return (
        <div className="flex min-h-screen bg-[#0B0C10] text-white">
            {/* ── Sidebar ── */}
            <aside className="fixed inset-y-0 left-0 z-30 flex w-64 flex-col border-r border-zinc-800/60 bg-[#080a10]">
                {/* Brand */}
                <div className="flex h-16 items-center gap-2 border-b border-zinc-800/60 px-6">
                    <span className="text-lg font-extrabold tracking-[0.15em] text-white">
                        NARSENT
                    </span>
                    <span className="rounded-md bg-[#E5F33D]/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#E5F33D]">
                        Admin
                    </span>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-1 flex-col gap-1 px-3 py-5">
                    {navItems.map((item) => {
                        const isActive =
                            item.href === "/admin"
                                ? pathname === "/admin"
                                : pathname.startsWith(item.href);
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${isActive
                                        ? "bg-[#E5F33D]/10 text-[#E5F33D]"
                                        : "text-zinc-400 hover:bg-white/[0.04] hover:text-white"
                                    }`}
                            >
                                <Icon className="h-4 w-4 shrink-0" />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* User section at bottom */}
                <div className="border-t border-zinc-800/60 px-4 py-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E5F33D]/15 text-xs font-bold text-[#E5F33D]">
                            IY
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-zinc-300">Ibo Yilmaz</p>
                            <p className="text-[10px] text-zinc-600">Administrator</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* ── Main Content Area ── */}
            <div className="flex flex-1 flex-col pl-64">
                {/* Topbar */}
                <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-zinc-800/60 bg-[#0B0C10]/80 px-8 backdrop-blur-lg">
                    <div />
                    <div className="flex items-center gap-4">
                        <span className="text-xs text-zinc-500">
                            Narsent Admin Panel
                        </span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E5F33D]/15 text-xs font-bold text-[#E5F33D]">
                            IY
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-8">{children}</main>
            </div>
        </div>
    );
}
