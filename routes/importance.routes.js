module.exports = app =>{
    const importance = require("../controllers/importance.controller");

    app.post("/importance", importance.create);

    app.get("/importance", importance.findAll);
    
    app.put("/importance/:importanceID", importance.update);

    app.delete("/importance/:importanceID", importance.delete);
}