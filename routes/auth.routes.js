module.exports = app => {
    const auth = require("../controllers/auth.controller.js");

    app.post("/auth/signin", auth.signin);

    app.post("/auth/register-user", auth.create);

    app.get("/auth", auth.getAll);

    app.get("/auth/user-profil/:id", auth.getUserById);

    app.put("/auth/update-user/:id", auth.update);

    app.delete("/auth/delete-user/:id", auth.delete);
}