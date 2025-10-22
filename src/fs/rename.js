import path from "path";
import { promises as fs } from "fs";

const rename = async () => {
  const filesPath = path.join("src/fs/files");
  const wrongName = path.join(filesPath, "wrongFilename.txt");
  const properName = path.join(filesPath, "properFilename.md");

  const hasWrong = await fs
    .access(wrongName)
    .then(() => true)
    .catch(() => false);
  const hasProper = await fs
    .access(properName)
    .then(() => true)
    .catch(() => false);

  if (!hasWrong || hasProper) throw new Error("FS operation failed");

  await fs.rename(wrongName, properName);
};

await rename();
