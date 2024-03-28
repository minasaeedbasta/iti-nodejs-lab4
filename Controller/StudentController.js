const StudentSchema = require("./../Model/StudentModel");

exports.getAllStudents = (request, repsonse, next) => {
  StudentSchema.find({})
    .populate({ path: "department", select: { name: 1 } })
    .then((data) => {
      repsonse.status(200).json({ data });
    })
    .catch((error) => next(error));
};

exports.getStudent = (request, repsonse, next) => {
  StudentSchema.findOne({ _id: request.params.id })
    .then((object) => {
      if (!object) throw new Error("Student not Exists .........");

      repsonse.status(200).json({ object });
    })
    .catch((error) => next(error));
};

exports.addStudent = (request, repsonse, next) => {
  let object = new StudentSchema(request.body);
  object
    .save()
    .then((data) => {
      repsonse.status(201).json({ data });
    })
    .catch((error) => next(error));
};

exports.updateStudent = (request, repsonse, next) => {
  repsonse.status(200).json({ data: "update " });
};

exports.deleteStudent = (request, repsonse, next) => {
  repsonse.status(200).json({ data: "delete" });
};
