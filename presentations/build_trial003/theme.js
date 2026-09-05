// theme.js — Silvec editorial design system (reverse-engineered from the
// insert-stability assessment deck / trial002). 13.333 x 7.5 in (LAYOUT_WIDE).
const pptxgen = require("pptxgenjs");

const C = {
  INK: "1A1812",        // near-black (headlines on light, dark slide bg)
  PAPER: "EFE8D6",      // cream content bg
  CARDL: "F4EDE0",      // lighter cream card
  TAN: "E7D3BF",        // tan card fill
  TAN2: "E8D5B8",       // tan variant
  TERRA: "B8512A",      // terracotta accent
  OLIVE: "4F5A2C",      // olive (positive / in-hand)
  AMBER: "E89C42",      // amber highlight
  RUST_DK: "8A4F0E",    // dark rust
  TXT: "1A1812",        // strong body text on cream
  MUTE: "5A564D",       // body muted
  FAINT: "7A766A",      // secondary
  GHOST: "9E9A8C",      // ghost labels
  LINE: "C9C3B3",       // hairline on cream
  LINE2: "D9D4BE",      // fainter hairline
  DARKCARD: "403D35",   // card on dark bg
  DARKLINE: "403D35",   // hairline on dark
  ONDARK: "EFE8D6",     // text on dark
  ONDARK_MUTE: "B3AE9F" // muted text on dark
};

const F = { SERIF: "Newsreader", MONO: "JetBrains Mono" };

const M = 0.56;                 // outer margin
const PW = 13.333, PH = 7.5;    // page
const CW = PW - 2 * M;          // content width 12.22

// ---------- chrome ----------
function bg(slide, dark) {
  slide.background = { color: dark ? C.INK : C.PAPER };
}
function header(slide, tag, dark) {
  const tc = dark ? C.ONDARK_MUTE : C.FAINT;
  slide.addText("SILVEC · BIOLOGICS", { x: M, y: 0.39, w: 5.0, h: 0.2,
    fontFace: F.MONO, fontSize: 6.5, color: tc, charSpacing: 2, isTextBox: true, margin: 0 });
  slide.addText(tag, { x: 7.78, y: 0.39, w: 5.0, h: 0.2, align: "right",
    fontFace: F.MONO, fontSize: 6.5, color: tc, charSpacing: 2, isTextBox: true, margin: 0 });
}
// Content-slide title block: mono kicker, serif headline (array of runs or string), serif lede.
// Returns y where content may begin.
function titleBlock(slide, kicker, headline, lede, o = {}) {
  const ky = o.densetop ? 1.05 : 1.25;
  slide.addText(kicker, { x: M, y: ky, w: 10.5, h: 0.22, fontFace: F.MONO, fontSize: 7,
    color: C.TERRA, charSpacing: 2.4, isTextBox: true, margin: 0 });
  const hy = ky + 0.34;
  const runs = Array.isArray(headline) ? headline : [{ text: headline,
    options: { fontFace: F.SERIF, fontSize: 27, color: C.TXT } }];
  slide.addText(runs.map(r => ({ text: r.text, options: Object.assign({
    fontFace: F.SERIF, fontSize: o.hsize || 27, color: C.TXT }, r.options || {}) })),
    { x: M, y: hy, w: o.hw || 11.62, h: o.hh || 0.62, isTextBox: true, margin: 0, valign: "top" });
  let cy = hy + (o.hh || 0.62) + 0.06;
  if (lede) {
    slide.addText(lede, { x: M, y: cy, w: o.lw || 11.0, h: o.lh || 0.58, fontFace: F.SERIF,
      fontSize: 12, color: C.MUTE, isTextBox: true, margin: 0, valign: "top" });
    cy += (o.lh || 0.58) + 0.10;
  }
  return cy + (o.pad === undefined ? 0.18 : o.pad);
}
function rule(slide, y, dark, x = M, w = CW, color) {
  slide.addShape("line", { x, y, w, h: 0, line: { color: color || (dark ? C.DARKLINE : C.LINE), width: 0.75 } });
}
function footer(slide, left, right, dark) {
  const tc = dark ? C.ONDARK_MUTE : C.FAINT;
  if (left) slide.addText(left, { x: M, y: 6.93, w: 8.4, h: 0.2, fontFace: F.MONO,
    fontSize: 6.5, color: tc, charSpacing: 1.6, isTextBox: true, margin: 0 });
  if (right) slide.addText(right, { x: 6.78, y: 6.93, w: 6.0, h: 0.2, align: "right",
    fontFace: F.MONO, fontSize: 6.5, color: tc, charSpacing: 1.6, isTextBox: true, margin: 0 });
}
// takeaway strip: hairline + caps mono line (the house "all-caps takeaway")
function takeaway(slide, text, o = {}) {
  const y = o.y === undefined ? 6.62 : o.y;
  rule(slide, y, o.dark, o.x === undefined ? M : o.x, o.w === undefined ? CW : o.w);
  slide.addText(text, { x: o.x === undefined ? M : o.x, y: y + 0.10, w: o.w === undefined ? CW : o.w,
    h: 0.2, fontFace: F.MONO, fontSize: 7.5, color: o.color || C.TERRA, charSpacing: 1.8,
    isTextBox: true, margin: 0, align: o.align || "left" });
}

