import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { describe, expect, it } from "vitest";
import { resumeData } from "../../src/content/data";
import { generatePdf } from "../../scripts/generatePdf";

describe("generatePdf", () => {
  it("writes the generated PDF to the requested directory", async () => {
    const temporaryDirectory = await mkdtemp(join(tmpdir(), "resume-pdf-"));
    const outputDirectory = pathToFileURL(`${temporaryDirectory}/`);

    try {
      const outputUrl = await generatePdf(outputDirectory);
      const output = await readFile(outputUrl);

      expect(output.length).toBeGreaterThan(0);
      expect(output.subarray(0, 5).toString()).toBe("%PDF-");
      expect(outputUrl.pathname).toContain(
        `${resumeData.profile.fileName}.pdf`,
      );
    } finally {
      await rm(temporaryDirectory, { recursive: true, force: true });
    }
  });
});
