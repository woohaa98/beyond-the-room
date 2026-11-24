# Beyond the Room site rules

Product site for the Beyond the Room framework by Woohee (Elise) Kwak, served by GitHub Pages from `main`. Work on a branch and open a pull request. Nothing merges to `main` (which publishes the site) without Elise's explicit approval.

## Privacy guardrails
1. Collect nothing: no analytics, cookies, tracking pixels, forms that submit, or server endpoints. No `fetch`, `XMLHttpRequest`, `sendBeacon` or WebSockets.
2. No third parties that see visitors: no external scripts, embeds, CDNs or web fonts. Fonts are self-hosted in `fonts/`. Plain outbound links are fine.
3. Contact happens only through `mailto:` links the visitor chooses to use.
4. Never present the framework or tools as therapy or crisis support; keep the 988 note in the footer.

Before merging, check: `grep -rnE "googleapis|gstatic|gtag|analytics|fetch\(|sendBeacon|XMLHttpRequest" --include=*.html --include=*.js --include=*.css .` returns nothing.
