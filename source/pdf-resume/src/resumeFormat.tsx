import { Link, Text } from "@react-pdf/renderer";
import type { EntryItem } from "./data";
import { styles } from "./resumeStyles";

export const formatEntryDate = (entry: EntryItem) => {
  if (entry.dateLabel && entry.date) {
    return `${entry.dateLabel}: ${formatMonthYear(entry.date)}`;
  }

  if (entry.date && entry.endDate) {
    return `${formatMonthYear(entry.date)} - ${formatMonthYear(entry.endDate)}`;
  }

  if (entry.date) {
    return formatMonthYear(entry.date);
  }

  return undefined;
};

const formatMonthYear = (date: Date) =>
  date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

export const renderLinkedText = (text: string, src?: string, key?: string) => {
  if (!src) {
    return (
      <Text key={key} style={styles.link}>
        {text}
      </Text>
    );
  }

  return (
    <Link key={key} src={src} style={styles.link}>
      {text}
    </Link>
  );
};
