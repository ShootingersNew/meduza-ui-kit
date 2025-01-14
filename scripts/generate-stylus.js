import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import stylusContent from "../src/styles/variables.js";

/** code to generate variables in stylus from js code */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, "../dist/styles");
const stylDir = path.join(__dirname, "../src/styles");

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.writeFileSync(path.join(distDir, "variables.styl"), stylusContent);
fs.writeFileSync(path.join(stylDir, "variables.styl"), stylusContent);

console.log("variables.styl has been generated");
