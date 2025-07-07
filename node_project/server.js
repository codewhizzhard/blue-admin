const express = require("express");
const dotenv = require("dotenv").config();
/* const {getContact } = require("../controllers/contactController.js") */
const errorHandler = require("./middleware/errorHandler.js");
const connectDb = require("./config/dbConnection.js");

connectDb(); 
const app = express();
const port = process.env.PORT || 500;

app.use(express.json());
app.use("/api/contact", require("./routes/contactRoute.js"));
app.use("/api/users", require("./routes/userRoute.js"));

app.use(errorHandler);

app.listen(port, () => {
    console.log(`serving running on ${port}`)
})