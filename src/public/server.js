const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/* =========================
   USUÁRIOS
========================= */

let users = [
  "Você",
  "Ricardo Neto",
  "João Gabriel",
  "Ana Clara",
  "Carlos Eduardo",
  "Fernanda Lima"
];

/* =========================
   GRAFO DE AMIZADES
========================= */

let graph = {
  "Você": { "Ricardo Neto": 2, "João Gabriel": 5 },
  "Ricardo Neto": { "Você": 2, "Ana Clara": 3 },
  "João Gabriel": { "Você": 5, "Carlos Eduardo": 1 },
  "Ana Clara": { "Ricardo Neto": 3, "Fernanda Lima": 2 },
  "Carlos Eduardo": { "João Gabriel": 1 },
  "Fernanda Lima": { "Ana Clara": 2 }
};

/* =========================
   API USUÁRIOS
========================= */

app.get("/users", (req, res) => {
  res.json(users);
});

/* =========================
   ADICIONAR AMIZADE
========================= */

app.post("/friend", (req, res) => {
  const { from, to, weight } = req.body;

  if (!graph[from]) graph[from] = {};
  if (!graph[to]) graph[to] = {};

  graph[from][to] = weight;
  graph[to][from] = weight;

  res.json({ message: "Amizade criada!" });
});

/* =========================
   DIJKSTRA NO SERVIDOR
========================= */

function dijkstra(start, end) {

  let dist = {};
  let prev = {};
  let visited = new Set();

  for (let node in graph) {
    dist[node] = Infinity;
    prev[node] = null;
  }

  dist[start] = 0;

  while (true) {

    let closest = null;

    for (let node in dist) {
      if (!visited.has(node)) {
        if (closest === null || dist[node] < dist[closest]) {
          closest = node;
        }
      }
    }

    if (!closest) break;
    if (closest === end) break;

    visited.add(closest);

    for (let neighbor in graph[closest]) {

      let newDist = dist[closest] + graph[closest][neighbor];

      if (newDist < dist[neighbor]) {
        dist[neighbor] = newDist;
        prev[neighbor] = closest;
      }

    }
  }

  let path = [];
  let current = end;

  while (current) {
    path.unshift(current);
    current = prev[current];
  }

  return {
    path,
    distance: dist[end]
  };
}

/* =========================
   API DIJKSTRA
========================= */

app.get("/route", (req, res) => {
  const { from, to } = req.query;

  const result = dijkstra(from, to);

  res.json(result);
});

/* =========================
   START SERVER
========================= */

app.listen(3000, () => {
  console.log("🚀 Servidor rodando em http://localhost:3000");
});