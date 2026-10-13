# Cidea Leads — Linear-inspired redesign (October 2026)

## Reference

Refero style: **Linear** — https://styles.refero.design/style/90ce5883-bb24-4466-93f7-801cd617b0d1
(“midnight precision instrument”).

Principles carried over:

- Dark surfaces as the base layer; elevation from a surface ramp (void → base → carbon → obsidian) and hairline borders, not shadows.
- A single accent used like a flashlight: lime marks the primary action per view, the brand mark and key states (qualified status, fit bars). Everything else stays neutral.
- Inter (variable, weights 400/510/590 with `cv01`, `ss03`) with tight tracking (-0.022em) at display sizes; a monospace (JetBrains Mono, standing in for Berkeley Mono) only for IDs, metadata and labels.
- 6px radius buttons, 12px cards, 4px badges, pill nav button.
- Product UI as the imagery: a framed prospect pipeline in the hero over a subtle gradient floor, a qualification board, an opportunity record and an ICP filter builder.
- Each screen has one focal point. Text-left/visual-right splits alternate with full-width product bands.

Adapted (not copied): no Linear branding or copy. All product UI shows Cidea's own process with **fictional example data
(“Regnskap A AS”, IDs `CL-10xx`), visibly labelled “Eksempeldata / Example data”**. The measurement section intentionally shows empty metrics (“—”)
until real client results exist, in line with the rule in `docs/commercial-offer.md`: never promise meetings, revenue or conversion rates.

## Palette

| Role | Token | Hex |
| --- | --- | --- |
| Primary background | `--void` | #10110F |
| Secondary background | `--graphite` | #22251F |
| Primary accent | `--lime` | #C5F467 |
| Light text | `--text` | #F5F7EF |
| Secondary accent | `--olive` | #858C7A |

Supporting shades: `--base-2` #131411, `--carbon` #171915, `--obsidian` #1C1E19 (surface ramp), `--line` #272A23 / `--line-strong` #363A31 (hairlines),
`--fog` #9AA08E (secondary text: 7:1 on void, 5.7:1 on graphite — olive alone is 4.5:1 on graphite, so it is kept for tertiary metadata), `--mist` #CFD4C4, `--error` #FF9B87.

## Architecture

Same foundation as the other Cidea sites:
- Norwegian at `/…` and English at `/en/…`.
- Prerendered pages with canonical and hreflang tags, a generated sitemap and a real 404 page.
- Full articles in both languages.
- A validated `mailto:` enquiry form. It does not post to a server.
- Pinned dependencies.

Leads-specific:

- `/how-it-works` is a full method page (phases, outputs, principles).
- Article slug fixed: the sitemap listed `/blog/hva-er-b2b-leadgenerering` while the app served `/blog/b2b-leadgenerering`. The markdown filename is now the canonical slug and the old URL 301-redirects (`netlify.toml`).

## Services and prices (from `docs/commercial-offer.md`)

- `/qualified-leads` — prospect research and qualification — **Lead Pilot, 7 500 kr**
- `/lead-generation` — ongoing lead generation — **Lead Engine, from 12 500 kr/month**
- `/b2b-leads` — sales pipeline support — part of Lead Engine
- `/custom-lead-generation` — data-driven lead systems — **Custom, scoped**
