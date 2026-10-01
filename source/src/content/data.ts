import { technologies, type Technology } from "./technologies";

export type Contact = {
  label: string;
  value: string;
  countryCode?: string;
  href?: string;
};

export type ResumeData = {
  profile: {
    pdfFileName: string;
    name: string;
    headline: string;
    pdfSubject: string;
    pdfDescription: string;
    contacts: Contact[];
  };
  sections: ResumeSection[];
};

export type ResumeSection = {
  title: string;
  items: ResumeItem[];
};

export type ResumeItem =
  | EntryItem
  | BulletListItem
  | SkillGroupItem
  | InlineListItem;

export type RichTextSegment = {
  text: string;
  bold?: boolean;
  italic?: boolean;
};

export type RichText = string | Array<string | RichTextSegment>;

export const bold = (text: string): RichTextSegment => ({ text, bold: true });

export const italic = (text: string): RichTextSegment => ({
  text,
  italic: true,
});

export const rich = (
  strings: TemplateStringsArray,
  ...values: Array<string | RichTextSegment>
): RichText => {
  const segments: Array<string | RichTextSegment> = [];

  strings.forEach((text, index) => {
    if (text) segments.push(text);
    if (index < values.length && values[index] !== "") {
      segments.push(values[index]);
    }
  });

  return segments;
};

export type EntryItem = {
  type: "entry";
  title: string;
  subtitle?: string;
  location?: string;
  date?: Date;
  endDate?: Date;
  dateLabel?: string;
  meta?: string[];
  technologies?: Technology[];
  links?: Array<{
    label: string;
    url?: string;
  }>;
  bullets?: RichText[];
};

export type BulletListItem = {
  type: "bullet-list";
  bullets: RichText[];
};

export type SkillGroupItem = {
  type: "skill-group";
  label: string;
  skills: Technology[];
};

export type InlineListItem = {
  type: "inline-list";
  label: string;
  values: string[];
};

