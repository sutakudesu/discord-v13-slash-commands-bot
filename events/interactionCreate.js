const client = global.client;

module.exports = {
	name: "interactionCreate",
	run: async (interaction) => {
		if (interaction.type !== "APPLICATION_COMMAND" && !interaction.isCommand()) return;
		const command = client.commands.get(interaction.commandName);
		const message = null;
		const args = [];

		if (command) {
			interaction.options.data.forEach((option) => {
				if (option.value) args.push(option.value);
			})

			command.run(client, message, interaction, args);
		}
	}
};

