const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const handlebars = require('express-handlebars');
const db = require('./config/db');
const  methodOverride = require('method-override');

//connect to Db
db.connect();

const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'));

//HTTP logger
app.use(morgan('combined'));

///template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a,b) => a + b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
console.log(path.join(__dirname, 'resources','views'));

// route init
route(app);

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
