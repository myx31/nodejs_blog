const newsRouter = require('./news');
const meRouter = require('./me');
const siteRouter = require('./site');
const coursesRouter = require('./courses');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);
    
    app.use('/', siteRouter);

    // app.get('/', (req, res) => {
    //     res.render('home');
    // });

    // //  app.get('/news', (req, res) => {
    // //     res.render('news');
    // // });

    // app.get('/search', (req, res) => {
    //     res.render('search');
    // });
}

module.exports = route;
