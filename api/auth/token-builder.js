const jwt = require('jsonwebtoken');

function buildToken(user){
    // return `faketoken for user ${user.username}`;
    const payload = {
        subject: user.id,
        username: user.username,
        role : user.role,
    }
}

module.exports = {buildToken};