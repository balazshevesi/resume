import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectDirectory = path.dirname(fileURLToPath(import.meta.url));
const targetDirectory = path.resolve(projectDirectory, "../src/assets/fonts");

const fonts = [
  "Tinos-Regular.ttf",
  "Tinos-Bold.ttf",
  "Tinos-Italic.ttf",
  "Tinos-BoldItalic.ttf",
];

const fontSource =
  "https://raw.githubusercontent.com/google/fonts/main/ofl/tinos";

await mkdir(targetDirectory, { recursive: true });

for (const font of fonts) {
  const response = await fetch(`${fontSource}/${font}`, {
    signal: AbortSignal.timeout(60_000),
  });

  if (!response.ok) {
    throw new Error(`Failed to download ${font}: ${response.status}`);
  }

  await writeFile(
    path.join(targetDirectory, font),
    Buffer.from(await response.arrayBuffer()),
  );
}

console.log(`Downloaded ${fonts.length} Tinos font files from Google Fonts.`);
