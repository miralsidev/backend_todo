const router = require('express').Router();
const { upload} = require('../middlewar/File')
const {AddToDo} = require('../controller/Todo')
router.post("/addtodo", upload.single('file'),AddToDo);
module.exports = router
// const express = require('express');
// const router = express.Router();
// const { upload } = require('../middlewar/File');
// const { AddToDo } = require('../controller/Todo');

// router.post('/addtodo', upload.single('file'), AddToDo);

// module.exports = router;

