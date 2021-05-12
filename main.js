const Discord = require("discord.js");
const bot = new Discord.Client();
const auth = require("./auth.json");
const Anpig = require("./Anpig.json");
var response = require("./response.json");
var muteroleid = "841734850872344597";
bot.login(auth.BOT_TOKEN);
bot.on("message", msg => {
    var role = msg.member.guild.roles.cache.find(role => role.name === "醜狗閉嘴");
    if (msg.content == "醜狗閉嘴") {
        if (msg.member.roles.cache.has(muteroleid)) {
            msg.channel.send("醜狗已經閉嘴了唷");
        }
        else {
            msg.channel.send("現在開始醜狗不會回你話了唷");
            msg.guild.members.cache.get(msg.author.id).roles.add(role);
        }
    }
    if (msg.content == "醜狗講話") {
        if (msg.member.roles.cache.has(muteroleid)) {
            msg.channel.send("現在開始醜狗會回你話了唷");
            msg.guild.members.cache.get(msg.author.id).roles.remove(role);
        }
        else {
            msg.channel.send("醜狗已經會回你了唷");
        }
    }
    if (msg.content == "醜狗測試") {
        if (msg.author.id == Anpig.id) {
            msg.channel.send("醜狗在線上唷");
        }
    }
    if (!msg.member.roles.cache.has(muteroleid)) {
        for (key in response) {
            if (msg.content == key) {
                msg.channel.send(response[key]);
            }
        } 
    }
});