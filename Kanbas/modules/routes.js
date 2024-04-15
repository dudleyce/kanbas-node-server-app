import * as dao from "./dao.js";
export default function ModuleRoutes(app) {
    const addModule = async (req, res) => {
        const { courseId } = req.params;
        const module = await dao.addModule({ ...req.body, course: courseId });
        res.json(module);
    };
    const deleteModule = async (req, res) => {
        const status = await dao.deleteModule(req.params.moduleId);
        res.json(status);
    };
    const findModulesForCourse = async (req, res) => {
        const { courseId } = req.params;
        const modules = await dao.findModulesForCourse(courseId);
        res.json(modules);
        return;
    };
    const updateModule = async (req, res) => {
        const { moduleId } = req.params;
        const status = await dao.updateModule(moduleId, req.body);
        res.json(status);
    };
    app.post("/api/courses/:courseId/modules", addModule);
    app.delete("/api/modules/:moduleId", deleteModule);
    app.get("/api/courses/:courseId/modules", findModulesForCourse);
    app.put("/api/modules/:moduleId", updateModule);
}