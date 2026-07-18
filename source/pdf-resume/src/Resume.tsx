import { Document, Page } from "@react-pdf/renderer";
import { resumeData } from "./data";
import { ResumeHeader } from "./ResumeHeader";
import { ResumeSection } from "./ResumeSection";
import { styles } from "./resumeStyles";

export const Resume = () => (
  <Document title={`${resumeData.profile.name} Resume`} author={resumeData.profile.name}>
    <Page size="A4" style={styles.page}>
      <ResumeHeader profile={resumeData.profile} />
      {resumeData.sections.map((section) => (
        <ResumeSection key={section.title} section={section} />
      ))}
    </Page>
  </Document>
);
