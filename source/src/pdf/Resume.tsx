import { Document, Page } from "@react-pdf/renderer";
import { resumeData } from "../content/data";
import { ResumeHeader } from "./Header";
import { ResumeSection } from "./Section";
import "./fonts";
import { styles } from "./styles";

// Full resume PDF document, composed from the profile header and each resume section.
export const Resume = () => (
  <Document
    title={`${resumeData.profile.pdfFileName}`}
    author={resumeData.profile.name}
    subject={resumeData.profile.pdfSubject}
    description={resumeData.profile.pdfDescription}
    language="en-US"
    pdfVersion="1.4"
    tagged
  >
    <Page size="A4" style={styles.page}>
      <ResumeHeader profile={resumeData.profile} />
      {resumeData.sections.map((section) => (
        <ResumeSection key={section.title} section={section} />
      ))}
    </Page>
  </Document>
);
