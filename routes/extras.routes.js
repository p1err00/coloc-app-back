module.exports = app => {
    const extras = require("../controllers/extras.controller.js");
  
    // Create a new Customer
    app.post("/extras", extras.create);
  
    // Retrieve all Customers
    app.get("/extras/:userID", extras.findAll);
  
    // Retrieve a single Customer with customerId
    app.get("/extras/:extrasID", extras.findOne);
  
    // Update a Customer with customerId
    app.put("/extras/:extrasID", extras.update);
  
    // Delete a Customer with customerId
    app.delete("/extras/:extrasID", extras.delete);
  
    // Create a new Customer
    app.delete("/extras", extras.deleteAll);
  };