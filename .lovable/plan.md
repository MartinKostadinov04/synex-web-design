

## Web Design System Page

Build a live `/design-system` page that demonstrates all SynexCloud/Synex brand specifications in one interactive reference -- colors, typography, spacing, radii, buttons, cards, and component patterns. This page will serve as the single source of truth for any AI or developer reimplementing the website.

### Brand Data (from PDFs)

**Primary Colors:**
- Primary Orange: #F2641F
- Primary Grey: #474747
- Primary White: #FFFFFF

**Secondary Colors:**
- Secondary Orange: #F8AC86
- Secondary Grey-70: #0D0D0D (note: PDF label says "grey-70" but the swatch looks like #B2B2B2 -- the parsed hex #0D0D0D seems like a parsing error; will use #B2B2B2 based on the visual)
- Secondary Grey-60: #999999

**Typography Colors:**
- Text-Grey-20: #333333 (titles, headlines, big captions)
- Text-Grey-30: #4C4C4C (long descriptive text, small font)
- Web-Navy-1: #1F2937 (titles/headlines on web)
- Web-Navy-2: #4B5563 (descriptive text on web)
- Primary Orange #F2641F for highlighted text and main titles

**Font Family:** Roboto (user-specified)

### What the Page Will Contain

1. **Color Palette** -- swatches for all primary, secondary, and typography colors with hex/RGB values and usage notes
2. **Typography Scale** -- H1 through H6, subtitle, body, small/caption, all rendered live with Roboto, showing size, weight, line-height, letter-spacing, and default color
3. **Spacing System** -- visual blocks showing the spacing scale (4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px) with section padding recommendations
4. **Border Radius** -- visual examples of sm/md/lg/xl/full radius tokens
5. **Buttons** -- all variants (primary, outline, secondary, ghost, link) at default/sm/lg sizes
6. **Cards** -- card component with header, description, content, footer
7. **Form Elements** -- input, textarea, select, checkbox examples
8. **Section Spacing Guidelines** -- recommended padding between page sections, container max-widths

### Files to Create/Modify

| File | Action |
|------|--------|
| `src/pages/DesignSystem.tsx` | Create -- main design system page with all sections |
| `src/App.tsx` | Add `/design-system` route |
| `src/index.css` | Update CSS variables to match exact brand colors; add Roboto import |
| `tailwind.config.ts` | Add brand color tokens (synex-orange, synex-grey, etc.) and font-family |
| `index.html` | Add Google Fonts link for Roboto |
| `mem://index.md` | Update memory with finalized brand specs |

### Technical Details

- Import Roboto (400, 500, 700) from Google Fonts
- Map brand colors to CSS custom properties and extend Tailwind config
- The design system page will use the project's own components (Button, Card, Input, etc.) rendered as live examples
- Each section gets a clear heading, a brief usage guideline, and the live rendered component
- The page itself will use Navbar + Footer for consistency
- Update `--foreground` to use Web-Navy-1 (#1F2937) and `--muted-foreground` to Web-Navy-2 (#4B5563) per the typography PDF

