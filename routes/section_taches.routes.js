module.exports = app => {
    const section_taches = require("../controllers/section_taches.controller.js");

    // Get all by id user where id_user = hash_section
    app.get("/section_taches/getAllByIdUser/:idUser", section_taches.getAllByIdUser);

    // Get by hash
    app.get("/section_taches/getAllByHash/:hash", section_taches.getAllByHash);

    // Get by id 
    app.get("/section_taches/getById/:idSection", section_taches.getById);

    // Put
    app.put("/section_taches/:idSection", section_taches.update);

    // Delete
    app.delete("/section_taches/:idSection", section_taches.delete);

    // Post
    app.post("/section_taches/", section_taches.create);

}