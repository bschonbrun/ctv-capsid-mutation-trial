// fig.js — shape-drawn figures (no raster images; license-clean, font-consistent)
const { C, F, M, body } = require("./theme");

// horizontal bar chart. items: [{label, rate (0-1), n, num (pos count), color, note}]
// x..x+w plot area; scaleMax in percent (default 50). Draws axis row with 0/scaleMax ticks.
function hbarTransmission(slide, x, y, w, items, o = {}) {
  const scaleMax = (o.max || 50) / 100;
  const rowH = o.rowH || 0.42, labelW = o.labelW || 3.1, barMaxW = w - labelW - 1.15;
  items.forEach((it, i) => {
    const cy = y + i * rowH;
    slide.addText(it.label, { x, y: cy, w: labelW - 0.1, h: rowH - 0.06, fontFace: F.SERIF,
      fontSize: o.labelSize || 9.5, color: C.TXT, isTextBox: true, margin: 0, valign: "middle" });
    const bw = Math.max(0.03, (it.rate / scaleMax) * barMaxW);
    slide.addShape("rect", { x: x + labelW, y: cy + 0.075, w: bw, h: rowH - 0.27,
      fill: { color: it.color || C.TERRA }, line: { type: "none" } });
    const val = (it.rate * 100).toFixed(it.rate < 0.02 || o.dp1 ? 1 : 1) + "%";
    slide.addText(val + (it.n ? `   ${it.num}/${it.n}` : ""), {
      x: x + labelW + bw + 0.06, y: cy, w: 1.6, h: rowH - 0.06, fontFace: F.MONO,
      fontSize: o.valSize || 7.5, color: C.MUTE, isTextBox: true, margin: 0, valign: "middle" });
  });
  // baseline axis
  const ay = y + items.length * rowH + 0.02;
  slide.addShape("line", { x: x + labelW, y: ay, w: barMaxW, h: 0, line: { color: C.LINE, width: 0.75 } });
  [0, scaleMax / 2, scaleMax].forEach(v => {
    slide.addText(Math.round(v * 100) + "%", { x: x + labelW + (v / scaleMax) * barMaxW - 0.3,
      y: ay + 0.03, w: 0.6, h: 0.16, align: "center", fontFace: F.MONO, fontSize: 6,
      color: C.GHOST, isTextBox: true, margin: 0 });
  });
  return ay + 0.2;
}

// CI dot plot: rows of {label, lo, hi, pt (percent), n, color}; scale 0..maxP
function cidot(slide, x, y, w, items, o = {}) {
  const maxP = o.maxP || 50, rowH = o.rowH || 0.34, labelW = o.labelW || 1.9;
  const px = x + labelW, pw = w - labelW - 0.7;
  items.forEach((it, i) => {
    const cy = y + i * rowH + rowH / 2;
    slide.addText(it.label, { x, y: y + i * rowH, w: labelW - 0.08, h: rowH, fontFace: F.SERIF,
      fontSize: 9, color: C.TXT, isTextBox: true, margin: 0, valign: "middle" });
    if (it.lo !== undefined) {
      const lx = px + (it.lo / maxP) * pw, rx = px + (it.hi / maxP) * pw;
      slide.addShape("line", { x: lx, y: cy, w: rx - lx, h: 0, line: { color: it.color || C.FAINT, width: 2 } });
      [lx, rx].forEach(q => slide.addShape("line", { x: q, y: cy - 0.045, w: 0, h: 0.09,
        line: { color: it.color || C.FAINT, width: 1 } }));
    }
    if (it.pt !== undefined) {
      const dx = px + (it.pt / maxP) * pw;
      slide.addShape("ellipse", { x: dx - 0.05, y: cy - 0.05, w: 0.1, h: 0.1,
        fill: { color: it.color || C.TERRA }, line: { color: "FFFFFF", width: 0.5 } });
    }
    slide.addText(it.tag || "", { x: px + pw + 0.06, y: y + i * rowH, w: 0.75, h: rowH,
      fontFace: F.MONO, fontSize: 6, color: C.GHOST, isTextBox: true, margin: 0, valign: "middle" });
  });
  return y + items.length * rowH + 0.05;
}

