import { createRoot } from "react-dom/client";
import { PDFViewer } from "@react-pdf/renderer";
import { Resume } from "./pdf/Resume";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <PDFViewer style={{ width: "100%", height: "100dvh", border: 0 }}>
    <Resume />
  </PDFViewer>,
);
