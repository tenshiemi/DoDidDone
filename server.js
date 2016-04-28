const appServer = require("./webpack-server");
const apiServer = require("./express-server");

const PORT = process.env.PORT || 8080;
const PROD = process.env.NODE_ENV === "production";

if (PROD) {
  apiServer(8080);
} else {
  apiServer(8080);
  appServer(3000);
}
