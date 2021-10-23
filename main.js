require('dotenv').config();
const mongoose = require("mongoose");

const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const prefix = "-";

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

mongoose.connect(process.env.MongoDBUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.login(process.env.token);
