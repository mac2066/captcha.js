const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const http = require('http');
const Captcha = require('../../lib');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: 'captcha.js',
  resave: false,
  saveUninitialized: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/captcha', (req, res) => {
  const captcha = new Captcha();
  captcha.create((err, result) => {
    req.session.code = result.code.toLowerCase();
    res.sendFile(result.filePath);
  });
});

app.post('/validate', (req, res) => {
  const code = req.body.code + '';
  if (code.toLowerCase() != req.session.code) {
    return res.send(`Failed | ${code} | ${req.session.code}`);
  }
  delete req.session.code;
  res.send('Success');
});

const server = http.createServer(app);
server.listen(3000);
