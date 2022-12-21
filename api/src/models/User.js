const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    channelId:          { type: Number, require: true },
    name:               { type: String, require: true },
    channel_name:       { type: String, require: true },
    broadcaster_type:   { type: String },
    description:        { type: String, require: true },
    profile_image:      { type: String, require: true },
    offline_image:      { type: String, require: true },
    email:              { type: String, require: true },
    account_createdAt:  { type: String, require: true },
    acces_token:        { type: String, require: true },
    refresh_token:      { type: String, require: true }
}, {
    timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);