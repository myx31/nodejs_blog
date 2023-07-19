const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express();
const handlebars = require('express-handlebars')
const port = 3000;

// HTTP logger
app.use(morgan('combined'));

///template engine
app.engine('hbs', handlebars.engine({
  extname:'.hbs'
}));
app.set('view engine','hbs')
app.set('views', path.join(__dirname, 'resources/views'));
console.log(path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 