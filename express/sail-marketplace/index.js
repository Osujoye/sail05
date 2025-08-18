const express = require("express");
const app = express();
const PORT = 2322;
require("./config/db");
const userRouter = require("./router/user.route");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Server up and running 🚀",
  });
});

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
