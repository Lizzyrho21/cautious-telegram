
//2. user is authenticated, and taken back to callback (or site we want them to land on)
var express = require('express');
var router = express.Router();
const querystring = require('querystring'); // parse and stringify query strings
const axios = require('axios');


router.get('/', (req, res) => {
 // the code we recieve from the get request call  
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
         // here we pull access token (user granted access when logging in), the refresh token (to keep them logged in ),
         // and the expires_in data (to keep track of how long a token has before we refresh it!)
            const { access_token, refresh_token, expires_in } = response.data; //grab access token and refresh token from response data

            // We can pass the tokens along to our React app with query params. Let's update our route handler to do that.
            // set the query params to be parsed for transfer  
            const queryParams = querystring.encode({
                access_token,
                refresh_token,
                });
                //redirect to react page with access_token and refresh token!
                // res.send(queryParams);
            res.redirect(`http://localhost:3000/?${queryParams}`); //sent over to react page to do final handling
            
        } else {
            res.redirect(`/?${querystring.stringify({ error: 'invalid_token' })}`);
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