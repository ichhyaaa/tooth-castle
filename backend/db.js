const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = process.env.URL;
  try {
    mongoose.connect(connectionParams);
    console.log("Connected to database...");
  } catch (error) {
    console.log("Could not connect to database...", error);
  }
};
