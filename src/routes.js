var express = require('express');
var router = express.Router();
var relationService = require('./services/relation');

router.get("/relationship", (req, res, next) => {
    relationService.getRelation()
                   .then(x => res.json(x))
                   .catch(error => {
                       console.log(error);

                       res.sendStatus(500);
                   })
});

module.exports = router;