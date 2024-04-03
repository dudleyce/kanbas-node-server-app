import Database from "../Database/index.js";
export default function CourseRoutes(app) {

    app.get("/api/courses/:courseId", (req, res) => {
        const { courseId } = req.params;
        const course = Database.courses.find((c) => c._id === courseId);
        if (!course) {
          res.status(404).send("Course not found");
          return;
        }
        res.send(course);
      });
    
    app.put("/api/courses/:courseId", (req, res) => {
        const { courseId } = req.params;
        const course = req.body;
        Database.courses = Database.courses.map((c) =>
          c._id === courseId ? { ...c, ...course } : c
        );
        res.sendStatus(204);
      });
    
    app.delete("/api/courses/:courseId", (req, res) => {
        const { courseId } = req.params;
        Database.courses = Database.courses.filter((c) => c._id !== courseId);
        res.sendStatus(204);
      });
    
    app.post("/api/courses", (req, res) => {
        const course = { ...req.body,
          _id: new Date().getTime().toString() };
        Database.courses.push(course);
        res.send(course);
      });
    
  app.get("/api/courses", (req, res) => {
    const courses = Database.courses;
    res.send(courses);
  });
}
