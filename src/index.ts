import express from "express";
import cors from "cors";
import config from "./config/config";
import connectDatabase from "./database/mongoDb";
import ImportData from "./seeding";
import productsRoute from "./Routes/productsRoute";
import { errorHandler, notFound } from "./middleware/Errors";

const app = express();
app.use(cors());

const PORT = config.PORT || 4000;
connectDatabase();


app.use("/api/import", ImportData);
app.use("/api/products", productsRoute);

app.use(notFound);
app.use(errorHandler);
//Load all products
// app.get("/api/products", (req, res) => {
//   res.json(products);
// });

// app.get("/api/products/:id", (req, res) => {
//   const product = products.find((p) => p._id == req.params.id);
//   res.send(product);
// });

//home page
app.get("/", (req, res) => {
  res.send("Server running good");
});



app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
