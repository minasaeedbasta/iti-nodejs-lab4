const DepartmentSchema = require("./../Model/DepartmentModel");

exports.getAllDepartments = (request, repsonse, next) => {
  DepartmentSchema.find({})
    .then((data) => {
      repsonse.status(200).json({ data });
    })
    .catch((error) => next(error));
};

exports.addDepartment = (request, repsonse, next) => {
  let object = new DepartmentSchema(request.body);
  object
    .save()
    .then((data) => {
      repsonse.status(201).json({ data });
    })
    .catch((error) => next(error));
};
