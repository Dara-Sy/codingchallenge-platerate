// standard, importing an object
const express = require('express'); // what type of thing did we import? => a function
// console.log('this is express: ', express);
// app is defined here, call the express
const app = express(); // this is where you CALL express function
// console.log('this is app: ', app);
const port = process.env.PORT || 3000;
// require is importing

let about = require('./db/about.js')
// const birdsRouter = require('./routes/birds.js')

// const router = express.Router();

// this is my welcome and decription message to user

app.get('/posts', (req, res) => {
  console.log(req)
  res.send(about);
  // res.send('<h1> Hi user! </h1>')
});


app.get('/posts/aboutme', (req, res) => {
  res.send(about);
});

app.get('/posts/description', (req, res) => {
  res.send(about[0]);
});

app.get('/posts/tech', (req, res) => {
  res.send(about[1]);
});

app.get('/posts/techstack', (req, res) => {
  res.send(about[2]);
});

app.get('/posts/hobbies', (req, res) => {
  res.send(about[3]);
});

app.use(function(req, res, next){
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});



app.listen(port);
