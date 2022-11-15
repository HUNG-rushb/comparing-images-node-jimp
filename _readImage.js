const fs = require("fs");
var jpeg = require("jpeg-js");

// var jpegData = fs.readFileSync("image.jpg");
var jpegData = fs.readFileSync("london.jpg");
console.log(jpegData);
// var rawImageData = jpeg.decode(jpegData, { useTArray: true });
var rawImageData = jpeg.decode(jpegData);
console.log(rawImageData);

var babyImageData = jpeg.encode(rawImageData, 0);
console.log(babyImageData);
