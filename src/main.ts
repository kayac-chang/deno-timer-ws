import {
  WebSocketClient as Client,
  WebSocketServer as Server,
  parse,
} from "./deps.ts";

const PORT = parse(Deno.args).port || 8080;
const SECOND = 1000;

const wss = new Server(PORT);

const list: Client[] = [];

setInterval(() => {
  const date = new Date().toUTCString();

  list.forEach((client) => client.send(date));
}, SECOND);

wss.on("connection", (ws: Client) => list.push(ws));

console.log(`Server Start at ${PORT}`);
