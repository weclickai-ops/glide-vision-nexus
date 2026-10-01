# Rebuild JomoLab in the Marity visual system

## Goal
Replace the current presentation end to end with a close JomoLab adaptation of the supplied Marity reference while preserving the approved page-by-page wording exactly.

## Build
- Recreate the full-bleed editorial homepage cover, compact overlay navigation, light research sections, modular rounded panels, image-led content blocks, restrained blue-grey accents, and structured dark footer.
- Apply the same system consistently across Home, About, Fu-Tech Research, Ecosystem, Members, Products & IPs, and Contact.
- Use JomoLab’s existing sustainable-future imagery and original research graphics rather than copying Marity’s proprietary photos or branded assets.
- Add smooth reference-style transitions: clipped image reveals, soft section entrances, understated card movement, navigation transitions, and reduced-motion support.
- Keep mobile navigation, layouts, type sizes, image crops, and controls polished at phone and desktop sizes.

## Content rules
- Preserve all approved PDF wording, capitalization, names, punctuation, and source spelling exactly.
- Keep Fu-Tech R&D Confederation prominent and AI as one supporting research area.
- Retain all seven separate pages and their unique page metadata.

## Verification
- Check every page at desktop and mobile sizes.
- Confirm navigation, animations, image framing, text wrapping, and footer behavior.
- Confirm all approved text remains present and the site builds and renders without errors.

## Technical details
- Continue with the existing TanStack routes and shared site frame.
- Centralize the new Marity-inspired tokens and motion in the global design system.
- Keep animations lightweight with CSS and IntersectionObserver, including reduced-motion fallbacks.
