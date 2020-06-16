const mongoose = require("mongoose");
const config = require("config");
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
};

const connectDB = () => {
    mongoose.connect(config.get("db.connection"), options, (err) => {
        if (err) {
          throw err;
        } else {
          console.log("Mongo DB Connected");
        }
      });
}

module.exports = connectDB;
