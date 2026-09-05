# Transmission-dead CTV as the AI proof-of-value topic

**A strategy assessment prepared for the Silvec team — hypothesis trial 003.**

Companion to the working decks (`Silvec_transmission-dead_CTV_hypothesis_trial003.pptx`
and its eight-slide executive summary). Everything stated here is traceable to the
repository: `docs/12_Capsid_Mutation_Answer_First_Trial_CTV.md`,
`docs/HARPER_2016_ANALYSIS.txt`, `docs/PEER_REVIEW_SYNTHESIS.txt`,
`docs/STAGE_0_IN_SILICO_PLANNING.md`, `docs/MUTAGENESIS_TARGETS_VERIFIED.txt`, and the
Q&A knowledge base. Two claims run through this document, deliberately decoupled: a
**science claim** (a capsidated virus can be made unreadable to its vector while
remaining fully functional in the plant) and a **method claim** (a structured,
multi-model AI workflow compresses the research season into working sessions, provided
its outputs are verified against primary sources). Either can survive without the other;
both are argued here.

---

# Part One — The verdict

## 1.1 The answer

**Yes — and it is not a coat-protein mutation.** The question as posed ("what
mutation(s) to a capsid…") presumes the coat is the interface. In Citrus tristeza virus
the particle is bipolar: the major coat protein p25 wraps ~95% of the genome, while the
minor coat protein p27 (CPm) caps ~630 nt at the 5′ end, placed and restricted there by
two chaperones, p65 (HSP70h) and p61 (Satyanarayana et al. 2004). Aphid retention at the
*Toxoptera citricida* cibarium is competed by free p27, p61 and p65 — but not by free
p25 (Killiny et al. 2016). The vector interface is the tail complex, not the coat.

The first-trial construct is therefore the **T36-clone allele pair of p61 and p65,
transplanted together** into a transmissible FS577 backbone — nine substitutions in
p61 (S169N, I179T, T224A, M289T, D324G, E382D, S391G, I455V, D458G) and two in p65
(G227S, R496H), AY170468 numbering, re-derived from the GenBank CDS translations
(KC517488 × AY170468). Gain-of-function is published and verified: either gene alone
restores only 1.9–4.0% transmission to the T36 clone, while the pair restores 17.9%
against a 24.1% wild type (Harper et al. 2016) — a roughly 12.6-point synergy over the
additive expectation.

**The experiment that settles it is the direction nobody has run.** Harper moved FS577
alleles into T36 (gain). The product question needs the inverse: do T36 alleles
*silence* a transmissible backbone (loss)? Two clones answer it cheaply; four resolve
which gene does what. If the pair does not silence, the hypothesis dies in eight weeks
at the cost of a cloning run.

**One caveat carried openly.** The third gene, p33, has a verified transmission effect
(16.3 points, p = 0.001) but no measured mechanism — its titer was never taken. It
joins the panel as a parallel arm (Approach B) with titer normalization written in,
not as the lead.

## 1.2 What the method produced already

The workflow, in eight phases, each with a gate: a falsifiable question (does CPm
explain the variance?); a 130-genome census from GenBank with BioPython alignments;
falsification of CPm (240/240 identical across a 16-fold transmission gap); a
literature survey; a candidate residue (p33 K174R); a six-model adversarial review in
two rounds; retrieval of the primary sources; and re-derivation of the construct table
from accessions rather than prose.

Five wrong answers died on the record, each before it could cost laboratory work:

| Claim | Source of the claim | What killed it |
|---|---|---|
| CPm sequence variation determines transmission | starting hypothesis; DeepSeek v1–v2 | 240/240 identity across the gap; functional null p = 1.00 |
| p33 K174R is the transmission switch | early brief, from the 2026 abstract | both swap partners encode K174; R174 appears in 24% and 1.6% transmitters alike; 96.8% of 125 genomes carry R174 |
| Three charged residues suffice (D324G, E382D, D458G) | DeepSeek v3 | Harper: p61 alone 4.0%, pair 17.9% — synergy needs the set |
| Test individual genes first | DeepSeek v3 phase plan | Harper singles sit at baseline; "concerted action" is not optional |
| The effect is titer, not vector interaction | DeepSeek mechanism prediction | Harper Figure 2: RT-qPCR/ELISA identical, Tukey HSD p > 0.05 |

The review consortium (GPT-6, Grok, Gemini, DeepSeek, Qwen, Claude — two rounds,
independent then adversarial) recomputed statistics to unanimity rather than voting:
the K174R impossibility, the missing reciprocals, the 14% power of a planned 5-point
comparison, the undocumented experimental units. It also visibly corrected itself: its
"p61/p65 unfounded" verdict rested on an unread paper; once Harper 2016 was fetched,
the supposed 5.2-point residual gap proved spurious — a misread of the wild-type
parent's 24.1%. That self-correction is the strongest argument for the workflow:
verdicts are provisional until the primary source is on the table, and the workflow
ends with the source.

## 1.3 The platform lesson

Stated as the team experienced it. The mutation-design questions at the center of this
project — legitimate biocontainment research aimed at *less* plant-to-plant virus
spread — were repeatedly refused by hosted frontier-model interfaces mid-project. The
work carried through on open-weight models: DeepSeek (iterative design), Kimi
(citation discipline), and Grok, which produced the winning design reframing (fix
FS577 toward T36 in p65+p61 — scored 8.5/10 against the adjudicating data). Frontier
models remained valuable in review roles. The operating rules that came out of it:

- **Portfolio, not vendor.** Never let one provider's filters gate a research
  question; keep three-plus models in rotation.
- **Route, don't fight.** Design work to open-weight models; critique and adversarial
  review to whichever panel is sharpest.
- **Diversity is insurance.** Different labs, different blind spots; the panel's
  disagreements were information, not noise.

## 1.4 Why this problem suits an AI-first workflow

Because its critical question was *archival*, not experimental. The decisive evidence
already existed: two GenBank accessions, one unread 2016 paper, one binding assay. The
expensive path — building constructs to learn what the literature already holds — is
exactly what this workflow avoids. The transferable ask-patterns: falsifiable
questions with denominators; requests for the *inverse* experiment; forced primary
sources ("fetch it, quote it, give the figure number"); adversarial rebuttal rounds;
and re-derivation from records rather than transcription. A good prompt, it turns out,
is a null hypothesis with a denominator.

---

# Part Two — The evidence

## 2.1 The coat is falsified — two independent ways

**Sequence.** FS577 (24.1% transmission) and T36 (1.5%) are 240/240 identical in CPm.
A sequence that does not vary cannot explain a phenotype that does. **Function.** In
Shilts 2020's own series, adding CPm+5′UTR to the p33 swap changed nothing: 17/90 vs
16/90, Fisher p = 1.00. What is dead is CPm as the *explanation*. What survives is CPm
as the *ligand* — a necessary part of the machine and still a knockout target
(Approach C), just not the tuning knob.

## 2.2 The adjudicating experiment

Harper et al. 2016 (Arch Virol 161:3555–3559), verified directly from the PDF during
this project:

| Construct | Rate | n | Positives |
|---|---|---|---|
| T36 infectious clone | 0.6% | 172 | 1 |
| T36 + FS577 p65 | 1.9% | 258 | 5 |
| T36 + FS577 p61 | 4.0% | 273 | 11 |
| T36 + FS577 p65+p61 | 17.9% | 196 | 35 |
| T36 + FS577 p6–p18 block | 20.6% | 253 | 52 |
| FS577 wild type | 24.1% | 394 | 95 |

Three facts in that table carry the design. First, **synergy**: 1.9 + 4.0 ≠ 17.9 —
the pair is a co-evolved unit ("aphid transmission requires the concerted action of
these two genes… compatible sequences in these two genes"), so constructs move the
pair, never a gene and never a charged subset. Second, **titer is excluded**: no
significant difference in accumulation across any hybrid (Tukey HSD p > 0.05) — a
30-fold transmission change at equal titer means the gate is acquisition, not
abundance. Third, **movement survived**: every hybrid infected C. macrophylla
systemically. The separability premise — transmission off, plant function on — is
already demonstrated in the gain direction.

## 2.3 The docking site, and the existence proofs in the family

Killiny et al. 2016 (AEM 82:6294): labeled CTV virions bind the *T. citricida*
cibarium; binding is competed by free p27, p61 and p65, not p25; retention is
protease-insensitive and chitinase-sensitive — a carbohydrate interface in the
foregut. The same assay (fluorescent virions on dissected cibaria) is the trial's
days-scale screen and its tie-breaker: a silenced construct that never docks is an
interface defect; one that docks but fails is downstream — different biology,
different next construct.

The split phenotype is not hypothetical. In the crinivirus LIYV, a minor-coat
frameshift mutant moved systemically in plants at normal titer and was never
whitefly-transmitted (Stewart et al. 2010); CPm chimeras tolerate 60% foreign sequence
but lose transmission at 41% — plastic, with edges. GLRaV-3 retains in the mealybug
foregut via the same CPm/HSP70h/p55 complex. The family architecture generalizes; CTV
is the case with published transmission genetics deep enough to aim a design rule.

## 2.4 p33 — the third factor — and the K174R autopsy

p33 is a Class I viroporin (inward K⁺/Na⁺ currents in *Xenopus* oocytes; membrane
remodeling; third viroporin described in a plant virus — Aknadibossian et al. 2025,
full text verified). It is also multifunctional: plasmodesmata movement, host range
(sour orange TMD), superinfection exclusion, CmMLP2 host-immunity interaction. Its
transmission effect is real and large (T68 p33 into T36: 1.5% → 17.8%, 16/90, Fisher
p = 0.0012, OR 14.1; ~94% of the chimera-series gain) and its mechanism is unattributed
— no titer was measured in any p33 swap assay. It is therefore priced as a parallel
arm, with titer-matched inoculum and the missing reciprocal swap registered in
advance.

K174R deserves its own line as an instructive failure. A 2026 abstract (Shilts, Nehela
& Killiny, Virology 621:110928 — still abstract-only for us; tier 3) named it the
sole differing residue behind a ~50% triple-complement result. Ten minutes of
alignment buried the claim: both swap partners encode K174, so no residue was
exchanged; R174 sits in high and low transmitters alike (FS577 24.1%, T30 1.57%); and
across 125 full-length p33 sequences K174 occurs in 4 (3.2%), in no measured high
transmitter. What survives is the gene-level result and the abstract's own conclusion
("coordinated function of P33, P61 and P65") — which is, in effect, an external vote
for this trial's construct logic. A residue named by abstract arithmetic is a rumor
until the alignment agrees.

## 2.5 Complementation — the field risk, stated now

Greenhouse T36 transmits at ~0.5% from single-genotype infections and up to 35.7%
from mixed infections (Harper et al. 2018): co-infecting genotypes rescue each other.
Consequences: assay trees are single-genotype, purity-verified by sequencing; and the
eventual field claim is conditional on mixed-infection management (clean stock, block
deployment). The largest hole in the product story is biological, not engineering —
so it is on the record from day one.

---

# Part Three — The conditions

## 3.1 Prerequisites: five, four in hand

| Condition | Status |
|---|---|
| Infectious clones exist (947R/AY170468; FS577/KC517488) | In hand |
| One published assay, documented end-to-end (24 h acquisition, 10 aphids/plant, ELISA at 8 weeks) | In hand |
| Defined host and vector (C. macrophylla · T. citricida) | In hand |
| Titer control (RT-qPCR + ELISA on source flush) | In hand |
| **Transmissible backbone clone physically accessible (FS577 or T68), with containment status** | **To confirm — this week** |

## 3.2 Amplifiers — none required, all cheap

A residue map (blocks then singles converts one knockout into a family-wide design
rule); a second backbone (T68 — universal mechanism vs isolate quirk); the cibarium
binding assay (days instead of eight weeks); and the CYVaV platform parallel —
Silvec's capsid-free vector is vector-incompatible by architecture, so every CTV
result lands beside it as the same biocontainment logic in a second system.

## 3.3 Disqualifiers

**Fatal, detectable at the first readout:** the swap doesn't silence the backbone —
two clones, eight weeks, done. **Weakens, known now:** mixed-infection rescue (assay
single infections; deployment claim narrows); and titer/movement loss (an assembly
defect is not a vector defect — RT-qPCR discriminates at the source plant). If the
fatal case holds, the fallback is the p27 map (Approach C), not abandonment.

## 3.4 Statistics discipline

Every rate carries its n; every claim its interval. T36's "1.5%" is one plant in 66
(CI 0.04–8.16%) — say "low single digits" when the distinction matters. A 5-point
effect is invisible at n=90 per arm (14% power; 80% power needs ~934) — so the design
targets large effects only. The containment claim is a zero over a large n: 0/200
transmissions bounds the rate ≤1.5%. Seven uncorrected comparisons carry a 30%
false-positive risk; the panel caps primaries at 3–4 with Bonferroni correction.
Experimental units (plant/run/batch) are documented before any CI is invoked.

## 3.5 The decision

Four questions, three outcomes, registered in advance:

| Question | If yes | If no |
|---|---|---|
| Q1 · Do T36 p61+p65 silence the transmissible backbone? | Hypothesis stands — build the map | Backbone-dependent — stop or redesign |
| Q2 · Are titer and systemic movement preserved? | Premise holds: the phenotypes are separable | Assembly defect, not a vector defect |
| Q3 · Do single-gene swaps silence partially? | Graded gate — the map has headroom | All-or-nothing: the pair is the minimal edit |
| Q4 · Does cibarium binding track transmission? | A days-scale screen for every variant | Failure is downstream of docking |

**Q1 yes + Q2 yes → strong case → GO** to the residue map and second backbone.
**Q1 yes + Q2 borderline → proof of principle → GO**, with the platform claim narrowed
to what titer supports. **Q1 no → change target**: the p27 map via the binding assay,
or a T36-mechanism study with p33 in play.

---

# Part Four — The plan

## 4.1 Stage 0 is complete in silico

Done and in the repo: the re-derived substitution table; per-residue conservation and
ranking; pre-registered H0/H1 with decision bands; power analysis; the risk register
with counters; the corrections log. Before ordering constructs, only logistics remain:
backbone-clone access, aphid colony and baseline, containment route, the citrus host
for validation, and capacity for ~550–700 aphid transfers — one scientist, one
afternoon.

## 4.2 The assay, unchanged

Harper's published protocol: C. macrophylla seedlings, single-genotype infections;
24 h acquisition on titred source flush; 10 T. citricida per plant; 24 h inoculation
access; ELISA at 8 weeks; clone identity masked from scorers; RT-qPCR + ELISA titer on
every source plant. Arms: primary construct A3 at 250–300 aphids; FS577 control at
100–150; singles A1/A2 optionally at 200 each. Total ≈550–700 aphids, ~3–4 weeks of
transmission work after infection is confirmed, roughly $2–3K in aphid trials plus
$5–10K for construct synthesis and validation.

## 4.3 Pre-registered criteria

H0: the construct transmits at ≥15% (insufficient). H1: ≤5% at parental titer
(biocontainment). The 5–15% band is phase 2 by registration, not by improvisation.
The null statement is written: *"If transmission remains ≥15% at parental titer, we
conclude the eleven-residue set is not sufficient for silencing on this backbone, and
transmission gating depends on factors outside p61+p65."* Construct spec, criteria and
analysis plan are frozen before cloning — that is what makes a win unarguable and a
loss useful.

## 4.4 Stages and gates

**Stage 0 (2 weeks)** — align and design; proceed only if the alignment confirms and
the backbone clone is in hand. **Stage 1 (4–8 weeks)** — build and sequence-verify the
four clones; systemic infection at parental titer or the project stops here, cheaply.
**Stage 2 (~8 weeks)** — transmit, blinded; fail if titer drops or transmission stays
above 5%. **Stage 3 (days, optional)** — the cibarium binding screen; if it tracks
transmission, every future iteration takes days.

## 4.5 How far this goes

Level 01 confirm the knockout (0–3 months) → 02 map the necessary residues (3–6) →
03 engineer the clean CPm point mutant — the literal original question (6–12) → 04
transfer across closteroviruses (9–18) → 05 codify biocontainment by design beside
CYVaV (18+). Commit to 01–02 now; 03–05 are the reason to start, not a promise.

## 4.6 What AI runs next, in parallel

Retrieve the Shilts 2026 full text (clears the deck's one tier-3 flag). Adversarial
panel round 3 on the frozen protocol. Segregation census of the eleven residues across
the 130-genome alignment (data already in hand). AlphaFold-grade structural ranking of
p27/p61/p65 surface residues — labeled prediction-only until the binding assay rules.
A receptor literature sweep for the cibarium docking partner. And the living knowledge
base: the repository is public and the Q&A base is structured JSON — one step from a
team chatbot whose every answer carries its source and verification tier. Each item is
days of model time; each cancels a wet-lab detour.

---

# Part Five — Basis, limits, and the corrections log

**Basis.** Transmission counts from Harper et al. 2016 and Shilts et al. 2020 (verified
from full text); complementation from Harper et al. 2018; binding from Killiny et al.
2016; viroporin biophysics from Aknadibossian et al. 2025; tail assembly from
Satyanarayana et al. 2004; the 2026 Virology result is abstract-only (tier 3) and is
used accordingly. Sequences: FS577 KC517488; T36 clones AY170468 and EU937521; T36
field U16304; T68-1 JQ965169; T30 AF260651. Our own analyses (130-genome census,
alignments, Fisher/Clopper-Pearson recomputation) are tier 1: reproducible, ours, and
re-runnable by anyone in the repo.

**Limits.** This designs laboratory experiments only; nothing here proposes
environmental release. The knockout cannot by itself cure tristeza in the field
(complementation), map the interface (needs the staged panel), or transfer across
families untested.

**Corrections applied to this document set (kept on purpose):** p33 identity first
reported as 44.7% from an ungapped comparison → 98.7% (295/302) gapped; residue-174
calls moved from field isolate U16304 to infectious clone EU937521; the 2026 Virology
paper re-authored from "Harper et al." to Shilts, Nehela & Killiny; the AEM binding
paper re-authored from "Prado et al." to Killiny et al.; p61/p65 promoted from
fallback to required partners. Four earlier CPm-target decks in the project are
marked superseded; the arc deck's K174R centerpiece is retained only as a falsified
branch. The log is the evidence the process works.
