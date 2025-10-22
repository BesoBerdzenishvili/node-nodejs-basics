import path from "path";
import fs from "fs";

const create = async () => {
  const filePath = path.join("src/fs/files", "fresh.txt");

  try {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, "I am fresh and young", { flag: "wx" });
  } catch {
    throw new Error("FS operation failed");
  }
};

await create();
