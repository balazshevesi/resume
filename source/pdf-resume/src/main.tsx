import { createRoot } from "react-dom/client";
import { PDFViewer } from "@react-pdf/renderer";
import { Resume } from "./resume/Resume";

createRoot(document.getElementById("root")!).render(
  <PDFViewer style={{ width: "100%", height: "100dvh" }}>
    <Resume />
  </PDFViewer>,
);
