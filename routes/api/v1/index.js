const express  = require("express");
const router = express.Router();

router.use('/colleges' , require('./college'));
router.use('/students', require('./student'));



module.exports = router;



