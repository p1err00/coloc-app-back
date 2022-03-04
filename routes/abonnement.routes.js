module.exports = app => {
    const abonnement = require("../controllers/abonnement.controller.js");
  
    app.post("/abonnement", abonnement.create);
  
    app.get("/abonnements/:idUser", abonnement.findAll);
  
    app.get("/abonnement/:idAbonnement", abonnement.findById);
    
    app.put("/abonnement/:idAbonnement", abonnement.update);

    app.delete("/abonnement/:idAbonnement", abonnement.delete);

    app.get("/abonnement/getNotPayed/:idUser", abonnement.findNotPayed);

    app.get("/abonnement/getAlreadyPayed/:idUser", abonnement.findAlreadyPayed);

    // app.get("/abonnement/getMultipleAbonnement/:idUser", abonnement.getMultipleAbonnement);
  
  };