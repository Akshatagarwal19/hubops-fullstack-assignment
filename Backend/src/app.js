import express from "express";
import cors from "cors";
import servicesRoutes from "./routes/services.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";


const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});
app.use("/api/services", servicesRoutes);
app.use(errorHandler);

export default app;
