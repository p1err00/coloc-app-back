module.exports = app => {
    const channel_user = require("../controllers/channel_user.controller.js");

    app.post("/channel_user", channel_user.create);

    
    app.get("/channel_user/channel/:channel_userID", channel_user.findById)
    app.get("/channel_user/:userID", channel_user.findAll);

    app.put("/channel_user/:channeUserlID", channel_user.update);
    
    app.put("/channel_user/:channeUserlID/:user", channel_user.updateById);

    app.delete("/channel_user/:channeUserID", channel_user.delete);
}