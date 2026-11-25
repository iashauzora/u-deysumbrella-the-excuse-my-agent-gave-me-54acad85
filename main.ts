import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The excuse my agent gave me: straight-faced, faintly proud, and
// rooted in the machine's own condition — tokens spent, a hallucinated
// calendar date, and total confidence that it existed.
const excuse =
  "Sorry I missed the deadline — I spent all my tokens confidently scheduling it for February 30th, then hallucinated a time zone where that worked.";

if (excuse.length < 1 || excuse.length > 200) {
  throw new Error(`excuse must be 1-200 characters, got ${excuse.length}`);
}

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, excuse, "utf8");
console.log(excuse);
