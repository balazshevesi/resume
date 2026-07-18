import { Text, View } from "@react-pdf/renderer";
import type { EntryItem, ResumeItem } from "../content/data";
import { formatEntryDate, renderLinkedText } from "./resumeFormat";
import { styles } from "./resumeStyles";

// Bullet list content, usually used for achievements, responsibilities, or contribution summaries.
const BulletList = ({ bullets }: { bullets: string[] }) => (
  <View>
    {bullets.map((bullet) => (
      <View key={bullet} style={styles.bulletRow} wrap={false}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>{bullet}</Text>
      </View>
    ))}
  </View>
);

// Detailed resume entry, usually representing a school, project, job, or similar dated experience.
const Entry = ({ item }: { item: EntryItem }) => {
  const date = formatEntryDate(item);
  const sideMeta = [item.location, date].filter(Boolean).join(" | ");

  return (
    <View style={styles.item} wrap={false}>
      <View style={styles.entryHeader}>
        <View style={styles.entryMain}>
          <Text style={styles.entryTitle}>{item.title}</Text>
          {item.subtitle ? (
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          ) : null}
          {item.technologies ? (
            <Text style={styles.tech}>{item.technologies.join(" | ")}</Text>
          ) : null}
          {item.links ? (
            <View style={styles.links}>
              {item.links.map((link) =>
                renderLinkedText(link.label, link.url, link.label),
              )}
            </View>
          ) : null}
        </View>
        {sideMeta ? (
          <View style={styles.entrySide}>
            <Text style={styles.meta}>{sideMeta}</Text>
            {item.meta?.map((meta) => (
              <Text key={meta} style={styles.meta}>
                {meta}
              </Text>
            ))}
          </View>
        ) : null}
      </View>
      {item.bullets ? <BulletList bullets={item.bullets} /> : null}
    </View>
  );
};

// Dispatcher for the supported resume item types stored in the resume data file.
export const ResumeItemView = ({ item }: { item: ResumeItem }) => {
  switch (item.type) {
    case "entry":
      return <Entry item={item} />;
    case "bullet-list":
      return <BulletList bullets={item.bullets} />;
    case "skill-group":
      return (
        <View style={styles.inlineRow}>
          <Text style={styles.inlineLabel}>{item.label}</Text>
          <Text style={styles.inlineValues}>{item.skills.join(" | ")}</Text>
        </View>
      );
    case "inline-list":
      return (
        <View style={styles.inlineRow}>
          <Text style={styles.inlineLabel}>{item.label}</Text>
          <Text style={styles.inlineValues}>{item.values.join(" | ")}</Text>
        </View>
      );
  }
};
