---
name: Prime Trust Financial Design System
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#45474a'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#75777a'
  outline-variant: '#c5c6ca'
  surface-tint: '#5d5e61'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1a1c1e'
  on-primary-container: '#838486'
  inverse-primary: '#c6c6c9'
  secondary: '#775a00'
  on-secondary: '#ffffff'
  secondary-container: '#fece58'
  on-secondary-container: '#745700'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#0b1c30'
  on-tertiary-container: '#75859d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e5'
  primary-fixed-dim: '#c6c6c9'
  on-primary-fixed: '#1a1c1e'
  on-primary-fixed-variant: '#454749'
  secondary-fixed: '#ffdf9a'
  secondary-fixed-dim: '#efc04b'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#5a4300'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 34px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.015em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.005em
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.03em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
  currency-display:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2.5rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system embodies prestige, institutional stability, and sophisticated wealth advisory tailored for high-net-worth investors and modern enterprises. The aesthetic bridges the authority of traditional wealth management houses with the friction-free clarity of modern fintech architecture. 

### Visual Movement & Aesthetics
- **Style:** Corporate Modernism infused with refined metallic micro-treatments.
- **Tone:** Authoritative, disciplined, transparent, and quietly confident.
- **Philosophy:** Clean light surfaces (#FFFFFF, #F8FAFC) anchor high-density data and institutional reporting, while deep charcoal structures (#0F1113, #1A1D20) provide visual grounding. Metallic gold (#C59A27 / #D4AF37) acts as a high-value signifier for primary actions, performance deltas, and milestone states, while cool platinum accents (#E2E8F0, #CBD5E1) outline structures with precision.

## Colors

The palette balances stark corporate contrast with warm metallic distinction to create an institutional aura that never sacrifices readability or contrast ratios.

### Palette Roles
- **Primary Canvas & Surfaces:** Pure white `#FFFFFF` for data cards, statements, and inputs; crisp subtle mist `#F8FAFC` for page backgrounds and section alternates.
- **Deep Charcoal Anchors:** `#0F1113` (canvas headers, high-contrast banners, and primary CTA backgrounds) and `#1A1D20` (secondary dark components and sidebars).
- **Imperial Gold Tone Hierarchy:** 
  - Base Gold: `#C59A27` (buttons, accent borders, critical metric badges)
  - Bright Highlight: `#E5C158` (active states, hover glows, micro-indicator dots)
  - Deep Bronze Tone: `#9A781D` (text-on-light accessibility for gold highlights)
- **Platinum Accents:** `#F1F5F9` (card borders, cell dividers), `#E2E8F0` (structural outlines), and `#CBD5E1` (icon containers, muted controls).
- **Functional Semantics:**
  - Positive/Alpha Gain: `#0D9488` (teal-emerald)
  - Risk/Drawdown: `#E11D48` (refined crimson)
  - Information/Advisory: `#2563EB` (deep royal blue)

## Typography

The type system blends the geometric authority and prestige of **Plus Jakarta Sans** for prominent figures, section titling, and dashboard KPI headers, with the clinical, neutral legibility of **Inter** for tables, disclosures, fund prospectuses, and navigation items.

### Financial Formatting Standards
- **Currency Format:** Always prefix with the Indian Rupee symbol `₹` without extra space (e.g., `₹2,50,000.00` using standard Indian numbering format where thousands, lakhs, and crores are separated by commas).
- **Tabular Figures:** For all data tables, ledger views, and real-time yield changes, enable `font-feature-settings: "tnum" 1` to guarantee vertical decimal alignment.
- **Legal & Regulatory Disclosures:** Strict 11px uppercase and 12px sentence case formatting using `body-sm` and `label-sm` in slate `#64748B` to maintain compliance without cluttering the interface.

## Layout & Spacing

A structured 12-column grid system is used on desktop displays (breakpoints at 1280px and 1440px), condensing into an 8-column layout on tablet viewports (768px - 1024px) and a unified single-to-dual column grid on mobile (under 768px).

### Layout Geometry
- **Outer Shell:** Global layout constraints cap maximum content width at `1320px` to maintain optimal eye-tracking distance on wide investment terminal monitors.
- **Rhythm Rules:** Vertical spacing relies on an 8pt system. Component padding adheres strictly to `space-md` (16px) for compact analytical modules, and `space-lg` (24px) to `space-xl` (40px) for high-level portfolio overview cards.
- **Visual Sectioning:** White card containers sit upon the `#F8FAFC` foundation with strict 24px grid gutters, creating clean spatial channels that delineate asset breakdown charts from transaction histories.

## Elevation & Depth

Visual hierarchy does not rely on heavy drop shadows; instead, it uses crisp platinum borders paired with delicate, high-diffusion ambient shadows.

### Elevation Levels
- **Level 0 (Flat/Substrate):** `#F8FAFC` background without elevation.
- **Level 1 (Card & Module Foundation):** Pure `#FFFFFF` surface bordered by a 1px solid `#E2E8F0` hairline rule, lifted by an ambient shadow: `box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.02)`.
- **Level 2 (Active/Hovered Holdings Card):** Retains 1px border highlighted to `#CBD5E1` or `#D4AF37` with an ambient glow: `box-shadow: 0 10px 15px -3px rgba(15, 23, 42, 0.06), 0 4px 6px -4px rgba(15, 23, 42, 0.03)`.
- **Level 3 (Modals, Investment Slips & Drawers):** High-contrast charcoal or crisp white floating panels with a multi-layered cast shadow: `box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.05)`.
- **Subtle Metallic Accents:** Key executive metric cards feature a 1px top border gradient transition: `linear-gradient(90deg, #D4AF37 0%, #E5C158 50%, #C59A27 100%)`.

## Shapes

The design system employs a soft, architectural corner geometry (Level 1 roundedness). Radii are kept intentionally disciplined and modest (4px to 8px) to project precision, order, and institutional rigor, entirely avoiding informal bubbly forms.

### Corner Radii Guidelines
- **Input Fields, Badges, & Table Rows:** `rounded` (0.25rem / 4px).
- **Cards, Advisory Modules, & Modals:** `rounded-lg` (0.5rem / 8px).
- **Special Elements (Pills/Status Flags):** `rounded-full` reserved solely for performance pills (e.g., `+18.4% YTD`) and security status indicators.

## Components

### Buttons
- **Primary Action (Gold Prestige):** Background styled with `#C59A27`, text in `#0F1113` with medium 600 weight; on hover, shifts to `#D4AF37` with a fine 1px gold sheen border.
- **Secondary Action (Charcoal Executive):** Background `#0F1113`, text `#FFFFFF`; on hover, dark gray `#1A1D20` with a subtle platinum border transition.
- **Ghost/Tertiary:** Pure white with a 1px border of `#E2E8F0`, text in `#1E293B`, shifting to `#F8FAFC` background on hover.

### Cards & Investment Modules
- Built with a white surface, 8px corner radius, and 1px platinum border (`#E2E8F0`). 
- Premium cards (Portfolio Summary, Net Asset Value) incorporate an ultra-thin 2px gold accent trim along the top rim.

### Badges & Chips
- **KYC Verified / Security Chip:** Emerald tint background (`#ECFDF5`), deep emerald text (`#065F46`), 4px radius, paired with a miniature lock icon.
- **Growth / Yield Chip:** Crisp white background with subtle 1px border (`#C59A27`), gold or green indicator dot, and numeric figures set in tabular typography.
- **Tier Level Chip (Gold/Platinum Tier):** Deep charcoal `#0F1113` pill with metallic gold typography (`#E5C158`) and a 0.5px border of `#C59A27`.

### Financial Data Tables
- Header row styled with uppercase 11px label font (`#64748B`), `#F8FAFC` background, and 1px bottom border (`#E2E8F0`).
- Data rows feature 48px heights, alternating faint hover states (`#F1F5F9`), and numbers formatted with the Indian Rupee symbol (`₹`) in right-aligned monospace tabular figures.

### Form Inputs & Investment Slips
- Background in `#FFFFFF` with 1px border `#CBD5E1`, 4px radius, and standard padding of 12px 16px.
- Focus state delivers a 1px `#C59A27` border paired with an ambient 2px outer gold blur (`rgba(197, 154, 39, 0.15)`). Never display standard browser-native blue focus rings.

### Disclosures & Regulatory Footer Modules
- Set in `#F8FAFC` containers with a left-hand 3px solid border in `#CBD5E1`.
- Footers feature high-contrast charcoal canvas backgrounds (`#0F1113`) with muted platinum divider lines and structured links for statutory and SEBI/RBI compliance statements.