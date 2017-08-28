var express = require('express')
    fs = require('fs')
    morgan = require('morgan')
    path = require('path')
    filePath = path.join(__dirname, '..', 'ec2.html')

var app = express()
    accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})

app.use(morgan('combined', {stream: accessLogStream}))

app.get('/', function (req, res) {
  res.sendFile(filePath)
})

app.listen(80, function () {
  console.log('Listening on port 80')
})
