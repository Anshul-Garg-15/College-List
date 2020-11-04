const College = require('../../../model/colleges');

//to create college  profile
module.exports.createCollege = function(req,res){

    try {
    
        College.create(
            {
                Name: req.body.Name,
                YearFounded: req.body.YearFounded,
                City: req.body.City,
                State: req.body.State,
                Country: req.body.Country,
                NumberOfStudents: req.body.NumberOfStudents,
                Courses: req.body.Courses
            },
            function(err , college){
                if(err){
                    console.log('Error in creating the college' , err);
                    return;
                }
    
                return res.json(200, {
                    data: {
                        college: college
                    },
                    message: " College Created Successfully"
                });
            }
        );
    } catch (err) {

        return res.json(500,{
            message: "Internal server error"
        });
        
    }
    
}

//to get college by the college ID
module.exports.get_college = function(req,res){
    try {
        let collegeID = req.params.id
        College.find({college:collegeID},function(err,college){
            if(err){
                console.log("Error in listing the college",err);
                return;
            }
            return res.json(200 , {
                
                message: "College Profile",
                college: college 
                
            });
        })

    } catch (err) {
        return res.json(500,{
            message: "Internal server error"
        })       
        
    }
}