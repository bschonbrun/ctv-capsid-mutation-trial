// slides_a.js — opening (1-3) + PART 01 THE METHOD (4-12)
const T = require("./theme");
const G = require("./fig");
const { C, F, M, CW } = T;

function s01(pres) {
  const s = pres.addSlide(); T.bg(s, true); T.header(s, "AI · TRIAL · 003", true);
  s.addText("THE / QUESTION · TRANSMISSION-DEAD CTV", { x: M, y: 1.39, w: 9.0, h: 0.22,
    fontFace: F.MONO, fontSize: 7.5, color: C.TERRA, charSpacing: 2.4, isTextBox: true, margin: 0 });
  s.addText([
    { text: "Eleven substitutions,\n", options: { color: C.ONDARK } },
    { text: "a falsified favorite, one experiment.", options: { color: C.TERRA } }],
    { x: M, y: 1.85, w: 11.9, h: 1.7, fontFace: F.SERIF, fontSize: 40, italic: true,
      isTextBox: true, margin: 0, valign: "top", lineSpacingMultiple: 1.02 });
  T.body(s, "Nine substitutions in p61 and two in p65 — the chaperones that build the virion's " +
    "aphid-facing tail — are predicted to keep CTV assembling and moving inside the plant while " +
    "making it unreadable to Toxoptera citricida. The hypothesis rests on published, re-verified " +
    "genetics. The way it was found — multiple models, adversarial review, five wrong answers killed " +
    "on the record — is the other half of this session.",
    M, 4.05, 8.6, { size: 11.5, color: C.ONDARK_MUTE, h: 1.2, lsm: 1.12 });
  T.rule(s, 6.15, true, M, CW, C.DARKLINE);
  T.footer(s, "PREPARED FOR THE SILVEC TEAM · Q3 AI STRATEGY SESSION",
    "HARPER 2016 · KILLINY 2016 · SHILTS 2020 · GENBANK KC517488 / AY170468", true);
  s.addNotes("Verdict: eleven substitutions in two chaperone genes, decided by one necessity experiment. " +
    "Second payload: the method — adversarial multi-model review killed three wrong answers in days, and open-weight models carried the design work.");
}
function s02(pres, tag) {
  const s = pres.addSlide(); T.bg(s, true); T.header(s, tag, true);
  s.addText("“", { x: M, y: 1.0, w: 1.2, h: 1.3, fontFace: F.SERIF, fontSize: 96, color: C.TERRA,
    isTextBox: true, margin: 0 });
  T.body(s, "What mutation(s) to a capsid still makes a functional virion with respect to self-assembly " +
    "and internal plant movement, but would make it incompatible to an insect vector — disabling " +
    "plant-to-plant movement?", 1.9, 1.35, 9.2, { size: 19, color: C.ONDARK, h: 1.6, lsm: 1.18 });
  T.body(s, "As a first trial, do this for Citrus tristeza virus, to deactivate aphid transmission.",
    1.9, 3.0, 9.2, { size: 12.5, color: C.ONDARK_MUTE, h: 0.5, lsm: 1.15 });
  s.addText("— THE QUESTION · AS POSED · SEPTEMBER 2026", { x: 1.9, y: 3.6, w: 6.5, h: 0.2,
    fontFace: F.MONO, fontSize: 7, color: C.TERRA, charSpacing: 2, isTextBox: true, margin: 0 });
  T.rule(s, 4.7, true, M, CW, C.DARKLINE);
  const parts = [["01", "THE METHOD — how AI got used"], ["02", "THE HYPOTHESIS — the science"],
    ["03", "THE APPROACHES — three bets"], ["04", "THE CONDITIONS — what kills it"],
    ["05", "THE PLAN — weeks, cost, gate"]];
  parts.forEach((p, i) => {
    const x = M + i * 2.47;
    s.addText(p[0], { x, y: 5.15, w: 0.7, h: 0.3, fontFace: F.MONO, fontSize: 9, color: C.TERRA,
      isTextBox: true, margin: 0 });
    s.addText(p[1].toUpperCase(), { x, y: 5.48, w: 2.3, h: 0.75, fontFace: F.MONO, fontSize: 7,
      color: C.ONDARK_MUTE, charSpacing: 1.4, isTextBox: true, margin: 0, valign: "top" });
  });
  T.footer(s, "SILVEC BIOLOGICS · CONFIDENTIAL", "", true);
  s.addNotes("The question as posed. Note the capsid presumption — Part 02 is where that gets corrected. Five parts: method first, because the session is about AI.");
}
function s03(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  const y = T.titleBlock(s, "WHY / THIS SESSION", "Two claims on the table.",
    "This deck argues a science claim and a method claim at once. They are independent — one failing does not take the other down.");
  // two big cards
  const cw = 5.9, ch = 2.9, y0 = y + 0.12;
  G.card_min(s, M, y0, cw, ch);
  T.h(s, "CLAIM ONE · THE SCIENCE", M + 0.25, y0 + 0.22, cw - 0.5, { color: C.TERRA });
  T.subhead(s, "A virion can move in the plant and be blind to the aphid.", M + 0.25, y0 + 0.52, cw - 0.5, { size: 16, h: 0.65 });
  T.body(s, [{ text: "The phenotype exists in nature (greenhouse T36: systemic, full titer, 0.6% transmission). " +
      "Eleven substitutions in two chaperone genes are the candidate copy of it. One blinded trial — " +
      "four clones, ~20 weeks — settles necessity.", options: {} }], M + 0.25, y0 + 1.25, cw - 0.5,
    { size: 10.5, h: 1.5, lsm: 1.1 });
  const x2 = M + cw + 0.42;
  G.card_min(s, x2, y0, cw, ch);
  T.h(s, "CLAIM TWO · THE METHOD", x2 + 0.25, y0 + 0.22, cw - 0.5, { color: C.TERRA });
  T.subhead(s, "AI with adversarial review compresses the research season into sessions.", x2 + 0.25, y0 + 0.52, cw - 0.5, { size: 16, h: 0.65 });
  T.body(s, [{ text: "A 130-genome census, literature triage, a twelve-review adversarial panel, source " +
      "retrieval and re-derivation — done in working sessions, not months. Five wrong answers died " +
      "cheaply. What is left is worth greenhouse space.", options: {} }], x2 + 0.25, y0 + 1.25, cw - 0.5,
    { size: 10.5, h: 1.5, lsm: 1.1 });
  T.takeaway(s, "THE WET-LAB CLOCK STARTS TODAY — EVERYTHING BEFORE IT HAS ALREADY BEEN COMPRESSED");
  T.footer(s, tag, "SILVEC BIOLOGICS · CONFIDENTIAL");
  s.addNotes("Two claims, decoupled: the science bet and the method bet. Either can be challenged without killing the other.");
}

