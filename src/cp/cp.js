import { spawn } from "node:child_process";

const spawnChildProcess = async (args) => {
  const spawnProcess = spawn("node", ["./src/cp/files/script.js", ...args], {
    stdio: ["pipe", "pipe", "inherit"],
  });

  spawnProcess.stdin.pipe(spawnProcess.stdin);

  spawnProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(["IU", "Sunmi", "V", "PSY", "Hanni", "D.O."]);
