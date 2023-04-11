const { executionAsyncResource } = require("async_hooks")
const { SlashCommandBuilder, InteractionCollector } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Minha playlist do spotify"),

    async execute(interaction) {
        await interaction.reply("playlistlink")
    }
}