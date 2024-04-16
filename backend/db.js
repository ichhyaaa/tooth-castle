const mongoose = require("mongoose");

module.exports = () => {

    try {
        mongoose.connect(process.env.URL).then(() => console.log("Connected to database")).catch((err) => console.log(err));
    } catch (error) {
        console.log('Could not connect to database...', error)
    }
}