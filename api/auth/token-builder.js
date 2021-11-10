const jwt = require('jsonwebtoken');
const {TOKEN_SECRET} = require('../../config/index')

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

    return jwt.sign(payload, TOKEN_SECRET, options)
}

module.exports = {buildToken};