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
    pdfFileName: "balazs_hevesi_software_engineering_frontend_resume",
    pdfDescription:
      "Resume for Balazs Hevesi, software engineering student focused on frontend engineering, TypeScript, React, AI applications, and full-stack project development. Comfortable working in fast-paced environments",
    pdfSubject: "Software engineering resume",
    name: "Balazs Hevesi",
    headline:
      "Software Engineering Student | Frontend, TypeScript and AI Development",
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
            [
              { text: "Relevant Coursework: ", bold: true },
              "Data Structures and Algorithms, Operating Systems, Machine Learning, Software Testing.",
            ],
          ],
        },
        {
          type: "entry",
          title: "The Odin Project (Full Stack JavaScript)",
          location: "Online",
          date: new Date("2023-07-01"),
        },
      ],
    },
    {
      title: "Experience",
      items: [
        {
          type: "entry",
          title: "AI Society, Linnaeus University",
          subtitle: "Vice President & R&D Lead Developer",
          location: "Växjö, Sweden",
          dateLabel: "Since",
          date: new Date("2026-03-01"),
          bullets: [
            "Led development of a RAG-enabled AI chatbot project that helps non-Swedish speakers navigate Swedish visa migration.",
            "Coordinated technical direction and delivered an MVP under strict deadline, demonstrated on Swedish national television.",
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
            `Architected a serverless ${technologies.react} SPA using ${technologies.tailwind} and ${technologies.convex}, integrating the ${technologies.vercelAiSdk} to build a RAG-based chatbot that simplifies the Swedish visa migration process for non-Swedish speakers.`,
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
            `Built a full-stack IoT pipeline using ${technologies.microPython} on Raspberry Pi Pico WH to sample temperature, humidity, light intensity, and soil moisture every second, then publish via ${technologies.mqtt} to ${technologies.adafruitIo}.`,
            `Containerized ${technologies.telegraf}, ${technologies.influxDb}, and ${technologies.grafana} with ${technologies.dockerCompose}, enabling one-click deployment, reducing manual setup steps from 12 to a single command.`,
            `Designed a reusable sensor-abstraction layer in ${technologies.microPython}, defining a Sensor superclass to reduce code duplication by roughly 40% and simplify the addition of new sensor types.`,
          ],
        },
        {
          type: "entry",
          title: "AI News Summarizing Application",
          technologies: [
            technologies.java,
            technologies.javaFx,
            technologies.postgresql,
            technologies.sqlite,
            technologies.css,
            technologies.rss,
          ],
          date: new Date("2025-06-01"),
          links: [
            {
              label: technologies.github,
              url: "https://github.com/balazshevesi/ai-news-feed-summarizer",
            },
          ],
          bullets: [
            "Collaborated in a five-person Scrum team, running weekly sprints, daily stand-ups, sprint planning and retrospectives, incorporating client feedback to deliver a fully functional MVP in five sprints, meeting 100% of client requirements.",
            `Developed a ${technologies.javaFx} frontend (${technologies.fxml} + ${technologies.css}) featuring feed toggles, settings screen, theme switching, AI summary views and local ${technologies.sqlite} caching for offline reading, improving first-load time by an estimated 60%.`,
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
            "Reverse-engineered and documented Skola24's private API by intercepting and analyzing client requests to reconstruct its signature-generation and five-step handshake protocol without documentation, unlocking programmatic access to timetables.",
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
            `Contributed merged documentation for major open-source packages, including ${technologies.supabase}, ${technologies.zod}, ${technologies.rxjs}, and ${technologies.t3Env}, used by millions of developers, enhancing the overall developer experience and reducing adoption friction.`,
            `Backported ${technologies.paneruWm} from ${technologies.macos} 26 to ${technologies.macos} 15, expanding compatibility and driving broader user adoption.`,
            `Authored and published two packages on ${technologies.npm}, totaling over 8k downloads, streamlining the retrieval of llms.txt files.`,
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
            technologies.scss,
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
            technologies.tailwind,
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
            technologies.npm,
            technologies.vite,
            technologies.aiAgents,
            technologies.git,
            technologies.docker,
            technologies.bun,
            technologies.restApis,
            technologies.chromeDevTools,
            technologies.aws,
          ],
        },
        {
          type: "inline-list",
          label: "Concepts",
          values: [
            "Data Structures and Algorithms",
            "RAG",
            "Agile/Scrum",
            "CI/CD",
            "Database Design",
            "Software Architecture",
          ],
        },
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
            "Available full-time from July 2027",
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
