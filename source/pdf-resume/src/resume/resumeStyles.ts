import { StyleSheet } from "@react-pdf/renderer";

const ink = "#050505";
const rule = "#8c8c8c";

export const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 28,
    paddingVertical: 24,
    color: ink,
    fontFamily: "Times-Roman",
    fontSize: 10.2,
    lineHeight: 1.18,
  },
  header: {
    alignItems: "center",
    marginBottom: 7,
  },
  name: {
    color: ink,
    fontFamily: "Times-Bold",
    fontSize: 25,
    letterSpacing: 0.8,
    marginBottom: 6,
    textTransform: "uppercase",
  },
  contacts: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  contactText: {
    color: ink,
    fontSize: 10.2,
  },
  link: {
    color: ink,
    textDecoration: "underline",
  },
  section: {
    marginTop: 6,
  },
  sectionTitle: {
    borderBottomColor: rule,
    borderBottomWidth: 1,
    color: ink,
    fontSize: 13.5,
    letterSpacing: 0.2,
    marginBottom: 5,
    paddingBottom: 1,
    textTransform: "uppercase",
  },
  item: {
    marginBottom: 4,
  },
  entryHeader: {
    flexDirection: "row",
    gap: 6,
    justifyContent: "space-between",
    marginBottom: 1.5,
  },
  entryMain: {
    flexDirection: "row",
    flexWrap: "wrap",
    flexGrow: 1,
    flexShrink: 1,
  },
  entryTitle: {
    fontFamily: "Times-Bold",
    fontSize: 11.5,
  },
  entryText: {
    fontSize: 11.5,
  },
  entrySide: {
    alignItems: "flex-end",
    flexDirection: "row",
    gap: 6,
    flexShrink: 0,
  },
  subtitle: {
    color: ink,
    fontSize: 11.1,
    marginBottom: 1.5,
  },
  meta: {
    color: ink,
    fontFamily: "Times-Bold",
    fontSize: 11,
  },
  tech: {
    color: ink,
    fontFamily: "Times-Italic",
    fontSize: 11.2,
  },
  links: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  bulletRow: {
    flexDirection: "row",
    gap: 7,
    marginTop: 2.5,
    paddingLeft: 15,
  },
  bullet: {
    color: ink,
    fontSize: 11.3,
    width: 6,
  },
  bulletText: {
    flex: 1,
    fontSize: 10.6,
  },
  inlineRow: {
    flexDirection: "row",
    marginBottom: 2,
  },
  inlineLabel: {
    fontFamily: "Times-Bold",
    fontSize: 10.8,
  },
  inlineValues: {
    flex: 1,
    fontSize: 10.8,
  },
});
