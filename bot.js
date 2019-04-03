const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("562309104748724265")
setInterval(function() {
channel.send(`SOB7AN ELAH W BI 7AMDIH`);
}, 30)
})

client.login(process.env.BOT_TOKEN);