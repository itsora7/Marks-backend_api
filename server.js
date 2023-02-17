import express from "express";
const app = express();
import cors from "cors";
const PORT = process.env.PORT || 8000;

//middlewares
app.use(cors());
app.use(express.json());

//routers
app.use("/", (req, res, next) => {
  res.json({
    message: "You do not have access here",
  });
});

//global error handler

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at http://localhost:${PORT}`);
});
