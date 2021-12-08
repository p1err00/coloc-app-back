module.exports = app => {
    const channel = require("../controllers/channel.controller.js");

    app.post("/channel", channel.create);

    app.get("/channel/send/:userID", channel.getAll);

    app.put("/channel/:channelID", channel.update);

    app.delete("/channel/:channelID", channel.delete);
}