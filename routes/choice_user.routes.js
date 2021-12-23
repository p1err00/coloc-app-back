module.exports = app => {
    const choice_user = require("../controllers/choice_user.controller.js");

    app.post("/choice_user", choice_user.create);

    app.get("/choice_user/:id", choice_user.findAll);

    app.get("/choice_user/:id", choice_user.findById);

    app.put("/choice_user/:choiceID", choice_user.update);

    app.delete("/choice_user/:choiceID/:userID", choice_user.delete);
}