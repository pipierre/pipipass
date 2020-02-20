const Discord = require("discord.js");
const Client = new Discord.Client();
var prefix = "!";

Client.login("Njc5Nzc2MzIxNjcyMzE0ODk1.Xk21hQ.SCpg_VHKzD4crlkl_a-avvElRi0");

Client.on("message", message =>{
if(!message.guild) return
if(message.content === prefix + "pipi"){
    message.channel.send(" Le PipiPass est actuellement disponible :)" + message.author + ".")
}
});
