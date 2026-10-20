const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const applicationRoutes = require("./routes/application");
const employerRoutes = require("./routes/employer");
const jobRoutes = require("./routes/job");

const app = express();
const port = 5123;

app.use(express.json());

// INSTRUCTION: setup cors
app.use(cors());

// INSTRUCTION: setup MongoDB Connection
mongoose
    .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/mock_db")
    .then(() => app.listen(5123, () => console.log("Server started")))
    .catch((error) => console.error("MongoDB connection failed:", error.message));

// INSTRUCTION: setup routes
app.use("/applications", applicationRoutes);
app.use("/employers", employerRoutes);
app.use("/jobs", jobRoutes);

app.get("/", (req, res) => {
    res.send("Good luck with the exam!");
});

// Server listening
app.listen(port, () => console.log(`Server started on port ${port}`));
