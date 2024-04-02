require("dotenv").config()

module.exports = {
  s3: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    endpoint: process.env.ENDPOINT,
    bucket: process.env.BUCKET,
  },
  suffix: {
    small: '_small.jpg',
    full: '_full.jpg'
  }
};
