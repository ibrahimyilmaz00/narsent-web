import Image from "next/image";

const logos = [
    { src: "/logos/logo-1.png", alt: "Partner 1" },
    { src: "/logos/logo-2.jpg", alt: "VK Boost" },
    { src: "/logos/logo-3.jpg", alt: "Teknopark" },
    { src: "/logos/logo-4.png", alt: "TİM" },
];

export function LogoStrip() {
    return (
        <section className="w-full bg-[#080a12] py-10 border-t border-b border-zinc-900/50">
            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
                <p className="mb-8 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
                    Supported by Turkey&apos;s Innovation Ecosystem
                </p>
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16">
                    {logos.map((logo) => (
                        <Image
                            key={logo.src}
                            src={logo.src}
                            alt={logo.alt}
                            width={200}
                            height={80}
                            className="object-contain h-8 md:h-14 lg:h-16 w-auto"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

