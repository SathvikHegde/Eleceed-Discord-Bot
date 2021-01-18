module.exports = {
    name: 'jookyung',
    description: "this is a jookyung command!",
    execute(message, args, Discord){
        const jookyungembed = new Discord.MessageEmbed()
        .setColor('#0062ff')
        .setTitle('Jookyung Kim')
        .addFields(
            {name:'**About**', value:'She is a member of Mir. She has a psychic ability called Mind Control which is a subset of Mirs ability. She is currently attending the Awakened Academy as a student representative along with Iseul Ju.'},
            {name:'**Personality**', value:'Jookyung Kim is a bit of a trickster as shown by her constant smirks when she fought Gangwoo Choi.'},
            {name:'**Abilities and Fighting Prowess**', value:'Her ability is mind control which means that she can control humans and force them to experience illusions within their mind. When her opponents are being mind controlled, they lose the ability to do anything and can only stand there. She has not yet shown any fighting abilities.'}

        )
        .setImage('https://vignette.wikia.nocookie.net/eleceed/images/a/a7/Jookyung_Kim.png/revision/latest/scale-to-width-down/620?cb=20201125034255')
        message.channel.send(jookyungembed);
    }
}