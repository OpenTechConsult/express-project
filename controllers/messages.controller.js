const path = require('path')

function getMessages(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'images', 'jhipster-logo.png'))
    // res.send('<ul><li>Hello Albert!</li></ul>')
}

function postMessage(req, res) {
    console.log('Updating messages...')
}

module.exports = {
    getMessages,
    postMessage
}