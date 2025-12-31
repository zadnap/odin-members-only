require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const pgSession = require('connect-pg-simple')(session);
const pool = require('./db/pool');
const path = require('path');
const indexRouter = require('./routes/indexRouter');
const loginRouter = require('./routes/loginRouter');
const registerRouter = require('./routes/registerRouter');
const logoutRouter = require('./routes/logoutRouter');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require('./config/passport');

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    store: new pgSession({ pool }),
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },
  })
);
app.use(passport.session());
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/logout', logoutRouter);

app.listen(process.env.EXPRESS_PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Express app is listening to port ${process.env.EXPRESS_PORT}`);
});
