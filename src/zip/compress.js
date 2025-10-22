import { createGzip } from "node:zlib";
import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs";

const compress = async () => {
  await pipeline(
    createReadStream("src/zip/files/fileToCompress.txt"),
    createGzip(),
    createWriteStream("archive.gz")
  );
};

await compress();
