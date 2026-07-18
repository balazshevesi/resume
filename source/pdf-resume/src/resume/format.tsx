import { Link, Text } from "@react-pdf/renderer";
import type { EntryItem } from "../content/data";
import { styles } from "./styles";

export const formatEntryDate = (entry: EntryItem) => {
  if (entry.dateLabel && entry.date) {
    return {
      label: `${entry.dateLabel}:`,
      date: formatMonthYear(entry.date),
    };
  }

  if (entry.date && entry.endDate) {
    return {
      date: `${formatMonthYear(entry.date)} - ${formatMonthYear(entry.endDate)}`,
    };
  }

  if (entry.date) {
    return {
      date: formatMonthYear(entry.date),
    };
  }

  return undefined;
};

const formatMonthYear = (date: Date) =>
  date.toLocaleDateString("en-US", {
    month: "long",
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
