# SynexCloud Design System — Standalone JSX+Tailwind Components

Each file is a self-contained JSX+Tailwind component. They use Tailwind CSS semantic tokens defined in the design system's `index.css`.

## Requirements
- Tailwind CSS v3 with the SynexCloud `index.css` tokens loaded
- Google Fonts: Roboto (400, 500, 700)
- Lucide React for icons (`lucide-react`)
- React Router DOM v6 for `<Link>` components (can be replaced with `<a>` tags)
- shadcn/ui components (Button, Input, Label, Textarea, Tabs, Accordion) — or replace with native equivalents

## Component Index

| File | Description |
|---|---|
| `HeroSection.jsx` | Landing hero — split layout with copy + compliance dashboard |
| `FeaturesSection.jsx` | 2×2 benefit cards + 2 service CTA cards |
| `BentoSection.jsx` | 5-card bento grid showcasing platform features |
| `OpportunitiesSection.jsx` | 3-column CTA cards (partner, pilot, demo) |
| `BlogSection.jsx` | 3-column blog preview with category badges |
| `LogoCloudSection.jsx` | Trusted-by logo strip with light/dark variants |
| `DemosSection.jsx` | Phone mockup demo cards with hover effect |
| `PracticalGuideSection.jsx` | 3-column numbered step cards |
| `BatteryHeroSection.jsx` | Battery regulation page hero |
| `KeyRequirements.jsx` | 4-card regulation requirements grid |
| `ComplianceBenefits.jsx` | 2-column compliance benefits with checklist |
| `ServicesTabsSection.jsx` | Tabbed services section (supports image layout) |
| `ConsultationCTA.jsx` | Centered consultation call-to-action |
| `BatteryPassportOverview.jsx` | Battery passport overview with stakeholder cards |
| `FAQSection.jsx` | Accordion FAQ section |
| `NotFound.jsx` | 404 error page |
| `ContactSection.jsx` | Inline contact form with info sidebar |
| `ContactDialog.jsx` | Popup contact dialog |
| `ResourceBlogSection.jsx` | Blog with search, filter, load more |
| `ResourceDownloadsSection.jsx` | Downloadable resource cards with cover preview |
| `ConsultingNavSection.jsx` | Service navigation cards |
| `Footer.jsx` | Full footer with nav columns, newsletter, socials |
| `Navbar.jsx` | Sticky navbar with mega-menu and mobile sheet drawer |
| `HeroGridBackground.jsx` | Reusable SVG grid backdrop |
| `PageHeaders.jsx` | 4 page header variants (Watermark, CloudTrail, HeroGrid, AccentBar) |
