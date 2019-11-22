var express = require('express');
var router = express.Router();
const User=require("../middlewares");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/signup', (req, res) => {
  if (validateUser(req.body)) {
    User.getOneByEmail(req.body.email)
    .then(user=>{
      console.log('user',user);
    
    })
    res.json({
      user,
      message: "signed in"
    });
  } else {
    next(new Error("invalid user"))
  }


})


//cannot log with blank or missing email

function validateUser(user) {
  const validEmail = typeof user.email == "string" && user.mail.trim() != '';

  const validPassword = typeof user.password == "string" && user.password.trim() != '' && user.password.trim().length > 6;

  return validEmail && validPassword;

}

module.exports = router;
