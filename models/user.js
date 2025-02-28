const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const MONGO_URI = process.env.MONGO_URI; // ✅ Correct

mongoose
  .connect(`${MONGO_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log("Error is", err);
  });

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
  email: String,
  password: String,
  post: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
});

module.exports = mongoose.model("user", userSchema);
