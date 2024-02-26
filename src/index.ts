import express, { Express } from "express";
import cors from "cors";
import { port } from "../config/constants";
import morgan from "morgan";
import fs from "fs";
import path from "path";
const app: Express = express();
var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});

app.use(cors());
app.use(express.json());
app.use(morgan("combined", { stream: accessLogStream }));



app.listen(port, () => console.log("listening on port " + port));
