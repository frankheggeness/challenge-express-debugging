const express = require('express');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 8080;
const home = require('./routes/home/index.js');
const about = require('./routes/about/index.js');
const contact = require('./routes/contact/index.js');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', '.hbs');
app.use(express.static('public'));
app.use('/home', home);
app.use('/about', about);
app.use('/contact', contact);

app.get('/', (req, res) => {
  res.render('./home');
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
