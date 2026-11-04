const { ImageKit } = require("@imagekit/nodejs");
const dotenv = require("dotenv");
dotenv.config();

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATEKEY,
});

async function uploadImage(buffer) {
  console.log(buffer);

  const result = await imagekit.files.upload({
    file: buffer.toString("base64"),
    fileName: "image.jpg",
  });

  return result;
}

module.exports = uploadImage;
