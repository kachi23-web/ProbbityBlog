const ensureAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
  };
  
  app.get('/login', function(req, res){
    res.render('login');
  });
  
  app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }));
  
  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });
  
  app.get('/dashboard', ensureAuthenticated, function(req, res){
    res.render('dashboard');
  });
  