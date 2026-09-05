// slides_c.js — PART 03 THE APPROACHES (6) + PART 04 THE CONDITIONS (9)
const T = require("./theme");
const G = require("./fig");
const { C, F, M, CW } = T;

function s27(pres, tag) {
  const s = pres.addSlide();
  T.divider(s, "03", "PART THREE OF FIVE",
    [{ text: "The approaches." }],
    "Three construct lines, three assumption sets — designed so the same season adjudicates between " +
    "them. Whichever column wins its readouts, Silvec comes out with a design rule.", tag);
  s.addNotes("Part three: the portfolio. Different assumptions played against each other in one design.");
}
function s28(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "THE / PORTFOLIO", "Three bets, three assumptions, one season.",
    "Each approach wagers on a different mechanism. They share assay, host and protocol — so their readouts are directly comparable evidence about which story is true.", { densetop: true });
  const cols = [{ label: "", w: 1.55 }, { label: "A · THE KNOCKOUT (LEAD)", w: 3.6 },
    { label: "B · THE VIROPORIN ARM", w: 3.5 }, { label: "C · THE TRUE CAPSID MUTANT", w: 3.55 }];
  const rows = [
    { h: 0.52, cells: [{ text: "CONSTRUCT", mono: true, size: 6.5, color: C.GHOST },
      "FS577 backbone + T36 p61 (9) + p65 (2)",
      "FS577 backbone + T36 p33 (whole gene) + reciprocal",
      "FS577 tail background + single p27 point edits"] },
    { h: 0.66, cells: [{ text: "ASSUMES", mono: true, size: 6.5, color: C.GHOST },
      "Transmission gates at the tail interface; the 11 residues are the functional unit; titer untouched",
      "Transmission tracks accumulation / ion homeostasis; binding unchanged",
      "The docking ligand itself can be edited at one surface residue"] },
    { h: 0.6, cells: [{ text: "PREDICTS", mono: true, size: 6.5, color: C.GHOST },
      [{ text: "24.1% → ≤5%", color: C.TERRA }, " at parental titer; binding collapses"],
      "Transmission falls with titer; cibarium binding stays normal",
      "Transmission falls at equal titer; docking specifically dead"] },
    { h: 0.52, cells: [{ text: "WHAT KILLS IT", mono: true, size: 6.5, color: C.GHOST },
      "No silencing on two backbones",
      "Titer-normalized effect vanishes",
      "No residue map (dependent on A)"] },
    { h: 0.42, cells: [{ text: "CLOCK", mono: true, size: 6.5, color: C.GHOST },
      { text: "~20 wk to verdict", mono: true }, { text: "+ 4 wk, parallel arm", mono: true },
      { text: "starts after A's map", mono: true }] },
  ];
  T.table(s, M, 2.8, CW, cols, rows, { rowLineColor: C.LINE2, size: 9 });
  T.takeaway(s, "NOT A HEDGE — A DISCRIMINATOR: THE THREE PREDICT DIFFERENT MEASUREMENTS, NOT JUST DIFFERENT OUTCOMES");
  T.footer(s, tag, "SILVEC BIOLOGICS · CONFIDENTIAL");
  s.addNotes("Portfolio table. A is the lead because its effect is largest, published and verified. B runs cheaply alongside. C waits for A's residue map.");
}
function s29(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "APPROACH / A", "The knockout — the lead bet.",
    "Move T36's p61+p65 alleles into the transmissible FS577 backbone. Harper proved the pair opens the gate; Trial 1 asks whether the same residues close it.", { densetop: true });
  const y0 = 2.9;
  G.card_min(s, M, y0, 4.6, 3.4, C.TAN);
  T.h(s, "THE CONSTRUCT SET", M + 0.25, y0 + 0.18, 4.1, { color: C.RUST_DK });
  T.bullets(s, [
    { lead: "Parent —", text: "FS577 wild type (24.1%; system validation)" },
    { lead: "A1 —", text: "FS577 + T36 p61 alone (9 changes)" },
    { lead: "A2 —", text: "FS577 + T36 p65 alone (2 changes)" },
    { lead: "A3 —", text: "FS577 + T36 p61 + p65 (all 11)" },
    { lead: "Rule —", text: "p25 and p27 stay wild type; full-length sequence every clone" },
  ], M + 0.25, y0 + 0.5, 4.1, { size: 9.3, gap: 5.5, h: 2.7 });
  T.vline(s, 5.45, y0, 3.4);
  T.h(s, "THE ASSUMPTIONS — EACH MAPPED TO ITS TEST", 5.8, y0 + 0.02, 6.9, { color: C.TERRA });
  const cols = [{ label: "#", w: 0.5 }, { label: "ASSUMPTION", w: 3.5 }, { label: "PROVEN BY", w: 2.9 }];
  const rows = [
    { h: 0.42, cells: ["A1", "The 11 residues are necessary for transmission", "A3 silences FS577"] },
    { h: 0.42, cells: ["A2", "Mechanism is docking, not accumulation", "RT-qPCR titer stays parental"] },
    { h: 0.48, cells: ["A3", "p33 is not required for the silencing", "A3 alone reaches ≤5% (else B joins)"] },
    { h: 0.48, cells: ["A4", "Single-genotype results bound the field claim", "Purity sequencing; mixed arm parked"] },
    { h: 0.48, cells: ["A5", "The pair — not a subset — is the unit", "A1/A2 singles stay near parental rate"] },
  ];
  T.table(s, 5.8, y0 + 0.32, 7.0, cols, rows, { rowLineColor: C.LINE2, size: 9 });
  T.takeaway(s, "PRE-REGISTERED: SILENCE TO ≤5% AT PARENTAL TITER = GO · ANYTHING ELSE IS A WRITTEN-DOWN NEXT STEP");
  T.footer(s, tag, "MINIMUM KILL TEST: PARENT + A3 · FULL DESIGN: +A1/A2 (~1,000 PLANTS)");
  s.addNotes("Approach A with its five assumptions spelled out, each tied to a specific measurement. Assumptions must be provable — here each one is.");
}
function s30(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "APPROACH / B", "A different wager on how transmission works.",
    "If p33's verified effect runs through accumulation and ion homeostasis rather than docking, that is a second, independent containment lever — and this arm prices it.", { densetop: true });
  const y0 = 2.95, cw = 5.9;
  G.card_min(s, M, y0, cw, 3.35);
  T.h(s, "DESIGN", M + 0.25, y0 + 0.18, cw - 0.5, { color: C.TERRA });
  T.bullets(s, [
    { lead: "Primary —", text: "T36 p33 (whole gene) into FS577, titer-matched" },
    { lead: "Registered reciprocal —", text: "the missing causality test, designed before data arrives" },
    { lead: "Mandatory —", text: "RT-qPCR titer on every source plant; transmission normalized per unit titer — the peer review's loudest fix" },
    { lead: "Excluded —", text: "K174R point edit: falsified; never enters the library" },
  ], M + 0.25, y0 + 0.5, cw - 0.5, { size: 9.6, gap: 6.5, h: 2.9 });
  const x2 = M + cw + 0.42;
  G.card_min(s, x2, y0, cw, 3.35);
  T.h(s, "WHAT IT BUYS, WIN OR LOSE", x2 + 0.25, y0 + 0.18, cw - 0.5, { color: C.OLIVE });
  T.bullets(s, [
    { lead: "If transmission tracks titer —", text: "the mechanism is accumulation; binding stays normal; Approach A remains the product path and B is explained" },
    { lead: "If transmission falls at fixed titer —", text: "a second interface exists: two independent silencing levers for the platform" },
    { lead: "Watch the pleiotropy —", text: "p33 is movement / host-range / superinfection machinery; the titer gate (≥80% WT) is what makes this arm safe to run" },
  ], x2 + 0.25, y0 + 0.5, cw - 0.5, { size: 9.6, gap: 6.5, h: 2.9 });
  T.takeaway(s, "THE PEER REVIEW'S PRICE OF ADMISSION: TITER-NORMALIZED INOCULUM, OR THE NUMBERS MEAN NOTHING");
  T.footer(s, tag, "SHILTS 2020 SWAP DATA · AKNADIBOSSIAN 2025 VIROPORIN · PANELS R1+R2");
  s.addNotes("Approach B: the p33 arm with the review's two conditions built in — titer normalization and a registered reciprocal. It converts an unattributed effect into an attributed one.");
}
function s31(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "APPROACH / C", "The literal capsid mutation — after the map.",
    "The question as originally posed: a p27 (minor coat) point edit that kills docking while sparing assembly. Nobody has published one. The residue map from Approach A is what makes it aimable.", { densetop: true });
  const cols = [{ label: "DESIGN RULE", w: 4.6 }, { label: "REASON", w: 7.6 }];
  const rows = [
    { h: 0.44, cells: ["Align CPm across strains and family", "Surface / variable / positively selected sites first — e.g. codon 9 (Wu et al. 2015)"] },
    { h: 0.44, cells: ["Non-conservative single substitutions", "LIYV says truncations work; the goal is the minimal edit, not the maximal disruption"] },
    { h: 0.5, cells: ["Keep transmissible p61/p65 in the background", "So a CPm effect is not confounded by the T36 chaperone set — the lesson Harper's genetics teaches"] },
    { h: 0.5, cells: ["Screen on the cibarium binding assay first", "Days, not weeks: only binding-dead candidates earn greenhouse space"] },
    { h: 0.5, cells: ["Gate C on A's residue map", "If p61/p65 carry transmission, the map says where CPm sits relative to the functional unit"] },
  ];
  T.table(s, M, 2.85, CW, cols, rows, { rowLineColor: C.LINE2, size: 9.3 });
  T.body(s, [{ text: "Why it matters commercially:  ", options: { italic: true, color: C.TXT } },
    { text: "a single-residue edit is the cleanest possible regulatory and patent claim — one changed " +
      "codon, one mechanism, one phenotype. It is worth having; it is not worth guessing at before the map.", options: {} }],
    M, 5.85, 11.6, { size: 10, h: 0.7, lsm: 1.1 });
  T.takeaway(s, "C IS THE INHERITANCE OF A, NOT A COMPETITOR — THE MAP FROM ONE DESIGN AIMS THE NEXT");
  T.footer(s, tag, "LIYV PRECEDENT (STEWART 2010) · WU 2015 · KILLINY 2016 ASSAY");
  s.addNotes("Approach C: the literal capsid point mutant, milestone-gated behind A's residue map, with five design rules on the slide.");
}
function s32(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "THE / DISCRIMINATOR", "One protocol, three mechanisms, different predictions.",
    "The three approaches are not three guesses at the same answer — they predict different measurements across the same three readouts. The season tells you which story was true.", { densetop: true });
  const cols = [{ label: "CONSTRUCT", w: 3.3 }, { label: "RT-QPCR TITER", w: 2.6 },
    { label: "CIBARIUM BINDING", w: 3.0 }, { label: "TRANSMISSION", w: 3.3 }];
  const up = "▲", dn = "▼", eq = "=", q = "?";
  const rows = [
    { h: 0.5, cells: [[{ text: "FS577 wild type (parent)", options: { italic: true } }],
      "parental (ref)", "strong (ref)", [{ text: "24.1%", mono: true, color: C.TXT }]] },
    { h: 0.62, cells: [[{ text: "A3 · + T36 p61+p65", options: { italic: true, color: C.TERRA } }],
      [{ text: eq + " parental", color: C.OLIVE }], [{ text: dn + " collapses", color: C.TERRA }],
      [{ text: dn + " ≤5%", mono: true, color: C.TERRA }]] },
    { h: 0.62, cells: [[{ text: "B · + T36 p33 (whole gene)", options: { italic: true, color: C.AMBER } }],
      [{ text: q + " titer-linked", color: C.AMBER }], [{ text: eq + " unchanged (pred.)", color: C.MUTE }],
      [{ text: dn + " if accumulation gates", mono: true, color: C.MUTE }]] },
    { h: 0.62, cells: [[{ text: "C · p27 point edits (later)", options: { italic: true, color: C.FAINT } }],
      [{ text: eq + " parental", color: C.MUTE }], [{ text: dn + " dead at the tail", color: C.MUTE }],
      [{ text: dn + " ≤5%", mono: true, color: C.MUTE }]] },
  ];
  T.table(s, M, 2.95, CW, cols, rows, { rowLineColor: C.LINE2, size: 9.5 });
  T.body(s, [{ text: "The binding assay is the tie-breaker of record:  ", options: { italic: true, color: C.TXT } },
    { text: "a silenced construct that never docks = interface defect (design more C-type edits); " +
      "one that docks but fails = downstream defect (rethink the interface model). Both are publishable " +
      "mechanism answers — but only the first extends the design rule.", options: {} }],
    M, 5.9, 11.6, { size: 10, h: 0.85, lsm: 1.1 });
  T.takeaway(s, "WHICHEVER COLUMN MOVES, SILVEC LEARNS WHICH MACHINE IT IS EDITING");
  T.footer(s, tag, "PREDICTIONS REGISTERED BEFORE CLONING — THAT IS WHAT MAKES THEM EVIDENCE AFTER");
  s.addNotes("The discriminator matrix: constructs × readouts, with registered predictions. Failures here are mechanism data, not dead ends.");
}

