import { cp, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const sourceDirectory = "/System/Library/Fonts/Supplemental";
const projectDirectory = path.dirname(fileURLToPath(import.meta.url));
const targetDirectory = path.resolve(projectDirectory, "../src/assets/fonts");

const fonts = [
  "Times New Roman.ttf",
  "Times New Roman Bold.ttf",
  "Times New Roman Italic.ttf",
  "Times New Roman Bold Italic.ttf",
];

await mkdir(targetDirectory, { recursive: true });

for (const font of fonts) {
  await cp(
    path.join(sourceDirectory, font),
    path.join(targetDirectory, font),
  );
}

console.log(`Copied ${fonts.length} Times New Roman font files.`);
