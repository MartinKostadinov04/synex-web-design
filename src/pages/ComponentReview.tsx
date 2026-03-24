import HeroSection from "@/design-system-jsx/HeroSection";
import FeaturesSection from "@/design-system-jsx/FeaturesSection";
import BentoSection from "@/design-system-jsx/BentoSection";
import OpportunitiesSection from "@/design-system-jsx/OpportunitiesSection";
import BlogSection from "@/design-system-jsx/BlogSection";
import LogoCloudSection from "@/design-system-jsx/LogoCloudSection";
import DemosSection from "@/design-system-jsx/DemosSection";
import PracticalGuideSection from "@/design-system-jsx/PracticalGuideSection";
import BatteryHeroSection from "@/design-system-jsx/BatteryHeroSection";
import KeyRequirements from "@/design-system-jsx/KeyRequirements";
import ComplianceBenefits from "@/design-system-jsx/ComplianceBenefits";
import ServicesTabsSection from "@/design-system-jsx/ServicesTabsSection";
import ConsultationCTA from "@/design-system-jsx/ConsultationCTA";
import BatteryPassportOverview from "@/design-system-jsx/BatteryPassportOverview";
import ResourceBlogSection from "@/design-system-jsx/ResourceBlogSection";
import ResourceDownloadsSection from "@/design-system-jsx/ResourceDownloadsSection";
import ConsultingNavSection from "@/design-system-jsx/ConsultingNavSection";
import ContactSection from "@/design-system-jsx/ContactSection";
import ContactDialog from "@/design-system-jsx/ContactDialog";
import FAQSection from "@/design-system-jsx/FAQSection";
import Navbar from "@/design-system-jsx/Navbar";
import Footer from "@/design-system-jsx/Footer";
import {
  PageHeaderWatermark,
  PageHeaderCloudTrail,
  PageHeaderHeroGrid,
  PageHeaderAccentBar,
} from "@/design-system-jsx/PageHeaders";
import HeroGridBackground from "@/design-system-jsx/HeroGridBackground";
import NotFound from "@/design-system-jsx/NotFound";

const sampleFaqs = [
  {
    question: "What is the EU Battery Regulation?",
    answer:
      "Regulation (EU) 2023/1542 sets comprehensive sustainability, safety, and labeling requirements for all batteries placed on the EU market — from portable batteries to EV and industrial batteries.",
  },
  {
    question: "What is a Battery Passport?",
    answer:
      "A Battery Passport is a digital product passport containing information about a battery's composition, origin, carbon footprint, and recycled content. It must be accessible via a QR code on the physical battery.",
  },
  {
    question: "When does compliance become mandatory?",
    answer:
      "The regulation has a phased timeline with different requirements entering into force between 2024 and 2027, depending on the battery category and obligation type.",
  },
  {
    question: "Does Synex handle the full implementation?",
    answer:
      "Yes — Synex offers both consulting and a purpose-built software platform to guide manufacturers from gap assessment through to full Battery Passport deployment and regulatory reporting.",
  },
];

const ComponentLabel = ({ name, category }: { name: string; category: string }) => (
  <div className="sticky top-0 z-40 border-y border-border bg-background/95 backdrop-blur px-6 py-2.5 flex items-center gap-3">
    <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
      {category}
    </span>
    <span className="text-muted-foreground/40 text-xs">/</span>
    <span className="text-sm font-semibold text-foreground">{name}</span>
  </div>
);

