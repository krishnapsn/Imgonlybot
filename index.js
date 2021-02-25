const Discord = require('discord.js');
const client = new Discord.Client();

//functionality
client.on('message', message => {
    if(message.channel.name == 'walls-and-aesthetic'){
        if (message.attachments.size <= 0) {
            message.delete({ timeout: 1 });
        }
    }
}); 

client.login(process.env.BOT_TOKEN);
