module.exports = app =>{
    const stock = require("../controllers/stock.controller.js");

    app.post("/stock", stock.create);

    app.get("/stock", stock.findAll);

    app.get("/stock/:stockID", stock.findOne);

    app.put("/stock/:stockID", stock.update);

    app.delete("/stock/:stockID", stock.delete);

    app.delete("/stock", stock.deleteAll);
};