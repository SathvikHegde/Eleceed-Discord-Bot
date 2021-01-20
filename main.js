const Discord = require('discord.js');
const client = new Discord.Client();
const got = require('got');
 
const prefix = '-';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./character_information/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./character_information/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Bot is online!');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split();
    const command = args.shift().toLowerCase();
    
    console.log(command);
    console.log(args);
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }else if(command === 'whois jiwoo' || command === 'whois jiwoo seo'){
        client.commands.get('jiwoo').execute(message, args, Discord);
    }else if(command === 'whois boyoung' || command === 'whois boyoung choi'){
        client.commands.get('boyoung').execute(message, args, Discord);
    }else if(command === 'whois drdelein' || command === 'whois delein' || command === 'whois dr delein'){
        client.commands.get('drdelein').execute(message, args, Discord);
    }else if(command === 'whois gangwoo' || command === 'whois gangwoo choi'){
        client.commands.get('gangwoo').execute(message, args, Discord);
    }else if(command === 'whois giwook' || command === 'whois giwook jang'){
        client.commands.get('giwook').execute(message, args, Discord);
    }else if(command === 'whois inhyuk' || command === 'whois inhyuk goo'){
        client.commands.get('inhyuk').execute(message, args, Discord);
    }else if(command === 'whois iseul' || command === 'whois iseul ju'){
        client.commands.get('iseul').execute(message, args, Discord);
    }else if(command === 'whois jaehyuk' || command === 'whois jaehyuk lee'){
        client.commands.get('jaehyuk').execute(message, args, Discord);
    }else if(command === 'whois jeongsu' || command === 'whois jeongsu lee'){
        client.commands.get('jeonjsu').execute(message, args, Discord);
    }else if(command === 'whois jihye' || command === 'whois jihye lee'){
        client.commands.get('jihye').execute(message, args, Discord);
    }else if(command === 'whois jisuk' || command === 'whois jisuk yoo'){
        client.commands.get('jisuk').execute(message, args, Discord);
    }else if(command === 'whois jiyoung' || command === 'whois jiyoung yoo'){
        client.commands.get('jiyoung').execute(message, args, Discord);
    }else if(command === 'whois jookyung' || command === 'whois jookyung kim'){
        client.commands.get('jookyung').execute(message, args, Discord);
    }else if(command === 'whois kayden' || command === 'whois kayden'){
        client.commands.get('kayden').execute(message, args, Discord);
    }else if(command === 'whois klein' || command === 'whois klein brothers'){
        client.commands.get('kleinbrothers').execute(message, args, Discord);
    }else if(command === 'whois seongha' || command === 'whois seongha park'){
        client.commands.get('seongha').execute(message, args, Discord);
    }else if(command === 'whois seongik' || command === 'whois seongik han' || command === 'whois han' || command === 'whois kfcdean'){
        client.commands.get('seongik').execute(message, args, Discord);
    }else if(command === 'help'){
        client.commands.get('help').execute(message, args, Discord);
    }else if(command === 'commands'){
        client.commands.get('commands').execute(message, args, Discord);
    }else if(command === 'whois sooae' || command === 'whois sooae choo'){
        client.commands.get('sooae').execute(message, args, Discord);
    }else if(command === 'whois subin' || command === 'whois subin lee'){
        client.commands.get('subin').execute(message, args, Discord);
    }else if(command === 'whois sucheon' || command === 'whois sucheon kang'){
        client.commands.get('sucheon').execute(message, args, Discord);
    }else if(command === 'whois taeyoung' || command === 'whois taeyoung ki'){
        client.commands.get('taeyoung').execute(message, args, Discord);
    }else if(command === 'whois wooin'){
        client.commands.get('wooin').execute(message, args, Discord);
    }else if(command === 'meme'){
        const embed = new Discord.MessageEmbed()
        got('https://www.reddit.com/r/Animemes/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            embed.setTitle(`${memeTitle}`)
            embed.setURL(`${memeUrl}`)
            embed.setImage(memeImage)
            embed.setColor('RANDOM')
            embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
            message.channel.send(embed);
        })
    }
});
 
client.login(process.env.token);