const onConnectedHandler = (addr, port) => {
    return console.log(`* Bot connected to ${addr}:${port} *`);
}

const onDisconnectedHandler = () => {
    return console.log(`* Bot Disconnected *`)
}

module.exports = {
    onConnectedHandler,
    onDisconnectedHandler,
}