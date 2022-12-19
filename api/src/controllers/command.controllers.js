const Command = require('../models/Command')

const createCommand = async(req, res) => {
    let data = {
        name: req.body.name,
        content: req.body.content,
        channel: req.body.channel,
    }

    let existsCommand = await Command.findOne({ name: data.name, channel:data.channel })
    if (existsCommand != null ) { return res.status(500).json({message: "The command already exists"}) }

    try {
        if (data.content === undefined || data.name === undefined || data.channel === undefined) {
            res.status(500).json({ message: "Missing fill in spaces" })
        } else {
            let command = await Command.create(data)
            res.status(200).json(command);
        }
    } catch (e) { res.status(404).json({ message: e.message }) }
}

const getCommand = async (req, res) => {
    const channelParam = req.params.channel;
    const nameParam = req.params.name;
    let command;
    try {
        command = await Command.findOne({
            name: nameParam,
            channel: channelParam
        })
        if(command === null) {
            res.status(500).json({message: "No Command Found"})
        } else {
            res.status(200).json(command)
        }
    } catch (e) {
        res.status(404).json({message: e.message})
    }
}

const getAllCommands = async (req, res) => {
    const channelParam = req.params.channel;

    Command
        .find({channel: channelParam})
        .then((data) => res.json(data))
        .catch((e) => res.json({ message: e.message }));
}

const editCommand = async (req, res) => {
    const channelParam = req.params.channel;
    const nameParam = req.params.name;

    const filter = { name: nameParam, channel: channelParam }
    const update = { content: req.body.content}

    try {
        let command = await Command.findOneAndUpdate(filter, update)
        if(command === null) {
            res.status(500).json({message: "Not Command Found"})
        } else {
            res.status(200).json(command)
        }     
    } catch (e) {
        res.status(404).json({message: e.message})
    }
}

const deleteCommand = async (req, res) => {
    const channelParam = req.params.channel;
    const nameParam = req.params.name;

    let command;
    try {
        command = await Command.findOneAndDelete({
            name: nameParam,
            channel: channelParam
        })
        if(command === null) {
            res.status(500).json({message: "Not Command Found"})
        } else {
            res.status(200).json(command)
        }
    } catch (e) {
        res.status(404).json({message: e.message})
    }
}

module.exports = {
    createCommand,
    editCommand,
    deleteCommand,
    getCommand,
    getAllCommands
}