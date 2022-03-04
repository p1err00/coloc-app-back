module.exports = app => {
    const section_taches_item = require("../controllers/section_taches_item.controller.js");

    // Post
    app.post("/section_taches_item", section_taches_item.create);

    // Put
    app.put("/section_taches_item/:id", section_taches_item.update);

    // Delete
    app.delete("/section_taches_item/:id", section_taches_item.delete);

    // Get All taches items by id_section 
    app.get("/section_taches_item/getAllByIdSection/:id", section_taches_item.getAllByIdSection);

    // Get all by is_do & id_section
    app.get("/section_taches_item/getAllByIsDoAndIdSection/:id", section_taches_item.getAllByIsDoAndIdSection);

    // get all by is_multiple_tache & id_section
    app.get("/section_taches_item/getAllByIsMultipleTacheAndIdSection/:id", section_taches_item.getAllByIsMultipleTacheAndIdSection);

    // Get by id
    app.get("/section_taches_item/getById/:id", section_taches_item.getById);

    // Get by hash_tache
    app.get("/section_taches_item/getByHash/:hash", section_taches_item.getByHash);

    // Get by nom
    app.get("/section_taches_item/getByNom/:nom", section_taches_item.getByNom);

    // Get all by categorie & id_section
    app.get("/section_taches_item/getAllByCategorieAndIdSection/:categorie/:idColoc", section_taches_item.getAllByCategorieAndIdSection);

    // Get all by date_start and id_section
    app.get("/section_taches_item/getAllByDateStartAndIdSection/:date/:id", section_taches_item.getAllByDateStartAndIdSection);

    // Get all by date_end and id_section
    app.get("/section_taches_item/getAllByDateEndAndIdSection/:date/:id", section_taches_item.getAllByDateEndAndIdSection);
}

// TODO à tester
