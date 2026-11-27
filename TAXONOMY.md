# Tool taxonomy

How Beyond the Room tools are grouped so therapists can find one to send. The data lives in `assets/tool-catalog.js`; the tools page (`tools/#browse`) reads it. Clinical groupings need Elise's review before publishing.

## Facets

1. **Approach** (primary). The therapy family a tool draws on. A tool can belong to more than one.
   | Key | Label | Includes |
   |---|---|---|
   | `cbt` | CBT & behavioral | Cognitive Behavioral Therapy, Behavioral Activation, Exposure & Response Prevention |
   | `act` | Acceptance & mindfulness | Acceptance & Commitment Therapy, mindfulness, RAIN |
   | `dbt` | DBT skills | Dialectical Behavior Therapy skills |
   | `parts` | Parts work & self-compassion | Internal Family Systems-informed, self-compassion |
   | `systems` | Couples & family systems | Gottman Method, family systems, genograms |
   | `meaning` | Narrative, meaning & strengths | Narrative Therapy, meaning-centered, positive psychology |
2. **Modalities**. The specific methods, named as on the tool card (for example "ERP", "DEAR MAN").
3. **Client concern**. What the client is working on: anxiety, worry & panic; OCD & urges; low mood & burnout; avoidance & procrastination; difficult emotions; unhelpful thinking; inner critic; boundaries & people-pleasing; couples & communication; family & culture; identity & life transitions; values & direction; hope & motivation; self-care. Only concerns with at least one tool appear in the filter.
4. **Time**. Typical minutes (low end): under 5, 5 to 10, more than 10.
5. **Who it's for**. One person or couples.
6. **Session summary**. Whether the tool ends with a summary the client can choose to share.

## Current tools

| Tool | Approach | Modalities | Concerns | Min | Summary | For |
|---|---|---|---|---|---|---|
| Values Clarification | Acceptance & mindfulness | ACT, work values | values, identity | 10 | yes | one |
| Untangle the Pattern | CBT & behavioral | CBT, behavioral experiments | thinking, anxiety | 10 | yes | one |
| Daily Nourishment | Acceptance & mindfulness; Narrative, meaning & strengths | ACT, mindfulness, meaning-centered | self-care, mood | 3 | no | one |
| Meet the Feeling | Acceptance & mindfulness | RAIN, emotion labeling, grounding | emotions, anxiety | 5 | yes | one |
| Parts of Me | Parts work & self-compassion | IFS-informed, self-compassion | inner critic, emotions | 10 | yes | one |
| Ride the Wave | CBT & behavioral | ERP, CBT for panic | OCD, anxiety | 10 | yes | one |
| Small Steps | CBT & behavioral | Behavioral activation | mood, avoidance | 3 | yes | one |
| Kind Boundaries | DBT skills | DEAR MAN | boundaries | 7 | yes | one |
| Gentle Start-Up | Couples & family systems | Gottman Method | couples | 7 | yes | couples |
| Life Chapters | Narrative, meaning & strengths | Narrative Therapy | identity | 8 | yes | one |
| Best Possible Self | Narrative, meaning & strengths | Positive psychology | hope, values | 7 | yes | one |
| Drop the Rope | Acceptance & mindfulness | ACT willingness | avoidance, emotions | 6 | yes | one |
| Self-Compassion Break | Parts work & self-compassion | Self-compassion (Neff), compassion-focused | inner critic, emotions | 4 | yes | one |
| Worry Time | CBT & behavioral; Acceptance & mindfulness | Worry postponement, defusion | anxiety, thinking | 15 | yes | one |
| Roots & Messages | Couples & family systems | Genogram, family systems | family, identity | 12 | yes | one |

## Adding a tool

1. Build the tool in `tools/` following the privacy guardrails in `CLAUDE.md`.
2. Add its card to `tools/index.html` with a unique `id`.
3. Add one entry to `TOOLS` in `assets/tool-catalog.js` using existing keys. Add a new approach or concern only when no existing one fits, and record it here.
4. Add it to the share list on `therapists/index.html`.

## Open questions for review

- Is "Acceptance & mindfulness" the right home for Meet the Feeling (RAIN), or should emotion-focused work be its own approach as more tools arrive?
- Should Roots & Messages sit under "Couples & family systems" or a separate "Multicultural & family" approach?
- Future approaches likely as the catalog grows: Emotion-Focused, Somatic, Expressive arts, Solution-Focused, Motivational Interviewing, Psychodynamic.
