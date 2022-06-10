const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sendmessage')
		.setDescription('Sends message to specified channel!')
		.addStringOption(option => option
			.setName('message')
			.setDescription('Message to be sent to target channel')
			.setRequired(true)
		)
		.addChannelOption(option => option
			.setName('channel')
			.setDescription('Target channel for messsage to be posted in.')
			.setRequired(false)
		)
		.addStringOption(option => option
			.setName('title')
			.setDescription('Title of messsage.')
			.setRequired(false)
		).setDefaultMemberPermissions('0'),
	async execute(interaction) {
		let targetChannel = interaction.options.getChannel('channel');
		const title = interaction.options.getString('title');
		const message = interaction.options.getString('message');

		if(!targetChannel) {
			targetChannel = interaction.channel;
		}

		// inside a command, event listener, etc.
		const exampleEmbed = new MessageEmbed()
			.setColor('#aadd00')
			.setTitle(title || '')
			.setAuthor({ name: interaction.user.username, iconURL: interaction.user.avatarURL() })
			.setDescription(message)
			.setTimestamp()
			.setFooter({ text: 'SECURITY: We will never DM you first!', iconURL: 'https://i.imgur.com/0ErWsRs.png' });

		targetChannel.send({ embeds: [exampleEmbed] });


		await interaction.reply('Message sent!');
	},
};
