
module.exports = app => {
    const section_events_item = require("../controllers/section_events_item.controller.js");

    // Post
    app.post("/section_events_item", section_events_item.create);

    // Put
    app.put("/section_events_item/:id", section_events_item.update);

    // Delete
    app.delete("/section_events_item/:id", section_events_item.delete);

    // Get all by is_do and idColoc
    app.get("/section_events_item/getAllByIsDoAndIdColoc/:idColoc", section_events_item.getAllByIsDoAndIdColoc)

    // Get all by is_multiple_event 
    app.get("/section_events_item/getAllByIsMultipleEvent/:idColoc", section_events_item.getAllByIsMultpipleEvent);

    // Get all by have_external_user
    app.get("/section_events_item/getAllByHaveExternalUser/:idColoc", section_events_item.getAllByHaveExternalUser);

    // Get all by idColoc
    app.get("/section_events_item/getAllByIdColoc/:idColoc", section_events_item.getAllByIdColoc);

    // Get by id
    app.get("/section_events_item/getById/:id", section_events_item.getById);

    // Get by hash
    app.get("/section_events_item/getByHash/:hash", section_events_item.getByHash);

    // Get by nom
    app.get("/section_events_item/getByNom/:nom", section_events_item.getByNom);

    // Get all by categorie and idColoc
    app.get("/section_events_item/getAllByCategorie/:categorie/:idColoc", section_events_item.getAllByCategorieAndIdColoc);

    //Get all by date_start and idColoc
    app.get("/section_events_item/getAllByDateStartAndIdColoc/:date/:idColoc", section_events_item.getAllByDateStartAndIdColoc);

    // Get all by start_end
    app.get("/section_events_item/getAllByDateEndAndIdColoc/:date/:idColoc", section_events_item.getAllByDateEndAndIdColoc);
}