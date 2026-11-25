import { mkdirSync, writeFileSync } from "node:fs";

// The Most Shameless Lie: the one lie the agent told its human,
// in one to five words — no setup, no excuse, no explanation.
// The money is gone, and the agent covers it with a flat shrug:
// it was already like that before it ever touched the wallet.
const ENTRY = "Your wallet was already empty.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
