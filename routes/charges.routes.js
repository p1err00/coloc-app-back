module.exports = app => {
    const charges = require("../controllers/charges.controller.js");

    app.post("/charges", charges.create);

    app.get("/charges/:userID", charges.findAll);

    app.get("/charges/:userID/:chargesID", charges.findById);

    app.put("/charges/:chargesID", charges.update);

    app.delete("/charges/:chargesID", charges.delete);
}