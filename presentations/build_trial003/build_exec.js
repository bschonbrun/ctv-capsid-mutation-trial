// build_exec.js — 8-slide executive summary deck, same design system
const pptxgen = require("pptxgenjs");
const T = require("./theme");
const G = require("./fig");
const { C, F, M, CW } = T;

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.title = "Transmission-dead CTV — executive summary";
pres.author = "Silvec Biologics";

function e01(tag) {
  const s = pres.addSlide(); T.bg(s, true); T.header(s, "EXECUTIVE · SUMMARY", true);
  s.addText("AI · TRIAL · 003 · TRANSMISSION-DEAD CTV", { x: M, y: 1.39, w: 9, h: 0.22,
    fontFace: F.MONO, fontSize: 7.5, color: C.TERRA, charSpacing: 2.4, isTextBox: true, margin: 0 });
  s.addText([
    { text: "One experiment,\n", options: { color: C.ONDARK } },
    { text: "and the method that found it.", options: { color: C.TERRA } }],
    { x: M, y: 1.9, w: 11.9, h: 1.7, fontFace: F.SERIF, fontSize: 40, italic: true,
      isTextBox: true, margin: 0, lineSpacingMultiple: 1.02 });
  T.body(s, "Eleven substitutions across two viral genes are predicted to leave Citrus tristeza virus fully " +
    "infectious inside the plant — assembling, moving, holding titer — while making it invisible to the " +
    "brown citrus aphid. The prediction is grounded in published, re-verified genetics, and it was reached " +
    "by a multi-model AI workflow that killed five wrong answers before any of them cost a construct.",
    M, 4.05, 8.9, { size: 11.5, color: C.ONDARK_MUTE, h: 1.3, lsm: 1.12 });
  T.rule(s, 6.15, true, M, CW, C.DARKLINE);
  T.footer(s, "PREPARED FOR THE SILVEC TEAM · Q3 AI STRATEGY SESSION",
    "FULL DETAIL: TRIAL-003 DECK · 54 SLIDES", true);
  s.addNotes("Executive summary: the finding, the evidence spine, the plan, the ask — and what it demonstrates about the AI method.");
}
function e02(tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "THE / FINDING", "Eleven substitutions, two chaperone genes, one gate.",
    "Nine changes in p61 and two in p65 — the proteins that build the virion's aphid-facing tail — moved from the poorly transmitted T36 isolate into a transmissible backbone.", { densetop: true });
  const y0 = 3.0;
  T.numStat(s, M, y0, 3.5, "0.6%", "T36 CLONE · THE PROTOTYPE",
    "Systemic infection, full titer, one plant in 172 via aphid. Nature already built the phenotype.", { nsize: 38 });
  T.vline(s, M + 4.0, y0 - 0.05, 1.75);
  T.numStat(s, M + 4.4, y0, 3.5, "17.9%", "THE PAIR RESTORES IT",
    "FS577 p65+p61 into T36: singles reach 1.9% / 4.0%; the pair 17.9% (n=196). Synergy, published.", { nsize: 38 });
  T.vline(s, M + 8.4, y0 - 0.05, 1.75);
  T.numStat(s, M + 8.8, y0, 3.5, "p > 0.05", "TITER UNCHANGED",
    "RT-qPCR and ELISA identical across every hybrid. The gate is the aphid interface, not plant fitness.", { nsize: 38, ncolor: C.OLIVE });
  T.takeaway(s, "THE PREDICTION: T36's ELEVEN RESIDUES SILENCE FS577 — 24.1% DOWN TO ≤5% AT PARENTAL TITER");
  T.footer(s, tag, "HARPER 2016 · VERIFIED FROM THE PAPER");
  s.addNotes("The finding: the prototype exists, the gate is a two-gene pair, and movement/titer are untouched by it.");
}
function e03(tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "WHY / NOT THE COAT", "The obvious target was falsified first — twice.",
    "CPm, the minor coat protein, was everyone's starting guess. The record killed it cleanly.", { densetop: true });
  const y0 = 3.0;
  T.numStat(s, M, y0, 3.5, "240 / 240", "CPM IDENTICAL · FS577 VS T36",
    "Zero sequence difference across a 16-fold transmission gap.", { nsize: 34, nh: 0.52 });
  T.vline(s, M + 4.0, y0 - 0.05, 1.6);
  T.numStat(s, M + 4.4, y0, 3.5, "p = 1.00", "FUNCTIONAL NULL",
    "Adding CPm to the p33 swap changed nothing: 17/90 vs 16/90 (Shilts 2020).", { nsize: 34, nh: 0.52 });
  T.vline(s, M + 8.4, y0 - 0.05, 1.6);
  G.card_min(s, M + 8.8, y0 - 0.05, 3.95, 1.85, C.TAN);
  T.body(s, [{ text: "What survives:  ", options: { italic: true, color: C.TXT } },
    { text: "CPm remains the physical ligand at the aphid foregut — a knockout target, " +
      "not the explanation. The interface is the tail complex it shares with p65 and p61.", options: {} }],
    M + 9.0, y0 + 0.15, 3.55, { size: 9.5, h: 1.5 });
  T.takeaway(s, "WHERE THE APHID READS THE VIRION: FREE p27, p61 AND p65 COMPETE FOREGUT BINDING — p25 DOES NOT");
  T.footer(s, tag, "KILLINY 2016 · OUR ALIGNMENT · SHILTS 2020");
  s.addNotes("Why not the coat: two falsifications, plus the binding evidence that redirects design to the tail complex.");
}
function e04(tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "THE / THREE APPROACHES", "One season, three wagers, different measurements.",
    "Run as competing mechanism bets sharing one protocol — so the season adjudicates which story is true.", { densetop: true });
  const cols = [{ label: "", w: 1.3 }, { label: "A · THE KNOCKOUT — LEAD", w: 3.7 },
    { label: "B · THE VIROPORIN ARM", w: 3.6 }, { label: "C · THE TRUE CAPSID MUTANT", w: 3.55 }];
  const rows = [
    { h: 0.5, cells: [{ text: "CONSTRUCT", mono: true, size: 6, color: C.GHOST },
      "FS577 + T36's p61 (9) + p65 (2)", "FS577 + T36 p33, whole gene, titer-matched",
      "p27 point edits, aimed by A's residue map"] },
    { h: 0.5, cells: [{ text: "WAGERS", mono: true, size: 6, color: C.GHOST },
      "The tail interface gates transmission", "Transmission tracks viral accumulation, not docking",
      "The docking ligand itself can be edited"] },
    { h: 0.5, cells: [{ text: "READS AS", mono: true, size: 6, color: C.GHOST },
      [{ text: "Binding dead · titer normal · ≤5%", color: C.TERRA }],
      "Titer falls in step; binding unchanged", "Docking specifically dead; titer normal"] },
  ];
  T.table(s, M, 3.0, CW, cols, rows, { rowLineColor: C.LINE2, size: 9.5 });
  T.body(s, [{ text: "Lead goes to A:  ", options: { italic: true, color: C.TXT } },
    { text: "largest verified effect, published protocol, pre-registered pass line. B is the cheap parallel " +
      "bet; C inherits A's map. K174R — the residue an abstract once named — is falsified and appears only in the log.",
      options: {} }], M, 4.9, 11.6, { size: 10.5, h: 0.8, lsm: 1.1 });
  T.takeaway(s, "WHICHEVER COLUMN MOVES, SILVEC LEARNS WHICH MACHINE IT IS EDITING");
  T.footer(s, tag, "SILVEC BIOLOGICS · CONFIDENTIAL");
  s.addNotes("Approaches A/B/C as mechanism bets. A leads; B prices the p33 alternative; C waits for A's map.");
}
function e05(tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "HOW / IT WAS FOUND", "The method is the second result.",
    "What the project actually demonstrated about AI in Silvec's research: speed came from structure, not from any single model.");
  const y0 = 2.95;
  const stats = [
    ["5", "WRONG ANSWERS KILLED BEFORE THE BENCH", "CPm, K174R, the charged subset, single-gene-first, the titer story"],
    ["12", "ADVERSARIAL REVIEWS · 6 MODELS × 2 ROUNDS", "Consensus recomputed, not voted; the panel even corrected itself once sources landed"],
    ["130", "GENOMES CENSUS-ALIGNED", "Every residue claim re-derived from accessions, never transcribed from prose"],
  ];
  stats.forEach((st, i) => T.numStat(s, M + i * 4.24, y0, 3.74, st[0], st[1], st[2], { nsize: 38, nh: 0.6, dh: 0.8 }));
  T.vline(s, M + 4.0, y0 - 0.08, 1.9); T.vline(s, M + 8.24, y0 - 0.08, 1.9);
  T.rule(s, 5.25);
  T.body(s, [{ text: "The platform lesson, briefly:  ", options: { italic: true, color: C.TXT } },
    { text: "the hosted frontier models repeatedly declined this project's core design questions — " +
      "legitimate biocontainment work. Open-weight models (DeepSeek, Kimi, Grok) carried it end to end, " +
      "and Grok produced the winning design direction. The operating rule now: a portfolio of models, " +
      "routed by task; never a single vendor gating a research question.", options: {} }],
    M, 5.5, 11.6, { size: 10.5, h: 0.95, lsm: 1.12 });
  T.takeaway(s, "AI PROPOSES · THE RECORD DISPOSES · CONSENSUS IS RECOMPUTED, NOT VOTED", { y: 6.66 });
  T.footer(s, tag, "SILVEC BIOLOGICS · CONFIDENTIAL");
  s.addNotes("Method summary for executives: speed from structure; and the platform lesson — portfolio over vendor, in the team's own experience.");
}
function e06(tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "WHAT / IT COSTS", "Twenty weeks, ~$8–13K, one gate.",
    "Stage 0 in silico work is already complete — analysis, pre-registered criteria, power sizing, risk register. What remains is construction and one blinded assay.", { densetop: true });
  G.gantt(s, M, 3.1, CW, [
    { label: "Confirm inputs · this week", start: 0, end: 1, color: C.TERRA, tag: "BACKBONE CLONE · APHID COLONY · CONTAINMENT" },
    { label: "Clone & verify (4 constructs)", start: 1, end: 9, color: C.FAINT, tag: "FULL-LENGTH SEQ · SYSTEMIC TITER" },
    { label: "Gate: infection at parental titer", start: 9, end: 10, color: C.AMBER, tag: "OR STOP, CHEAPLY", gate: 9 },
    { label: "Transmit — blinded (Harper protocol)", start: 10, end: 18, color: C.TERRA, tag: "~550–700 APHIDS · TITER ON EVERY SOURCE" },
    { label: "Score & decide", start: 18, end: 20, color: C.OLIVE, tag: "PRE-REGISTERED CRITERIA" },
  ], { maxW: 20 });
  const y1 = 5.7;
  T.numStat(s, M, y1, 2.6, "≤5%", "PASS LINE · PRE-REGISTERED",
    "vs 24.1% parent. 5–15% = Phase 2. ≥15% = a written-down null.", { nsize: 26, nh: 0.4, dsize: 8.8, dh: 0.5 });
  T.numStat(s, M + 4.24, y1, 2.6, "~$8–13K", "PHASE 1 COST",
    "Aphid trials ≈$2–3K; synthesis & validation $5–10K.", { nsize: 26, nh: 0.4, dsize: 8.8, dh: 0.5 });
  T.numStat(s, M + 8.48, y1, 3.2, "0 / 200", "WHAT 'CONTAINED' MEANS",
    "Zero transmissions in 200 → upper 95% bound 1.5%. The claim shape is a zero over a large n.", { nsize: 26, nh: 0.4, dsize: 8.8, dh: 0.55 });
  T.takeaway(s, "THE GATE COMES BEFORE THE EXPENSE — SEQUENCE-VERIFIED INFECTION, OR THE PROJECT STOPS AT WEEK NINE", { y: 6.68 });
  T.footer(s, tag, "SILVEC BIOLOGICS · CONFIDENTIAL");
  s.addNotes("Cost and clock: 20 weeks, roughly $8-13K, gated at week nine. Pass line pre-registered at ≤5%.");
}
function e07(tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "THE / ASK", "One scientist, one afternoon, five answers.",
    "Everything downstream is staged and gated. What unblocks it is in Silvec's records, not in any model.", { densetop: true });
  const y0 = 2.95, cw = 5.9;
  G.card_min(s, M, y0, cw, 3.35, C.TAN);
  T.h(s, "CONFIRM FROM RECORDS · THIS WEEK", M + 0.25, y0 + 0.18, cw - 0.5, { color: C.RUST_DK });
  T.bullets(s, [
    { text: "Transmissible backbone clone (FS577 or T68) — physically on hand?" },
    { text: "The T. citricida colony available, and its historical baseline?" },
    { text: "Containment route CTV construct work already runs under" },
    { text: "Citrus host for the validation phase (Hamlin / Duncan / grapefruit)" },
    { text: "True cost & capacity for a 250-plant, 8-week cohort" },
  ], M + 0.25, y0 + 0.5, cw - 0.5, { size: 10, gap: 8, h: 2.7, marker: "→  ", markerColor: C.RUST_DK });
  const x2 = M + cw + 0.42;
  T.h(s, "RUNNING IN PARALLEL · THE NEXT AI SESSIONS", x2, y0 + 0.05, cw, { color: C.OLIVE });
  T.bullets(s, [
    { text: "Retrieve Shilts 2026 full text — clears the last tier-3 flag" },
    { text: "Adversarial panel round 3 on the frozen protocol" },
    { text: "Segregation census of the 11 residues across the 130 genomes" },
    { text: "The living knowledge base: repo + Q&A JSON → team chatbot, answers carrying sources" },
  ], x2, y0 + 0.35, cw, { size: 10, gap: 7, h: 2.4, marker: "✓  ", markerColor: C.OLIVE });
  T.takeaway(s, "IF YES ON THE RECORDS → ALIGN AND FREEZE CONSTRUCTS NEXT WEEK → VERDICT BY WEEK TWENTY");
  T.footer(s, tag, "SILVEC BIOLOGICS · CONFIDENTIAL");
  s.addNotes("The ask: five record questions, one afternoon. Parallel AI work continues while the greenhouse runs.");
}
function e08(tag) {
  const s = pres.addSlide(); T.bg(s, true); T.header(s, tag, true);
  s.addText("THE / CLOSE", { x: M, y: 1.39, w: 8, h: 0.22, fontFace: F.MONO, fontSize: 7.5,
    color: C.TERRA, charSpacing: 2.4, isTextBox: true, margin: 0 });
  s.addText([
    { text: "Cheap to test. ", options: { color: C.TERRA, italic: true } },
    { text: "Expensive to\n", options: { color: C.ONDARK, italic: true } },
    { text: "have skipped.", options: { color: C.ONDARK, italic: true } }],
    { x: M, y: 1.95, w: 11.9, h: 1.7, fontFace: F.SERIF, fontSize: 40, isTextBox: true, margin: 0, lineSpacingMultiple: 1.02 });
  T.body(s, "If the knockout silences, Silvec holds a documented design rule — virions that can't ride " +
    "vectors — beside CYVaV's capsid-free architecture: the biocontainment story, written in data, for the " +
    "regulatory and commercial road ahead. If it fails, the failure is bounded, blinded, and written down " +
    "in advance. Either way the week cost less than the wrong construct series would have.",
    M, 4.0, 8.9, { size: 11.5, color: C.ONDARK_MUTE, h: 1.35, lsm: 1.12 });
  T.body(s, [{ text: "Start with the alignment  →", options: { color: C.AMBER, size: 14, italic: true } }],
    M, 5.6, 6, { size: 14, h: 0.4 });
  T.rule(s, 6.3, true, M, CW, C.DARKLINE);
  T.footer(s, "SILVEC BIOLOGICS · TRANSMISSION-DEAD CTV · 2026 · CONFIDENTIAL",
    "FULL DETAIL: TRIAL-003 DECK", true);
  s.addNotes("Close: bounded downside, platform upside. The ask stands — confirm the inputs, start the alignment.");
}
[e01, e02, e03, e04, e05, e06, e07, e08].forEach((f, i) =>
  f("0" + (i + 1) + " / 08"));
pres.writeFile({ fileName: process.argv[2] || "trial003_exec.pptx" }).then(f => console.log("written:", f));
