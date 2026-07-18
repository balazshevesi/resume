import { Font } from "@react-pdf/renderer";

const fontUrl = (fileName: string) =>
  new URL(`../assets/fonts/${fileName}`, import.meta.url).href;

Font.register({
  family: "Tinos",
  fonts: [
    { src: fontUrl("Tinos-Regular.ttf"), fontWeight: 400 },
    { src: fontUrl("Tinos-Bold.ttf"), fontWeight: 700 },
    {
      src: fontUrl("Tinos-Italic.ttf"),
      fontStyle: "italic",
      fontWeight: 400,
    },
    {
      src: fontUrl("Tinos-BoldItalic.ttf"),
      fontStyle: "italic",
      fontWeight: 700,
    },
  ],
});
