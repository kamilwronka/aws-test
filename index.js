const express = require('express');
const aws = require('aws-sdk');

const app = express()
const PORT = 4000

//process.env.ZMIENNA

app.use(express.static('static'))

// app.get('/', (req, res) => {
//     res.send(`<html>${PORT}</html>`)
// })

app.listen(PORT, () => {
    console.debug('App is listening on port %s', PORT)
})