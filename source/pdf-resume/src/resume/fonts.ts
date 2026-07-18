import { Font } from "@react-pdf/renderer";

const fontUrl = (fileName: string) =>
  new URL(`../assets/fonts/${fileName}`, import.meta.url).href;

Font.register({
  family: "Times New Roman",
  fonts: [
    { src: fontUrl("Times New Roman.ttf"), fontWeight: 400 },
    { src: fontUrl("Times New Roman Bold.ttf"), fontWeight: 700 },
    {
      src: fontUrl("Times New Roman Italic.ttf"),
      fontStyle: "italic",
      fontWeight: 400,
    },
    {
      src: fontUrl("Times New Roman Bold Italic.ttf"),
      fontStyle: "italic",
      fontWeight: 700,
    },
  ],
});
