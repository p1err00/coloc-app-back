module.exports = app =>{
    const evenements = require("../controllers/evenements.controller.js");

    app.post("/evenements", evenements.create);

    app.get("/evenements", evenements.findAll);

    app.get("/evenements/:eventID", evenements.findOne);

    app.put("/evenements/:eventID", evenements.update);

    app.delete("/evenements/:eventID", evenements.delete);

    app.delete("/evenements", evenements.deleteAll);
};