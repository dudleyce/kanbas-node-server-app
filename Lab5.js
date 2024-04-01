
const assignment = {
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  };
const module = {
    id: 1, name: "NodeJS",
    description: "Learning about NodeJS",
    course: "Web Development",
}

const todos = [
    { id: 1, title: "Task 1", description: "Complete Task 1", due:  "2021-09-09", completed: false },
    { id: 2, title: "Task 2", description: "Complete Task 2", due:  "2021-09-16",completed: true },
    { id: 3, title: "Task 3", description: "Complete Task 3", due:  "2021-09-23",completed: false },
    { id: 4, title: "Task 4", description: "Complete Task 4", due:  "2021-09-30",completed: true },
  ];
  
  

const Lab5 = (app) => {

  


  app.get("/a5/todos/:id/title/:title", (req, res) => {
    const { id, title } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    todo.title = title;
    res.json(todos);
  });


  app.delete("/a5/todos/:id", (req, res) => {
    const { id } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    if (!todo) {
      res.status(404)
        .json({ message: `Unable to delete Todo with ID ${id}` });
      return;
    }
    todos.splice(todos.indexOf(todo), 1);
    res.sendStatus(200);
  });
  
  
    app.put("/a5/todos/:id", (req, res) => {
    const { id } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    if (!todo) {
      res.status(404)
        .json({ message: `Unable to update Todo with ID ${id}` });
      return;
    }
    todo.title = req.body.title;
    todo.description = req.body.description;
    todo.due = req.body.due;
    todo.completed = req.body.completed;
    res.sendStatus(200);
  });


  app.post("/a5/todos", (req, res) => {
    const newTodo = {
      ...req.body,
      id: new Date().getTime(),
    };
    todos.push(newTodo);
    res.json(newTodo);
  });



    app.get("/a5/todos/:id", (req, res) => {
      const { completed } = req.query;
      if (completed !== undefined) {
        const completedBool = completed === "true";
        const completedTodos = todos.filter(
          (t) => t.completed === completedBool);
        res.json(completedTodos);
        return;
      }
      res.json(todos);
      });

    app.get("/a5/todos", (req, res) => {
        res.json(todos);
      });    

    app.get("/a5/assignment", (req, res) => {
        res.json(assignment);
      });
      app.get("/a5/assignment/title", (req, res) => {
        res.json(assignment.title);
      }); 
      app.get("/a5/assignment/title/:newTitle", (req, res) => {
        const { newTitle } = req.params;
        assignment.title = newTitle;
        res.json(assignment);
      });

      app.get("/a5/module", (req, res) => {
        res.json(module);
      });
      app.get("/a5/module/name", (req, res) => {
        res.json(module.name);
      }); 
       

    app.get("/a5/welcome", (req, res) => {
      res.send("Welcome to Assignment 5");
    });
    app.get("/a5/add/:a/:b", (req, res) => {
        const { a, b } = req.params;
        const sum = parseInt(a) + parseInt(b);
        res.send(sum.toString());
      });
      app.get("/a5/subtract/:a/:b", (req, res) => {
        const { a, b } = req.params;
        const sum = parseInt(a) - parseInt(b);
        res.send(sum.toString());

        
      });

      app.get("/a5/multiply/:a/:b", (req, res) => {
        const { a, b } = req.params;
        const ans = parseInt(a) * parseInt(b);
        res.send(ans.toString());

        
      });

      app.get("/a5/divide/:a/:b", (req, res) => {
        const { a, b } = req.params;
        const ans = parseInt(a) / parseInt(b);
        res.send(ans.toString());

        
      });

    app.get("/a5/calculator", (req, res) => {
    const { a, b, operation } = req.query;
    let result = 0;
    switch (operation) {
      case "add":
        result = parseInt(a) + parseInt(b);
        break;
      case "subtract":
        result = parseInt(a) - parseInt(b);
        break;
      default:
        result = "Invalid operation";
    }
    res.send(result.toString());

      
    
  })};
  export default Lab5;