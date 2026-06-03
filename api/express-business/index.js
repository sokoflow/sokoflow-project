import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import dotenv from "dotenv"
import process from "node:process"

import homeroute from "./routes/homeRoute.js";

//TRADERS
import signIn from "./routes/traders/signIn.js";
import signUp from "./routes/traders/signUp.js";
import productPosts from "./routes/traders/productPosts.js";
import postData from "./routes/traders/postDataT.js";

//PRODUCERS
import logisticsRoutes from "./routes/producers/logisticRoutes.js";
import orders from "./routes/producers/orders.js";
import postProduct from "./routes/producers/postProduct.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors(
    {
        origin: "http://localhost:8989",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"]
    }
));
app.use(helmet());
app.use(morgan("combined"));

//GENERAL ROUTES
app.use("/", homeroute);

//TRADERS ROUTES
app.use("/api/traders/signup", signUp);
app.use("/api/traders/signin", signIn);
app.use("/api/traders/productposts", productPosts);
app.use("/api/traders/postdata", postData);

//PRODUCERS ROUTES
app.use("/api/producers/logistics", logisticsRoutes);
app.use("/api/producers/orders", orders);
app.use("/api/producers/postproduct", postProduct);


//API STATUS ROUTE
app.get("/status", (req, res) => { res.json({message:"ok!"})});
app.get("/healthy", (req, res) => { res.json({ status: "healthy" })});
app.listen(PORT, (err) => {
    if(err){
        console.log(`Error occered :> \n >> ${err}`);
    }
    else {
        console.log(`Express Business API is running on port ${PORT}`);
    }
})
