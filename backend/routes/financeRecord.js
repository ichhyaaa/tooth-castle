const router = require("express").Router();
const { Appointment, validate } = require("../models/appointment");
const { User } = require("../models/user");
const { Service } = require("../models/services");
const bcrypt = require("bcrypt");

router.get("/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    // Find user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const appointment = await Appointment.find({ user_id: userId });

    // Retrieve prices of services
    const serviceIds = appointment.map((appointment) =>
      appointment.service_id.toString()
    );

    const prices = await Service.find({
      _id: { $in: serviceIds },
    });
    // console.log(appointment);
    // Create a mapping of service IDs to their corresponding prices
    const priceMap = {};
    prices.forEach((price) => {
      priceMap[price._id.toString()] = price;
    });

    // Map the appointments with their corresponding prices
    const appointmentsWithPrices = appointment.map((appointment) => ({
      ...appointment.toObject(),
      price: priceMap[appointment.service_id.toString()], // Assuming price is a field in the Service schema
    }));
    console.log(appointmentsWithPrices);

    res.json({ appointment: appointmentsWithPrices });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
