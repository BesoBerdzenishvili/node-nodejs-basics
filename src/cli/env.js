import fs from "fs";
import path from "path";

function loadEnvs() {
  const envPath = path.resolve(process.cwd(), ".env");
  const envContent = fs.readFileSync(envPath, "utf8");

  envContent.split("\n").forEach((i) => {
    i = i.trim();

    const equalIndex = i.indexOf("=");
    if (equalIndex === -1) {
      return;
    }

    const envKey = i.substring(0, equalIndex).trim();
    let value = i.substring(equalIndex + 1).trim();

    if (!process.env[envKey]) {
      process.env[envKey] = value;
    }
  });
}

const parseEnv = () => {
  loadEnvs();

  const rssVars = Object.keys(process.env)
    .filter((i) => i.startsWith("RSS_"))
    .map((i) => `${i}=${process.env[i]}`)
    .join("; ");

  console.log(rssVars);
};

parseEnv();
