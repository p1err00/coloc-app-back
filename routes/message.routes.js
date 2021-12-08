module.exports = app => {
    const message = require("../controllers/message.controller.js");

    app.post("/message", message.create);

    app.get("/message/:channelID", message.findAll);

    app.put("/message/:messageID", message.update);

    app.delete("/message/:messageID", message.delete);
}