import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { renderToFile } from "@react-pdf/renderer";
import { Resume } from "../src/pdf/Resume";
import { resumeData } from "../src/content/data";

const outputUrl = new URL(
  `../dist/${resumeData.profile.fileName}.pdf`,
  import.meta.url,
);

await mkdir(fileURLToPath(new URL("../dist/", import.meta.url)), {
  recursive: true,
});

await renderToFile(<Resume />, outputUrl.pathname);

console.log(`PDF saved to ${outputUrl.pathname}`);
