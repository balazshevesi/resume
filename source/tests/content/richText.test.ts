import { describe, expect, it } from "vitest";
import { bold, italic, rich } from "../../src/content/data";
import { technologies } from "../../src/content/technologies";

describe("rich", () => {
  it("preserves formatting and ordinary string interpolations in order", () => {
    expect(
      rich`Cut startup time ${bold("11×")} using ${italic("React")} and ${technologies.typescript}.`,
    ).toEqual([
      "Cut startup time ",
      { text: "11×", bold: true },
      " using ",
      { text: "React", italic: true },
      " and ",
      technologies.typescript,
      ".",
    ]);
  });

  it("omits empty text around adjacent and boundary interpolations", () => {
    expect(rich`${bold("Bold")}${""}${italic("Italic")}`).toEqual([
      { text: "Bold", bold: true },
      { text: "Italic", italic: true },
    ]);
  });

  it("supports text without interpolations", () => {
    expect(rich`Plain text.`).toEqual(["Plain text."]);
  });
});
