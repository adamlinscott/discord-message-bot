const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('status')
		.setDescription('Used to test status of bot.')
		.setDefaultMemberPermissions('0'),
	async execute(interaction) {
		await interaction.reply('I am alive!');
	},
};