// ---------- text blocks ----------
function h(slide, text, x, y, w, o = {}) {           // section label, mono caps
  slide.addText(text, { x, y, w, h: 0.22, fontFace: F.MONO, fontSize: o.size || 7,
    color: o.color || C.GHOST, charSpacing: 2.2, isTextBox: true, margin: 0, align: o.align });
}
function subhead(slide, text, x, y, w, o = {}) {     // serif subhead
  slide.addText(text, { x, y, w, h: o.h || 0.6, fontFace: F.SERIF, fontSize: o.size || 17,
    color: o.color || C.TXT, italic: o.italic !== false, isTextBox: true, margin: 0, valign: "top" });
}
function body(slide, runs, x, y, w, o = {}) {
  const rr = (Array.isArray(runs) ? runs : [{ text: runs, options: {} }]).map(r => ({
    text: r.text, options: Object.assign({ fontFace: F.SERIF, fontSize: o.size || 10.5,
      color: o.color || C.MUTE }, r.options || {})
  }));
  slide.addText(rr, { x, y, w, h: o.h || 0.8, isTextBox: true, margin: 0, valign: "top",
    align: o.align || "left", lineSpacingMultiple: o.lsm || 1.04 });
}
// bullets: items [{lead:'X.', text:'...'}] or [{runs:[...]}]; serif 10.5 with middle-dot marker
function bullets(slide, items, x, y, w, o = {}) {
  const para = [];
  items.forEach((it, i) => {
    const mk = o.marker === undefined ? "·  " : o.marker;
    para.push({ text: mk, options: { fontFace: F.SERIF, fontSize: o.size || 10.5,
      color: o.markerColor || C.TERRA, breakLine: false } });
    if (it.lead) para.push({ text: it.lead + " ", options: { fontFace: F.SERIF, bold: false,
      italic: true, fontSize: o.size || 10.5, color: o.color || C.TXT } });
    (it.runs || [{ text: it.text, options: {} }]).forEach(r =>
      para.push({ text: r.text, options: Object.assign({ fontFace: F.SERIF,
        fontSize: o.size || 10.5, color: o.color || C.MUTE }, r.options || {}) }));
    if (i < items.length - 1) para[para.length - 1].options.breakLine = true,
      para[para.length - 1].options.paraSpaceAfter = o.gap === undefined ? 6 : o.gap;
  });
  slide.addText(para, { x, y, w, h: o.h || 2.0, isTextBox: true, margin: 0, valign: "top",
    lineSpacingMultiple: o.lsm || 1.04 });
}

