passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false, { message: 'Incorrect username.' }); }
        bcrypt.compare(password, user.password, function(err, result) {
          if (err) { return done(err); }
          if (!result) { return done(null, false, { message: 'Incorrect password.' }); }
          return done(null, user);
        });
      });
    }
  ));

  //Set up session serialization and deserialization
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
  

  module.exports = passport;