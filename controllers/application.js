/*
    INSTRUCTION: setup the controller functions to handle job applications
    - getApplicationsByJob - Retrieve all applications for a specific job (use `populate()` to get job details)
    - createApplication - Create a new application for a job (ensure no duplicate applications for the same email and job)
*/
const Application = require("../models/application");
const Job = require("../models/job");

exports.getApplicationsByJob = async (req, res) => {
    try {
        const application = await Application.find({ job: req.query.job }).populate("job");
        res.status(200).json(application);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.createApplication = async (req, res) => {
    try {
        if (req.body.job && !(await Job.exists({ _id: req.body.job }))) {
            return res.status(400).json({ message: "Job record not found" });
        }

        const existingApplication = await Application.findOne({
            email: req.body.email,
            job: req.body.job,
        });
        if (existingApplication) {
            return res.status(400).json({ message: "Application already exists for this email and job" });
        }

        const application = await Application.create(req.body);
        res.status(201).json(application);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
