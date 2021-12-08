module.exports = app =>{
    const site = require("../controllers/site.controller.js");

    app.post("/site", site.create);

    app.get("/site", site.findAll);

    app.get("/site/:siteID", site.findOne);

    app.put("/site/:siteID", site.update);

    app.delete("/site/:siteID", site.delete);

    app.delete("/site", site.deleteAll);
};