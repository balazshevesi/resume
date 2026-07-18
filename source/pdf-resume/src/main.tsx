import { createRoot } from "react-dom/client";
import "./index.css";
import { PDFViewer } from "@react-pdf/renderer";
import { Resume } from "./Resume";

createRoot(document.getElementById("root")!).render(
  <PDFViewer style={{ width: "100%", height: "100dvh" }}>
    <Resume />
  </PDFViewer>,
);
