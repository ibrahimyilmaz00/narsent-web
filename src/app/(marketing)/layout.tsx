import { MegaMenu } from "@/src/components/layout/MegaMenu";
import { Footer } from "@/src/components/layout/Footer";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MegaMenu />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
