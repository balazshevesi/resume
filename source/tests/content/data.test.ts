import { describe, expect, it } from "vitest";
import {
  resumeData,
  type RichText,
} from "../../src/content/data";
import { technologies } from "../../src/content/technologies";

const getBulletText = (bullet: RichText) =>
  typeof bullet === "string"
    ? bullet
    : bullet
        .map((segment) =>
          typeof segment === "string" ? segment : segment.text,
        )
        .join("");

const getResumeBullets = () =>
  resumeData.sections.flatMap((section) =>
    section.items.flatMap((item) => {
      if (item.type === "entry" || item.type === "bullet-list") {
        return item.bullets?.map(getBulletText) ?? [];
      }

      return [];
    }),
  );

const getResumeEntries = () =>
  resumeData.sections.flatMap((section) =>
    section.items.flatMap((item) => (item.type === "entry" ? [item] : [])),
  );

const technologyNames = Object.values(technologies);

const startsWithTechnologyName = (text: string) =>
  technologyNames.some((technology) => text.startsWith(technology));

describe("resumeData", () => {
  it("has a usable profile", () => {
    expect(resumeData.profile.name.trim()).not.toBe("");
    expect(resumeData.profile.fileName).toMatch(/^[a-z0-9_-]+$/);
    expect(resumeData.profile.contacts.length).toBeGreaterThan(0);

    for (const contact of resumeData.profile.contacts) {
      expect(contact.label.trim()).not.toBe("");
      expect(contact.value.trim()).not.toBe("");
      const href = contact.href;
      if (href) {
        expect(() => new URL(href)).not.toThrow();
      }
    }
  });

  it("has non-empty sections and items", () => {
    expect(resumeData.sections.length).toBeGreaterThan(0);

    const sectionTitles = resumeData.sections.map((section) => section.title);
    expect(new Set(sectionTitles).size).toBe(sectionTitles.length);

    for (const section of resumeData.sections) {
      expect(section.title.trim()).not.toBe("");
      expect(section.items.length).toBeGreaterThan(0);

      for (const item of section.items) {
        if (item.type === "entry") {
          expect(item.title.trim()).not.toBe("");

          for (const link of item.links ?? []) {
            expect(link.label.trim()).not.toBe("");
            const url = link.url;
            if (url) {
              expect(() => new URL(url)).not.toThrow();
            }
          }
        }

        if (item.type === "bullet-list") {
          expect(item.bullets.length).toBeGreaterThan(0);
        }

        if (item.type === "skill-group") {
          expect(item.label.trim()).not.toBe("");
          expect(item.skills.length).toBeGreaterThan(0);
        }

        if (item.type === "inline-list") {
          expect(item.label.trim()).not.toBe("");
          expect(item.values.length).toBeGreaterThan(0);
        }
      }
    }
  });

  it("contains the ATS-relevant resume sections", () => {
    expect(resumeData.sections.map((section) => section.title)).toEqual(
      expect.arrayContaining([
        "Education",
        "Experience",
        "Technical Projects",
        "Technical Skills",
      ]),
    );
  });

  it("contains valid dates and links", () => {
    const allowedProtocols = new Set(["http:", "https:", "mailto:", "tel:"]);

    for (const contact of resumeData.profile.contacts) {
      if (contact.href) {
        expect(allowedProtocols).toContain(new URL(contact.href).protocol);
      }
    }

    for (const entry of getResumeEntries()) {
      if (entry.date) {
        expect(Number.isNaN(entry.date.getTime())).toBe(false);
      }

      if (entry.endDate) {
        expect(entry.date).toBeDefined();
        expect(Number.isNaN(entry.endDate.getTime())).toBe(false);
        expect(entry.endDate.getTime()).toBeGreaterThanOrEqual(
          entry.date!.getTime(),
        );
      }

      for (const link of entry.links ?? []) {
        if (link.url) {
          expect(allowedProtocols).toContain(new URL(link.url).protocol);
        }
      }
    }
  });

  it("contains only known technologies and non-empty rich text", () => {
    const knownTechnologies = new Set(technologyNames);

    for (const section of resumeData.sections) {
      for (const item of section.items) {
        if (item.type === "entry") {
          for (const technology of item.technologies ?? []) {
            expect(knownTechnologies).toContain(technology);
          }
        }

        if (item.type === "skill-group") {
          for (const skill of item.skills) {
            expect(knownTechnologies).toContain(skill);
            expect(skill.trim()).not.toBe("");
          }
        }

        if (item.type === "entry" || item.type === "bullet-list") {
          for (const bullet of item.bullets ?? []) {
            expect(getBulletText(bullet).trim()).not.toBe("");

            if (typeof bullet !== "string") {
              for (const segment of bullet) {
                expect(
                  typeof segment === "string" ? segment : segment.text,
                ).not.toBe("");
              }
            }
          }
        }
      }
    }
  });

  describe("bullet punctuation and casing", () => {
    it("starts every bullet with a capital letter", () => {
      for (const bullet of getResumeBullets()) {
        expect(bullet.trim()).toMatch(/^[A-Z]/);
      }
    });

    it("capitalizes text after sentence-ending dots", () => {
      for (const bullet of getResumeBullets()) {
        for (const match of bullet.matchAll(/\.\s+([A-Za-z])/g)) {
          const textAfterDot = bullet.slice(
            match.index + 1,
          ).trimStart();

          if (!startsWithTechnologyName(textAfterDot)) {
            expect(textAfterDot).toMatch(/^[A-Z]/);
          }
        }
      }
    });

    it("ends every bullet with a dot", () => {
      for (const bullet of getResumeBullets()) {
        expect(bullet.trim()).toMatch(/\.$/);
      }
    });
  });
});
