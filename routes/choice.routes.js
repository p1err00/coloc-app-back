module.exports = app => {
    const choice = require("../controllers/choice.controller.js");

    app.post("/choice", choice.create);

    app.get("/choice/:id", choice.findAll);

    app.get("/choice/:id", choice.findById);

    app.put("/choice/:choiceID", choice.update);

    app.delete("/choice/:choiceID", choice.delete);
}