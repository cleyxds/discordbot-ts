"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config();
const discord_js_1 = require("discord.js");
const client = new discord_js_1.Client();
client.on('ready', () => {
    console.log('Bot is running!');
});
client.on('message', (message) => {
    console.log(message.content);
});
client.login(process.env.DISCORD_TOKEN);
