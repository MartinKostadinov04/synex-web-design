import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import BentoSection from "@/components/landing/BentoSection";
import LogoCloudSection from "@/components/landing/LogoCloudSection";
import ContactSection from "@/components/contact/ContactSection";

/**
 * Background Treatment Ideation Page
 *
 * 6 strategies for section backgrounds:
 *   A — Flat white (no treatment)
 *   B — Alternating white / secondary
 *   C — Subtle gradient shifts between sections
 *   D — Dot pattern + gradient (current FeaturesSection style)
 *   E — Brand gradient wash (warm orange glow across page)
 *   F — Navy-anchored (dark header/footer bookends with light middle)
 */

type Strategy = "A" | "B" | "C" | "D" | "E" | "F";

const strategies: { key: Strategy; label: string; description: string }[] = [
  {
    key: "A",
    label: "Flat White",
    description: "No background treatment — pure white everywhere. Clean but can feel sterile.",
  },
  {
    key: "B",
    label: "Alternating Bands",
    description: "Classic white ↔ secondary/muted zebra striping. Separates sections visually.",
  },
  {
    key: "C",
    label: "Gradient Shifts",
    description: "Each section subtly shifts hue — white → warm cream → cool grey → white. Organic flow.",
  },
  {
    key: "D",
    label: "Pattern + Gradient",
    description: "Dot pattern overlay with diagonal gradient. Adds texture and depth without imagery.",
  },
  {
    key: "E",
    label: "Brand Warm Wash",
    description: "Subtle orange glow radiates from hero downward, fading to white. Branded but soft.",
  },
  {
    key: "F",
    label: "Navy Bookends",
    description: "Dark navy hero + footer with light middle sections. Creates strong visual anchoring.",
  },
];

// Background wrappers per strategy
const sectionBg = (strategy: Strategy, index: number): string => {
  switch (strategy) {
    case "A":
      return "bg-background";
    case "B":
      return index % 2 === 0 ? "bg-background" : "bg-secondary/50";
    case "C": {
      const shifts = [
        "bg-background",
        "bg-gradient-to-b from-background to-accent/20",
        "bg-gradient-to-b from-accent/20 to-secondary/50",
        "bg-gradient-to-b from-secondary/50 to-muted/30",
        "bg-gradient-to-b from-muted/30 to-background",
      ];
      return shifts[index % shifts.length];
    }
    case "D": return ""; // handled inline
    case "E": return ""; // handled inline
    case "F":
      return index === 0
        ? "" // hero gets special treatment
        : index % 2 === 0
        ? "bg-background"
        : "bg-secondary/30";
  }
};

const BackgroundIdeation = () => {
  const [active, setActive] = useState<Strategy>("B");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Sticky switcher bar */}
      <div className="sticky top-16 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container py-3">
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider shrink-0">
              Background:
            </span>
            {strategies.map((s) => (
              <button
                key={s.key}
                onClick={() => setActive(s.key)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                  active === s.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {s.key}. {s.label}
              </button>
            ))}
          </div>
          <p className="mt-1.5 text-xs text-muted-foreground">
            {strategies.find((s) => s.key === active)?.description}
          </p>
        </div>
      </div>

      {/* === Page content with dynamic backgrounds === */}
      <main className="flex-1">
        {/* Section 0: Hero */}
        {active === "F" ? (
          <div className="relative bg-[hsl(var(--synex-navy-1))]">
            {/* Override hero text colors for dark bg */}
            <div className="[&_h1]:text-white [&_.text-foreground]:text-white [&_.text-muted-foreground]:text-white/70 [&_.text-accent-foreground]:text-white [&_.bg-accent]:bg-white/10 [&_.bg-primary\\/10]:bg-primary/20 [&_.bg-primary\\/5]:bg-primary/10 [&_.bg-card]:bg-white/5 [&_.border-border]:border-white/10 [&_.bg-secondary]:bg-white/10 [&_.text-sm.text-muted-foreground]:text-white/60 [&_.font-semibold.text-foreground]:text-white [&_.font-medium.text-foreground]:text-white">
              <HeroSection />
            </div>
          </div>
        ) : active === "E" ? (
          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[hsl(var(--synex-orange)/0.06)] via-[hsl(var(--synex-orange-light)/0.04)] to-transparent" />
            <HeroSection />
          </div>
        ) : active === "D" ? (
          <div className="relative">
            <div
              className="absolute inset-0 -z-10 opacity-[0.35]"
              style={{
                backgroundImage: "radial-gradient(hsl(var(--foreground) / 0.06) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-muted/50 via-background to-accent/20" />
            <HeroSection />
          </div>
        ) : (
          <div className={sectionBg(active, 0)}>
            <HeroSection />
          </div>
        )}

        {/* Section 1: Logo Cloud */}
        {active === "D" ? (
          <div className="relative">
            <div
              className="absolute inset-0 -z-10 opacity-[0.25]"
              style={{
                backgroundImage: "radial-gradient(hsl(var(--foreground) / 0.06) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/20 to-secondary/40" />
            <LogoCloudSection />
          </div>
        ) : active === "E" ? (
          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[hsl(var(--synex-orange-light)/0.03)] to-transparent" />
            <LogoCloudSection />
          </div>
        ) : (
          <div className={sectionBg(active, 1)}>
            <LogoCloudSection />
          </div>
        )}

        {/* Section 2: Features */}
        {active === "D" ? (
          <FeaturesSection />
        ) : active === "E" ? (
          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-[hsl(var(--synex-orange)/0.03)] to-accent/10" />
            <FeaturesSection />
          </div>
        ) : (
          <div className={sectionBg(active, 2)}>
            <FeaturesSection />
          </div>
        )}

        {/* Section 3: Bento */}
        {active === "D" ? (
          <div className="relative">
            <div
              className="absolute inset-0 -z-10 opacity-[0.3]"
              style={{
                backgroundImage: "radial-gradient(hsl(var(--foreground) / 0.06) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-tl from-secondary/50 via-background to-accent/15" />
            <BentoSection />
          </div>
        ) : active === "E" ? (
          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/10 to-background" />
            <BentoSection />
          </div>
        ) : (
          <div className={sectionBg(active, 3)}>
            <BentoSection />
          </div>
        )}

        {/* Section 4: Contact */}
        {active === "D" ? (
          <div className="relative">
            <div
              className="absolute inset-0 -z-10 opacity-[0.2]"
              style={{
                backgroundImage: "radial-gradient(hsl(var(--foreground) / 0.06) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-muted/40 via-background to-primary/5" />
            <ContactSection />
          </div>
        ) : active === "E" ? (
          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[hsl(var(--synex-orange)/0.04)] to-background" />
            <ContactSection />
          </div>
        ) : active === "F" ? (
          <div className="bg-secondary/20">
            <ContactSection />
          </div>
        ) : (
          <div className={sectionBg(active, 4)}>
            <ContactSection />
          </div>
        )}
      </main>

      {/* Footer — navy override for strategy F */}
      {active === "F" ? (
        <div className="bg-[hsl(var(--synex-navy-1))] [&_footer]:bg-transparent [&_footer]:border-white/10 [&_.text-foreground]:text-white [&_.text-muted-foreground]:text-white/60 [&_.text-sm.font-semibold]:text-white [&_.border-border]:border-white/10 [&_a]:text-white/60 [&_a:hover]:text-white [&_input]:bg-white/5 [&_input]:border-white/10 [&_input]:text-white [&_input::placeholder]:text-white/40">
          <Footer />
        </div>
      ) : (
        <Footer />
      )}
    </div>
  );
};

export default BackgroundIdeation;
