import Database from "../Database/index.js";

export default function AssignmentRoutes(app) {


    app.get("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const assignment = Database.assignments
          .find((a) => a._id === assignmentId);
        if (!assignment) {
          res.status(404).send("Assignment not found");
          return;
        }
        res.send(assignment);
      });
    
    app.put("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const assignment = req.body;
        Database.assignments = Database.assignments.map((a) =>
          a._id === assignmentId ? { ...a, ...assignment } : a
        );
        res.sendStatus(204);
      });
    
    app.delete("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        Database.assignments = Database.assignments
          .filter((a) => a._id !== assignmentId);
        res.sendStatus(204);
      });
    
    app.post("/api/courses/:courseId/assignments", (req, res) => {
      const {courseId} = req.params;
        const assignment = { ...req.body,
          course: courseId,
          _id: new Date().getTime().toString() };
        Database.assignments.push(assignment);
        res.send(assignment);
      });
    
  app.get("/api/courses/:courseId/assignments", (req, res) => {
    const {courseId} = req.params;
    const assignments = Database.assignments.filter((a) => a.course === courseId);
    res.send(assignments);
  });
}