# Changelog

### 2.2.0 (2026-07-14) - ABB Lifter Force Analysis Study

- Added the ABB Lifter Force Analysis Study: a main page (`/projects/abb-lifter`)
  plus two in-depth subpages, the Shaft Lifter Study (`/projects/abb-lifter-shaft`)
  and the Case Lifter Study (`/projects/abb-lifter-case`), linked from the main
  page with the site's standard button style.
- Main page mirrors the analysis summary of both lifters (objective, measured
  basis, multiplier-versus-angle mechanics, headline results, recommendations)
  with a callout on why the top hinge carries no horizontal force. Cover figure
  is the true-scale travel envelope.
- Shaft page presents capacity as pin-governed (474 kg rated at SF 1.5, 786 kg at
  the shear allowable) with an open-items punch list, and frames the arm check as
  a model-limits note (the simple central-load bending idealization is
  inconsistent with the machine's observed service, so a beam-column check against
  the true axial load path is the open item, now with the measured section).
  Actuation-side components including the cylinder cross member are stated once as
  a vendor-scope exclusion.
- Case page publishes as passing across the whole envelope with cylinder
  synchronization as the sole open risk, and an informational flag that the
  bushing material bearing pressure limit was not evaluated.
- Added a non-featured project card. Copied 13 analysis figures into
  `public/images/projects/abb-lifter/`; used only the clean derived schematics and
  excluded all raw CAD screenshots (which the source flags as carrying customer
  part identifiers). No customer, vendor, or part-number strings appear.

### 2.1.2 (2026-07-13) - koi wiki and APEX em-dash sweep

- Added a basic wiki subpage for K's Koi Mod (`/projects/koi-mod-wiki`), linked
  from the koi-mod project page. Scope is only what the source implements: the
  nine-colour breeding ladder (rung table, same-colour 10% promotion capped at
  violet, mixed-colour random inheritance, litter-size odds, fry growth) and the
  one custom item, Koi Pellets (shapeless bone-meal-plus-seeds recipe yielding 4,
  used to breed, raise fry, and lure/school koi).
- Swept every em dash out of the APEX page (69 characters across the body copy),
  replacing each with the correct punctuation (comma, colon, period, or
  parentheses) with no rewording; the "excluded" list glyphs became red crosses.

### 2.1.1 (2026-07-13) - add K's Koi Mod

- Added K's Koi Mod as a non-featured completed project, with a case study page
  (`/projects/koi-mod`). A self-built Forge 1.16.5 mini-mod (Java 8, ForgeGradle
  5) that adds koi fish with natural water spawning, a pellet lure, and a
  nine-colour breeding ladder. Verified on disk: gradle build logs report success
  and a complete loadable jar (`kkoi-1.0.6.jar`) exists with classes and assets.
  Described only as what the code implements; no external link (no public repo or
  CurseForge listing found).

### 2.1.0 (2026-07-13) - content refresh (completed projects only)

- Added RobotDraw as the flagship project, with a full case study page
  (`/projects/robotdraw`). SVG-to-RAPID converter, hardware-validated on an IRB
  1100 across five drawings, framed with the troubleshoot / simulate / build
  triad. v1 hardware validation stated as fact; the Pro fork and June fixes are
  labeled simulator-tested only.
- Added Yumi TTS as a running project, with a case study page
  (`/projects/yumi-tts`) and a clearly marked demo-video placeholder for K to
  drop in his own recording. Voice-to-RAPID on a physical ABB YuMi, 44 green
  Python tests.
- Added rapid-lint as a built, pre-release tool, with a case study page
  (`/projects/rapid-lint`). Geometric linter for offline-generated RAPID; 66
  green tests verified on disk.
- Tightened APEX wording to claims-true: local prototype, synthetic data,
  demo-quality, not deployed (config entry plus the APEX page tagline, summary,
  and claim box).
- Promoted RobotDraw and Yumi TTS to the two featured homepage slots alongside
  the Water Opacity Sensor; C3 and Pontoon remain on the projects page.
- Fixed the Pyramid of Light and APEX cards to use `image` so thumbnails render
  (they previously used an unused `hero` field); removed APEX's incorrect
  pointer at the Pyramid hero image.
- Tightened the skills array against the honest full-stack map: added the strong
  robotics rows (RAPID, RobotStudio, Industrial Robot Programming, Offline
  Programming) plus Flask and software testing; left the hollow-middle areas
  (ROS 2, MoveIt, perception, closed-loop control, motion planning) off.

### 2.0.0

- Complete rewrite of the template using Astro and Tailwind

### 1.2.2

- Updated dependencies and gulpfile

### 1.2.1

- Updated dependencies and gulpfile
- Added `no-image` optional class for projects without images (see above for
  usage)

### 1.2.0

- Added support for optional "Show More Projects" that hides some projects by
  default if included
- Added optional sections to display certifications, languages, etc.

### 1.1.3

- Added default favicon to be used or changed
- Added `sticky` class to make header fixed
- Updated docs to add image section

### 1.1.2

- Added `no-scroll` class option to header navigation anchor if you want to link
  to external site
- Changed contact form input / textarea colours to be based off `$base-color`
- Changed main background to 100vh so it doesn't overflow if viewport height <
  700px

### 1.1.1

- Made input placeholder text more readable
- Removed timeline line when no JS
- Added some basic styling to timeline when no JS

### 1.1.0

- Fixed menu toggle on mobile devices
- Fixed z-index / scrolling issue with mobile menu
- Mobile menu now closes once a nav element is hit
