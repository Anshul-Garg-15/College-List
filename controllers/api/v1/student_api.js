const Student = require('../../../model/students');
const College = require('../../../model/colleges');

//to create students in particular college with college ID
module.exports.createStudent = function(req,res){
    
    try {
    let collegeID = req.params.id;

    College.findById(collegeID,function(err,college){

        if(err){
            console.log("Error in finding college",err);
            return;
        }
        Student.create({
            Name: req.body.Name,
            YearOfBatch: req.body.YearOfBatch,
            collegeID: collegeID,
            Skills: req.body.Skills
        },function(err,student){
            if(err){
                console.log("Error in creating student",err);
                return;
            }
            college.student.push(student);
            college.save();
            return res.json(200, {
                data:
                {
                    student: student
                },
                message: "Student created"
            });
        });
    
    })
    } catch (err) {
        console.log('error',err);
        return res.json(500,{
            message: "Internal server error"
        })       
    }
    
}


//to get particular students details by student ID
module.exports.get_student = function(req,res){
    try {
        let studentID = req.params.id
        Student.findOne({student:studentID},function(err,student){
            if(err){
                console.log("Error in listing the student",err);
                return;
            }
            return res.json(200 , {
                
                message: "Student Profile",
                student: student 
                
            });
        })
    } catch (err) {
        return res.json(500,{
            message: "Internal server error"
        })       
        
    }
}


//to get all the students profile in a particular college by college id
module.exports.all_students = function(req,res){
    try {
        let collegeID = req.params.id
        Student.find({college:collegeID},function(err,student){
            if(err){
                console.log("Error in listing the students",err);
                return;
            }
            return res.json(200 , {
                
                message: "List of all students",
                student: student 
                
            });
        })
    } catch (err) {
        return res.json(500,{
            message: "Internal server error"
        })       
        
    }
}
