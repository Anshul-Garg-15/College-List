const express = require('express');
const router = express.Router();
const collegeApi = require('../../../controllers/api/v1/college_api');

//to create college profile
router.post('/create_college' , collegeApi.createCollege);

//to get college details by college Id
router.get('/get_college/:id' , collegeApi.get_college);

module.exports = router;