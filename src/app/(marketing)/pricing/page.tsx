"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/src/components/ui/reveal";
import { useState } from "react";

const plans = [
    {
        name: "Growth",
        price: "$499",
        period: "/mo",
        highlight: false,
        features: [
            "3 Banka Entegrasyonu",
            "Temel Nakit Akışı Tahmini",
            "Standart E-posta Desteği",
        ],
        cta: "Start Free Trial",
        ctaStyle:
            "border border-zinc-700 bg-transparent text-zinc-300 hover:border-zinc-500 hover:bg-white/5 hover:text-white",
    },
    {
        name: "Professional",
        price: "$999",
        period: "/mo",
        highlight: true,
        badge: "Most Popular",
        features: [
            "Horizon AI Tahminleri",
            "Sınırsız Banka/ERP Entegrasyonu",
            "Otonom Alacak Yönetimi",
            "Öncelikli Destek",
        ],
        cta: "Get Started",
        ctaStyle:
            "bg-[#E5F33D] text-black font-bold hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(229,243,61,0.25)]",
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        highlight: false,
        features: [
            "Dedicated XAI Sunucusu",
            "Özel Finansal Model Eğitimi",
            "7/24 VIP Müşteri Temsilcisi",
        ],
        cta: "Contact Sales",
        ctaStyle:
            "border border-zinc-700 bg-transparent text-zinc-300 hover:border-zinc-500 hover:bg-white/5 hover:text-white",
    },
];

const faqs = [
    {
        question: "Verilerimiz yapay zeka eğitiminde kullanılıyor mu?",
        answer:
            "Hayır, verileriniz ISO 27001 standartlarında tamamen izole tutulur. Finansal verileriniz asla açık yapay zeka modellerini eğitmek için kullanılmaz.",
    },
    {
        question: "Mevcut ERP sistemimize entegre olabilir miyiz?",
        answer:
            "Evet, SAP, Oracle ve NetSuite dahil 50+ sisteme tak-çalıştır bağlanıyoruz. Entegrasyon süreci ortalama 48 saat içinde tamamlanır.",
    },
    {
        question: "İstediğim zaman iptal edebilir miyim?",
        answer:
            "Evet, aylık planlarda hiçbir taahhüt bulunmaz. Dilediğiniz zaman hesabınızı iptal edebilirsiniz.",
    },
];

function FaqItem({
    question,
    answer,
}: {
    question: string;
    answer: string;
}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-zinc-800/50">
            <button
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-white"
            >
                <span className="text-base font-medium text-zinc-200">{question}</span>
                <span className="ml-4 shrink-0 text-xl text-zinc-500">
                    {open ? "−" : "+"}
                </span>
            </button>
            {open && (
                <p className="pb-5 text-sm leading-relaxed text-zinc-400">{answer}</p>
            )}
        </div>
    );
}

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-[#0B0C10]">
            {/* Hero */}
            <section className="px-4 pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="container mx-auto max-w-4xl text-center">
                    <Reveal direction="up">
                        <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                            Her Ölçekteki Finans Ekibi İçin Otonom Güç.
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-zinc-400">
                            Karmaşık lisanslama modelleri yok. Şeffaf fiyatlandırma ile sadece
                            ihtiyacınız olan değere ödeme yapın.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="px-4 pb-16 md:pb-24">
                <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
                    {plans.map((plan, index) => (
                        <Reveal key={plan.name} direction="up" delay={0.1 + index * 0.15}>
                            <div
                                className={`relative flex h-full flex-col rounded-2xl border p-8 backdrop-blur-xl transition-all duration-300 ${plan.highlight
                                        ? "border-[#E5F33D]/50 bg-[#11121A] shadow-[0_0_40px_rgba(229,243,61,0.06)]"
                                        : "border-zinc-800 bg-[#11121A]"
                                    }`}
                            >
                                {/* Badge */}
                                {plan.badge && (
                                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                                        <span className="rounded-full bg-[#E5F33D] px-4 py-1 text-xs font-bold text-black">
                                            {plan.badge}
                                        </span>
                                    </div>
                                )}

                                {/* Plan Name */}
                                <h3 className="mb-4 text-lg font-semibold text-zinc-300">
                                    {plan.name}
                                </h3>

                                {/* Price */}
                                <div className="mb-8">
                                    <span className="text-5xl font-extrabold text-white">
                                        {plan.price}
                                    </span>
                                    {plan.period && (
                                        <span className="ml-1 text-base text-zinc-500">
                                            {plan.period}
                                        </span>
                                    )}
                                </div>

                                {/* Features */}
                                <ul className="mb-10 flex flex-1 flex-col gap-4">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3">
                                            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E5F33D]/15 text-[#E5F33D]">
                                                <Check className="h-3 w-3" />
                                            </div>
                                            <span className="text-sm text-zinc-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <Link
                                    href="/request-demo"
                                    className={`inline-flex h-12 w-full items-center justify-center rounded-lg text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#E5F33D] focus:ring-offset-2 focus:ring-offset-[#11121A] ${plan.ctaStyle}`}
                                >
                                    {plan.cta}
                                </Link>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="px-4 pb-24 md:pb-32">
                <div className="container mx-auto max-w-3xl">
                    <Reveal direction="up">
                        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
                            Sıkça Sorulan Sorular
                        </h2>
                    </Reveal>
                    <Reveal direction="up" delay={0.2}>
                        <div className="rounded-2xl border border-zinc-800 bg-[#11121A] px-8">
                            {faqs.map((faq) => (
                                <FaqItem
                                    key={faq.question}
                                    question={faq.question}
                                    answer={faq.answer}
                                />
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
