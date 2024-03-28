const express = require("express");
const controller = require("./../Controller/DepartmentController");
const router = express.Router();

router
  .route("/departments")
  .get(controller.getAllDepartments)
  .post(controller.addDepartment);

module.exports = router;
