import { Document, Page } from "@react-pdf/renderer";
import { resumeData } from "../content/data";
import { ResumeHeader } from "./Header";
import { ResumeSection } from "./Section";
import "./fonts";
import { styles } from "./styles";

// Full resume PDF document, composed from the profile header and each resume section.
export const Resume = () => (
  <Document
    title={`${resumeData.profile.fileName}`}
    author={resumeData.profile.name}
    subject="Software engineering resume"
    description="Resume for Balazs Hevesi, software engineering student focused on frontend engineering, TypeScript, React, AI applications, and full-stack project development. Comfortable working in fast-paced environments"
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
