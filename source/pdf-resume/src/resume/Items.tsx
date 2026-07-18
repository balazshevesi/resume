import { Text, View } from "@react-pdf/renderer";
import type { EntryItem, ResumeItem, RichText } from "../content/data";
import { formatEntryDate, renderLinkedText } from "./format";
import { styles } from "./styles";

const getBulletKey = (bullet: RichText) =>
  typeof bullet === "string"
    ? bullet
    : bullet
        .map((segment) =>
          typeof segment === "string" ? segment : segment.text,
        )
        .join("");

const renderRichText = (text: RichText) => {
  if (typeof text === "string") {
    return text;
  }

  return text.map((segment, index) => {
    if (typeof segment === "string") {
      return (
        <Text key={`${segment}-${index}`} style={styles.bulletTextRegular}>
          {segment}
        </Text>
      );
    }

    const style = segment.bold
      ? segment.italic
        ? styles.bulletTextBoldItalic
        : styles.bulletTextBold
      : segment.italic
        ? styles.bulletTextItalic
        : styles.bulletTextRegular;

    return (
      <Text key={`${segment.text}-${index}`} style={style}>
        {segment.text}
      </Text>
    );
  });
};

// Bullet list content, usually used for achievements, responsibilities, or contribution summaries.
const BulletList = ({ bullets }: { bullets: RichText[] }) => (
  <View role="L">
    {bullets.map((bullet) => (
      <View
        key={getBulletKey(bullet)}
        style={styles.bulletRow}
        wrap={false}
        role="LI"
      >
        <Text style={styles.bullet} role="Lbl">
          -
        </Text>
        <Text style={styles.bulletText} role="LBody">
          {renderRichText(bullet)}
        </Text>
      </View>
    ))}
  </View>
);

// Detailed resume entry, usually representing a school, project, job, or similar dated experience.
const Entry = ({ item }: { item: EntryItem }) => {
  const date = formatEntryDate(item);

  return (
    <View style={styles.item}>
      <View style={styles.entryHeader}>
        <View style={styles.entryMain}>
          <Text style={styles.entryTitle} role="H3">
            {item.title}
          </Text>
          {item.location ? (
            <Text style={styles.entryText}>{item.location}</Text>
          ) : null}
          {item.technologies ? (
            <Text style={styles.tech}>({item.technologies.join(", ")})</Text>
          ) : null}
        </View>
        {date || item.links ? (
          <View style={styles.entrySide}>
            {item.links ? (
              <View style={styles.links}>
                {item.links.map((link) =>
                  renderLinkedText(link.label, link.url, link.label),
                )}
              </View>
            ) : null}
            {date ? (
              <View style={styles.metaDate}>
                {date.label ? (
                  <Text style={styles.metaLabel}>{date.label}</Text>
                ) : null}
                <Text style={date.label ? styles.metaValue : styles.meta}>
                  {date.date}
                </Text>
              </View>
            ) : null}
          </View>
        ) : null}
      </View>
      {item.subtitle ? (
        <Text style={styles.subtitle} role="P">
          {[item.subtitle, ...(item.meta ?? [])].join(", ")}
        </Text>
      ) : null}
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
          <Text style={styles.inlineLabel}>{item.label}: </Text>
          <Text style={styles.inlineValues} role="P">
            {item.skills.join(", ")}
          </Text>
        </View>
      );
    case "inline-list":
      return (
        <View style={styles.inlineRow}>
          <Text style={styles.inlineLabel}>{item.label}: </Text>
          <Text style={styles.inlineValues} role="P">
            {item.values.join(", ")}
          </Text>
        </View>
      );
  }
};
