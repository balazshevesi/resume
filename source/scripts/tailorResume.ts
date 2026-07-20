import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { spawn } from "node:child_process";

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error(
    "Usage: bun run tailor <job description text | path/to/job-description.txt>",
  );
  process.exit(1);
}

const input = args.join(" ").trim();
const maybePath = args.length === 1 ? resolve(args[0]) : undefined;
const jobDescriptionPath = maybePath && existsSync(maybePath) ? maybePath : undefined;

const prompt = jobDescriptionPath
  ? [
      "Tailor this resume for the attached job description.",
      "Use the tailor-resume skill and edit only src/content/data.ts.",
      "After editing, run the required verification commands.",
    ].join(" ")
  : [
      "Tailor this resume for the following job description.",
      "Use the tailor-resume skill and edit only src/content/data.ts.",
      "After editing, run the required verification commands.",
      "",
      input,
    ].join("\n");

const opencodeArgs = [
  "run",
  "--agent",
  "resume-tailor",
  "--auto",
  "--title",
  "Tailor resume",
];

if (jobDescriptionPath) {
  opencodeArgs.push("--file", jobDescriptionPath);
}

opencodeArgs.push(prompt);

const child = spawn("opencode", opencodeArgs, {
  stdio: "inherit",
});

child.on("exit", (code, signal) => {
  if (signal) {
    console.error(`opencode exited with signal ${signal}`);
    process.exit(1);
  }

  process.exit(code ?? 1);
});

child.on("error", (error) => {
  console.error(`Failed to start opencode: ${error.message}`);
  process.exit(1);
});
