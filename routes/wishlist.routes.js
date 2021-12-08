module.exports = app =>{
    const wishlist = require("../controllers/wishlist.controller.js");

    app.post("/wishlist", wishlist.create);

    app.get("/wishlist", wishlist.findAll);

    app.get("/wishlist/:wishID", wishlist.findOne);

    app.put("/wishlist/:wishID", wishlist.update);

    app.delete("/wishlist/:wishID", wishlist.delete);

    app.delete("/wishlist", wishlist.deleteAll);
};