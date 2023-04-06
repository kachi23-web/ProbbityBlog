
//Add middleware to your app.js file to set up session management and flash messages:



app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }));
  
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(flash());
  
  app.use(passport.initialize());
  app.use(passport.session());
  
  app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.success_messages = req.flash('success');
    res.locals.error_messages = req.flash('error');
    next();
  });
  

  module.exports = session