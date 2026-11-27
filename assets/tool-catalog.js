/* Beyond the Room tool catalog and taxonomy.
   One place to describe every tool, so pages can group and filter them.
   Static data only: nothing is stored, tracked, or sent.
   To add a tool: add one entry to TOOLS using the keys defined in APPROACHES and CONCERNS.
   Definitions and review notes live in TAXONOMY.md. */
(function () {
  var APPROACHES = [
    { key: "cbt",       label: "CBT & behavioral",            includes: "Cognitive Behavioral Therapy, Behavioral Activation, Exposure & Response Prevention, worry postponement" },
    { key: "act",       label: "Acceptance & mindfulness",    includes: "Acceptance & Commitment Therapy, mindfulness, RAIN" },
    { key: "dbt",       label: "DBT skills",                  includes: "Dialectical Behavior Therapy skills" },
    { key: "parts",     label: "Parts work & self-compassion", includes: "Internal Family Systems-informed, self-compassion, compassion-focused" },
    { key: "systems",   label: "Couples & family systems",    includes: "Gottman Method, family systems, genograms" },
    { key: "meaning",   label: "Narrative, meaning & strengths", includes: "Narrative Therapy, meaning-centered, positive psychology" }
  ];

  var CONCERNS = [
    { key: "anxiety",    label: "Anxiety, worry & panic" },
    { key: "ocd",        label: "OCD & urges" },
    { key: "mood",       label: "Low mood & burnout" },
    { key: "avoidance",  label: "Avoidance & procrastination" },
    { key: "emotions",   label: "Difficult emotions" },
    { key: "thoughts",   label: "Unhelpful thinking" },
    { key: "critic",     label: "Inner critic" },
    { key: "boundaries", label: "Boundaries & people-pleasing" },
    { key: "couples",    label: "Couples & communication" },
    { key: "family",     label: "Family & culture" },
    { key: "identity",   label: "Identity & life transitions" },
    { key: "values",     label: "Values & direction" },
    { key: "hope",       label: "Hope & motivation" },
    { key: "selfcare",   label: "Self-care" }
  ];

  /* card: the id of the tool's card on the tools page.
     modalities: the specific methods, as named on the card.
     mins: typical minutes (low end), used for the time filter.
     summary: ends with a summary the client can choose to share with their therapist.
     format: "individual" or "couples". */
  var TOOLS = [
    { id: "values-clarification", card: "tool-values",     approaches: ["act"],             modalities: ["ACT", "Work values"],                         concerns: ["values", "identity"],      mins: 10, summary: true,  format: "individual" },
    { id: "untangle-the-pattern", card: "tool-untangle",   approaches: ["cbt"],             modalities: ["CBT", "Behavioral experiments"],              concerns: ["thoughts", "anxiety"],     mins: 10, summary: true,  format: "individual" },
    { id: "daily-nourishment",    card: "tool-nourish",    approaches: ["act", "meaning"],  modalities: ["ACT", "Mindfulness", "Meaning-centered"],     concerns: ["selfcare", "mood"],        mins: 3,  summary: false, format: "individual" },
    { id: "meet-the-feeling",     card: "tool-feeling",    approaches: ["act"],             modalities: ["RAIN", "Emotion labeling", "Mindful grounding"], concerns: ["emotions", "anxiety"],   mins: 5,  summary: true,  format: "individual" },
    { id: "parts-of-me",          card: "tool-parts",      approaches: ["parts"],           modalities: ["IFS-informed", "Self-compassion"],            concerns: ["critic", "emotions"],      mins: 10, summary: true,  format: "individual" },
    { id: "ride-the-wave",        card: "tool-wave",       approaches: ["cbt"],             modalities: ["ERP", "CBT for panic"],                       concerns: ["ocd", "anxiety"],          mins: 10, summary: true,  format: "individual" },
    { id: "small-steps",          card: "tool-steps",      approaches: ["cbt"],             modalities: ["Behavioral activation"],                      concerns: ["mood", "avoidance"],       mins: 3,  summary: true,  format: "individual" },
    { id: "kind-boundaries",      card: "tool-boundaries", approaches: ["dbt"],             modalities: ["DBT interpersonal effectiveness (DEAR MAN)"], concerns: ["boundaries"],              mins: 7,  summary: true,  format: "individual" },
    { id: "gentle-start-up",      card: "tool-startup",    approaches: ["systems"],         modalities: ["Gottman Method"],                             concerns: ["couples"],                 mins: 7,  summary: true,  format: "couples" },
    { id: "life-chapters",        card: "tool-chapters",   approaches: ["meaning"],         modalities: ["Narrative Therapy"],                          concerns: ["identity"],                mins: 8,  summary: true,  format: "individual" },
    { id: "best-possible-self",   card: "tool-bps",        approaches: ["meaning"],         modalities: ["Positive psychology"],                        concerns: ["hope", "values"],          mins: 7,  summary: true,  format: "individual" },
    { id: "drop-the-rope",        card: "tool-rope",       approaches: ["act"],             modalities: ["ACT: willingness & acceptance"],              concerns: ["avoidance", "emotions"],   mins: 6,  summary: true,  format: "individual" },
    { id: "self-compassion-break", card: "tool-compassion", approaches: ["parts"],           modalities: ["Self-compassion (Neff)", "Compassion-focused"], concerns: ["critic", "emotions"],     mins: 4,  summary: true,  format: "individual" },
    { id: "worry-time",           card: "tool-worry",      approaches: ["cbt", "act"],      modalities: ["Worry postponement", "Defusion"],           concerns: ["anxiety", "thoughts"],     mins: 15, summary: true,  format: "individual" },
    { id: "roots-and-messages",   card: "tool-roots",      approaches: ["systems"],         modalities: ["Genogram", "Family systems"],                 concerns: ["family", "identity"],      mins: 12, summary: true,  format: "individual" }
  ];

  window.BTR_CATALOG = { approaches: APPROACHES, concerns: CONCERNS, tools: TOOLS };
})();
