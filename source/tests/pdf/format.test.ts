import { describe, expect, it } from "vitest";
import { formatEntryDate } from "../../src/pdf/format";

describe("formatEntryDate", () => {
  it("formats a labeled date", () => {
    expect(
      formatEntryDate({
        type: "entry",
        title: "University",
        date: new Date(2027, 5, 1),
        dateLabel: "Expected graduation",
      }),
    ).toEqual({
      label: "Expected graduation:",
      date: "June 2027",
    });
  });

  it("formats a date range", () => {
    expect(
      formatEntryDate({
        type: "entry",
        title: "Project",
        date: new Date(2025, 5, 1),
        endDate: new Date(2026, 2, 1),
      }),
    ).toEqual({ date: "June 2025 - March 2026" });
  });

  it("formats a date without a label or end date", () => {
    expect(
      formatEntryDate({
        type: "entry",
        title: "Project",
        date: new Date(2025, 6, 1),
      }),
    ).toEqual({ date: "July 2025" });
  });

  it("returns undefined when no date exists", () => {
    expect(
      formatEntryDate({
        type: "entry",
        title: "Project",
      }),
    ).toBeUndefined();
  });
});
