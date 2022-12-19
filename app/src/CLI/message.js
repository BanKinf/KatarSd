const onMessageHandler = (channel, tags, message, self) => {
    if (self) {
        return console.log(`->> [Bot Message]: ${message}`);
    }
    console.log(`${channel} [${tags.username}] ${message}`);
}

module.exports = {
    onMessageHandler
}