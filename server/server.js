var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const querystring = require('querystring');

var SpotifyWebApi = require('spotify-web-api-node');

require('dotenv').config()

var app = express()


app.use(bodyParser.json())
app.use(cors())

const FRONTEND_URI = "http://localhost:3000"


app.get('/login', function (req, res) {
    const scope =
      'user-read-private user-read-email user-read-recently-played user-top-read user-follow-read user-follow-modify playlist-read-private playlist-read-collaborative playlist-modify-public';

      res.redirect(
        `https://accounts.spotify.com/authorize?${querystring.stringify({
          response_type: 'code',
          client_id: process.env.CLIENT_ID,
          scope: scope,
          redirect_uri: process.env.REDIRECT_URI,
        })}`,
      );
})

app.get('/callback', function (req, res) {
    const code = req.query.code || null;
    if (code){
        var spotifyApi = new SpotifyWebApi({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            redirectUri: process.env.REDIRECT_URI
          });
        
        spotifyApi.authorizationCodeGrant(code).then(data => {
            const body = {
              accessToken: data.body.access_token,
              refreshToken: data.body.refresh_token,
              expiresIn: data.body.expires_in
          }

            res.redirect(
              `${FRONTEND_URI}/?${querystring.stringify(body)}`,
            );
        })
        .catch((e)=>{
            console.log(e)
            res.sendStatus(400)
        })
    }
    else res.sendStatus(400)
})


app.post('/refresh_token', function (req, res) {
  const refreshToken = req.body.refreshToken;
  console.log(refreshToken)
  if (refreshToken){
    var spotifyApi = new SpotifyWebApi({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      redirectUri: process.env.REDIRECT_URI
    });
    spotifyApi.setRefreshToken(refreshToken);
    spotifyApi.refreshAccessToken().then(data => {
      res.json({
        accessToken: data.body.access_token,
        expiresIn: data.body.expires_in
      })
    })
    .catch(e =>{
      console.log(e)
      res.sendStatus(400)
    })
  }
  else res.sendStatus(400)
})



app.listen(process.env.PORT, () =>{
    console.log(`Listening on: http://localhost:${process.env.PORT}`)
})
