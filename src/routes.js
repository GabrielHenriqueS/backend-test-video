const {Router} = require('express')
const twilio = require('twilio')
const {AccessToken} = twilio.jwt
const { VideoGrant } = AccessToken

const routes = Router();

routes.get('/auth', (req,res) => {
  req.userId = 1

  const id = req.userId

  const token = new AccessToken(
    process.env.SID_TWILIO,
    process.env.TWILIO_API_KEY,
    process.env.TWILIO_API_SECRET
  );

  const videoGrant = new VideoGrant()
  token.addGrant(videoGrant)
  token.identity = id

  res.send({token: token.toJwt()})


})

module.exports = routes