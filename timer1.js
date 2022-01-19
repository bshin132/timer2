let argv = process.argv;
argv = argv.map(Number);


for (let num of argv) {
  if (num !== NaN && num >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, num * 1000);
  }
}