const client = global.client;
const config = global.config;

module.exports = {
	name: "messageCreate",
	run: async (message) => {
		const prefix = config.prefix.find((x) => message.content.toLowerCase().startsWith(x));
		if (!prefix || !message.guild || message.author.bot) return;
		let args = message.content.substring(prefix.length).trim().split(" ");
		const commandName = args[0].toLowerCase();
		const interaction = null;
		args = args.splice(1);

		const command = client.commands.get(commandName);
		if (!command) return;
		command.run(client, message, interaction, args);
	}
};
