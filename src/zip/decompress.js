import { createGunzip } from "node:zlib";
import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs";

const decompress = async () => {
  await pipeline(
    createReadStream("archive.gz"),
    createGunzip(),
    createWriteStream("fileToCompress.txt")
  );
};

decompress();
