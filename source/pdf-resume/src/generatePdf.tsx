import { renderToFile } from "@react-pdf/renderer";
import { Resume } from "./resume/Resume";

const outputUrl = new URL("../../../Balazs_Hevesi_Resume.pdf", import.meta.url);

await renderToFile(<Resume />, outputUrl.pathname);

console.log(`PDF saved to ${outputUrl.pathname}`);
