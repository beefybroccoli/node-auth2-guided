require("dotenv").config();
const {PORT} = require("./config/index.js");

const server = require("./api/server.js");

server.listen(PORT, () => console.log(`\n** Running on port ${PORT} **\n`));
