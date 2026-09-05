// slides_d.js — PART 05 THE PLAN (divider + assay/prereg/stages/levels/working/next/questions/expectations/corrections/sources/road)  s42–54
const T = require("./theme");
const G = require("./fig");
const { C, F, M, CW } = T;

function s42(pres, tag) {
  const s = pres.addSlide();
  T.divider(s, "05", "PART FIVE OF FIVE",
    [{ text: "The plan." }],
    "What is already finished in silico. The protocol, the pre-registered pass line, the stages with " +
    "their gates — and the next round of AI work that runs in parallel while the greenhouse ticks.", tag);
  s.addNotes("Part five: the plan. Everything before a clone is already done; the asks are logistics.");
}
function s43(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "STAGE 0 / IN SILICO", "Already done: everything that doesn't grow.",
    "Stage 0 closed inside the working sessions. What remains before construct ordering is logistics, not analysis.", { densetop: true });
  const y0 = 2.95, cw = 5.9;
  G.card_min(s, M, y0, cw, 3.35);
  T.h(s, "DONE · IN THE REPO", M + 0.25, y0 + 0.18, cw - 0.5, { color: C.OLIVE });
  T.bullets(s, [
    { text: "Substitution table re-derived from GenBank CDS (11 changes, AY170468 numbering)", marker: "✓  ", markerColor: C.OLIVE },
    { text: "Conservation & ranking annotation per residue", marker: "✓  ", markerColor: C.OLIVE },
    { text: "Pre-registered H0/H1 + decision bands", marker: "✓  ", markerColor: C.OLIVE },
    { text: "Power analysis & sample sizes (binomial, verified)", marker: "✓  ", markerColor: C.OLIVE },
    { text: "Risk register with counters", marker: "✓  ", markerColor: C.OLIVE },
    { text: "Corrections log — five errors fixed, superseded decks marked", marker: "✓  ", markerColor: C.OLIVE },
  ], M + 0.25, y0 + 0.5, cw - 0.5, { size: 9.4, gap: 5.5, h: 2.8 });
  const x2 = M + cw + 0.42;
  G.card_min(s, x2, y0, cw, 3.35, C.TAN);
  T.h(s, "BEFORE ORDERING · LOGISTICS ONLY", x2 + 0.25, y0 + 0.18, cw - 0.5, { color: C.RUST_DK });
  T.bullets(s, [
    { text: "Physical access: transmissible backbone clone (FS577 or T68)", marker: "→  " },
    { text: "Aphid colony on hand + its historical baseline", marker: "→  " },
    { text: "Containment route for construct work", marker: "→  " },
    { text: "Citrus host for validation phase (Hamlin? Duncan? grapefruit?)", marker: "→  " },
    { text: "Capacity: ~550–700 aphid transfers across 3–4 weeks", marker: "→  " },
    { text: "One scientist, a few hours, to confirm the five above", marker: "→  " },
  ], x2 + 0.25, y0 + 0.5, cw - 0.5, { size: 9.4, gap: 5.5, h: 2.8 });
  T.takeaway(s, "THE ANALYSIS IS COMPLETE · THE REMAINING QUESTIONS COULD BE ANSWERED IN ONE AFTERNOON");
  T.footer(s, tag, "SILVEC BIOLOGICS · CONFIDENTIAL");
  s.addNotes("Stage 0 is done: six documented deliverables. Six logistics asks remain — none is an experiment.");
}
function s44(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "THE / ASSAY", "The protocol already exists. We change nothing.",
    "Harper's published pipeline, run with clone identity masked and titer on every source plant. Comparable by construction to every number in the record.", { densetop: true });
  const y0 = 2.95;
  T.h(s, "CONDITIONS · HARPER 2016 PROTOCOL", M, y0, 4.6, { color: C.GHOST });
  T.bullets(s, [
    { text: "C. macrophylla seedlings, single-genotype infections" },
    { text: "24 h acquisition on titred source flush" },
    { text: "10 T. citricida per plant · 24 h inoculation access" },
    { text: "ELISA readout at 8 weeks · clone identity masked from scorers" },
    { text: "RT-qPCR + ELISA titer on every source plant" },
  ], M, y0 + 0.3, 4.6, { size: 9.6, gap: 6, h: 2.2 });
  T.vline(s, 5.5, y0 - 0.05, 3.4);
  T.h(s, "ARMS & NUMBERS", 5.85, y0, 3.5, { color: C.GHOST });
  const cols = [{ label: "ARM", w: 2.35 }, { label: "n", w: 1.05 }];
  const rows = [
    { h: 0.34, cells: ["Primary construct (A3)", { text: "250–300", mono: true }] },
    { h: 0.34, cells: ["FS577 control", { text: "100–150", mono: true }] },
    { h: 0.34, cells: ["Singles A1 / A2 (optional)", { text: "200 each", mono: true }] },
    { h: 0.34, cells: [[{ text: "Total Phase 1", options: { italic: true, color: C.TXT } }],
      { text: "≈550–700", mono: true, color: C.TERRA }] },
  ];
  T.table(s, 5.85, y0 + 0.3, 3.4, cols, rows, { rowLineColor: C.LINE2, size: 9.3, headSize: 6 });
  T.vline(s, 9.55, y0 - 0.05, 3.4);
  T.h(s, "COST & CLOCK", 9.9, y0, 2.9, { color: C.GHOST });
  T.numStat(s, 9.9, y0 + 0.28, 2.85, "~$8–13K", "TOTAL PHASE 1",
    "≈$2–3K aphid trials + $5–10K construct synthesis & validation", { nsize: 26, nh: 0.42, dh: 0.6 });
  T.numStat(s, 9.9, y0 + 1.55, 2.85, "3–4 wk", "TRANSMISSION RUN",
    "After infection is confirmed; 8-week ELISA is the long pole", { nsize: 26, nh: 0.42, dh: 0.6 });
  T.takeaway(s, "SMALL ENOUGH TO FIT NEXT TO EXISTING GREENHOUSE WORK · LARGE ENOUGH THAT 0/200 READS AS ≤1.5%");
  T.footer(s, tag, "SILVEC BIOLOGICS · CONFIDENTIAL");
  s.addNotes("Assay card: Harper's protocol untouched, masked reading, titer everywhere. ~550-700 aphids, roughly $8-13K, three to four weeks of aphid work.");
}
function s45(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "PRE-REGISTERED / CRITERIA", "The pass line is signed before the clones exist.",
    "Nothing about the verdict gets renegotiated after the data lands. That is what makes a win unarguable — and a loss useful.", { densetop: true });
  const cols = [{ label: "", w: 1.7 }, { label: "TRANSMISSION", w: 2.2 }, { label: "MEANING", w: 3.1 },
    { label: "NEXT MOVE", w: 5.2 }];
  const rows = [
    { h: 0.5, cells: [{ text: "H0 · NULL", mono: true, size: 8, color: C.GHOST },
      { text: "≥ 15%", mono: true, color: C.TXT }, "p61+p65 alone insufficient",
      "Pre-planned: add the p33 gene arm (Approach B), or run the reciprocal — no ad-hoc rescue"] },
    { h: 0.5, cells: [{ text: "? · UNCLEAR", mono: true, size: 8, color: C.AMBER },
      { text: "5 – 15%", mono: true, color: C.TXT }, "Partial effect",
      "Phase 2: block/single-swap panel to build the residue map; binding assay splits docking vs downstream"] },
    { h: 0.56, cells: [{ text: "H1 · PASS", mono: true, size: 8, color: C.OLIVE },
      { text: "≤ 5%", mono: true, bold: true, color: C.OLIVE }, "Biocontainment achieved at parental titer",
      "Proceed to citrus validation; begin Approach C (p27 residue map); draft the IP position"] },
  ];
  T.table(s, M, 2.9, CW, cols, rows, { rowLineColor: C.LINE2, size: 9.3 });
  T.rule(s, 5.05);
  T.body(s, [{ text: "The null statement, written in advance:  ", options: { italic: true, color: C.TXT } },
    { text: "“If transmission remains ≥15% at parental titer, we conclude the eleven-residue set is " +
      "not sufficient for silencing on this backbone, and transmission gating depends on factors outside " +
      "p61+p65.”", options: { italic: true } }], M, 5.2, 11.6, { size: 10.5, h: 0.75, lsm: 1.12 });
  T.bullets(s, [
    { text: "Construct spec, hypotheses and criteria frozen in the repo before cloning" },
    { text: "Predictions and analysis plan registered (OSF) so the panel — and reviewers — can audit them" },
  ], M, 6.0, 11.6, { size: 9, gap: 3, h: 0.55 });
  T.takeaway(s, "NO HARKING · NO MOVING GOALPOSTS · A 1% EFFECT MASKED FROM HOPE", { y: 6.7 });
  T.footer(s, tag, "STAGE_0_IN_SILICO_PLANNING.MD · PRE-REGISTERED");
  s.addNotes("Pre-registration slide: H0/H1, pass/unclear/fail bands with their next moves, and the null statement written before any clone exists.");
}
function s46(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "IF / GO", "A staged plan, gated at the first assay.",
    "Nothing living is touched before the alignment gate passes; nothing expensive is committed before systemic infection at parental titer.", { densetop: true });
  const stages = [
    { tag: "STAGE 0 · 2 WEEKS", head: "Align and design.",
      txt: "Re-derive the eleven substitutions from the GenBank CDS translations — never a supplement — and freeze the four constructs in writing. Register H0/H1, criteria, and the null statement.",
      gate: "PROCEED IF: ALIGNMENT CONFIRMED · BACKBONE CLONE IN HAND" },
    { tag: "STAGE 1 · 4–8 WEEKS", head: "Build and verify.",
      txt: "Assemble A–A3 on the FS577 backbone; full-length sequence every clone; agroinoculate C. macrophylla; confirm systemic infection at parental titer. No aphid work before this passes.",
      gate: "THE ONLY THING GREENHOUSE SPACE BUYS BEFORE THIS IS SEEDLINGS" },
    { tag: "STAGE 2 · ~8 WEEKS", head: "Transmit — blinded.",
      txt: "24 h acquisition on titred flush, 10 T. citricida per plant, ELISA at 8 weeks, clone identity masked. ~250 plants on the primary arm.",
      gate: "FAIL IF TITER DROPS OR TRANSMISSION STAYS ABOVE 5%" },
    { tag: "STAGE 3 · DAYS (OPTIONAL)", head: "Add the binding screen.",
      txt: "Fluorescent-virion cibarium competitive binding, Killiny protocol. If it tracks transmission, every later iteration takes days, not weeks.",
      gate: "CHEAP TO FIND OUT · HIGH LEVERAGE IF IT WORKS" },
  ];
  stages.forEach((st, i) => {
    const cy = 2.9 + i * 0.95;
    s.addText(st.tag, { x: M, y: cy, w: 2.2, h: 0.4, fontFace: F.MONO, fontSize: 7, color: C.TERRA,
      charSpacing: 1.2, isTextBox: true, margin: 0 });
    s.addText(st.head, { x: 2.9, y: cy, w: 2.9, h: 0.5, fontFace: F.SERIF, fontSize: 14, italic: true,
      color: C.TXT, isTextBox: true, margin: 0 });
    T.body(s, st.txt, 5.85, cy + 0.01, 4.35, { size: 8.6, h: 0.85, lsm: 1.04 });
    s.addText(st.gate, { x: 10.35, y: cy + 0.03, w: 2.45, h: 0.8, fontFace: F.MONO, fontSize: 6,
      color: C.GHOST, charSpacing: 0.9, isTextBox: true, margin: 0, valign: "top" });
    T.rule(s, cy + 0.88, false, M, CW, C.LINE2);
  });
  T.takeaway(s, "JUDGE ON RANKING AND PRE-REGISTERED CRITERIA — NOT A POST-HOC STORY", { y: 6.62 });
  T.footer(s, tag, "SILVEC BIOLOGICS · CONFIDENTIAL");
  s.addNotes("Four stages with gates. Stage 0 costs two weeks and no greenhouse; Stage 2's fail criteria are written down now.");
}
function s47(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "HOW / FAR THIS GOES", "Five levels. The first is a season away.",
    "Each level needs the one below it working. Levels 01 and 02 are the trial; the rest is what the trial unlocks.", { densetop: true });
  const cols = [{ label: "LEVEL", w: 0.75 }, { label: "WHAT IT DOES", w: 3.3 }, { label: "HOW", w: 5.0 }, { label: "NEEDS · CLOCK", w: 3.15 }];
  const rows = [
    { h: 0.5, cells: [{ text: "01", mono: true, color: C.TERRA }, [{ text: "Confirm the knockout", options: { italic: true, color: C.TXT } }],
      "T36 p61+p65 into a transmissible backbone; titer and transmission scored blinded",
      { text: "THE FOUR CLONES · 0–3 MONTHS", mono: true, size: 8 }] },
    { h: 0.5, cells: [{ text: "02", mono: true, color: C.TERRA }, [{ text: "Map the necessary residues", options: { italic: true, color: C.TXT } }],
      "Block then single swaps say which of the eleven carry the effect",
      { text: "LEVEL 01 + THE PANEL · 3–6 MONTHS", mono: true, size: 8 }] },
    { h: 0.5, cells: [{ text: "03", mono: true, color: C.TERRA }, [{ text: "Engineer a clean CPm point mutant", options: { italic: true, color: C.TXT } }],
      "The literal capsid mutation — the original question — aimed by a now-known interface",
      { text: "LEVEL 02 + BINDING ASSAY · 6–12 MONTHS", mono: true, size: 8 }] },
    { h: 0.5, cells: [{ text: "04", mono: true, color: C.TERRA }, [{ text: "Transfer across closteroviruses", options: { italic: true, color: C.TXT } }],
      "The same tail logic in BYV-type and crinivirus systems — generality, not just CTV",
      { text: "LEVEL 03 + A SECOND SYSTEM · 9–18 MONTHS", mono: true, size: 8 }] },
    { h: 0.5, cells: [{ text: "05", mono: true, color: C.TERRA }, [{ text: "Codify biocontainment by design", options: { italic: true, color: C.TXT } }],
      "A documented design rule — virions that can't ride vectors — beside CYVaV's capsid-free architecture",
      { text: "ALL ABOVE + SCEPTICISM · 18 MONTHS +", mono: true, size: 8 }] },
  ];
  T.table(s, M, 2.85, CW, cols, rows, { rowLineColor: C.LINE2, size: 9.4 });
  T.takeaway(s, "COMMIT TO LEVELS 01–02 NOW · 03–05 ARE THE REASON TO START, NOT A PROMISE");
  T.footer(s, tag, "SILVEC BIOLOGICS · CONFIDENTIAL");
  s.addNotes("The five-level ladder. Fund 01–02; 03–05 are the ambition, explicitly not promised.");
}
function s48(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "THE / WORKING MODEL", "How this runs, week by week.",
    "The credibility of the whole exercise rests on two choices: fail criteria registered before anything is cloned, and clone identity masked from everyone reading an ELISA.", { densetop: true });
  const cols = [["WEEKS 0–2", "Align and design.", "Re-derive the substitutions from the accessions, freeze the construct list, register criteria. Your effort: one scientist, a few hours."],
    ["WEEKS 2–10", "Clone and verify.", "Synthesis and assembly of the four clones, full-length sequencing, agroinoculation. Aphids only after systemic infection at parental titer."],
    ["WEEKS 10–18", "Transmit — blinded.", "The published Harper protocol, run with clone identity sealed. Expectation cannot steer a 1% readout."],
    ["WEEKS 18–20", "Score and decide.", "Outcomes against the registered criteria, not against hope. Deliverable: go on the residue map — or a clean, explained null."]];
  const cw = 2.92;
  cols.forEach((cl, i) => {
    const cx = M + i * (cw + 0.18);
    s.addText(cl[0], { x: cx, y: 3.0, w: cw, h: 0.22, fontFace: F.MONO, fontSize: 7.5, color: C.TERRA,
      charSpacing: 1.6, isTextBox: true, margin: 0 });
    s.addText(cl[1], { x: cx, y: 3.3, w: cw, h: 0.35, fontFace: F.SERIF, fontSize: 15, italic: true,
      color: C.TXT, isTextBox: true, margin: 0 });
    T.rule(s, 3.78, false, cx, cw - 0.2, C.LINE);
    T.body(s, cl[2], cx, 3.92, cw - 0.15, { size: 9.3, h: 1.8, lsm: 1.1 });
  });
  T.takeaway(s, "EVERYTHING IS DELIVERED AS CONSTRUCTS, SEQUENCES AND DATA SILVEC KEEPS — STOP AFTER STAGE 0 AND THE ALIGNMENT IS STILL YOURS", { y: 6.3 });
  T.footer(s, tag, "BLINDING + PRE-REGISTRATION ARE WHAT MAKE A POSITIVE RESULT REPORTABLE");
  s.addNotes("Week-by-week. The two credibility choices: registered fail criteria, masked reading.");
}
function s49(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "WHAT / AI RUNS NEXT", "The next round of sessions, priced in days.",
    "While the greenhouse clock runs, the model work continues. Six items, each with the model type to use and the verification to demand.", { densetop: true });
  const items = [
    ["Retrieve Shilts 2026 full text", "the tier-3 flag (~50%, 'coordinated function') either hardens or dissolves; panel re-scores it", "LITERATURE AGENT → TIER 2"],
    ["Adversarial panel, round 3", "the final protocol gets attacked before it gets clones — same roster, fresh eyes", "CONSORTIUM → CONSENSUS LOG"],
    ["Phenotype-segregation census", "tag the 11 residues across the 130-genome alignment by transmission phenotype — data already in hand", "SCRIPT + MODEL REVIEW"],
    ["Structure-guided residue ranking", "AlphaFold-grade models of p27/p61/p65 surface for the block panel — labeled prediction-only until the binding assay rules", "OPEN-MODEL PIPELINE → AF FLAG"],
    ["Receptor literature sweep", "what is known of the T. citricida cibarium receptor and closterovirus tail genetics — maps the interface C must hit", "DEEP-RESEARCH PASS"],
    ["The living knowledge base", "the repo is public and the Q&A base is structured JSON — one step from a team chatbot where every answer carries its source and tier", "RAG OVER THE REPO"],
  ];
  const cw = 3.93, chh = 1.52;
  items.forEach((it, i) => {
    const cx = M + (i % 3) * (cw + 0.21), cy = 2.95 + Math.floor(i / 3) * (chh + 0.18);
    G.card_min(s, cx, cy, cw, chh);
    s.addText(it[0], { x: cx + 0.15, y: cy + 0.12, w: cw - 0.3, h: 0.3, fontFace: F.SERIF,
      fontSize: 11.5, italic: true, color: C.TXT, isTextBox: true, margin: 0 });
    T.body(s, it[1], cx + 0.15, cy + 0.44, cw - 0.3, { size: 8.6, h: 0.75, lsm: 1.04 });
    T.h(s, it[2], cx + 0.15, cy + chh - 0.26, cw - 0.3, { size: 5.5, color: C.OLIVE });
  });
  T.takeaway(s, "EACH ITEM IS DAYS OF MODEL TIME — AND EACH ONE CANCELS A WET-LAB DETOUR");
  T.footer(s, tag, "SILVEC BIOLOGICS · CONFIDENTIAL");
  s.addNotes("The next-AI menu: Shilts 2026 retrieval, round-3 panel, segregation census, structure ranking (flagged prediction-grade), receptor sweep, and the repo-to-chatbot step the team is already sizing up.");
}
function s50(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "OPEN / QUESTIONS", "What we need, and what nobody knows yet.",
    "The left column is answerable this week from the team's own records. The right is what the trial exists to find out.", { densetop: true });
  const y0 = 3.0, cw = 5.9;
  G.card_min(s, M, y0, cw, 3.3, C.TAN);
  T.h(s, "ANSWERABLE FROM YOUR RECORDS", M + 0.25, y0 + 0.18, cw - 0.5, { color: C.RUST_DK });
  T.bullets(s, [
    { text: "Is a transmissible infectious clone (FS577 or T68) physically accessible?" },
    { text: "Which T. citricida colony is on hand — and its historical baseline?" },
    { text: "What containment does CTV construct work already run under?" },
    { text: "Who in-house has closterovirus cloning or CTV assay experience?" },
    { text: "What does a 250-plant, 8-week C. macrophylla cohort actually cost?" },
    { text: "Which citrus host anchors the validation phase?" },
  ], M + 0.25, y0 + 0.5, cw - 0.5, { size: 9.5, gap: 6.5, h: 2.7, marker: "→  ", markerColor: C.RUST_DK });
  const x2 = M + cw + 0.42;
  G.card_min(s, x2, y0, cw, 3.3);
  T.h(s, "ANSWERABLE ONLY BY THE TRIAL", x2 + 0.25, y0 + 0.18, cw - 0.5, { color: C.TERRA });
  T.bullets(s, [
    { text: "Do the eleven residues act additively or epistatically?" },
    { text: "Do p65's two substitutions suffice without p61's nine?" },
    { text: "Does the knockout fail at docking, or downstream of it?" },
    { text: "Does silencing reproduce on a second backbone (T68)?" },
    { text: "Can a single p27 substitution replicate the whole effect?" },
    { text: "Does titer-normalized p33 move transmission independently?" },
  ], x2 + 0.25, y0 + 0.5, cw - 0.5, { size: 9.5, gap: 6.5, h: 2.7 });
  T.takeaway(s, "THE LEFT COLUMN IS THIS WEEK'S AGENDA · THE RIGHT COLUMN IS THE REASON TO RUN THE TRIAL");
  T.footer(s, tag, "SILVEC BIOLOGICS · CONFIDENTIAL");
  s.addNotes("Open questions in two columns — an afternoon of records work on the left, the trial's scientific yield on the right.");
}
function s51(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "SETTING / EXPECTATIONS", "What this will not do.",
    "Worth stating plainly at the outset. A first engineered-virus trial fails more often from overclaiming than from underperforming.", { densetop: true });
  const y0 = 2.95, cw = 5.9;
  T.h(s, "IT WILL NOT", M, y0 + 0.05, 3, { color: C.TERRA });
  T.bullets(s, [
    { lead: "Cure tristeza in the field.", text: "Co-infecting transmissible strains complement the knockout — 35.7% is the demonstration" },
    { lead: "Authorize release.", text: "This is the design of a laboratory experiment; nothing here proposes environmental deployment" },
    { lead: "Map the interface on its own.", text: "The knockout is on/off; the residue map needs the staged panel" },
    { lead: "Transfer untested.", text: "Family rules do not cross; CYVaV has no capsid to edit" },
  ], M, y0 + 0.35, cw, { size: 9.6, gap: 7, h: 2.7 });
  const x2 = M + cw + 0.42;
  T.h(s, "WHAT YOU KEEP EITHER WAY", x2, y0 + 0.05, 4, { color: C.OLIVE });
  T.bullets(s, [
    { text: "An exact p61/p65 substitution map of the T36↔FS577 pair, with accessions, in writing" },
    { text: "Four sequence-verified constructs on one backbone — reusable for reversion, complementation and binding studies" },
    { text: "A blinded, pre-registered aphid assay Silvec can rerun for any future variant or product claim" },
    { text: "A falsification log, a verification stack, and a review consortium worth more than any single answer" },
  ], x2, y0 + 0.35, cw, { size: 9.6, gap: 7, h: 2.7, marker: "→  ", markerColor: C.OLIVE });
  T.takeaway(s, "BASIS AND LIMITS ON THE NEXT SLIDE — EVERY NUMBER IN THIS DECK CARRIES ITS TIER");
  T.footer(s, tag, "SILVEC BIOLOGICS · CONFIDENTIAL");
  s.addNotes("Limits left, durable assets right. Naming limits early is what makes the positive claims credible.");
}
function s52(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "THE / CORRECTIONS LOG", "Five errors found and fixed. Kept on purpose.",
    "Recorded so they are not reintroduced — and so the team can see exactly what the verification stack is for.", { densetop: true });
  const rows = [
    ["p33 identity first reported as 44.7% from an ungapped comparison across an indel",
      "Proper gapped alignment: 98.7% (295/302)"],
    ["Residue 174 first called off field isolate U16304, whose p33 reading frame differs",
      "Residue calls anchored to infectious clone EU937521"],
    ["The 2026 Virology paper cited 67× as 'Harper et al. 2026'",
      "Authors are Shilts, Nehela & Killiny"],
    ["The foregut-binding paper cited 24× as 'Prado et al. 2016'",
      "Authors are Killiny, Harper, Alfaress, El-Mohtar & Dawson"],
    ["p61/p65 written up as a fallback if p33 fails",
      "The 2026 abstract presents them as required partners — the lead construct is built on them"],
  ];
  const y0 = 2.95;
  rows.forEach((r, i) => {
    const cy = y0 + i * 0.62;
    T.body(s, [{ text: "✗  ", options: { color: C.TERRA } }, { text: r[0], options: {} }],
      M, cy, 5.7, { size: 9.2, h: 0.6 });
    T.body(s, [{ text: "✓  ", options: { color: C.OLIVE } }, { text: r[1], options: { color: C.TXT } }],
      6.6, cy, 6.1, { size: 9.2, h: 0.6 });
    T.rule(s, cy + 0.56, false, M, CW, C.LINE2);
  });
  T.body(s, [{ text: "Also marked SUPERSEDED: ", options: { italic: true, color: C.TXT } },
    { text: "four earlier CPm-target decks remain in the project. Do not circulate — the CPm premise " +
      "is falsified; the K174R-centered arc deck carries an abstract-only claim now re-scored.",
      options: {} }], M, 6.15, 11.6, { size: 9.5, h: 0.5 });
  T.takeaway(s, "THE LOG IS THE EVIDENCE THE PROCESS WORKS — EACH LINE IS A DETOUR THAT NEVER REACHED THE BENCH", { y: 6.78 });
  T.footer(s, tag, "ARC DECK SLIDE 16 · PANEL ROUNDS 1–2");
  s.addNotes("The corrections log as a trust slide. Five real errors, five fixes, one superseded-materials warning.");
}
function s53(pres, tag) {
  const s = pres.addSlide(); T.bg(s); T.header(s, tag);
  T.titleBlock(s, "APPENDIX / SOURCES & TIERS", "Every claim, mapped to how firm it is.",
    "Full citations with the verification tier each one actually holds today.", { densetop: true });
  const L = [
    ["Harper et al. 2016 — p61/p65 swap series", "Arch Virol 161:3555–3559 · doi:10.1007/s00705-016-3070-x", "T2 · FULL TEXT"],
    ["Shilts et al. 2020 — isolate baselines + p33 swap", "Viruses 12:1131 · doi:10.3390/v12101131", "T2 · FULL TEXT"],
    ["Killiny et al. 2016 — cibarium binding & competition", "AEM 82:6294–6302 · doi:10.1128/AEM.01914-16", "T2 · FULL TEXT"],
    ["Aknadibossian et al. 2025 — p33 viroporin", "PLOS Pathog 21:e1013730 · doi:10.1371/journal.ppat.1013730", "T2 · FULL TEXT"],
    ["Harper et al. 2018 — complementation 35.7%", "Arch Virol 163:3373–3376 · doi:10.1007/s00705-018-4009-1", "T2 · FULL TEXT"],
    ["Shilts, Nehela & Killiny 2026 — triple complement ~50%", "Virology 621:110928 · PMID 42061270", "T3 · ABSTRACT"],
  ];
  const R = [
    ["Satyanarayana et al. 2004 — bipolar virion assembly", "PNAS 101:799–804 · doi:10.1073/pnas.0307747100", "T4 · CITED"],
    ["Harper 2013 — greenhouse drift / genotypic groups", "Front Microbiol 4:93 · doi:10.3389/fmicb.2013.00093", "T4 · CITED"],
    ["Stewart et al. 2010 — LIYV CPm frameshift", "J Virol 84:12165–12173 · doi:10.1128/JVI.01192-10", "T4 · CITED"],
    ["Wu et al. 2015 — CPm positive selection (codon 9)", "Arch Virol 160:787–794", "T4 · CITED"],
    ["Accessions", "FS577 KC517488 · T36 clone AY170468 · EU937521 · T36 field U16304 · T68-1 JQ965169 · T30 AF260651", "T1 · RE-DERIVED"],
    ["Our analyses", "130-genome census · alignments · Fisher/CI recomputation", "T1 · OURS"],
  ];
  const col = (list, x) => list.forEach((r, i) => {
    const cy = 2.95 + i * 0.62;
    T.body(s, r[0], x, cy, 5.85, { size: 9.5, color: C.TXT, h: 0.22 });
    T.body(s, r[1], x, cy + 0.21, 4.05, { size: 7.5, h: 0.38, color: C.FAINT, lsm: 1.0 });
    T.h(s, r[2], x + 4.25, cy + 0.21, 1.6, { size: 6, color: r[2][1] === "3" ? C.RUST_DK : C.OLIVE });
    T.rule(s, cy + 0.52, false, x, 5.85, C.LINE2);
  });
  col(L, M); col(R, 6.7);
  T.takeaway(s, "TIER 3 IS A DEBT ITEM — RETRIEVE VIROLOGY 621:110928 BEFORE CONSTRUCTS ARE ORDERED", { y: 6.58 });
  T.footer(s, tag, "SILVEC BIOLOGICS · CONFIDENTIAL");
  s.addNotes("Sources with tiers. The one tier-3 debt: Shilts 2026 full text.");
}
function s54(pres, tag) {
  const s = pres.addSlide(); T.bg(s, true); T.header(s, tag, true);
  s.addText("THE / ROAD", { x: M, y: 1.05, w: 8, h: 0.22, fontFace: F.MONO, fontSize: 7,
    color: C.TERRA, charSpacing: 2.4, isTextBox: true, margin: 0 });
  s.addText([{ text: "Twenty weeks to a ", options: { color: C.ONDARK } },
    { text: "verdict.", options: { color: C.TERRA } }],
    { x: M, y: 1.4, w: 11.6, h: 0.7, fontFace: F.SERIF, fontSize: 34, italic: true, isTextBox: true, margin: 0 });
  T.body(s, "Nothing expensive is committed before the gate: sequence-verified clones infecting " +
    "C. macrophylla at parental titer. The first stage is worth doing whatever is decided about modelling.",
    M, 2.25, 10.5, { size: 11.5, color: C.ONDARK_MUTE, h: 0.55, lsm: 1.12 });
  G.gantt(s, M, 3.1, CW, [
    { label: "Confirm inputs · this week", start: 0, end: 1, color: C.TERRA, tag: "BACKBONE · COLONY · CONTAINMENT" },
    { label: "Clone & verify", start: 1, end: 9, color: C.FAINT, tag: "FOUR CLONES · FULL-LENGTH SEQ · SYSTEMIC TITER" },
    { label: "Gate · infection at parental titer", start: 9, end: 10, color: C.AMBER, tag: "OR STOP HERE, CHEAPLY", gate: 9 },
    { label: "Transmit — blinded", start: 10, end: 18, color: C.TERRA, tag: "HARPER PROTOCOL · TITER ON EVERY SOURCE" },
    { label: "Score & decide", start: 18, end: 20, color: C.OLIVE, tag: "REGISTERED CRITERIA · GO ON THE MAP" },
  ], { maxW: 20 });
  T.body(s, [{ text: "Start with the alignment  →", options: { color: C.AMBER, size: 14, italic: true } }],
    M, 5.7, 6, { size: 14, h: 0.4 });
  T.body(s, "Two weeks of sequence work, then a decision point the whole team can audit. The residue " +
    "map, the second backbone, and the point-mutant capsid edit wait behind it.",
    M, 6.15, 9.5, { size: 10, color: C.ONDARK_MUTE, h: 0.55 });
  T.rule(s, 6.85, true, M, CW, C.DARKLINE);
  T.footer(s, "SILVEC BIOLOGICS · TRANSMISSION-DEAD CTV HYPOTHESIS · 2026 · CONFIDENTIAL", tag, true);
  s.addNotes("The road: confirm the three inputs this week, gate at parental-titer infection, verdict at week 20. The ask: one scientist, a few hours.");
}
module.exports = [s42, s43, s44, s45, s46, s47, s48, s49, s50, s51, s52, s53, s54];
