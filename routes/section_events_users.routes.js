module.exports = app => {
    const section_events_users = require("../controllers/section_events_users.controller.js");

    // Post 
    app.post("/section_events_users", section_events_users.create);

    // Put 
    app.put("/section_events_users/:id", section_events_users.update);

    // Delete   
    app.delete("/section_events_users/:id", section_events_users.delete);

    // Get all by idUser
    app.get("/section_events_users/getAllByIdUser/:idUser", section_events_users.getAllByIdUser);

    // Get all by hashSection
    app.get("/section_events_users/getAllByHashSection/:hash", section_events_users.getAllByHashSection);

    // Get all by hashEvent
    app.get("/section_events_users/getAllByHashEvent/:hash", section_events_users.getAllByHashEvent);

    // Get all by is_do and idUser
    app.get("/section_events_users/getAllByIsDoAndIdUser/:idUser", section_events_users.getAllByIsDoAndIdUser);

    // Get by id
    app.get("/section_events_users/getById/:id", section_events_users.getById);

    // Get all by specific start_date and idUser
    app.get("/section_events_users/getAllByStartDateAndIduser/:date/:idUser", section_events_users.getAlByStartDateAndIdUser);

    // Get all by specific end_date and idUser
    app.get("/section_events_users/getAllByEndDateAndIdUser/:date/:idUser", section_events_users.getAllByEndDateAndIdUser);
}