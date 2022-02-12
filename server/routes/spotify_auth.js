// SPOTIFY AUTH

var express = require('express');
var router = express.Router();


router.get('/', async (req, res) => {
  res.redirect(`https://accounts.spotify.com/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&redirect_uri=${process.env.REDIRECT_URI}`)
  });


  module.exports = router;