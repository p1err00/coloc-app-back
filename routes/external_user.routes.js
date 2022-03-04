module.exports = app => {
    const external_user = require("../controllers/external_user.controller.js");

    // Post
    app.post("/external_user", external_user.create);

    // Get all by idColoc
    app.get("/external_user/getAllByIdColoc/:idColoc", external_user.getAllByIdColoc);

    // Get all by hashEvent
    app.get("/external_user/getAllByHashEvent/:hash", external_user.getAllByHashEvent);

    // Get all by hashPayment
    app.get("/external_user/getAllByHashPayment/:hash", external_user.getAllByHashPayment);

    // Get all by hashTache
    app.get("/external_user/getAllByHashTache/:hash", external_user.getAllByHashTache);

    // Get by id
    app.get("/external_user/getById/:id", external_user.getById);

    // Get by nom
    app.get("/external_user/getByName/:nom", external_user.getByName);

    // Get by prenom
    app.get("/external_user/getByPrenom/:prenom", external_user.getByPrenom);

    // Get by phone
    app.get("/external_user/getByPhone/:phone", external_user.getByPhone);

    // Get by email
    app.get("/external_user/getByMail/:mail", external_user.getByMail);

    // Get by pseudo
    app.get("/external_user/getByPseudo/:pseudo", external_user.getByPseudo);

    // Update
    app.put("/external_user/:id", external_user.update);

    // Delete
    app.delete("/external_user/:id", external_user.delete);


}