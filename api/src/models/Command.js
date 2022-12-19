const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommandSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    channel: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

module.exports = Command = mongoose.model('Command', CommandSchema);