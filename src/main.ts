import {
  WebSocketClient as Client,
  WebSocketServer as Server,
} from "./deps.ts";

const wss = new Server(8080);

const list: Client[] = [];

const SECOND = 1000;

setInterval(() => {
  const date = new Date().toUTCString();

  list.forEach((client) => client.send(date));
}, SECOND);

wss.on("connection", (ws: Client) => list.push(ws));

console.log("Server Start at 8080");
