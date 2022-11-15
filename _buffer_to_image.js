// https://medium.com/@divinehycenth8/convert-a-base64-data-into-an-image-in-node-js-d82136576e35
const fs = require("fs");
// Reads file in form buffer => <Buffer ff d8 ff db 00 43 00 ...
const buffer = fs.readFileSync("image.jpg");
console.log(buffer);
// Pipes an image with "new-path.jpg" as the name.
fs.writeFileSync("image2.jpg", buffer);
