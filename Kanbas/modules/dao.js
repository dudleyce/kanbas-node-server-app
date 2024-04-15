import model from "./model.js";
export const addModule = (module) => {
    delete module._id
    return model.create(module);
}
export const findModulesForCourse = (courseId) => model.find({ course: courseId });
export const updateModule = (moduleId, module) => model.updateOne({ id: moduleId }, { $set: module });
export const deleteModule = (moduleId) => model.deleteOne({ id: moduleId });