module.exports = app => {
    const categorie = require("../controllers/categorie.controller.js");

    app.post("/categorie", categorie.create);

    app.get("/categorie", categorie.findAll);

    app.put("/categorie/:categorieID", categorie.update);

    app.delete("/categorie/:categorieID", categorie.delete);
}