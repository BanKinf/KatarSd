const getCommand = (client) => {
    client.on('message', (channel, tags, message, self) => {

        const channelName = channel.split("#")[1]

        //Get first message word
        const firstMessageWord = message.split(" ")[0]

        //Close Conditions
        if (self) {return; }
        if (message.startsWith('!katar')) {return; }
        if (message.startsWith('http')) {return; }
        if (tags.username === "nightbot" || tags.username === "streamelements" || tags.username === "streamlabs" || tags.username === "moobot") {return; }

        //Fetch api from get command
        fetch(`http://localhost:4000/api/command/get/${channelName}/${firstMessageWord}`)
            .then(res => {
                if (res.status === 200) {
                    res.json()
                    .then(data => {
                    client.say(channel, data.content)
                })
            }
        })
    })
}

module.exports = getCommand