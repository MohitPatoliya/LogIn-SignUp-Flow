const express = require("express");
const router = express.Router();
require("../database/connection");
const User = require("../models/userSchema");

router.get("/", (req, resp) => {
  resp.send("app is working Hello World ....");
});

router.post("/register", (req, res) => {
  const { name, email, password, cpassword } = req.body;
  if (!name || !email || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill all the data" }); 
  }
  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "Email already exist" });
      }
      const user = new User({ name, email, password, cpassword });

      user
        .save()
        .then(() => {
          res.status(201).json({ message: "success" });
        })
        .catch((error) =>
          res.status(500).json({ error: "Failed to register" })
        );
    })
    .catch((error) => console.log(error));
});

router.put("/update-password", async (req, res) => {
  try {
    const { name, changePassword, repeatPassword } = req.body;
    // Find the user by Name
    const user = await User.findOne({ name });
    // Check if the user exists
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    // Update the user's password
    user.password = changePassword;
    user.cpassword = repeatPassword;
    // Save the updated user
    await user.save();
    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error updating password:", error);
    res.status(500).json({ error: "Failed to update password" });
  }
});

router.get("/getAllUsers/", async (req, res) => {
  const allUsers = await User.find({});
  res.json({ allUsers });
});

module.exports = router;
