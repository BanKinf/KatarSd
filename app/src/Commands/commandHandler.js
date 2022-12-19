/* 

{property} {name} {content}

*Property Methods*

-> {!katarcreate}
-> {!kataredit}
-> {!katardelete}

ej. !katarcreate !edad Tengo 15 años

----- CRUD ----- (PABLITO PROPUSO EL USAR REGEX) -> "/!katar(create|edit|delete) !([a-z0-9]+) (.*)/i"

!katarcreate !edad Mi edad es 15 años

!kataredit !edad Mi edad es 18 años

!katardelete !edad

*/
const getCommand = require('./getCommand')

const commandHandler = (client) => {
    //Get Command Function Call
    getCommand(client)
    client.on('message', (channel, tags, message, self) => {
        if (self) {return; }

        const channelName = channel.split("#")[1]
        const broadcasterBadge = tags.badges.broadcaster

        if (message.startsWith('!katar')) {

            if(broadcasterBadge === '1' || tags.mod === true) {
                let regex; 
            if (message.startsWith('!katardelete')) {
                regex = /!katar(delete) ([!a-z0-9]+)/
            } else {
                regex = /!katar(create|edit) ([!a-z0-9]+) (.*)/i
            }
        
            const match2 = message.match(regex)
        
            if (match2 === null) { return client.say(channel, `@${tags.username}, Error ocurred, for more information write !doc`) }

            let _data = {
                property: match2[1],
                name: match2[2],
                content: match2[3],
                channel: channelName
            }

            /*---------------------------------------------- CREATE COMMAND FETCH ----------------------------------------------*/

            if(match2[1] === "create") {
                fetch(`http://localhost:4000/api/command/create`, {
                    method: "POST",
                    body: JSON.stringify(_data),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                .then(res => {
                    if(res.status === 200) {
                        client.say(channel, `@${tags.username}, The command has been created!`)
                    } else {
                        if(res.status === 500) {
                            res.json()
                            .then(data => {
                                client.say(channel, `@${tags.username}, ${data.message}`)
                            })
                        }
                    }
                })
            }

            /*---------------------------------------------- EDIT COMMAND FETCH ----------------------------------------------*/

            if(match2[1] === "edit") {
                fetch(`http://localhost:4000/api/command/edit/${channelName}/${match2[2]}`,{
                    method: "PUT",
                    body: JSON.stringify(_data),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                .then(res => {
                    if(res.status === 200) {
                        client.say(channel, `@${tags.username}, The command has been edit!`)
                    } else {
                        if(res.status === 500) {
                            res.json()
                            .then(data => {
                                client.say(channel, `@${tags.username}, ${data.message}`)
                            })
                        } else {
                            client.say(channel, `@${tags.username}, An error occurred while editing the command`)
                        }
                    }
                })
            }

            /*---------------------------------------------- DELETE COMMAND FETCH ----------------------------------------------*/
            
            if(match2[1] === "delete") {
                fetch(`http://localhost:4000/api/command/delete/${channelName}/${match2[2]}`,{
                    method: "DELETE",
                    body: JSON.stringify(_data),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                .then(res => {
                    if(res.status === 200) {
                        client.say(channel, `@${tags.username}, The command has been delete!`)
                    } else {
                        if(res.status === 500) {
                            res.json()
                            .then(data => {
                                client.say(channel, `@${tags.username}, ${data.message}`)
                            })
                        } else {
                            client.say(channel, `@${tags.username}, An error occurred while removing the command`)
                        }
                    }
                })
            }
            } else { return client.say(channel, "You do not have sufficient permissions for this action") }
        }
    })
}

module.exports = commandHandler