const Discord = require('discord.js');

exports.run = function (client, message, args) {
    let kanal = message.mentions.channels.first();
    let duyurumetni = args.join(" ").slice(22);
    if(!kanal) return message.channel.send(":x: Hata bir kanal etiketlemelisini@!");
  if(!duyurumetni) return message.channel.send(":x: Hata duyuru metni yazmalısınız!");
  message.delete();
  message.channel.send(":ballot_box_with_check: Başarıyla duyuruldu!");
    kanal.createWebhook("Duyuru", "https://discord.com/api/webhooks/793201182251417600/Z0UB0gRIqZxRwOdwlcq7zzmOUes2hY7OMcHA5jabL6ozSv6MTI96uENssBGsh5bK8dla")
    .then(webhook => webhook.edit("Duyuru", "https://discord.com/api/webhooks/793201182251417600/Z0UB0gRIqZxRwOdwlcq7zzmOUes2hY7OMcHA5jabL6ozSv6MTI96uENssBGsh5bK8dla")
        .then(wb => {
            const duyurucuPing = new Discord.WebhookClient(wb.id, wb.token);
            duyurucuPing.send(duyurumetni + "\n@here")
            duyurucuPing.delete()
        })
        .catch(console.error))
        .catch(console.error);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

module.exports.help = {
  name: 'duyuru',
  description: '',
  usage: ''
};