require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
// middleware
const errHandlers = require("./middleware/errorHandlers");
const authentication = require("./middleware/authentication");
// controllers
const controllers = require("./controllers/controllers");
// deployment
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.post("/login", controllers.login);
app.use(authentication);
app.get("/", controllers.dashboard);

// error handlers
app.use(errHandlers);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
