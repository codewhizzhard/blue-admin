import express from "express";
import dotenv from "dotenv";
import router from "./features/user/userRoutes.js";

dotenv.config();
const PORT = process.env.PORT || 5001


const app = express();

app.listen(PORT, () => {
    console.log( `on port: ${PORT}` );
})
app.use(express.json());
app.use("api/user/", router);