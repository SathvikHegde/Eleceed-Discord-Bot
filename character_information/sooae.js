module.exports = {
    name: 'sooae',
    description: "this is a sooae command!",
    execute(message, args, Discord){
        const sooaeembed = new Discord.MessageEmbed()
        .setColor('#0062ff')
        .setTitle('Sooae Choo')
        .addFields(
            {name:'**About**', value:'She is a member of an organization called Halla. She has a psychic ability that allows her to condense her awakened power into a sphere to attack. She is currently attending the Awakened Academy as a student representative of Halla.'},
            {name:'**Personality**', value:'Sooae Choo is quite mild mannered. She hesitates to hurt other awakeners with her power if she sees that they are much weaker than her but will do so if asked.'},
            {name:'**Abilities and Fighting Prowess**', value:'Sooae Choo has some experience in fighting and has great combat ability as she was chosen to be one of Hallas student representatives. She is much weaker than Jisuk Yoo and Subin Lee though. Her ability is Hallas signature power which is the ability to condense her awakened power into a sphere.'}

        )
        .setImage('https://vignette.wikia.nocookie.net/eleceed/images/4/4e/Sooae_Choo.png/revision/latest/scale-to-width-down/620?cb=20201125032529')
        message.channel.send(sooaeembed);
    }
}