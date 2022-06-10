const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies with server info!')
		.setDefaultMemberPermissions('0'),
	async execute(interaction) {
		await interaction.reply(`Total members: ${interaction.guild.memberCount}`);
	},
};
