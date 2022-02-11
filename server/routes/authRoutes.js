const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const querystring = require('querystring');

// this can be used as a seperate module
const encodeFormData = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

module.exports = router;