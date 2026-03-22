

# Comprehensive Design System Review & AI Prompt Generation

## What This Plan Covers

Four deliverables in one implementation pass:

1. **Breakpoint definitions** added to the design system page
2. **Mobile-first responsive adaptations** made explicit (spacing, radii, fonts, cards)
3. **Component responsiveness audit & fixes** across all section components
4. **Footer added as a design system component**
5. **A comprehensive AI design system prompt** saved as a memory file that any AI agent can use to build pages correctly

---

## 1. Breakpoints Reference Section

Add a new section to `DesignSystem.tsx` between "Section Spacing Demo" and "CSS Design Tokens" that documents the 4 breakpoints:

```text
sm  640px   Mobile landscape / large phone
md  768px   Tablet portrait
lg  1024px  Tablet landscape / small desktop
xl  1280px  Desktop
2xl 1400px  Container max-width
```

Include a visual bar chart showing each breakpoint and what layout changes happen at each one (e.g. "grid stacks to 1 col", "footer nav hides", "navbar switches to sheet drawer").

## 2. Mobile-First Responsive Adaptations

Update the **Typography**, **Spacing**, **Radius**, **Cards**, and **Buttons** design system sections to make responsive rules explicit:

| Token area | Desktop | Mobile (< 768px) | Rule |
|---|---|---|---|
| H1 | text-4xl (40px) | text-3xl (30px) | `text-3xl sm:text-4xl` |
| H2 | text-3xl (32px) | text-2xl (24px) | `text-2xl sm:text-3xl` |
| Section padding | py-20 (80px) | py-12 (48px) | `py-12 sm:py-20` |
| Container padding | px-8 | px-4 | `px-4 sm:px-6 lg:px-8` |
| Card padding | p-6 (24px) | p-4 (16px) | `p-4 sm:p-6` |
| Card radius | rounded-2xl | rounded-xl | `rounded-xl sm:rounded-2xl` |
| Grid gaps | gap-8 | gap-6 | `gap-6 sm:gap-8` |
| Navbar | Full links | Sheet drawer | `lg:` breakpoint |
| Footer nav | 3-col grid | Hidden | `hidden md:grid` |

These will be added as a "Responsive Adaptations" reference table inside the existing sections (not a separate section).

## 3. Component Responsiveness Fixes

Based on screenshot analysis and code review, the following components need fixes:

**a) Bento Section** - Card inner padding `p-10` is too generous on mobile. Change to `p-6 sm:p-10`. The `h-80` placeholder areas should reduce to `h-48 sm:h-80`.

**b) Contact Section** - Form card padding `p-8 lg:p-10` needs a mobile step: `p-5 sm:p-8 lg:p-10`.

**c) Demos Section (PhoneMockup)** - Already responsive with `w-48 sm:w-52`. No fixes needed.

**d) Design System page itself** - The typography table overflows on mobile. Wrap in `overflow-x-auto` (already present). The color swatches grid is fine (1 col on mobile).

**e) Page Headers** - The watermark text `text-[12rem] sm:text-[16rem]` may overflow on very small screens. Add `hidden sm:block` to the watermark span on all 4 variants.

## 4. Footer as Design System Component

Add the Footer to the Section Components showcase in `DesignSystem.tsx` with its own `SectionShowcase` entry. Add `footerCode` to `section-codes.ts`.

## 5. AI Design System Prompt (Memory File)

Create `mem://design-system-prompt.md` — a comprehensive prompt (~4000-6000 words) structured as follows:

```text
# SynexCloud Design System — AI Agent Prompt

## Brand Identity
- Company, logo usage, tone of voice

## Color System
- Full token table with HSL values, hex, semantic names, and when to use each
- Mapping: --primary, --foreground, --muted-foreground, etc.

## Typography
- Font: Roboto 400/500/700
- Full scale with responsive sizes (desktop → mobile)
- Use cases: when to use H1 vs H2, body vs body-small
- Color assignments per element

## Spacing System
- 4px grid, Tailwind mapping
- Section padding responsive rules
- Container, card, grid gap standards

## Border Radius
- Token values and when to use each size
- Responsive radius reduction rules

## Breakpoints
- All 5 breakpoints with behavior descriptions
- What changes at each breakpoint

## Layout Patterns
- Container: max-w-7xl with px-6 lg:px-8
- Section structure: header (centered) + content grid
- Grid patterns: 1→2→3 col, bento 6-col

## Component Library
- Navbar: sticky, backdrop-blur, sheet drawer on mobile
- Footer: 4-col grid hidden on mobile, newsletter, socials
- Page Headers: 4 variants with props interface
- Cards: padding, radius, border, shadow conventions
- Buttons: 6 variants, 3 sizes
- Forms: label + input spacing, validation patterns
- Hero Grid Background: SVG pattern reusable component

## Animation Rules
- Scroll-triggered fade-in only
- No parallax, bounce, stagger
- transition-colors for hover states

## Do / Don't Rules
- DO use semantic tokens, NOT raw hex
- DO stack grids to 1-col on mobile
- DO use text-pretty on headlines
- DON'T use dark overlays on hero images
- DON'T add parallax or complex animations
```

This prompt will also contain the exact Tailwind class patterns to use for each element, making it copy-paste actionable for any AI agent.

---

## Files Changed

| File | Change |
|---|---|
| `src/pages/DesignSystem.tsx` | Add Breakpoints section, responsive annotations to existing sections, Footer showcase |
| `src/components/design-system/section-codes.ts` | Add `footerCode` constant |
| `src/components/landing/BentoSection.tsx` | Reduce mobile padding from p-10 to p-6 sm:p-10, h-80 to h-48 sm:h-80 |
| `src/components/contact/ContactSection.tsx` | Add mobile padding step p-5 sm:p-8 |
| `src/components/ui/page-headers.tsx` | Hide watermark text on very small screens |
| `mem://design-system-prompt.md` | New comprehensive AI prompt file |
| `mem://index.md` | Update to reference the new prompt file |

