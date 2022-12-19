require('dotenv').config();

const botConfig = (channel) => {
    return {
        identity: {
          username: process.env.USER,
          password: process.env.PASSWORD_TOKEN
        },
        channels: channel
    }
}

module.exports = botConfig;