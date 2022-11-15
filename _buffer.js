// const bufferImage = require("buffer-image");

// (async () => {
//   const image = await bufferImage(Buffer.from("Hello World"));

//   const result = await bufferImage.from(image);

//   console.log(result);
//   console.log(result.toString());
//   //=> "Hello World"
// })();

// var visualize = require("visualize-buffer");
// var random = require("crypto").randomBytes;

// document.appendChild(visualize(random(32), 256));

const fs = require("fs");

const func = async () => {
  const buffer64 = await fs.promises.readFile("image.jpg", {
    encoding: "hex",
  });

  //   console.log(buffer64);
  fs.writeFileSync("image.txt", buffer64);

  //   return buffer64;
};

func();
