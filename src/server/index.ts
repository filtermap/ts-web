import * as path from "path";
import express from "express";

const app = express();

const staticPath = path.join(__dirname, "..", "client");
app.use("/", express.static(staticPath));

const port = 3000;
app.listen(port, (): void => console.log(`listening on port ${port}`));
