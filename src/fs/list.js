import path from "path";
import { promises as fs } from "fs";

const list = async () => {
  const filesPath = path.join("src/fs/files");

  const hasList = await fs
    .access(filesPath)
    .then(() => true)
    .catch(() => false);

  if (!hasList) throw new Error("FS operation failed");
  const list = await fs.readdir(filesPath);

  console.log(list);
};

await list();
