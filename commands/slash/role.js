module.exports = {
	conf: {
		name: "role",
		description: "Rol al ver.",
		options: [
			{ type: 6, name: "kullanıcı", required: true, description: "Bir kullanıcı etiketle." },
			{ type: 8, name: "rol", required: true, description: "Bir rol belirt." },
			{
				type: 3,
				name: "sebep",
				required: true,
				description: "Bir sebep belirt.",
				choices: [
					{ name: "Sebep 1", value: "Yetki vermek istiyorum." },
					{ name: "Sebep 2", value: "Tekrar yetki vermek istiyorum." }
				]
			}
		]
	},
	run: async (client, message, interaction, args) => {
		const guild = message ? message.guild : interaction.guild;
		const role = message ? message.mentions.roles.first() : guild.roles.cache.get(args[1]);
		const member = message ? message.mentions.members.first() : guild.members.cache.get(args[0]);

		if (!member || !role) return message?.reply({ content: `Lütfen argümanları doğru giriniz \`${global.config.prefix}role <Kullanıcı> <Rol>\`.` });

		if (member.roles.cache.has(role.id)) {
			member.roles.remove(role).catch(() => {});
			await message?.reply({ content: `${member.user.toString()} adlı kullanıcıdan ${role.toString()} rolü alındı.` });
			await interaction?.reply({ content: `${member.user.toString()} adlı kullanıcıdan ${role.toString()} rolü alındı.`, ephemeral: true });
		} else {
			member.roles.add(role).catch(() => {});
			await message?.reply({ content: `${member.user.toString()} adlı kullanıcıdan ${role.toString()} rolü alındı.` });
			await interaction?.reply({ content: `${member.user.toString()} adlı kullanıcıya ${role.toString()} rolü verildi.`, ephemeral: true });
		}
	}
};
