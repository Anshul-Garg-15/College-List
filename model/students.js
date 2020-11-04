const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
   
    Name: {
        type:String,
        required: true,
    },
    YearOfBatch: {
        type: Number,
        required: true
    },
    collegeId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'College'
    }],
    Skills: {
        type: String,
        required: true
    }

},{
    timestamps:true
});

const Student = mongoose.model('Student' , studentSchema);

module.exports = Student;