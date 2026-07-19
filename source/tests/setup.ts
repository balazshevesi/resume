import { readFile } from "node:fs/promises";
import { afterAll } from "vitest";

const nativeFetch = globalThis.fetch;

globalThis.fetch = async (input, init) => {
  const url = input instanceof Request ? input.url : input.toString();

  if (url.startsWith("file:")) {
    return new Response(await readFile(new URL(url)));
  }

  return nativeFetch(input, init);
};

afterAll(() => {
  globalThis.fetch = nativeFetch;
});
