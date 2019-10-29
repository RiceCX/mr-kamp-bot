const Discord = require("discord.js");
const Bot = new Discord.Client();
module.exports = async () => {
  Bot.on("ready", () => {
    console.log("Mr Kamp is ready.");
  });
  Bot.login(process.env.TOKEN);
};
