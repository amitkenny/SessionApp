var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var data = {};
  if(req.session.name)
  {
    res.render('index',{title: 'Session App',name : req.session.name});
  }
  else
  {
    res.render('index',{title : "Session App"});
  }
});

router.post('/name',function(req,res){
  var sess = req.session;
  sess.name = req.body.name;
  res.render('index',{title: 'Session App',name : req.session.name});
})

module.exports = router;