// ---------- components ----------
function vline(slide, x, y, hgt, o = {}) {
  slide.addShape("line", { x, y, w: 0, h: hgt, line: { color: o.color || C.LINE, width: o.width || 0.75 } });
}
function numStat(slide, x, y, w, num, label, detail, o = {}) {
  slide.addText(num, { x, y, w, h: o.nh || 0.62, fontFace: F.SERIF, fontSize: o.nsize || 38,
    color: o.ncolor || C.TXT, isTextBox: true, margin: 0, valign: "top" });
  slide.addText(label, { x, y: y + (o.nh || 0.62) + 0.05, w, h: 0.2, fontFace: F.MONO,
    fontSize: 7, color: o.lcolor || C.TERRA, charSpacing: 1.6, isTextBox: true, margin: 0 });
  if (detail) body(slide, detail, x, y + (o.nh || 0.62) + 0.29, w - 0.18,
    { size: o.dsize || 9.5, h: o.dh || 0.75 });
}
function card(slide, x, y, w, hgt, o = {}) {
  slide.addShape("rect", { x, y, w, h: hgt, fill: { color: o.fill || C.CARDL },
    line: o.noline ? { type: "none" } : { color: o.lcolor || C.LINE2, width: 0.75 } });
}
// tag chip: FATAL / GO / IN HAND etc.
function chip(slide, x, y, text, color, o = {}) {
  const w = o.w || (0.24 + text.length * 0.062);
  slide.addShape("rect", { x, y, w, h: 0.19, fill: { color }, line: { type: "none" } });
  slide.addText(text, { x, y: y - 0.005, w, h: 0.19, align: "center", fontFace: F.MONO,
    fontSize: 6.5, color: "FFFFFF", charSpacing: 1.2, isTextBox: true, margin: 0 });
}
// generic rows table: header row + hairlines; cells = arrays of runs
function table(slide, x, y, w, cols, rows, o = {}) {
  const xs = []; let acc = x;
  cols.forEach(c => { xs.push(acc); acc += c.w; });
  const hh = o.headH || 0.26;
  // header
  cols.forEach((c, i) => h(slide, c.label, xs[i], y, c.w - 0.15, { color: o.headColor || C.GHOST, size: o.headSize || 6.5 }));
  rule(slide, y + hh, o.dark, x, w);
  let cy = y + hh + 0.07;
  rows.forEach(r => {
    const rh = r.h || o.rowH || 0.5;
    r.cells.forEach((cell, i) => {
      const arr = Array.isArray(cell) ? cell :
        (cell && typeof cell === "object" ? [cell] : [{ text: String(cell), options: {} }]);
      const rr = arr.map(q => { if (typeof q === "string") q = { text: q }; return { text: q.text, options: Object.assign({
        fontFace: q.mono ? F.MONO : F.SERIF, fontSize: q.size || o.size || 10,
        color: q.color || (i === 0 ? C.TXT : C.MUTE), italic: q.italic }, q.options || {}) }; });
      slide.addText(rr, { x: xs[i], y: cy + 0.02, w: cols[i].w - 0.18, h: rh, isTextBox: true,
        margin: 0, valign: "top", lineSpacingMultiple: 1.02 });
    });
    cy += rh;
    if (!o.norules) rule(slide, cy - 0.04, o.dark, x, w, o.rowLineColor);
  });
  return cy;
}
// divider slide (part separators). num="01/02/04" dark ink bg; num="03" terra bg.
function divider(slide, num, partLabel, titleRuns, scope, tag, dark = true) {
  const terra = (num === "03");
  bg(slide, true);
  if (terra) slide.background = { color: C.TERRA };
  header(slide, tag, true);
  slide.addText(num[0], { x: M, y: 2.6, w: 2.6, h: 2.4, fontFace: F.SERIF, fontSize: 150,
    color: terra ? C.ONDARK : C.TERRA, isTextBox: true, margin: 0, valign: "middle" });
  slide.addText(num[1], { x: M + 1.15, y: 3.42, w: 2.6, h: 2.4, fontFace: F.SERIF, fontSize: 150,
    color: terra ? C.ONDARK : C.TERRA, isTextBox: true, margin: 0, valign: "middle" });
  const tx = 5.9;
  const runs = titleRuns.map(r => ({ text: r.text, options: Object.assign({
    fontFace: F.SERIF, fontSize: 44, color: terra ? C.ONDARK : C.ONDARK, italic: true }, r.options || {}) }));
  slide.addText(runs, { x: tx, y: 2.62, w: 6.9, h: 1.1, isTextBox: true, margin: 0, valign: "middle" });
  slide.addText(partLabel, { x: tx, y: 3.95, w: 6.0, h: 0.22, fontFace: F.MONO, fontSize: 7.5,
    color: terra ? C.ONDARK : C.TERRA, charSpacing: 2.4, isTextBox: true, margin: 0 });
  body(slide, scope, tx, 4.35, 6.1, { size: 11, color: terra ? "F5E4D8" : C.ONDARK_MUTE, h: 1.4, lsm: 1.15 });
}

module.exports = { C, F, M, PW, PH, CW, bg, header, titleBlock, rule, footer, takeaway,
  h, subhead, body, bullets, vline, numStat, card, chip, table, divider };
