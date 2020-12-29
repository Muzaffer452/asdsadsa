
const Discord = require('discord.js');
exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setDescription('Kullanım: t!hex  '));
const embed = new Discord.RichEmbed()
.setColor('PURPLE')
.setDescription('Hex odaya kaydedildi')
message.channel.send(embed)
const embed2 = new Discord.RichEmbed()
.setColor("PURLE")
.setDescription(`**${message.author.tag}** adlı kullanıcının eklettigi hex:`)
.addField("HEX", type)
.setThumbnail(message.author.avatarURL)
client.channels.get('758589185283194910').send(embed2);
};
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['hex'],
  permLevel: 4 
};
exports.help = {
  name: 'hex',
  description: 'hex',
  usage: 'hex'
};