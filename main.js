const auth = require("./auth.json");
const response = require("./response.json");
const {Client, Intents} = require("discord.js");
const bot = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
bot.login(auth.token);
bot.on("messageCreate", msg => {
    var user = msg.member;
    var muterole = msg.member.guild.roles.cache.find(role => role.name === "醜狗閉嘴");
    if (msg.content == "醜狗閉嘴") {
        if (user.roles.cache.has(muterole.id)) {
            msg.channel.send("醜狗已經閉嘴了唷");
        }
        else {
            msg.channel.send("現在開始醜狗不會回你話了唷");
            user.roles.add(muterole).catch(console.error);
        }
    }
    else if (msg.content == "醜狗講話") {
        if (msg.member.roles.cache.has(muterole.id)) {
            msg.channel.send("現在開始醜狗會回你話了唷");
            user.roles.remove(muterole).catch(console.error);
        }
        else {
            msg.channel.send("醜狗已經會回你了唷");
        }
    }
    else if (!msg.member.roles.cache.has(muterole.id)) {
        for (key in response) {
            if (msg.content == key) {
                msg.channel.send(response[key]);
            }
        } 
    }
});