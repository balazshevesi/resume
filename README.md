# Resume

This project aims to create the most optimized resume possible for passing
ATS (Applicant Tracking Systems), primarily for software engineering roles.

## Development

The PDF resume source lives in `source/`. Install dependencies and download the
fonts with Bun:

```sh
bun install
bun run build
```

Use `bun run dev` to preview the resume in the browser. The preview reloads
automatically when you edit the source. Generate the final PDF with:

```sh
bun run generate-pdf
```

Run the tests with `bun run get-fonts && bun test --run`.

The generated PDF is written to `source/dist/`, which is intentionally ignored
by Git.

## Tailoring

Tailor the resume to a specific job description from `source/`:

```sh
bun run tailor ./job-description.txt
```

You can also paste the job description directly:

```sh
bun run tailor "Paste the job description here"
```

The tailoring workflow runs opencode headlessly with the `resume-tailor` agent.
It is constrained to edit `src/content/data.ts` and then verify the result with
TypeScript, tests and PDF generation.

## Other Solutions

**Common solutions include:**

- Using a basic Google Docs template
- Using LaTeX or Typst
- Using HTML

The problem with all of these approaches is that the resume must be
*rendered* to PDF, meaning we don't have full control over the final file.
Metadata may be lost, and we can't fully predict how the PDF will be
formatted or ordered — we are at the mercy of the rendering process. As a
result, the PDF may be parsed incorrectly by ATS systems.

# Notes

This project is inspired by this blog post: https://wkaisertexas.github.io/blog/create-your-resume-in-html-and-css/

# TODO

- [ ] Consider re-witting the contents, set the "ai society" as experience
- [ ] Tune the ATS properly, probably setup tests and stuff
