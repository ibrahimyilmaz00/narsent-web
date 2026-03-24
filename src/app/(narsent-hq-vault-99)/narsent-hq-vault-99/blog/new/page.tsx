"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    Save,
    Send,
    Upload,
    Loader2,
    CheckCircle2,
    Link as LinkIcon,
    ImagePlus,
    Eye,
    Pencil,
    Bold,
    Italic,
    Heading1,
    Heading2,
    List,
    ListOrdered,
    Link2,
    X,
    Image as ImageIcon,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { createBlog, updateBlog, getBlogById } from "@/src/app/actions/blog";
import { marked } from "marked";

import { Suspense } from "react";

const categoryOptions = ["Blog", "Case Study", "Whitepaper"];

/* ── Markdown Toolbar Button ── */
function ToolbarBtn({
    icon: Icon,
    label,
    onClick,
    active,
}: {
    icon: any;
    label: string;
    onClick: () => void;
    active?: boolean;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            title={label}
            className={`flex h-8 w-8 items-center justify-center rounded-md transition-all duration-150 ${active
                ? "bg-[#E5F33D]/15 text-[#E5F33D]"
                : "text-zinc-500 hover:bg-white/[0.06] hover:text-zinc-300"
                }`}
        >
            <Icon className="h-4 w-4" />
        </button>
    );
}

function BlogForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("Blog");
    const [author, setAuthor] = useState("");
    const [publishDate, setPublishDate] = useState(
        new Date().toISOString().split("T")[0]
    );
    const [slug, setSlug] = useState("");
    const [metaTitle, setMetaTitle] = useState("");
    const [metaDesc, setMetaDesc] = useState("");
    const [coverImage, setCoverImage] = useState("");

    const searchParams = useSearchParams();
    const editId = searchParams.get("id");

    const [publishing, setPublishing] = useState(false);
    const [saving, setSaving] = useState(false);
    const [toast, setToast] = useState<{ show: boolean; message: string }>({ show: false, message: "" });
    const [uploading, setUploading] = useState(false);
    const [editorMode, setEditorMode] = useState<"write" | "preview">("write");
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Auto-generate slug from title
    useEffect(() => {
        if (!editId) {
            const generated = title
                .toLowerCase()
                .replace(/[^a-z0-9\s-]/g, "")
                .replace(/\s+/g, "-")
                .replace(/-+/g, "-")
                .slice(0, 60);
            setSlug(generated);
        }
    }, [title, editId]);

    // Fetch existing blog if in edit mode
    useEffect(() => {
        if (editId) {
            const fetchExisting = async () => {
                const data = await getBlogById(editId);
                if (data) {
                    setTitle(data.title);
                    setContent(data.content);
                    setCategory(data.category);
                    setAuthor(data.author);
                    if (data.publishedAt) {
                        setPublishDate(new Date(data.publishedAt).toISOString().split("T")[0]);
                    }
                    setSlug(data.slug);
                    setCoverImage(data.coverImage || "");
                    setMetaTitle((data as any).metaTitle || "");
                    setMetaDesc((data as any).metaDescription || "");
                }
            };
            fetchExisting();
        }
    }, [editId]);

    const router = useRouter();

    const showToast = (message: string) => {
        setToast({ show: true, message });
        setTimeout(() => setToast({ show: false, message: "" }), 2000);
    };

    /* ── Markdown Toolbar Helpers ── */
    const insertMarkdown = (before: string, after = "") => {
        const ta = textareaRef.current;
        if (!ta) return;
        const start = ta.selectionStart;
        const end = ta.selectionEnd;
        const selected = content.slice(start, end);
        const replacement = `${before}${selected || "text"}${after}`;
        const newContent = content.slice(0, start) + replacement + content.slice(end);
        setContent(newContent);
        // Restore focus
        setTimeout(() => {
            ta.focus();
            ta.selectionStart = start + before.length;
            ta.selectionEnd = start + before.length + (selected || "text").length;
        }, 0);
    };

    const toolbarActions = [
        { icon: Heading1, label: "Heading 1", action: () => insertMarkdown("# ", "\n") },
        { icon: Heading2, label: "Heading 2", action: () => insertMarkdown("## ", "\n") },
        { icon: Bold, label: "Bold", action: () => insertMarkdown("**", "**") },
        { icon: Italic, label: "Italic", action: () => insertMarkdown("*", "*") },
        { icon: List, label: "Unordered List", action: () => insertMarkdown("- ") },
        { icon: ListOrdered, label: "Ordered List", action: () => insertMarkdown("1. ") },
        { icon: Link2, label: "Link", action: () => insertMarkdown("[", "](https://)") },
    ];

    /* ── File Upload ── */
    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        try {
            const formData = new FormData();
            formData.append("file", file);
            const res = await fetch("/api/upload", { method: "POST", body: formData });
            const data = await res.json();
            if (res.ok) {
                setCoverImage(data.url);
                showToast("Image uploaded successfully!");
            } else {
                alert(data.error || "Upload failed");
            }
        } catch {
            alert("Upload failed. Please try again.");
        } finally {
            setUploading(false);
            // Reset input
            if (fileInputRef.current) fileInputRef.current.value = "";
        }
    };

    /* ── Save / Publish ── */
    const handleSave = async (status: "Draft" | "Published") => {
        const isPublish = status === "Published";
        if (isPublish) setPublishing(true); else setSaving(true);

        try {
            const payload = {
                title,
                content,
                category,
                author,
                slug,
                coverImage,
                metaTitle: metaTitle || undefined,
                metaDescription: metaDesc || undefined,
                status,
            };

            if (editId) {
                await updateBlog(editId, payload);
            } else {
                await createBlog(payload);
            }

            showToast(isPublish ? "Content published successfully!" : "Draft saved successfully!");
            setTimeout(() => {
                router.push("/narsent-hq-vault-99/blog");
            }, 1200);
        } catch (error) {
            console.error("Failed to save", error);
            alert(`Failed to ${isPublish ? "publish" : "save"} content.`);
        } finally {
            setPublishing(false);
            setSaving(false);
        }
    };

    /* ── Rendered Markdown Preview ── */
    const renderedContent = (() => {
        try {
            return marked.parse(content || "*Start writing to see preview...*") as string;
        } catch {
            return "<p>Preview unavailable</p>";
        }
    })();

    return (
        <div className="flex flex-col gap-0">
            {/* ── Sticky Top Bar ── */}
            <div className="sticky top-0 z-30 -mx-6 mb-6 flex items-center justify-between border-b border-zinc-800 bg-[#0A0B10]/90 px-6 py-4 backdrop-blur-xl">
                <Link
                    href="/narsent-hq-vault-99/blog"
                    className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Articles
                </Link>
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => handleSave("Draft")}
                        disabled={saving || publishing}
                        className="inline-flex h-10 items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/60 px-5 text-sm font-semibold text-zinc-300 transition-all duration-200 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white disabled:opacity-50"
                    >
                        {saving ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                            <Save className="h-4 w-4" />
                        )}
                        {saving ? "Saving..." : "Save Draft"}
                    </button>
                    <button
                        type="button"
                        onClick={() => handleSave("Published")}
                        disabled={publishing || saving}
                        className="inline-flex h-10 items-center gap-2 rounded-xl bg-[#E5F33D] px-6 text-sm font-bold text-black transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(229,243,61,0.25)] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100"
                    >
                        {publishing ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                            <Send className="h-4 w-4" />
                        )}
                        {publishing
                            ? editId ? "Updating..." : "Publishing..."
                            : editId ? "Update & Publish" : "Publish"}
                    </button>
                </div>
            </div>

            {/* ── Main Grid ── */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                {/* ─── Left: Editor ─── */}
                <div className="flex flex-col gap-6 lg:col-span-8">
                    {/* Cover Image Upload */}
                    <div className="rounded-2xl border border-zinc-800 bg-[#11121A] p-6">
                        <label className="mb-4 flex items-center gap-2 text-sm font-semibold text-zinc-200">
                            <ImagePlus className="h-4 w-4 text-[#E5F33D]" />
                            Cover Image
                        </label>

                        {/* Preview */}
                        {coverImage && (
                            <div className="relative mb-4 overflow-hidden rounded-xl border border-zinc-700/50">
                                <img
                                    src={coverImage}
                                    alt="Cover preview"
                                    className="h-48 w-full object-cover"
                                />
                                <button
                                    type="button"
                                    onClick={() => setCoverImage("")}
                                    className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-zinc-300 transition-colors hover:bg-red-500/80 hover:text-white"
                                >
                                    <X className="h-3.5 w-3.5" />
                                </button>
                            </div>
                        )}

                        <div className="flex flex-col gap-3 sm:flex-row">
                            {/* URL input */}
                            <div className="relative flex-1">
                                <LinkIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600" />
                                <input
                                    type="url"
                                    placeholder="https://example.com/image.png"
                                    value={coverImage}
                                    onChange={(e) => setCoverImage(e.target.value)}
                                    className="w-full rounded-xl border border-zinc-700/60 bg-zinc-900/50 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-[#E5F33D]/40 focus:ring-1 focus:ring-[#E5F33D]/20"
                                />
                            </div>

                            {/* Upload button */}
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                disabled={uploading}
                                className="inline-flex h-[42px] shrink-0 items-center gap-2 rounded-xl border border-dashed border-zinc-600 bg-zinc-900/30 px-5 text-sm font-medium text-zinc-400 transition-all duration-200 hover:border-[#E5F33D]/40 hover:bg-[#E5F33D]/5 hover:text-[#E5F33D] disabled:opacity-50"
                            >
                                {uploading ? (
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                    <Upload className="h-4 w-4" />
                                )}
                                {uploading ? "Uploading..." : "Upload from Device"}
                            </button>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                onChange={handleFileUpload}
                                className="hidden"
                            />
                        </div>
                    </div>

                    {/* Title */}
                    <input
                        type="text"
                        placeholder="Article Title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border-none bg-transparent text-4xl font-bold text-white placeholder-zinc-700 outline-none"
                    />

                    {/* ── Markdown Editor ── */}
                    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#11121A]">
                        {/* Toolbar */}
                        <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2">
                            <div className="flex items-center gap-0.5">
                                {toolbarActions.map((action) => (
                                    <ToolbarBtn
                                        key={action.label}
                                        icon={action.icon}
                                        label={action.label}
                                        onClick={action.action}
                                    />
                                ))}
                            </div>
                            <div className="flex items-center rounded-lg border border-zinc-800 bg-zinc-900/50 p-0.5">
                                <button
                                    type="button"
                                    onClick={() => setEditorMode("write")}
                                    className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-all duration-150 ${editorMode === "write"
                                        ? "bg-white/10 text-white"
                                        : "text-zinc-500 hover:text-zinc-300"
                                        }`}
                                >
                                    <Pencil className="h-3 w-3" />
                                    Write
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setEditorMode("preview")}
                                    className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-all duration-150 ${editorMode === "preview"
                                        ? "bg-white/10 text-white"
                                        : "text-zinc-500 hover:text-zinc-300"
                                        }`}
                                >
                                    <Eye className="h-3 w-3" />
                                    Preview
                                </button>
                            </div>
                        </div>

                        {/* Editor / Preview */}
                        {editorMode === "write" ? (
                            <textarea
                                ref={textareaRef}
                                placeholder="Write your content here using Markdown...&#10;&#10;# Heading 1&#10;## Heading 2&#10;**Bold text** and *italic text*&#10;- List item&#10;[Link](https://example.com)"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="min-h-[500px] w-full resize-none bg-transparent px-6 py-5 text-[15px] leading-relaxed text-zinc-300 placeholder-zinc-700 outline-none font-mono"
                            />
                        ) : (
                            <div
                                className="prose prose-invert prose-zinc min-h-[500px] max-w-none px-6 py-5 prose-headings:text-white prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-zinc-300 prose-p:leading-relaxed prose-a:text-[#E5F33D] prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-li:text-zinc-300 prose-code:text-[#E5F33D] prose-code:bg-zinc-800/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm"
                                dangerouslySetInnerHTML={{ __html: renderedContent }}
                            />
                        )}
                    </div>
                </div>

                {/* ─── Right: Settings Panel ─── */}
                <div className="flex flex-col gap-6 lg:col-span-4">
                    {/* Publish Settings Card */}
                    <div className="rounded-2xl border border-zinc-800 bg-[#11121A] p-6">
                        <h3 className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#E5F33D]" />
                            Publish Settings
                        </h3>
                        <div className="flex flex-col gap-5">
                            {/* Category */}
                            <div>
                                <label className="mb-1.5 block text-[11px] font-semibold text-zinc-500">
                                    Category
                                </label>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full appearance-none rounded-xl border border-zinc-800 bg-zinc-900/50 px-3 py-2.5 text-sm text-white outline-none transition-colors focus:border-[#E5F33D]/40 [&>option]:bg-[#11121A]"
                                >
                                    {categoryOptions.map((c) => (
                                        <option key={c} value={c}>
                                            {c}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Author — Free text input */}
                            <div>
                                <label className="mb-1.5 block text-[11px] font-semibold text-zinc-500">
                                    Author
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter author name..."
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-3 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-[#E5F33D]/40"
                                />
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
                                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-3 py-2.5 text-sm text-white outline-none transition-colors focus:border-[#E5F33D]/40 [color-scheme:dark]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* SEO Card */}
                    <div className="rounded-2xl border border-zinc-800 bg-[#11121A] p-6">
                        <h3 className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-purple-400" />
                            Search Engine (SEO)
                        </h3>
                        <div className="flex flex-col gap-5">
                            {/* Slug */}
                            <div>
                                <label className="mb-1.5 block text-[11px] font-semibold text-zinc-500">
                                    URL Slug
                                </label>
                                <div className="flex items-center overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50">
                                    <span className="shrink-0 border-r border-zinc-800 bg-zinc-900/80 px-3 py-2.5 text-[11px] text-zinc-600">
                                        narsent.com/blog/
                                    </span>
                                    <input
                                        type="text"
                                        value={slug}
                                        onChange={(e) =>
                                            setSlug(e.target.value)
                                        }
                                        className="w-full bg-transparent px-3 py-2.5 text-sm text-white outline-none"
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
                                            : metaTitle.length > 50
                                                ? "text-amber-400"
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
                                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-3 py-2.5 text-sm text-white placeholder:text-zinc-700 outline-none transition-colors focus:border-[#E5F33D]/40"
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
                                            : metaDesc.length > 140
                                                ? "text-amber-400"
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
                                    className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-900/50 px-3 py-2.5 text-sm text-white placeholder:text-zinc-700 outline-none transition-colors focus:border-[#E5F33D]/40"
                                />
                            </div>

                            {/* SEO Preview */}
                            <div className="rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-4">
                                <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
                                    <Eye className="h-3 w-3" />
                                    Google Preview
                                </p>
                                <p className="mt-2.5 truncate text-sm font-medium text-blue-400">
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
                className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl border border-zinc-700/60 bg-[#11121A]/95 px-5 py-4 shadow-2xl backdrop-blur-xl transition-all duration-500 ${toast.show
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-4 opacity-0"
                    }`}
            >
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span className="text-sm font-semibold text-white">
                    {toast.message}
                </span>
            </div>
        </div>
    );
}

export default function NewBlogPage() {
    return (
        <Suspense fallback={<div className="flex h-96 items-center justify-center text-zinc-500"><Loader2 className="h-6 w-6 animate-spin" /></div>}>
            <BlogForm />
        </Suspense>
    );
}
