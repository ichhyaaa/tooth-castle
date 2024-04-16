const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint to handle form submission
app.post("/api/appointment", (req, res) => {
  // Extract form data from the request body
  const { firstName, lastName, age, phone, address, email, problem, date } = req.body;

  // Perform validation if necessary
  if (!firstName || !lastName || !age || !phone || !address || !email || !problem || !date) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Process the appointment data, e.g., save it to a database
  // Example using a hypothetical database model
  Appointment.create({
    firstName,
    lastName,
    age,
    phone,
    address,
    email,
    problem,
    date
  })
    .then(appointment => {
      // Respond with success message
      res.status(200).json({ message: "Appointment submitted successfully", appointment });
    })
    .catch(error => {
      // Handle errors
      console.error("Error submitting appointment:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
