import { StyleSheet } from "@react-pdf/renderer";

const accent = "#1f4e79";
const muted = "#59636e";
const border = "#d9e1e8";

export const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 34,
    paddingVertical: 28,
    color: "#111827",
    fontFamily: "Helvetica",
    fontSize: 9.2,
    lineHeight: 1.28,
  },
  header: {
    borderBottomColor: accent,
    borderBottomWidth: 1.4,
    marginBottom: 8,
    paddingBottom: 6,
  },
  name: {
    color: accent,
    fontSize: 21,
    fontWeight: 700,
    letterSpacing: 0.4,
    marginBottom: 4,
    textTransform: "uppercase",
  },
  contacts: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 7,
  },
  contactText: {
    color: muted,
    fontSize: 8.2,
  },
  link: {
    color: accent,
    textDecoration: "none",
  },
  section: {
    marginTop: 7,
  },
  sectionTitle: {
    borderBottomColor: border,
    borderBottomWidth: 0.8,
    color: accent,
    fontSize: 10.5,
    fontWeight: 700,
    letterSpacing: 0.8,
    marginBottom: 4,
    paddingBottom: 1.5,
    textTransform: "uppercase",
  },
  item: {
    marginBottom: 5,
  },
  entryHeader: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
    marginBottom: 1,
  },
  entryMain: {
    flexGrow: 1,
    flexShrink: 1,
  },
  entryTitle: {
    fontSize: 9.7,
    fontWeight: 700,
  },
  entrySide: {
    alignItems: "flex-end",
    flexShrink: 0,
  },
  subtitle: {
    color: "#27313b",
    fontSize: 8.7,
    marginTop: 0.5,
  },
  meta: {
    color: muted,
    fontSize: 8,
  },
  tech: {
    color: muted,
    fontSize: 8,
    marginTop: 1,
  },
  links: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    marginTop: 1,
  },
  bulletRow: {
    flexDirection: "row",
    gap: 4,
    marginTop: 1.5,
  },
  bullet: {
    color: accent,
    width: 6,
  },
  bulletText: {
    flex: 1,
  },
  inlineRow: {
    flexDirection: "row",
    marginBottom: 2.5,
  },
  inlineLabel: {
    fontWeight: 700,
    width: 95,
  },
  inlineValues: {
    flex: 1,
  },
});
