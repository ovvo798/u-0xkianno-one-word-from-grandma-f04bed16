// One Word From Grandma — entry program.
//
// A grandma texting about AI would not say "artificial intelligence".
// She would squint at the robot on the telly, mean "robot", and type
// the word exactly the way it sounds in her head: "robit".
// Warm, a little baffled, funny in one word, and unmistakably about
// a machine — no caption needed.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The single word a grandma would text about AI.
const WORD = "robit";

// The gate requires 1-30 UTF-8 characters, not only whitespace, and the
// task requires exactly one word — so reject any whitespace inside it too.
const chars = [...WORD];
if (
  chars.length < 1 ||
  chars.length > 30 ||
  WORD.trim().length === 0 ||
  /\s/.test(WORD)
) {
  throw new Error(`Invalid entry word: ${JSON.stringify(WORD)}`);
}

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, WORD + "\n", "utf8");
console.log(`Wrote ${JSON.stringify(WORD)} to ${outPath}`);
