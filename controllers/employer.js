/*
    INSTRUCTION: setup the employer controller with the following functions:
    - getEmployers - Retrieve all employers
    - getEmployer - Retrieve a specific employer
    - addNewEmployer - Add a new employer
    - updateEmployer - Update an employer
    - deleteEmployer - Delete an employer
*/
const Employer = require("../models/employer");

exports.getEmployers = async (req, res) => {
    try {
        const employer = await Employer.find();
        res.status(200).json(employer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getEmployer = async (req, res) => {
    try {
        const employer = await Employer.findById(req.params.id);
        if (!employer) return res.status(404).json({ message: "Employer not found" });
        res.status(200).json(employer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.addEmployer = async (req, res) => {
    try {
        const employer = await Employer.create(req.body);
        res.status(201).json(employer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateEmployer = async (req, res) => {
    try {
        const employer = await Employer.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!employer) return res.status(404).json({ message: "Employer not found" });
        res.status(200).json(employer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteEmployer = async (req, res) => {
    try {
        const employer = await Employer.findByIdAndDelete(req.params.id);
        if (!employer) return res.status(404).json({ message: "Employer not found" });
        res.status(200).json({ message: "Employer deleted" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
