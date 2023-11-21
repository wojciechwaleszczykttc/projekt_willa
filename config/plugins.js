// const crypto = require("crypto");
module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  // "users-permissions": {
  //   config: {
  //     jwtSecret: env("JWT_SECRET") || crypto.randomBytes(16).toString("base64"),
  //   },
  // },
});
