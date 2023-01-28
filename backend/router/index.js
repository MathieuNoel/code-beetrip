const GameController = require('../controller/gameController');

const router = require('express').Router();

router.post('/', GameController.startGame);

module.exports = router;