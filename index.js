require('dotenv').config();
const express = require('express');
const app=express();
const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:8500',
  clientID: 'mbT97wqgosEnUmTYXXbG2TZZEcopqzgi',
  issuerBaseURL: 'https://dev-z57x2i4k.us.auth0.com'
};

app.use(auth(config));
const port=process.env.PORT || 82000;
app.get('/', (req, res) => {
  console.log("request")
  console.log(req.oidc)
  console.log(auth(config))
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.listen(port,()=>{
  console.log(`listening on http://localhost:${port}`)
})