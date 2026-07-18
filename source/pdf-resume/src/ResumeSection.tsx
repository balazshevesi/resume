import { Text, View } from "@react-pdf/renderer";
import type { ResumeSection as ResumeSectionData } from "./data";
import { ResumeItemView } from "./ResumeItems";
import { styles } from "./resumeStyles";

type ResumeSectionProps = {
  section: ResumeSectionData;
};

export const ResumeSection = ({ section }: ResumeSectionProps) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{section.title}</Text>
    {section.items.map((item, index) => (
      <ResumeItemView key={`${section.title}-${index}`} item={item} />
    ))}
  </View>
);
