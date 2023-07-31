
const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    //[GET]/
    index(req, res, next ) {

        // res.json ({
        //     name:'test'
        // });
        
        Course.find({})
            .then(courses => {
                // courses = courses.map(course =>course.toObject())
                res.render('home',{
                    courses:mutipleMongooseToObject(courses)});
            })
            .catch(next);
        // res.render('home');
    };
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
