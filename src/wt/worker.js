import { parentPort } from "node:worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  parentPort.on("message", (i) => {
    const output = nthFibonacci(i);
    parentPort.postMessage({ status: "resolved", data: output });
  });
};

sendResult();
