const express = require("express");
const controller = require("./../Controller/StudentController");
const router = express.Router();

router
  .route("/students")
  .get(controller.getAllStudents)
  .post(controller.addStudent)
  .patch(controller.updateStudent);
//   .delete(controller.deleteStudent);

// router.get("/students/:id", controller.getStudent);

router
  .route("/students/:id")
  .get(controller.getStudent)
  .delete(controller.deleteStudent);

module.exports = router;
