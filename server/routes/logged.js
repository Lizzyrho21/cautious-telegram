

var express = require('express');
var router = express.Router();
const querystring = require('querystring'); // parse and stringify query strings
const axios = require('axios');


router.get('/', (req, res) => {
const code = req.query.code || null; // we store the value of our authorization code which we got from the code query param
axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token', //sending to the acesses token url
    data: querystring.encode({
        grant_type: 'authorization_code',
        code: code, //sending code form spotify login auth
        redirect_uri: process.env.REDIRECT_URI 
        }),
        headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${new Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64')}`,
        },
    })
        .then(response => {
        if (response.status === 200) {
            const { access_token, token_type } = response.data;
            //make a get request to personal info
            axios.get('https://api.spotify.com/v1/me', {
                headers: {
                    Authorization: `${token_type} ${access_token}`
                }
                })
                .then(response => {
                    res.send(`<pre>${JSON.stringify(response.data, null, 2)}</pre>`);
                })
                .catch(error => {
                    res.send(error);
                });
        } else {
            res.send(response);
        }
        })
        .catch(error => {
        res.send(error);
        });


    
    });


    module.exports = router;

  //NOTES:
    /* In Express, req.query is an object containing a property for each query string parameter a route.
    For example, if the route was /callback?code=abc123&state=xyz789,
    req.query.code would be abc123 and req.query.state would be xyz789. 
    If for some reason the route doesn't have a code query param,
    we set null as a fallback.*/