const config = (global.config = require("./config.json"));
const { Client, Collection, Intents } = require("discord.js");
const client = (global.client = new Client({ intents: Object.values(Intents.FLAGS) }));

client.commands = new Collection();
require("./handlers/eventHandler");

client
	.login(config.token)
	.then(() => console.log("Discord bot connected."))
	.catch(() => console.error("Failed connect to the bot."));
