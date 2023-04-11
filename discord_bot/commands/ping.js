const { executionAsyncResource } = require("async_hooks")
const { SlashCommandBuilder, InteractionCollector } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("reponde com 'pong!'"),

    async execute(interaction) {
        await interaction.reply("Pong")
    }
}