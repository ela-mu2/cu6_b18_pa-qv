/*
    INSTRUCTION: setup the routes for the employer entity according to the following requirements:
    - `GET /employers`: List all employers
    - `GET /employers/:id`: Get a specific employer by its id
    - `POST /employers`: Add a new employer
    - `PUT /employers/:id`: Update an employer
    - `DELETE /employers/:id`: Delete an employer
*/
const express = require("express");
const controller = require("../controllers/employer");
const router = express.Router();

router.get("/", controller.getEmployers);
router.get("/:id", controller.getEmployer);
router.post("/", controller.addEmployer);
router.put("/:id", controller.updateEmployer);
router.delete("/:id", controller.deleteEmployer);

module.exports = router;
