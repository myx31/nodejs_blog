
const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class MeController {
    //[GET]/me/stored/coureses
  
    storedCourses(req, res,next) {
        Course.find({})
            .then(courses => res.render('me/stored-courses',{
                courses: mutipleMongooseToObject(courses) // biến đổi thành benobject 
            }))
            .catch(next);     
    }
}
module.exports = new MeController();
