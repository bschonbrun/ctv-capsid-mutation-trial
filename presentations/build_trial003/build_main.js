// build_main.js — assemble the 54-slide trial003 deck
const pptxgen = require("pptxgenjs");
const mods = [
  ...require("./slides_a.js"),
  ...require("./slides_b.js"),
  ...require("./slides_c.js"),
  ...require("./slides_d.js"),
];
const total = mods.length;
console.log("slide count:", total);
const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.title = "Transmission-dead CTV — hypothesis trial 003";
pres.author = "Silvec Biologics";
pres.subject = "AI strategy session 03 — transmission-dead CTV hypothesis and method";
mods.forEach((f, i) => {
  const tag = String(i + 1).padStart(2, "0") + " / " + total;
  // slide 1 carries its own brand tag
  if (i === 0) f(pres, tag); else f(pres, tag);
});
pres.writeFile({ fileName: process.argv[2] || "trial003.pptx" })
  .then(f => console.log("written:", f));
