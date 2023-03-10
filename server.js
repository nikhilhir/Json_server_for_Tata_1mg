require("dotenv").config();
const jsonServer = require("json-server");
const server = jsonServer.create();
const PORT = process.env.PORT || 3000;
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);
//server.use("/api", router);
server.listen(PORT, () => console.log("Running on port 3000"));
