// https://nodejs.org/api/buffer.html#class-buffer

const fs = require("fs");
const jpeg = require("jpeg-js");

const buffer_to_file = (buffer, path) => {
  let i = 0;
  let a = "";

  while (i < buffer.length) {
    a += buffer[i++];
    a += "\n";
  }
  fs.writeFileSync(path, a);
};

// var width = 320,
//   height = 180;
var width = 8,
  height = 2;
var frameData = Buffer.alloc(width * height * 4);

var i = 0;
while (i < frameData.length) {
  frameData[i++] = 0xff; // red
  frameData[i++] = 0x00; // green
  frameData[i++] = 0x1a; // blue
}
console.log("Before", frameData);
buffer_to_file(frameData, "image1.txt");

// fs.writeFileSync("image2.jpg", frameData);

// fs.writeFileSync(
//   "image.txt",
//   frameData[0].toString() + frameData[1].toString() + frameData[2].toString()
// );

var rawImageData = {
  data: frameData,
  width: width,
  height: height,
};

var jpegImageData = jpeg.encode(rawImageData, 0);
console.log("After", jpegImageData);
buffer_to_file(jpegImageData.data, "image2.txt");

// write to file
fs.writeFileSync("image.jpg", jpegImageData.data);
