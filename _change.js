const Jimp = require("jimp");

Jimp.read("edinburgh_original.jpg", function (err, image) {
  if (err) {
    console.log(err);
  } else {
    image.write("edinburgh_original.png");
  }
});

// // Read the PNG file and convert it to editable format
// Jimp.read("./static/GFG_IMG.png", function (err, image) {
//     if (err) {

//         // Return if any error
//         console.log(err);
//         return;
//     }

//     // Convert image to JPG and store it to
//     // './output/' folder with 'out.jpg' name
//     image.write("./output/out.jpg");
// });