export const resumeData: ResumeData = {
  profile: {
    pdfFileName: "balazs_hevesi_software_engineering_resume",
    pdfDescription:
      "Resume for Balazs Hevesi, software engineering student focused on frontend engineering, TypeScript, React, AI applications, and full-stack project development. Comfortable working in fast-paced environments",
    pdfSubject: "Software engineering resume",
    name: "Balazs Hevesi",
    headline: "Computer Science Student | Full-stack Software Engineer",
    contacts: [
      {
        label: "Phone",
        countryCode: "+46",
        value: "73 820 90 78",
        href: "tel:+46738209078",
      },
      {
        label: "Email",
        value: "balazshevesi@icloud.com",
        href: "mailto:balazshevesi@icloud.com",
      },
      {
        label: "GitHub",
        value: "github.com/balazshevesi",
        href: "https://github.com/balazshevesi",
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/balazshevesi",
        href: "https://linkedin.com/in/balazshevesi",
      },
    ],
  },
  sections: [
    {
      title: "Education",
      items: [
        {
          type: "entry",
          title: "Linnaeus University",
          subtitle:
            "Bachelor of Science, Software Technology (Computer Science)",
          location: "Växjö, Sweden",
          date: new Date("2027-06-01"),
          dateLabel: "Expected graduation",
          meta: ["GPA: 3.51 / 4.0"],
          bullets: [
            rich`${bold("Relevant Coursework: ")}Data Structures and Algorithms, Operating Systems, Machine Learning, Software Testing.`,
            rich`${bold("Hackathon: ")}Placed 2nd as part of a team in the SKF track at the Gothenburg Tech Week × Chalmers Hackathon.`,
          ],
        },
        {
          type: "entry",
          title: "The Odin Project (Full Stack JavaScript)",
          location: "Online",
          dateLabel: "Completed",
          date: new Date("2023-07-01"),
        },
      ],
    },
    {
      title: "Experience",
      items: [
        {
          type: "entry",
          title: "Videntic",
          subtitle: "Software Engineer Intern",
          location: "Stockholm, Sweden (Hybrid)",
          dateLabel: "Since",
          date: new Date("2026-08-01"),
          bullets: [
            `Cut local server startup time 11× and memory usage >50% by leading a staged migration of 52 pages from ${technologies.next} to ${technologies.vite} and optimizing development runtimes.`,
            `Added outcome telemetry across 14 dashboard views, distinguishing successful, empty, and failed loads to expose previously silent data-fetch failures helping developers track customer-reported data loading bugs.`,
            `Built a full-stack PostgreSQL workflow for resolving audit issues directly in the application, preserving existing behavior across 211 audit API tests.`,
          ],
        },
        {
          type: "entry",
          title: "AI Society, Linnaeus University",
          subtitle: "Vice President & R&D Lead Developer",
          location: "Växjö, Sweden",
          dateLabel: "Since",
          date: new Date("2026-03-01"),
          bullets: [
            "Guided technical direction for the 4-person Clarus team from architecture through MVP delivery under a strict deadline, showcased on Swedish national television 5 weeks ahead of schedule.",
          ],
        },
      ],
    },
    {
      title: "Projects",
      items: [
        {
          type: "entry",
          title: "Clarus Visa Migration Assistant",
          technologies: [
            technologies.react,
            technologies.tailwind,
            technologies.convex,
            technologies.vercelAiSdk,
          ],
          date: new Date("2026-03-01"),
          links: [
            {
              label: technologies.github,
              url: "https://github.com/balazshevesi/clarus",
            },
            {
              label: "SVT Feature",
              url: "https://www.svt.se/nyheter/lokalt/smaland/lnu-studenter-utvecklar-egen-ai-bot-ska-hjalpa-folk-fran-utlandet-med-visum",
            },
          ],
          bullets: [
            `Architected a serverless RAG application for Swedish visa guidance, integrating retrieval across 250+ source documents, multilingual processing, and conversational responses into a single workflow.`,
            "Engineered an AI translation and filtering layer for the RAG pipeline, reducing multilingual context bloat and cutting observed cross-language answer failures by 95%.",
          ],
        },
        {
          type: "entry",
          title: "Plant Monitoring System",
          technologies: [
            technologies.dockerCompose,
            technologies.microPython,
            technologies.telegraf,
            technologies.influxDb,
            technologies.grafana,
          ],
          date: new Date("2025-07-01"),
          links: [
            {
              label: technologies.github,
              url: "https://github.com/balazshevesi/plant-monitoring-iot",
            },
          ],
          bullets: [
            `Built a full-stack IoT pipeline using ${technologies.microPython} on Raspberry Pi Pico WH to sample 4 environmental signals every second, then publish via ${technologies.mqtt} to ${technologies.adafruitIo}.`,
            `Containerized ${technologies.telegraf}, ${technologies.influxDb}, and ${technologies.grafana} with ${technologies.dockerCompose}, enabling one-click deployment, reducing manual setup steps from 12 to a single command.`,
          ],
        },
        {
          type: "entry",
          title: "När-Slutar-Lektionen.net",
          technologies: [
            technologies.next,
            technologies.typescript,
            technologies.tailwind,
            technologies.chromeDevTools,
            technologies.vercel,
          ],
          date: new Date("2024-07-01"),
          links: [
            {
              label: technologies.github,
              url: "https://github.com/balazshevesi/nar-slutar-lektionen",
            },
            {
              label: "Live Demo",
              url: "https://www.xn--nr-slutar-lektionen-gwb.net/",
            },
          ],
          bullets: [
            "Reverse-engineered and documented Skola24's private API by intercepting and analyzing client requests to reconstruct its signature-generation and five-step handshake protocol without documentation.",
            `Crafted a responsive user interface using ${technologies.next}, ${technologies.reactServerComponents}, and ${technologies.tailwind}, achieving an average Lighthouse score of 99 across all categories and reducing the number of clicks to access school schedules from 11 to 2 clicks.`,
          ],
        },
      ],
    },
    {
      title: "Open Source",
      items: [
        {
          type: "bullet-list",
          bullets: [
            `Contributed 10+ merged pull requests for major open-source packages, including ${technologies.supabase}, ${technologies.zod}, ${technologies.rxjs}, and ${technologies.t3Env}, used by millions of developers.`,
            `Backported ${technologies.paneruWm} from ${technologies.macos} 26 to ${technologies.macos} 15.`,
            `Authored and published two packages on ${technologies.npm}, totaling 10k+ downloads, streamlining the retrieval of llms.txt files.`,
          ],
        },
      ],
    },
    {
      title: "Technical Skills",
      items: [
        {
          type: "skill-group",
          label: "Programming Languages",
          skills: [
            technologies.javascript,
            technologies.typescript,
            technologies.html,
            technologies.css,
            technologies.sql,
            technologies.python,
            technologies.java,
          ],
        },
        {
          type: "skill-group",
          label: "Frameworks & Libraries",
          skills: [
            technologies.react,
            technologies.next,
            technologies.node,
            technologies.zod,
            technologies.express,
            // technologies.hono,
            technologies.vitest,
            technologies.drizzleOrm,
            // technologies.convex,
          ],
        },
        {
          type: "skill-group",
          label: "Tools & DevOps",
          skills: [
            technologies.vite,
            technologies.git,
            technologies.docker,
            technologies.aws,
            technologies.cicd,
            technologies.rag,
            technologies.aiAgents,
          ],
        },
        // {
        //   type: "skill-group",
        //   label: "AI",
        //   skills: [
        //     technologies.rag,
        //     technologies.aiAgents,
        //     technologies.vercelAiSdk,
        //   ],
        // },
      ],
    },
    {
      title: "Additional Information",
      items: [
        {
          type: "inline-list",
          label: "Work Authorization",
          values: ["Sweden", "Hungary", "European Economic Area"],
        },
        {
          type: "inline-list",
          label: "Availability",
          values: [
            "Open to relocate",
            "Able to work hybrid",
            "Available full-time from June 2027",
          ],
        },
        {
          type: "inline-list",
          label: "Languages",
          values: [
            "English (fluent)",
            "Swedish (fluent)",
            "Hungarian (fluent)",
            "German (beginner)",
          ],
        },
      ],
    },
  ],
};
