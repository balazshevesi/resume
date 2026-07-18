import { StyleSheet } from "@react-pdf/renderer";

const ink = "#050505";
const rule = "#8c8c8c";

export const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 24,
    paddingVertical: 26,
    color: ink,
    fontFamily: "Times-Roman",
    fontSize: 10,
    lineHeight: 1.16,
  },
  header: {
    alignItems: "center",
    marginBottom: 5,
  },
  name: {
    color: ink,
    fontFamily: "Times-Bold",
    fontSize: 24,
    lineHeight: 1,
    marginBottom: 7,
  },
  contacts: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 11,
  },
  contactText: {
    color: ink,
    fontSize: 10.4,
    lineHeight: 1.1,
  },
  link: {
    color: ink,
    textDecoration: "underline",
  },
  section: {
    marginTop: 5,
  },
  sectionTitle: {
    borderBottomColor: rule,
    borderBottomWidth: 1,
    color: ink,
    fontSize: 12,
    letterSpacing: 0.2,
    lineHeight: 1.1,
    marginBottom: 4,
    paddingBottom: 1,
    textTransform: "uppercase",
  },
  item: {
    marginBottom: 3,
  },
  entryHeader: {
    flexDirection: "row",
    gap: 7,
    justifyContent: "space-between",
    marginBottom: 1,
  },
  entryMain: {
    flexDirection: "row",
    flexWrap: "wrap",
    flexGrow: 1,
    flexShrink: 1,
    paddingRight: 4,
  },
  entryTitle: {
    fontFamily: "Times-Bold",
    fontSize: 10.8,
    lineHeight: 1.12,
  },
  entryText: {
    fontSize: 10.8,
    lineHeight: 1.12,
  },
  entrySide: {
    alignItems: "flex-end",
    flexDirection: "row",
    gap: 8,
    flexShrink: 0,
  },
  subtitle: {
    color: ink,
    fontSize: 10.45,
    lineHeight: 1.12,
    marginBottom: 1,
  },
  meta: {
    color: ink,
    fontFamily: "Times-Bold",
    fontSize: 10.4,
    lineHeight: 1.12,
  },
  tech: {
    color: ink,
    fontFamily: "Times-Italic",
    fontSize: 10.5,
    lineHeight: 1.12,
  },
  links: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  bulletRow: {
    flexDirection: "row",
    gap: 6,
    marginTop: 2,
    paddingLeft: 14,
  },
  bullet: {
    color: ink,
    fontSize: 10.8,
    lineHeight: 1.12,
    width: 5,
  },
  bulletText: {
    flex: 1,
    fontSize: 10.2,
    lineHeight: 1.16,
  },
  inlineRow: {
    flexDirection: "row",
    marginBottom: 2,
  },
  inlineGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  inlineGridItem: {
    flexDirection: "row",
    marginBottom: 2,
    width: "50%",
  },
  inlineLabel: {
    fontFamily: "Times-Bold",
    fontSize: 10.6,
    lineHeight: 1.12,
  },
  inlineValues: {
    flex: 1,
    fontSize: 10.6,
    lineHeight: 1.12,
  },
});
