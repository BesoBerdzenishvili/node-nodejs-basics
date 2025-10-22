import path from "node:path";
import { createServer } from "node:http";
import { release, version } from "node:os";

import "./files/c.cjs";

const random = Math.random();

const unknownObject =
  random > 0.5
    ? await import("./files/a.json", { with: { type: "json" } })
    : await import("./files/b.json", { with: { type: "json" } });

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(
  `Path to current directory is ${new URL(".", import.meta.url).pathname}`
);

const myServer = createServer((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
