import path from "path";
import { promises as fs } from "fs";

const copy = async () => {
  const original = path.join("src", "fs", "files");
  const copy = path.join("src", "fs", "files_copy");

  const hasOriginal = await fs
    .access(original)
    .then(() => true)
    .catch(() => false);
  const hasCopy = await fs
    .access(copy)
    .then(() => true)
    .catch(() => false);

  if (hasCopy || !hasOriginal) throw new Error("FS operation failed");

  await fs.cp(original, copy, { recursive: true });
};

await copy();
