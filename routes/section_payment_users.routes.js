module.exports = app => {
    const section_payment_users = require("../controllers/section_payment_users.controller.js");

    // Get all by id_payment
    app.get("/section_payment_users/getAllByIdPayment/:idPayment", section_payment_users.getAllByIdPayment);

    // Get all by id_user
    app.get("/section_payment_users/getAllByIdUser/:idUser", section_payment_users.getAllByIdUser);

    // Get all by hash_payment
    app.get("/section_payment_users/getAllByHash/:hash", section_payment_users.getAllByHash);

    // Get all by amout_payed and idUser
    app.get("/section_payment_users/getAllByAmoutPaid/:idUser", section_payment_users.getAllByAmoutPaid);

    // Get lase_date_payment
    app.get("/section_payment_users/getByLastDatePayment/:date", section_payment_users.getByLastDatePayment);

    app.get("/section_payment_users/getById/:id", section_payment_users.getById);

    // Create
    app.post("/section_payment_users", section_payment_users.create);

    // Update
    app.put("section_payment_users/:id", section_payment_users.update);

    // Delete
    app.delete("/seciton_payment_users/:id", section_payment_users.delete)
}

// TODO à tester
