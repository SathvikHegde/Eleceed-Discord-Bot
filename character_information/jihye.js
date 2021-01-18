module.exports = {
    name: 'jihye',
    description: "this is a jihye command!",
    execute(message, args, Discord){
        const jihyeembed = new Discord.MessageEmbed()
        .setColor('#0062ff')
        .setTitle('Jihye Lee')
        .addFields(
            {name:'**About**', value:'She is an independent awakener who attends the Awakened Academy. she was originally not involved in the Awakened World as she had never actually used her powers on another awakener until she attended the Academy.'},
            {name:'**Personality**', value:'Jihye has a bit of a competitive attitude when fighting but does care about people somewhat. She apologizes to people shes badly hurt and she doesnt hesitate to smile at people. She bluffs about her powers in order to make it seem a bit more powerful. She is insecure about her power in front of people she knows are stronger than her.'},
            {name:'**Abilities and Fighting Prowess**', value:'She has poor fighting abilities and barely any combat power as shown when she was unable to block against Jiwoo Seos punch. Her ability is also limited to keeping a person up for a small amount of time however she can lift a person up around 65 feet. Her ability is psychokinesis.'}

        )
        .setImage('https://vignette.wikia.nocookie.net/eleceed/images/f/ff/Jihye_Lee.png/revision/latest/scale-to-width-down/620?cb=20200902031349')
        message.channel.send(jihyeembed);
    }
}