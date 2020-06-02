import { config } from 'dotenv'
config();

import { Client } from 'discord.js';
const client: Client = new Client();

client.on('ready', () => {
  console.log('Bot is running!');
});

client.on('message', (message) => {
  console.log(message.content);
});

client.login(process.env.DISCORD_TOKEN);

