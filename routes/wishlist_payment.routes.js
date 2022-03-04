module.exports = app => {
    const wishlist_payment = require("../controllers/wishlist_payment.controller.js");

    // Post
    app.post("/wishlist_payment", wishlist_payment.create);

    // Put
    app.put("/wishlist_payment/:id", wishlist_payment.update);

    // Delete
    app.delete("/wishlist_payment/:id", wishlist_payment.delete);

    // Get all by isUser
    app.get("/wishlist_payment/getAllByIdUser/:idUser", wishlist_payment.getAllByIdUser);

    // Get by id
    app.get("/wishlist_payment/getById/:id", wishlist_payment.getById);

    // Get by has_wish
    app.get("/wishlist_payment/getByHashWish/:hash", wishlist_payment.getByHashWish);

    // Get by hash_payment 
    app.get("/wishlist_payment/getByHashPayment:/hash", wishlist_payment.getByHashPayment);

    // Get all by is_do and idUser
    // TODO
    //app.get("wishlist_payment/getAllByIsDoAndIdUser/:idUser", wishlist_payment.getAllByisDoAndIdUser);

    // Get all by date_is_do and idUser
    app.get("/wishlist_payment/getAllByDateIsDoAndIdUser/:date/:idUser", wishlist_payment.getAllByDateIsDoAndIdUser);

    // Get all by date_creation and idUser
    app.get("/wishlist_payment/getAllByDateCreationAndIdUser/:date/:idUser", wishlist_payment.getAllByDateCreationAndIdUser);

    // Get all by date_is_do > :date_is_do and idUser
    // TODO
    //app.get("/wishlist_payment/getAllByDateIsDoByBetterThanAndIdUser/:date/:idUser", wishlist_payment.getAllByDateIsDoByBetterThanAndIdUser);

    // Get all by date_is_do < :date_is_do and idUser
    // TODO
    // app.get("/wishlist_payment/getAllByDateIsDoByLessThanAndIdUser/:date", wishlist_payment.getAllByDateIsDoByLessThanAndIdUser);

    // Get all by date_creation > :date_ceation and idUser
    // TODO
    // app.get("/wishlist_payment/getAllByDateCreationByBetterThanAndIdUser/:date/:idUser", wishlist_payment.getAllByDateCreationByBetterThanAndIdUser);

    // Get all by date_creation < :date_creation and idUser
    // TODO
    // app.get("/wishlist_payment/getAllByDateCreationByLessThanAndIdUser/:date/:idUser", wishlist_payment.getAllByDateCreationByLessThanAndIdUser);    
}

// TODO à tester
