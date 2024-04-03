import Database from "../Database/index.js";
function ModuleRoutes(app) {
  
  app.put("/api/modules/:moduleId", (req, res) => {
    const { moduleId } = req.params;
    const moduleIndex = Database.modules.findIndex(
      (m) => m._id === moduleId);
    Database.modules[moduleIndex] = {
      ...Database.modules[moduleIndex],
      ...req.body
    };
    res.sendStatus(204);
  });

  app.delete("/api/modules/:moduleId", (req, res) => {
    const { moduleId } = req.params;
    Database.modules = Database.modules.filter((m) => m._id !== moduleId);
    res.sendStatus(200);
  });

  
  app.post("/api/courses/:courseId/modules", (req, res) => {
    const { courseId } = req.params;
    const newModule = {
      ...req.body,
      course: courseId,
      _id: new Date().getTime().toString(),
    };
    Database.modules.push(newModule);
    res.send(newModule);
  });

  app.get("/api/courses/:courseId/modules", (req, res) => {
    const { courseId } = req.params;
    const modules = Database.modules.filter((m) => m.course === courseId);
    res.send(modules);
  });
}
export default ModuleRoutes;