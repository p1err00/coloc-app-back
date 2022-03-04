module.exports = app => {
    const tache_payment = require("../controllers/tache_payment.controller.js");

    // Post 
    app.post("/tache_payment", tache_payment.create);

    // Put 
    app.put("/tache_payment/:id", tache_payment.update);

    // Delete
    app.delete("/tache_payment/:id", tache_payment.delete);

    // Get all by is_do and idUser
    app.get("/tache_payment/getAllbyIsDoAndIdUser/:idUser", tache_payment.getAllByIsDoAndIdUser);

    // Get all by id_user
    app.get("/tache_payment/getAllByIdUser/:idUser", tache_payment.getAllByIdUser);

    // Get by id
    app.get("/tache_payment/getById/:id", tache_payment.getById);

    // Get by hash_tache
    app.get("/tache_payment/getByHashTache/:hash", tache_payment.getByHashTache);

    // Get by hash_payment
    app.get("/tache_payment/getByHashPayment/:hash", tache_payment.getByHashPayment);

    // Get all by date_creation and idUser
    app.get("/tache_payment/getAllByDateCreationAndIdUser/:date/:idUser", tache_payment.getAllByDateCreationAndIdUser);

    // Get all by date_is_do and idUser
    app.get("/tache_payment/getAllByDateIsDoAndIdUser/:date/:idUser", tache_payment.getAllByDateIsDoAndIdUser);

    // Get all by date_is_do > :date_is_do and idUser
    app.get("/tache_payment/getAllDateIsDoByBetterThanAndIdUser/:betterThan/:idUser", tache_payment.getAllDateIsDoByBetterThanAndIdUser);

    // Get all by date_is_do < :date_is_do and idUser
    app.get("/tache_payment/getAllDateIsDoByLessThanAndIdUser/:lessThan/:idUser", tache_payment.getAllDateIsDoByLessThanAndIdUser);

    // Get all by date_creation > :date_creation and idUser
    app.get("/tache_payment/getAllDateCreationByBetterThanAndIdUser/:betterThan/:idUser", tache_payment.getAllDateCreationByBetterThanAndIdUser);

    // Get all by date_is_do < :date_is_do and idUser
    app.get("/tache_payment/getAllDateCreationByLessThanAndIdUser/:lessThan/:idUser", tache_payment.getAllDateCreationByLessThanAndIdUser);
}

// TODO à tester
