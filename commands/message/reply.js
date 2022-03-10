module.exports = {
	conf: {
		name: "repeat",
		type: 3
	},
	run: async (client, interaction) => {
		const channel = interaction.guild.channels.cache.get(interaction.channelId);
		const message = await channel.messages.fetch(interaction.targetId);
		await interaction.reply({ content: message.content, ephemeral: true });
	}
};
