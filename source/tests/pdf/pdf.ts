import { PDFDocument } from "pdf-lib";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

export const inspectPdf = async (bytes: Uint8Array) => {
  const document = await PDFDocument.load(bytes, { updateMetadata: false });
  const pdfJsDocument = await getDocument({ data: new Uint8Array(bytes) }).promise;
  const textPages: string[] = [];

  for (let pageNumber = 1; pageNumber <= pdfJsDocument.numPages; pageNumber++) {
    const page = await pdfJsDocument.getPage(pageNumber);
    const content = await page.getTextContent();

    textPages.push(
      content.items
        .map((item) => ("str" in item ? item.str : ""))
        .join(" "),
    );
  }

  return {
    author: document.getAuthor(),
    pageCount: document.getPages().length,
    subject: document.getSubject(),
    tagged: new TextDecoder().decode(bytes).includes("/StructTreeRoot"),
    text: textPages.join("\n"),
    title: document.getTitle(),
  };
};
