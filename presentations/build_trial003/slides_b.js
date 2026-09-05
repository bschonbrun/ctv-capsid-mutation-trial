// slides_b.js — PART 02 THE HYPOTHESIS (divider + 13)
const T = require("./theme");
const G = require("./fig");
const { C, F, M, CW } = T;

function s13(pres, tag) {
  const s = pres.addSlide();
  T.divider(s, "02", "PART TWO OF FIVE",
    [{ text: "The hypothesis." }],
    "Why the coat was the wrong target. What nature already built. The swap series that proves a gate " +
    "exists. The eleven residues that hold it — and the third gene nobody has finished explaining.", tag);
  s.addNotes("Part two: the science itself. The biggest section — the product case.");
}
function s14(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "THE / ANSWER", "Eleven substitutions, two proteins, one experiment.",
    "The question as posed has a precise answer — and it is not a coat-protein mutation. In CTV the aphid reads the virion's tail complex, and the transmission difference between two near-identical isolates is already mapped to two genes.", { densetop: true });
  const y0 = 3.15, cw = 3.74, ys = y0 + 0.62, yb = y0 + 1.7;
  const panels = [
    ["WHAT NATURE ALREADY BUILT", "The phenotype exists. No design needed.",
      "Greenhouse T36: systemic infection, full titer, decades of stability — 0.6% aphid transmission (1/172). Field isolate FS577, same strain lineage: 24.1% (95/394). The capsids are essentially identical.",
      M],
    ["WHAT TO CHANGE", "p61 and p65 — together, or not at all.",
      "Nine substitutions in p61, two in p65, moved as a pair. Alone each restored only 1.9–4.0%; together 17.9%. p25 and p27 stay wild type: the coat is not the interface.",
      M + 4.24],
    ["WHAT DECIDES IT", "One experiment nobody has run.",
      "Harper et al. ran the swap in the gain direction. The inverse — T36 alleles silencing a transmissible backbone — is the knockout. If it fails, the hypothesis dies in eight weeks, cheaply.",
      M + 8.48],
  ];
  panels.forEach(([k, head, txt, x]) => {
    if (x > M) T.vline(s, x - 0.25, y0 - 0.05, 2.75);
    T.h(s, k, x, y0, cw, { color: C.TERRA });
    T.subhead(s, head, x, y0 + 0.28, cw, { size: 17, h: 0.8 });
    T.body(s, txt, x, y0 + 1.08, cw - 0.15, { size: 10, h: 1.3, lsm: 1.08 });
  });
  T.takeaway(s, "GAIN-OF-TRANSMISSION IS PUBLISHED AND VERIFIED — THE LOSS-OF-TRANSMISSION KNOCKOUT IS THE WHOLE TRIAL");
  T.footer(s, tag, "HARPER 2016 · VERIFIED DIRECTLY FROM THE PAPER");
  s.addNotes("The answer in three panels: the phenotype exists, the edits are eleven residues in two chaperones, and the deciding experiment is the never-run inverse swap.");
}
function s15(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "THE / VIRION", "A bipolar particle. The aphid only reads one end.",
    "CTV's flexuous rod is two structures in one — and the transmission interface is entirely on the tail.");
  G.virion(s, M, 2.95, CW - 0.6);
  const y0 = 4.35, cw = 5.9;
  G.card_min(s, M, y0, cw, 1.95);
  T.h(s, "p25 · THE BODY", M + 0.25, y0 + 0.18, cw - 0.5, { color: C.GHOST });
  T.body(s, [{ text: "Coats ~95% of the genome and doubles as the silencing suppressor. Mutating its " +
      "surface risks assembly and titer — and the aphid never reads it: free p25 does not compete " +
      "virion binding.", options: {} }], M + 0.25, y0 + 0.48, cw - 0.5, { size: 10, h: 1.3, lsm: 1.1 });
  const x2 = M + cw + 0.42;
  G.card_min(s, x2, y0, cw, 1.95, C.TAN);
  T.h(s, "p27 + p65 + p61 · THE TAIL", x2 + 0.25, y0 + 0.18, cw - 0.5, { color: C.TERRA });
  T.body(s, [{ text: "p27 (CPm) caps ~630 nt at the 5′ end; p65 (HSP70h) and p61 place it there and " +
      "restrict it (Satyanarayana 2004). Free p27, p61 and p65 all compete virion binding at the " +
      "aphid cibarium. That is the docking site.", options: {} }], x2 + 0.25, y0 + 0.48, cw - 0.5,
    { size: 10, h: 1.3, lsm: 1.1 });
  T.takeaway(s, "CTV'S TRANSMISSION INTERFACE IS A TAIL COMPLEX — 'CAPSID MUTATION' HERE MEANS THE CHAPERONES");
  T.footer(s, tag, "SATYANARAYANA 2004 · KILLINY 2016");
  s.addNotes("The architecture slide: p25 body the aphid ignores; p27 cap placed by p65/p61 — the end the aphid reads.");
}
function s16(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "WHY / NOT THE COAT", "The favorite explanation died on sequence data.",
    "CPm was the obvious target — the only coat protein on the virion surface that binds the aphid. Two independent tests killed it as the transmission dial.", { densetop: true });
  const y0 = 2.95;
  T.numStat(s, M, y0, 3.6, "240 / 240", "CPM AMINO ACIDS IDENTICAL · FS577 VS T36",
    "…across a transmission gap of 24.1% vs 1.5%. A sequence that does not vary cannot explain a phenotype that does.", { nsize: 34, nh: 0.55 });
  T.vline(s, M + 4.0, y0 - 0.05, 1.9);
  T.numStat(s, M + 4.4, y0, 3.6, "p = 1.00", "THE FUNCTIONAL NULL · SHILTS 2020",
    "Adding CPm+5′UTR to the p33 swap changed nothing: 17/90 vs 16/90. Where variation exists, it still does nothing.", { nsize: 34, nh: 0.55 });
  T.vline(s, M + 8.45, y0 - 0.05, 1.9);
  G.card_min(s, M + 8.85, y0 - 0.05, 3.95, 2.0, C.TAN);
  T.h(s, "THE DISTINCTION THAT SURVIVES", M + 9.05, y0 + 0.12, 3.55, { color: C.RUST_DK });
  T.body(s, "What is dead: CPm as the explanation. What lives: CPm as the ligand — a necessary part " +
    "of the machine, still a knockout target (Approach C), just not nature's tuning knob.",
    M + 9.05, y0 + 0.42, 3.55, { size: 10, h: 1.4, lsm: 1.1 });
  T.takeaway(s, "NECESSARY MACHINERY ≠ THE DETERMINANT — CONFUSING THE TWO COST THIS PROJECT'S FIRST WEEK");
  T.footer(s, tag, "TIER 1: OUR ALIGNMENT · TIER 2: SHILTS 2020 FULL TEXT");
  s.addNotes("CPm falsified two independent ways: sequence identity and a functional null (p=1.00). The nuance to keep: CPm is still the binding ligand, just not the variation.");
}
function s17(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "THE / NATURAL EXPERIMENT", "Nature already ran it. In a greenhouse.",
    "T36 spent decades propagated by grafting — no aphid, no selection for transmission. What emerged reads like a designed containment strain.", { densetop: true });
  T.h(s, "APHID TRANSMISSION BY ISOLATE · T. CITRICIDA · WITH DENOMINATORS", M, 2.95, 7.2, { color: C.GHOST });
  G.hbarTransmission(s, M, 3.25, 7.3, [
    { label: "T68-1 · field", rate: 0.4418, num: 95, n: 215, color: C.FAINT },
    { label: "FS577 · field", rate: 0.241, num: 95, n: 394, color: C.AMBER },
    { label: "T30 · field", rate: 0.0157, num: 2, n: 127, color: C.FAINT },
    { label: "T36 · field", rate: 0.015, num: 1, n: 66, color: C.FAINT },
    { label: "T36 · infectious clone", rate: 0.006, num: 1, n: 172, color: C.TERRA },
  ], { max: 50, rowH: 0.4 });
  T.vline(s, 8.5, 2.9, 3.3);
  T.h(s, "WHY THE CLONE SITS AT THE FLOOR", 8.75, 2.95, 4.0, { color: C.TERRA });
  T.bullets(s, [
    { lead: "Drift by construction.", text: "Decades of graft-only passage relaxed selection on transmission; the trait eroded (Harper 2013)" },
    { lead: "Stable and real.", text: "Not a truncation — a viable virus with a silenced vector phase" },
    { lead: "Same lineage.", text: "T36, FS577 and T30 are one strain family: small residue sets separate 0.6% from 24%" },
  ], 8.75, 3.25, 4.0, { size: 9.5, gap: 6, h: 2.6 });
  T.takeaway(s, "AN ASSEMBLY-PERFECT, MOVEMENT-PERFECT, TRANSMISSION-DEAD VIRUS EXISTS — T36 IS THE PROTOTYPE");
  T.footer(s, tag, "RATES: SHILTS 2020 (FULL TEXT) · CLONE: HARPER 2016 (FULL TEXT)");
  s.addNotes("The bar chart carries its denominators. T36's floor value is drift, not design — which is precisely why drift can be reverse-engineered into design.");
}
function s18(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "THE / ADJUDICATING EXPERIMENT", "One paper settled what the models could not.",
    "Harper et al. 2016 swapped FS577 genes into the T36 clone. Retrieved and re-read during this project — every number below verified against the PDF, with its denominator.", { densetop: true });
  T.h(s, "TRANSMISSION RESTORED TO THE T36 CLONE · FIG. 1", M, 2.95, 7.0, { color: C.GHOST });
  G.hbarTransmission(s, M, 3.25, 7.3, [
    { label: "T36 clone · none", rate: 0.006, num: 1, n: 172, color: C.FAINT },
    { label: "+ FS577 p65", rate: 0.019, num: 5, n: 258, color: C.LINE },
    { label: "+ FS577 p61", rate: 0.040, num: 11, n: 273, color: C.LINE },
    { label: "+ FS577 p65 + p61", rate: 0.179, num: 35, n: 196, color: C.TERRA },
    { label: "+ FS577 p6–p18 block", rate: 0.206, num: 52, n: 253, color: C.AMBER },
    { label: "FS577 · wild type", rate: 0.241, num: 95, n: 394, color: C.FAINT },
  ], { max: 26, rowH: 0.3, labelW: 2.6, dp1: true });
  T.vline(s, 8.5, 2.9, 3.5);
  T.h(s, "THE SENTENCE THAT MATTERS", 8.75, 3.0, 4.0, { color: C.TERRA });
  T.body(s, [{ text: "“Aphid transmission requires the concerted action of these two genes through an " +
      "unknown mechanism, and further, that this requires compatible sequences in these two genes.”",
    options: { italic: true, color: C.TXT } }], 8.75, 3.3, 3.95, { size: 12, h: 1.5, lsm: 1.15 });
  T.body(s, [{ text: "— Harper et al. 2016 · Arch Virol 161:3555–3559\n", options: { color: C.FAINT } },
    { text: "Read in full during this project. The peer-review panel's 'unverified' flag lifted only when the PDF was fetched.", options: { size: 9 } }],
    8.75, 5.05, 3.95, { size: 9.5, h: 1.0, lsm: 1.1 });
  T.takeaway(s, "EVERY HYBRID INFECTED C. MACROPHYLLA SYSTEMICALLY — MOVEMENT INTACT, TITER INTACT, ONLY THE APHID SAW A DIFFERENCE");
  T.footer(s, tag, "PROTOCOL: 24 H ACQUISITION · 10 APHIDS/PLANT · ELISA AT 8 WEEKS");
  s.addNotes("The verified Harper table. Singles sit at baseline; the pair jumps to 17.9% against wild type's 24.1%. The quote is the design rule: compatible p61/p65 pairs, together.");
}
function s19(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "THE / SYNERGY", "1.9 + 4.0 ≠ 17.9. That inequality is the design.",
    "If the genes worked independently, the pair would add. It multiplies. The pair is a co-evolved unit — and the construct must move it as one.", { densetop: true });
  const y0 = 3.15;
  // arithmetic figure
  const rows = [
    { lbl: "T36 clone baseline", v: 0.6, gain: null },
    { lbl: "p65 alone", v: 1.9, gain: "+1.3 pp" },
    { lbl: "p61 alone", v: 4.0, gain: "+3.4 pp" },
    { lbl: "expected if additive", v: 5.3, gain: "+4.7 pp", ghost: true },
    { lbl: "p65 + p61 observed", v: 17.9, gain: "+17.3 pp", hot: true },
    { lbl: "FS577 wild type", v: 24.1, gain: null },
  ];
  const bx = M + 3.4, bw = 8.2; // plot right of labels
  rows.forEach((r, i) => {
    const cy = y0 + i * 0.52;
    s.addText(r.lbl, { x: M, y: cy, w: 3.2, h: 0.4, fontFace: F.SERIF, fontSize: r.hot ? 11.5 : 10,
      italic: r.hot, color: r.ghost ? C.GHOST : C.TXT, isTextBox: true, margin: 0, valign: "middle" });
    const w = (r.v / 25) * bw;
    s.addShape("rect", { x: bx, y: cy + 0.09, w, h: 0.24, fill: { color: r.hot ? C.TERRA : r.ghost ? C.LINE2 : C.LINE },
      line: r.ghost ? { color: C.GHOST, width: 0.75, dashType: "dash" } : { type: "none" } });
    s.addText(r.v + "%", { x: bx + w + 0.08, y: cy, w: 0.9, h: 0.4, fontFace: F.MONO, fontSize: 8.5,
      color: r.hot ? C.TERRA : C.MUTE, isTextBox: true, margin: 0, valign: "middle", bold: r.hot });
    if (r.gain) s.addText(r.gain, { x: bx + w + 0.75, y: cy, w: 1.2, h: 0.4, fontFace: F.MONO,
      fontSize: 8, color: r.hot ? C.TERRA : C.GHOST, isTextBox: true, margin: 0, valign: "middle" });
  });
  // synergy bracket annotation
  s.addText("≈ 12.6 pp of synergy — three times the additive expectation, 74% of wild-type rescue",
    { x: bx, y: y0 + 6 * 0.52 + 0.08, w: 8.6, h: 0.25, fontFace: F.SERIF, fontSize: 11, italic: true,
      color: C.TERRA, isTextBox: true, margin: 0 });
  T.takeaway(s, "MOVE THE PAIR · NEVER A GENE ALONE · NEVER A CHARGED SUBSET — SYNERGY IS THE CONSTRUCT RULE");
  T.footer(s, tag, "ARITHMETIC ON VERIFIED HARPER 2016 COUNTS");
  s.addNotes("The synergy slide. Additive expectation ~5.3%; observed 17.9%. The ~12.6-point gap is why no single-gene or subset design is worth greenhouse space.");
}
function s20(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "MECHANISM / TITER RULED OUT", "Equal accumulation. Thirty-fold different transmission.",
    "The commercially decisive fact in the whole record: you can silence the vector interface without touching viral fitness in the plant.", { densetop: true });
  const y0 = 3.0;
  G.card_min(s, M, y0, 5.9, 1.55);
  T.h(s, "HARPER 2016 · FIG. 2", M + 0.25, y0 + 0.18, 5.4, { color: C.GHOST });
  T.body(s, [{ text: "“No significant difference (Tukey HSD P > 0.05) in virus replication and " +
      "accumulation caused by the insertions.” — RT-qPCR and ELISA across every hybrid",
    options: { italic: true, color: C.TXT, size: 11.5 } }], M + 0.25, y0 + 0.48, 5.4, { size: 11, h: 1.0, lsm: 1.12 });
  // causal chain
  const steps = [
    "Transmission moved 30× between hybrids",
    "Viral accumulation did not move at all",
    "⇒ Acquisition is the gate, not abundance",
    "⇒ The defect lives at the aphid interface",
  ];
  steps.forEach((st, i) => {
    const cy = 4.8 + i * 0.42;
    T.chip(s, M, cy, String(i + 1), i > 1 ? C.TERRA : C.FAINT, { w: 0.26 });
    T.body(s, st, M + 0.42, cy + 0.01, 5.6, { size: 10.5, h: 0.3, color: i > 1 ? C.TXT : C.MUTE });
  });
  T.vline(s, 6.9, 2.95, 3.35);
  T.h(s, "WHY SILVEC SHOULD CARE MOST ABOUT THIS", 7.25, 3.0, 5.3, { color: C.TERRA });
  T.bullets(s, [
    { lead: "The product keeps working.", text: "A containment edit that costs titer costs efficacy; this mechanism says it won't" },
    { lead: "Movement is separable.", text: "The in-plant phase (replication, plasmodesmata, phloem) is untouched — the virion still moves, it just doesn't ride" },
    { lead: "The assay is fast.", text: "Titer checks gate every construct in days, before any aphid work" },
  ], 7.25, 3.3, 5.25, { size: 10, gap: 7, h: 2.8 });
  T.takeaway(s, "THE PREDICTED DEFECT IS IN THE APHID, NOT THE PLANT — THAT IS THE WHOLE PRODUCT IDEA");
  T.footer(s, tag, "HARPER 2016 FIG. 2 · VERIFIED FROM SOURCE");
  s.addNotes("Titer ruled out: equal accumulation, 30-fold transmission difference. This is the separability premise — the product's reason to exist.");
}
function s21(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "THE / DOCKING SITE", "The aphid's foregut, named and assayable.",
    "Killiny et al. 2016 localized the event: labeled virions bind the T. citricida cibarium, and the binding has a specific competition profile.", { densetop: true });
  G.foregutDock(s, M + 0.3, 3.35, 4.6);
  T.body(s, "Retention is protease-insensitive and chitinase-sensitive — a carbohydrate interface, " +
    "in the foregut, reached within the aphid's brief acquisition feed.", M, 5.2, 5.2,
    { size: 10, h: 0.9, lsm: 1.1 });
  T.vline(s, 6.2, 2.95, 3.4);
  T.h(s, "COMPETITION PROFILE · KILLINY 2016", 6.55, 3.0, 5.9, { color: C.GHOST });
  const rows = [
    { cells: [[{ text: "Free p25 (major coat)", options: { italic: true } }], { text: "no competition", color: C.GHOST }], h: 0.36 },
    { cells: [[{ text: "Free p27 (CPm)", options: { italic: true } }], { text: "competes binding", color: C.TERRA }], h: 0.36 },
    { cells: [[{ text: "Free p61", options: { italic: true } }], { text: "competes binding", color: C.TERRA }], h: 0.36 },
    { cells: [[{ text: "Free p65 (HSP70h)", options: { italic: true } }], { text: "competes binding", color: C.TERRA }], h: 0.36 },
  ];
  T.table(s, 6.55, 3.3, 6.1, [{ label: "PURIFIED PROTEIN", w: 3.1 }, { label: "EFFECT ON VIRION BINDING", w: 3.0 }],
    rows, { rowLineColor: C.LINE2, size: 9.5 });
  G.card_min(s, 6.55, 5.25, 6.1, 1.0, C.TAN);
  T.body(s, [{ text: "The accelerator:  ", options: { italic: true, color: C.RUST_DK } },
    { text: "fluorescent virions on dissected cibaria read binding in days, not eight weeks — " +
      "and separate 'never docks' from 'docks but won't transmit'.", options: {} }],
    6.75, 5.4, 5.75, { size: 9.5, h: 0.75 });
  T.takeaway(s, "THE TAIL PROTEINS AND ONLY THE TAIL PROTEINS COMPETE FOR THE SITE — GENETICS AND BIOCHEMISTRY AGREE");
  T.footer(s, tag, "KILLINY ET AL. 2016 · AEM 82:6294 · FULL TEXT");
  s.addNotes("Killiny's competition evidence independently names the same three proteins Harper's genetics did. The binding assay is the optional days-scale screen.");
}
function s22(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "THE / ELEVEN", "Every residue, re-derived from the accessions.",
    "Not from a supplement, not from prose — aligned from the annotated CDS translations of FS577 (KC517488) against the T36 clone actually used by Harper (AY170468).", { densetop: true });
  // protein strips
  T.h(s, "p65 · 2 CHANGES", M, 2.88, 2.5, { color: C.GHOST });
  G.proteinStrip(s, M + 1.0, 3.12, 5.6, 548, [
    { pos: 227, label: "G227S" }, { pos: 496, label: "R496H" }], { color: C.TAN2 });
  T.h(s, "p61 · 9 CHANGES", M, 3.6, 2.5, { color: C.GHOST });
  G.proteinStrip(s, M + 1.0, 3.98, 5.6, 543, [
    { pos: 169, label: "S169N" }, { pos: 179, label: "I179T", above: true },
    { pos: 224, label: "T224A" },
    { pos: 289, label: "M289T" }, { pos: 324, label: "D324G", color: C.RUST_DK, above: true },
    { pos: 382, label: "E382D", color: C.RUST_DK }, { pos: 391, label: "S391G", above: true },
    { pos: 455, label: "I455V" }, { pos: 458, label: "D458G", color: C.RUST_DK, above: true }],
    { color: C.TAN2 });
  T.body(s, "Dark ticks: the charged cluster (D324G, E382D, D458G) — plausible as a subset on " +
    "electrostatics, falsified as a sufficient design. All eleven move together.",
    M, 4.62, 6.6, { size: 9, h: 0.55, color: C.FAINT });
  // right table
  T.vline(s, 7.15, 2.85, 3.5);
  T.h(s, "THE TABLE · FS577 → T36", 7.45, 2.9, 3.5, { color: C.TERRA });
  const rows = [
    { cells: [{ text: "p65", mono: true }, "G227S · R496H", { text: "hydrophobicity + charge shift", size: 8.5 }], h: 0.42 },
    { cells: [{ text: "p61", mono: true }, "S169N · I179T · T224A · M289T", { text: "surface/structural context", size: 8.5 }], h: 0.42 },
    { cells: [{ text: "p61", mono: true }, "S391G · I455V", { text: "surface + interior/interface", size: 8.5 }], h: 0.42 },
    { cells: [{ text: "p61", mono: true }, "D324G · E382D · D458G", { text: "the charged cluster", size: 8.5, color: C.RUST_DK }], h: 0.42 },
  ];
  T.table(s, 7.45, 3.2, 5.35, [{ label: "GENE", w: 0.72 }, { label: "SUBSTITUTIONS", w: 2.9 },
    { label: "BIOCHEM CLASS", w: 1.73 }], rows, { rowLineColor: C.LINE2, size: 9 });
  T.bullets(s, [
    { lead: "Segregation.", text: "these sites are moderately variable across all genomes but segregate perfectly by transmission phenotype — co-evolution with the trait, not general fitness" },
    { lead: "Numbering caveat.", text: "vs clone EU937521 the same target is 7 changes, not 11 — the anchor is the clone that gets assayed" },
    { lead: "Prior discrepancies.", text: "Harper 2013's 9+3 count differed; another reason to re-derive, never transcribe" },
  ], 7.45, 5.35, 5.35, { size: 9, gap: 5, h: 1.3 });
  T.takeaway(s, "THE CONSTRUCT SPEC IS A TABLE, NOT A PARAGRAPH — AND IT CAN BE REGENERATED FROM GENBANK IN MINUTES");
  T.footer(s, tag, "MUTAGENESIS_TARGETS_VERIFIED.TXT · STAGE 0 CONSERVATION RANKING");
  s.addNotes("The eleven. Strips show where they sit on each protein; the charged cluster marked. Numbering anchors to the clone actually assayed — AY170468 for Trial 1.");
}
function s23(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "THE / THIRD FACTOR", "p33: a real effect without an explanation.",
    "The other live gene. A viroporin with a verified transmission effect — and no measured mechanism. That combination is exactly what Approach B is for.", { densetop: true });
  const y0 = 2.95;
  T.h(s, "WHAT IT IS", M, y0, 3.6, { color: C.TERRA });
  T.bullets(s, [
    { text: "A Class I viroporin: inward K⁺/Na⁺ currents under voltage clamp in Xenopus oocytes; remodels membranes" },
    { text: "Only the third viroporin described in a plant virus (Aknadibossian et al. 2025, full text)" },
  ], M, y0 + 0.3, 3.6, { size: 9.5, gap: 7, h: 1.6 });
  T.vline(s, M + 3.85, y0 - 0.05, 3.35);
  T.h(s, "WHAT IT DOES TO TRANSMISSION", M + 4.2, y0, 3.9, { color: C.TERRA });
  T.bullets(s, [
    { text: "T68-p33 into T36: 1.5% → 17.8% (16/90; Fisher p = 0.0012, OR 14.1 — verified, full text)" },
    { text: "Accounts for ~94% of the chimera-series gain; CPm adds ~1 point on top" },
  ], M + 4.2, y0 + 0.3, 3.75, { size: 9.5, gap: 7, h: 1.6 });
  T.vline(s, M + 8.3, y0 - 0.05, 3.35);
  T.h(s, "WHAT NOBODY MEASURED", M + 8.65, y0, 4.1, { color: C.AMBER });
  T.bullets(s, [
    { text: "Source-plant titer in any p33 swap — the accumulation confound is open" },
    { text: "The reciprocal: T36-p33 into a high-transmitter — causality untested" },
    { text: "Pleiotropy risk: p33 also runs plasmodesmata movement, host range (sour orange TMD), superinfection exclusion, CmMLP2 immunity" },
  ], M + 8.65, y0 + 0.3, 4.05, { size: 9.2, gap: 6, h: 2.2, markerColor: C.AMBER });
  T.takeaway(s, "A TOOL, NOT YET A TARGET — p33 JOINS THE PANEL AS APPROACH B, WITH TITER NORMALIZATION WRITTEN IN");
  T.footer(s, tag, "SHILTS 2020 (FULL TEXT) · AKNADIBOSSIAN 2025 (FULL TEXT)");
  s.addNotes("p33: verified effect (16.3 pp, p=0.001), verified viroporin biophysics, unmeasured titer confound. Its multifunctionality is why it isn't the lead.");
}
function s24(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "K174R / THE DEAD RESIDUE", "An abstract named a residue. Alignment buried it.",
    "The most instructive failure of the project — a single-residue story that survived a published abstract and died under ten minutes of sequence work.", { densetop: true });
  const cols = [{ label: "THE CLAIM", w: 5.6 }, { label: "WHAT RE-DERIVATION SHOWED", w: 6.6 }];
  const rows = [
    { h: 0.72, cells: [
      [{ text: "Virology 2026 (abstract): a triple-gene complement raised T36 from ~0.6% to ~50%; " +
        "'only p33 differs … a single amino acid change (K174R)'", options: {} }],
      [{ text: "The swap pair — T36 clone and T68-1 — both encode K174 at that position. " +
        "A K↔R change that moved nothing cannot explain an effect. The residue arithmetic was wrong.",
        options: { color: C.TXT } }]] },
    { h: 0.6, cells: [
      [{ text: "FS577 (24.1%) and T68-1 (44.2%) carry R174 — 'the high-transmission residue'", options: {} }],
      [{ text: "So does T30 — at 1.57%. Same residue, fifteen-fold apart. R174 is neither sufficient nor explanatory.",
        options: { color: C.TXT } }]] },
    { h: 0.6, cells: [
      [{ text: "K174R as the construct target for a single-residue edit", options: {} }],
      [{ text: "Census of 125 full-length p33 sequences: R174 96.8%, K174 3.2% (4 isolates, none of them measured high transmitters).",
        options: { color: C.TXT } }]] },
  ];
  T.table(s, M, 2.9, CW, cols, rows, { rowLineColor: C.LINE2, size: 9.5 });
  T.body(s, [{ text: "What survives:  ", options: { italic: true, color: C.TXT } },
    { text: "the gene-level result (~50% in a triple substitution) and the 2026 paper's own conclusion — " +
      "'coordinated function of P33, P61 and P65'. The full text remains paywalled; every use of it in " +
      "this deck is tier-3 flagged.", options: {} }], M, 5.35, 11.6, { size: 10, h: 0.75, lsm: 1.1 });
  T.takeaway(s, "LESSON FOR THE TEAM: A RESIDUE CLAIM FROM AN ABSTRACT IS A RUMOR UNTIL THE ALIGNMENT AGREES");
  T.footer(s, tag, "PEER REVIEW 6/6 · CENSUS: 130 GENOMES · SHILTS 2026: ABSTRACT ONLY");
  s.addNotes("K174R: dead as a residue story, alive as a lesson. The 6/6 unanimous peer-review catch, confirmed by the census. Gene-level p33 effect is unaffected.");
}
function s25(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "COMPLEMENTATION / THE FIELD RISK", "The knockout works alone. Groves are not alone.",
    "The largest known hole in the product story: co-infecting genotypes rescue each other. Measurable, designable-around — but only if stated honestly now.", { densetop: true });
  T.numStat(s, M, 3.0, 3.5, "0.5%", "T36 · SINGLE-GENOTYPE INFECTION",
    "Transmission from a tree carrying only greenhouse T36.", { nsize: 40 });
  T.vline(s, M + 4.0, 2.9, 1.9);
  T.numStat(s, M + 4.4, 3.0, 3.5, "35.7%", "T36 · FROM MIXED INFECTIONS",
    "Same clone, co-infected with other genotypes: ~70-fold rescue. Harper et al. 2018.", { nsize: 40, ncolor: C.TERRA });
  T.vline(s, M + 8.45, 2.9, 1.9);
  G.card_min(s, M + 8.85, 2.9, 3.95, 2.0);
  T.h(s, "WHAT IT MEANS FOR DESIGN", M + 9.05, 3.05, 3.5, { color: C.TERRA });
  T.bullets(s, [
    { text: "Trial trees carry one genotype, verified by sequencing — no exceptions" },
    { text: "Field claims are conditional until mixed-infection behavior is measured" },
  ], M + 9.05, 3.35, 3.55, { size: 9.3, gap: 6, h: 1.3 });
  T.bullets(s, [
    { lead: "The biology is the adversary.", text: "a silenced construct planted beside a wild strain can ride it in trans — biocontainment is a population property, not just a sequence property" },
    { lead: "The countermeasure is managerial.", text: "clean-stock programs and block deployment — the same discipline citrus already runs for other pathogens" },
  ], M, 5.25, 8.4, { size: 10, gap: 6, h: 1.1 });
  T.takeaway(s, "SINGLE-GENOTYPE IS AN ASSAY RULE ON DAY ONE AND A REGULATORY CLAIM SHAPE ON LAUNCH DAY");
  T.footer(s, tag, "HARPER ET AL. 2018 · ARCH VIROL 163:3373");
  s.addNotes("Complementation: 0.5% alone, 35.7% mixed. Trial design rule now; deployment constraint later. State it or a reviewer will.");
}
function s26(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "THE / EXISTENCE PROOF", "The split phenotype is real. In the family, on the record.",
    "A crinivirus minor-coat mutant that moves systemically and is invisible to its vector: the exact phenotype this trial is engineered to copy.", { densetop: true });
  const cols = [{ label: "VIRUS", w: 1.9 }, { label: "OBSERVATION", w: 5.4 }, { label: "WHAT IT PROVES", w: 4.9 }];
  const rows = [
    { h: 0.66, cells: [[{ text: "LIYV", mono: true, color: C.TERRA }, { text: " · whitefly", size: 8.5, color: C.FAINT }],
      "CPm frameshift (p1-5b, truncated 453→211 aa): whitefly transmission 0% — virion assembly and systemic movement fully intact (Stewart 2010)",
      "Transmission can be deleted at the minor coat without touching the plant phase"] },
    { h: 0.6, cells: [[{ text: "LIYV×LCV", mono: true, color: C.TERRA }, { text: " chimeras", size: 8.5, color: C.FAINT }],
      "CPm with 60% foreign sequence still transmits; at 41%, transmission lost",
      "The interface tolerates mutation breadth — it is plastic but has edges"] },
    { h: 0.56, cells: [[{ text: "GLRaV-3", mono: true, color: C.TERRA }, { text: " · mealybug", size: 8.5, color: C.FAINT }],
      "Retained in the foregut via CPm + HSP70h + p55 — same retention logic, no mutation data yet",
      "The tail-retention architecture generalizes across Closteroviridae"] },
  ];
  T.table(s, M, 2.9, CW, cols, rows, { rowLineColor: C.LINE2, size: 9.3 });
  T.body(s, [{ text: "The honest caveat:  ", options: { italic: true, color: C.TXT } },
    { text: "LIYV's knockout is a frameshift — a sledgehammer, not a residue edit. No published CPm point " +
      "mutation yet abolishes transmission while sparing assembly. That gap is Approach C's reason to exist.",
      options: {} }], M, 5.2, 11.6, { size: 10, h: 0.7, lsm: 1.1 });
  T.takeaway(s, "MOVES IN PLANT · DEAD IN VECTOR · EXISTS IN NATURE — CTV IS THE CASE WHERE IT BECOMES A DESIGN RULE");
  T.footer(s, tag, "STEWART 2010 JVI 84:12165 · GLRAV-3 LITERATURE · WU 2015 POSITIVE SELECTION AT CPM CODON 9");
  s.addNotes("Existence proof across the family: LIYV frameshift (assembly fine, vector dead), chimera boundary, GLRaV-3 same architecture. Caveat: nobody has done it with a point mutant — that's Approach C.");
}
module.exports = [s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25, s26];
