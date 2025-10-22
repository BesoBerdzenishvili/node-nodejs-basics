import { createWriteStream } from "node:fs";

const write = async () => {
  const writeStream = createWriteStream("src/streams/files/fileToWrite.txt", {
    encoding: "utf-8",
  });

  process.stdin.pipe(writeStream);
};

await write();
