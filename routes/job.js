/*
    INSTRUCTION: setup the job routes according to the following requirements:
    - `GET /jobs`: List all jobs with sorting, pagination and filtering
    - `GET /jobs/:id`: Get a specific job by its id
    - `POST /jobs`: Add a new job
    - `PUT /jobs/:id`: Update a job
    - `DELETE /jobs/:id`: Delete a job
*/
const express = require("express");
const controller = require("../controllers/job");
const router = express.Router();

router.get("/", controller.getJobs);
router.get("/:id", controller.getJob);
router.post("/", controller.addNewJob);
router.put("/:id", controller.updateJob);
router.delete("/:id", controller.deleteJob);

module.exports = router;
