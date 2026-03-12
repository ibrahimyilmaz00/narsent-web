"use client";

import { Plus, Search, Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const categories = ["All", "Blog", "Case Study", "Whitepaper"];

import { getBlogs, deleteBlog } from "@/src/app/actions/blog";
import { useEffect } from "react";

const categoryStyle: Record<string, string> = {
    Whitepaper: "bg-blue-500/15 text-blue-400",
    "Case Study": "bg-purple-500/15 text-purple-400",
    Blog: "bg-zinc-700/40 text-zinc-400",
};

export default function BlogPage() {
    const [search, setSearch] = useState("");
    const [activeFilter, setActiveFilter] = useState("All");
    const [articles, setArticles] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchBlogs = async () => {
        try {
            const data = await getBlogs(true);
            setArticles(data);
        } catch (error) {
            console.error("Failed to fetch blogs", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this content?")) return;
        try {
            await deleteBlog(id);
            fetchBlogs();
        } catch (error) {
            console.error("Failed to delete blog", error);
        }
    };

    const filtered = articles.filter((a) => {
        const matchesSearch = a.title
            .toLowerCase()
            .includes(search.toLowerCase());
        const matchesCategory =
            activeFilter === "All" || a.category === activeFilter;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="flex flex-col gap-8">
            {/* ── Header ── */}
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                    <h1 className="text-2xl font-bold text-white">
                        Resources & Articles
                    </h1>
                    <p className="mt-1 text-sm text-zinc-400">
                        Manage all blog posts, case studies, and reports
                    </p>
                </div>
                <Link
                    href="/narsent-hq-vault-99/blog/new"
                    className="inline-flex h-10 shrink-0 items-center gap-2 rounded-lg bg-[#E5F33D] px-5 text-sm font-bold text-black transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(229,243,61,0.2)] active:scale-[0.98]"
                >
                    <Plus className="h-4 w-4" />
                    New Content
                </Link>
            </div>

            {/* ── Search & Filter Bar ── */}
            <div className="flex flex-col gap-4 sm:flex-row">
                {/* Search */}
                <div className="relative flex-1">
                    <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full rounded-lg border border-zinc-800 bg-[#11121A] py-2.5 pl-11 pr-4 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-[#E5F33D]/40 focus:ring-1 focus:ring-[#E5F33D]/20"
                    />
                </div>

                {/* Category filter */}
                <div className="flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-[#11121A] p-1">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${activeFilter === cat
                                ? "bg-white/10 text-white"
                                : "text-zinc-500 hover:text-zinc-300"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* ── Data Table ── */}
            <div className="overflow-hidden rounded-xl border border-zinc-800 bg-[#11121A]">
                <table className="w-full">
                    <thead>
                        <tr className="bg-zinc-900/50">
                            <th className="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                                Title
                            </th>
                            <th className="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                                Category
                            </th>
                            <th className="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                                Status
                            </th>
                            <th className="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                                Publish Date
                            </th>
                            <th className="px-6 py-3.5 text-right text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((article, i) => (
                            <tr
                                key={i}
                                className="border-t border-zinc-800/40 transition-colors hover:bg-zinc-800/30"
                            >
                                <td className="px-6 py-4 text-sm font-medium text-zinc-200">
                                    {article.title}
                                </td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-bold ${categoryStyle[article.category] ??
                                            "bg-zinc-700/40 text-zinc-400"
                                            }`}
                                    >
                                        {article.category}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 text-xs font-medium">
                                        <span
                                            className={`h-1.5 w-1.5 rounded-full ${article.status === "Published"
                                                ? "bg-emerald-400"
                                                : "bg-amber-400"
                                                }`}
                                        />
                                        <span
                                            className={
                                                article.status === "Published"
                                                    ? "text-emerald-400"
                                                    : "text-amber-400"
                                            }
                                        >
                                            {article.status}
                                        </span>
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-zinc-500">
                                    {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString("en-GB", { day: 'numeric', month: 'short', year: 'numeric' }) : "-"}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-end gap-2">
                                        <Link
                                            href={`/narsent-hq-vault-99/blog/new?id=${article.id}`}
                                            aria-label="Edit"
                                            className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:bg-white/[0.06] hover:text-white"
                                        >
                                            <Edit className="h-4 w-4" />
                                        </Link>
                                        <button
                                            aria-label="Delete"
                                            onClick={() => handleDelete(article.id)}
                                            className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:bg-red-500/10 hover:text-red-400"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}

                        {filtered.length === 0 && (
                            <tr>
                                <td
                                    colSpan={5}
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
