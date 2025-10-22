import { createReadStream } from "node:fs";

const read = async () => {
  const readStream = createReadStream("src/streams/files/fileToRead.txt", {
    encoding: "utf8",
  });

  readStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  readStream.on("end", () => {
    process.stdout.write("\n");
  });
};

await read();
