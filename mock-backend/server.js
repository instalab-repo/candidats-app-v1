const http = require("http");

const candidats = [
  { id: "1", name: "Alice Martin",  position: "Frontend Developer", status: "In progress" },
  { id: "2", name: "Bob Dupont",    position: "Backend Developer",  status: "Accepted" },
  { id: "3", name: "Chloé Bernard", position: "Data Analyst",       status: "Rejected" },
];

const server = http.createServer((req, res) => {
  // Temporary 2s delay to demonstrate the loading state
  setTimeout(() => {
    res.setHeader("Content-Type", "application/json");

    if (req.url === "/candidats") {
      res.statusCode = 200;
      res.end(JSON.stringify(candidats));
      return;
    }

    const match = req.url.match(/^\/candidats\/(.+)$/);
    if (match) {
      const candidat = candidats.find((c) => c.id === match[1]);
      if (!candidat) {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: "Not found" }));
        return;
      }
      res.statusCode = 200;
      res.end(JSON.stringify(candidat));
      return;
    }

    res.statusCode = 404;
    res.end(JSON.stringify({ error: "Unknown route" }));
  }, 2000);
});

server.listen(4000, () => console.log("Mock backend on http://localhost:4000"));
