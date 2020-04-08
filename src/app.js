require('dotenv/config')
const express = require('express')
const routes = require('./routes')
const cors = require('cors')
class App{
  constructor(){
    this.app = express();
    this.middleware()
  }

  middleware(){
    this.app.use(express.json())
    this.app.use(cors())
    this.app.use(routes);
  }
}

module.exports = new App().app
