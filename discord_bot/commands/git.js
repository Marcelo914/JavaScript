const { executionAsyncResource } = require("async_hooks")
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Comandos git:')
	.addFields(
        { name: '\u200B', value: '\u200B' },
		{ name: 'git init', value: 'Inicializa o git no diretorio', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)


module.exports = {
    data: new SlashCommandBuilder()
        .setName("git")
        .setDescription("Envia os principais comandos de git"),

    async execute(interaction) {
        await interaction.reply({embeds: [exampleEmbed] })
    }
}