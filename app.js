require('dotenv').config();
const express = require('express');
const path = require('path');
const indexRouter = require('./routes/indexRouter');
const loginRouter = require('./routes/loginRouter');
const registerRouter = require('./routes/registerRouter');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);

app.listen(process.env.EXPRESS_PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Express app is listening to port ${process.env.EXPRESS_PORT}`);
});
