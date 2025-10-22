import process from "node:process";

function parseEnv() {
  console.log(
    Object.entries(process.env)
      .filter(([i]) => i.startsWith("RSS_"))
      .map(([i, j]) => `${i}=${j}`)
      .join("; ")
  );
}

parseEnv();