// protein strip: horizontal bar of length aa; ticks at residue marks [{pos, label, color, above}]
function proteinStrip(slide, x, y, w, aaLen, marks, o = {}) {
  const H = o.h || 0.34;
  slide.addShape("roundRect", { x, y, w, h: H, rectRadius: 0.05, fill: { color: o.color || C.TAN },
    line: { color: C.LINE, width: 0.75 } });
  slide.addText(`1`, { x: x + 0.04, y: y + H / 2 - 0.06, w: 0.2, h: 0.12, fontFace: F.MONO, fontSize: 6,
    color: C.MUTE, isTextBox: true, margin: 0 });
  slide.addText(`${aaLen} aa`, { x: x + w - 0.58, y: y + H / 2 - 0.06, w: 0.54, h: 0.12, align: "right",
    fontFace: F.MONO, fontSize: 6, color: C.MUTE, isTextBox: true, margin: 0 });
  marks.forEach(mk => {
    const tx = x + ((mk.pos - 1) / (aaLen - 1)) * w;
    const above = mk.above !== undefined ? mk.above : false;
    const ly = above ? y - 0.24 : y + H + 0.10;
    slide.addShape("line", { x: tx, y: above ? y - 0.09 : y - 0.06, w: 0, h: H + 0.15,
      line: { color: mk.color || C.TERRA, width: 1.6 } });
    slide.addText(mk.label, { x: tx - 0.35, y: ly, w: 0.7, h: 0.13,
      align: "center", fontFace: F.MONO, fontSize: 5.5, color: mk.color || C.TERRA,
      isTextBox: true, margin: 0 });
  });
  return y + H + 0.3;
}

// CTV virion schematic: flexuous rod — p25 body (95%) + p27 tail cap, with p65/p61 chaperone dots.
function virion(slide, x, y, w, o = {}) {
  const dark = o.dark;
  const rodC = dark ? C.ONDARK_MUTE : "C9BFA8", tailC = C.TERRA;
  const cy = y + 0.55, H = 0.16;
  const tailW = w * 0.075, bodyW = w - tailW;
  // ribbed body
  slide.addShape("roundRect", { x: x + tailW, y: cy, w: bodyW, h: H, rectRadius: 0.08,
    fill: { color: rodC }, line: { type: "none" } });
  for (let i = 0; i < Math.floor(bodyW / 0.14); i++)
    slide.addShape("line", { x: x + tailW + 0.07 + i * 0.14, y: cy + 0.02, w: 0, h: H - 0.04,
      line: { color: dark ? C.ONDARK_MUTE : "B9AE97", width: 0.9 } });
  // tail segment
  slide.addShape("roundRect", { x, y: cy, w: tailW, h: H, rectRadius: 0.08, fill: { color: tailC },
    line: { type: "none" } });
  // chaperone dots at tail
  [["p65", 0.10], ["p61", 0.34]].forEach(([lbl, f]) => {
    slide.addShape("ellipse", { x: x + tailW * f, y: cy - 0.30, w: 0.17, h: 0.17,
      fill: { color: C.OLIVE }, line: { color: dark ? C.INK : C.PAPER, width: 1 } });
    slide.addText(lbl, { x: x + tailW * f - 0.15, y: cy - 0.52, w: 0.5, h: 0.14, fontFace: F.MONO,
      fontSize: 6.5, color: C.OLIVE, isTextBox: true, margin: 0 });
  });
  // labels
  slide.addText("p27 (CPm) tail  ·  ~630 nt  ·  5′ end", { x: x - 0.02, y: cy + H + 0.07, w: 3.4, h: 0.15,
    fontFace: F.MONO, fontSize: 6.5, color: tailC, isTextBox: true, margin: 0 });
  slide.addText("p25 (CP) body  ·  ~95% of genome", { x: x + tailW + bodyW - 2.9, y: cy + H + 0.07,
    w: 2.95, h: 0.15, align: "right", fontFace: F.MONO, fontSize: 6.5,
    color: dark ? C.ONDARK_MUTE : C.FAINT, isTextBox: true, margin: 0 });
  slide.addText("5′", { x: x - 0.3, y: cy - 0.02, w: 0.25, h: 0.2, fontFace: F.SERIF, fontSize: 12,
    italic: true, color: dark ? C.ONDARK : C.TXT, isTextBox: true, margin: 0 });
  slide.addText("3′", { x: x + w + 0.06, y: cy - 0.02, w: 0.25, h: 0.2, fontFace: F.SERIF, fontSize: 12,
    italic: true, color: dark ? C.ONDARK : C.TXT, isTextBox: true, margin: 0 });
}

