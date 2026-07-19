import { Text, View } from "@react-pdf/renderer";
import type { ResumeSection as ResumeSectionData } from "../content/data";
import { ResumeItemView } from "./Items";
import { styles } from "./styles";

type ResumeSectionProps = {
  section: ResumeSectionData;
};

// Named resume section, such as education, projects, skills, or personal information.
export const ResumeSection = ({ section }: ResumeSectionProps) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle} role="H2">
      {section.title}
    </Text>
    {section.items.map((item, index) => (
      <ResumeItemView key={`${section.title}-${index}`} item={item} />
    ))}
  </View>
);
