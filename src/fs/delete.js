import path from "path";
import { promises as fs } from "fs";

const remove = async () => {
  const deletePath = path.join("src/fs/files", "fileToRemove.txt");

  const hasDelete = await fs
    .access(deletePath)
    .then(() => true)
    .catch(() => false);

  if (!hasDelete) throw new Error("FS operation failed");

  await fs.unlink(deletePath);
};

await remove();