const ComponentReview = () => (
  <div className="min-h-screen bg-background">
    {/* Page header */}
    <div className="border-b border-border bg-primary px-6 py-4">
      <h1 className="text-lg font-bold text-primary-foreground">
        Synex Component Review
      </h1>
      <p className="text-sm text-primary-foreground/70 mt-0.5">
        All {25} design-system-jsx components — stacked for visual QA
      </p>
    </div>

    {/* ─── Global ─────────────────────────────────────────────── */}
    <ComponentLabel category="Global" name="Navbar" />
    <Navbar />

    {/* ─── Landing ────────────────────────────────────────────── */}
    <ComponentLabel category="Landing" name="HeroSection" />
    <HeroSection />

    <ComponentLabel category="Landing" name="LogoCloudSection" />
    <LogoCloudSection />

    <ComponentLabel category="Landing" name="FeaturesSection" />
    <FeaturesSection />

    <ComponentLabel category="Landing" name="BentoSection" />
    <BentoSection />

    <ComponentLabel category="Landing" name="OpportunitiesSection" />
    <OpportunitiesSection />

    <ComponentLabel category="Landing" name="DemosSection" />
    <DemosSection />

    <ComponentLabel category="Landing" name="BlogSection" />
    <BlogSection />

    <ComponentLabel category="Landing" name="PracticalGuideSection" />
    <PracticalGuideSection />

    {/* ─── Battery Reg ────────────────────────────────────────── */}
    <ComponentLabel category="Battery Reg" name="BatteryHeroSection" />
    <BatteryHeroSection />

    <ComponentLabel category="Battery Reg" name="KeyRequirements" />
    <KeyRequirements />

    <ComponentLabel category="Battery Reg" name="ComplianceBenefits" />
    <ComplianceBenefits />

    <ComponentLabel category="Battery Reg" name="ServicesTabsSection" />
    <ServicesTabsSection />

    <ComponentLabel category="Battery Reg" name="BatteryPassportOverview" />
    <BatteryPassportOverview />

    <ComponentLabel category="Battery Reg" name="ConsultationCTA" />
    <ConsultationCTA />

    {/* ─── Resources ──────────────────────────────────────────── */}
    <ComponentLabel category="Resources" name="ResourceBlogSection" />
    <ResourceBlogSection />

    <ComponentLabel category="Resources" name="ResourceDownloadsSection" />
    <ResourceDownloadsSection />

    {/* ─── Consulting ─────────────────────────────────────────── */}
    <ComponentLabel category="Consulting" name="ConsultingNavSection" />
    <ConsultingNavSection />

    {/* ─── Contact ────────────────────────────────────────────── */}
    <ComponentLabel category="Contact" name="ContactSection" />
    <ContactSection />

    <ComponentLabel category="Contact" name="ContactDialog" />
    <div className="py-16 bg-background flex items-center justify-center border-b border-border">
      <div className="text-center space-y-4">
        <p className="text-sm text-muted-foreground">
          ContactDialog renders as a modal trigger — click to preview
        </p>
        <ContactDialog />
      </div>
    </div>

    {/* ─── Shared ─────────────────────────────────────────────── */}
    <ComponentLabel category="Shared" name="FAQSection" />
    <FAQSection
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about EU Battery Regulation compliance."
      faqs={sampleFaqs}
    />

    {/* ─── Page Headers ───────────────────────────────────────── */}
    <ComponentLabel category="Page Headers" name="PageHeaderWatermark" />
    <PageHeaderWatermark
      tag="EU Battery Regulation"
      title="Navigate Battery Regulation with Confidence"
      description="Comprehensive compliance services for manufacturers placing batteries on the EU market."
    />

    <ComponentLabel category="Page Headers" name="PageHeaderCloudTrail" />
    <PageHeaderCloudTrail
      tag="ESPR"
      title="Ecodesign for Sustainable Products"
      description="Digital Product Passports, supply chain traceability, and ecodesign requirements."
    />

    <ComponentLabel category="Page Headers" name="PageHeaderHeroGrid" />
    <PageHeaderHeroGrid
      tag="Resources"
      title="Compliance Knowledge Center"
      description="Guides, checklists, and regulatory insights to keep you ahead of the curve."
    />

    <ComponentLabel category="Page Headers" name="PageHeaderAccentBar" />
    <PageHeaderAccentBar
      tag="Consulting"
      title="Expert Compliance Consulting"
      description="Hands-on strategic support from initial gap assessment to full regulatory deployment."
    />

    {/* ─── Primitives ─────────────────────────────────────────── */}
    <ComponentLabel category="Primitives" name="HeroGridBackground (usage demo)" />
    <div className="relative h-48 bg-background overflow-hidden flex items-center justify-center">
      <HeroGridBackground id="review-hero-grid" />
      <p className="relative text-sm font-medium text-muted-foreground">
        HeroGridBackground — applied as absolute SVG layer
      </p>
    </div>

    {/* ─── 404 ────────────────────────────────────────────────── */}
    <ComponentLabel category="Pages" name="NotFound (404)" />
    <div className="h-[480px] overflow-hidden relative">
      <NotFound />
    </div>

    {/* ─── Global ─────────────────────────────────────────────── */}
    <ComponentLabel category="Global" name="Footer" />
    <Footer />
  </div>
);

export default ComponentReview;
