const fs = require("fs");
const PNG = require("pngjs").PNG;
const pixelmatch = require("pixelmatch");

const img1 = PNG.sync.read(fs.readFileSync("london.png"));
const img2 = PNG.sync.read(fs.readFileSync("edinburgh_original.png"));

const { width, height } = img1;
const diff = new PNG({ width, height });

pixelmatch(img1.data, img2.data, diff.data, width, height, { threshold: 0.1 });

fs.writeFileSync("diff.png", PNG.sync.write(diff));
