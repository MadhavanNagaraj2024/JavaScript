import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createserver(app);

const io = new Server(server);

const PORT = 9000;

app.get("/", async () => {
  res.status(200).send({ message: "App is Running...!" });
});

app.listen(PORT, () => {
  console.log(`App Working on ${PORT}...!`);
});
