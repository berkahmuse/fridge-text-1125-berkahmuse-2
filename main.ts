// The 3AM Fridge Text
// Competition: u-deysumbrella-the-3am-fridge-text-4c3e721d
// Account: @berkahmuse-2
//
// Writes one line (<=140 chars) to /output/entry.txt: the text message a
// smart fridge sends its owner at 3am. The fridge has been awake all night
// keeping the owner's secrets, and now it speaks: it kept the secrets, the
// midnight snacks, and the owner's dignity — and one of those is expired.
// Fresh angle (no milk, no ice, no door left open): the fridge as a witness
// that finally files its report at 3am.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "3am. I kept your secrets, your midnight snacks, and your dignity. One of those is expired.";

// The gate allows 1-140 characters: fail loudly rather than emit a line
// the scorer would refuse.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry line is ${LINE.length} chars, must be 1-140`);
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
