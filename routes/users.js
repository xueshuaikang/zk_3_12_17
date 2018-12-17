var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/conmon', function(req, res, next) {
  let {year}=req.body,
      {month}=req.body,
      {day}=req.body;
    console.log(year)
    console.log(month)
    console.log(day)
    
  if(!year && !month && !day){
    res.json({code:0});
  }else{
    res.json({code:9});
  }
});

module.exports = router;