// ---- PART 01 · THE METHOD ----
function s04(pres, tag) {
  const s = pres.addSlide();
  T.divider(s, "01", "PART ONE OF FIVE",
    [{ text: "The method." }],
    "Eight working phases. Five wrong answers killed on the record. A six-model adversarial panel that " +
    "caught what any one model missed — and the platform lesson about which models would do the work at all.", tag);
  s.addNotes("Part one: how the answer was produced. This is the half of the deck aimed at a team new to AI.");
}
function s05(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "THE / PIPELINE", "Eight phases. Sessions, not seasons.",
    "Each phase ended at a gate that could have stopped the project. Nothing downstream was built on an unverified upstream.", { densetop: true });
  const rows = [
    { phase: "P1 · FALSIFIABLE QUESTION", prod: '"Does CPm explain transmission variance?" — not "what explains it?"', gate: "AN ANSWER IS POSSIBLE", c: C.OLIVE },
    { phase: "P2 · SEQUENCE CENSUS", prod: "130 CTV genomes pulled from GenBank; p27/p33/p61/p65 extracted & aligned", gate: "DATA, NOT PROSE", c: C.OLIVE },
    { phase: "P3 · FALSIFICATION", prod: "CPm 240/240 identical across a 16× transmission gap — favorite hypothesis dead", gate: "PIVOT, DON'T PATCH", c: C.TERRA },
    { phase: "P4 · LITERATURE SURVEY", prod: "Shilts 2020 p33 swap (1.5%→17.8%); Killiny 2016 foregut binding", gate: "EFFECTS HAVE DENOMINATORS", c: C.OLIVE },
    { phase: "P5 · CANDIDATE RESIDUE", prod: "p33 K174R from the 2026 abstract — plus a viroporin mechanism (2025)", gate: "CITED ≠ VERIFIED", c: C.TERRA },
    { phase: "P6 · ADVERSARIAL REVIEW", prod: "6 models × 2 rounds: K174R impossible; power gaps; missing reciprocal", gate: "CONSENSUS MUST RECOMPUTE", c: C.TERRA },
    { phase: "P7 · SOURCE RETRIEVAL", prod: "Harper 2016 PDF read: synergy, denominators, titer all verified first-hand", gate: "THE PDF ADJUDICATES", c: C.OLIVE },
    { phase: "P8 · RE-DERIVATION & DESIGN", prod: "11 substitutions re-derived from accessions; Stage 0 pre-registered", gate: "READY FOR GREENHOUSE", c: C.OLIVE },
  ];
  const y0 = 2.85;
  rows.forEach((r, i) => {
    const cy = y0 + i * 0.435;
    s.addText(r.phase, { x: M, y: cy, w: 2.6, h: 0.4, fontFace: F.MONO, fontSize: 7.5, color: C.TXT,
      charSpacing: 0.8, isTextBox: true, margin: 0, valign: "top" });
    T.body(s, r.prod, M + 2.75, cy + 0.01, 6.1, { size: 10, h: 0.42 });
    T.chip(s, 10.35, cy + 0.04, r.gate, r.c === C.OLIVE ? C.OLIVE : C.TERRA,
      { w: 0.28 + r.gate.length * 0.058 });
    T.rule(s, cy + 0.415, false, M, CW, C.LINE2);
  });
  T.footer(s, tag, "THE GATES ARE THE POINT — PHASES 3, 5 AND 6 ALL KILLED SOMETHING");
  s.addNotes("The eight phases, each with a kill-switch. Three of the eight killed a claim. That is the pipeline working, not failing.");
}
function s06(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "THE / FALSIFICATION LOG", "Five wrong answers, killed on the record.",
    "Every one was a plausible AI answer. None survived contact with the sequence data or the published experiment. This log is the asset most teams never keep.", { densetop: true });
  const cols = [{ label: "CLAIM", w: 3.9 }, { label: "SOURCE OF THE CLAIM", w: 2.3 }, { label: "WHAT KILLED IT", w: 5.9 }];
  const rows = [
    { h: 0.62, cells: [
      [{ text: "CPm sequence variation determines transmission", options: { italic: true, color: C.TXT } }],
      "Starting hypothesis; DeepSeek v1–v2 (CPm deletion)",
      "240/240 identity across a 16-fold transmission gap; functional null: CPm+5′UTR 17/90 vs p33 alone 16/90 (Fisher p = 1.00)"] },
    { h: 0.62, cells: [
      [{ text: "p33 K174R is the transmission switch", options: { italic: true, color: C.TXT } }],
      "Early brief, from the 2026 abstract",
      "Re-derivation: donor and T36 clone both encode K174 — nothing was exchanged. R174 sits in 24% and 1.6% transmitters alike; 96.8% of 125 genomes carry R174"] },
    { h: 0.56, cells: [
      [{ text: "Three charged residues suffice (D324G, E382D, D458G)", options: { italic: true, color: C.TXT } }],
      "DeepSeek v3 (electrostatics logic)",
      "Harper 2016: p61 alone reaches 4.0%; the pair reaches 17.9%. The subset never came near — synergy needs the set"] },
    { h: 0.5, cells: [
      [{ text: "Test the genes individually first", options: { italic: true, color: C.TXT } }],
      "DeepSeek v3 phase plan",
      "Harper 2016: singles restore 1.9% / 4.0% — statistically near the 0.6% baseline. 'Concerted action' is not optional"] },
    { h: 0.56, cells: [
      [{ text: "The effect is virus titer, not vector interaction", options: { italic: true, color: C.TXT } }],
      "DeepSeek mechanism prediction",
      "Harper Fig. 2: RT-qPCR and ELISA identical across hybrids (Tukey HSD p > 0.05) — 30-fold transmission change at equal accumulation"] },
  ];
  T.table(s, M, 2.8, CW, cols, rows, { rowLineColor: C.LINE2 });
  T.takeaway(s, "FIVE PLAUSIBLE ANSWERS · FIVE FUNERALS · EACH ONE WOULD HAVE COST A CONSTRUCT SERIES IN THE LAB");
  T.footer(s, tag, "SILVEC BIOLOGICS · CONFIDENTIAL");
  s.addNotes("The falsification log. Read it as a ledger of avoided greenhouse work — each row is a construct series never built.");
}
function s07(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "THE / REVIEW CONSORTIUM", "Twelve reviews. Then the data argued back.",
    "Six models, two rounds — independent review, then adversarial rebuttal. What unanimity caught, and what only reading the paper could settle.");
  // left: roster
  T.h(s, "THE PANEL · 6 MODELS × 2 ROUNDS", M, 3.0, 4.2, { color: C.TERRA });
  const panel = [["GPT-6 (Astra Pro)", "architecture & stats"], ["Grok 4.6", "design direction"],
    ["Gemini 3.1 Pro", "holdout skeptic"], ["DeepSeek V4 Pro", "mechanism models"],
    ["Qwen3 Max Thinking", "recomputation"], ["Claude Opus 5", "synthesis"]];
  panel.forEach((p, i) => {
    const cy = 3.32 + i * 0.42;
    T.body(s, [{ text: p[0], options: { color: C.TXT, italic: true } }], M, cy, 2.5, { size: 10, h: 0.2 });
    T.body(s, p[1], M + 2.45, cy, 1.9, { size: 9, h: 0.2, color: C.FAINT });
  });
  T.vline(s, 5.0, 3.0, 3.5);
  // right: findings + the twist
  T.h(s, "WHAT UNANIMITY CAUGHT (6/6)", 5.35, 3.0, 3.6, { color: C.TERRA });
  T.bullets(s, [
    { text: "K174R is a mathematical impossibility — both sequences encode K174" },
    { text: "The 'residual gap' for p61/p65 rested on an unread paper's unattributed 23%" },
    { text: "14% power at n=90 for a 5-point effect — the planned screen could not see it" },
    { text: "No reciprocal swap existed; causality untested" },
    { text: "Undocumented experimental units → CIs overprecise" },
  ], 5.35, 3.3, 3.55, { size: 9.3, gap: 4, h: 2.2 });
  T.vline(s, 9.2, 3.0, 3.5);
  T.h(s, "AND THEN THE TWIST", 9.55, 3.0, 3.2, { color: C.AMBER });
  T.body(s, [{ text: "The panel ruled p61/p65 'unfounded' — until Harper 2016 was actually fetched. " +
      "The 23% was the wild-type parent, the 'gap' was spurious, and p61+p65 were verified all along.",
      options: {} },
    { text: "\n\nVerdicts are provisional until the primary source is on the table.", options: { italic: true, color: C.TXT } }],
    9.55, 3.3, 3.15, { size: 10, h: 2.6, lsm: 1.1 });
  T.takeaway(s, "ADVERSARIAL REVIEW FOUND THE HOLES · ONLY FETCHING THE PDF CLOSED THEM");
  T.footer(s, tag, "ROUND 1 INDEPENDENT · ROUND 2 REBUTTAL · CONSENSUS RECOMPUTED, NOT VOTED");
  s.addNotes("The consortium slide. Unanimity is not proof: the panel was right about K174R and wrong about p61/p65 — the retrieved paper settled both.");
}
function s08(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "FOUR / WAYS THE MODELS ANSWERED", "The models disagreed. The experiment adjudicated.",
    "Same question, four sources. Scored against Harper 2016 — the only source that had actually run the swap.");
  const cols = [{ label: "CRITERION", w: 4.6 }, { label: "GROK", w: 1.7 }, { label: "DEEPSEEK V3", w: 1.9 },
    { label: "KIMI", w: 1.7 }, { label: "HARPER 2016", w: 2.0 }];
  const yes = "✓", no = "✗", mid = "~";
  const rows = [
    { cells: ["p65 + p61 moved together", yes, yes, yes, "confirmed"],  h: 0.4 },
    { cells: ["Individual genes first", no, yes, no, "no — synergy"],   h: 0.4 },
    { cells: ["All 11 substitutions tested", yes, yes, yes, "baseline"], h: 0.4 },
    { cells: ["Mechanism = binding, not titer", mid, no, yes, "proven (RT-qPCR)"], h: 0.4 },
    { cells: ["Minimal subset sufficient", no, "suggested", no, "no"],   h: 0.4 },
    { cells: ["SCORE", { text: "8.5 / 10", mono: true, color: C.OLIVE },
      { text: "6.5 / 10", mono: true, color: C.AMBER }, { text: "correct read", mono: true, color: C.OLIVE },
      { text: "the adjudicator", mono: true, color: C.TERRA }], h: 0.44 },
  ];
  const mapped = rows.map(r => ({ h: r.h, cells: r.cells.map(c =>
    typeof c === "string" ? (c === yes ? { text: c, color: C.OLIVE, size: 12 } :
      c === no ? { text: c, color: C.TERRA, size: 12 } : c === mid ? { text: c, color: C.AMBER, size: 12 } : c) : c) }));
  T.table(s, M, 3.05, CW, cols, mapped, { rowLineColor: C.LINE2 });
  T.body(s, [{ text: "The winning direction was Grok's reciprocal-swap reframing: fix FS577 toward T36 in " +
      "p65+p61 — a design nobody had proposed in the literature, arrived at by reasoning from Harper's " +
      "numbers.", options: { italic: true } }], M, 5.75, 10.5, { size: 10.5, h: 0.6 });
  T.takeaway(s, "GROK + THE PUBLISHED EXPERIMENT ALIGNED 100% — CONFIDENCE CAME FROM CONCORDANCE, NOT CHARISMA");
  T.footer(s, tag, "SILVEC BIOLOGICS · CONFIDENTIAL");
  s.addNotes("Model answers differed; scoring against the retrieved paper produced the ranking. Grok's reframing won on evidence, not eloquence.");
}
function s09(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "WHERE / THE PLATFORMS STOOD IN THE WAY", "The constraint was access, not capability.",
    "The team's experience, stated plainly: the mutation-design questions at the center of this project — legitimate biocontainment work aimed at less virus spread — were repeatedly refused by the hosted frontier models. The project stalled until it moved."),
  // left card THE BLOCK
  (() => {
    const y0 = 3.0, cw = 5.9, ch = 3.3;
    G.card_min(s, M, y0, cw, ch, C.TAN);
    T.h(s, "WHAT HAPPENED", M + 0.25, y0 + 0.2, cw - 0.5, { color: C.TERRA });
    T.bullets(s, [
      { lead: "Refusals mid-project.", text: "Core design questions about capsid mutations and aphid transmission were declined on safety grounds — with no viable route to appeal or adjust" },
      { lead: "Review roles still worked.", text: "Frontier models stayed useful as critics: GPT-6 and Gemini both served on the adversarial panel" },
      { lead: "The work moved.", text: "Open-weight models — DeepSeek, Kimi, Grok — engaged the full problem with no safety friction" },
    ], M + 0.25, y0 + 0.52, cw - 0.55, { size: 10, gap: 8, h: 2.6 });
    const x2 = M + cw + 0.42;
    G.card_min(s, x2, y0, cw, ch);
    T.h(s, "THE OPERATING RULES THAT CAME OUT OF IT", x2 + 0.25, y0 + 0.2, cw - 0.5, { color: C.OLIVE });
    T.bullets(s, [
      { lead: "Portfolio, not vendor.", text: "Never let a single provider's filters gate a research question — keep three-plus models in rotation" },
      { lead: "Route, don't fight.", text: "Design work → open-weight models; critique and adversarial review → whoever is sharpest at it" },
      { lead: "Diversity is insurance.", text: "Different labs, different blind spots — the panel's disagreements were information, not noise" },
    ], x2 + 0.25, y0 + 0.52, cw - 0.55, { size: 10, gap: 8, h: 2.6 });
  })();
  T.takeaway(s, "GROK PRODUCED THE WINNING DESIGN DIRECTION — AND IT NEVER ONCE REFUSED THE QUESTION");
  T.footer(s, tag, "AS EXPERIENCED BY THE TEAM · SEPT 2026");
  s.addNotes("The platform lesson, neutrally: hosted filters blocked legitimate biocontainment design work; open-weight models completed it. Frontier models stayed valuable as reviewers. Rule: a model portfolio, routed by task.");
}
function s10(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "HOW / TO ASK", "Six question patterns that worked.",
    "For an AI-new team: the difference between a chat and an instrument is the shape of the question. These six produced everything in this deck.");
  const items = [
    { num: "01", head: "Make it falsifiable", text: '"Does CPm explain transmission variance?" — a yes/no with a denominator — not "what explains transmission?"' },
    { num: "02", head: "Demand denominators", text: 'Every rate must arrive as "positive / n". "Poorly transmitted" is not a number; 1 of 66 is.' },
    { num: "03", head: "Ask for the inverse experiment", text: "The gain-of-function swap was published. The loss-of-function knockout — the one the product needs — had never been asked for." },
    { num: "04", head: "Force the primary source", text: '"Cite it" is not enough. "Fetch it, quote it, give the figure number." The 23% that confused the panel dissolved on first reading.' },
    { num: "05", head: "Run the adversarial round", text: "Have the models attack their own consensus. K174R died in rebuttal, not in review." },
    { num: "06", head: "Re-derive, never transcribe", text: "The substitution table came from GenBank CDS translations, not from any model's prose — including this one's." },
  ];
  const cw = 3.93, chh = 1.62;
  items.forEach((it, i) => {
    const cx = M + (i % 3) * (cw + 0.21), cy = 3.0 + Math.floor(i / 3) * (chh + 0.2);
    G.card_min(s, cx, cy, cw, chh);
    s.addText(it.num, { x: cx + 0.15, y: cy + 0.1, w: 0.7, h: 0.25, fontFace: F.MONO, fontSize: 8,
      color: C.TERRA, isTextBox: true, margin: 0 });
    s.addText(it.head, { x: cx + 0.55, y: cy + 0.1, w: cw - 0.7, h: 0.25, fontFace: F.SERIF,
      fontSize: 12.5, italic: true, color: C.TXT, isTextBox: true, margin: 0 });
    T.body(s, it.text, cx + 0.15, cy + 0.68, cw - 0.3, { size: 8.8, h: 0.9, lsm: 1.05 });
  });
  T.takeaway(s, "A GOOD PROMPT IS A NULL HYPOTHESIS WITH A DENOMINATOR");
  T.footer(s, tag, "SILVEC BIOLOGICS · CONFIDENTIAL");
  s.addNotes("The how-to slide for the team. Each pattern maps to something concrete in this project — falsification, denominators, the inverse swap, the fetched PDF, the rebuttal round, the re-derived table.");
}
function s11(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "WHAT / THE MODEL CANNOT DO", "Trust is a workflow, not a feeling.",
    "The verification stack that sits between any model's answer and a decision. Everything in this deck passed through all four tiers.");
  const tiers = [
    { t: "TIER 1 · OUR OWN ANALYSIS", d: "Reproducible but unreviewed: alignments, censuses, recomputed statistics", ex: "CPm 240/240 · residue-174 census · Fisher exact table", c: C.CARDL },
    { t: "TIER 2 · FETCHED FULL TEXT", d: "Read end-to-end, quoted word-for-word", ex: "Shilts 2020 baselines · PLOS Pathog. viroporin · Harper 2016 transmission table", c: C.CARDL },
    { t: "TIER 3 · ABSTRACT ONLY", d: "Real paper, methods unread — flagged on every slide that uses it", ex: "Virology 2026 (~50%, K174R claim) — full text still paywalled", c: C.TAN },
    { t: "TIER 4 · QUOTED SECOND-HAND", d: "Only known through another paper's citation — retired once the source was fetched", ex: "Harper 2016's 0.6%→18% via Shilts 2020 — later verified directly", c: C.TAN },
  ];
  tiers.forEach((tr, i) => {
    const cy = 3.02 + i * 0.86;
    G.card_min(s, M, cy, CW, 0.78, tr.c);
    T.h(s, tr.t, M + 0.22, cy + 0.14, 3.3, { color: i < 2 ? C.OLIVE : C.RUST_DK, size: 7 });
    T.body(s, tr.d, M + 0.22, cy + 0.37, 5.3, { size: 9, h: 0.38 });
    T.body(s, [{ text: "e.g.  ", options: { color: C.GHOST, italic: true } }, { text: tr.ex, options: { italic: true } }],
      6.3, cy + 0.16, 6.3, { size: 9.5, h: 0.55 });
  });
  T.takeaway(s, "AI PROPOSES · THE RECORD DISPOSES · AND THE TIER IS WRITTEN ON THE SLIDE");
  T.footer(s, tag, "SILVEC BIOLOGICS · CONFIDENTIAL");
  s.addNotes("The confidence-tier system. Every claim in this deck carries one of these four tags — the team never has to ask 'how firm is that?'");
}
function s12(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "THE / TIME COMPRESSION", "What changed is the wrong-turn budget.",
    "Counted from the project record. The greenhouse itself is untouched — biology keeps its own clock. Everything before the first clone is what got faster.");
  const y0 = 3.05;
  const stats = [
    { n: "130", l: "GENOMES CENSUS-ALIGNED", d: "p27, p33, p61, p65 extracted and compared across the public record — the falsification material" },
    { n: "12", l: "MODEL REVIEWS IN 2 ROUNDS", d: "Six models, independent then adversarial. Statistics recomputed to unanimity, not voted" },
    { n: "5", l: "WRONG ANSWERS KILLED EARLY", d: "CPm, K174R, the charged subset, single-gene-first, the titer story — none cost a clone" },
  ];
  stats.forEach((st, i) => T.numStat(s, M + i * 4.24, y0, 3.74, st.n, st.l, st.d, { nsize: 40, nh: 0.62 }));
  T.vline(s, M + 4.0, y0 - 0.1, 1.75); T.vline(s, M + 8.24, y0 - 0.1, 1.75);
  T.rule(s, 5.15);
  T.h(s, "WHAT STILL TAKES ITS OWN TIME — AND WHY THAT'S FINE", M, 5.35, 6.5, { color: C.GHOST });
  T.bullets(s, [
    { text: "Cloning & sequence verification: 4–8 weeks — steel and enzymes, not inference" },
    { text: "The aphid trial: ~8 weeks to ELISA — the biological readout cannot be rushed" },
    { text: "Citrus validation: months — trees do not compress" },
  ], M, 5.62, 7.2, { size: 10, gap: 5, h: 1.2 });
  T.vline(s, 8.2, 5.35, 1.6);
  T.body(s, [{ text: "The estimate, honestly framed:  ", options: { italic: true } },
    { text: "a conventional path here is a literature season plus one or two construct-series detours " +
      "per wrong turn avoided. This project reached a pre-registered, power-analyzed, " +
      "residue-level design in working sessions.", options: {} }],
    8.45, 5.62, 4.3, { size: 9.8, h: 1.3, lsm: 1.08 });
  T.takeaway(s, "AI MOVED THE THINKING, NOT THE ASSAY — AND THE THINKING WAS WHERE THE SEASONS WENT");
  T.footer(s, tag, "SILVEC BIOLOGICS · CONFIDENTIAL");
  s.addNotes("The compression claim, scoped honestly: in-silico time collapsed; wet-lab time did not. The value is killed wrong turns, not magic speed.");
}
module.exports = [s01, s02, s03, s04, s05, s06, s07, s08, s09, s10, s11, s12];
