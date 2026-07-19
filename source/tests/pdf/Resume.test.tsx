import { renderToBuffer } from "@react-pdf/renderer";
import { describe, expect, it } from "vitest";
import { Resume } from "../../src/pdf/Resume";
import { inspectPdf } from "./pdf";

describe("Resume PDF", () => {
  it("renders a valid, ATS-readable PDF", async () => {
    const pdf = await renderToBuffer(<Resume />);
    const artifact = await inspectPdf(pdf);

    expect(pdf.length).toBeGreaterThan(0);
    expect(new TextDecoder().decode(pdf.subarray(0, 5))).toBe("%PDF-");
    expect(artifact.pageCount).toBe(1);
    expect(artifact.tagged).toBe(true);
  });
});
