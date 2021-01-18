module.exports = {
    name: 'suhan',
    description: "this is a suhan command!",
    execute(message, args, Discord){
        const suhanembed = new Discord.MessageEmbed()
        .setColor('#0062ff')
        .setTitle('')
        .addFields(
            {name:'About', value:'No Information Available'},
            {name:'Rank', value:'No Information Available'}

        )
        message.channel.send(suhanembed);
    }
}