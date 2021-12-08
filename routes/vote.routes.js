module.exports = app => {
    const vote = require("../controllers/vote.controller.js");

    app.post("/vote", vote.create);

    app.get("/vote/:id", vote.findAll);

    app.get("/vote/:id", vote.findById);

    app.put("/vote/:voteID", vote.update);

    app.delete("/vote/:voteID", vote.delete);
}