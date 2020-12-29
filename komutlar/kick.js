const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`kick` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  const kick = new Discord.RichEmbed()
  .addField(`**GIBRIS POLİS Kick Sistemi`, `${user.username}#${user.discriminator} adlı kişi ${reason} sebebiyle sürgün edildi.**`)

  if (reason.length < 1) return message.reply('Uzaklaştırmak istediginiz kişiyi etiketleyin.');
  if (message.mentions.users.size < 1) return message.reply('Sebep belirtin').catch(console.error);

  if (!message.guild.member(user).kickable) return message.reply('Yetkilileri sunucudan atamam.');
  message.guild.member(user).kick();

  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['at'],
  permLevel: 4
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'kick [kullanıcı] [sebep]'
};