import HeroSection from "@/components/homepage/herosection";
import TrustedBy from "@/components/homepage/trustedby";
import PageWrapper from "@/components/wrapper/page-wrapper";

export default function Page() {
  return (
    <PageWrapper>
      <HeroSection />
      <TrustedBy />
    </PageWrapper>
  );
}
