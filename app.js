const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cors = require("cors");
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const app = express();
const routes = require("./routes");
// const upload = multer({ dest: "uploads/collections/" });

const { isProduction } = require("./config");
const corsOptions = {
  origin: true,
  allowedHeaders: [
    "Authorization",
    "X-Requested-With",
    "Content-Type",
    "x-jwt-token",
    "x-jwt-refresh-token",
  ],
  methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
  credentials: true,
};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(morgan(isProduction ? "combined" : "dev"));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
}); 

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
