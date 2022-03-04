module.exports = app => {
  const sectionpayment = require("../controllers/section_payment.controller.js");

  app.post("/section_payment", sectionpayment.create);

  app.get("/section_payments/:idUser", sectionpayment.findAll);

  app.get("/section_payment/:idSection", sectionpayment.findById);

  app.put("/section_payment/:idSection", sectionpayment.update);

  app.delete("/section_payment/:idSection", sectionpayment.delete);

  app.get("/section_payment/sectionsColoc/:idColoc", sectionpayment.findAllSectionByIdColoc);

  app.get("/section_payment/sectionsCategories/:idColoc/:idCategorie", sectionpayment.findAllByCategories);

};

// TODO à tester