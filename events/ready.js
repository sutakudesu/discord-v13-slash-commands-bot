const client = global.client;
const { readdirSync } = require("fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");

module.exports = {
	name: "ready",
	run: async () => {
		const commands = [];
		const rest = new REST({ version: "10" }).setToken(client.token);

		readdirSync("./commands").forEach((directory) => {
			readdirSync(`./commands/${directory}`).forEach((file) => {
				const command = require(`../commands/${directory}/${file}`);
				client.commands.set(command.conf.name, command);
				commands.push(command.conf);
			});
		});

		await rest
			.put(Routes.applicationCommands(client.user.id), { body: commands })
			.then(() => console.log("All commands loaded."))
			.catch((e) => console.error(e));
	}
};
