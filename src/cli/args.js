const parseArgs = () => {
  const arr = process.argv.slice(2);

  let output = "";
  for (let i = 0; i < arr.length; i += 2) {
    const name = arr[i].slice(2);
    const argument = arr[i + 1];
    output += `${name} is ${argument}, `;
  }

  console.log(output.slice(0, output.length - 2));
};

parseArgs();
