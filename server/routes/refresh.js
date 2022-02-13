var express = require('express');
var router = express.Router();
const querystring = require('querystring'); // parse and stringify query strings

router.get('/refresh_token', (req, res) => {
    const { refresh_token } = req.query; // abstraction used here to take data from the request query

    axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        data: querystring.stringify({
            grant_type: 'refresh_token', //grant_type is refresh_token instead of auth code
            refresh_token: refresh_token
            }),
            headers: {
            'content-type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${new Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64')}`,
            },
        })
            .then(response => {
            res.send(response.data);
            })
            .catch(error => {
            res.send(error);
            });

});

module.exports = router;