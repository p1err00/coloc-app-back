module.exports = app => {
    const courses = require("../controllers/course.controller.js");
  
    // Create a new Customer
    app.post("/courses", courses.create);
  
    // Retrieve all Customers
    app.get("/courses", courses.findAll);
  
    // Retrieve a single Customer with customerId
    app.get("/courses/:coursesId", courses.findOne);
  
    // Update a Customer with customerId
    app.put("/courses/:coursesId", courses.update);
  
    // Delete a Customer with customerId
    app.delete("/courses/:coursesId", courses.delete);
  
    // Create a new Customer
    app.delete("/courses", courses.deleteAll);
  };