import { Text, View } from "@react-pdf/renderer";
import type { ResumeSection as ResumeSectionData } from "../content/data";
import { InlineGridItemView, ResumeItemView } from "./Items";
import { styles } from "./styles";

type ResumeSectionProps = {
  section: ResumeSectionData;
};

// Named resume section, such as education, projects, skills, or personal information.
export const ResumeSection = ({ section }: ResumeSectionProps) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{section.title}</Text>
    {section.title === "Other + Personal Interests" ? (
      <View style={styles.inlineGrid}>
        {section.items.map((item, index) => (
          <InlineGridItemView key={`${section.title}-${index}`} item={item} />
        ))}
      </View>
    ) : (
      section.items.map((item, index) => (
        <ResumeItemView key={`${section.title}-${index}`} item={item} />
      ))
    )}
  </View>
);
