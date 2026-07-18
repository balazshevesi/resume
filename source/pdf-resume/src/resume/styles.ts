import { StyleSheet } from "@react-pdf/renderer";

const ink = "#050505";
const rule = "#8c8c8c";

const fontSizes = {
  page: 10,
  bulletText: 10.4,
  contact: 10.4,
  meta: 10.4,
  subtitle: 10.45,
  tech: 10.5,
  inline: 10.6,
  entry: 10.8,
  sectionTitle: 12,
  name: 24,
};

export const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    color: ink,
    fontFamily: "Tinos",
    fontSize: fontSizes.page,
    lineHeight: 1.16,
  },
  name: {
    color: ink,
    fontFamily: "Tinos",
    fontWeight: 700,
    fontSize: fontSizes.name,
    lineHeight: 1,
    marginBottom: 4,
    textAlign: "center",
  },
  contactText: {
    color: ink,
    fontSize: fontSizes.contact,
    lineHeight: 1.1,
    marginBottom: 5,
    textAlign: "center",
  },
  link: {
    color: ink,
    textDecoration: "underline",
  },
  section: {
    marginTop: 4,
  },
  sectionTitle: {
    borderBottomColor: rule,
    borderBottomWidth: 1,
    color: ink,
    fontFamily: "Tinos",
    fontWeight: 700,
    fontSize: fontSizes.sectionTitle,
    letterSpacing: 0.2,
    lineHeight: 1.1,
    marginBottom: 4,
    paddingBottom: 1,
    textTransform: "uppercase",
  },
  item: {
    marginBottom: 2,
    marginLeft: 5,
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
    fontFamily: "Tinos",
    fontWeight: 700,
    fontSize: fontSizes.entry,
    lineHeight: 1.12,
  },
  entryText: {
    fontSize: fontSizes.entry,
    lineHeight: 1.12,
    marginLeft: 5.5,
  },
  entrySide: {
    alignItems: "flex-end",
    flexDirection: "row",
    gap: 8,
    flexShrink: 0,
  },
  subtitle: {
    color: ink,
    fontSize: fontSizes.subtitle,
    lineHeight: 1.12,
    marginBottom: 1,
  },
  meta: {
    color: ink,
    fontFamily: "Tinos",
    fontWeight: 700,
    fontSize: fontSizes.meta,
    lineHeight: 1.12,
  },
  metaDate: {
    flexDirection: "row",
  },
  metaLabel: {
    color: ink,
    fontFamily: "Tinos",
    fontSize: fontSizes.meta,
    lineHeight: 1.12,
  },
  metaValue: {
    color: ink,
    fontFamily: "Tinos",
    fontWeight: 700,
    fontSize: fontSizes.meta,
    lineHeight: 1.12,
    marginLeft: 2,
  },
  tech: {
    color: ink,
    fontFamily: "Tinos",
    fontStyle: "italic",
    fontSize: fontSizes.tech,
    lineHeight: 1.12,
    marginLeft: 5.5,
  },
  links: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  bulletRow: {
    flexDirection: "row",
    gap: 6,
    marginTop: 1,
    marginBottom: 2.5,
    paddingLeft: 10,
  },
  bullet: {
    color: ink,
    fontSize: fontSizes.entry,
    lineHeight: 1.12,
    width: 5,
  },
  bulletText: {
    flex: 1,
    fontSize: fontSizes.bulletText,
    lineHeight: 1.16,
  },
  bulletTextRegular: {
    fontFamily: "Tinos",
  },
  bulletTextBold: {
    fontFamily: "Tinos",
    fontWeight: 700,
  },
  bulletTextItalic: {
    fontFamily: "Tinos",
    fontStyle: "italic",
  },
  bulletTextBoldItalic: {
    fontFamily: "Tinos",
    fontWeight: 700,
    fontStyle: "italic",
  },
  inlineRow: {
    flexDirection: "row",
    marginBottom: 1,
    marginLeft: 10,
  },
  inlineLabel: {
    fontFamily: "Tinos",
    fontWeight: 700,
    fontSize: fontSizes.inline,
    lineHeight: 1.12,
  },
  inlineValues: {
    flex: 1,
    fontSize: fontSizes.inline,
    lineHeight: 1.12,
  },
});
