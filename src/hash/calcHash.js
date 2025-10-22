import fs from "fs";
import crypto from "crypto";

const calculateHash = async () => {
  new Promise((resolve) => {
    const stream = fs.createReadStream(
      "src/hash/files/fileToCalculateHashFor.txt"
    );
    const output = crypto.createHash("sha256");

    stream.on("data", (chunk) => {
      output.update(chunk);
    });

    stream.on("end", () => {
      const f = output.digest("hex");
      console.log(f);
      resolve(f);
    });
  });
};

await calculateHash();
