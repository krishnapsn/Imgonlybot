const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if(message.channel.name == 'general'){
        if (message.attachments.size <= 0) {
            message.delete({ timeout: 1 });
            // console.log('Image detected');
        }
        // else{
        //     message.delete({ timeout: 1 });
        //     console.log('Text deleted');
        // }
    }
}); 

client.login(process.env.BOT_TOKEN);
