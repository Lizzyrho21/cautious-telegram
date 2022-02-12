// SPOTIFY AUTH

var express = require('express');
var router = express.Router();
const querystring = require('querystring'); // parse and stringify query strings


/**
//  * Generates a random string containing numbers and letters
//  * @param  {number} length The length of the string
//  * @return {string} The generated string
 */

  const generateRandomString = length => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const stateKey = 'spotify_auth_state';

router.get('/', async (req, res) => {
  const state = generateRandomString(16); // generate random 16 character number for protection against cross-site foragery attacks
  res.cookie(stateKey, state);

  // We also add the scope query param, which is a space-separated list of Spotify's pre-defined authorization scopes.
  const scope = 'user-read-private user-read-email';

  // we use the bult in node module querystring to reafctor the data we send to the http server!
  const queryParams = querystring.encode({
    client_id: process.env.CLIENT_ID,
    response_type: 'code',
    redirect_uri: process.env.REDIRECT_URI,
    state: state,
    scope: scope,
  });

  res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`)
  });


  module.exports = router;