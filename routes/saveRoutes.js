const mongoose = require("mongoose");
const User = mongoose.model("users"); // 1 arg means fetch, 2 args mean load into

module.exports = app => {
  app.post("/api/save", async (req, res) => {
    console.log("RECEIVED POST");
    const data = req;
    console.log(data);
    //const movies = data.movies ? data.movies : [];
    const userId = req.user._id;

    //const existingUser = await User.findById(userId);
    // if (existingUser) {
    //   //existingUser.movies = movies;
    // } else {
    //   console.log("NO USER FOUND");
    // }
    //console.log(existingUser);
    res.end("Success");
  });
};
