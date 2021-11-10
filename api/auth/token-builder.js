const jwt = require('jsonwebtoken');
const {secret_string} = require('../../config')

function buildToken(user){
    // return `faketoken for user ${user.username}`;
    const payload = {
        subject: user.id,
        username: user.username,
        role : user.role,
    }

    const options ={
        expiresIn: '1d',
    }

    return jwt.sign(payload, secret_string, options)
}

module.exports = {buildToken};