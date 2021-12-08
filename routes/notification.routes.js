module.exports = app => {
    const notification = require("../controllers/notification.controller.js");

    app.post("/notification", notification.create);

    app.get("/notification", notification.findAll);

    app.get("/notification/:notificationID", notification.findById)

    app.put("/notification/:notificationID", notification.update);

    app.delete("/notification/:notificationID", notification.delete);
}