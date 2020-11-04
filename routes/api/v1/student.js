const express = require('express');
const router = express.Router();
const studentApi = require('../../../controllers/api/v1/student_api'); 

//to create student in college ID
router.post('/:id/create_student' , studentApi.createStudent);

//to get particular student details by its id
router.get('/:id/get_student' , studentApi.get_student);

//to get all students in a particular college by college ID
router.get('/:id/all_students' , studentApi.all_students);

module.exports = router;