//Import Libs
require("dotenv").config();

//Import Model
const User = require('../models/User')

//Const Data
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const scope = process.env.SCOPE;
const redirect_uri = process.env.REDIRECT_URI;

const createUser = (req, res) => {
    let userData = []
    const codeReq = req.body.code
    fetch(`https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&code=${codeReq}&grant_type=authorization_code&redirect_uri=${redirect_uri}`, {
        method: "POST"
    })
    .then(res => res.json())
    .then(data => {
        userData.push(data.access_token)
        userData.push(data.refresh_token)

        fetch(`https://id.twitch.tv/oauth2/validate`, {
            method: "GET",
            headers: {'Authorization': `OAuth ${data.access_token}`}
        })
        .then(res => res.json())
        .then(data => {
            userData.push(data.login)

            fetch(`https://api.twitch.tv/helix/users?login=${data.login}`, {
                method: "GET",
                headers: {
                    'Authorization' : `Bearer ${userData[0]}`,
                    'Client-Id' : client_id
                }
            })
            .then(res => res.json())
            .then(data => {
                
                let _data = {
                    user_id: data.data[0].id,
                    name: userData[2],
                    channel_name: data.data[0].display_name,
                    broadcaster_type: data.data[0].broadcaster_type,
                    description: data.data[0].description,
                    profile_image: data.data[0].profile_image_url,
                    offline_image: data.data[0].offline_image_url,
                    email: data.data[0].email,
                    account_createdAt: data.data[0].created_at,
                    access_token: userData[0],
                    refresh_token: userData[1]
                }

                let user = User.create(_data)
                res.status(200).json(user)
            })
        })
    })
}

module.exports = {
    createUser,
}