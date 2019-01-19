const express = require("express"); // import express
const mongoose = require("mongoose"); // import mongoose
const cookieSession = require("cookie-session"); // import cookie session
const passport = require("passport"); // import passport
const bodyParser = require("body-parser"); // import body-parser
const keys = require("./config/keys"); // import keys
const cors = require("cors");
require("./models/User"); // import in User model schema, so it executes
require("./services/passport"); // import passport.js file, this makes it execute

mongoose.connect(keys.mongoURI);

const app = express(); // generate new express app

// tell express to use cookies
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/saveRoutes")(app);

const PORT = process.env.PORT || 5000;
// tells NODE to listen on Port 5000
app.listen(PORT);
