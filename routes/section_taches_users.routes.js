module.exports = app => {
    const section_taches_users = require("../controllers/section_taches_users.controller.js");

    // Post
    app.post("/section_taches_users", section_taches_users.create);

    // Update
    app.put("/section_taches_users/:id", section_taches_users.update);

    // Delete
    app.delete("/section_taches_users/:id", section_taches_users.delete);

    // Get all by id_user
    app.get("/section_taches_users/getAllByIdUser/:idUser", section_taches_users.getAllByIdUser);

    // Get all by hash_section
    app.get("/section_taches_users/getAllByHash/:hash", section_taches_users.getAllByHash);

    // Get all by id_section
    app.get("/section_taches_users/getAllByIdSection/:id", section_taches_users.getAllByIdSection);

    // Get all by is_do & id_user
    app.get("/section_taches_users/getAllByIsDoAndIdUser/:idUser", section_taches_users.getAllByIsDoAndIdUser);

    // Get all by date_start and idUser
    app.get("/section_taches_users/getAllByDateStartAndIdUser/:date/:idUser", section_taches_users.getAllByDateStartAndIdUser);

    // Get all by date_end and idUser
    app.get("/section_taches_users/getAllByDateEndAndIdUser/:date/:idUser", section_taches_users.getAllByDateEndAndIdUser);
}

// TODO à tester
