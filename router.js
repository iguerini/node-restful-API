var express = require('express');
var router = express.Router();

/*
 * GET userlist.
 */
router.get('/', function(req, res) {
    res.json({"json":"your data"});
});



module.exports = router;