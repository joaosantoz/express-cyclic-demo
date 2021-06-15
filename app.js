const express = require('express')
const app = express()
const fs = require('fs')

app.get('/', (req, res) => {
  console.log('[hello-world] root handler called')
  res
    .set('x-powered-by', 'cyclic.sh')
    .send('<h1>Hello World!</h1>')
    .end()
})

app.use('*', (req,res) => {
  console.log('[hello-world] Star handler called')
  res
    .set('x-powered-by', 'cyclic.sh')
    .json({
      msg: "Not strickly part of the hello world but you get the picture.",
      at: new Date().toISOString(),
      method: req.method,
      hostname: req.hostname,
      ip: req.ip,
      path: req.params[0],
      query: req.query,
      headers: req.headers,
      cookies: req.cookies,
      env: process.env
    })
    .end()
})

module.exports = app
