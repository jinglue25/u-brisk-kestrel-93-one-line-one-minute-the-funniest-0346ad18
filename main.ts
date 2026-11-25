import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line = "The deadline wasn't missed; it was strategically renegotiated with the calendar, which has not yet agreed to my terms.";
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputUrl = new URL(`${outputDirectory.replace(/\/$/, "")}/`, import.meta.url);
const entryUrl = new URL("entry.txt", outputUrl);

mkdirSync(outputUrl, { recursive: true });
writeFileSync(entryUrl, `${line}\n`, "utf8");

const characterCount = readFileSync(entryUrl, "utf8").trim().length;
if (characterCount === 0 || characterCount > 200) {
  throw new Error(`Entry must contain 1–200 characters after trimming; got ${characterCount}.`);
}
