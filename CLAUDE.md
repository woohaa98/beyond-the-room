# Beyond the Room site rules

Product site for the Beyond the Room framework by Woohee (Elise) Kwak, served by GitHub Pages from `main` at beyondtheroomtherapy.com. It hosts the interactive tools (`tools/`), the Therapy Resources library (`resources/`), the For Therapists toolkit (`therapists/`), the privacy page (`privacy/`) and the partner page (`partners/`). Work on a branch and open a pull request. Nothing merges to `main` (which publishes the site) without Elise's explicit approval, and any clinical or psychoeducational content gets her review first.

## Privacy guardrails (apply to every page and tool)

1. **Collect nothing.** No accounts, form submissions, server endpoints, analytics, tracking pixels, cookies, or error reporting. No `fetch`, `XMLHttpRequest`, `sendBeacon` or WebSockets that send what a person types. The one allowed `fetch` is in `resources/assets/app.js`, which reads this site's own diagram files (a same-site GET; nothing is sent).
2. **No third parties that see visitors.** No external scripts, embeds, CDNs or web fonts. Fonts are self-hosted (`fonts/`, `resources/assets/fonts/`, `tools/assets/`). Plain outbound links are fine.
3. **Save only on the device.** If a tool saves progress, use `localStorage` on that browser only, wrapped in try/catch, and the tool must work without it.
4. **One-tap erase.** Any tool that saves must have a visible "Erase my answers" button that clears everything it stored.
5. **Say it plainly.** Every tool states near the top that nothing leaves the device, using wording like "Nothing is saved, tracked, or sent anywhere" (no saving) or "Your progress saves on this device. Nothing is sent anywhere unless you choose to share it" (with saving).
6. **The person shares, not the site.** Results leave a tool only by the person's own action: print, Save as PDF, copy text, or a `mailto:` link that opens their own email app for them to review and send. Contact happens only through `mailto:` links.
7. **No clinical records.** Clinical measures and anything tied to a named client belong in the practice's own systems, never on this site.
8. **Crisis line.** Tools touching distress link to 988 or the existing grounding pattern, and never present themselves as therapy or crisis support. Keep the 988 note in the footer.

Therapist links use `?from=Name&reply=email`; tools show the therapist's name only when opened from such a link.

Before merging, check: `grep -rnE "googleapis|gstatic|gtag|analytics|fetch\(|sendBeacon|XMLHttpRequest" --include=*.html --include=*.js --include=*.css .` returns nothing new (allowed: the `resources/assets/app.js` diagram fetch, comments, and "no analytics" prose).

The public-facing version of these rules is `privacy/index.html`. Keep the two in step.
