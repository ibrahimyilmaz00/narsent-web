import { HeroSection } from "@/src/components/landing/HeroSection";
import { LogoStrip } from "@/src/components/landing/LogoStrip";
import { PainPoints } from "@/src/components/landing/PainPoints";
import { StrategicPillars } from "@/src/components/landing/StrategicPillars";
import { FlagshipProducts } from "@/src/components/landing/FlagshipProducts";
import { TrustAndGovernance } from "@/src/components/landing/TrustAndGovernance";
import { CtaSection } from "@/src/components/landing/CtaSection";

export default function MarketingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0B0C10] text-white">
      <HeroSection />
      <LogoStrip />
      <PainPoints />
      <StrategicPillars />
      <FlagshipProducts />
      <TrustAndGovernance />
      <CtaSection />
    </div>
  );
}
