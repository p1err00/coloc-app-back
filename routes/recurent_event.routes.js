module.exports = app => {
    const recurent_event = require("../controllers/recurent_event.controller.js");

    app.post("/recurent_event", recurent_event.create);

    app.get("/recurent_event/:colocID", recurent_event.getAll);

    app.put("/recurent_event/:recurent_eventID", recurent_event.update);

    app.delete("/recurent_event/:recurent_eventID", recurent_event.delete);
}