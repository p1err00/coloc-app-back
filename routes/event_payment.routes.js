module.exports = app => {
    const event_payment = require("../controllers/event_payment.controller.js");

    // Post 
    app.post("/event_payment", event_payment.create);

    // Put
    app.put("/event_payment/:id", event_payment.update);

    // Delete
    app.delete("/event_payment/:id", event_payment.delete);

    // Get all by idUser
    app.get("/event_payment/getAllByIdUser/:idUser", event_payment.getAllByIdUser);

    // Get all by is_do and idUser
    app.get("/event_payment/getAllByIsDoAndIdUser/:idUser", event_payment.getAllByIsDoAndIdUser);

    // Get by id
    app.get("/event_payment/getById/:id", event_payment.getById);

    // Get by hashEvent
    app.get("/event_payment/getByHashEvent/:hash", event_payment.getByHashEvent);

    // Get by hashPayment
    app.get("/event_payment/getByHashPayment/:hash", event_payment.getByHashPayment);

    // Get all by dateIsDo and idUser
    app.get("/event_payment/getAllByDateisDoAndIdUser/:date/:idUser", event_payment.getAllByDateIsDoAndIdUser);

    // Get all by dateCreation and idUser
    app.get("/event_payment/getAllByDateCreationAndIdUser/:date/:idUser", event_payment.getAllByDateCreationAndIdUser);

    // Get all by dateIsDo > :dateIsDo and idUser
    app.get("/event_payment/getAllByDateIsDoBetterThanAndIdUser/:date/:idUser", event_payment.getAllByDateIsDoBetterThanAndIdUser);

    // Get all by dateIsDo < :dateIsDo and idUser 
    app.get("/event_payment/getAllByDateIsDoLessThanAndIdUser/:date/:idUser", event_payment.getAllByDateIsDoLessThanAndIdUser);

    // Get all by dateCreaton > :dateCreation and idUser
    app.get("/event_payment/getAllByDateCreationBetterThanAndIdUser/:date/:idUser", event_payment.getAllByDateCreationBetterThanAndIdUser);

    // Get all by dateCreation < :dateCreation and iduser
    app.get("/event_payment/getAllByDateCreationLessThanAndIdUser/:date/:idUser", event_payment.getAllByDateCreationLessThanAndIdUser);
}