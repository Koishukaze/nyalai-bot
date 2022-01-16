const Discord = require('discord.js');
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

//Sends startup message in console
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
})

//Sets bot prefix to designated character
const prefix = ';';
const fs = require('fs');

client.commands = new Discord.Collection();

//Reads commands in commands folder
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

//Executes indiviudal command in commands folder
client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    }
});

//Login token
client.login(process.env.TOKEN);