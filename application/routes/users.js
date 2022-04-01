/**********************************************************
 * FILE: routes/users.js
 * 
 * DESCRIPTION: Application's endpoints from this file will
 * start with "/users".
**********************************************************/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
