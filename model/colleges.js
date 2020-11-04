const mongoose = require('mongoose');

const collegeSchema = mongoose.Schema({
    
    Name: {
        type: String,
        required: true,
    },
    YearFounded: {
        type: String,
        required: true,
    },
    City: {
        type: String,
        required: true,
    },
    State: {
        type: String,
        required: true,
    },
    Country: {
        type: String,
        required: true,
    },
    NumberOfStudents: {
        type: Number,
        required: true,
    },
    Courses: {
        type: String,
        required: true,
    },
    studentId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }],
},
{
    timestamps: true
});

const College = mongoose.model('College' , collegeSchema);

module.exports = College;
