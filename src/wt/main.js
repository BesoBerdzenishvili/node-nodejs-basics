import { cpus } from "node:os";
import { Worker } from "node:worker_threads";

const performCalculations = async () => {
  const output = [];
  const cpusLength = cpus().length;

  const add = (i, indx) => {
    return new Promise((resolve) => {
      const fibonacci = new Worker("./src/wt/worker.js");
      fibonacci.on("message", (j) => {
        output[indx] = j;
        resolve();
      });
      fibonacci.on("error", () => {
        output[indx] = { status: "error", data: null };
        resolve();
      });
      fibonacci.postMessage(i);
    });
  };

  const arr = [];
  for (let i = 0; i < cpusLength; i++) {
    arr.push(add(10 + i, i));
  }
  await Promise.all(arr);
  console.log(output);
};

await performCalculations();