// ---- PART 04 · THE CONDITIONS ----
function s33(pres, tag) {
  const s = pres.addSlide();
  T.divider(s, "04", "PART FOUR OF FIVE",
    [{ text: "The conditions." }],
    "What the trial needs in hand before it deserves greenhouse space. What would raise the value of a " +
    "yes. What would kill it. And how the numbers get kept honest while everyone is hoping.", tag);
  s.addNotes("Part four: the credibility machinery — prerequisites, amplifiers, disqualifiers, statistics discipline, data rules, risks, and the decision matrix.");
}
function s34(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "TIER 1 / PREREQUISITES", "Five conditions. Four in hand, one to confirm.",
    "What any first virology trial must clear before it deserves greenhouse space. This one clears more of them than most topics could.", { densetop: true });
  const cols = [{ label: "CONDITION", w: 2.9 }, { label: "WHY IT MATTERS", w: 5.3 }, { label: "STATUS", w: 4.0 }];
  const rows = [
    { h: 0.52, cells: ["Infectious clones exist",
      "Gain-of-function swaps were already demonstrated on this exact backbone — the inverse is standard subcloning",
      { text: "IN HAND — 947R (AY170468) · FS577 (KC517488)", mono: true, color: C.OLIVE, size: 8 }] },
    { h: 0.52, cells: ["One published assay",
      "The Harper protocol is documented end-to-end, with verified positive and negative baselines",
      { text: "IN HAND — 24 H ACQ · 10 APHIDS · ELISA 8 WK", mono: true, color: C.OLIVE, size: 8 }] },
    { h: 0.52, cells: ["A defined host and vector",
      "One host species, one aphid species — no host-range ambiguity contaminating the readout",
      { text: "IN HAND — C. MACROPHYLLA · T. CITRICIDA", mono: true, color: C.OLIVE, size: 8 }] },
    { h: 0.52, cells: ["A titer control",
      "Titer separates movement loss from docking loss — the two phenotypes the trial must keep apart",
      { text: "IN HAND — RT-QPCR + ELISA ON SOURCE FLUSH", mono: true, color: C.OLIVE, size: 8 }] },
    { h: 0.56, cells: ["A transmissible backbone clone in hand",
      "The knockout needs a recipient that transmits. Field-isolate clones exist; physical access and containment status must be confirmed",
      { text: "TO CONFIRM — FS577 OR T68 CLONE · THIS WEEK", mono: true, color: C.TERRA, size: 8 }] },
  ];
  T.table(s, M, 2.85, CW, cols, rows, { rowLineColor: C.LINE2, size: 9.5 });
  T.takeaway(s, "THE FIFTH ROW IS THE WHOLE TRIAL — AND IT IS A PHONE CALL, NOT AN EXPERIMENT");
  T.footer(s, tag, "SILVEC BIOLOGICS · CONFIDENTIAL");
  s.addNotes("Four of five prerequisites in hand. The fifth — physical access to a transmissible backbone clone plus containment status — is answerable this week.");
}
function s35(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "TIER 2 / AMPLIFIERS", "What would make it a great trial.",
    "None required for the knockout. Each raises the value of the same lab work — or compresses the loop from weeks to days.", { densetop: true });
  const pads = [
    ["RAISES THE VALUE", "A residue map", "Eleven substitutions tested in blocks, then singles, converts one knockout into a transferable design rule for any closterovirus transmission module."],
    ["RAISES THE VALUE", "A second backbone (T68)", "Same tail architecture, different genotype. Reproducing the silencing there separates a universal mechanism from an isolate quirk — a rule, not a result."],
    ["SHORTENS THE LOOP", "The cibarium binding assay", "Fluorescent virions on dissected foreguts (Killiny 2016). Days instead of eight weeks — and it splits 'never docks' from 'docks but won't transmit'."],
    ["COSTS NOTHING", "The CYVaV platform parallel", "Silvec's own vector is capsid-free — vector-incompatible by architecture. Every CTV result lands beside it as the same biocontainment logic, written in two systems."],
  ];
  const cw = 5.9, chh = 1.62;
  pads.forEach((p, i) => {
    const cx = M + (i % 2) * (cw + 0.42), cy = 3.0 + Math.floor(i / 2) * (chh + 0.22);
    G.card_min(s, cx, cy, cw, chh);
    T.h(s, p[0], cx + 0.22, cy + 0.14, cw - 0.44, { color: i % 2 ? C.TERRA : C.OLIVE, size: 6.5 });
    s.addText(p[1], { x: cx + 0.22, y: cy + 0.38, w: cw - 0.44, h: 0.3, fontFace: F.SERIF,
      fontSize: 13, italic: true, color: C.TXT, isTextBox: true, margin: 0 });
    T.body(s, p[2], cx + 0.22, cy + 0.72, cw - 0.44, { size: 9.3, h: 0.85, lsm: 1.05 });
  });
  T.takeaway(s, "THE FIRST TWO MAKE A RULE · THE THIRD COMPRESSES THE LOOP · THE FOURTH IS WHY IT'S A PLATFORM STORY");
  T.footer(s, tag, "SILVEC BIOLOGICS · CONFIDENTIAL");
  s.addNotes("Amplifiers 2×2. The CYVaV parallel is the platform beat: capsid-free by architecture vs. capsidated but vector-silenced by design.");
}
function s36(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "TIER 3 / DISQUALIFIERS", "What would make it the wrong trial.",
    "One failure mode is fatal and detectable in the first assay. The other two keep the science sound but shrink the claim.", { densetop: true });
  const rows = [
    { head: "The swap doesn't silence the backbone.",
      txt: "If FS577 carrying T36's p61+p65 still transmits, gating depends on something the eleven residues don't supply. Two clones were all it cost to find out.",
      tag: "FATAL", tc: C.TERRA, note: "FIRST EIGHT-WEEK READOUT DECIDES" },
    { head: "Mixed infections rescue transmission.",
      txt: "0.5% alone, 35.7% co-infected. Field claims rest on single-genotype conditions — and real groves are mixed. Known before the first clone is built.",
      tag: "WEAKENS", tc: C.AMBER, note: "ASSAY SINGLE INFECTIONS · DEPLOYMENT CLAIM NARROWS" },
    { head: "Titer or movement falls with transmission.",
      txt: "Then you've built an assembly defect wearing a vector defect's clothes. The entire premise is that the two are separable.",
      tag: "WEAKENS", tc: C.AMBER, note: "RT-QPCR ON SOURCE TISSUE DISCRIMINATES" },
  ];
  rows.forEach((r, i) => {
    const cy = 2.95 + i * 1.18;
    G.card_min(s, M, cy, CW, 1.06);
    T.chip(s, M + 0.22, cy + 0.18, r.tag, r.tc, { w: 1.05 });
    s.addText(r.head, { x: M + 1.5, y: cy + 0.13, w: 10.5, h: 0.3, fontFace: F.SERIF, fontSize: 13,
      italic: true, color: C.TXT, isTextBox: true, margin: 0 });
    T.body(s, r.txt, M + 1.5, cy + 0.47, 6.7, { size: 9.3, h: 0.55, lsm: 1.05 });
    s.addText(r.note, { x: 8.6, y: cy + 0.47, w: 4.0, h: 0.5, fontFace: F.MONO, fontSize: 6.5,
      color: C.GHOST, charSpacing: 1.2, isTextBox: true, margin: 0, valign: "top" });
  });
  T.takeaway(s, "IF THE FATAL CASE HOLDS, THE FALLBACK IS THE p27 MAP — APPROACH C, NOT ABANDONMENT");
  T.footer(s, tag, "SILVEC BIOLOGICS · CONFIDENTIAL");
  s.addNotes("Disqualifiers. Fatal: no silencing — cheap to learn. Weakens ×2: complementation rescue and titer loss; both are designed-for, not discovered-later.");
}
function s37(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "THE / STATISTICS DISCIPLINE", "Small numbers look exact. The intervals say otherwise.",
    "The peer panel recomputed every claim to unanimity. These are the three statistical habits that keep the trial from lying to itself.", { densetop: true });
  T.h(s, "95% CONFIDENCE INTERVALS · CLOPPER-PEARSON", M, 2.9, 6.5, { color: C.GHOST });
  G.cidot(s, M, 3.2, 7.0, [
    { label: "T68-1", lo: 37.4, hi: 51.1, pt: 44.2, tag: "95/215", color: C.FAINT },
    { label: "FS577", pt: 24.1, tag: "95/394", color: C.AMBER },
    { label: "T36+p33 swap", lo: 10.5, hi: 27.3, pt: 17.8, tag: "16/90", color: C.AMBER },
    { label: "T30", lo: 0.19, hi: 5.57, pt: 1.57, tag: "2/127", color: C.FAINT },
    { label: "T36 field", lo: 0.04, hi: 8.16, pt: 1.5, tag: "1/66", color: C.TERRA },
  ], { maxP: 55, rowH: 0.36 });
  T.body(s, "T36's '1.5%' is one positive plant out of 66 — say 'low single digits' when the distinction matters.",
    M, 5.25, 6.6, { size: 9.5, h: 0.5 });
  T.vline(s, 7.6, 2.85, 3.5);
  T.bullets(s, [
    { lead: "Don't chase 5-point gaps.", text: "n=90/arm sees a 5-pp effect at 14% power; 80% power needs ~934/arm. Small effects are unbuyable — design for big ones" },
    { lead: "Containment is a zero.", text: "0/200 transmissions → upper 95% bound 1.5%. That is the claim shape 'transmission-disabled' actually means" },
    { lead: "Multiplicity is a leak.", text: "7 uncorrected tests → 30% chance of a false positive. The panel caps primaries at 3–4, Bonferroni α" },
  ], 7.95, 3.0, 4.85, { size: 9.8, gap: 9, h: 3.0 });
  T.takeaway(s, "EVERY RATE IS STATED WITH ITS n · EVERY CLAIM WITH ITS INTERVAL · EVERY COMPARISON WITH ITS CORRECTION");
  T.footer(s, tag, "RECOMPUTED TO 6/6 UNANIMITY · ROUND-2 PANEL");
  s.addNotes("Statistics discipline: CI plot on key rates, the power reality for small effects, and multiplicity control. The containment claim is a zero over a large n.");
}
function s38(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "DATA / REQUIREMENTS", "What makes a transmission number count.",
    "Six rules, all learnable from Harper's own two papers. They generalize to any vector-competence work Silvec ever runs.", { densetop: true });
  const items = [
    ["Single-genotype source trees", "Complementation between co-infecting genotypes moves T36 ~70-fold. One clone per tree; purity verified by sequencing."],
    ["The same assay, the same way", "24 h acquisition, 10 aphids per plant, 24 h inoculation, ELISA at 8 weeks. The protocol exists so results are comparable."],
    ["Titer on every source plant", "Transmission is only interpretable against source titer. RT-qPCR plus ELISA on the flush the aphids actually fed on."],
    ["Denominators, not adjectives", "'35 of 196' carries its confidence interval inside it. 'About a fifth' does not."],
    ["Blinded scoring", "Whoever reads the ELISA does not know which clone is on the bench. A 1% effect at the assay floor needs protection from expectation."],
    ["One row per plant, machine-readable", "Clone, titer, aphid batch, acquisition date, OD, Ct. Fifty clean rows beat five hundred narrated ones."],
  ];
  const cw = 3.93, chh = 1.5;
  items.forEach((it, i) => {
    const cx = M + (i % 3) * (cw + 0.21), cy = 2.95 + Math.floor(i / 3) * (chh + 0.2);
    G.card_min(s, cx, cy, cw, chh);
    s.addText("0" + (i + 1), { x: cx + 0.15, y: cy + 0.1, w: 0.6, h: 0.25, fontFace: F.MONO,
      fontSize: 8, color: C.TERRA, isTextBox: true, margin: 0 });
    s.addText(it[0], { x: cx + 0.6, y: cy + 0.1, w: cw - 0.75, h: 0.4, fontFace: F.SERIF,
      fontSize: 11.5, italic: true, color: C.TXT, isTextBox: true, margin: 0, valign: "top" });
    T.body(s, it[1], cx + 0.15, cy + 0.52, cw - 0.3, { size: 8.8, h: 0.95, lsm: 1.05 });
  });
  T.takeaway(s, "A STANDING CHECKLIST — USEFUL ON EVERY FUTURE VECTOR PROJECT, WHATEVER THIS TRIAL FINDS");
  T.footer(s, tag, "SILVEC BIOLOGICS · CONFIDENTIAL");
  s.addNotes("The six data rules. Keep as a permanent checklist for the wet-lab team.");
}
function s39(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "DATA / ANTI-PATTERNS", "What makes a transmission number lie.",
    "Two categories. The second is the dangerous one — missing data announces itself; biased data produces a confident result that is wrong.", { densetop: true });
  const y0 = 3.0, cw = 5.9;
  G.card_min(s, M, y0, cw, 3.3);
  T.h(s, "MAKES IT UNUSABLE · HARD BLOCKERS", M + 0.25, y0 + 0.18, cw - 0.5, { color: C.TERRA });
  T.bullets(s, [
    { lead: "Rates without denominators.", text: "'Poorly transmitted' is not a number" },
    { lead: "Mixed isolates passed as one genotype.", text: "quasispecies clouds make every swap ambiguous" },
    { lead: "Non-clonal starting material.", text: "greenhouse T36 populations drift by construction" },
    { lead: "Undocumented aphid colonies.", text: "T. citricida competence varies by colony and lineage" },
  ], M + 0.25, y0 + 0.5, cw - 0.5, { size: 9.6, gap: 7, h: 2.7 });
  const x2 = M + cw + 0.42;
  s.addShape("rect", { x: x2, y: y0, w: cw, h: 3.3, fill: { color: C.INK }, line: { type: "none" } });
  T.h(s, "MAKES IT MISLEADING · SILENT DEGRADERS", x2 + 0.25, y0 + 0.18, cw - 0.5, { color: C.AMBER });
  const dk = [];
  [
    ["Greenhouse drift read as biology", "T36 lost transmission exactly this way: decades of graft-only passage"],
    ["Titer drift between source plants", "scales with titer; unmeasured, it reads as genotype"],
    ["Scoring from mixed-symptom trees", "the 35.7% complementation result is this trap"],
    ["Host swaps", "a macrophylla rate says nothing about sweet orange"],
    ["Undocumented experimental units", "pooled vs independent inoculations decide if CIs are real"],
  ].forEach((pair, i, arr) => {
    dk.push({ text: "·  " + pair[0], options: { breakLine: true, paraSpaceAfter: 2 } });
    dk.push({ text: "    " + pair[1], options: { color: C.ONDARK_MUTE, fontSize: 8.6,
      breakLine: i === arr.length - 1 ? false : true, paraSpaceAfter: 9 } });
  });
  s.addText(dk.map(r => ({ text: r.text, options: Object.assign({ fontFace: F.SERIF, fontSize: 9.2,
    color: C.ONDARK }, r.options) })), { x: x2 + 0.25, y: y0 + 0.48, w: cw - 0.5, h: 2.7,
    isTextBox: true, margin: 0, valign: "top", lineSpacingMultiple: 0.98 });
  T.takeaway(s, "THE BIGGEST RISK IS QUIET: A DRIFTED OR COMPLEMENTED CLONE MASQUERADING AS A RESULT");
  T.footer(s, tag, "SILVEC BIOLOGICS · CONFIDENTIAL");
  s.addNotes("Anti-patterns. Dark card = the dangerous category: drift, unmeasured titer, mixed trees, host swaps, undocumented units.");
}
function s40(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "THE / RISK REGISTER", "Six ways it bends. Each has a written counter.",
    "Registered now, so a bad week in the greenhouse reads as a branch on the tree, not a surprise.", { densetop: true });
  const cols = [{ label: "RISK", w: 4.3 }, { label: "THE COUNTER", w: 7.9 }];
  const rows = [
    { h: 0.46, cells: ["Constructs don't assemble or replicate", "Stage-0 N. benthamiana agroinfiltration, RT-qPCR at day 5–7; ≥80% of WT titer or the clone never meets an aphid"] },
    { h: 0.46, cells: ["Partial silencing (5–15% band)", "Pre-planned Phase 2 joins — p33 whole-gene arm or the reciprocal — no redesign under time pressure"] },
    { h: 0.46, cells: ["Pleiotropic movement loss", "p61/p65 are HSP homologs, not p23; verify by full-length sequencing and systemic-symptom tracking anyway"] },
    { h: 0.46, cells: ["Host transfer: macrophylla ≠ sweet orange", "Trial reads movement on the assay host; citrus validation is its own stage with its own gate"] },
    { h: 0.46, cells: ["Drifted or mixed clone stocks", "Clonal founders, re-sequence every batch; quasispecies clouds are the classic silent degrader"] },
    { h: 0.46, cells: ["Experimental units undocumented", "Plants/runs/batches logged before statistics are invoked — the panel's structural fix"] },
  ];
  T.table(s, M, 2.85, CW, cols, rows, { rowLineColor: C.LINE2, size: 9.4 });
  T.takeaway(s, "EVERY RISK IS A REGISTERED BRANCH — THE TRIAL CAN SURPRISE US WITH DATA, NOT WITH DESIGN GAPS");
  T.footer(s, tag, "SILVEC BIOLOGICS · CONFIDENTIAL");
  s.addNotes("Risk register: six risks, six counters, all pre-registered.");
}
function s41(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "THE / DECISION", "Four answers, three outcomes.",
    "Each answer changes what happens next. The first one changes it absolutely.", { densetop: true });
  const cols = [{ label: "QUESTION", w: 4.9 }, { label: "IF YES", w: 3.6 }, { label: "IF NO", w: 3.7 }];
  const rows = [
    { h: 0.5, cells: [[{ text: "Q1 · ", mono: true, color: C.TERRA }, "Do T36 p61+p65 silence the transmissible backbone?"],
      "The hypothesis stands. Build the map.", "Backbone-dependent. Stop or redesign."], },
    { h: 0.5, cells: [[{ text: "Q2 · ", mono: true, color: C.TERRA }, "Are titer and systemic movement preserved?"],
      "The phenotypes are separable — the premise holds.", "An assembly defect, not a vector defect."], },
    { h: 0.5, cells: [[{ text: "Q3 · ", mono: true, color: C.TERRA }, "Do single-gene swaps silence partially?"],
      "A graded gate — the residue map has headroom.", "All-or-nothing: the pair is the minimal edit."], },
    { h: 0.5, cells: [[{ text: "Q4 · ", mono: true, color: C.TERRA }, "Does cibarium binding track transmission?"],
      "A days-scale screen for every future variant.", "Failure is downstream of docking — different biology."], },
  ];
  T.table(s, M, 2.85, CW, cols, rows, { rowLineColor: C.LINE2, size: 9.4 });
  // outcome cards
  const cards = [
    ["Q1 YES · Q2 YES", "Strong case", "GO", C.OLIVE,
      "Proceed to the residue map and second backbone. The design rule is real."],
    ["Q1 YES · Q2 BORDERLINE", "Proof of principle", "GO", C.AMBER,
      "Publishable and defensible — but the platform claim narrows to what the titer data supports."],
    ["Q1 NO", "Change target", "NO", C.TERRA,
      "Move to the p27 map via the binding assay — or reframe as a T36 mechanism study with p33 in play."],
  ];
  cards.forEach((cd, i) => {
    const cx = M + i * 4.15, cy = 5.28, cw = 3.93, chh = 1.2;
    G.card_min(s, cx, cy, cw, chh);
    s.addText(cd[1], { x: cx + 0.2, y: cy + 0.12, w: 2.4, h: 0.25, fontFace: F.SERIF,
      fontSize: 12.5, italic: true, color: C.TXT, isTextBox: true, margin: 0 });
    T.chip(s, cx + cw - 0.75, cy + 0.13, cd[2], cd[3], { w: 0.55 });
    T.body(s, cd[4], cx + 0.2, cy + 0.45, cw - 0.4, { size: 8.6, h: 0.8, lsm: 1.05 });
  });
  T.takeaway(s, "Q1 IS THE GATE · Q3 SIZES THE DESIGN SPACE · Q4 BUYS THE FAST SCREEN", { y: 6.62 });
  T.footer(s, tag, "SILVEC BIOLOGICS · CONFIDENTIAL");
  s.addNotes("Decision matrix: Q1 gates everything. Cards give the three registered outcomes in advance.");
}
module.exports = [s27, s28, s29, s30, s31, s32, s33, s34, s35, s36, s37, s38, s39, s40, s41];
