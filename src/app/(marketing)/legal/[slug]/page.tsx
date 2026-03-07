import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Define the content dynamically based on the slug
const legalContent: Record<string, { title: string; content: React.ReactNode }> = {
    privacy: {
        title: "Privacy Policy",
        content: (
            <>
                <p>
                    Effective Date: March 2026
                </p>
                <p>
                    At Narsent, we are committed to maintaining the highest standards of data privacy and security.
                    This Privacy Policy outlines our practices regarding data collection, storage, and processing
                    within our Zero-Trust Framework.
                </p>
                <h2>1. Data Collection</h2>
                <p>
                    We collect enterprise financial data exclusively for the purpose of providing our autonomous liquidity forecasting
                    and AP/AR reconciliation services. This includes ERP ledger entries, bank statement feeds, and associated metadata.
                    We do not collect personal consumer data.
                </p>
                <h2>2. Zero-Trust Storage Framework</h2>
                <p>
                    All client data is isolated within dedicated, single-tenant architectures. We utilize AES-256 encryption for data
                    at rest and TLS 1.3 for data in transit. Your financial data is structurally compartmentalized and is never pooled
                    or used to train public foundational AI models.
                </p>
                <h2>3. Third-Party Service Providers</h2>
                <p>
                    We engage with industry-leading infrastructure providers (e.g., AWS, Microsoft Azure) who strictly adhere to SOC 2 Type II
                    and ISO 27001 compliance standards. These providers act as sub-processors and are contractually bound to maintain
                    our stringent security protocols.
                </p>
            </>
        ),
    },
    terms: {
        title: "Terms of Service",
        content: (
            <>
                <p>
                    Effective Date: March 2026
                </p>
                <p>
                    By accessing or using the Narsent platform, integrating via our APIs, or deploying our Zero-Touch connectors,
                    you agree to be bound by these Terms of Service. These terms govern the enterprise relationship between your
                    organization and Narsent Inc.
                </p>
                <h2>1. Service Provisioning</h2>
                <p>
                    Narsent grants your organization a non-exclusive, non-transferable, revocable license to access the autonomous finance
                    platform according to your subscribed tier (Advanced or Enterprise). We guarantee a 99.9% uptime SLA for Enterprise
                    customers, detailed in a separate Service Level Agreement annex.
                </p>
                <h2>2. Acceptable Use</h2>
                <p>
                    The platform must only be used for legitimate corporate treasury, forecasting, and accounting operations.
                    Attempts to reverse-engineer the Horizon AI predictive models, overload API endpoints via volumetric attacks,
                    or bypass the multi-entity access controls will result in immediate tenant suspension.
                </p>
                <h2>3. Limitation of Liability</h2>
                <p>
                    While Horizon AI provides high-accuracy predictive scenarios, all financial, investment, and operational decisions
                    made based on the platform's outputs are the sole responsibility of the user. Narsent shall not be held liable for
                    indirect, consequential, or economic damages resulting from strategic business decisions.
                </p>
            </>
        ),
    },
    kvkk: {
        title: "GDPR & KVKK Compliance",
        content: (
            <>
                <p>
                    Effective Date: March 2026
                </p>
                <p>
                    Narsent operates in full compliance with the General Data Protection Regulation (GDPR) and the Turkish Personal Data
                    Protection Law (KVKK). As a B2B SaaS provider, we typically act as a Data Processor on behalf of our clients (the Data Controllers).
                </p>
                <h2>1. Lawful Basis for Processing</h2>
                <p>
                    We process corporate and associated contact data strictly on the basis of Legitimate Interest and Contractual Necessity,
                    ensuring the technical delivery of our platform. We implement regular Data Protection Impact Assessments (DPIAs) for all
                    major architectural changes.
                </p>
                <h2>2. Data Subject Rights</h2>
                <p>
                    Authorized users within client organizations retain full rights to request access, rectification, restricted processing,
                    and erasure (Right to be Forgotten) of any personally identifiable information (PII) residing on our servers, such as
                    authentication logs or contact profiles.
                </p>
                <h2>3. Cross-Border Data Transfers</h2>
                <p>
                    We utilize Standard Contractual Clauses (SCCs) and verified localized data residency options. For compliance with KVKK,
                    data localization requirements are strictly adhered to via localized deployment centers, ensuring data sovereignty for
                    Turkish enterprise entities.
                </p>
            </>
        ),
    },
    cookies: {
        title: "Cookie Policy",
        content: (
            <>
                <p>
                    Effective Date: March 2026
                </p>
                <p>
                    Narsent selectively uses cookies and similar tracking technologies to ensure the secure and functional operation
                    of our web application, as well as to aggregate usage telemetry for platform optimization.
                </p>
                <h2>1. Essential Cookies</h2>
                <p>
                    These cookies are strictly necessary to provide you with the services available through our platform and to use some
                    of its features, such as secure authentication sessions via OAuth2/SAML, CSRF protection tokens, and load balancing routing.
                    They cannot be disabled.
                </p>
                <h2>2. Performance and Analytics Cookies</h2>
                <p>
                    We utilize privacy-first analytics tools to understand how users interact with the Horizon AI dashboard and Nexus integrations.
                    This data is universally anonymized and aggregated. It helps us improve interface latency and workflow efficiency.
                </p>
                <h2>3. Managing Cookie Preferences</h2>
                <p>
                    System administrators can configure corporate browser policies to block non-essential cookies. However, blocking essential
                    session cookies will render the Narsent application functionally inaccessible due to state-management requirements.
                </p>
            </>
        ),
    },
};


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const content = legalContent[resolvedParams.slug];

    if (!content) {
        return {
            title: "Not Found | Narsent",
        };
    }

    return {
        title: `${content.title} | Narsent`,
        description: `Read the ${content.title} documents for Narsent.`,
    };
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const content = legalContent[resolvedParams.slug];

    if (!content) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#0B0C10] pb-24 pt-32">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-12">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Home
                        </Link>
                    </div>

                    <div className="mb-12 border-b border-zinc-800 pb-8">
                        <h1 className="mb-4 text-3xl font-extrabold text-white md:text-5xl">
                            {content.title}
                        </h1>
                        <p className="text-sm font-medium text-zinc-500">
                            Last Updated: March 2026
                        </p>
                    </div>

                    <div className="prose prose-invert max-w-none prose-headings:text-zinc-200 prose-p:text-zinc-300 prose-p:leading-relaxed prose-a:text-[#E5F33D] hover:prose-a:text-white">
                        {content.content}
                    </div>
                </div>
            </div>
        </div>
    );
}
