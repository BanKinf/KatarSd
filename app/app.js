// const prompt = require('prompt-sync')({sigint: true});
// const channel = prompt('what channel?')
const channel = ['twenz__', 'banking83']

//Tmi Client Create
const tmi = require('tmi.js');
const client = new tmi.client(require("./src/Config/config")(channel));
client.connect();

//Cli Messages
const cliMessages = require('./src/CLI/index');
cliMessages(client);

//Commands Chat Handler (create, get, edit, delete)
const commandHandler = require('./src/Commands/commandHandler');
commandHandler(client)

