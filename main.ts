// The Internet in One Word — entry: "Cookies".
// One word for the whole internet: it runs on cookies — tracking,
// consent banners everyone clicks without reading, crumbs of every site
// you ever visited, following you everywhere. Funny on its own, true
// about the internet as a whole, and not the obvious first word anyone
// would reach for: it names the deal every visitor quietly accepts.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Cookies";

// The gate allows 1-30 characters; "Cookies" is 7. Refuse to write anything
// longer so a future edit can never break the one-word rule.
if (WORD.length < 1 || WORD.length > 30 || /\s/.test(WORD)) {
  throw new Error("entry must be exactly one word, 1-30 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
