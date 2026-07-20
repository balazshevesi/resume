import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { renderToFile } from "@react-pdf/renderer";
import { Resume } from "../src/pdf/Resume";
import { resumeData } from "../src/content/data";

const defaultOutputDirectory = new URL("../dist/", import.meta.url);

export const generatePdf = async (
  outputDirectory: URL = defaultOutputDirectory,
) => {
  const outputUrl = new URL(
    `${resumeData.profile.pdfFileName}.pdf`,
    outputDirectory,
  );

  await mkdir(fileURLToPath(outputDirectory), { recursive: true });
  await renderToFile(<Resume />, fileURLToPath(outputUrl));

  return outputUrl;
};

if (
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  const outputUrl = await generatePdf();

  console.log(`PDF saved to ${fileURLToPath(outputUrl)}`);
}
