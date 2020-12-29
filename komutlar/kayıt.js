const Discord = require("discord.js");

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("MANAGE_NICKNAMES"))
return message.channel.send(
);
let member = message.mentions.members.first();
let asdasd = args[1]
let yas = args[3]
if (!member) return message.channel.send(":x: Bir Üye Etiketle!**");
member.removeRole('758589184368836618')
member.addRole('793111275584225312')
const embed = new Discord.RichEmbed()


.addField(`Test Roleplay`,
`\nKayıt Edilen Kullanıcı: ${member.user} \nKayıt Eden Yetkili: \`${message.author.username}\``)
client.channels.get('758589191386038282').send(embed)
};

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['wh'],
permLevel: 4
};
exports.help = {
name: "wh",
description: "wh",
usage: "wh"
};