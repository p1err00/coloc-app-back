module.exports = app => {
    const section_events = require("../controllers/section_events.controller.js");

    // Post
    app.post("/section_events", section_events.create);

    // Put
    app.put("/section_events/:id", section_events.update);

    // Delete
    app.delete("/section_events/:id", section_events.delete);

    // Get all by idColoc
    app.get("/section_events/getAllByIdColoc/:idColoc", section_events.getAllByIdColoc);

    // Get by hash_section
    app.get("/section_events/getAllByHashSection/:hash", section_events.getAllByHashSection);

    // Get by nom
    app.get("/section_events/getByNom/:nom", section_events.getByNom);
}