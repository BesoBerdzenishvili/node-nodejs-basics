import { Transform } from "node:stream";

const transform = async () => {
  const transformed = new Transform({
    transform(chunk, encoding, callback) {
      const output = chunk.toString().split("").reverse().join("");
      callback(null, output);
    },
  });

  process.stdin.pipe(transformed).pipe(process.stdout);
};

await transform();
