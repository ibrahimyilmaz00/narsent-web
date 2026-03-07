"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    Save,
    Send,
    ImagePlus,
    Loader2,
    CheckCircle2,
} from "lucide-react";

const categoryOptions = ["Blog", "Case Study", "Whitepaper"];
const authorOptions = ["Ibo Yilmaz", "Ayse Korkmaz", "Mehmet Demir"];

export default function NewBlogPage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("Blog");
    const [author, setAuthor] = useState(authorOptions[0]);
    const [publishDate, setPublishDate] = useState(
        new Date().toISOString().split("T")[0]
    );
    const [slug, setSlug] = useState("");
    const [metaTitle, setMetaTitle] = useState("");
    const [metaDesc, setMetaDesc] = useState("");

    const [publishing, setPublishing] = useState(false);
    const [toast, setToast] = useState(false);

    // Auto-generate slug from title
    useEffect(() => {
        const generated = title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .slice(0, 60);
        setSlug(generated);
    }, [title]);

    const handlePublish = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault();
            setPublishing(true);
            console.log({ title, content, category, author, publishDate, slug, metaTitle, metaDesc });

            setTimeout(() => {
                setPublishing(false);
                setToast(true);
                setTimeout(() => setToast(false), 3000);
            }, 1000);
        },
        [title, content, category, author, publishDate, slug, metaTitle, metaDesc]
    );

    return (
        <form onSubmit={handlePublish} className="flex flex-col gap-6">
            {/* ── Top Bar ── */}
            <div className="flex items-center justify-between">
                <Link
                    href="/admin/blog"
                    className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Go Back
                </Link>
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        className="inline-flex h-9 items-center gap-2 rounded-lg border border-zinc-700 bg-transparent px-4 text-xs font-semibold text-zinc-400 transition-colors hover:border-zinc-500 hover:text-white"
                    >
                        <Save className="h-3.5 w-3.5" />
                        Save Draft
                    </button>
                    <button
                        type="submit"
                        disabled={publishing}
                        className="inline-flex h-9 items-center gap-2 rounded-lg bg-[#E5F33D] px-5 text-xs font-bold text-black transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(229,243,61,0.2)] disabled:opacity-60 disabled:hover:scale-100"
                    >
                        {publishing ? (
                            <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        ) : (
                            <Send className="h-3.5 w-3.5" />
                        )}
                        {publishing ? "Publishing..." : "Publish"}
                    </button>
                </div>
            </div>

            {/* ── Main Grid ── */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                {/* ─── Left: Editor ─── */}
                <div className="lg:col-span-8">
                    {/* Cover image upload */}
                    <div className="flex h-48 cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-zinc-700 bg-zinc-900/30 transition-colors hover:border-zinc-500 hover:bg-zinc-900/50">
                        <div className="flex flex-col items-center gap-2 text-zinc-600">
                            <ImagePlus className="h-8 w-8" />
                            <span className="text-sm font-medium">
                                Upload Cover Image (1200×630px)
                            </span>
                        </div>
                    </div>

                    {/* Title */}
                    <input
                        type="text"
                        placeholder="Article Title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-8 w-full border-none bg-transparent text-4xl font-bold text-white placeholder-zinc-700 outline-none"
                    />

                    {/* Content */}
                    <textarea
                        placeholder="Write your content here... (Supports Markdown)"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="mt-6 min-h-[500px] w-full resize-none border-none bg-transparent text-lg leading-relaxed text-zinc-300 placeholder-zinc-700 outline-none"
                    />
                </div>

                {/* ─── Right: Settings Panel ─── */}
                <div className="flex flex-col gap-6 lg:col-span-4">
                    {/* Publish Settings Card */}
                    <div className="rounded-xl border border-zinc-800 bg-[#11121A] p-6">
                        <h3 className="mb-5 text-xs font-bold uppercase tracking-wider text-white">
                            Publish Settings
                        </h3>
                        <div className="flex flex-col gap-4">
                            {/* Category */}
                            <div>
                                <label className="mb-1.5 block text-[11px] font-semibold text-zinc-500">
                                    Category
                                </label>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full appearance-none rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-white outline-none transition-colors focus:border-[#E5F33D]/40 [&>option]:bg-[#11121A]"
                                >
                                    {categoryOptions.map((c) => (
                                        <option key={c} value={c}>
                                            {c}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Author */}
                            <div>
                                <label className="mb-1.5 block text-[11px] font-semibold text-zinc-500">
                                    Author
                                </label>
                                <select
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                    className="w-full appearance-none rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-white outline-none transition-colors focus:border-[#E5F33D]/40 [&>option]:bg-[#11121A]"
                                >
                                    {authorOptions.map((a) => (
                                        <option key={a} value={a}>
                                            {a}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Date */}
                            <div>
                                <label className="mb-1.5 block text-[11px] font-semibold text-zinc-500">
                                    Publish Date
                                </label>
                                <input
                                    type="date"
                                    value={publishDate}
                                    onChange={(e) =>
                                        setPublishDate(e.target.value)
                                    }
                                    className="w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-white outline-none transition-colors focus:border-[#E5F33D]/40 [color-scheme:dark]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* SEO Card */}
                    <div className="rounded-xl border border-zinc-800 bg-[#11121A] p-6">
                        <h3 className="mb-5 text-xs font-bold uppercase tracking-wider text-white">
                            Search Engine (SEO)
                        </h3>
                        <div className="flex flex-col gap-4">
                            {/* Slug */}
                            <div>
                                <label className="mb-1.5 block text-[11px] font-semibold text-zinc-500">
                                    URL Slug
                                </label>
                                <div className="flex items-center rounded-lg border border-zinc-800 bg-zinc-900/50">
                                    <span className="shrink-0 border-r border-zinc-800 px-3 py-2 text-[11px] text-zinc-600">
                                        narsent.com/blog/
                                    </span>
                                    <input
                                        type="text"
                                        value={slug}
                                        onChange={(e) =>
                                            setSlug(e.target.value)
                                        }
                                        className="w-full bg-transparent px-3 py-2 text-sm text-white outline-none"
                                    />
                                </div>
                            </div>

                            {/* Meta Title */}
                            <div>
                                <div className="mb-1.5 flex items-center justify-between">
                                    <label className="text-[11px] font-semibold text-zinc-500">
                                        Meta Title
                                    </label>
                                    <span
                                        className={`text-[10px] font-medium ${metaTitle.length > 60
                                                ? "text-red-400"
                                                : "text-zinc-600"
                                            }`}
                                    >
                                        {metaTitle.length}/60
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Title shown in search results"
                                    value={metaTitle}
                                    onChange={(e) =>
                                        setMetaTitle(e.target.value)
                                    }
                                    className="w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-white placeholder:text-zinc-700 outline-none transition-colors focus:border-[#E5F33D]/40"
                                />
                            </div>

                            {/* Meta Description */}
                            <div>
                                <div className="mb-1.5 flex items-center justify-between">
                                    <label className="text-[11px] font-semibold text-zinc-500">
                                        Meta Description
                                    </label>
                                    <span
                                        className={`text-[10px] font-medium ${metaDesc.length > 155
                                                ? "text-red-400"
                                                : "text-zinc-600"
                                            }`}
                                    >
                                        {metaDesc.length}/155
                                    </span>
                                </div>
                                <textarea
                                    rows={3}
                                    placeholder="Short description about the article..."
                                    value={metaDesc}
                                    onChange={(e) =>
                                        setMetaDesc(e.target.value)
                                    }
                                    className="w-full resize-none rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-white placeholder:text-zinc-700 outline-none transition-colors focus:border-[#E5F33D]/40"
                                />
                            </div>

                            {/* SEO Preview */}
                            <div className="rounded-lg border border-zinc-800/60 bg-zinc-900/30 p-4">
                                <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
                                    Preview
                                </p>
                                <p className="mt-2 truncate text-sm font-medium text-blue-400">
                                    {metaTitle || title || "Page Title"}
                                </p>
                                <p className="mt-0.5 text-xs text-emerald-600">
                                    narsent.com/blog/{slug || "url-slug"}
                                </p>
                                <p className="mt-1 line-clamp-2 text-xs text-zinc-500">
                                    {metaDesc || "Meta description will appear here..."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Toast Notification ── */}
            <div
                className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl border border-zinc-700 bg-[#11121A] px-5 py-3.5 shadow-2xl transition-all duration-500 ${toast
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-4 opacity-0"
                    }`}
            >
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span className="text-sm font-semibold text-white">
                    Content published successfully!
                </span>
            </div>
        </form>
    );
}
