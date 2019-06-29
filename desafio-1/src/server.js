import express from "express";

const server = new express();
server.listen(3333);

server.use(express.json());

const projects = [];
var requisitionsNumber = 0;

// Glogal middleware
server.use("/", (req, res, next) => {
  console.log(`Número de requisições: ${++requisitionsNumber}`);
  return next();
});

// Middleware for routes that use :id
const projectExists = (req, res, next) => {
  const project = projects[req.params.id];
  if (!project) {
    return res.send(404).json({ error: "Project not found" });
  }

  req.project = project;
  req.projectId = req.params.id;
  return next();
};

server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.get("/projects/:id", projectExists, (req, res) => {
  return res.json(req.project);
});

server.post("/projects", (req, res, next) => {
  projects.push(req.body);

  return res.json(projects);
});

server.put("/projects/:id", projectExists, (req, res, next) => {
  projects[req.projectId] = req.project;

  return res.json(projects[req.projectId]);
});

server.delete("/projects/:id", projectExists, (req, res, next) => {
  projects.splice(req.projectId, 1);

  return res.json({ ok: true });
});

server.post("/projects/:id/tasks", projectExists, (req, res, next) => {
  const project = projects[req.projectId];
  project.tasks.push(req.body);

  projects[req.projectId] = project;

  return res.json(projects);
});
