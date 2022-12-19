//Imports
const { onConnectedHandler, onDisconnectedHandler } = require("./botState")
const { onMessageHandler} = require("./message")
 
const cliMessages = (client) => {
    client.on('connected', onConnectedHandler);
    client.on('disconnected', onDisconnectedHandler);
    client.on('message', onMessageHandler);
}

module.exports = cliMessages