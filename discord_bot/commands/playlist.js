const { executionAsyncResource } = require("async_hooks")
const { SlashCommandBuilder, InteractionCollector } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Minha playlist do spotify"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/222R5ewKDe6P2teS7yL12C?si=c44f2f488938408a")
    }
}