module.exports = {
    name: 'jiwoo',
    description: "this is a jiwoo command!",
    execute(message, args, Discord){
        const jiwooembed = new Discord.MessageEmbed()
        .setColor('#0062ff')
        .setTitle('Jiwoo Seo')
        .addFields(
            {name:'About', value:'No Information Available'},
            {name:'Rank', value:'No Information Available'}

        )
        message.channel.send(jiwooembed);
    }
}