import express from "express";
import index from "./router/index";

const app = express();

const port = 3002;

app.use("/", index);

const hostname = "10.120.75.224";
app.listen(port,hostname, () => console.log(`listening on port ${port}!`));