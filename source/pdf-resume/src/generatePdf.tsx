import { renderToFile } from "@react-pdf/renderer";
import { Resume } from "./resume/Resume";
import { resumeData } from "./content/data";

const outputUrl = new URL(
  `../../../${resumeData.profile.fileName}.pdf`,
  import.meta.url,
);

await renderToFile(<Resume />, outputUrl.pathname);

console.log(`PDF saved to ${outputUrl.pathname}`);
