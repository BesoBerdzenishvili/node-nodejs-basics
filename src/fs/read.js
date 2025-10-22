import path from "path";
import { promises as fs } from "fs";

const read = async () => {
  const readPath = path.join("src/fs/files", "fileToRead.txt");

  const hasRead = await fs
    .access(readPath)
    .then(() => true)
    .catch(() => false);
  if (!hasRead) throw new Error("FS operation failed");

  const print = await fs.readFile(readPath, "utf-8");
  console.log(print);
};

await read();
