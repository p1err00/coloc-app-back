module.exports = app => {
  const payment = require("../controllers/payment.controller.js");

  app.post("/payment", payment.create);

  app.get("/payments/:idUser", payment.findAll);

  app.get("/payment/:idPayment", payment.findById);

  app.put("/payment/:idPayment", payment.update);

  app.delete("/payment/:idPayment", payment.delete);

  app.get("/payment/getNotPayed/:idUser", payment.findNotPayed);

  app.get("/payment/getAlreadyPayed/:idUser", payment.findAlreadyPayed);

  app.get("/payment/getByIdSection/:idSection/:idUser", payment.findByIdSection);

  app.get("/payment/getByType/:idType/:idUser", payment.findByType);

};