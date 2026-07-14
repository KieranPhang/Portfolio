# Changelog

### 2.1.0 (2026-07-13) — content refresh (completed projects only)

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
