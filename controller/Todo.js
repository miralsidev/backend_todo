const { ToDo } = require("../Models/ToDo");
const AddToDo = async (req, res) => {
  try {
    const { title, description } = req.body;
    console.log("res.body", req.body);
    console.log("ffnfiofneofinef", req.file);

    if (title && description) {
        const data = new ToDo({
            title:title,
            description:description,
            path:req.file.path,
            size:req.file.size
        })
        await data.save();
        return res.json({status:200,message:"add successfully"})
    } else {
      return res.json({ status: 400, message: "all filed requried" });
    }
  } catch (error) {
    console.log(error);
    return res.json({ status: 500, message: "insternal serveer error" });
  }
};
module.exports = { AddToDo };
// const { ToDo } = require("../Models/ToDo");

// const AddToDo = async (req, res) => {
//   try {
//     const { title, description } = req.body;
//     console.log("req.body", req.body);
//     console.log("req.file", req.file);

//     if (title && description && req.file) {
//       const data = new ToDo({
//         title: title,
//         description: description,
//         path: req.file.path,
//         size: req.file.size,
//         originalName: req.file.originalname,
//         mimeType: req.file.mimetype,
//       });
//       await data.save();
//       return res.json({ status: 200, message: "Added successfully", file: req.file });
//     } else {
//       return res.json({ status: 400, message: "All fields are required" });
//     }
//   } catch (error) {
//     console.log(error);
//     return res.json({ status: 500, message: "Internal server error" });
//   }
// };

// module.exports = { AddToDo };

