import { readFile } from "node:fs/promises";
import { renderToBuffer } from "@react-pdf/renderer";
import { describe, expect, it } from "vitest";
import { Resume } from "../../src/pdf/Resume";

const nativeFetch = globalThis.fetch;

globalThis.fetch = async (input, init) => {
  const url = input instanceof Request ? input.url : input.toString();

  if (url.startsWith("file:")) {
    return new Response(await readFile(new URL(url)));
  }

  return nativeFetch(input, init);
};

describe("Resume PDF", () => {
  it("renders a valid PDF", async () => {
    const pdf = await renderToBuffer(<Resume />);

    expect(pdf.length).toBeGreaterThan(0);
    expect(new TextDecoder().decode(pdf.subarray(0, 5))).toBe("%PDF-");
  });
});
