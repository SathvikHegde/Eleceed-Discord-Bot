module.exports = {
    name: 'commands',
    description: "this is a commands command!",
    execute(message, args, Discord){
        const commandsembed = new Discord.MessageEmbed()
        .setColor('#0062ff')
        .setTitle('Commands')
        .addFields(
            {name:'`-ping`', value:'Displays the latency between your Message and the Bot'},
            {name:'`-whois [character name]`', value:'Displays the information about a character\n**Note: This command contains HEAVY SPOILERS about Eleceed**'}

        )
        message.channel.send(commandsembed);
    }
}