// aphid foregut docking schematic
function foregutDock(slide, x, y, w, o = {}) {
  // cibarium pocket
  slide.addShape("arc", { x, y, w: w * 0.62, h: 1.5, line: { color: C.TXT, width: 2 },
    fill: { type: "none" }, angleRange: [200, 340] });
  slide.addText("aphid cibarium (foregut)", { x: x - 0.1, y: y + 1.05, w: 2.6, h: 0.16,
    fontFace: F.MONO, fontSize: 6.5, color: C.FAINT, isTextBox: true, margin: 0 });
  // docking rod
  const rx = x + w * 0.16, ry = y + 0.35;
  slide.addShape("roundRect", { x: rx, y: ry, w: 1.05, h: 0.13, rectRadius: 0.06, rotate: 25,
    fill: { color: C.TERRA }, line: { type: "none" } });
  slide.addText("virion tail\np27 + p65 + p61", { x: rx + 1.05, y: ry - 0.12, w: 1.5, h: 0.4,
    fontFace: F.MONO, fontSize: 6.5, color: C.TERRA, isTextBox: true, margin: 0, valign: "middle" });
}

// simple gantt: phases [{label, start, end (weeks), color, gate}] over totalW across weeks 0..maxW
function gantt(slide, x, y, w, phases, o = {}) {
  const maxW = o.maxW || 20, rowH = o.rowH || 0.42, labelW = o.labelW || 2.15;
  const px = x + labelW, pw = w - labelW - 0.3;
  phase = null;
  phases.forEach((ph, i) => {
    const cy = y + i * rowH;
    slide.addText(ph.label, { x, y: cy, w: labelW - 0.1, h: rowH - 0.08, fontFace: F.SERIF,
      fontSize: 9.5, color: C.TXT, isTextBox: true, margin: 0, valign: "middle" });
    slide.addShape("roundRect", { x: px + (ph.start / maxW) * pw, y: cy + 0.06, w: ((ph.end - ph.start) / maxW) * pw,
      h: rowH - 0.22, rectRadius: 0.04, fill: { color: ph.color }, line: { type: "none" } });
    slide.addText(ph.tag || "", { x: px + (ph.start / maxW) * pw + 0.06, y: cy + 0.055, w: ((ph.end - ph.start) / maxW) * pw - 0.1,
      h: rowH - 0.2, fontFace: F.MONO, fontSize: 6, color: "FFFFFF", isTextBox: true, margin: 0, valign: "middle" });
    if (ph.gate) {
      const gx = px + (ph.gate / maxW) * pw;
      slide.addShape("diamond", { x: gx - 0.075, y: cy + 0.065, w: 0.15, h: 0.15,
        fill: { color: C.INK }, line: { color: "FFFFFF", width: 0.75 } });
    }
  });
  const ay = y + phases.length * rowH + 0.03;
  slide.addShape("line", { x: px, y: ay, w: pw, h: 0, line: { color: C.LINE, width: 0.75 } });
  [0, 5, 10, 15, 20].forEach(wk => {
    if (wk > (o.maxW || 20)) return;
    slide.addText("W" + wk, { x: px + (wk / (o.maxW || 20)) * pw - 0.3, y: ay + 0.03, w: 0.6, h: 0.15,
      align: "center", fontFace: F.MONO, fontSize: 6, color: C.GHOST, isTextBox: true, margin: 0 });
  });
  return ay + 0.2;
}

// numbered step chevrons: items [{num, head, text}]
function steps(slide, x, y, w, items, o = {}) {
  const cw = (w - (items.length - 1) * 0.18) / items.length;
  items.forEach((it, i) => {
    const cx = x + i * (cw + 0.18);
    card_min(slide, cx, y, cw, o.h || 1.7);
    slide.addText(it.num, { x: cx + 0.14, y: y + 0.12, w: 0.8, h: 0.3, fontFace: F.MONO,
      fontSize: 8, color: C.TERRA, charSpacing: 1.5, isTextBox: true, margin: 0 });
    slide.addText(it.head, { x: cx + 0.14, y: y + 0.42, w: cw - 0.28, h: 0.45, fontFace: F.SERIF,
      fontSize: 12.5, italic: true, color: C.TXT, isTextBox: true, margin: 0, valign: "top" });
    body(slide, it.text, cx + 0.14, y + 0.9, cw - 0.28, { size: 8.8, h: (o.h || 1.7) - 1.0 });
  });
}
function card_min(slide, x, y, w, hgt, fill) {
  slide.addShape("rect", { x, y, w, h: hgt, fill: { color: fill || C.CARDL },
    line: { color: C.LINE2, width: 0.75 } });
}

module.exports = { hbarTransmission, cidot, proteinStrip, virion, foregutDock, gantt, steps, card_min };
