module.exports = {
	conf: {
		name: "mention",
		type: 2
	},
	
	run: async (client, m, interaction) => {
		const member = interaction.guild.members.cache.get(interaction.targetId);
		await interaction.reply({ content: member.toString(), ephemeral: true });
	}
};
