import { technologies, type Technology } from "./technologies";

export type Contact = {
  label: string;
  value: string;
  countryCode?: string;
  href?: string;
};

export type ResumeData = {
  profile: {
    name: string;
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
    name: "Balazs Hevesi",
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
          location: "Vaxjo, Sweden",
          date: new Date("2027-06-01"),
          dateLabel: "Expected graduation",
          meta: ["GPA: 3.69 / 4.0"],
          bullets: [
            [
              { text: "Relevant Coursework: ", bold: true },
              "Advanced Data Structures and Algorithms, Software Design and Architecture, Operating Systems, Computer Networks, Database Technology, Introduction to Machine Learning, Software Testing.",
            ],
            [
              {
                text: "AI Society - Vice President, R&D Lead Developer: ",
                bold: true,
              },
              `Led the development of a RAG-enabled AI-Chatbot ${technologies.react} project and actively competed in technical hackathons.`,
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
              label: "Code",
              url: "https://github.com/balazshevesi/clarus-visa-migration-assistant",
            },
            {
              label: "SVT",
              url: "https://www.svt.se/nyheter/lokalt/smaland/lnu-studenter-utvecklar-egen-ai-bot-ska-hjalpa-folk-fran-utlandet-med-visum",
            },
          ],
          bullets: [
            `Architected a serverless ${technologies.react} SPA using ${technologies.tailwind} and ${technologies.convex}, integrating the ${technologies.vercelAiSdk} to build a RAG-based chatbot that simplifies the Swedish visa migration process for non-Swedish speakers.`,
            "Engineered an AI translation and filtering layer for the RAG pipeline, reducing multilingual context bloat and cutting observed cross-language answer failures by 99%.",
            "Led the technical execution as R&D Lead Developer, delivering a highly stable MVP under a strict deadline that was robust enough to be successfully demonstrated on Swedish national television (SVT).",
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
              label: "Code",
              url: "https://github.com/balazshevesi/plant-monitoring-system",
            },
          ],
          bullets: [
            `Architected a full-stack IoT pipeline using ${technologies.microPython} on Raspberry Pi Pico WH to sample temperature, humidity, light-intensity and soil-moisture every second, then publish via ${technologies.mqtt} to ${technologies.adafruitIo}.`,
            `Containerized ${technologies.telegraf}, ${technologies.influxDb}, and ${technologies.grafana} with ${technologies.dockerCompose}, enabling one-click deployment, reducing manual setup steps from 12 to a single command.`,
            `Designed a reusable sensor-abstraction layer in ${technologies.microPython}, defining a Sensor superclass to reduce code duplication by roughly 40% and simplify the addition of new sensor types.`,
            "Set up a soil moisture alert system via webhooks, allowing faster response times to prevent over or under watering.",
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
              label: "Code",
              url: "https://github.com/balazshevesi/ai-news-summarizing-application",
            },
          ],
          bullets: [
            "Collaborated in a five-person Scrum team, running weekly sprints, daily stand-ups, sprint planning and retrospectives, delivering a fully functional MVP in five sprints, meeting 100% of client requirements.",
            `Developed a ${technologies.javaFx} frontend (${technologies.fxml} + ${technologies.css}) featuring feed toggles, settings screen, togglable themes, AI summary views and local ${technologies.sqlite} caching for offline reading, improving first-load time by an estimated 60%.`,
            `Structured the codebase as a ${technologies.gradle} multi-project to improve build times and enforce clear separation of concerns.`,
          ],
        },
        {
          type: "entry",
          title: "Nar-Slutar-Lektionen.net",
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
              label: "Code",
              url: "https://github.com/balazshevesi/nar-slutar-lektionen",
            },
            {
              label: "Live",
              url: "https://nar-slutar-lektionen.net",
            },
          ],
          bullets: [
            "Reverse-engineered and documented Skola24's private API by intercepting and analyzing encrypted client requests to reconstruct its proprietary signature-generation and five-step handshake protocol, unlocking programmatic access to school-year and timetable endpoints without access to official documentation.",
            `Crafted a responsive user interface using ${technologies.next}, ${technologies.reactServerComponents}, and ${technologies.tailwind}, achieving an average Lighthouse score of 99 across all categories and reducing the number of clicks to access school schedules from 11 to 2 clicks.`,
            `Leveraged ${technologies.next} ${technologies.reactServerComponents} to call Skola24's API on the server-side, bypassing browser CORS restrictions.`,
          ],
        },
      ],
    },
    {
      title: "Open Source Contributions",
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
            technologies.python,
            technologies.java,
            technologies.javascript,
            technologies.typescript,
            technologies.html,
            technologies.css,
            technologies.scss,
            technologies.sql,
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
            technologies.hono,
            technologies.drizzleOrm,
            technologies.convex,
          ],
        },
        {
          type: "skill-group",
          label: "Tools & DevOps",
          skills: [
            technologies.visualStudioCode,
            technologies.zed,
            technologies.docker,
            technologies.npm,
            technologies.vite,
            technologies.bun,
            technologies.git,
            technologies.github,
            technologies.restApis,
            technologies.aiAgents,
            technologies.chromeDevTools,
          ],
        },
      ],
    },
    {
      title: "Other + Personal Interests",
      items: [
        {
          type: "inline-list",
          label: "Citizenships",
          values: ["Swedish", "Hungarian"],
        },
        {
          type: "inline-list",
          label: "Personal Interests",
          values: ["Weight Lifting", "Muay Thai", "Music Production"],
        },
        {
          type: "inline-list",
          label: "Languages",
          values: ["English", "Swedish", "German", "Hungarian"],
        },
      ],
    },
  ],
};
